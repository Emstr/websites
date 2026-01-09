import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://strategy-wealth.co.uk"),
  title: {
    default: "Strategy Wealth | Independent Financial Adviser | Bodmin, Cornwall",
    template: "%s | Strategy Wealth",
  },
  description:
    "Modern, technology-led independent financial advice in Cornwall. Pensions, investments, and protection planning. Founded by David Ellicott DipPFS. Serving Bodmin, St Austell, and across Cornwall & Devon.",
  keywords: [
    "financial adviser",
    "wealth management",
    "pensions",
    "investments",
    "protection",
    "independent financial advice",
    "Cornwall",
    "Bodmin",
    "St Austell",
    "Devon",
    "David Ellicott",
    "ValidPath",
  ],
  authors: [{ name: "Strategy Wealth" }],
  creator: "Strategy Wealth",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://strategy-wealth.co.uk",
    siteName: "Strategy Wealth",
    title: "Strategy Wealth | Independent Financial Adviser | Bodmin, Cornwall",
    description:
      "Modern, technology-led independent financial advice in Cornwall. Pensions, investments, and protection planning. Serving Bodmin, St Austell, Cornwall & Devon.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Strategy Wealth - Independent Financial Adviser Cornwall",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategy Wealth | Independent Financial Adviser Cornwall",
    description:
      "Modern, technology-led independent financial advice. Pensions, investments, and protection planning in Cornwall & Devon.",
  },
  alternates: {
    canonical: "https://strategy-wealth.co.uk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Strategy Wealth",
  description:
    "Modern, technology-led independent financial advice. Specializing in pensions, investments, and protection planning for individuals and businesses across Cornwall and Devon.",
  url: "https://strategy-wealth.co.uk",
  founder: {
    "@type": "Person",
    name: "David Ellicott",
    jobTitle: "DipPFS",
  },
  foundingDate: "2023",
  address: {
    "@type": "PostalAddress",
    streetAddress: "45 Tanwood View",
    addressLocality: "Bodmin",
    addressRegion: "Cornwall",
    postalCode: "PL31 2PN",
    addressCountry: "GB",
  },
  areaServed: [
    "Bodmin",
    "St Austell",
    "Cornwall",
    "Devon",
    "South West England",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Financial Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Planning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Planning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Protection Planning",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
