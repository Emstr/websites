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
  metadataBase: new URL("https://notarysouthwark.co.uk"),
  title: {
    default: "Notary Southwark | Professional Notary Public | London SE1",
    template: "%s | Notary Southwark",
  },
  description:
    "Professional notary public services in Southwark, London. Document authentication, legalisation, apostille services for businesses and individuals. Convenient location in London SE1.",
  keywords: [
    "notary public",
    "Southwark",
    "London",
    "notarisation",
    "apostille",
    "legalisation",
    "document authentication",
    "certified copies",
    "power of attorney",
    "notary London SE1",
    "Waterloo notary",
    "Kennington notary",
  ],
  authors: [{ name: "Notary Southwark" }],
  creator: "Notary Southwark",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://notarysouthwark.co.uk",
    siteName: "Notary Southwark",
    title: "Notary Southwark | Professional Notary Public | London SE1",
    description:
      "Professional notary public services in Southwark, London. Document authentication, legalisation, apostille services for businesses and individuals.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Notary Southwark - Professional Notary Public",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notary Southwark | Professional Notary Public | London SE1",
    description:
      "Professional notary public services in Southwark, London. Document authentication, legalisation, apostille services.",
  },
  alternates: {
    canonical: "https://notarysouthwark.co.uk",
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
  name: "Notary Southwark",
  description:
    "Professional notary public services in Southwark, London. Document authentication, legalisation, apostille services for businesses and individuals.",
  url: "https://notarysouthwark.co.uk",
  telephone: "+44 20 7928 5000",
  email: "info@notarysouthwark.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Southwark",
    addressLocality: "Southwark",
    addressRegion: "London",
    postalCode: "SE1",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5017,
    longitude: -0.1049,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:30",
  },
  priceRange: "$$",
  areaServed: [
    "Southwark",
    "Waterloo",
    "Kennington",
    "Vauxhall",
    "Lambeth",
    "Brixton",
    "Walworth",
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
