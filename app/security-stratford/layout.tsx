import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Stratford Security Solutions | Professional Security Services in East London",
    template: "%s | Stratford Security Solutions",
  },
  description:
    "Professional security services in Stratford and East London. SIA-licensed manned guarding, CCTV installation, event security, mobile patrols, key holding and risk assessments. 24/7 control room.",
  keywords: [
    "security company",
    "Stratford security",
    "East London security",
    "manned guarding",
    "CCTV installation",
    "event security",
    "mobile patrols",
    "key holding",
    "risk assessment",
    "SIA licensed",
    "security guards London",
    "24/7 security",
  ],
  authors: [{ name: "Stratford Security Solutions" }],
  creator: "Stratford Security Solutions",
  publisher: "Stratford Security Solutions",
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
    url: "https://stratfordsecurity.co.uk",
    siteName: "Stratford Security Solutions",
    title: "Stratford Security Solutions | Professional Security in East London",
    description:
      "SIA-licensed security company providing manned guarding, CCTV, event security and 24/7 mobile patrols across East London and beyond.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stratford Security Solutions - Professional Security Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stratford Security Solutions | Professional Security Services",
    description:
      "SIA-licensed security company in Stratford. Manned guarding, CCTV, events and 24/7 patrols.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://stratfordsecurity.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Stratford, London",
    "geo.position": "51.5413;-0.0033",
    ICBM: "51.5413, -0.0033",
  },
};

const securityServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://stratfordsecurity.co.uk/#organization",
  name: "Stratford Security Solutions",
  description:
    "Professional SIA-licensed security company providing manned guarding, CCTV installation, event security, mobile patrols, key holding and risk assessments across East London.",
  url: "https://stratfordsecurity.co.uk",
  telephone: "+442079469920",
  email: "info@stratfordsecurity.co.uk",
  foundingDate: "2011",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Invoice",
  areaServed: [
    {
      "@type": "City",
      name: "London",
    },
    {
      "@type": "AdministrativeArea",
      name: "East London",
    },
    {
      "@type": "AdministrativeArea",
      name: "Greater London",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Security Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Manned Guarding", description: "Professional SIA-licensed security officers for premises and site protection." },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "CCTV Installation", description: "HD and IP CCTV system design, installation and maintenance." },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Event Security", description: "Experienced event security teams for venues, festivals and corporate functions." },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Mobile Patrols", description: "24/7 mobile patrol services with GPS-tracked response vehicles." },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Key Holding", description: "Secure key holding and alarm response services for commercial premises." },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Risk Assessments", description: "Comprehensive security risk assessments and vulnerability surveys." },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Stratford Security Solutions",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit 12, 80 High Street",
      addressLocality: "Stratford",
      addressRegion: "London",
      postalCode: "E15 2QS",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5413,
      longitude: -0.0033,
    },
    telephone: "+442079469920",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://stratfordsecurity.co.uk/#localbusiness",
  name: "Stratford Security Solutions",
  image: "https://stratfordsecurity.co.uk/logo.png",
  telephone: "+442079469920",
  email: "info@stratfordsecurity.co.uk",
  url: "https://stratfordsecurity.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 12, 80 High Street",
    addressLocality: "Stratford",
    addressRegion: "London",
    postalCode: "E15 2QS",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5413,
    longitude: -0.0033,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://stratfordsecurity.co.uk/#website",
  url: "https://stratfordsecurity.co.uk",
  name: "Stratford Security Solutions",
  description: "Professional security services in East London",
  publisher: {
    "@id": "https://stratfordsecurity.co.uk/#organization",
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
        id="security-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(securityServiceSchema),
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
