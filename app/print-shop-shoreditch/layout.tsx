import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Shoreditch Print Studio | Premium Printing & Design in East London",
    template: "%s | Shoreditch Print Studio",
  },
  description:
    "Professional print and design studio in Shoreditch, East London. Business cards, large format printing, art prints, screen printing, branded merchandise and graphic design. Same-day turnaround available.",
  keywords: [
    "print shop Shoreditch",
    "printing services East London",
    "business cards London",
    "large format printing",
    "art prints",
    "giclée printing",
    "screen printing Shoreditch",
    "branded merchandise",
    "graphic design",
    "same day printing London",
    "eco-friendly printing",
    "Shoreditch design studio",
  ],
  authors: [{ name: "Shoreditch Print Studio" }],
  creator: "Shoreditch Print Studio",
  publisher: "Shoreditch Print Studio",
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
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://shoreditchprintstudio.co.uk",
    siteName: "Shoreditch Print Studio",
    title: "Shoreditch Print Studio | Premium Printing & Design",
    description:
      "Professional print and design studio in the heart of Shoreditch. Business cards, large format, art prints, screen printing and graphic design with same-day turnaround.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shoreditch Print Studio - Premium Printing & Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoreditch Print Studio | Premium Printing & Design",
    description:
      "Professional printing and design services in Shoreditch, East London. Same-day turnaround available.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://shoreditchprintstudio.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Shoreditch, London",
    "geo.position": "51.5235;-0.0811",
    ICBM: "51.5235, -0.0811",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://shoreditchprintstudio.co.uk/#organization",
  name: "Shoreditch Print Studio",
  description:
    "Professional print and design studio offering business cards, large format printing, art prints, screen printing, branded merchandise and graphic design services.",
  url: "https://shoreditchprintstudio.co.uk",
  telephone: "+442079468830",
  email: "hello@shoreditchprint.co.uk",
  foundingDate: "2016",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
  areaServed: [
    {
      "@type": "City",
      name: "London",
    },
    {
      "@type": "AdministrativeArea",
      name: "Greater London",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Printing & Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Cards & Stationery",
          description: "Premium business cards, letterheads, and corporate stationery printed on quality stocks.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Large Format Printing",
          description: "Banners, posters, exhibition displays and signage in any size.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Art Prints & Giclée",
          description: "Museum-quality giclée prints on fine art papers and canvas.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Screen Printing",
          description: "Hand-pulled screen prints for apparel, posters and limited editions.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Branded Merchandise",
          description: "Custom branded merchandise including tote bags, mugs, pens and apparel.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Graphic Design",
          description: "Full-service graphic design for logos, branding, packaging and marketing materials.",
        },
      },
    ],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "52 Curtain Road",
    addressLocality: "Shoreditch",
    addressRegion: "London",
    postalCode: "EC2A 3PT",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5235,
    longitude: -0.0811,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "17:00",
    },
  ],
};

const printServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://shoreditchprintstudio.co.uk/#localbusiness",
  name: "Shoreditch Print Studio",
  image: "https://shoreditchprintstudio.co.uk/logo.png",
  telephone: "+442079468830",
  email: "hello@shoreditchprint.co.uk",
  url: "https://shoreditchprintstudio.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "52 Curtain Road",
    addressLocality: "Shoreditch",
    addressRegion: "London",
    postalCode: "EC2A 3PT",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5235,
    longitude: -0.0811,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://shoreditchprintstudio.co.uk/#website",
  url: "https://shoreditchprintstudio.co.uk",
  name: "Shoreditch Print Studio",
  description: "Premium printing and design services in Shoreditch, East London",
  publisher: {
    "@id": "https://shoreditchprintstudio.co.uk/#organization",
  },
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="print-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(printServiceSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
