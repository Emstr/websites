import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Cornerstone Financial Planning | Independent Financial Advisers in Oxfordshire",
    template: "%s | Cornerstone Financial Planning",
  },
  description:
    "Independent financial advisory and active portfolio management from Cornerstone Financial Planning, established 1992. Boutique financial planning in Witney, Kidlington and across Oxfordshire. FCA 624799.",
  keywords: [
    "financial adviser Witney",
    "independent financial adviser Oxfordshire",
    "IFA Witney",
    "financial planning Oxford",
    "investment advice Oxfordshire",
    "active portfolio management",
    "financial adviser Kidlington",
    "retirement planning Oxfordshire",
    "Cornerstone Financial Planning",
    "Simon Neal financial adviser",
    "boutique financial planning",
    "pro-active market monitoring",
  ],
  authors: [{ name: "Cornerstone Financial Planning" }],
  creator: "Cornerstone Financial Planning",
  publisher: "Cornerstone Financial Planning",
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
    url: "https://cornerstoneifa.co.uk",
    siteName: "Cornerstone Financial Planning",
    title: "Cornerstone Financial Planning | Independent Financial Advisers Since 1992",
    description:
      "Boutique independent financial advisory and active portfolio management from a trusted firm serving Oxfordshire since 1992. Your big picture is our focus.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cornerstone Financial Planning - Independent Financial Advisers Since 1992",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cornerstone Financial Planning | Independent Financial Advisers",
    description:
      "Boutique independent financial advisory and active portfolio management in Oxfordshire since 1992.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cornerstoneifa.co.uk",
  },
  other: {
    "geo.region": "GB-OXF",
    "geo.placename": "Witney",
    "geo.position": "51.7864;-1.4857",
    ICBM: "51.7864, -1.4857",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://cornerstoneifa.co.uk/#organization",
  name: "Cornerstone Financial Planning",
  alternateName: "Cornerstone IFA",
  description:
    "Boutique independent financial advisory including active portfolio management, pro-active market monitoring and ongoing guidance. Established 1992, serving Witney, Kidlington and Oxfordshire.",
  url: "https://cornerstoneifa.co.uk",
  telephone: "+441993213429",
  email: "simon@cornerstoneifa.co.uk",
  foundingDate: "1992",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Witney",
    },
    {
      "@type": "City",
      name: "Kidlington",
    },
    {
      "@type": "AdministrativeArea",
      name: "Oxfordshire",
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
          name: "Independent Financial Advisory",
          description: "Comprehensive independent financial advice tailored to your unique goals and circumstances.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Active Portfolio Management",
          description: "Hands-on portfolio management with pro-active market monitoring and strategic adjustments.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ongoing Guidance",
          description: "Continuous financial guidance and regular reviews to keep your plans on track.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Retirement Planning",
          description: "Strategic retirement planning including pension advice, drawdown strategies and income planning.",
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
  location: [
    {
      "@type": "Place",
      name: "Cornerstone Financial Planning - Witney Office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Maidley House, 15 Woodstock Road",
        addressLocality: "Witney",
        addressRegion: "Oxfordshire",
        postalCode: "OX28 1EA",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.7864,
        longitude: -1.4857,
      },
      telephone: "+441993213429",
    },
    {
      "@type": "Place",
      name: "Cornerstone Financial Planning - Kidlington Office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hill House, 95 High Street",
        addressLocality: "Kidlington",
        addressRegion: "Oxfordshire",
        postalCode: "OX5 2DR",
        addressCountry: "GB",
      },
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://cornerstoneifa.co.uk/#localbusiness",
  name: "Cornerstone Financial Planning",
  image: "https://cornerstoneifa.co.uk/logo.png",
  telephone: "+441993213429",
  email: "simon@cornerstoneifa.co.uk",
  url: "https://cornerstoneifa.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Maidley House, 15 Woodstock Road",
    addressLocality: "Witney",
    addressRegion: "Oxfordshire",
    postalCode: "OX28 1EA",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.7864,
    longitude: -1.4857,
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
  "@id": "https://cornerstoneifa.co.uk/#website",
  url: "https://cornerstoneifa.co.uk",
  name: "Cornerstone Financial Planning",
  description: "Boutique independent financial advisory and active portfolio management in Oxfordshire since 1992",
  publisher: {
    "@id": "https://cornerstoneifa.co.uk/#organization",
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
