import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Stratford Mortgage Solutions | Mortgage Broker in Stratford, East London",
    template: "%s | Stratford Mortgage Solutions",
  },
  description:
    "Whole of market mortgage broker in Stratford, East London. Expert advice on first-time buyer mortgages, remortgaging, buy-to-let, Help to Buy and shared ownership. Free initial consultation.",
  keywords: [
    "mortgage broker Stratford",
    "mortgage adviser East London",
    "first-time buyer mortgage",
    "remortgage advice",
    "buy-to-let mortgage",
    "Help to Buy mortgage",
    "shared ownership mortgage",
    "commercial mortgage",
    "mortgage broker E15",
    "Stratford mortgage advice",
    "East London mortgage broker",
    "FCA regulated mortgage adviser",
  ],
  authors: [{ name: "Stratford Mortgage Solutions Ltd" }],
  creator: "Stratford Mortgage Solutions Ltd",
  publisher: "Stratford Mortgage Solutions Ltd",
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
    url: "https://stratfordmortgages.co.uk",
    siteName: "Stratford Mortgage Solutions",
    title: "Stratford Mortgage Solutions | Expert Mortgage Advice in East London",
    description:
      "Whole of market mortgage broker providing expert advice on residential, buy-to-let and commercial mortgages from our Stratford office. FCA regulated. Free initial consultation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stratford Mortgage Solutions - Expert Mortgage Advice in East London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stratford Mortgage Solutions | Mortgage Broker in Stratford",
    description:
      "Whole of market mortgage broker in Stratford, East London. FCA regulated. Free initial consultation.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://stratfordmortgages.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Stratford, London",
    "geo.position": "51.5413;-0.0031",
    ICBM: "51.5413, -0.0031",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://stratfordmortgages.co.uk/#organization",
  name: "Stratford Mortgage Solutions Ltd",
  alternateName: "Stratford Mortgage Solutions",
  description:
    "Whole of market mortgage broker providing expert advice on first-time buyer mortgages, remortgaging, buy-to-let, Help to Buy, shared ownership and commercial mortgages in Stratford, East London.",
  url: "https://stratfordmortgages.co.uk",
  telephone: "+442079466901",
  email: "info@stratfordmortgages.co.uk",
  foundingDate: "2014",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
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
      "@type": "Country",
      name: "United Kingdom",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mortgage Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "First-Time Buyer Mortgages",
          description: "Expert mortgage advice for first-time buyers stepping onto the property ladder in London and beyond.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Remortgaging",
          description: "Switch to a better mortgage deal and potentially save thousands on your monthly repayments.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Buy-to-Let Mortgages",
          description: "Specialist buy-to-let mortgage advice for property investors and landlords.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Help to Buy Mortgages",
          description: "Navigate the Help to Buy scheme and secure the best mortgage for your new-build home.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Shared Ownership Mortgages",
          description: "Specialist advice on shared ownership mortgages for affordable home ownership in London.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Mortgages",
          description: "Commercial mortgage solutions for business premises, mixed-use properties and development finance.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Stratford Mortgage Solutions Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "14 The Broadway",
      addressLocality: "Stratford",
      addressRegion: "London",
      postalCode: "E15 4QS",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5413,
      longitude: -0.0031,
    },
    telephone: "+442079466901",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://stratfordmortgages.co.uk/#localbusiness",
  name: "Stratford Mortgage Solutions Ltd",
  image: "https://stratfordmortgages.co.uk/logo.png",
  telephone: "+442079466901",
  email: "info@stratfordmortgages.co.uk",
  url: "https://stratfordmortgages.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "14 The Broadway",
    addressLocality: "Stratford",
    addressRegion: "London",
    postalCode: "E15 4QS",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5413,
    longitude: -0.0031,
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
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "14:00",
    },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://stratfordmortgages.co.uk/#website",
  url: "https://stratfordmortgages.co.uk",
  name: "Stratford Mortgage Solutions",
  description: "Whole of market mortgage broker in Stratford, East London",
  publisher: {
    "@id": "https://stratfordmortgages.co.uk/#organization",
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
        id="financial-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(financialServiceSchema),
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
