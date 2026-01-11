import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#161c30]/95 text-white shadow-lg border-b border-[#161c30]/60">
      <nav className="container mx-auto lg:mx-0 px-2 lg:pl-4 py-0.5 md:py-1 max-w-4xl lg:max-w-full">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center h-32 md:h-64 lg:h-77 hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo/logo_side.png"
              alt="ABYSS BREED ロゴ"
              width={1536}
              height={1024}
              className="w-auto h-full max-h-full object-contain"
              priority
            />
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-accent-400 transition-colors">
                ホーム
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent-400 transition-colors">
                自己紹介
              </Link>
            </li>
            <li>
              <Link href="/bloodline" className="hover:text-accent-400 transition-colors">
                血統紹介
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-accent-400 transition-colors">
                ブログ
              </Link>
            </li>
            <li>
              <Link href="/links" className="hover:text-accent-400 transition-colors">
                リンク
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}