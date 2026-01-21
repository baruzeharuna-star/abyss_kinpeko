import Image from "next/image";
import BloodlineLinkButton from "../components/BloodlineLinkButton";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[35vh] flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden pt-20 md:pt-24">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
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
           2024年3月に <span className="text-accent-600 font-semibold">キンペコ</span>という美しい熱帯魚と出会い、キンペコ飼育の世界に足を踏み入れました。
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            日々の観察と記録を通じて、個体の成長や特徴を丁寧に把握し、血統の情報を可能な限り明確にしていくことが重要だと感じています。
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            キンペコの世界をより多くの人に知っていただくため、ブリーダーを目指して情報発信とブリーディングに取り組んでいます。
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
              「キンペコの魅力を知ってもらうための情報発信を徹底すること」
            </p>
          </div>

          <ul className="space-y-6">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-2 h-2 bg-accent-500 rounded-full mt-3 mr-4"></span>
              <p className="text-lg text-gray-700 leading-relaxed">
                健康的な個体を繁殖するために適切な環境管理を徹底すること
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
                私自身が飼育を通じて、キンペコの魅力と可能性を追求し続けること
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
                <p className="text-sm text-gray-500 mb-2">2023年3月</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="text-accent-600 font-semibold">某店にて、偶然にもキンペコ</span>と出会う。縁があり、初めてキンペコの飼育を始める
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-0 w-4 h-4 bg-accent-500 rounded-full border-4 border-white shadow-sm"></div>
              <div className="ml-6">
                <p className="text-sm text-gray-500 mb-2">2024年6月</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  キンペコの魅力にハマり<span className="text-accent-600 font-semibold">什器水槽（多段水槽）</span>を半自作し、設置する
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-0 w-4 h-4 bg-accent-500 rounded-full border-4 border-white shadow-sm"></div>
              <div className="ml-6">
                <p className="text-sm text-gray-500 mb-2">2025年5月</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  初めてのキンペコ繁殖を成功させる
                </p>
              </div>
              <div className="relative">
              <div className="absolute -left-[21px] top-0 w-4 h-4 bg-accent-500 rounded-full border-4 border-white shadow-sm"></div>
              <div className="ml-6">
                <p className="text-sm text-gray-500 mb-2">2025年9月</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  キンペコ飼育に関するYoutube動画の投稿を始める
                </p>
              </div>
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
            <Image
              src="/images/about/breeding_pic.jpg"
              alt="ブリーディング環境"
              fill
              className="object-cover"
              priority
            />
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
            現在は、約2畳の専用スペースでキンペコの飼育を行っています。日々の観察と記録を大切にしながら、情報発信に力を入れています。
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
                情報発信とYoutube動画の投稿
              </p>
            </li>
          </ul>
        </div>
        {/* セクション区切りライン */}
        <div className="max-w-3xl mx-auto mt-16 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent"></div>
      </section>

      {/* Link Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            <span className="text-accent-600">血</span>統紹介
          </h2>
          <p className="text-center text-gray-600 mb-10">
            繁殖しているキンペコの血統をご紹介しています
          </p>
          
          <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 rounded-2xl p-8 shadow-xl shadow-primary-900/30">
            <div className="text-center">
              <p className="text-white/90 mb-6 text-lg">
                厳選した血統の詳細情報と、個体の特徴をご覧いただけます
              </p>
              <BloodlineLinkButton>繁殖している血統を見る</BloodlineLinkButton>
            </div>
          </div>
        </div>
        {/* セクション区切りライン */}
        <div className="max-w-3xl mx-auto mt-16 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent"></div>
      </section>

      {/* SNS Links Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            <span className="text-accent-600">S</span>NS
          </h2>
          <p className="text-center text-gray-600 mb-10">
            各種SNSでも情報発信しています
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <a
              href="https://www.youtube.com/@aquarium-abyss"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:scale-105 transition-transform shadow-lg shadow-red-500/40"
            >
              <span className="text-2xl">▶️</span>
              <span className="font-bold">YouTube</span>
            </a>
            <a
              href="https://x.com/aquarium621"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-gray-800 to-black text-white rounded-xl hover:scale-105 transition-transform shadow-lg shadow-gray-900/30"
            >
              <span className="text-2xl">𝕏</span>
              <span className="font-bold">X (Twitter)</span>
            </a>
            <a
              href="https://www.instagram.com/kinpeco_aquarium"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white rounded-xl hover:scale-105 transition-transform shadow-lg shadow-pink-500/40"
            >
              <span className="text-2xl">📷</span>
              <span className="font-bold">Instagram</span>
            </a>
          </div>

          <div className="text-center">
            <a
              href="/links"
              className="inline-flex items-center gap-2 px-6 py-3 text-primary-700 hover:text-primary-900 font-medium transition-colors"
            >
              すべてのリンクを見る
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
