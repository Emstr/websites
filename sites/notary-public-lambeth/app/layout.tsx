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
  metadataBase: new URL("https://notarypubliclambeth.co.uk"),
  title: {
    default: "Notary Public Lambeth | David Adeyemi | Brixton SW9",
    template: "%s | Notary Public Lambeth",
  },
  description:
    "Professional notary public services in Lambeth, London. Document authentication, legalisation, apostille services for businesses and individuals. Evening and weekend appointments available.",
  keywords: [
    "notary public",
    "Lambeth",
    "London",
    "notarisation",
    "apostille",
    "legalisation",
    "document authentication",
    "certified copies",
    "power of attorney",
    "notary Brixton SW9",
  ],
  authors: [{ name: "David Adeyemi" }],
  creator: "David Adeyemi",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://notarypubliclambeth.co.uk",
    siteName: "Notary Public Lambeth",
    title: "Notary Public Lambeth | David Adeyemi | Brixton SW9",
    description:
      "Professional notary public services in Lambeth, London. Document authentication, legalisation, apostille services for businesses and individuals.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Notary Public Lambeth - David Adeyemi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notary Public Lambeth | David Adeyemi | Brixton SW9",
    description:
      "Professional notary public services in Lambeth, London. Document authentication, legalisation, apostille services.",
  },
  alternates: {
    canonical: "https://notarypubliclambeth.co.uk",
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
  name: "Notary Public Lambeth",
  description:
    "Professional notary public services in Lambeth, London. Document authentication, legalisation, apostille services for businesses and individuals.",
  url: "https://notarypubliclambeth.co.uk",
  telephone: "+44 20 7278 2800",
  email: "david@lambethnotary.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "156 Brixton Road",
    addressLocality: "Lambeth",
    addressRegion: "London",
    postalCode: "SW9 6AT",
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
    "Lambeth",
    "City of London",
    "Hackney",
    "Camden",
    "Westminster",
    "Tower Hamlets",
    "Southwark",
  ],
  founder: {
    "@type": "Person",
    name: "David Adeyemi",
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
