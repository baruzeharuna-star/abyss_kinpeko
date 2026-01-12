"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

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
              BLOODLINE
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            <span className="text-accent-400">血統</span>紹介
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            ブリードした個体の血統情報と特徴を詳しくご紹介します
          </p>
        </div>
      </section>

      {/* セクション区切り：余白とラベルで区切る */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <p className="text-xs font-medium text-gray-400 tracking-wider uppercase mb-4">
              RECORD
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              <span className="text-accent-600">血</span>統一覧
            </h2>
            <p className="text-sm text-gray-500">
              各血統の詳細情報を記録しています
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
        <div className="max-w-5xl mx-auto px-4">
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
                    className="block bg-white rounded-lg p-6 md:p-8 hover:shadow-lg transition-all duration-300 border border-gray-200 group"
                  >
                    {/* カードヘッダー：情報構造を明確化 */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4 pb-4 border-b border-gray-100">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors mb-2">
                          {post.title}
                        </h3>
                        <time className="text-sm text-gray-500">
                          {formatDate(post.date)}
                        </time>
                      </div>
                    </div>
                    
                    {/* カード本文：テキスト情報を主役に */}
                    <div className="mb-4">
                      <p className="text-gray-700 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                    
                    {/* タグ */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded border border-gray-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                ))
              ) : (
                <div className="bg-white rounded-lg p-8 text-center border border-gray-200">
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
