import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Soho Sushi Kitchen | Authentic Japanese Sushi in Soho, London",
    template: "%s | Soho Sushi Kitchen",
  },
  description:
    "Authentic Japanese sushi restaurant in Soho, London. Omakase tasting menus, sushi bar dining, bento boxes and sake pairings. Head chef with 15 years Nobu training, sustainably sourced fish.",
  keywords: [
    "sushi restaurant Soho",
    "Japanese restaurant London",
    "omakase Soho",
    "sushi bar Wardour Street",
    "bento box Soho",
    "sake pairing London",
    "sashimi Soho",
    "Japanese food West End",
    "private dining Soho",
    "sushi takeaway Soho",
    "best sushi London",
    "sustainable sushi restaurant",
  ],
  authors: [{ name: "Soho Sushi Kitchen" }],
  creator: "Soho Sushi Kitchen",
  publisher: "Soho Sushi Kitchen",
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
    url: "https://sohosushi.co.uk",
    siteName: "Soho Sushi Kitchen",
    title: "Soho Sushi Kitchen | Authentic Japanese Sushi",
    description:
      "Authentic Japanese sushi in the heart of Soho. Omakase tasting menus, sushi bar dining and sake pairings. Sustainably sourced fish, prepared by a Nobu-trained head chef.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Soho Sushi Kitchen - Authentic Japanese Sushi in Soho",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soho Sushi Kitchen | Japanese Sushi in Soho",
    description:
      "Authentic Japanese sushi restaurant in Soho. Omakase, sushi bar and sake pairings since 2020.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://sohosushi.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Soho, London",
    "geo.position": "51.5130;-0.1315",
    ICBM: "51.5130, -0.1315",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://sohosushi.co.uk/#organization",
  name: "Soho Sushi Kitchen",
  description:
    "Authentic Japanese sushi restaurant in Soho, London. Omakase tasting menus, sushi bar dining, bento boxes and sake pairings prepared by a Nobu-trained head chef.",
  url: "https://sohosushi.co.uk",
  telephone: "+442079463380",
  email: "reservations@sohosushi.co.uk",
  foundingDate: "2020",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  servesCuisine: "Japanese",
  acceptsReservations: "True",
  menu: "https://sohosushi.co.uk/services",
  areaServed: [
    {
      "@type": "City",
      name: "London",
    },
    {
      "@type": "AdministrativeArea",
      name: "West End",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dining Experiences",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Omakase Tasting Menu",
          description: "A multi-course chef's selection showcasing the finest seasonal fish and produce.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sushi Bar Dining",
          description: "Sit at our cypress wood counter and watch our chefs craft each piece to order.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bento Boxes",
          description: "Beautifully presented lunch and dinner bento boxes with a selection of sushi, sashimi and sides.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sake Pairings",
          description: "Curated sake flights and pairings selected by our certified sake sommelier.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Private Dining",
          description: "An intimate private dining room for up to 10 guests with bespoke menus.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Takeaway & Delivery",
          description: "Our sushi and bento boxes available for collection or delivery across Central London.",
        },
      },
    ],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "11 Wardour Street",
    addressLocality: "Soho",
    addressRegion: "London",
    postalCode: "W1D 6PG",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.513,
    longitude: -0.1315,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "12:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "12:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "12:00",
      closes: "21:00",
    },
  ],
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://sohosushi.co.uk/#localbusiness",
  name: "Soho Sushi Kitchen",
  image: "https://sohosushi.co.uk/logo.png",
  telephone: "+442079463380",
  email: "reservations@sohosushi.co.uk",
  url: "https://sohosushi.co.uk",
  servesCuisine: "Japanese",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "11 Wardour Street",
    addressLocality: "Soho",
    addressRegion: "London",
    postalCode: "W1D 6PG",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.513,
    longitude: -0.1315,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "12:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "12:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "12:00",
      closes: "21:00",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://sohosushi.co.uk/#website",
  url: "https://sohosushi.co.uk",
  name: "Soho Sushi Kitchen",
  description: "Authentic Japanese sushi restaurant in Soho, London",
  publisher: {
    "@id": "https://sohosushi.co.uk/#organization",
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
        id="restaurant-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(restaurantSchema),
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
