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
    default: "White Horse Solicitors & Notary Public | Muhammad Karim | Stepney Green & Canary Wharf",
    template: "%s | White Horse Notary Public",
  },
  description:
    "Professional notary public services in Stepney Green and Canary Wharf, London. Specialist China & UAE legalisation. Mobile notary available. Same-day appointments weekdays & weekends. Services from £70.",
  keywords: [
    "notary public",
    "Stepney Green",
    "Canary Wharf",
    "East London notary",
    "notarisation",
    "apostille",
    "legalisation",
    "China legalisation",
    "UAE legalisation",
    "document authentication",
    "certified copies",
    "power of attorney",
    "mobile notary London",
    "same day notary",
    "notary E1",
    "notary E14",
    "Muhammad Karim notary",
    "White Horse Solicitors",
  ],
  authors: [{ name: "Muhammad Karim" }],
  creator: "Muhammad Karim",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://whitehorsenotarypublic.com",
    siteName: "White Horse Solicitors & Notary Public",
    title: "White Horse Solicitors & Notary Public | Muhammad Karim | Stepney Green & Canary Wharf",
    description:
      "Professional notary public services in Stepney Green and Canary Wharf. Specialist China & UAE legalisation. Mobile notary available. Same-day appointments.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "White Horse Solicitors & Notary Public - Muhammad Karim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "White Horse Solicitors & Notary Public | Muhammad Karim",
    description:
      "Professional notary public services in Stepney Green and Canary Wharf. Specialist China & UAE legalisation. Mobile notary available.",
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
  name: "White Horse Solicitors & Notary Public",
  description:
    "Professional notary public services in Stepney Green and Canary Wharf, East London. Specialist legalisation for China and UAE. Mobile notary services available. Same-day appointments weekdays and weekends.",
  url: "https://whitehorsenotarypublic.com",
  telephone: "+44 20 3817 7502",
  email: "info@mk-notarypublic.com",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "96 White Horse Lane",
      addressLocality: "Stepney Green",
      addressRegion: "London",
      postalCode: "E1 4LR",
      addressCountry: "GB",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "25 Cabot Square",
      addressLocality: "Canary Wharf",
      addressRegion: "London",
      postalCode: "E14 4QZ",
      addressCountry: "GB",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5174,
    longitude: -0.0424,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "10:00",
      closes: "16:00",
    },
  ],
  priceRange: "££",
  areaServed: [
    "Stepney Green",
    "Canary Wharf",
    "Mile End",
    "Whitechapel",
    "Tower Hamlets",
    "East London",
  ],
  founder: {
    "@type": "Person",
    name: "Muhammad Karim",
    jobTitle: "Notary Public & Solicitor",
    description: "Qualified Solicitor (2012), Notary Public (2015, UCL Diploma in Notarial Practice)",
  },
  foundingDate: "2015",
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Notarial Services",
        description: "Document certification, apostille, and legalisation services",
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "70",
        priceCurrency: "GBP",
        description: "Starting from",
      },
    },
  ],
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Mobile Notary",
      value: "Available for elderly, busy professionals, and family groups",
    },
    {
      "@type": "PropertyValue",
      name: "Same-Day Appointments",
      value: "Available weekdays and weekends",
    },
    {
      "@type": "PropertyValue",
      name: "Specialist Services",
      value: "Complex legalisation for China and UAE",
    },
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
