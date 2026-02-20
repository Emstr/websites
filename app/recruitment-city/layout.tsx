import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "City Recruitment Partners | Specialist Recruitment Agency in the City of London",
    template: "%s | City Recruitment Partners",
  },
  description:
    "Specialist recruitment agency in the City of London placing permanent, contract and executive talent across finance and technology sectors. Over 2,000 successful placements since 2012.",
  keywords: [
    "recruitment agency",
    "City of London recruitment",
    "finance recruitment",
    "technology recruitment",
    "executive search",
    "contract staffing",
    "permanent recruitment",
    "graduate programmes",
    "HR consulting",
    "salary benchmarking",
    "London recruitment agency",
    "City recruitment specialists",
  ],
  authors: [{ name: "City Recruitment Partners" }],
  creator: "City Recruitment Partners",
  publisher: "City Recruitment Partners",
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
    url: "https://cityrecruitment.co.uk",
    siteName: "City Recruitment Partners",
    title: "City Recruitment Partners | Specialist Recruitment in the City of London",
    description:
      "Specialist recruitment agency placing permanent, contract and executive talent across finance and technology sectors from the heart of the City of London.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "City Recruitment Partners - Specialist Recruitment Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "City Recruitment Partners | Specialist Recruitment Agency",
    description:
      "Specialist recruitment agency in the City of London. Permanent, contract and executive search across finance and tech.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cityrecruitment.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "City of London",
    "geo.position": "51.5155;-0.0830",
    ICBM: "51.5155, -0.0830",
  },
};

const employmentAgencySchema = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  "@id": "https://cityrecruitment.co.uk/#organization",
  name: "City Recruitment Partners",
  description:
    "Specialist recruitment agency in the City of London placing permanent, contract and executive talent across finance and technology sectors.",
  url: "https://cityrecruitment.co.uk",
  telephone: "+442079465540",
  email: "enquiries@cityrecruitment.co.uk",
  foundingDate: "2012",
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
      name: "Greater London",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Recruitment Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Permanent Recruitment",
          description: "End-to-end permanent recruitment solutions for finance and technology roles.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Contract Staffing",
          description: "Flexible contract staffing to meet short-term and project-based hiring needs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Executive Search",
          description: "Discreet, targeted executive search for senior leadership and board-level appointments.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Graduate Programmes",
          description: "Graduate recruitment and programme design to build your future talent pipeline.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "HR Consulting",
          description: "Strategic HR consulting including organisational design, retention strategies and workforce planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Salary Benchmarking",
          description: "Data-driven salary benchmarking reports to ensure competitive compensation packages.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "City Recruitment Partners",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3rd Floor, 25 Old Broad Street",
      addressLocality: "City of London",
      addressRegion: "London",
      postalCode: "EC2N 1HN",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5155,
      longitude: -0.083,
    },
    telephone: "+442079465540",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://cityrecruitment.co.uk/#localbusiness",
  name: "City Recruitment Partners",
  image: "https://cityrecruitment.co.uk/logo.png",
  telephone: "+442079465540",
  email: "enquiries@cityrecruitment.co.uk",
  url: "https://cityrecruitment.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3rd Floor, 25 Old Broad Street",
    addressLocality: "City of London",
    addressRegion: "London",
    postalCode: "EC2N 1HN",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5155,
    longitude: -0.083,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://cityrecruitment.co.uk/#website",
  url: "https://cityrecruitment.co.uk",
  name: "City Recruitment Partners",
  description: "Specialist recruitment agency in the City of London",
  publisher: {
    "@id": "https://cityrecruitment.co.uk/#organization",
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
        id="employment-agency-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(employmentAgencySchema),
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
