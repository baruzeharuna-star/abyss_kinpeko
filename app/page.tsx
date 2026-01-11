"use client";

import { useEffect, useRef, useState } from "react";
import VideoBackground from "./components/VideoBackground";

export default function Home() {
  const aboutRef = useRef<HTMLElement>(null);
  const environmentRef = useRef<HTMLElement>(null);
  const serviceRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState({
    about: false,
    environment: false,
    service: false,
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

    createObserver(aboutRef, "about");
    createObserver(environmentRef, "environment");
    createObserver(serviceRef, "service");

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative text-white py-32 md:py-40 overflow-hidden">
        <VideoBackground src="/videos/water-background_hero.mp4" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm md:text-base font-medium text-white/80 mb-4 tracking-wider uppercase">
              KINPEKO BREED
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
              <span className="block">キンペコに関する情報を</span>
              <span className="block mt-4">もっと世の中に広げる</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
              個人でブリードしているキンペコの<br />
              情報を発信しています
            </p>
          </div>
        </div>
      </section>

      {/* Bloodline セクション */}
      <section
        ref={aboutRef}
        className={`bg-white py-[5px] transition-all duration-1000 ${
          isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mx-[5px]">
          {/* 動画背景カード */}
          <div className="relative p-[5px] rounded-2xl shadow-2xl overflow-hidden">
            <VideoBackground src="/videos/background_bloodline.mp4" />
            {/* テキストカード */}
            <div className="relative z-10 p-8 md:p-12">
              <div className="mb-16">
                <p className="text-sm font-medium text-white/90 mb-2 tracking-wider uppercase drop-shadow-lg">Bloodline</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
                  血統
                </h2>
              </div>
              <div className="max-w-3xl">
                <p className="text-lg text-white leading-relaxed mb-6 drop-shadow-lg">
                  キンペコの血統の情報は分かりづらい部分が多く、<br />
                  初心者の壁になることもあります
                </p>
                <p className="text-lg text-white leading-relaxed drop-shadow-lg">
                  私がブリードした個体について<br />
                  知りうる限りの情報を発信しています
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environment セクション */}
      <section
        ref={environmentRef}
        className={`bg-white py-[5px] transition-all duration-1000 ${
          isVisible.environment ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mx-[5px]">
          {/* 動画背景カード */}
          <div className="relative p-[5px] rounded-2xl shadow-2xl overflow-hidden">
            <VideoBackground src="/videos/environment_news.mp4" />
            {/* テキストカード */}
            <div className="relative z-10 p-8 md:p-12">
              <div className="mb-16">
                <p className="text-sm font-medium text-white/90 mb-2 tracking-wider uppercase drop-shadow-lg">Environment</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
                  飼育環境
                </h2>
              </div>
              <div className="max-w-3xl">
                <p className="text-lg text-white leading-relaxed mb-6 drop-shadow-lg">
                  約2畳の水槽専用部屋で飼育を行なっています<br />
                  水温は約30度を維持、毎日の換水により水質を管理しています
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content セクション */}
      <section
        ref={serviceRef}
        className={`bg-white py-[5px] transition-all duration-1000 ${
          isVisible.service ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mx-[5px]">
          {/* 動画背景カード */}
          <div className="relative p-[5px] rounded-2xl shadow-2xl overflow-hidden">
            <VideoBackground src="/videos/water-background_content.mp4" />
            {/* テキストカード */}
            <div className="relative z-10 p-8 md:p-12">
              <div className="mb-16">
                <p className="text-sm font-medium text-white/90 mb-2 tracking-wider uppercase drop-shadow-lg">Content</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
                  コンテンツ
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <div className="group">
                  <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">自己紹介</h3>
                  <p className="text-white leading-relaxed drop-shadow-md">
                    ブリーダーとしての想いとこだわりをご紹介します
                  </p>
                </div>
                <div className="group">
                  <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">血統紹介</h3>
                  <p className="text-white leading-relaxed drop-shadow-md">
                    血統の特徴や親個体を詳しく解説します
                  </p>
                </div>
                <div className="group">
                  <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">ブログ</h3>
                  <p className="text-white leading-relaxed drop-shadow-md">
                    日々の育成状況、成長状況の記録を更新しています
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}