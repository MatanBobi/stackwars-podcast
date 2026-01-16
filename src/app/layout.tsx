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
    default: "Stack Wars Podcast",
    template: "%s | Stack Wars Podcast",
  },
  description:
    "A podcast exploring the endless battles between technology stacks, frameworks, and the developers who love them.",
  keywords: ["podcast", "technology", "programming", "software development", "tech stacks"],
  authors: [{ name: "Stack Wars Podcast" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Stack Wars Podcast",
    title: "Stack Wars Podcast",
    description:
      "A podcast exploring the endless battles between technology stacks, frameworks, and the developers who love them.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stack Wars Podcast",
    description:
      "A podcast exploring the endless battles between technology stacks, frameworks, and the developers who love them.",
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
    <html lang="en">
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
