import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kinpeko.example.com";

export const metadata: Metadata = {
  title: "自己紹介",
  description: "ブリーダーとしての想いとキンペコへのこだわり、ブリーディング環境をご紹介します",
  openGraph: {
    title: "自己紹介 | キンペコ - 熱帯魚ブリーダー",
    description: "ブリーダーとしての想いとキンペコへのこだわり、ブリーディング環境をご紹介します",
    url: `${siteUrl}/about`,
  },
  twitter: {
    card: "summary_large_image",
    title: "自己紹介 | キンペコ - 熱帯魚ブリーダー",
    description: "ブリーダーとしての想いとキンペコへのこだわり、ブリーディング環境をご紹介します",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
