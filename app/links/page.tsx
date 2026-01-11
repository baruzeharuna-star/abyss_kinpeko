"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import GradientBackground from "../components/GradientBackground";

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
        className={`relative text-gray-900 py-16 md:py-20 overflow-hidden min-h-[400px] pt-20 md:pt-24 transition-all duration-1000 ${
          isVisible.hero ? "opacity-100" : "opacity-0"
        }`}
      >
        <GradientBackground variant="hero" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-16 bg-gradient-to-r from-accent-500 to-primary-600 rounded-full animate-gradient"></div>
              <p className="text-sm md:text-base font-medium text-primary-600 tracking-wider uppercase">
                Links
              </p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8 text-gradient">
              リンク集
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
              SNSや委託販売ショップへの<br />
              リンクをまとめています
            </p>
          </div>
        </div>
      </section>

      {/* リンク一覧セクション */}
      <section
        ref={linksRef}
        className={`bg-gray-50 py-12 md:py-16 transition-all duration-1000 ${
          isVisible.links ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1.5 w-16 bg-gradient-to-r from-accent-500 via-accent-400 to-primary-600 rounded-full transition-all duration-500"></div>
              <p className="text-sm font-bold text-primary-700 tracking-wider uppercase">
                External Links
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              外部リンク
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {links.map((link, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-md hover:scale-[1.01] transition-all duration-300 border border-gray-200 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{link.icon}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-primary-900 group-hover:text-primary-600 transition-colors">
                    {link.title}
                  </h3>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">
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
                    <p className="text-xs text-gray-600">QRコード</p>
                    <img
                      src={generateQRCode(link.url)}
                      alt={`${link.title}のQRコード`}
                      className="w-32 h-32 bg-white p-2 rounded-lg border border-gray-200"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 委託販売ショップセクション（将来追加用） */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">
              委託販売ショップ
            </h3>
            <p className="text-gray-700">
              委託販売ショップの情報は準備中です
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
