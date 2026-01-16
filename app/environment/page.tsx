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
            <span className="text-accent-600 font-semibold">キンペコ</span>にとって、適切な環境は健康と成長の基盤です。
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            水質管理、水温管理、そして十分なスペースと隠れ家を提供することで、ストレスのない快適な環境を維持しています。
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            日々の観察を通じて、最適な環境条件を追求し続けています。
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
              「個体の健康と福祉を最優先に考え、自然に近い環境を維持すること」
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
                十分なスペースと隠れ家を配置し、ストレスを最小限に抑える設計
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
                  高性能な<span className="text-accent-600 font-semibold">フィルターシステム</span>と定期的な水質検査により、常に清潔で安定した水環境を維持しています
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-0 w-4 h-4 bg-accent-500 rounded-full border-4 border-white shadow-sm"></div>
              <div className="ml-6">
                <p className="text-sm text-gray-500 mb-2">水温管理</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  適切な<span className="text-accent-600 font-semibold">ヒーター</span>とサーモスタットにより、年間を通じて最適な水温を維持
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-0 w-4 h-4 bg-accent-500 rounded-full border-4 border-white shadow-sm"></div>
              <div className="ml-6">
                <p className="text-sm text-gray-500 mb-2">レイアウト設計</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  個体数の適正管理と十分な<span className="text-accent-600 font-semibold">隠れ家</span>の配置により、ストレスのない快適な空間を実現
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500 italic">
                  {/* 実際の画像を配置する場合は、以下のコメントアウト部分を使用 */}
                  {/* <Image
                    src="/images/environment/breeding-tank.jpg"
                    alt="ブリーディング水槽"
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
            <span className="text-accent-600">日</span>々の管理
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            毎日の観察とメンテナンスを通じて、環境の最適化を続けています。個体の状態を確認しながら、必要に応じて調整を行います。
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-accent-500 mr-3 font-bold">•</span>
              <p className="text-lg text-gray-700 leading-relaxed">
                水質パラメータの定期的な測定と記録
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-accent-500 mr-3 font-bold">•</span>
              <p className="text-lg text-gray-700 leading-relaxed">
                週次の水換えと清掃作業
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
        <div className="max-w-3xl mx-auto text-center">
          <BloodlineLinkButton>ブリードしている血統を見る</BloodlineLinkButton>
        </div>
      </section>
    </div>
  );
}
