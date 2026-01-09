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
  metadataBase: new URL("https://notarypublicsouthwark.co.uk"),
  title: {
    default: "Notary Public Southwark | Kuddus Solicitors | #1 Ranked South London",
    template: "%s | Notary Public Southwark",
  },
  description:
    "Professional notary public services in Southwark, South London by Kuddus Ali - qualified since 2008 with Cambridge diploma. 17+ years experience. Prices from £65, NO VAT. Document authentication, legalisation, apostille services.",
  keywords: [
    "notary public",
    "Southwark",
    "South London",
    "Borough",
    "Bermondsey",
    "Peckham",
    "Camberwell",
    "notarisation",
    "apostille",
    "legalisation",
    "document authentication",
    "certified copies",
    "power of attorney",
  ],
  authors: [{ name: "Kuddus Solicitors" }],
  creator: "Kuddus Solicitors",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://notarypublicsouthwark.co.uk",
    siteName: "Notary Public Southwark",
    title: "Notary Public Southwark | Kuddus Solicitors | #1 Ranked South London",
    description:
      "Professional notary public services in Southwark, South London by Kuddus Ali - qualified since 2008, Cambridge diploma, 17+ years experience. Prices from £65, NO VAT.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Notary Public Southwark - Kuddus Solicitors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notary Public Southwark | Kuddus Solicitors | #1 Ranked South London",
    description:
      "Professional notary public services in Southwark by Kuddus Ali - 17+ years experience, Cambridge diploma. Prices from £65, NO VAT.",
  },
  alternates: {
    canonical: "https://notarypublicsouthwark.co.uk",
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
  name: "Kuddus Solicitors - Notary Public Southwark",
  description:
    "Professional notary public services in Southwark, South London by Kuddus Ali - qualified since 2008 with Cambridge diploma. 17+ years experience. Prices from £65, NO VAT.",
  url: "https://notarypublicsouthwark.co.uk",
  telephone: "+44 20 7247 5476",
  email: "ka@kuddussolicitors.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9 Cambridge Park, Wanstead",
    addressLocality: "Southwark",
    addressRegion: "South London",
    postalCode: "E11 2PU",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5033,
    longitude: -0.0879,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:30",
  },
  priceRange: "££",
  areaServed: [
    "Southwark",
    "Borough",
    "Bermondsey",
    "Peckham",
    "Camberwell",
    "Elephant & Castle",
    "London Bridge",
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
