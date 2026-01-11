"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import GradientBackground from "../components/GradientBackground";

interface BloodlinePost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
}

export default function BloodlinePage() {
  const heroRef = useRef<HTMLElement>(null);
  const postsRef = useRef<HTMLElement>(null);
  const [posts, setPosts] = useState<BloodlinePost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    posts: false,
  });

  useEffect(() => {
    // カテゴリがbloodlineの記事を取得
    fetch("/api/blog?category=bloodline")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

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
    createObserver(postsRef, "posts");

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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
                Bloodline
              </p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8 text-gradient">
              血統紹介
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
              ブリードした個体の血統情報と<br />
              特徴を詳しくご紹介します
            </p>
          </div>
        </div>
      </section>

      {/* 血統一覧セクション */}
      <section
        ref={postsRef}
        className={`bg-gray-50 py-12 md:py-16 transition-all duration-1000 ${
          isVisible.posts ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1.5 w-16 bg-gradient-to-r from-accent-500 via-accent-400 to-primary-600 rounded-full transition-all duration-500"></div>
              <p className="text-sm font-bold text-primary-700 tracking-wider uppercase">
                Bloodlines
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              血統一覧
            </h2>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">読み込み中...</p>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/bloodline/${post.slug}`}
                    className="block bg-white rounded-xl p-6 md:p-8 hover:shadow-md hover:scale-[1.01] transition-all duration-300 border border-gray-200 group"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-primary-900 group-hover:text-primary-600 transition-colors">
                        {post.title}
                      </h3>
                      <time className="text-gray-600 text-sm whitespace-nowrap">
                        {formatDate(post.date)}
                      </time>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-accent-500/20 text-accent-700 text-sm rounded-full border border-accent-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                ))
              ) : (
                <div className="bg-white rounded-xl p-8 text-center border border-gray-200">
                  <p className="text-gray-600">
                    まだ血統紹介がありません
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
