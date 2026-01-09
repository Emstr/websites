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
  metadataBase: new URL("https://bernardcordell-notarypublic.co.uk"),
  title: {
    default: "Bernard Cordell - Notary Public & Solicitor | Belsize Park NW3",
    template: "%s | Bernard Cordell Notary Public",
  },
  description:
    "Bernard Cordell - Notary Public and Company/Commercial Solicitor in Belsize Park, NW3. Multilingual service, evening/weekend appointments, free parking. Professional indemnity £1m. Serving Hampstead, Swiss Cottage, Camden, Kentish Town. Call 020 7209 4138.",
  keywords: [
    "notary public",
    "Belsize Park",
    "NW3",
    "North London",
    "Hampstead",
    "Swiss Cottage",
    "Camden",
    "Kentish Town",
    "commercial solicitor",
    "company solicitor",
    "multilingual notary",
    "evening appointments",
    "weekend appointments",
    "notarisation",
    "apostille",
    "legalisation",
    "document authentication",
    "certified copies",
    "power of attorney",
  ],
  authors: [{ name: "Bernard Cordell" }],
  creator: "Bernard Cordell",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://bernardcordell-notarypublic.co.uk",
    siteName: "Bernard Cordell - Notary Public & Solicitor",
    title: "Bernard Cordell - Notary Public & Solicitor | Belsize Park NW3",
    description:
      "Notary Public and Company/Commercial Solicitor in Belsize Park, NW3. Multilingual service, evening/weekend appointments, free parking. Professional indemnity £1m. Call 020 7209 4138.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bernard Cordell - Notary Public & Solicitor, Belsize Park",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bernard Cordell - Notary Public & Solicitor | Belsize Park NW3",
    description:
      "Notary Public and Company/Commercial Solicitor. Multilingual service, evening/weekend appointments, free parking. Call 020 7209 4138.",
  },
  alternates: {
    canonical: "https://bernardcordell-notarypublic.co.uk",
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
  name: "Bernard Cordell - Notary Public & Solicitor",
  description:
    "Notary Public and Company/Commercial Solicitor in Belsize Park, NW3. Multilingual service with many years of legal practice experience. Evening and weekend appointments available, office or client location visits, free parking permits provided. Professional indemnity insurance £1 million.",
  url: "https://bernardcordell-notarypublic.co.uk",
  telephone: "+442072094138",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belsize Park",
    postalCode: "NW3",
    addressRegion: "London",
    addressCountry: "GB",
  },
  priceRange: "££",
  areaServed: [
    {
      "@type": "City",
      name: "Belsize Park",
    },
    {
      "@type": "City",
      name: "Hampstead",
    },
    {
      "@type": "City",
      name: "Swiss Cottage",
    },
    {
      "@type": "City",
      name: "Camden",
    },
    {
      "@type": "City",
      name: "Kentish Town",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Bernard Cordell",
    jobTitle: "Notary Public & Company/Commercial Solicitor",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Notarial Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Document Authentication & Notarisation",
          description: "Professional notarial services for business and personal documents",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Apostille & Legalisation",
          description: "Document legalisation for international use",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Powers of Attorney",
          description: "Notarisation of powers of attorney documents",
        },
      },
    ],
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Evening Appointments",
      value: "Available by prior arrangement",
    },
    {
      "@type": "PropertyValue",
      name: "Weekend Appointments",
      value: "Available by prior arrangement",
    },
    {
      "@type": "PropertyValue",
      name: "Parking",
      value: "Free parking permits provided",
    },
    {
      "@type": "PropertyValue",
      name: "Languages",
      value: "English and modern foreign languages",
    },
    {
      "@type": "PropertyValue",
      name: "Professional Indemnity",
      value: "£1 million",
    },
    {
      "@type": "PropertyValue",
      name: "Appointment Location",
      value: "Office or client location available",
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
