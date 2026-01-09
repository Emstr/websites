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
  metadataBase: new URL("https://whitehorsenotarypublic.com"),
  title: {
    default: "White Horse Notary Public | Muhammad Karim | Westminster London",
    template: "%s | White Horse Notary Public",
  },
  description:
    "Professional notary public services in Westminster, Central London. Document authentication, legalisation, apostille services for businesses and individuals. Evening and weekend appointments available.",
  keywords: [
    "notary public",
    "Westminster",
    "Central London",
    "notarisation",
    "apostille",
    "legalisation",
    "document authentication",
    "certified copies",
    "power of attorney",
    "notary London SW1",
    "Victoria notary",
    "Pimlico notary",
    "Belgravia notary",
    "Mayfair notary",
  ],
  authors: [{ name: "Muhammad Karim" }],
  creator: "Muhammad Karim",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://whitehorsenotarypublic.com",
    siteName: "White Horse Notary Public",
    title: "White Horse Notary Public | Muhammad Karim | Westminster London",
    description:
      "Professional notary public services in Westminster, Central London. Document authentication, legalisation, apostille services for businesses and individuals.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "White Horse Notary Public - Muhammad Karim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "White Horse Notary Public | Muhammad Karim | Westminster London",
    description:
      "Professional notary public services in Westminster, Central London. Document authentication, legalisation, apostille services.",
  },
  alternates: {
    canonical: "https://whitehorsenotarypublic.com",
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
  name: "White Horse Notary Public",
  description:
    "Professional notary public services in Westminster, Central London. Document authentication, legalisation, apostille services for businesses and individuals.",
  url: "https://whitehorsenotarypublic.com",
  telephone: "+44 20 3817 7502",
  email: "info@whitehorsenotarypublic.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Westminster",
    addressLocality: "Westminster",
    addressRegion: "London",
    postalCode: "SW1",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4975,
    longitude: -0.1357,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:30",
  },
  priceRange: "££",
  areaServed: [
    "Westminster",
    "Victoria",
    "Pimlico",
    "Belgravia",
    "Mayfair",
  ],
  founder: {
    "@type": "Person",
    name: "Muhammad Karim",
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
