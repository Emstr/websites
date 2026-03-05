import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "MFS Independent Financial Advisers | Chartered Financial Planners in Wimbledon",
    template: "%s | MFS Independent Financial Advisers",
  },
  description:
    "Chartered independent financial advisers established in 1964. Over 60 years of expert financial planning in Wimbledon, South West London. Pensions, investments, tax planning, and corporate services.",
  keywords: [
    "financial adviser Wimbledon",
    "independent financial adviser",
    "chartered financial planner",
    "pension planning Wimbledon",
    "investment advice South West London",
    "tax planning adviser",
    "inheritance tax planning",
    "corporate financial services",
    "lifetime financial planning",
    "SIPP advice Wimbledon",
    "financial planner SW19",
    "MFS financial advisers",
  ],
  authors: [{ name: "MFS Independent Financial Advisers" }],
  creator: "MFS Independent Financial Advisers",
  publisher: "MFS Independent Financial Advisers",
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
    url: "https://mfs-group.co.uk",
    siteName: "MFS Independent Financial Advisers",
    title: "MFS Independent Financial Advisers | Chartered Financial Planners Since 1964",
    description:
      "Over 60 years of expert independent financial advice from our offices on The Broadway, Wimbledon. Chartered Financial Planners serving South West London and the Home Counties.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MFS Independent Financial Advisers - Chartered Financial Planners Since 1964",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MFS Independent Financial Advisers | Wimbledon",
    description:
      "Chartered independent financial advisers in Wimbledon. Over 60 years of expert financial planning.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://mfs-group.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Wimbledon, London",
    "geo.position": "51.4214;-0.2064",
    ICBM: "51.4214, -0.2064",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://mfs-group.co.uk/#organization",
  name: "MFS Independent Financial Advisers",
  alternateName: "MFS",
  description:
    "Chartered independent financial advisers established in 1964, providing expert financial planning including investment advice, pension planning, tax planning, inheritance tax mitigation, and corporate services.",
  url: "https://mfs-group.co.uk",
  telephone: "+442085436244",
  email: "info@mfs-group.co.uk",
  foundingDate: "1964",
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
      name: "South West London",
    },
    {
      "@type": "AdministrativeArea",
      name: "Home Counties",
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
          description: "Bespoke income or growth strategies tailored to your financial goals and risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Planning",
          description: "Comprehensive pension advice including SIPPs, trustee wind-ups, and group pensions.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tax Planning",
          description: "Strategic tax-efficient planning to optimise your wealth and minimise tax liability.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Inheritance Tax Mitigation",
          description: "Expert inheritance tax planning to protect and pass on your wealth effectively.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate Services",
          description: "Employee benefits, group pensions, and key man protection for businesses.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lifetime Financial Planning",
          description: "Holistic lifetime financial planning with cash flow modelling.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "MFS Independent Financial Advisers - Wimbledon Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "235 The Broadway",
      addressLocality: "Wimbledon",
      addressRegion: "London",
      postalCode: "SW19 1SD",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.4214,
      longitude: -0.2064,
    },
    telephone: "+442085436244",
  },
  sameAs: [
    "https://www.mfs-group.co.uk",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://mfs-group.co.uk/#localbusiness",
  name: "MFS Independent Financial Advisers",
  image: "https://mfs-group.co.uk/logo.png",
  telephone: "+442085436244",
  email: "info@mfs-group.co.uk",
  url: "https://mfs-group.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "235 The Broadway",
    addressLocality: "Wimbledon",
    addressRegion: "London",
    postalCode: "SW19 1SD",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4214,
    longitude: -0.2064,
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
      opens: "09:00",
      closes: "13:00",
    },
  ],
  priceRange: "$$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://mfs-group.co.uk/#website",
  url: "https://mfs-group.co.uk",
  name: "MFS Independent Financial Advisers",
  description: "Chartered independent financial advisers in Wimbledon, established 1964",
  publisher: {
    "@id": "https://mfs-group.co.uk/#organization",
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
