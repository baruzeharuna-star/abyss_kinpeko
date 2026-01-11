"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

interface BloodlinePost {
  slug: string;
  title: string;
  date: string;
  content: string;
  tags?: string[];
  htmlContent?: string;
}

// 重要ワード（L333, F世代, 系統名など）を検出して強調する関数
const highlightKeywords = (text: string) => {
  // L333, L-number系のパターン
  const lNumberPattern = /(L\d{3})/gi;
  // F世代（F1, F2, F3など）
  const fGenPattern = /(F\d+)/gi;
  // 系統名（末尾に「系統」がつく）
  const lineagePattern = /([^\s]+系統)/g;
  
  let highlighted = text;
  
  // 各パターンをマッチさせて置換
  highlighted = highlighted.replace(lNumberPattern, (match) => 
    `<span class="text-accent-600 font-semibold">${match}</span>`
  );
  highlighted = highlighted.replace(fGenPattern, (match) => 
    `<span class="text-accent-600 font-semibold">${match}</span>`
  );
  highlighted = highlighted.replace(lineagePattern, (match) => 
    `<span class="text-accent-600 font-semibold">${match}</span>`
  );
  
  return highlighted;
};

export default function BloodlinePostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BloodlinePost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    content: false,
  });

  useEffect(() => {
    fetch(`/api/blog/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setPost(null);
        } else {
          setPost(data);
        }
        setIsLoading(false);
      })
      .catch(() => {
        setPost(null);
        setIsLoading(false);
      });
  }, [slug]);

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
    createObserver(contentRef, "content");

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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-gray-600">読み込み中...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">血統紹介が見つかりません</h1>
          <Link href="/bloodline" className="text-primary-600 hover:text-primary-800">
            血統一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  // HTMLコンテンツに重要ワードの強調を適用
  const processedContent = post.htmlContent 
    ? highlightKeywords(post.htmlContent)
    : highlightKeywords(post.content);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Aboutと統一 */}
      <section
        ref={heroRef}
        className={`relative min-h-[35vh] flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden pt-20 md:pt-24 transition-all duration-1000 ${
          isVisible.hero ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Link
            href="/bloodline"
            className="inline-block text-white/80 hover:text-white mb-6 transition-colors font-medium text-sm"
          >
            ← 血統一覧に戻る
          </Link>
          
          {/* 英字ラベル */}
          <div className="mb-6">
            <p className="text-xs md:text-sm font-medium text-accent-300 tracking-wider uppercase mb-2">
              BLOODLINE RECORD
            </p>
            <time className="text-sm text-white/70">
              {formatDate(post.date)}
            </time>
          </div>
          
          <h1 
            className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg"
            dangerouslySetInnerHTML={{ __html: highlightKeywords(post.title) }}
          />
          
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center mt-6">
              {post.tags.map((tag, index) => {
                const highlightedTag = highlightKeywords(tag);
                return (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded border border-white/30"
                    dangerouslySetInnerHTML={{ __html: highlightedTag }}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 記事内容セクション - 情報構造を明確化 */}
      <section
        ref={contentRef}
        className={`py-16 md:py-24 px-4 transition-all duration-1000 ${
          isVisible.content ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-3xl mx-auto">
          {/* セクションラベル */}
          <div className="mb-8">
            <p className="text-xs font-medium text-gray-400 tracking-wider uppercase mb-2">
              DETAIL
            </p>
          </div>
          
          {/* カード構造：情報をブロック化 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
            <article className="prose prose-lg max-w-none">
              <div
                className="text-gray-700 leading-relaxed prose-headings:text-gray-900 prose-headings:font-bold prose-headings:border-b prose-headings:border-gray-200 prose-headings:pb-2 prose-headings:mb-4 prose-p:text-gray-700 prose-p:mb-4 prose-ul:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
