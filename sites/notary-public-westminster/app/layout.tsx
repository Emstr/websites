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
  metadataBase: new URL("https://notarypublicwestminster.co.uk"),
  title: {
    default: "Notary Public Westminster | James Thornton | Mayfair W1",
    template: "%s | Notary Public Westminster",
  },
  description:
    "Professional notary public services in Westminster and Mayfair, London. Document authentication, legalisation, apostille services for businesses and individuals. Corporate and private client specialists.",
  keywords: [
    "notary public",
    "Westminster",
    "Mayfair",
    "London",
    "notarisation",
    "apostille",
    "legalisation",
    "document authentication",
    "certified copies",
    "power of attorney",
    "notary London W1",
    "corporate notary",
  ],
  authors: [{ name: "James Thornton" }],
  creator: "James Thornton",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://notarypublicwestminster.co.uk",
    siteName: "Notary Public Westminster",
    title: "Notary Public Westminster | James Thornton | Mayfair W1",
    description:
      "Professional notary public services in Westminster and Mayfair, London. Document authentication, legalisation, apostille services for businesses and individuals.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Notary Public Westminster - James Thornton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notary Public Westminster | James Thornton | Mayfair W1",
    description:
      "Professional notary public services in Westminster and Mayfair, London. Document authentication, legalisation, apostille services.",
  },
  alternates: {
    canonical: "https://notarypublicwestminster.co.uk",
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
  name: "Notary Public Westminster",
  description:
    "Professional notary public services in Westminster and Mayfair, London. Document authentication, legalisation, apostille services for businesses and individuals.",
  url: "https://notarypublicwestminster.co.uk",
  telephone: "+44 20 7629 8800",
  email: "james@thorntonnotary.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "45 Piccadilly",
    addressLocality: "Mayfair",
    addressRegion: "London",
    postalCode: "W1J 0DS",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5074,
    longitude: -0.1411,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "£££",
  areaServed: [
    "Westminster",
    "Mayfair",
    "Belgravia",
    "Hyde Park",
    "Knightsbridge",
    "St James's",
    "Marylebone",
  ],
  founder: {
    "@type": "Person",
    name: "James Thornton",
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
