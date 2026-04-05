import type { Metadata } from "next";
import { Space_Grotesk, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";
import { KEYWORDS, SITE_META_DESCRIPTION } from "@/lib/company";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL != null && process.env.NEXT_PUBLIC_SITE_URL !== ""
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "https://hybriddot.com";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF8" },
    { media: "(prefers-color-scheme: dark)", color: "#0C0C0E" },
  ],
  title: {
    default: "HybridDot | Creative, marketing & technology solutions",
    template: "%s | HybridDot",
  },
  description: SITE_META_DESCRIPTION,
  keywords: [...KEYWORDS],
  openGraph: {
    type: "website",
    siteName: "HybridDot",
    locale: "en_US",
    title: "HybridDot | Creative, marketing & technology solutions",
    description: SITE_META_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: "HybridDot | Creative, marketing & technology solutions",
    description: SITE_META_DESCRIPTION,
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
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${instrumentSerif.variable}`}
    >
      <body className="font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:inline-flex focus:h-auto focus:w-auto focus:items-center focus:overflow-visible focus:rounded-lg focus:bg-[#C1121F] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-md focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-[#C1121F]"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen bg-[#FAFAF8]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
