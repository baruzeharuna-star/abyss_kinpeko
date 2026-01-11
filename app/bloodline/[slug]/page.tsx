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
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">読み込み中...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">血統紹介が見つかりません</h1>
          <Link href="/bloodline" className="text-primary-600 hover:text-primary-800">
            血統一覧に戻る
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
        className={`relative text-gray-900 py-32 md:py-40 overflow-hidden min-h-[600px] transition-all duration-1000 ${
          isVisible.hero ? "opacity-100" : "opacity-0"
        }`}
      >
        <GradientBackground variant="hero" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/bloodline"
              className="inline-block text-primary-600 hover:text-primary-800 mb-6 transition-colors font-medium"
            >
              ← 血統一覧に戻る
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-16 bg-gradient-to-r from-accent-500 to-primary-600 rounded-full animate-gradient"></div>
              <p className="text-sm md:text-base font-medium text-primary-600 tracking-wider uppercase">
                {formatDate(post.date)}
              </p>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-gradient">
              {post.title}
            </h1>
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
          </div>
        </div>
      </section>

      {/* 記事内容セクション */}
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
              <article className="prose prose-lg max-w-none">
                {post.htmlContent ? (
                  <div
                    className="text-gray-700 leading-relaxed prose-headings:text-primary-900 prose-headings:font-bold prose-p:text-gray-700 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline"
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
