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
  metadataBase: new URL("https://therightbroker.co.uk"),
  title: {
    default: "The Right Broker | Independent Mortgage Advisers | Solihull, Birmingham",
    template: "%s | The Right Broker",
  },
  description:
    "Family-owned independent mortgage brokers in Solihull, Birmingham. Access to 90+ lenders. First-time buyers, remortgaging, buy-to-let. Customers at the heart of everything we do. Established 2015.",
  keywords: [
    "mortgage broker",
    "mortgage adviser",
    "independent mortgage broker",
    "first time buyer mortgage",
    "remortgage",
    "buy to let mortgage",
    "Solihull",
    "Birmingham",
    "family-owned",
    "90+ lenders",
  ],
  authors: [{ name: "The Right Broker" }],
  creator: "The Right Broker",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://therightbroker.co.uk",
    siteName: "The Right Broker",
    title: "The Right Broker | Independent Mortgage Advisers | Solihull",
    description:
      "Family-owned independent mortgage brokers with access to 90+ lenders. Expert mortgage advice for first-time buyers, remortgaging, and buy-to-let in Solihull and Birmingham.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Right Broker - Independent Mortgage Advisers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Right Broker | Independent Mortgage Advisers",
    description:
      "Family-owned mortgage brokers in Solihull with access to 90+ lenders. Putting customers at the heart of everything we do.",
  },
  alternates: {
    canonical: "https://therightbroker.co.uk",
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
  name: "The Right Broker",
  description:
    "Family-owned independent mortgage brokers based in Solihull, Birmingham. We provide expert mortgage advice with access to 90+ lenders, specializing in first-time buyers, remortgaging, and buy-to-let mortgages.",
  url: "https://therightbroker.co.uk",
  foundingDate: "2015-06",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Solihull",
    addressRegion: "Birmingham",
    addressCountry: "GB",
  },
  areaServed: [
    "Solihull",
    "Birmingham",
    "West Midlands",
    "Warwickshire",
    "Worcestershire",
    "United Kingdom",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mortgage Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "First Time Buyer Mortgages",
          description: "Expert mortgage advice for first-time buyers with access to 90+ lenders",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Remortgage Services",
          description: "Find better mortgage deals when remortgaging your property",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Buy to Let Mortgages",
          description: "Specialist buy-to-let mortgage advice for landlords and investors",
        },
      },
    ],
  },
  slogan: "Family-owned. Customers at heart. Truly independent.",
  knowsAbout: ["Mortgages", "First Time Buyer", "Remortgage", "Buy to Let", "Mortgage Advice"],
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
