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
    default: "Notary Public Tower Hamlets | Kuddus Solicitors | London E1",
    template: "%s | Notary Public Tower Hamlets",
  },
  description:
    "Professional notary public services in Tower Hamlets, London. Document authentication, legalisation, apostille services for businesses and individuals. Convenient location in East London.",
  keywords: [
    "notary public",
    "Tower Hamlets",
    "London",
    "notarisation",
    "apostille",
    "legalisation",
    "document authentication",
    "certified copies",
    "power of attorney",
    "notary London E1",
    "Kuddus Solicitors",
    "Whitechapel",
    "Canary Wharf",
  ],
  authors: [{ name: "Kuddus Solicitors" }],
  creator: "Kuddus Solicitors",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://notarypublictowerhamlets.co.uk",
    siteName: "Notary Public Tower Hamlets",
    title: "Notary Public Tower Hamlets | Kuddus Solicitors | London E1",
    description:
      "Professional notary public services in Tower Hamlets, London. Document authentication, legalisation, apostille services for businesses and individuals.",
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
    title: "Notary Public Tower Hamlets | Kuddus Solicitors | London E1",
    description:
      "Professional notary public services in Tower Hamlets, London. Document authentication, legalisation, apostille services.",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NotaryService",
  name: "Notary Public Tower Hamlets",
  description:
    "Professional notary public services in Tower Hamlets, London. Document authentication, legalisation, apostille services for businesses and individuals.",
  url: "https://notarypublictowerhamlets.co.uk",
  telephone: "+44 20 7247 5476",
  email: "reception@kuddussolicitors.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tower Hamlets",
    addressLocality: "Tower Hamlets",
    addressRegion: "London",
    postalCode: "E1",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.515,
    longitude: -0.034,
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
    "Bethnal Green",
    "Stepney",
    "Mile End",
    "Bow",
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
