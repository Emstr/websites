import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Pembrokeshire Financial Services | Independent Financial Advisers in Wales",
    template: "%s | Pembrokeshire Financial Services",
  },
  description:
    "Independent financial advice from Pembrokeshire Financial Services, an established practice in Pembroke, Wales. Pensions, investments, mortgages, protection and financial planning across Cardiff, Swansea, Newport and all of Wales.",
  keywords: [
    "financial adviser Wales",
    "IFA Pembrokeshire",
    "independent financial adviser Pembroke",
    "pension advice Wales",
    "investment advice Pembrokeshire",
    "mortgage adviser Wales",
    "financial planning Cardiff",
    "IFA Swansea",
    "financial adviser Newport",
    "Pembrokeshire Financial Services",
    "protection advice Wales",
    "retirement planning Pembrokeshire",
  ],
  authors: [{ name: "Pembrokeshire Financial Services" }],
  creator: "Pembrokeshire Financial Services",
  publisher: "Pembrokeshire Financial Services",
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
    url: "https://pfs-ifa.com",
    siteName: "Pembrokeshire Financial Services",
    title: "Pembrokeshire Financial Services | Independent Financial Advisers in Wales",
    description:
      "Independent financial advice from an established practice serving Pembroke and across Wales. Pensions, investments, mortgages, protection and financial planning.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pembrokeshire Financial Services - Independent Financial Advisers in Wales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pembrokeshire Financial Services | Independent Financial Advisers",
    description:
      "Independent financial advice in Pembroke, Pembrokeshire and across Wales.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://pfs-ifa.com",
  },
  other: {
    "geo.region": "GB-PEM",
    "geo.placename": "Pembroke",
    "geo.position": "51.6739;-4.9180",
    ICBM: "51.6739, -4.9180",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://pfs-ifa.com/#organization",
  name: "Pembrokeshire Financial Services",
  alternateName: "PFS IFA",
  description:
    "Independent financial advice including pensions, investments, mortgages, protection and financial planning. An established practice serving Pembroke and across Wales.",
  url: "https://pfs-ifa.com",
  telephone: "+441646687767",
  email: "info@pfs-ifa.com",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Pembroke",
    },
    {
      "@type": "AdministrativeArea",
      name: "Pembrokeshire",
    },
    {
      "@type": "City",
      name: "Cardiff",
    },
    {
      "@type": "City",
      name: "Swansea",
    },
    {
      "@type": "City",
      name: "Newport",
    },
    {
      "@type": "City",
      name: "Bridgend",
    },
    {
      "@type": "City",
      name: "Haverfordwest",
    },
    {
      "@type": "City",
      name: "Port Talbot",
    },
    {
      "@type": "City",
      name: "Tenby",
    },
    {
      "@type": "AdministrativeArea",
      name: "Wales",
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
          name: "Independent Financial Advice",
          description: "Whole-of-market independent financial advice tailored to your individual circumstances and goals.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Advice",
          description: "Comprehensive pension planning including workplace pensions, SIPPs, and retirement income strategies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Planning",
          description: "Independent investment advice tailored to your financial goals and risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mortgage Advice",
          description: "Independent mortgage advice with access to the whole of the market for the best rates.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Protection Planning",
          description: "Life assurance, critical illness cover, and income protection to safeguard your family.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Pembrokeshire Financial Services Office",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pembroke",
      addressRegion: "Pembrokeshire",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.6739,
      longitude: -4.9180,
    },
    telephone: "+441646687767",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://pfs-ifa.com/#localbusiness",
  name: "Pembrokeshire Financial Services",
  image: "https://pfs-ifa.com/logo.png",
  telephone: "+441646687767",
  email: "info@pfs-ifa.com",
  url: "https://pfs-ifa.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pembroke",
    addressRegion: "Pembrokeshire",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.6739,
    longitude: -4.9180,
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
  "@id": "https://pfs-ifa.com/#website",
  url: "https://pfs-ifa.com",
  name: "Pembrokeshire Financial Services",
  description: "Independent financial advice in Pembroke, Pembrokeshire and across Wales",
  publisher: {
    "@id": "https://pfs-ifa.com/#organization",
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
