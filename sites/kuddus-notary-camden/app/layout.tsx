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
  metadataBase: new URL("https://notarypubliccamden.com"),
  title: {
    default: "Notary Public Camden | Kuddus Solicitors | London NW1",
    template: "%s | Notary Public Camden",
  },
  description:
    "Professional notary public services in Camden, London. Document authentication, legalisation, apostille services for businesses and individuals. Part of Kuddus Solicitors network.",
  keywords: [
    "notary public",
    "Camden",
    "London",
    "notarisation",
    "apostille",
    "legalisation",
    "document authentication",
    "certified copies",
    "power of attorney",
    "notary London NW1",
    "Kuddus Solicitors",
  ],
  authors: [{ name: "Kuddus Solicitors" }],
  creator: "Kuddus Solicitors",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://notarypubliccamden.com",
    siteName: "Notary Public Camden",
    title: "Notary Public Camden | Kuddus Solicitors | London NW1",
    description:
      "Professional notary public services in Camden, London. Document authentication, legalisation, apostille services for businesses and individuals.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Notary Public Camden - Kuddus Solicitors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notary Public Camden | Kuddus Solicitors | London NW1",
    description:
      "Professional notary public services in Camden, London. Document authentication, legalisation, apostille services.",
  },
  alternates: {
    canonical: "https://notarypubliccamden.com",
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
  name: "Notary Public Camden",
  description:
    "Professional notary public services in Camden, London. Document authentication, legalisation, apostille services for businesses and individuals.",
  url: "https://notarypubliccamden.com",
  telephone: "+44 20 7247 5476",
  email: "reception@kuddussolicitors.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Camden",
    addressRegion: "London",
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
    "Camden",
    "King's Cross",
    "Kentish Town",
    "Hampstead",
    "Holborn",
    "Bloomsbury",
    "Euston",
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
