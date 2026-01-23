import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Alpha Investments & Financial Planning | Wealth Management in Harrow & Mayfair",
    template: "%s | Alpha Investments & Financial Planning",
  },
  description:
    "Premium wealth management and financial planning services. Expert investment advisers in Harrow and Mayfair, London. Pensions, investments, tax planning and life assurance.",
  keywords: [
    "financial adviser",
    "wealth management",
    "investment planning",
    "pension advice",
    "tax planning",
    "life assurance",
    "auto-enrolment",
    "Harrow financial adviser",
    "Mayfair wealth management",
    "London investment advice",
    "retirement planning",
    "financial planning UK",
  ],
  authors: [{ name: "Alpha Investments & Financial Planning Ltd" }],
  creator: "Alpha Investments & Financial Planning Ltd",
  publisher: "Alpha Investments & Financial Planning Ltd",
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
    url: "https://alpha4u.co.uk",
    siteName: "Alpha Investments & Financial Planning",
    title: "Alpha Investments & Financial Planning | Premium Wealth Management",
    description:
      "Expert financial advisers providing bespoke wealth management, investment planning, and pension advice from our offices in Harrow and Mayfair, London.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alpha Investments & Financial Planning - Premium Wealth Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Investments & Financial Planning | Wealth Management",
    description:
      "Premium financial planning and wealth management services in Harrow and Mayfair, London.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://alpha4u.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "London",
    "geo.position": "51.5800;-0.3371",
    ICBM: "51.5800, -0.3371",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://alpha4u.co.uk/#organization",
  name: "Alpha Investments & Financial Planning Ltd",
  alternateName: "Alpha Investments",
  description:
    "Premium wealth management and financial planning services including investment advice, pension planning, tax planning, and life assurance.",
  url: "https://alpha4u.co.uk",
  telephone: "+442033977730",
  email: "info@alpha4u.co.uk",
  foundingDate: "2005",
  priceRange: "$$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "London",
    },
    {
      "@type": "AdministrativeArea",
      name: "Greater London",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Financial Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Planning",
          description: "Bespoke investment strategies tailored to your financial goals and risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Planning",
          description: "Comprehensive pension advice including workplace pensions and retirement planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tax Planning",
          description: "Strategic tax planning to optimise your wealth and minimise tax liability.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Life Assurance",
          description: "Protection planning including life assurance and critical illness cover.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wealth Management",
          description: "Holistic wealth management services for high-net-worth individuals and families.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Auto-Enrolment",
          description: "Workplace pension auto-enrolment solutions for businesses.",
        },
      },
    ],
  },
  location: [
    {
      "@type": "Place",
      name: "Alpha Investments Harrow Office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "79 College Road",
        addressLocality: "Harrow",
        addressRegion: "Greater London",
        postalCode: "HA1 1BD",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.58,
        longitude: -0.3371,
      },
      telephone: "+442033977730",
    },
    {
      "@type": "Place",
      name: "Alpha Investments Mayfair Office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "17 Hanover Square",
        addressLocality: "Mayfair",
        addressRegion: "London",
        postalCode: "W1S 1BN",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.513,
        longitude: -0.144,
      },
      telephone: "+442033977730",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/alpha-investments-financial-planning",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://alpha4u.co.uk/#localbusiness",
  name: "Alpha Investments & Financial Planning Ltd",
  image: "https://alpha4u.co.uk/logo.png",
  telephone: "+442033977730",
  email: "info@alpha4u.co.uk",
  url: "https://alpha4u.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "79 College Road",
    addressLocality: "Harrow",
    addressRegion: "Greater London",
    postalCode: "HA1 1BD",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.58,
    longitude: -0.3371,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
  ],
  priceRange: "$$$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://alpha4u.co.uk/#website",
  url: "https://alpha4u.co.uk",
  name: "Alpha Investments & Financial Planning",
  description: "Premium wealth management and financial planning services in London",
  publisher: {
    "@id": "https://alpha4u.co.uk/#organization",
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
