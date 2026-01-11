"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import VideoBackground from "../components/VideoBackground";

interface LinkItem {
  title: string;
  url: string;
  description: string;
  icon: string;
  category: "sns" | "shop" | "other";
}

const links: LinkItem[] = [
  {
    title: "X (Twitter)",
    url: "https://x.com/aquarium621",
    description: "最新情報や日常の様子をツイートしています",
    icon: "🐦",
    category: "sns",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/kinpeco_aquarium",
    description: "キンペコの写真や動画を投稿しています",
    icon: "📷",
    category: "sns",
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/@aquarium-abyss",
    description: "キンペコの動画コンテンツを配信しています",
    icon: "▶️",
    category: "sns",
  },
];

export default function LinksPage() {
  const heroRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    links: false,
  });

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const createObserver = (ref: React.RefObject<HTMLElement>, key: keyof typeof isVisible) => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [key]: true }));
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -100px 0px",
        }
      );

      observer.observe(ref.current);
      observers.push(observer);
    };

    createObserver(heroRef, "hero");
    createObserver(linksRef, "links");

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const generateQRCode = (url: string) => {
    // QRコード生成APIを使用（Google Charts API）
    const size = 200;
    return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}`;
  };

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section
        ref={heroRef}
        className={`relative text-white py-32 md:py-40 overflow-hidden transition-all duration-1000 ${
          isVisible.hero ? "opacity-100" : "opacity-0"
        }`}
      >
        <VideoBackground src="/videos/water-background_hero.mp4" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm md:text-base font-medium text-white/80 mb-4 tracking-wider uppercase">
              Links
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-white">
              リンク集
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
              SNSや委託販売ショップへの<br />
              リンクをまとめています
            </p>
          </div>
        </div>
      </section>

      {/* リンク一覧セクション */}
      <section
        ref={linksRef}
        className={`bg-white py-[5px] transition-all duration-1000 ${
          isVisible.links ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mx-[5px]">
          <div className="relative p-[5px] rounded-2xl shadow-2xl overflow-hidden">
            <VideoBackground src="/videos/water-background_content.mp4" />
            <div className="relative z-10 p-8 md:p-12">
              <div className="mb-16">
                <p className="text-sm font-medium text-white/90 mb-2 tracking-wider uppercase drop-shadow-lg">
                  External Links
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
                  外部リンク
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {links.map((link, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{link.icon}</span>
                        <h3 className="text-xl font-bold text-white drop-shadow-lg">
                          {link.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-white/90 mb-4 drop-shadow-md text-sm leading-relaxed">
                      {link.description}
                    </p>
                    <div className="flex flex-col gap-4">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg transition-colors text-sm"
                      >
                        リンクを開く →
                      </a>
                      <div className="flex flex-col items-center gap-2">
                        <p className="text-xs text-white/80 drop-shadow-md">QRコード</p>
                        <img
                          src={generateQRCode(link.url)}
                          alt={`${link.title}のQRコード`}
                          className="w-32 h-32 bg-white p-2 rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 委託販売ショップセクション（将来追加用） */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
                  委託販売ショップ
                </h3>
                <p className="text-white/90 drop-shadow-md">
                  委託販売ショップの情報は準備中です
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
