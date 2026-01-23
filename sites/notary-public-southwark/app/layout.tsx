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
    default: "Notary Public Southwark | Kuddus Solicitors | London SE1",
    template: "%s | Notary Public Southwark",
  },
  description:
    "Professional notary public services in Southwark, London. Document authentication, legalisation, apostille services for businesses and individuals. Convenient location near London Bridge.",
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
    "Kuddus Solicitors",
  ],
  authors: [{ name: "Kuddus Solicitors" }],
  creator: "Kuddus Solicitors",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://notarypublicsouthwark.co.uk",
    siteName: "Notary Public Southwark",
    title: "Notary Public Southwark | Kuddus Solicitors | London SE1",
    description:
      "Professional notary public services in Southwark, London. Document authentication, legalisation, apostille services for businesses and individuals.",
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
    title: "Notary Public Southwark | Kuddus Solicitors | London SE1",
    description:
      "Professional notary public services in Southwark, London. Document authentication, legalisation, apostille services.",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NotaryService",
  name: "Notary Public Southwark",
  description:
    "Professional notary public services in Southwark, London. Document authentication, legalisation, apostille services for businesses and individuals.",
  url: "https://notarypublicsouthwark.co.uk",
  telephone: "+44 20 7247 5476",
  email: "reception@kuddussolicitors.com",
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
    latitude: 51.5035,
    longitude: -0.0998,
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
    "Elephant & Castle",
    "London Bridge",
    "Bermondsey",
    "Peckham",
    "Camberwell",
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
