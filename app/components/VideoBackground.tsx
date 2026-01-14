"use client";

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function VideoBackground({ src, poster, className = "" }: VideoBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* モバイル用グラデーション背景（768px未満で表示） */}
      <div
        className="absolute inset-0 md:hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700"
        aria-hidden="true"
      >
        {/* テクスチャ効果 */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px]" />
      </div>
      
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
