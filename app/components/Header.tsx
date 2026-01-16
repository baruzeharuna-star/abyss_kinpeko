"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#161c30]/95 text-white shadow-lg border-b border-[#161c30]/60">
      <nav className="container mx-auto lg:mx-0 px-4 lg:pl-4 py-2 md:py-1 max-w-4xl lg:max-w-full">
      <div className="flex items-center justify-between h-20 md:h-216 lg:h-20">
      <Link href="/" className="flex items-center h-full max-w-[260px] sm:max-w-[280px] md:max-w-[300px] hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo/logo_side.png"
              alt="ABYSS BREED ロゴ"
              width={1536}
              height={1024}
              className="w-full h-64 sm:h-64 md:h-80 lg:h-96 object-contain"
              priority
            />
          </Link>
          
          {/* ハンバーガーメニューボタン（モバイルのみ表示） */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-11 h-11 flex flex-col justify-center items-center gap-1.5 hover:opacity-80 transition-opacity"
            aria-label="メニューを開く"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* デスクトップナビゲーション（タブレット以上で表示） */}
          <ul className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
            <li>
              <Link href="/" className="px-3 py-2 hover:text-accent-400 transition-colors text-sm lg:text-base">
                ホーム
              </Link>
            </li>
            <li>
              <Link href="/about" className="px-3 py-2 hover:text-accent-400 transition-colors text-sm lg:text-base">
                自己紹介
              </Link>
            </li>
            <li>
              <Link href="/bloodline" className="px-3 py-2 hover:text-accent-400 transition-colors text-sm lg:text-base">
                血統紹介
              </Link>
            </li>
            <li>
              <Link href="/environment" className="px-3 py-2 hover:text-accent-400 transition-colors text-sm lg:text-base">
                飼育環境
              </Link>
            </li>
            <li>
              <Link href="/purchase" className="px-3 py-2 hover:text-accent-400 transition-colors text-sm lg:text-base">
                購入方法
              </Link>
            </li>
            <li>
              <Link href="/blog" className="px-3 py-2 hover:text-accent-400 transition-colors text-sm lg:text-base">
                ブログ
              </Link>
            </li>
            <li>
              <Link href="/links" className="px-3 py-2 hover:text-accent-400 transition-colors text-sm lg:text-base">
                リンク
              </Link>
            </li>
          </ul>
        </div>

        {/* モバイルメニュー（ドロップダウン） */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 mt-2 pt-4 pb-4">
            <ul className="flex flex-col space-y-1">
              <li>
                <Link
                  href="/"
                  className="block px-4 py-3 hover:bg-white/10 transition-colors text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ホーム
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block px-4 py-3 hover:bg-white/10 transition-colors text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  自己紹介
                </Link>
              </li>
              <li>
                <Link
                  href="/bloodline"
                  className="block px-4 py-3 hover:bg-white/10 transition-colors text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  血統紹介
                </Link>
              </li>
              <li>
                <Link
                  href="/environment"
                  className="block px-4 py-3 hover:bg-white/10 transition-colors text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  飼育環境
                </Link>
              </li>
              <li>
                <Link
                  href="/purchase"
                  className="block px-4 py-3 hover:bg-white/10 transition-colors text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  購入方法
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block px-4 py-3 hover:bg-white/10 transition-colors text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ブログ
                </Link>
              </li>
              <li>
                <Link
                  href="/links"
                  className="block px-4 py-3 hover:bg-white/10 transition-colors text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  リンク
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}