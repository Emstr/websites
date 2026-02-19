import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Lewisham Roofing Specialists | Roof Repairs & Installation in SE London",
    template: "%s | Lewisham Roofing Specialists",
  },
  description:
    "Expert roofing contractors in Lewisham, SE London. Roof repairs, new roof installations, flat roofing, guttering, chimney repairs and roof surveys. TrustMark registered, NFRC members, 10-year guarantee.",
  keywords: [
    "roofer Lewisham",
    "roof repairs Lewisham",
    "roofing contractor SE London",
    "new roof installation",
    "flat roofing Lewisham",
    "guttering and fascias",
    "chimney repairs",
    "roof survey London",
    "NFRC roofer",
    "TrustMark roofing",
    "emergency roof repair",
    "roofer SE13",
  ],
  authors: [{ name: "Lewisham Roofing Specialists" }],
  creator: "Lewisham Roofing Specialists",
  publisher: "Lewisham Roofing Specialists",
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
    url: "https://lewishamroofing.co.uk",
    siteName: "Lewisham Roofing Specialists",
    title: "Lewisham Roofing Specialists | Expert Roofers in SE London",
    description:
      "TrustMark registered roofing contractors serving Lewisham and South East London. Roof repairs, installations, flat roofing and more. 10-year guarantee on all work.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lewisham Roofing Specialists - Expert Roofers in SE London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lewisham Roofing Specialists | Roof Repairs & Installation",
    description:
      "Expert roofing contractors in Lewisham. TrustMark registered, NFRC members, 10-year guarantee on all work.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://lewishamroofing.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Lewisham, London",
    "geo.position": "51.4535;-0.0202",
    ICBM: "51.4535, -0.0202",
  },
};

const roofingContractorSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://lewishamroofing.co.uk/#organization",
  name: "Lewisham Roofing Specialists",
  description:
    "Expert roofing contractors serving Lewisham and South East London. Specialising in roof repairs, new roof installations, flat roofing, guttering, chimney repairs and roof surveys.",
  url: "https://lewishamroofing.co.uk",
  telephone: "+442079461456",
  email: "info@lewishamroofing.co.uk",
  foundingDate: "2008",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Bank Transfer, Card",
  areaServed: [
    {
      "@type": "City",
      name: "London",
    },
    {
      "@type": "AdministrativeArea",
      name: "South East London",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Roofing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Roof Repairs",
          description: "Expert repair of all roof types including slate, tile, and flat roofing.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "New Roof Installation",
          description: "Complete new roof installations using premium materials with a 10-year guarantee.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Flat Roofing",
          description: "EPDM, GRP fibreglass, and felt flat roofing installation and repair.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Guttering & Fascias",
          description: "Gutter replacement, fascia and soffit installation, and rainwater systems.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Chimney Repairs",
          description: "Chimney repointing, lead flashing, cowl fitting, and chimney stack repairs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Roof Surveys",
          description: "Detailed roof condition surveys with comprehensive written reports.",
        },
      },
    ],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "87 Lewisham High Street",
    addressLocality: "Lewisham",
    addressRegion: "London",
    postalCode: "SE13 5JX",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4535,
    longitude: -0.0202,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://lewishamroofing.co.uk/#localbusiness",
  name: "Lewisham Roofing Specialists",
  image: "https://lewishamroofing.co.uk/logo.png",
  telephone: "+442079461456",
  email: "info@lewishamroofing.co.uk",
  url: "https://lewishamroofing.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "87 Lewisham High Street",
    addressLocality: "Lewisham",
    addressRegion: "London",
    postalCode: "SE13 5JX",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4535,
    longitude: -0.0202,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://lewishamroofing.co.uk/#website",
  url: "https://lewishamroofing.co.uk",
  name: "Lewisham Roofing Specialists",
  description: "Expert roofing contractors in Lewisham and South East London",
  publisher: {
    "@id": "https://lewishamroofing.co.uk/#organization",
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
        id="roofing-contractor-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(roofingContractorSchema),
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
