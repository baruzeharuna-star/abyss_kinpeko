"use client";

import { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function VideoBackground({ src, poster, className = "" }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [posterImage, setPosterImage] = useState<string | null>(poster || null);

  useEffect(() => {
    // posterが指定されている場合はそれを使用
    if (poster) {
      setPosterImage(poster);
      return;
    }

    // posterが指定されていない場合、動画の最初のフレームを抽出
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

    // 動画のメタデータが読み込まれたら最初のフレームをキャプチャ
    const handleLoadedData = () => {
      if (video.readyState >= 2) {
        // 動画を一時的に再生位置を0に設定
        video.currentTime = 0;
      }
    };

    const handleSeeked = () => {
      captureFrame();
      // キャプチャ後はイベントリスナーを削除
      video.removeEventListener("seeked", handleSeeked);
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("seeked", handleSeeked);

    // 既に読み込まれている場合
    if (video.readyState >= 2) {
      video.currentTime = 0;
      video.addEventListener("seeked", handleSeeked);
    }

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("seeked", handleSeeked);
    };
  }, [src, poster]);

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
      
      {/* 動画（768px以上で表示、prefers-reduced-motionでは非表示） */}
      {/* フレーム抽出用の非表示動画（モバイルのみ） */}
      {!poster && (
        <video
          ref={videoRef}
          muted
          playsInline
          preload="metadata"
          className="absolute opacity-0 pointer-events-none md:hidden"
          style={{ width: "1px", height: "1px" }}
        >
          <source src={src} type="video/mp4" />
        </video>
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
