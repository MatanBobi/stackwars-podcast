import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || site.url || "https://stackwars.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Stack Wars · פודקאסט בעברית למפתחים",
    template: "%s · Stack Wars",
  },
  description: site.longDescription,
  keywords: [
    "פודקאסט",
    "פודקאסט בעברית",
    "פודקאסט למפתחים",
    "תכנות",
    "פיתוח תוכנה",
    "פרונטאנד",
    "באקאנד",
    "stack wars",
  ],
  authors: [{ name: "Stack Wars Podcast" }],
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": site.platforms.rss ?? undefined,
    },
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: SITE_URL,
    siteName: "Stack Wars",
    title: "Stack Wars · פודקאסט בעברית למפתחים",
    description: site.longDescription,
    images: [
      {
        url: "/stack-wars.jpg",
        width: 1200,
        height: 1200,
        alt: "Stack Wars Podcast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stack Wars · פודקאסט בעברית למפתחים",
    description: site.tagline,
    images: ["/stack-wars.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
