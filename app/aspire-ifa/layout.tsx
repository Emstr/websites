import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Aspire Independent Financial Planners | Financial Advice in Finchley, North London",
    template: "%s | Aspire Independent Financial Planners",
  },
  description:
    "Independent financial planners in Finchley, North London. Expert advice on wealth management, pensions, mortgages, insurance, equity release and will writing. Your one-stop shop for financial planning.",
  keywords: [
    "financial planner Finchley",
    "independent financial adviser North London",
    "wealth management Finchley",
    "pension advice North London",
    "mortgage adviser Finchley",
    "insurance adviser N3",
    "equity release Finchley",
    "will writing North London",
    "financial planning London",
    "IFA Finchley",
    "retirement planning North London",
    "financial adviser near me",
  ],
  authors: [{ name: "Aspire Independent Financial Planners LLP" }],
  creator: "Aspire Independent Financial Planners LLP",
  publisher: "Aspire Independent Financial Planners LLP",
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
    url: "https://aspireonline.co.uk",
    siteName: "Aspire Independent Financial Planners",
    title: "Aspire Independent Financial Planners | Comprehensive Financial Advice in Finchley",
    description:
      "Expert independent financial planners in Finchley, North London. Wealth management, pensions, mortgages, insurance, equity release and will writing — all under one roof.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aspire Independent Financial Planners - Comprehensive Financial Advice in Finchley",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aspire Independent Financial Planners | Finchley, North London",
    description:
      "Comprehensive independent financial planning in Finchley. Wealth management, pensions, mortgages, insurance, equity release and will writing.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://aspireonline.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Finchley, London",
    "geo.position": "51.5918;-0.1648",
    ICBM: "51.5918, -0.1648",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://aspireonline.co.uk/#organization",
  name: "Aspire Independent Financial Planners LLP",
  alternateName: "Aspire Financial Planners",
  description:
    "Comprehensive independent financial planning services including wealth management, pensions, mortgages, insurance, equity release and will writing in Finchley, North London.",
  url: "https://aspireonline.co.uk",
  telephone: "+442083714411",
  email: "enquiries@aspireonline.co.uk",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "London",
    },
    {
      "@type": "AdministrativeArea",
      name: "North London",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Financial Planning Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wealth Management",
          description: "Holistic wealth management strategies to grow and protect your assets.",
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
          name: "Mortgage Advice",
          description: "Expert mortgage advice for purchases, remortgages and buy-to-let.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Insurance",
          description: "Protection planning including life assurance, critical illness and income protection.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Equity Release",
          description: "Specialist equity release advice for homeowners aged 55 and over.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Will Writing",
          description: "Professional will writing services to protect your family and estate.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Aspire Independent Financial Planners - Finchley Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "17 Station Road",
      addressLocality: "Finchley",
      addressRegion: "London",
      postalCode: "N3 2SB",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5918,
      longitude: -0.1648,
    },
    telephone: "+442083714411",
  },
  sameAs: [
    "https://aspireonline.co.uk",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://aspireonline.co.uk/#localbusiness",
  name: "Aspire Independent Financial Planners LLP",
  image: "https://aspireonline.co.uk/logo.png",
  telephone: "+442083714411",
  email: "enquiries@aspireonline.co.uk",
  url: "https://aspireonline.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "17 Station Road",
    addressLocality: "Finchley",
    addressRegion: "London",
    postalCode: "N3 2SB",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5918,
    longitude: -0.1648,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
  ],
  priceRange: "$$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://aspireonline.co.uk/#website",
  url: "https://aspireonline.co.uk",
  name: "Aspire Independent Financial Planners",
  description: "Comprehensive independent financial planning services in Finchley, North London",
  publisher: {
    "@id": "https://aspireonline.co.uk/#organization",
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
