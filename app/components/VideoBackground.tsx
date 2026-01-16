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
  const [isMobile, setIsMobile] = useState(false);
  const imageLoadedRef = useRef(false);

  // モバイル判定
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    // モバイルでは動画を読み込まない
    if (isMobile) {
      setShouldLoadVideo(false);
      return;
    }

    if (!lazy || shouldLoadVideo) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadVideo(true);
            // 画像も同時に読み込み開始
            if (poster && !hideMobileImage) {
              setShouldLoadImage(true);
            }
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: isMobile ? "50px" : "200px", // モバイルでは小さく
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [lazy, shouldLoadVideo, poster, hideMobileImage, isMobile]);

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
        // 画像背景（他のセクション用）
        poster && shouldLoadImage && (
          <img
            src={poster}
            alt=""
            className="absolute inset-0 w-full h-full object-cover md:hidden"
            loading="lazy"
            fetchPriority="high"
            onLoad={() => {
              imageLoadedRef.current = true;
            }}
            aria-hidden="true"
          />
        )
      )}
      
      {/* 表示用動画（768px以上で表示、モバイルでは完全にレンダリングしない、prefers-reduced-motionでは非表示） */}
      {!isMobile && shouldLoadVideo && (
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
            willChange: "transform",
          }}
        >
          <source src={src} type="video/mp4" />
          {/* フォールバック：ブラウザが動画をサポートしない場合 */}
        </video>
      )}
    </div>
  );
}
