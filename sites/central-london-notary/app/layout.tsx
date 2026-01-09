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
  metadataBase: new URL("https://notarypubliccentrallondon.co.uk"),
  title: {
    default: "Notary Public Central London | Holborn | Multilingual Services",
    template: "%s | Notary Public Central London",
  },
  description:
    "Professional notary public services in Holborn, Central London. Multilingual support in Russian, Mandarin, and Portuguese. Document authentication, legalisation, and apostille services for businesses and individuals.",
  keywords: [
    "notary public",
    "Central London",
    "Holborn",
    "London",
    "notarisation",
    "apostille",
    "legalisation",
    "document authentication",
    "multilingual notary",
    "Russian notary",
    "Mandarin notary",
    "Portuguese notary",
    "certified copies",
    "power of attorney",
    "notary WC1",
    "notary WC2",
  ],
  authors: [{ name: "Notary Public Central London" }],
  creator: "Notary Public Central London",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://notarypubliccentrallondon.co.uk",
    siteName: "Notary Public Central London",
    title: "Notary Public Central London | Holborn | Multilingual Services",
    description:
      "Professional notary public services in Holborn, Central London. Multilingual support in Russian, Mandarin, and Portuguese. Document authentication and apostille services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Notary Public Central London - Multilingual Notary Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notary Public Central London | Holborn | Multilingual Services",
    description:
      "Professional notary public services in Holborn, Central London. Multilingual support: Russian, Mandarin, Portuguese.",
  },
  alternates: {
    canonical: "https://notarypubliccentrallondon.co.uk",
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
  name: "Notary Public Central London",
  description:
    "Professional notary public services in Holborn, Central London with multilingual support in Russian, Mandarin, and Portuguese. Document authentication, legalisation, apostille services for businesses and individuals.",
  url: "https://notarypubliccentrallondon.co.uk",
  telephone: "+44 20 7405 6789",
  email: "info@notarypubliccentrallondon.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Holborn",
    addressLocality: "Central London",
    addressRegion: "London",
    postalCode: "WC1",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5174,
    longitude: -0.1204,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "££",
  areaServed: [
    "Holborn",
    "Covent Garden",
    "Bloomsbury",
    "Chancery Lane",
    "Fleet Street",
    "Farringdon",
    "City of London",
  ],
  knowsLanguage: ["en", "ru", "zh", "pt"],
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
