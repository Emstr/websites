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
    "Professional notary public services in Stamford Hill, serving Hackney and Haringey. Document authentication, legalisation, apostille services. £285/hr, minimum £80. Evening and weekend appointments available.",
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
    "Stoke Newington",
    "Finsbury Park",
    "Seven Sisters",
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
      "Professional notary public services in Stamford Hill, serving Hackney and Haringey. Document authentication, legalisation, apostille services. £285/hr, minimum £80.",
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
    "Professional notary public services in Stamford Hill, serving Hackney and Haringey. Document authentication, legalisation, apostille services for businesses and individuals. £285/hr, minimum £80.",
  url: "https://notarypublichackney-haringey.co.uk",
  telephone: "+44 20 8800 0000",
  email: "info@notarypublichackney-haringey.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Stamford Hill",
    addressLocality: "North London",
    addressRegion: "London",
    postalCode: "N16",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5732,
    longitude: -0.0737,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:30",
  },
  priceRange: "££",
  areaServed: [
    "Stamford Hill",
    "Tottenham",
    "Stoke Newington",
    "Finsbury Park",
    "Seven Sisters",
    "Hackney",
    "Haringey",
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
