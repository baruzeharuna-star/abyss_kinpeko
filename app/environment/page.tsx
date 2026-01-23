import Image from "next/image";
import BloodlineLinkButton from "../components/BloodlineLinkButton";

export default function EnvironmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[35vh] flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden pt-20 md:pt-24">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            <span className="text-accent-400">飼育</span>環境
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            キンペコが健やかに育つ<span className="text-accent-300">飼育環境</span>づくり
          </p>
        </div>
        {/* セクション区切りライン */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent"></div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            <span className="text-accent-600 font-semibold">生物</span>にとって、適切な環境は健康と成長の基盤です。
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            水質管理、水温管理、適切な餌の供給などを行い、キンペコが健やかに育つ環境を意識しています。
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            固定観念を持たず、日々の観察を通じて、最適な環境条件を追求し続けています。
          </p>
        </div>
        {/* セクション区切りライン */}
        <div className="max-w-3xl mx-auto mt-16 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent"></div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            <span className="text-accent-600">飼育</span>環境の方針
          </h2>
          
          {/* 強調文：哲学・思想を左ボーダー付きカードで表現 */}
          <div className="mb-12 pl-6 border-l-4 border-accent-500/60 bg-white/50 py-6 pr-6 rounded-r-lg shadow-sm">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed italic">
              「個体の健康を最優先に考え、自然に近い環境を作り出すこと」
            </p>
          </div>

          <ul className="space-y-6">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-2 h-2 bg-accent-500 rounded-full mt-3 mr-4"></span>
              <p className="text-lg text-gray-700 leading-relaxed">
                水質の安定維持と定期的な水換えによる清潔な環境の確保
              </p>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-2 h-2 bg-accent-500 rounded-full mt-3 mr-4"></span>
              <p className="text-lg text-gray-700 leading-relaxed">
                適切な水温管理と水流の調整により、快適な生息環境を提供
              </p>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-2 h-2 bg-accent-500 rounded-full mt-3 mr-4"></span>
              <p className="text-lg text-gray-700 leading-relaxed">
                スペースと隠れ家を配置し、ストレスを最小限に抑えるレイアウト設計
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
            <span className="text-accent-600">設</span>備とシステム
          </h2>
          <div className="space-y-8 relative pl-8 border-l-2 border-accent-500/40">
            <div className="relative">
              <div className="absolute -left-[21px] top-0 w-4 h-4 bg-accent-500 rounded-full border-4 border-white shadow-sm"></div>
              <div className="ml-6">
                <p className="text-sm text-gray-500 mb-2">水質管理</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  強力な<span className="text-accent-600 font-semibold">濾過システム</span>と定期的な換水により、常に清潔で安定した水環境を維持しています
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-0 w-4 h-4 bg-accent-500 rounded-full border-4 border-white shadow-sm"></div>
              <div className="ml-6">
                <p className="text-sm text-gray-500 mb-2">水温管理</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  水量にあった<span className="text-accent-600 font-semibold">ヒーター</span>とエアコン24時間稼働により、年間を通じて最適な水温を維持
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-0 w-4 h-4 bg-accent-500 rounded-full border-4 border-white shadow-sm"></div>
              <div className="ml-6">
                <p className="text-sm text-gray-500 mb-2">レイアウト設計</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  血統の厳格な管理と十分な<span className="text-accent-600 font-semibold">隠れ家</span>の配置により、ストレスのない快適な空間を実現
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            <span className="text-accent-600">飼</span>育環境ギャラリー
          </h2>
          <p className="text-center text-gray-600 mb-10">
            キンペコたちが暮らす什器水槽の様子
          </p>
          
          <div className="relative group">
            {/* メイン画像コンテナ */}
            <div className="relative w-full h-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-2xl shadow-primary-900/20">
              <Image
                src="/images/environment/environment_image.jpg"
                alt="飼育環境"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* グラデーションオーバーレイ */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* キャプション */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-white text-lg md:text-xl font-medium drop-shadow-lg">
                  什器水槽（多段水槽）システム
                </p>
                <p className="text-white/80 text-sm md:text-base mt-2">
                  約2畳のスペースで複数の水槽を効率的に管理
                </p>
              </div>
            </div>
            
            {/* 装飾フレーム */}
            <div className="absolute -inset-2 bg-gradient-to-r from-accent-500/20 via-primary-500/20 to-accent-500/20 rounded-3xl -z-10 blur-sm" />
          </div>
        </div>
      </section>

      {/* Now Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            <span className="text-accent-600">日</span>々の管理
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            毎日の観察とメンテナンスを通じて、環境の最適化を続けています。個体の状態を確認しながら、必要に応じて調整を行います。
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-accent-500 mr-3 font-bold">•</span>
              <p className="text-lg text-gray-700 leading-relaxed">
                痩せている個体や体調を崩している個体がいないかのチェック
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-accent-500 mr-3 font-bold">•</span>
              <p className="text-lg text-gray-700 leading-relaxed">
                毎日の水換えと清掃作業
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-accent-500 mr-3 font-bold">•</span>
              <p className="text-lg text-gray-700 leading-relaxed">
                個体の健康状態と行動パターンの観察
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
              <BloodlineLinkButton>ブリードしている血統を見る</BloodlineLinkButton>
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
