import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Stack Wars פודקאסט",
    template: "%s | Stack Wars פודקאסט",
  },
  description:
    "פודקאסט שחוקר את הקרבות האינסופיים בין טכנולוגיות, פריימוורקים, והמפתחים שאוהבים אותם.",
  keywords: [
    "פודקאסט",
    "טכנולוגיה",
    "תכנות",
    "פיתוח תוכנה",
    "סטאקים טכנולוגיים",
  ],
  authors: [{ name: "Stack Wars פודקאסט" }],
  openGraph: {
    type: "website",
    locale: "he_IL",
    siteName: "Stack Wars פודקאסט",
    title: "Stack Wars פודקאסט",
    description:
      "פודקאסט שחוקר את הקרבות האינסופיים בין טכנולוגיות, פריימוורקים, והמפתחים שאוהבים אותם.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stack Wars פודקאסט",
    description:
      "פודקאסט שחוקר את הקרבות האינסופיים בין טכנולוגיות, פריימוורקים, והמפתחים שאוהבים אותם.",
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
