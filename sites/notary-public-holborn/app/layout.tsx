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
  metadataBase: new URL("https://notarypublicholborn.co.uk"),
  title: {
    default: "Notary Public Holborn | Multilingual Services | Central London WC1/WC2",
    template: "%s | Notary Public Holborn",
  },
  description:
    "Professional notary public services in Holborn, Central London. Multilingual support in Russian, Mandarin, and Portuguese. Document authentication, legalisation, apostille services for businesses and individuals.",
  keywords: [
    "notary public",
    "Holborn",
    "Central London",
    "notarisation",
    "apostille",
    "legalisation",
    "document authentication",
    "certified copies",
    "power of attorney",
    "notary London WC1",
    "notary London WC2",
    "multilingual notary",
    "Russian notary",
    "Mandarin notary",
    "Portuguese notary",
  ],
  authors: [{ name: "Notary Public Holborn" }],
  creator: "Notary Public Holborn",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://notarypublicholborn.co.uk",
    siteName: "Notary Public Holborn",
    title: "Notary Public Holborn | Multilingual Services | Central London WC1/WC2",
    description:
      "Professional notary public services in Holborn, Central London. Multilingual support in Russian, Mandarin, and Portuguese. Document authentication, legalisation, apostille services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Notary Public Holborn - Multilingual Notarial Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notary Public Holborn | Multilingual Services | Central London WC1/WC2",
    description:
      "Professional notary public services in Holborn, Central London. Multilingual support in Russian, Mandarin, and Portuguese.",
  },
  alternates: {
    canonical: "https://notarypublicholborn.co.uk",
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
  "@type": "NotaryService",
  name: "Notary Public Holborn",
  description:
    "Professional notary public services in Holborn, Central London. Multilingual support in Russian, Mandarin, and Portuguese. Document authentication, legalisation, apostille services for businesses and individuals.",
  url: "https://notarypublicholborn.co.uk",
  telephone: "+44 20 7242 5000",
  email: "info@notarypublicholborn.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Holborn",
    addressLocality: "Holborn",
    addressRegion: "London",
    postalCode: "WC1",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5175,
    longitude: -0.1200,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:30",
  },
  priceRange: "££",
  areaServed: [
    "Holborn",
    "Bloomsbury",
    "Covent Garden",
    "Chancery Lane",
    "Farringdon",
    "King's Cross",
    "City of London",
  ],
  knowsLanguage: ["English", "Russian", "Mandarin", "Portuguese"],
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
