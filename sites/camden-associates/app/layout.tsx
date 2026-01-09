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
  metadataBase: new URL("https://camdenassociates.co.uk"),
  title: {
    default: "Camden Associates | International Corporate Finance | London",
    template: "%s | Camden Associates",
  },
  description:
    "Camden Associates is a London-based corporate finance advisory specializing in Biotech, Technology, Real Estate, and Junior Mining & Exploration. Expert advisors for international transactions across Europe.",
  keywords: [
    "corporate finance",
    "M&A advisory",
    "biotech finance",
    "technology transactions",
    "real estate finance",
    "mining finance",
    "exploration finance",
    "London corporate finance",
    "international deals",
    "European transactions",
    "financial advisory",
    "deal structuring",
  ],
  authors: [{ name: "Camden Associates" }],
  creator: "Camden Associates",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://camdenassociates.co.uk",
    siteName: "Camden Associates",
    title: "Camden Associates | International Corporate Finance | London",
    description:
      "London-based corporate finance advisory specializing in Biotech, Technology, Real Estate, and Mining. Expert advisors for international transactions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Camden Associates - Corporate Finance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Camden Associates | International Corporate Finance",
    description:
      "London-based corporate finance advisory specializing in international transactions across Biotech, Tech, Real Estate, and Mining sectors.",
  },
  alternates: {
    canonical: "https://camdenassociates.co.uk",
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
  name: "Camden Associates",
  description:
    "International corporate finance advisory specializing in Biotech, Technology, Real Estate, and Junior Mining & Exploration sectors.",
  url: "https://camdenassociates.co.uk",
  telephone: "+44 20 7123 4567",
  email: "contact@camdenassociates.co.uk",
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
  areaServed: [
    "United Kingdom",
    "France",
    "Europe",
    "International",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Corporate Finance Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Biotech Corporate Finance",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Technology M&A Advisory",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Real Estate Finance",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mining & Exploration Finance",
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
