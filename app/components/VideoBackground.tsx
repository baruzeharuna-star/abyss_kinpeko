"use client";

import { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  className?: string;
  hideMobileImage?: boolean; // スマホで画像を非表示にしてグラデーションにするか
  lazy?: boolean; // 遅延読み込みするか（デフォルト: true）
}

export default function VideoBackground({ src, poster, className = "", hideMobileImage = false, lazy = true }: VideoBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(!lazy);
  const [shouldLoadImage, setShouldLoadImage] = useState(!lazy);
  const imageRef = useRef<HTMLImageElement>(null);

  // 画像のプリロード
  useEffect(() => {
    if (!poster || hideMobileImage || shouldLoadImage) return;

    // 画像をプリロード
    const img = new Image();
    img.src = poster;
    img.loading = "eager";
    
    // 読み込み完了時に状態を更新
    img.onload = () => {
      setShouldLoadImage(true);
    };
    img.onerror = () => {
      setShouldLoadImage(true); // エラーでも表示を試みる
    };
  }, [poster, hideMobileImage, shouldLoadImage]);

  useEffect(() => {
    if (!lazy || shouldLoadVideo) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadVideo(true);
            // 画像は既にプリロードされているので、すぐに表示
            if (poster && !hideMobileImage) {
              setShouldLoadImage(true);
            }
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "200px", // 200px手前で読み込み開始（スマホでの読み込み速度向上）
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [lazy, shouldLoadVideo, poster, hideMobileImage]);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* モバイル用背景（768px未満で表示） */}
      {hideMobileImage ? (
        // 白背景（ヒーローセクション用）
        <div
          className="absolute inset-0 md:hidden bg-white"
          aria-hidden="true"
        />
      ) : (
        // 画像背景（他のセクション用、プリロード済み）
        poster && (
          <img
            ref={imageRef}
            src={shouldLoadImage ? poster : undefined}
            alt=""
            className="absolute inset-0 w-full h-full object-cover md:hidden"
            loading="eager"
            fetchPriority="high"
            style={{
              opacity: shouldLoadImage ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
            aria-hidden="true"
          />
        )
      )}
      
      {/* 表示用動画（768px以上で表示、prefers-reduced-motionでは非表示） */}
      {shouldLoadVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="video-background absolute min-w-full min-h-full w-auto h-auto object-cover hidden md:block"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <source src={src} type="video/mp4" />
          {/* フォールバック：ブラウザが動画をサポートしない場合 */}
        </video>
      )}
    </div>
  );
}
