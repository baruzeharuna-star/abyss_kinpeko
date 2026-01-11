import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kinpeko.example.com";

export const metadata: Metadata = {
  title: {
    default: "キンペコ - 熱帯魚ブリーダー",
    template: "%s | キンペコ - 熱帯魚ブリーダー",
  },
  description: "個人でブリードしているキンペコ（熱帯魚）の販売促進サイト",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "キンペコ - 熱帯魚ブリーダー",
    title: "キンペコ - 熱帯魚ブリーダー",
    description: "個人でブリードしているキンペコ（熱帯魚）の販売促進サイト",
  },
  twitter: {
    card: "summary_large_image",
    title: "キンペコ - 熱帯魚ブリーダー",
    description: "個人でブリードしているキンペコ（熱帯魚）の販売促進サイト",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kinpeko.example.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "キンペコ - 熱帯魚ブリーダー",
    description: "個人でブリードしているキンペコ（熱帯魚）の販売促進サイト",
    url: siteUrl,
    sameAs: [
      "https://x.com/aquarium621",
      "https://www.instagram.com/kinpeco_aquarium",
      "https://www.youtube.com/@aquarium-abyss",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "キンペコ - 熱帯魚ブリーダー",
    url: siteUrl,
    description: "個人でブリードしているキンペコ（熱帯魚）の販売促進サイト",
  };

  return (
    <html lang="ja">
      <body className={`${inter.variable} ${notoSansJP.variable} font-sans flex flex-col min-h-screen`}>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}