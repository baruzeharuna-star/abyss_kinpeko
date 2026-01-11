# デプロイ手順

このプロジェクトをVercelにデプロイして、独自ドメイン `abyss-kinpeko.com` で公開する手順です。

## 前提条件

- GitHubアカウント
- Vercelアカウント（GitHubと連携）
- 独自ドメイン `abyss-kinpeko.com` の管理権限

## デプロイ手順

### 1. GitHubリポジトリにプッシュ

```bash
git add .
git commit -m "準備完了: 本番デプロイ"
git push origin main
```

### 2. Vercelにプロジェクトをインポート

1. [Vercel](https://vercel.com)にアクセスしてログイン
2. "Add New..." → "Project"を選択
3. GitHubリポジトリを選択
4. "Import"をクリック

### 3. 環境変数の設定

Vercelのプロジェクト設定で環境変数を追加：

1. プロジェクトのSettings → Environment Variables
2. 以下の環境変数を追加：
   - **Name**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: `https://abyss-kinpeko.com`
   - **Environment**: Production, Preview, Development すべてにチェック

### 4. デプロイ

- Vercelが自動的にビルドとデプロイを実行します
- デプロイが完了すると、`.vercel.app` のURLが表示されます

### 5. 独自ドメインの設定

1. **Vercelでドメインを追加**
   - プロジェクトのSettings → Domains
   - "Add"ボタンをクリック
   - `abyss-kinpeko.com` を入力
   - "Add"をクリック

2. **DNS設定**
   Vercelが表示するDNSレコードを、ドメイン管理画面で設定します：
   
   - **レコードタイプ**: CNAME または Aレコード（Vercelが推奨する方を選択）
   - **名前/ホスト**: `@` または空白（ルートドメインの場合）
   - **値/ポイント先**: Vercelが表示する値（通常は `cname.vercel-dns.com` など）

   **注意**: 
   - ルートドメイン（`abyss-kinpeko.com`）の場合、Aレコードが必要な場合があります
   - サブドメイン（`www.abyss-kinpeko.com`）の場合、CNAMEレコードを使用します

3. **SSL証明書**
   - Vercelが自動的にSSL証明書を発行します
   - 数分〜数時間かかることがあります
   - 証明書が発行されると、HTTPSでアクセスできるようになります

### 6. 動作確認

1. `https://abyss-kinpeko.com` にアクセス
2. すべてのページが正常に表示されることを確認
3. OGPタグが正しく設定されているか確認（SNSシェアで確認）
4. `https://abyss-kinpeko.com/robots.txt` が表示されることを確認
5. `https://abyss-kinpeko.com/sitemap.xml` が表示されることを確認

## トラブルシューティング

### DNSの反映に時間がかかる

- DNS変更の反映には通常数分〜24時間かかることがあります
- `dig` コマンドやオンラインのDNSチェッカーで確認できます

### SSL証明書が発行されない

- DNS設定が正しく反映されているか確認してください
- Vercelのドメイン設定でエラーがないか確認してください

### 環境変数が反映されない

- 環境変数を追加した後、再デプロイが必要な場合があります
- Settings → Environment Variables で正しく設定されているか確認してください

## 参考リンク

- [Vercel ドキュメント - ドメイン](https://vercel.com/docs/concepts/projects/domains)
- [Vercel ドキュメント - 環境変数](https://vercel.com/docs/concepts/projects/environment-variables)
