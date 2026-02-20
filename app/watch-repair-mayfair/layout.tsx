import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Mayfair Horologists | Expert Watch Repair & Restoration in Mayfair, London",
    template: "%s | Mayfair Horologists",
  },
  description:
    "Expert watch repair, restoration and servicing in Mayfair, London. Swiss-trained master horologist specialising in Rolex, Omega, Breitling and vintage timepieces. Over 10,000 watches serviced since 2006.",
  keywords: [
    "watch repair Mayfair",
    "watch restoration London",
    "Rolex service Mayfair",
    "Omega repair London",
    "watch servicing Burlington Arcade",
    "vintage watch repair",
    "Swiss watch specialist",
    "luxury watch repair London",
    "watch battery replacement Mayfair",
    "Breitling service London",
    "master horologist London",
    "watch crystal replacement",
  ],
  authors: [{ name: "Mayfair Horologists" }],
  creator: "Mayfair Horologists",
  publisher: "Mayfair Horologists",
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
    url: "https://mayfairhorologists.co.uk",
    siteName: "Mayfair Horologists",
    title: "Mayfair Horologists | Expert Watch Repair & Restoration",
    description:
      "Swiss-trained master horologist providing expert watch repair, restoration and servicing from Burlington Arcade, Mayfair. Specialists in Rolex, Omega and vintage timepieces.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mayfair Horologists - Expert Watch Repair & Restoration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayfair Horologists | Watch Repair & Restoration",
    description:
      "Expert watch repair and restoration in Mayfair, London. Swiss-trained master horologist since 2006.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://mayfairhorologists.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Mayfair, London",
    "geo.position": "51.5090;-0.1400",
    ICBM: "51.5090, -0.1400",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://mayfairhorologists.co.uk/#organization",
  name: "Mayfair Horologists",
  description:
    "Expert watch repair, restoration and servicing in Mayfair, London. Swiss-trained master horologist specialising in luxury and vintage timepieces.",
  url: "https://mayfairhorologists.co.uk",
  telephone: "+442079468850",
  email: "service@mayfairhorologists.co.uk",
  foundingDate: "2006",
  priceRange: "$$$",
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
    name: "Watch Repair Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Watch Servicing",
          description: "Complete movement servicing for mechanical and quartz timepieces.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Complete Restoration",
          description: "Full restoration of vintage and damaged watches to original condition.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Battery Replacement",
          description: "Professional battery replacement for all quartz watches.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Crystal Replacement",
          description: "Mineral and sapphire crystal replacement for all watch brands.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Strap & Bracelet Fitting",
          description: "Professional fitting and adjustment of watch straps and bracelets.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vintage Watch Specialist",
          description: "Expert care and restoration of vintage and antique timepieces.",
        },
      },
    ],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "7 Burlington Arcade",
    addressLocality: "Mayfair",
    addressRegion: "London",
    postalCode: "W1J 0QJ",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.509,
    longitude: -0.14,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "15:00",
    },
  ],
};

const watchRepairSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://mayfairhorologists.co.uk/#localbusiness",
  name: "Mayfair Horologists",
  image: "https://mayfairhorologists.co.uk/logo.png",
  telephone: "+442079468850",
  email: "service@mayfairhorologists.co.uk",
  url: "https://mayfairhorologists.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7 Burlington Arcade",
    addressLocality: "Mayfair",
    addressRegion: "London",
    postalCode: "W1J 0QJ",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.509,
    longitude: -0.14,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "15:00",
    },
  ],
  priceRange: "$$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://mayfairhorologists.co.uk/#website",
  url: "https://mayfairhorologists.co.uk",
  name: "Mayfair Horologists",
  description: "Expert watch repair and restoration in Mayfair, London",
  publisher: {
    "@id": "https://mayfairhorologists.co.uk/#organization",
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
        id="watch-repair-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(watchRepairSchema),
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
