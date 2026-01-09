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
  metadataBase: new URL("https://holderandcombes.co.uk"),
  title: {
    default: "Holder & Combes | Chartered Financial Planners | City of London",
    template: "%s | Holder & Combes",
  },
  description:
    "Chartered Financial Planners in the City of London. Investment & wealth management, retirement planning, pensions, estate planning, wills, and tax planning. Part of the top 5% of UK financial advisers.",
  keywords: [
    "chartered financial planner",
    "financial adviser",
    "City of London",
    "wealth management",
    "retirement planning",
    "pensions",
    "estate planning",
    "tax planning",
    "investment management",
    "St Paul's London",
    "IFA",
  ],
  authors: [{ name: "Holder & Combes" }],
  creator: "Holder & Combes",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://holderandcombes.co.uk",
    siteName: "Holder & Combes",
    title: "Holder & Combes | Chartered Financial Planners | City of London",
    description:
      "Chartered Financial Planners in the City of London. Investment & wealth management, retirement planning, pensions, estate planning. Top 5% of UK financial advisers.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Holder & Combes - Chartered Financial Planners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Holder & Combes | Chartered Financial Planners | City of London",
    description:
      "Chartered Financial Planners in the City of London. Investment & wealth management, retirement planning, pensions, estate planning.",
  },
  alternates: {
    canonical: "https://holderandcombes.co.uk",
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
  name: "Holder & Combes",
  description:
    "Chartered Financial Planners in the City of London. Investment & wealth management, retirement planning, pensions, estate planning, wills, and tax planning. Part of the top 5% of UK financial advisers.",
  url: "https://holderandcombes.co.uk",
  telephone: "+44 207 101 2817",
  address: {
    "@type": "PostalAddress",
    streetAddress: "20 Little Britain, St. Paul's",
    addressLocality: "City of London",
    addressRegion: "London",
    postalCode: "EC1A 7DH",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5161,
    longitude: -0.0982,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:30",
  },
  priceRange: "£££",
  areaServed: [
    "City of London",
    "Westminster",
    "Kensington and Chelsea",
    "Camden",
    "Islington",
    "Greater London",
    "United Kingdom",
  ],
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
