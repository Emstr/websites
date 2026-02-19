import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Dulwich Property Group | Estate Agents in Dulwich, SE21",
    template: "%s | Dulwich Property Group",
  },
  description:
    "Leading estate agents in Dulwich, SE21. Expert property sales, lettings, valuations and property management. NAEA Propertymark members with unrivalled local knowledge.",
  keywords: [
    "estate agents dulwich",
    "property for sale dulwich",
    "lettings dulwich",
    "property valuation dulwich",
    "SE21 estate agents",
    "dulwich property",
    "property management dulwich",
    "new homes dulwich",
    "investment property dulwich",
    "NAEA estate agents london",
    "dulwich property group",
    "south london estate agents",
  ],
  authors: [{ name: "Dulwich Property Group" }],
  creator: "Dulwich Property Group",
  publisher: "Dulwich Property Group",
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
    url: "https://dulwichproperty.co.uk",
    siteName: "Dulwich Property Group",
    title: "Dulwich Property Group | Estate Agents in Dulwich, SE21",
    description:
      "Leading estate agents in Dulwich, SE21. Expert property sales, lettings, valuations and property management with unrivalled local knowledge.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dulwich Property Group - Estate Agents in Dulwich",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulwich Property Group | Estate Agents in Dulwich",
    description:
      "Leading estate agents in Dulwich, SE21. Property sales, lettings, valuations and management.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://dulwichproperty.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Dulwich",
    "geo.position": "51.4452;-0.0838",
    ICBM: "51.4452, -0.0838",
  },
};

const realEstateAgentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": "https://dulwichproperty.co.uk/#organization",
  name: "Dulwich Property Group",
  description:
    "Leading estate agents in Dulwich, SE21. Expert property sales, lettings, valuations and property management with unrivalled local knowledge.",
  url: "https://dulwichproperty.co.uk",
  telephone: "+442079462345",
  email: "info@dulwichproperty.co.uk",
  foundingDate: "2010",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Debit Card, Credit Card",
  areaServed: [
    { "@type": "City", name: "London" },
    { "@type": "AdministrativeArea", name: "Dulwich" },
    { "@type": "AdministrativeArea", name: "South East London" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Estate Agency Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Property Sales", description: "Expert marketing and sale of residential properties in Dulwich and South East London." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Property Lettings", description: "Professional lettings management for landlords and tenants in Dulwich." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Property Valuations", description: "Accurate, market-leading property valuations backed by local expertise." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Property Management", description: "Full property management services for landlords in Dulwich and surrounding areas." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "New Homes", description: "Sales and marketing of new build developments in Dulwich." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Investment Property", description: "Expert advice on property investment opportunities in South East London." } },
    ],
  },
  location: {
    "@type": "Place",
    name: "Dulwich Property Group Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "84 Lordship Lane",
      addressLocality: "Dulwich",
      addressRegion: "London",
      postalCode: "SE22 8HF",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.4452,
      longitude: -0.0838,
    },
    telephone: "+442079462345",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://dulwichproperty.co.uk/#localbusiness",
  name: "Dulwich Property Group",
  image: "https://dulwichproperty.co.uk/logo.png",
  telephone: "+442079462345",
  email: "info@dulwichproperty.co.uk",
  url: "https://dulwichproperty.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "84 Lordship Lane",
    addressLocality: "Dulwich",
    addressRegion: "London",
    postalCode: "SE22 8HF",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4452,
    longitude: -0.0838,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://dulwichproperty.co.uk/#website",
  url: "https://dulwichproperty.co.uk",
  name: "Dulwich Property Group",
  description: "Leading estate agents in Dulwich, SE21",
  publisher: {
    "@id": "https://dulwichproperty.co.uk/#organization",
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
        id="real-estate-agent-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(realEstateAgentSchema),
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
