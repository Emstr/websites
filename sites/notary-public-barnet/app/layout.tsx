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
  metadataBase: new URL("https://notarypublicbarnet.co.uk"),
  title: {
    default: "Notary Public Barnet | Emma Richardson | Barnet EN5",
    template: "%s | Notary Public Barnet",
  },
  description:
    "Professional notary public services in Barnet, London. Document authentication, legalisation, apostille services for businesses and individuals. Evening and weekend appointments available.",
  keywords: [
    "notary public",
    "Barnet",
    "London",
    "notarisation",
    "apostille",
    "legalisation",
    "document authentication",
    "certified copies",
    "power of attorney",
    "notary Barnet EN5",
  ],
  authors: [{ name: "Emma Richardson" }],
  creator: "Emma Richardson",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://notarypublicbarnet.co.uk",
    siteName: "Notary Public Barnet",
    title: "Notary Public Barnet | Emma Richardson | Barnet EN5",
    description:
      "Professional notary public services in Barnet, London. Document authentication, legalisation, apostille services for businesses and individuals.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Notary Public Barnet - Emma Richardson",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notary Public Barnet | Emma Richardson | Barnet EN5",
    description:
      "Professional notary public services in Barnet, London. Document authentication, legalisation, apostille services.",
  },
  alternates: {
    canonical: "https://notarypublicbarnet.co.uk",
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
  name: "Notary Public Barnet",
  description:
    "Professional notary public services in Barnet, London. Document authentication, legalisation, apostille services for businesses and individuals.",
  url: "https://notarypublicbarnet.co.uk",
  telephone: "+44 20 7278 2800",
  email: "emma@barnetnotary.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "45 High Street",
    addressLocality: "Barnet",
    addressRegion: "London",
    postalCode: "EN5 5UJ",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.530445,
    longitude: -0.09739,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:30",
  },
  priceRange: "££",
  areaServed: [
    "Barnet",
    "City of London",
    "Hackney",
    "Camden",
    "Westminster",
    "Tower Hamlets",
    "Southwark",
  ],
  founder: {
    "@type": "Person",
    name: "Emma Richardson",
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
