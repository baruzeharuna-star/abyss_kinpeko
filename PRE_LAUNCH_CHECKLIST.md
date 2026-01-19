# ホームページ公開前チェックリスト

## ✅ 実装済み

- [x] SEO設定（メタタグ、OGP、Twitterカード）
- [x] 構造化データ（JSON-LD）
- [x] sitemap.xml
- [x] robots.txt
- [x] Google Analytics コンポーネント（実装済み、環境変数設定が必要）
- [x] 404エラーページ

## 🔲 設定が必要な項目

### 1. Google Analytics の設定

1. [Google Analytics](https://analytics.google.com/) でアカウントを作成
2. プロパティを作成して測定ID（例: `G-XXXXXXXXXX`）を取得
3. Vercelの環境変数に追加：
   - **Name**: `NEXT_PUBLIC_GA_ID`
   - **Value**: `G-XXXXXXXXXX`（取得した測定ID）
   - **Environment**: Production, Preview, Development すべてにチェック

### 2. 環境変数の確認

Vercelの環境変数で以下が設定されているか確認：

- `NEXT_PUBLIC_SITE_URL` = `https://abyss-kinpeko.com`（または独自ドメイン）

### 3. 独自ドメインの設定

- [ ] Vercelで独自ドメインを設定
- [ ] DNS設定が正しく行われているか確認
- [ ] SSL証明書が自動発行されているか確認

## 📋 推奨される追加項目

### 1. プライバシーポリシー（任意）

個人サイトでも、Google Analyticsを使用する場合はプライバシーポリシーの設置が推奨されます。

### 2. パフォーマンステスト

- [ ] Lighthouse スコア確認（目標: 90以上）
- [ ] モバイル表示の確認
- [ ] 画像の最適化確認

### 3. クロスブラウザテスト

- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Edge

### 4. リンクチェック

- [ ] すべての内部リンクが正しく動作するか
- [ ] 外部リンクが正しく動作するか
- [ ] SNSリンクが正しく設定されているか

### 5. コンテンツの最終確認

- [ ] 誤字脱字のチェック
- [ ] 画像が正しく表示されるか
- [ ] ブログ記事の表示確認

## 🚀 公開後の確認

1. Google Search Console にサイトを登録
2. Google Analytics でアクセスが記録されているか確認
3. ソーシャルメディアでOGP画像が正しく表示されるか確認
