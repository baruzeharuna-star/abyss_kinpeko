"use client";

import { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  className?: string;
}

// 動画ファイル名から背景画像のパスを自動生成
function getBackgroundImagePath(videoSrc: string): string {
  // 動画ファイル名を取得（例: /videos/water-background_hero.mp4 → water-background_hero）
  const videoFileName = videoSrc.split("/").pop()?.replace(/\.(mp4|webm|ogg)$/i, "") || "";
  // 背景画像のパスを生成（例: /images/background/water-background_hero.png）
  return `/images/background/${videoFileName}.png`;
}

export default function VideoBackground({ src, poster, className = "" }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  // posterが指定されていない場合、動画ファイル名から自動推測
  const defaultPoster = poster || getBackgroundImagePath(src);
  const [posterImage, setPosterImage] = useState<string | null>(defaultPoster);

  useEffect(() => {
    // 画像が存在するか確認
    const img = new Image();
    
    img.onload = () => {
      // 画像が存在する場合、それを使用
      setPosterImage(defaultPoster);
    };
    
    img.onerror = () => {
      // 画像が存在しない場合、動画フレームを抽出
      const video = videoRef.current;
      if (!video) return;

      const captureFrame = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = video.videoWidth || 1920;
          canvas.height = video.videoHeight || 1080;
          const ctx = canvas.getContext("2d");
          
          if (ctx) {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const dataURL = canvas.toDataURL("image/webp", 0.8);
            setPosterImage(dataURL);
          }
        } catch (error) {
          console.warn("Failed to capture video frame:", error);
        }
      };

      const handleLoadedData = () => {
        if (video.readyState >= 2) {
          video.currentTime = 0;
        }
      };

      const handleSeeked = () => {
        captureFrame();
        video.removeEventListener("seeked", handleSeeked);
      };

      video.addEventListener("loadeddata", handleLoadedData);
      video.addEventListener("seeked", handleSeeked);

      if (video.readyState >= 2) {
        video.currentTime = 0;
        video.addEventListener("seeked", handleSeeked);
      }

      return () => {
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("seeked", handleSeeked);
      };
    };
    
    img.src = defaultPoster;
  }, [src, defaultPoster]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* モバイル用poster画像（768px未満で表示） */}
      {posterImage && (
        <div
          className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${posterImage})`,
          }}
          aria-hidden="true"
        />
      )}
      
      {/* フレーム抽出用の非表示動画（画像が存在しない場合のフォールバック用） */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="metadata"
        className="absolute opacity-0 pointer-events-none"
        style={{ width: "1px", height: "1px" }}
      >
        <source src={src} type="video/mp4" />
      </video>
      
      {/* 表示用動画（768px以上で表示、prefers-reduced-motionでは非表示） */}
      <video
        autoPlay
        loop
        muted
        playsInline
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
    </div>
  );
}
