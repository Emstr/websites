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
  metadataBase: new URL("https://notarypublictowerhamlets.co.uk"),
  title: {
    default: "Notary Public Tower Hamlets | Kuddus Solicitors | #1 Ranked in East London",
    template: "%s | Notary Public Tower Hamlets",
  },
  description:
    "Professional notary public services in Tower Hamlets, East London by Kuddus Ali - qualified since 2008 with Cambridge diploma. 17+ years experience. Prices from £65, NO VAT. Serving Whitechapel, Mile End, Bethnal Green, Bow, Poplar, Canary Wharf.",
  keywords: [
    "notary public",
    "Tower Hamlets",
    "East London",
    "Whitechapel",
    "Mile End",
    "Bethnal Green",
    "Bow",
    "Poplar",
    "Canary Wharf",
    "notarisation",
    "apostille",
    "legalisation",
    "document authentication",
    "certified copies",
    "power of attorney",
    "Kuddus Solicitors",
  ],
  authors: [{ name: "Kuddus Solicitors" }],
  creator: "Kuddus Solicitors",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://notarypublictowerhamlets.co.uk",
    siteName: "Notary Public Tower Hamlets",
    title: "Notary Public Tower Hamlets | Kuddus Solicitors | #1 Ranked in East London",
    description:
      "Professional notary public services in Tower Hamlets, East London by Kuddus Ali - qualified since 2008, Cambridge diploma, 17+ years experience. Prices from £65, NO VAT.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Notary Public Tower Hamlets - Kuddus Solicitors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notary Public Tower Hamlets | Kuddus Solicitors | #1 Ranked in East London",
    description:
      "Professional notary public services in Tower Hamlets by Kuddus Ali - 17+ years experience, Cambridge diploma. Prices from £65, NO VAT.",
  },
  alternates: {
    canonical: "https://notarypublictowerhamlets.co.uk",
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
  name: "Notary Public Tower Hamlets - Kuddus Solicitors",
  description:
    "Professional notary public services in Tower Hamlets, East London by Kuddus Ali - qualified since 2008 with Cambridge diploma. 17+ years experience. Prices from £65, NO VAT.",
  url: "https://notarypublictowerhamlets.co.uk",
  telephone: "+44 20 7247 5476",
  email: "ka@kuddussolicitors.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9 Cambridge Park, Wanstead",
    addressLocality: "Tower Hamlets",
    addressRegion: "East London",
    postalCode: "E11 2PU",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5154,
    longitude: -0.0648,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:30",
  },
  priceRange: "££",
  areaServed: [
    "Tower Hamlets",
    "Whitechapel",
    "Mile End",
    "Bethnal Green",
    "Bow",
    "Poplar",
    "Canary Wharf",
  ],
  founder: {
    "@type": "Organization",
    name: "Kuddus Solicitors",
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
