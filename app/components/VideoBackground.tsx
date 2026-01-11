"use client";

interface VideoBackgroundProps {
  src: string;
  className?: string;
}

export default function VideoBackground({ src, className = "" }: VideoBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute min-w-full min-h-full w-auto h-auto object-cover"
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
