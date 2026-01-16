"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import VideoBackground from "./components/VideoBackground";
import BloodlineLinkButton from "./components/BloodlineLinkButton";
import EnvironmentLinkButton from "./components/EnvironmentLinkButton";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category?: string;
  tags?: string[];
}

export default function Home() {
  const aboutRef = useRef<HTMLElement>(null);
  const environmentRef = useRef<HTMLElement>(null);
  const serviceRef = useRef<HTMLElement>(null);
  const newsRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState({
    about: false,
    environment: false,
    service: false,
    news: false,
  });
  const [newsPosts, setNewsPosts] = useState<BlogPost[]>([]);

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
    createObserver(newsRef, "news");

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    // お知らせカテゴリのブログ記事を取得（最新3件）
    fetch("/api/blog?category=お知らせ")
      .then((res) => res.json())
      .then((data) => {
        setNewsPosts(data.slice(0, 3)); // 最新3件のみ
      })
      .catch(() => {
        setNewsPosts([]);
      });
  }, []);

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative text-gray-900 md:text-white pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden min-h-[60vh] md:min-h-auto flex items-center">
        <VideoBackground src="/videos/water-background_hero.mp4" poster="/images/background/water-background_hero.jpg" hideMobileImage={true} lazy={false} />
        <div className="relative z-10 container mx-auto px-4 w-full">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 text-gray-900 md:text-white leading-tight">
              <span className="block">血統と記録で語る、</span>
              <span className="block mt-2 md:mt-4">キンペコブリード</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 md:text-white/90 leading-relaxed max-w-2xl mx-auto md:mx-0">
            キンペコに関する情報と記録をまとめた<br />
            個人ブリーダーの発信サイト
            </p>
          </div>
        </div>
      </section>

      {/* Content セクション */}
      <section
        ref={serviceRef}
        className={`bg-white py-8 md:py-12 lg:py-16 transition-all duration-300 md:duration-1000 ${
          isVisible.service ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 md:translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4">
          {/* 動画背景カード */}
          <div className="relative rounded-xl md:rounded-2xl shadow-2xl overflow-hidden">
            <VideoBackground src="/videos/background_bloodline.mp4" poster="/images/background/background_bloodline.png" lazy={false} />
            {/* テキストカード */}
            <div className="relative z-10 px-4 py-8 md:px-6 md:py-10 lg:px-8 lg:py-12">
              <div className="mb-8 md:mb-12 lg:mb-16">
                <p className="text-xs md:text-sm font-medium text-white/90 mb-2 md:mb-3 tracking-wider uppercase drop-shadow-lg">For First-Time Visitors</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 drop-shadow-2xl leading-tight">
                  はじめて見ていただいた方へ
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                <Link 
                  href="/about" 
                  className="group block bg-white/10 md:backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20 hover:bg-white/20 hover:border-white/40 active:bg-white/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3 md:mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg group-hover:text-accent-300 transition-colors flex-1">自己紹介</h3>
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white/60 group-hover:text-accent-300 transition-colors flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed drop-shadow-md">
                    ブリーダーとしての想いとこだわりをご紹介します
                  </p>
                </Link>
                <Link 
                  href="/blog" 
                  className="group block bg-white/10 md:backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20 hover:bg-white/20 hover:border-white/40 active:bg-white/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3 md:mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg group-hover:text-accent-300 transition-colors flex-1">ブログ</h3>
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white/60 group-hover:text-accent-300 transition-colors flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed drop-shadow-md">
                    日々の育成状況、成長状況の記録を更新しています
                  </p>
                </Link>
                <Link 
                  href="/purchase" 
                  className="group block bg-white/10 md:backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20 hover:bg-white/20 hover:border-white/40 active:bg-white/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3 md:mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg group-hover:text-accent-300 transition-colors flex-1">購入方法</h3>
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white/60 group-hover:text-accent-300 transition-colors flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed drop-shadow-md">
                    私のブリードしたキンペコの購入方法をご案内いたします
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environment セクション */}
      <section
        ref={environmentRef}
        className={`bg-white py-8 md:py-12 lg:py-16 transition-all duration-300 md:duration-1000 ${
          isVisible.environment ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 md:translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4">
          {/* 動画背景カード */}
          <div className="relative rounded-xl md:rounded-2xl shadow-2xl overflow-hidden">
            <VideoBackground src="/videos/environment_news.mp4" poster="/images/background/environment_news.png" lazy={false} />
            {/* テキストカード */}
            <div className="relative z-10 px-4 py-8 md:px-6 md:py-10 lg:px-8 lg:py-12">
              <div className="mb-8 md:mb-12 lg:mb-16">
                <p className="text-xs md:text-sm font-medium text-white/90 mb-2 md:mb-3 tracking-wider uppercase drop-shadow-lg">Environment</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 drop-shadow-2xl leading-tight">
                  飼育環境
                </h2>
              </div>
              <div className="max-w-3xl bg-white/10 md:backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20">
                <p className="text-base md:text-lg text-white leading-relaxed drop-shadow-lg">
                  約2畳の水槽専用部屋でブリードをしています<br />
                  水温は30度を維持し、毎日の換水で水質を管理しています
                </p>
              </div>
            </div>
            {/* ボタン：スマホは右上、デスクトップは右下に配置 */}
            <div className="absolute top-4 right-4 md:top-auto md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 z-10">
              <EnvironmentLinkButton>飼育環境を見る</EnvironmentLinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* Bloodline セクション */}
      <section
        ref={aboutRef}
        className={`bg-white py-8 md:py-12 lg:py-16 transition-all duration-300 md:duration-1000 ${
          isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 md:translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4">
          {/* 動画背景カード */}
          <div className="relative rounded-xl md:rounded-2xl shadow-2xl overflow-hidden">
            <VideoBackground src="/videos/water-background_content.mp4" poster="/images/background/water-background_content.png" lazy={false} />
            {/* テキストカード */}
            <div className="relative z-10 px-4 py-8 md:px-6 md:py-10 lg:px-8 lg:py-12">
              <div className="mb-8 md:mb-12 lg:mb-16">
                <p className="text-xs md:text-sm font-medium text-white/90 mb-2 md:mb-3 tracking-wider uppercase drop-shadow-lg">Bloodline</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 drop-shadow-2xl leading-tight">
                  血統
                </h2>
              </div>
              <div className="max-w-3xl bg-white/10 md:backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20">
                <p className="text-base md:text-lg text-white leading-relaxed mb-4 md:mb-6 drop-shadow-lg">
                 キンペコ（L333）の血統情報は分かりづらく<br />
                 特に初心者にとっては大きな壁になることがあります
                </p>
                <p className="text-base md:text-lg text-white leading-relaxed drop-shadow-lg">
                 私が実際に育てた個体について分かる限りの情報を整理して発信しています
                </p>
              </div>
            </div>
            {/* ボタン：スマホは右上、デスクトップは右下に配置 */}
            <div className="absolute top-4 right-4 md:top-auto md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 z-10">
              <BloodlineLinkButton>血統紹介を見る</BloodlineLinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* News セクション */}
      <section
        ref={newsRef}
        className={`bg-white py-8 md:py-12 lg:py-16 transition-all duration-300 md:duration-1000 ${
          isVisible.news ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 md:translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4">
          {/* 動画背景カード */}
          <div className="relative rounded-xl md:rounded-2xl shadow-2xl overflow-hidden">
            <VideoBackground src="/videos/background_info.mp4" poster="/images/background/background_info.png" />
            {/* テキストカード */}
            <div className="relative z-10 px-4 py-8 md:px-6 md:py-10 lg:px-8 lg:py-12">
              <div className="mb-8 md:mb-12 lg:mb-16">
                <p className="text-xs md:text-sm font-medium text-white/90 mb-2 md:mb-3 tracking-wider uppercase drop-shadow-lg">News</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 drop-shadow-2xl leading-tight">
                  最新情報
                </h2>
              </div>
              <div className="max-w-3xl space-y-4 md:space-y-6">
                {newsPosts.length > 0 ? (
                  newsPosts.map((post) => {
                    const formatDate = (dateString: string) => {
                      const date = new Date(dateString);
                      return date.toLocaleDateString("ja-JP", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      });
                    };
                    return (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="block bg-white/10 md:backdrop-blur-sm rounded-lg p-4 md:p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
                      >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4">
                          <div className="flex-1">
                            <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 drop-shadow-lg">
                              {post.title}
                            </h3>
                            {post.excerpt && (
                              <p className="text-sm md:text-base text-white/90 leading-relaxed drop-shadow-md line-clamp-2">
                                {post.excerpt}
                              </p>
                            )}
                          </div>
                          <time className="text-xs md:text-sm text-white/80 whitespace-nowrap drop-shadow-md">
                            {formatDate(post.date)}
                          </time>
                        </div>
                      </Link>
                    );
                  })
                ) : (
                  <p className="text-base md:text-lg text-white/90 drop-shadow-lg">
                    お知らせはありません
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}