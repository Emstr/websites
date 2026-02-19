import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Kensington Private Tutors | Expert Tutoring in Kensington, London W8",
    template: "%s | Kensington Private Tutors",
  },
  description:
    "Expert private tutoring in Kensington, London. DBS-checked Oxbridge graduates offering GCSE, A-Level, 11+ exam prep, university admissions and primary school support. 98% satisfaction rate.",
  keywords: [
    "private tutor Kensington",
    "GCSE tutor London",
    "A-Level tutoring Kensington",
    "11+ exam preparation",
    "university admissions tutor",
    "primary school tutor",
    "Oxbridge tutor London",
    "private tutoring W8",
    "Kensington tutoring service",
    "adult learning Kensington",
    "DBS checked tutors",
    "London private tutor",
  ],
  authors: [{ name: "Kensington Private Tutors" }],
  creator: "Kensington Private Tutors",
  publisher: "Kensington Private Tutors",
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
    url: "https://kensingtontutors.co.uk",
    siteName: "Kensington Private Tutors",
    title: "Kensington Private Tutors | Expert Private Tutoring in London W8",
    description:
      "DBS-checked Oxbridge graduate tutors offering GCSE, A-Level, 11+ prep, university admissions and more in Kensington, London.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kensington Private Tutors - Expert Tutoring in London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kensington Private Tutors | Expert Tutoring in Kensington",
    description:
      "DBS-checked Oxbridge graduates providing private tutoring in Kensington, London W8.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://kensingtontutors.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Kensington, London",
    "geo.position": "51.5010;-0.1932",
    ICBM: "51.5010, -0.1932",
  },
};

const educationalOrgSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://kensingtontutors.co.uk/#organization",
  name: "Kensington Private Tutors",
  description:
    "Expert private tutoring service in Kensington, London. DBS-checked Oxbridge graduate tutors offering GCSE, A-Level, 11+ prep, university admissions support and more.",
  url: "https://kensingtontutors.co.uk",
  telephone: "+442079462567",
  email: "info@kensingtontutors.co.uk",
  foundingDate: "2016",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Credit Card, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "London",
    },
    {
      "@type": "AdministrativeArea",
      name: "Royal Borough of Kensington and Chelsea",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tutoring Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "GCSE Tutoring",
          description: "Expert GCSE tutoring across all subjects with proven grade improvement results.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "A-Level Tutoring",
          description: "Specialist A-Level tutoring from Oxbridge graduates to secure top university places.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "11+ Exam Prep",
          description: "Comprehensive 11+ exam preparation for top London independent and grammar schools.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "University Admissions",
          description: "Personal statement guidance, interview preparation and Oxbridge application support.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Primary School Support",
          description: "Nurturing tutoring for primary school children to build strong foundations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Adult Learning",
          description: "Flexible tutoring for adults returning to education or pursuing new qualifications.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Kensington Private Tutors",
    address: {
      "@type": "PostalAddress",
      streetAddress: "42 Kensington High Street",
      addressLocality: "Kensington",
      addressRegion: "London",
      postalCode: "W8 4PT",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.501,
      longitude: -0.1932,
    },
    telephone: "+442079462567",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://kensingtontutors.co.uk/#localbusiness",
  name: "Kensington Private Tutors",
  image: "https://kensingtontutors.co.uk/logo.png",
  telephone: "+442079462567",
  email: "info@kensingtontutors.co.uk",
  url: "https://kensingtontutors.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "42 Kensington High Street",
    addressLocality: "Kensington",
    addressRegion: "London",
    postalCode: "W8 4PT",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.501,
    longitude: -0.1932,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://kensingtontutors.co.uk/#website",
  url: "https://kensingtontutors.co.uk",
  name: "Kensington Private Tutors",
  description: "Expert private tutoring services in Kensington, London",
  publisher: {
    "@id": "https://kensingtontutors.co.uk/#organization",
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
        id="educational-org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(educationalOrgSchema),
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
