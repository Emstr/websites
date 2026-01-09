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
  metadataBase: new URL("https://bernardcordell-notarypublic.co.uk"),
  title: {
    default: "Bernard Cordell - Notary Public | Belsize Park, North London",
    template: "%s | Bernard Cordell Notary Public",
  },
  description:
    "Professional notary public services in Belsize Park, North London. Bernard Cordell provides document authentication, legalisation, and apostille services for businesses and individuals across Hampstead, Primrose Hill, Swiss Cottage, and Camden.",
  keywords: [
    "notary public",
    "Belsize Park",
    "North London",
    "Hampstead",
    "Primrose Hill",
    "Swiss Cottage",
    "St John's Wood",
    "Camden",
    "notarisation",
    "apostille",
    "legalisation",
    "document authentication",
    "certified copies",
    "power of attorney",
  ],
  authors: [{ name: "Bernard Cordell" }],
  creator: "Bernard Cordell",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://bernardcordell-notarypublic.co.uk",
    siteName: "Bernard Cordell - Notary Public",
    title: "Bernard Cordell - Notary Public | Belsize Park, North London",
    description:
      "Professional notary public services in Belsize Park, North London. Document authentication, legalisation, apostille services for businesses and individuals.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bernard Cordell - Notary Public, Belsize Park",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bernard Cordell - Notary Public | Belsize Park, North London",
    description:
      "Professional notary public services in Belsize Park, North London. Document authentication, legalisation, apostille services.",
  },
  alternates: {
    canonical: "https://bernardcordell-notarypublic.co.uk",
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
  "@type": "NotaryService",
  name: "Bernard Cordell - Notary Public",
  description:
    "Professional notary public services in Belsize Park, North London. Document authentication, legalisation, apostille services for businesses and individuals.",
  url: "https://bernardcordell-notarypublic.co.uk",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belsize Park",
    addressRegion: "North London",
    addressCountry: "GB",
  },
  priceRange: "££",
  areaServed: [
    "Belsize Park",
    "Hampstead",
    "Primrose Hill",
    "Swiss Cottage",
    "St John's Wood",
    "Camden",
  ],
  founder: {
    "@type": "Person",
    name: "Bernard Cordell",
    jobTitle: "Notary Public",
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
