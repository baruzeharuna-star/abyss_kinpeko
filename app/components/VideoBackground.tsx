"use client";

import { useEffect } from "react";

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function VideoBackground({ src, poster, className = "" }: VideoBackgroundProps) {
  // 画像のプリロード
  useEffect(() => {
    if (poster) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = poster;
      link.fetchPriority = "high";
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [poster]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* モバイル用poster画像（768px未満で表示、posterが指定されている場合のみ） */}
      {poster && (
        <img
          src={poster}
          alt=""
          className="absolute inset-0 w-full h-full object-cover md:hidden"
          loading="eager"
          fetchPriority="high"
          aria-hidden="true"
        />
      )}
      
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
