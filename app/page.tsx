"use client";

import { useEffect, useRef, useState } from "react";
import VideoBackground from "./components/VideoBackground";
import BloodlineLinkButton from "./components/BloodlineLinkButton";
import EnvironmentLinkButton from "./components/EnvironmentLinkButton";

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
      <section className="relative text-white pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <VideoBackground src="/videos/water-background_hero.mp4" poster="/images/background/water-background_hero.png" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs md:text-sm lg:text-base font-medium text-white/80 mb-3 md:mb-4 tracking-wider uppercase">
              KINPEKO BREED
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 text-white leading-tight">
              <span className="block">キンペコ(L333)の情報を</span>
              <span className="block mt-2 md:mt-4">もっと世の中に広げる</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
            血統紹介・飼育環境・繁殖/育成の記録をまとめた<br />
            個人ブリーダーの発信サイトです
            </p>
          </div>
        </div>
      </section>

      {/* Content セクション */}
      <section
        ref={serviceRef}
        className={`bg-white py-8 md:py-12 lg:py-16 transition-all duration-1000 ${
          isVisible.service ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4">
          {/* 動画背景カード */}
          <div className="relative rounded-xl md:rounded-2xl shadow-2xl overflow-hidden">
            <VideoBackground src="/videos/water-background_content.mp4" poster="/images/background/water-background_content.png" />
            {/* テキストカード */}
            <div className="relative z-10 px-4 py-8 md:px-6 md:py-10 lg:px-8 lg:py-12">
              <div className="mb-8 md:mb-12 lg:mb-16">
                <p className="text-xs md:text-sm font-medium text-white/90 mb-2 md:mb-3 tracking-wider uppercase drop-shadow-lg">Content</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 drop-shadow-2xl leading-tight">
                  コンテンツ
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                <div className="group">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 drop-shadow-lg">自己紹介</h3>
                  <p className="text-sm md:text-base text-white leading-relaxed drop-shadow-md">
                    ブリーダーとしての想いとこだわりをご紹介します
                  </p>
                </div>
                <div className="group">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 drop-shadow-lg">ブログ</h3>
                  <p className="text-sm md:text-base text-white leading-relaxed drop-shadow-md">
                    日々の育成状況、成長状況の記録を更新しています
                  </p>
                </div>
                <div className="group">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 drop-shadow-lg">購入方法</h3>
                  <p className="text-sm md:text-base text-white leading-relaxed drop-shadow-md">
                    私のブリードしたキンペコの購入方法をご案内いたします
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environment セクション */}
      <section
        ref={environmentRef}
        className={`bg-white py-8 md:py-12 lg:py-16 transition-all duration-1000 ${
          isVisible.environment ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4">
          {/* 動画背景カード */}
          <div className="relative rounded-xl md:rounded-2xl shadow-2xl overflow-hidden">
            <VideoBackground src="/videos/environment_news.mp4" poster="/images/background/environment_news.png" />
            {/* テキストカード */}
            <div className="relative z-10 px-4 py-8 md:px-6 md:py-10 lg:px-8 lg:py-12">
              <div className="mb-8 md:mb-12 lg:mb-16">
                <p className="text-xs md:text-sm font-medium text-white/90 mb-2 md:mb-3 tracking-wider uppercase drop-shadow-lg">Environment</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 drop-shadow-2xl leading-tight">
                  飼育環境
                </h2>
              </div>
              <div className="max-w-3xl">
                <p className="text-base md:text-lg text-white leading-relaxed drop-shadow-lg">
                  約2畳の水槽専用部屋でブリードをしています<br />
                  水温は30度を維持し、毎日の換水で水質を管理しています
                </p>
              </div>
            </div>
            {/* ボタン：背景動画の右下に配置 */}
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 z-10">
              <EnvironmentLinkButton>飼育環境を見る</EnvironmentLinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* Bloodline セクション */}
      <section
        ref={aboutRef}
        className={`bg-white py-8 md:py-12 lg:py-16 transition-all duration-1000 ${
          isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4">
          {/* 動画背景カード */}
          <div className="relative rounded-xl md:rounded-2xl shadow-2xl overflow-hidden">
            <VideoBackground src="/videos/water-background_content.mp4" poster="/images/background/water-background_content.png" />
            {/* テキストカード */}
            <div className="relative z-10 px-4 py-8 md:px-6 md:py-10 lg:px-8 lg:py-12">
              <div className="mb-8 md:mb-12 lg:mb-16">
                <p className="text-xs md:text-sm font-medium text-white/90 mb-2 md:mb-3 tracking-wider uppercase drop-shadow-lg">Bloodline</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 drop-shadow-2xl leading-tight">
                  血統
                </h2>
              </div>
              <div className="max-w-3xl">
                <p className="text-base md:text-lg text-white leading-relaxed mb-4 md:mb-6 drop-shadow-lg">
                 キンペコ（L333）の血統情報は分かりづらく<br />
                 特に初心者にとっては大きな壁になることがあります
                </p>
                <p className="text-base md:text-lg text-white leading-relaxed drop-shadow-lg">
                 親魚の系統や掛け合わせやブリードの経緯など<br />
                 私が実際に育てた個体について分かる限りの情報を整理して発信しています
                </p>
              </div>
            </div>
            {/* ボタン：背景動画の右下に配置 */}
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 z-10">
              <BloodlineLinkButton>血統紹介を見る</BloodlineLinkButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}