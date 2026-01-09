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
    default: "Notary Public Southwark | South London | Notary Southwark",
    template: "%s | Notary Southwark",
  },
  description:
    "Professional notary public services in Southwark, South London. Document authentication, legalisation, apostille services for businesses and individuals. Evening and weekend appointments available at your location.",
  keywords: [
    "notary public",
    "Southwark",
    "South London",
    "Bermondsey",
    "Rotherhithe",
    "Walworth",
    "Dulwich",
    "notarisation",
    "apostille",
    "legalisation",
    "document authentication",
    "certified copies",
    "power of attorney",
    "notary Southwark",
  ],
  authors: [{ name: "Notary Southwark" }],
  creator: "Notary Southwark",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://notarysouthwark.co.uk",
    siteName: "Notary Southwark",
    title: "Notary Public Southwark | South London | Notary Southwark",
    description:
      "Professional notary public services in Southwark, South London. Document authentication, legalisation, apostille services for businesses and individuals. Evening and weekend appointments.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Notary Southwark - Notary Public in South London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notary Public Southwark | South London | Notary Southwark",
    description:
      "Professional notary public services in Southwark, South London. Document authentication, legalisation, apostille services.",
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
  verification: {
    // Add these when you have the verification codes
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NotaryService",
  name: "Notary Southwark",
  description:
    "Professional notary public services in Southwark, South London. Document authentication, legalisation, apostille services for businesses and individuals. Evening and weekend appointments available.",
  url: "https://notarysouthwark.co.uk",
  email: "notarypublic@live.co.uk",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Southwark",
    addressRegion: "South London",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5032,
    longitude: -0.0869,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "20:00",
  },
  priceRange: "££",
  areaServed: [
    "Southwark",
    "Bermondsey",
    "Rotherhithe",
    "Walworth",
    "Dulwich",
    "Bankside",
    "Elephant and Castle",
    "Camberwell",
    "Peckham",
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
