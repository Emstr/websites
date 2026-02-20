import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "The Greenwich Arms | Traditional Gastropub in Greenwich, London",
    template: "%s | The Greenwich Arms",
  },
  description:
    "Award-winning gastropub in Greenwich, London. Traditional Sunday roasts, craft beer selection, beer garden and live music. Dog-friendly. Book your table today.",
  keywords: [
    "gastropub Greenwich",
    "pub Greenwich",
    "Sunday roast Greenwich",
    "craft beer Greenwich",
    "beer garden Greenwich",
    "live music pub London",
    "dog friendly pub Greenwich",
    "best pub Greenwich",
    "private hire Greenwich",
    "Nelson Road pub",
  ],
  authors: [{ name: "The Greenwich Arms" }],
  creator: "The Greenwich Arms",
  publisher: "The Greenwich Arms",
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
    url: "https://greenwicharms.co.uk",
    siteName: "The Greenwich Arms",
    title: "The Greenwich Arms | Traditional Gastropub",
    description:
      "Award-winning gastropub in Greenwich. Craft beers, gastropub dining, Sunday roasts, beer garden and live music.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Greenwich Arms - Traditional Gastropub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Greenwich Arms | Good Beer, Great Food, Greenwich Spirit",
    description:
      "Traditional gastropub in Greenwich. Craft beers, Sunday roasts, beer garden and live music.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://greenwicharms.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Greenwich, London",
    "geo.position": "51.4826;-0.0077",
    ICBM: "51.4826, -0.0077",
  },
};

const barOrPubSchema = {
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  "@id": "https://greenwicharms.co.uk/#organization",
  name: "The Greenwich Arms",
  description:
    "Award-winning traditional gastropub in Greenwich, London. Serving craft beers, gastropub dining, legendary Sunday roasts, with a beer garden and regular live music.",
  url: "https://greenwicharms.co.uk",
  telephone: "+442079461180",
  email: "hello@greenwicharms.co.uk",
  foundingDate: "2008",
  priceRange: "$$",
  servesCuisine: "British Gastropub",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  areaServed: {
    "@type": "City",
    name: "London",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pub Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gastropub Dining",
          description: "Elevated pub classics using locally sourced British ingredients.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sunday Roasts",
          description: "Award-winning Sunday roasts with all the trimmings.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Craft Beer Selection",
          description: "Over 30 craft beers, ales and lagers from the finest British breweries.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Beer Garden",
          description: "Heated beer garden with covered seating for year-round enjoyment.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Private Hire",
          description: "Private hire options for parties, celebrations and corporate events.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Live Music",
          description: "Regular live music sessions featuring local and touring artists.",
        },
      },
    ],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 Nelson Road",
    addressLocality: "Greenwich",
    addressRegion: "London",
    postalCode: "SE10 9JB",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4826,
    longitude: -0.0077,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://greenwicharms.co.uk/#localbusiness",
  name: "The Greenwich Arms",
  image: "https://greenwicharms.co.uk/logo.png",
  telephone: "+442079461180",
  email: "hello@greenwicharms.co.uk",
  url: "https://greenwicharms.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 Nelson Road",
    addressLocality: "Greenwich",
    addressRegion: "London",
    postalCode: "SE10 9JB",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4826,
    longitude: -0.0077,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "11:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "11:00",
      closes: "00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "11:00",
      closes: "22:30",
    },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://greenwicharms.co.uk/#website",
  url: "https://greenwicharms.co.uk",
  name: "The Greenwich Arms",
  description: "Traditional gastropub in Greenwich, London",
  publisher: {
    "@id": "https://greenwicharms.co.uk/#organization",
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
        id="bar-or-pub-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(barOrPubSchema),
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
