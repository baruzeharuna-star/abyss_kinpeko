"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import GradientBackground from "../../components/GradientBackground";

interface BloodlinePost {
  slug: string;
  title: string;
  date: string;
  content: string;
  tags?: string[];
  htmlContent?: string;
}

export default function BloodlinePostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BloodlinePost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState({
    hero: true, // 初期状態で表示
    content: true, // 初期状態で表示
  });

  useEffect(() => {
    if (!slug) {
      console.log("No slug provided");
      setIsLoading(false);
      return;
    }
    
    console.log("Fetching post with slug:", slug);
    fetch(`/api/blog/${slug}`)
      .then((res) => {
        console.log("Response status:", res.status);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Received data:", data);
        if (data.error) {
          console.error("API error:", data.error);
          setPost(null);
        } else {
          console.log("Setting post data");
          setPost(data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
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
          <p className="text-gray-600 mb-4">スラッグ: {slug}</p>
          <Link href="/bloodline" className="text-primary-600 hover:text-primary-800">
            血統一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  // HTMLコンテンツに重要ワードの強調を適用
  // htmlContentがある場合はそのまま使用（既にHTML形式なので）
  const processedContent = post.htmlContent || post.content;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Aboutと統一 */}
      <section
        ref={heroRef}
        className={`relative min-h-[35vh] flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden pt-28 md:pt-24 transition-all duration-1000 ${
          isVisible.hero ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full">
          <Link
            href="/bloodline"
            className="inline-block text-white/80 hover:text-white mb-4 md:mb-6 transition-colors font-medium text-sm"
          >
            ← 血統一覧に戻る
          </Link>
          
          {/* 英字ラベル */}
          <div className="mb-4 md:mb-6">
            <p className="text-xs md:text-sm font-medium text-accent-300 tracking-wider uppercase mb-2">
              BLOODLINE RECORD
            </p>
            <time className="text-sm text-white/70">
              {formatDate(post.date)}
            </time>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg leading-tight break-words px-2">
            {post.title}
          </h1>
          
          {/* タグ表示を一旦非表示 */}
          {/* {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center mt-6">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded border border-white/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          )} */}
        </div>
      </section>

      {/* 記事内容セクション - ブログスタイル */}
      <section
        ref={contentRef}
        className={`bg-white py-4 md:py-6 transition-all duration-1000 ${
          isVisible.content ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mx-4 md:mx-6 lg:mx-8">
          <div className="relative p-2 md:p-3 rounded-2xl shadow-2xl overflow-hidden card-hover group">
            <GradientBackground variant="card" />
            <div className="relative z-10 p-10 md:p-16 lg:p-20">
              <div className="text-gray-700 leading-relaxed">
                {post.htmlContent ? (
                  <div
                    className="prose-content"
                    dangerouslySetInnerHTML={{ __html: post.htmlContent }}
                  />
                ) : (
                  <div 
                    className="whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br />") }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
