import BloodlineLinkButton from "../components/BloodlineLinkButton";

export default function PurchasePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[35vh] flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden pt-20 md:pt-24">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            <span className="text-accent-400">購入</span>方法
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            私のブリードした<span className="text-accent-300">キンペコ</span>の購入方法をご案内いたします
          </p>
        </div>
        {/* セクション区切りライン */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent"></div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            <span className="text-accent-600 font-semibold">キンペコ</span>の購入をご検討いただき、ありがとうございます。
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            個人ブリーダーとして、丁寧に育てた個体を直接お届けしています。
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            購入方法やお問い合わせについては、以下の内容をご確認ください。
          </p>
        </div>
        {/* セクション区切りライン */}
        <div className="max-w-3xl mx-auto mt-16 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent"></div>
      </section>

      {/* Purchase Process Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            <span className="text-accent-600">購</span>入の流れ
          </h2>
          
          <div className="space-y-8 relative pl-8 border-l-2 border-accent-500/40">
            <div className="relative">
              <div className="absolute -left-[21px] top-0 w-4 h-4 bg-accent-500 rounded-full border-4 border-white shadow-sm"></div>
              <div className="ml-6">
                <p className="text-sm text-gray-500 mb-2">ステップ1</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="text-accent-600 font-semibold">お問い合わせ</span>：SNSまたはメールでご連絡ください
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-0 w-4 h-4 bg-accent-500 rounded-full border-4 border-white shadow-sm"></div>
              <div className="ml-6">
                <p className="text-sm text-gray-500 mb-2">ステップ2</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="text-accent-600 font-semibold">在庫確認</span>：現在の在庫状況をご案内いたします
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-0 w-4 h-4 bg-accent-500 rounded-full border-4 border-white shadow-sm"></div>
              <div className="ml-6">
                <p className="text-sm text-gray-500 mb-2">ステップ3</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="text-accent-600 font-semibold">お支払い</span>：ご希望の個体が確定したら、お支払い方法をご案内いたします
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-0 w-4 h-4 bg-accent-500 rounded-full border-4 border-white shadow-sm"></div>
              <div className="ml-6">
                <p className="text-sm text-gray-500 mb-2">ステップ4</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="text-accent-600 font-semibold">発送</span>：適切な梱包を行い、安全にお届けいたします
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* セクション区切りライン */}
        <div className="max-w-3xl mx-auto mt-16 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent"></div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            <span className="text-accent-600">お</span>問い合わせ
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            ご質問やご相談は、以下のSNSアカウントからお気軽にお問い合わせください。
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-accent-500 mr-3 font-bold">•</span>
              <p className="text-lg text-gray-700 leading-relaxed">
                X (Twitter): <a href="https://x.com/aquarium621" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700 underline">@aquarium621</a>
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-accent-500 mr-3 font-bold">•</span>
              <p className="text-lg text-gray-700 leading-relaxed">
                Instagram: <a href="https://www.instagram.com/kinpeco_aquarium/" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700 underline">@kinpeco_aquarium</a>
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-accent-500 mr-3 font-bold">•</span>
              <p className="text-lg text-gray-700 leading-relaxed">
                YouTube: <a href="https://www.youtube.com/@aquarium-abyss" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700 underline">@aquarium-abyss</a>
              </p>
            </li>
          </ul>
        </div>
        {/* セクション区切りライン */}
        <div className="max-w-3xl mx-auto mt-16 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent"></div>
      </section>

      {/* Notes Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            <span className="text-accent-600">注</span>意事項
          </h2>
          <div className="mb-12 pl-6 border-l-4 border-accent-500/60 bg-white/50 py-6 pr-6 rounded-r-lg shadow-sm">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed italic">
              「個体の健康を最優先に、適切な環境での飼育をお願いいたします」
            </p>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-accent-500 mr-3 font-bold">•</span>
              <p className="text-lg text-gray-700 leading-relaxed">
                在庫状況により、お待ちいただく場合がございます
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-accent-500 mr-3 font-bold">•</span>
              <p className="text-lg text-gray-700 leading-relaxed">
                発送は適切な梱包を行いますが、到着後はすぐに水合わせを行ってください
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-accent-500 mr-3 font-bold">•</span>
              <p className="text-lg text-gray-700 leading-relaxed">
                個体の状態や血統情報については、お問い合わせ時に詳しくご案内いたします
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
