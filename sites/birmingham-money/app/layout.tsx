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
  metadataBase: new URL("https://birmingham-money.co.uk"),
  title: {
    default: "Birmingham Money | Mortgage Specialists | Birmingham & West Bromwich",
    template: "%s | Birmingham Money",
  },
  description:
    "Expert mortgage advice in Birmingham and West Bromwich. Specialists in self-employed mortgages, first-time buyers, and buy-to-let investors. Face-to-face service with many years of experience.",
  keywords: [
    "mortgage adviser",
    "mortgage broker",
    "mortgages",
    "self-employed mortgages",
    "first-time buyer",
    "buy-to-let",
    "remortgage",
    "Birmingham",
    "West Bromwich",
    "West Midlands",
    "mortgage specialist",
  ],
  authors: [{ name: "Birmingham Money" }],
  creator: "Birmingham Money",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://birmingham-money.co.uk",
    siteName: "Birmingham Money",
    title: "Birmingham Money | Mortgage Specialists | Birmingham & West Bromwich",
    description:
      "Expert mortgage advice in Birmingham and West Bromwich. Specialists in self-employed mortgages, first-time buyers, and buy-to-let investors.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Birmingham Money - Mortgage Specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Birmingham Money | Mortgage Specialists Birmingham",
    description:
      "Expert mortgage advice with a personal touch. Specialists in self-employed mortgages across Birmingham and the West Midlands.",
  },
  alternates: {
    canonical: "https://birmingham-money.co.uk",
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
  name: "Birmingham Money",
  description:
    "Expert mortgage and protection advice across Birmingham and West Bromwich. Specializing in self-employed mortgages, first-time buyers, and buy-to-let investors with face-to-face personal service.",
  url: "https://birmingham-money.co.uk",
  foundingDate: "2010",
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Birmingham",
      addressRegion: "West Midlands",
      addressCountry: "GB",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "West Bromwich",
      addressRegion: "West Midlands",
      addressCountry: "GB",
    },
  ],
  areaServed: [
    "Birmingham",
    "West Bromwich",
    "Solihull",
    "Wolverhampton",
    "Walsall",
    "Dudley",
    "West Midlands",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mortgage Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Self-Employed Mortgages",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "First-Time Buyer Mortgages",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Buy-to-Let Mortgages",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Remortgage Services",
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
