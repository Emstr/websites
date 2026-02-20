import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Mayfair Fine Art | Contemporary Art Gallery on Cork Street",
    template: "%s | Mayfair Fine Art",
  },
  description:
    "Contemporary art gallery on Cork Street, Mayfair. Exhibitions, art consultancy, corporate art, private viewings, and art investment advisory since 2010.",
  keywords: [
    "art gallery",
    "contemporary art",
    "Cork Street gallery",
    "Mayfair art",
    "art consultancy",
    "corporate art",
    "private viewings",
    "art investment",
    "London gallery",
    "emerging artists",
    "fine art",
    "art exhibitions",
  ],
  authors: [{ name: "Mayfair Fine Art" }],
  creator: "Mayfair Fine Art",
  publisher: "Mayfair Fine Art",
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
    url: "https://mayfairfineart.co.uk",
    siteName: "Mayfair Fine Art",
    title: "Mayfair Fine Art | Contemporary Art Gallery on Cork Street",
    description:
      "Contemporary art gallery on Cork Street, Mayfair. Exhibitions, art consultancy, corporate art, and investment advisory since 2010.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mayfair Fine Art - Contemporary Art Gallery on Cork Street",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayfair Fine Art | Contemporary Art Gallery",
    description:
      "Contemporary art gallery on Cork Street, Mayfair. Exhibitions, consultancy, and art investment advisory.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://mayfairfineart.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "London",
    "geo.position": "51.5095;-0.1405",
    ICBM: "51.5095, -0.1405",
  },
};

const artGallerySchema = {
  "@context": "https://schema.org",
  "@type": "ArtGallery",
  "@id": "https://mayfairfineart.co.uk/#organization",
  name: "Mayfair Fine Art",
  description:
    "Contemporary art gallery on Cork Street, Mayfair. Exhibitions, art consultancy, corporate art, private viewings, and art investment advisory since 2010.",
  url: "https://mayfairfineart.co.uk",
  telephone: "+442079462200",
  email: "gallery@mayfairfineart.co.uk",
  foundingDate: "2010",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  areaServed: [
    {
      "@type": "City",
      name: "London",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Gallery Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Contemporary Exhibitions",
          description: "Curated exhibitions showcasing emerging and established contemporary artists.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Art Consultancy",
          description: "Bespoke art consultancy for private collectors and interior designers.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate Art",
          description: "Art sourcing and curation for corporate offices, hotels, and commercial spaces.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Private Viewings",
          description: "Exclusive private viewings and VIP preview events for collectors.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Art Investment Advisory",
          description: "Expert guidance on building and managing art portfolios as alternative investments.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Framing & Installation",
          description: "Professional framing, conservation, and installation services for artworks.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Mayfair Fine Art",
    address: {
      "@type": "PostalAddress",
      streetAddress: "15 Cork Street",
      addressLocality: "Mayfair",
      addressRegion: "London",
      postalCode: "W1S 3LW",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5095,
      longitude: -0.1405,
    },
    telephone: "+442079462200",
  },
  sameAs: [
    "https://www.instagram.com/mayfairfineart",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://mayfairfineart.co.uk/#localbusiness",
  name: "Mayfair Fine Art",
  image: "https://mayfairfineart.co.uk/logo.png",
  telephone: "+442079462200",
  email: "gallery@mayfairfineart.co.uk",
  url: "https://mayfairfineart.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "15 Cork Street",
    addressLocality: "Mayfair",
    addressRegion: "London",
    postalCode: "W1S 3LW",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5095,
    longitude: -0.1405,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "11:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://mayfairfineart.co.uk/#website",
  url: "https://mayfairfineart.co.uk",
  name: "Mayfair Fine Art",
  description: "Contemporary art gallery on Cork Street, Mayfair",
  publisher: {
    "@id": "https://mayfairfineart.co.uk/#organization",
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
        id="art-gallery-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(artGallerySchema),
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
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
