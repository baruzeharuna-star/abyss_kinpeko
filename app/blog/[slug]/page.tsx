"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import GradientBackground from "../../components/GradientBackground";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  tags?: string[];
  htmlContent?: string;
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState({
    hero: true, // 初期状態で表示
    content: true, // 初期状態で表示
  });

  useEffect(() => {
    if (!slug) {
      setIsLoading(false);
      return;
    }
    
    let cancelled = false;

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/blog/${slug}`, {
          cache: 'no-store', // 開発環境では常に最新データを取得
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        if (!cancelled) {
          if (data.error) {
            console.error("API error:", data.error);
            setPost(null);
            document.title = "記事が見つかりません | キンペコ（L333）ブリード記録";
          } else {
            setPost(data);
            document.title = `${data.title} | キンペコ（L333）ブリード記録`;
          }
          setIsLoading(false);
        }
      } catch (error) {
        if (!cancelled) {
          console.error("Error fetching post:", error);
          setPost(null);
          document.title = "記事が見つかりません | キンペコ（L333）ブリード記録";
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const createObserver = (ref: React.RefObject<HTMLElement>, key: keyof typeof isVisible) => {
      if (!ref.current || isVisible[key]) return; // 既に表示済みならスキップ

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [key]: true }));
              observer.disconnect(); // 一度表示されたら切断
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: isMobile ? "0px 0px -50px 0px" : "0px 0px -100px 0px", // モバイルでは小さく
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
  }, [isVisible]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    if (isLoading) {
      document.title = "読み込み中... | キンペコ（L333）ブリード記録";
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">読み込み中...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">記事が見つかりません</h1>
          <Link href="/blog" className="text-primary-600 hover:text-primary-800">
            ブログ一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section
        ref={heroRef}
        className={`relative text-gray-900 pt-24 pb-6 sm:pt-20 sm:pb-8 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden transition-all duration-1000 ${
          isVisible.hero ? "opacity-100" : "opacity-0"
        }`}
      >
        <GradientBackground variant="hero" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-block text-primary-600 hover:text-primary-800 mb-4 sm:mb-5 md:mb-6 transition-colors font-medium"
            >
              ← ブログ一覧に戻る
            </Link>
            <div className="flex items-center gap-4 mb-4 sm:mb-5 md:mb-6">
              <div className="h-1 w-16 bg-gradient-to-r from-accent-500 to-primary-600 rounded-full animate-gradient"></div>
              <p className="text-sm md:text-base font-medium text-primary-600 tracking-wider uppercase">
                {formatDate(post.date)}
              </p>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-3 sm:mb-4 md:mb-8 text-gradient">
              {post.title}
            </h1>
            {/* タグ表示を一旦非表示 */}
            {/* {post.tags && post.tags.length > 0 && (
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
            )} */}
          </div>
        </div>
      </section>

      {/* 記事内容セクション */}
      <section
        ref={contentRef}
        className={`bg-white pt-4 pb-4 sm:pt-6 sm:pb-6 md:pt-6 md:pb-6 transition-all duration-1000 ${
          isVisible.content ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mx-2 md:mx-6 lg:mx-8">
          <div className="relative p-2 md:p-3 rounded-2xl shadow-2xl overflow-hidden card-hover group">
            <GradientBackground variant="card" />
            <div className="relative z-10 p-4 md:p-12 lg:p-20">
              <article className="prose prose-lg max-w-none">
                {post.htmlContent ? (
                  <div
                    className="text-gray-700 leading-relaxed prose-headings:text-primary-900 prose-headings:font-bold prose-p:text-gray-700 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline [&_br]:block [&_br]:mt-2"
                    dangerouslySetInnerHTML={{ __html: post.htmlContent }}
                  />
                ) : (
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {post.content}
                  </div>
                )}
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
