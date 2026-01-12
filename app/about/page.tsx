import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[35vh] flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden pt-20 md:pt-24">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Abyss <span className="text-accent-400">Kinpeko</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            <span className="text-accent-300">キンペコ</span>の魅力を世界に届ける
          </p>
        </div>
        {/* セクション区切りライン */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent"></div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            <span className="text-accent-600 font-semibold">キンペコ</span>という美しい熱帯魚との出会いから、ブリーディングの世界へ足を踏み入れました。
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            日々の観察と記録を通じて、個体の成長や特徴を丁寧に把握し、血統の情報を可能な限り明確にしていくことが、私たちの使命だと考えています。
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            キンペコの世界をより多くの人に知っていただくため、情報発信とブリーディングに取り組んでいます。
          </p>
        </div>
        {/* セクション区切りライン */}
        <div className="max-w-3xl mx-auto mt-16 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent"></div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            <span className="text-accent-600">大</span>事にしていること
          </h2>
          
          {/* 強調文：哲学・思想を左ボーダー付きカードで表現 */}
          <div className="mb-12 pl-6 border-l-4 border-accent-500/60 bg-white/50 py-6 pr-6 rounded-r-lg shadow-sm">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed italic">
              「個体の健康と福祉を最優先に考え、適切な環境で丁寧に育てること」
            </p>
          </div>

          <ul className="space-y-6">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-2 h-2 bg-accent-500 rounded-full mt-3 mr-4"></span>
              <p className="text-lg text-gray-700 leading-relaxed">
                個体の健康と福祉を最優先に考え、適切な環境で丁寧に育てること
              </p>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-2 h-2 bg-accent-500 rounded-full mt-3 mr-4"></span>
              <p className="text-lg text-gray-700 leading-relaxed">
                血統情報を可能な限り正確に記録し、透明性の高い情報発信を行うこと
              </p>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-2 h-2 bg-accent-500 rounded-full mt-3 mr-4"></span>
              <p className="text-lg text-gray-700 leading-relaxed">
                ブリーディングを通じて、キンペコの魅力と可能性を追求し続けること
              </p>
            </li>
          </ul>
        </div>
        {/* セクション区切りライン */}
        <div className="max-w-3xl mx-auto mt-16 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent"></div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            <span className="text-accent-600">ス</span>トーリー
          </h2>
          <div className="space-y-8 relative pl-8 border-l-2 border-accent-500/40">
            <div className="relative">
              <div className="absolute -left-[21px] top-0 w-4 h-4 bg-accent-500 rounded-full border-4 border-white shadow-sm"></div>
              <div className="ml-6">
                <p className="text-sm text-gray-500 mb-2">2020年頃</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="text-accent-600 font-semibold">キンペコ</span>との出会い。その美しい色彩と優雅な泳ぎに魅了され、飼育を始める
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-0 w-4 h-4 bg-accent-500 rounded-full border-4 border-white shadow-sm"></div>
              <div className="ml-6">
                <p className="text-sm text-gray-500 mb-2">2022年頃</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  ブリーディングに挑戦。<span className="text-accent-600 font-semibold">血統情報</span>の重要性を実感し、記録と情報管理の必要性を認識
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-0 w-4 h-4 bg-accent-500 rounded-full border-4 border-white shadow-sm"></div>
              <div className="ml-6">
                <p className="text-sm text-gray-500 mb-2">2024年頃</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  情報発信を本格化。Webサイトを通じて、より多くの人にキンペコの魅力を伝える活動を開始
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* セクション区切りライン */}
        <div className="max-w-3xl mx-auto mt-16 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent"></div>
      </section>

      {/* Visual Element Section - ビジュアル要素を1点追加 */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-primary-900/20 via-primary-800/10 to-accent-500/10">
            {/* プレースホルダー：実際の画像に置き換え可能 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent-500/20 to-accent-600/30 border-2 border-accent-500/40 flex items-center justify-center">
                  <svg className="w-12 h-12 text-accent-600/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500 italic">
                  {/* 実際の画像を配置する場合は、以下のコメントアウト部分を使用 */}
                  {/* <Image
                    src="/images/about/breeding-environment.jpg"
                    alt="ブリーディング環境"
                    fill
                    className="object-cover"
                    priority
                  /> */}
                  ブリーディング環境の写真
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Now Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            <span className="text-accent-600">い</span>まやっていること
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            現在は、約2畳の専用スペースでブリーディングを行っています。日々の観察と記録を大切にしながら、個体の成長をサポートしています。
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-accent-500 mr-3 font-bold">•</span>
              <p className="text-lg text-gray-700 leading-relaxed">
                血統管理と記録のシステム化
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-accent-500 mr-3 font-bold">•</span>
              <p className="text-lg text-gray-700 leading-relaxed">
                個体の成長過程の写真とデータ収集
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-accent-500 mr-3 font-bold">•</span>
              <p className="text-lg text-gray-700 leading-relaxed">
                情報発信とコミュニティへの貢献
              </p>
            </li>
          </ul>
        </div>
        {/* セクション区切りライン */}
        <div className="max-w-3xl mx-auto mt-16 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent"></div>
      </section>

      {/* Link Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Link
            href="/bloodline"
            className="inline-block px-8 py-4 bg-[#161c30] text-white text-lg font-semibold rounded-lg hover:bg-[#1a2338] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent-500/20"
          >
            ブリードしている血統を見る
          </Link>
        </div>
      </section>
    </div>
  );
}
