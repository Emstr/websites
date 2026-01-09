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
  metadataBase: new URL("https://notarypublichackney-haringey.co.uk"),
  title: {
    default: "Notary Public Stamford Hill | Hackney-Haringey | North London",
    template: "%s | Notary Public Stamford Hill",
  },
  description:
    "Professional notary public services in Stamford Hill, serving Hackney, Haringey, and wider North London. Document authentication, legalisation, apostille services. Transparent pricing: £285/hr, minimum £80 + VAT. Out of hours and weekend appointments available.",
  keywords: [
    "notary public",
    "Stamford Hill",
    "Hackney",
    "Haringey",
    "North London",
    "notarisation",
    "apostille",
    "legalisation",
    "document authentication",
    "certified copies",
    "power of attorney",
    "Tottenham",
    "Walthamstow",
    "Edmonton",
    "Stoke Newington",
    "Dalston",
    "Finsbury Park",
    "Seven Sisters",
    "Islington",
    "Crouch End",
    "Muswell Hill",
    "Wood Green",
  ],
  authors: [{ name: "Notary Public Stamford Hill" }],
  creator: "Notary Public Stamford Hill",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://notarypublichackney-haringey.co.uk",
    siteName: "Notary Public Stamford Hill",
    title: "Notary Public Stamford Hill | Hackney-Haringey | North London",
    description:
      "Professional notary public services in Stamford Hill, serving Hackney, Haringey, and wider North London. Document authentication, legalisation, apostille services. Transparent pricing: £285/hr, minimum £80 + VAT.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Notary Public Stamford Hill - Hackney-Haringey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notary Public Stamford Hill | Hackney-Haringey | North London",
    description:
      "Professional notary public services in Stamford Hill, serving Hackney and Haringey. Document authentication, legalisation, apostille services.",
  },
  alternates: {
    canonical: "https://notarypublichackney-haringey.co.uk",
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
  name: "Notary Public Stamford Hill (Hackney-Haringey)",
  description:
    "Professional notary public services in Stamford Hill, serving Hackney, Haringey, and wider North London. Document authentication, legalisation, apostille services for businesses and individuals. Transparent pricing: £285/hr, minimum £80 + VAT. Out of hours and weekend appointments available.",
  url: "https://notarypublichackney-haringey.co.uk",
  telephone: "+44 20 8826 2131",
  email: "info@notarypublichackney-haringey.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 Egerton Road, Stamford Hill",
    addressLocality: "London",
    addressRegion: "London",
    postalCode: "N16 6UE",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5732,
    longitude: -0.0737,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
    description: "Out of hours and weekend appointments available",
  },
  priceRange: "££",
  paymentAccepted: ["Cash", "Debit Card", "Bank Transfer"],
  areaServed: [
    "Hackney",
    "Haringey",
    "Stamford Hill",
    "Tottenham",
    "Walthamstow",
    "Edmonton",
    "Stoke Newington",
    "Dalston",
    "Manor House",
    "Crouch End",
    "Muswell Hill",
    "Finsbury Park",
    "Seven Sisters",
    "Cockfosters",
    "Enfield",
    "Southgate",
    "Wood Green",
    "Hornsey",
    "Highgate",
    "Camden Town",
    "Holloway",
    "Highbury",
    "Woodford",
    "Clapton",
    "Wanstead",
    "Leyton",
    "Stratford",
    "Islington",
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
