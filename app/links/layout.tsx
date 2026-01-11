import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kinpeko.example.com";

export const metadata: Metadata = {
  title: "リンク集",
  description: "SNSや委託販売ショップへのリンクをまとめています。QRコードも生成できます。",
  openGraph: {
    title: "リンク集 | キンペコ - 熱帯魚ブリーダー",
    description: "SNSや委託販売ショップへのリンクをまとめています。QRコードも生成できます。",
    url: `${siteUrl}/links`,
  },
  twitter: {
    card: "summary_large_image",
    title: "リンク集 | キンペコ - 熱帯魚ブリーダー",
    description: "SNSや委託販売ショップへのリンクをまとめています。QRコードも生成できます。",
  },
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
