import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[35vh] flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 overflow-hidden pt-20 md:pt-24">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Abyss Kinpeko
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            キンペコの魅力を世界に届ける
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            キンペコという美しい熱帯魚との出会いから、ブリーディングの世界へ足を踏み入れました。
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            日々の観察と記録を通じて、個体の成長や特徴を丁寧に把握し、血統の情報を可能な限り明確にしていくことが、私たちの使命だと考えています。
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            キンペコの世界をより多くの人に知っていただくため、情報発信とブリーディングに取り組んでいます。
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            大事にしていること
          </h2>
          <ul className="space-y-6">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-2 h-2 bg-[#161c30] rounded-full mt-3 mr-4"></span>
              <p className="text-lg text-gray-700 leading-relaxed">
                個体の健康と福祉を最優先に考え、適切な環境で丁寧に育てること
              </p>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-2 h-2 bg-[#161c30] rounded-full mt-3 mr-4"></span>
              <p className="text-lg text-gray-700 leading-relaxed">
                血統情報を可能な限り正確に記録し、透明性の高い情報発信を行うこと
              </p>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-2 h-2 bg-[#161c30] rounded-full mt-3 mr-4"></span>
              <p className="text-lg text-gray-700 leading-relaxed">
                ブリーディングを通じて、キンペコの魅力と可能性を追求し続けること
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            ストーリー
          </h2>
          <div className="space-y-8 relative pl-8 border-l-2 border-gray-300">
            <div className="relative">
              <div className="absolute -left-[21px] top-0 w-4 h-4 bg-[#161c30] rounded-full border-4 border-white"></div>
              <div className="ml-6">
                <p className="text-sm text-gray-500 mb-2">2020年頃</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  キンペコとの出会い。その美しい色彩と優雅な泳ぎに魅了され、飼育を始める
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-0 w-4 h-4 bg-[#161c30] rounded-full border-4 border-white"></div>
              <div className="ml-6">
                <p className="text-sm text-gray-500 mb-2">2022年頃</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  ブリーディングに挑戦。血統情報の重要性を実感し、記録と情報管理の必要性を認識
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-0 w-4 h-4 bg-[#161c30] rounded-full border-4 border-white"></div>
              <div className="ml-6">
                <p className="text-sm text-gray-500 mb-2">2024年頃</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  情報発信を本格化。Webサイトを通じて、より多くの人にキンペコの魅力を伝える活動を開始
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Now Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            いまやっていること
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            現在は、約2畳の専用スペースでブリーディングを行っています。日々の観察と記録を大切にしながら、個体の成長をサポートしています。
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-[#161c30] mr-3">•</span>
              <p className="text-lg text-gray-700 leading-relaxed">
                血統管理と記録のシステム化
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-[#161c30] mr-3">•</span>
              <p className="text-lg text-gray-700 leading-relaxed">
                個体の成長過程の写真とデータ収集
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-[#161c30] mr-3">•</span>
              <p className="text-lg text-gray-700 leading-relaxed">
                情報発信とコミュニティへの貢献
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Link Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Link
            href="/environment"
            className="inline-block px-8 py-4 bg-[#161c30] text-white text-lg font-semibold rounded-lg hover:bg-[#1a2338] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            ブリーディング環境を見る
          </Link>
        </div>
      </section>
    </div>
  );
}
