"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface LinkItem {
  title: string;
  url: string;
  description: string;
  icon: string;
  category: "sns" | "shop" | "other";
  gradient: string;
  shadowColor: string;
}

const links: LinkItem[] = [
  {
    title: "YouTube",
    url: "https://www.youtube.com/@aquarium-abyss",
    description: "キンペコの動画コンテンツを配信しています",
    icon: "▶️",
    category: "sns",
    gradient: "from-red-500 to-red-600",
    shadowColor: "shadow-red-500/40",
  },
  {
    title: "X (Twitter)",
    url: "https://x.com/aquarium621",
    description: "最新情報や日常の様子をツイートしています",
    icon: "𝕏",
    category: "sns",
    gradient: "from-gray-800 to-black",
    shadowColor: "shadow-gray-900/30",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/kinpeco_aquarium",
    description: "キンペコの写真や動画を投稿しています",
    icon: "📷",
    category: "sns",
    gradient: "from-purple-500 via-pink-500 to-orange-400",
    shadowColor: "shadow-pink-500/40",
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
    <div className="min-h-screen bg-white">
      {/* Hero Section - Aboutと統一 */}
      <section
        ref={heroRef}
        className={`relative min-h-[35vh] flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden pt-24 md:pt-24 transition-all duration-1000 ${
          isVisible.hero ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* 英字ラベル */}
          <div className="mb-6">
            <p className="text-xs md:text-sm font-medium text-accent-300 tracking-wider uppercase mb-2">
              LINKS
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            <span className="text-accent-400">リ</span>ンク集
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            SNSや委託販売ショップへのリンクをまとめています
          </p>
        </div>
      </section>

      {/* セクション区切り：余白とラベルで区切る */}
      <section className="py-10 sm:py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <p className="text-xs font-medium text-gray-400 tracking-wider uppercase mb-4">
              EXTERNAL LINKS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              <span className="text-accent-600">外部</span>リンク
            </h2>
            <p className="text-sm text-gray-500">
              SNSや外部サービスのリンク一覧です
            </p>
          </div>
        </div>
      </section>

      {/* リンク一覧セクション */}
      <section
        ref={linksRef}
        className={`bg-gray-50 py-10 sm:py-12 md:py-16 transition-all duration-1000 ${
          isVisible.links ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {links.map((link, index) => (
              <div
                key={index}
                className="group"
              >
                {/* グラデーションカードボタン */}
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-5 bg-gradient-to-r ${link.gradient} text-white rounded-2xl shadow-lg ${link.shadowColor} hover:scale-105 hover:shadow-xl transition-all duration-300 mb-6`}
                >
                  <span className="text-3xl">{link.icon}</span>
                  <span className="text-xl font-bold">{link.title}</span>
                </a>
                
                {/* 説明文とQRコード */}
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                    {link.description}
                  </p>
                  <div className="flex flex-col items-center gap-2 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500">QRコード</p>
                    <Image
                      src={generateQRCode(link.url)}
                      alt={`${link.title}のQRコード`}
                      width={120}
                      height={120}
                      className="bg-white p-2 rounded-lg border border-gray-200"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 委託販売ショップセクション（将来追加用） */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="mb-6">
              <p className="text-xs font-medium text-gray-400 tracking-wider uppercase mb-2">
                SHOP
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                <span className="text-accent-600">委</span>託販売ショップ
              </h3>
            </div>
            <p className="text-gray-700">
              委託販売ショップの情報は準備中です
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
