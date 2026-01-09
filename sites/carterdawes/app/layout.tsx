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
  metadataBase: new URL("https://carterdawes.com"),
  title: {
    default: "CarterDawes | Bespoke Financial Planning | Devon & Suffolk",
    template: "%s | CarterDawes",
  },
  description:
    "Unique dual-location financial planning spanning Devon to Suffolk. Fair, impartial, and truly independent bespoke financial advice. The only firm offering coast-to-coast coverage across England.",
  keywords: [
    "financial planning Devon",
    "financial planning Suffolk",
    "independent financial adviser",
    "bespoke financial planning",
    "investment advice Devon",
    "investment advice Suffolk",
    "retirement planning",
    "pension advice",
    "dual location financial adviser",
    "CarterDawes",
    "coast to coast financial planning",
  ],
  authors: [{ name: "CarterDawes" }],
  creator: "CarterDawes",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://carterdawes.com",
    siteName: "CarterDawes",
    title: "CarterDawes | Bespoke Financial Planning | Devon & Suffolk",
    description:
      "Unique dual-location financial planning spanning Devon to Suffolk. Fair, impartial, and truly independent bespoke advice.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CarterDawes - Bespoke Financial Planning Devon & Suffolk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CarterDawes | Bespoke Financial Planning",
    description:
      "Unique dual-location financial planning spanning Devon to Suffolk. Fair, impartial, and truly independent.",
  },
  alternates: {
    canonical: "https://carterdawes.com",
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
  verification: {
    // Add these when you have the verification codes
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "CarterDawes",
  description:
    "Bespoke financial planning firm offering truly independent advice with unique dual-location coverage spanning Devon to Suffolk. Fair, impartial financial planning across the width of England.",
  url: "https://carterdawes.com",
  email: "info@carterdawes.com",
  address: [
    {
      "@type": "PostalAddress",
      addressRegion: "Devon",
      addressLocality: "Devon",
      addressCountry: "GB",
    },
    {
      "@type": "PostalAddress",
      addressRegion: "Suffolk",
      addressLocality: "Suffolk",
      addressCountry: "GB",
    },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  areaServed: [
    "Devon",
    "Suffolk",
    "Cornwall",
    "Somerset",
    "Norfolk",
    "Essex",
    "Cambridgeshire",
    "South West England",
    "East Anglia",
    "England",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Financial Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bespoke Financial Planning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Retirement Planning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Advice",
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
