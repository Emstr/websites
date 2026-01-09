import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bennettwalden.co.uk"),
  title: {
    default: "Bennett Walden - BW of Hackney | Estate Agents Since 1994 | Sales, Lettings & Property Management",
    template: "%s | Bennett Walden - BW of Hackney",
  },
  description:
    "Established estate agents in Hackney since 1994. Expert property sales, lettings, and management across E2, E5, E8, E9, N1, N16. Covering Hackney, London Fields, Clapton, Dalston, Stoke Newington, De Beauvoir Town, and Victoria Park. 30 years of local expertise.",
  keywords: [
    "estate agents Hackney",
    "property sales Hackney",
    "lettings Hackney",
    "property management Hackney",
    "London Fields estate agents",
    "Dalston estate agents",
    "Clapton property sales",
    "Stoke Newington lettings",
    "De Beauvoir Town",
    "Victoria Park properties",
    "E8 estate agents",
    "E9 property sales",
    "N16 lettings",
    "Bennett Walden",
  ],
  authors: [{ name: "Bennett Walden - BW of Hackney" }],
  creator: "Bennett Walden - BW of Hackney",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://bennettwalden.co.uk",
    siteName: "Bennett Walden - BW of Hackney",
    title: "Bennett Walden - BW of Hackney | Estate Agents Since 1994",
    description:
      "Established estate agents in Hackney since 1994. Expert property sales, lettings, and management across Hackney, London Fields, Clapton, Dalston, Stoke Newington, and more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bennett Walden - BW of Hackney Estate Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bennett Walden - BW of Hackney | Estate Agents Since 1994",
    description:
      "30 years of local expertise in Hackney property sales, lettings, and management. Fast results, detailed feedback, deep local knowledge.",
  },
  alternates: {
    canonical: "https://bennettwalden.co.uk",
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
  "@type": "RealEstateAgent",
  name: "Bennett Walden - BW of Hackney",
  description:
    "Established estate agents in Hackney since 1994. Expert property sales, lettings, and property management services across Hackney, London Fields, Clapton, Dalston, Stoke Newington, De Beauvoir Town, and Victoria Park.",
  url: "https://bennettwalden.co.uk",
  telephone: "+44 20 7257 7177",
  faxNumber: "+44 20 7254 9515",
  email: "hackney@bennettwalden.co.uk",
  foundingDate: "1994",
  address: {
    "@type": "PostalAddress",
    streetAddress: "121 Richmond Road",
    addressLocality: "Hackney",
    addressRegion: "London",
    postalCode: "E8 3NJ",
    addressCountry: "GB",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Hackney",
    },
    {
      "@type": "Place",
      name: "London Fields",
    },
    {
      "@type": "Place",
      name: "Clapton",
    },
    {
      "@type": "Place",
      name: "Dalston",
    },
    {
      "@type": "Place",
      name: "Stoke Newington",
    },
    {
      "@type": "Place",
      name: "De Beauvoir Town",
    },
    {
      "@type": "Place",
      name: "Victoria Park",
    },
  ],
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Property Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Property Sales",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Property Lettings",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Property Management",
        },
      },
    ],
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
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
