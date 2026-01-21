import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#161c30] text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">キンペコ</h3>
            <p className="text-gray-300">
              キンペコの魅力をお届けするサイト
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">ナビゲーション</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent-400 transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent-400 transition-colors">
                  自己紹介
                </Link>
              </li>
              <li>
                <Link href="/bloodline" className="text-gray-300 hover:text-accent-400 transition-colors">
                  血統紹介
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-accent-400 transition-colors">
                  ブログ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">SNS</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://x.com/aquarium621"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent-400 transition-colors"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/kinpeco_aquarium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent-400 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@aquarium-abyss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent-400 transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#1a2338] mt-8 pt-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Abyss. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}