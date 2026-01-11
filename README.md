# キンペコ販売促進サイト

個人でブリードしている熱帯魚（キンペコ）の販売促進を目的としたウェブサイト。

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **デプロイ**: Vercel
- **バージョン管理**: GitHub

## セットアップ

### 必要な環境

- Node.js 18以上
- npm または yarn

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### ビルド

```bash
npm run build
```

### 本番環境での起動

```bash
npm start
```

## プロジェクト構造

```
kinpeko_2026/
├── app/                    # Next.js App Router
│   ├── components/         # 再利用可能なコンポーネント
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── globals.css         # グローバルスタイル
│   ├── layout.tsx          # ルートレイアウト
│   └── page.tsx            # ホームページ
├── public/                 # 静的ファイル（画像など）
├── content/                # コンテンツファイル
│   └── blog/               # ブログ記事（Markdown）
├── SPECIFICATION.md        # プロジェクト仕様書
└── package.json
```

## デザイン

### カラースキーム

- **メインカラー**: 濃紺 (#1a237e)
- **アクセントカラー**: ゴールド (#d4af37)

### SNSリンク

- **X (Twitter)**: [@aquarium621](https://x.com/aquarium621)
- **Instagram**: [@kinpeco_aquarium](https://www.instagram.com/kinpeco_aquarium/)
- **YouTube**: [@aquarium-abyss](https://www.youtube.com/@aquarium-abyss)

## 開発

詳細な仕様については [SPECIFICATION.md](./SPECIFICATION.md) を参照してください。

## デプロイ

このプロジェクトはVercelにデプロイすることを想定しています。

### Vercelへのデプロイ手順

1. **GitHubリポジトリにプッシュ**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Vercelにログイン**
   - [Vercel](https://vercel.com)にアクセス
   - GitHubアカウントでログイン

3. **プロジェクトをインポート**
   - "Add New..." → "Project"を選択
   - GitHubリポジトリを選択してインポート

4. **環境変数の設定**
   - プロジェクト設定 → Environment Variables
   - 以下を追加：
     ```
     NEXT_PUBLIC_SITE_URL=https://abyss-kinpeko.com
     ```

5. **デプロイ**
   - Vercelが自動的にビルドとデプロイを実行

### 独自ドメインの設定

1. **Vercelでドメインを追加**
   - プロジェクトのSettings → Domains
   - "Add"をクリック
   - `abyss-kinpeko.com`を入力

2. **DNS設定**
   Vercelが表示するDNSレコードを、ドメイン管理画面で設定：
   - **AレコードまたはCNAMEレコード**を追加（Vercelが指示を表示）
   - 通常はCNAMEレコードで `cname.vercel-dns.com` を指す

3. **SSL証明書**
   - Vercelが自動的にSSL証明書を発行（数分～数時間）

詳細は[Vercelのドキュメント](https://vercel.com/docs/concepts/projects/domains)を参照してください。

## ライセンス

このプロジェクトは個人プロジェクトです。
