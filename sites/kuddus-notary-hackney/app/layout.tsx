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
  metadataBase: new URL("https://notarypublichackney.com"),
  title: {
    default: "Notary Public Hackney | Kuddus Solicitors | East London",
    template: "%s | Notary Public Hackney",
  },
  description:
    "Professional notary public services in Hackney, East London by Kuddus Ali - qualified since 2008 with Cambridge diploma. 17+ years experience. Prices from £65, NO VAT. Document authentication, legalisation, apostille services.",
  keywords: [
    "notary public",
    "Hackney",
    "London",
    "East London",
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
    url: "https://notarypublichackney.com",
    siteName: "Notary Public Hackney",
    title: "Notary Public Hackney | Kuddus Solicitors | East London",
    description:
      "Professional notary public services in Hackney, East London by Kuddus Ali - qualified since 2008, Cambridge diploma, 17+ years experience. Prices from £65, NO VAT.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Notary Public Hackney - Kuddus Solicitors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notary Public Hackney | Kuddus Solicitors | East London",
    description:
      "Professional notary public services in Hackney by Kuddus Ali - 17+ years experience, Cambridge diploma. Prices from £65, NO VAT.",
  },
  alternates: {
    canonical: "https://notarypublichackney.com",
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
  name: "Notary Public Hackney - Kuddus Solicitors",
  description:
    "Professional notary public services in Hackney, East London by Kuddus Ali - qualified since 2008 with Cambridge diploma. 17+ years experience. Prices from £65, NO VAT.",
  url: "https://notarypublichackney.com",
  telephone: "+44 20 7247 5476",
  email: "ka@kuddussolicitors.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9 Cambridge Park, Wanstead",
    addressLocality: "Hackney",
    addressRegion: "London",
    postalCode: "E11 2PU",
    addressCountry: "GB",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:30",
  },
  priceRange: "££",
  areaServed: [
    "Hackney",
    "Dalston",
    "Stoke Newington",
    "Shoreditch",
    "Hoxton",
    "Clapton",
    "Homerton",
  ],
  parentOrganization: {
    "@type": "LegalService",
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
