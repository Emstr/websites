import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Chelsea Pilates Studio | Reformer & Mat Pilates in Chelsea, London",
    template: "%s | Chelsea Pilates Studio",
  },
  description:
    "Premium Pilates studio in Chelsea, London. Reformer Pilates, mat classes, prenatal Pilates, clinical Pilates, and private sessions. Expert instructors. Book your class today.",
  keywords: [
    "Pilates Chelsea",
    "reformer Pilates London",
    "mat Pilates Chelsea",
    "prenatal Pilates",
    "clinical Pilates",
    "private Pilates sessions",
    "Pilates studio Chelsea",
    "Pilates near South Kensington",
    "Pilates classes London",
    "group Pilates Chelsea",
    "Pilates instructor London",
    "best Pilates studio London",
  ],
  authors: [{ name: "Chelsea Pilates Studio" }],
  creator: "Chelsea Pilates Studio",
  publisher: "Chelsea Pilates Studio",
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
    url: "https://chelseapilates.co.uk",
    siteName: "Chelsea Pilates Studio",
    title: "Chelsea Pilates Studio | Reformer & Mat Pilates in Chelsea",
    description:
      "Premium Pilates studio offering reformer, mat, prenatal, and clinical Pilates in the heart of Chelsea. Expert instructors, small class sizes.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chelsea Pilates Studio - Reformer & Mat Pilates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chelsea Pilates Studio | Pilates in Chelsea, London",
    description:
      "Premium Pilates studio in Chelsea. Reformer, mat, prenatal, and clinical Pilates with expert instructors.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://chelseapilates.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Chelsea, London",
    "geo.position": "51.4907;-0.1725",
    ICBM: "51.4907, -0.1725",
  },
};

const exerciseGymSchema = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  "@id": "https://chelseapilates.co.uk/#organization",
  name: "Chelsea Pilates Studio",
  description:
    "Premium Pilates studio offering reformer, mat, prenatal, clinical, and private Pilates sessions in Chelsea, London.",
  url: "https://chelseapilates.co.uk",
  telephone: "+442079464510",
  email: "hello@chelseapilates.co.uk",
  foundingDate: "2018",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  areaServed: [
    {
      "@type": "City",
      name: "London",
    },
    {
      "@type": "AdministrativeArea",
      name: "Greater London",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pilates Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mat Pilates",
          description: "Traditional mat-based Pilates classes for all levels.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Reformer Pilates",
          description: "Dynamic reformer Pilates sessions using state-of-the-art equipment.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Prenatal Pilates",
          description: "Safe, supportive Pilates classes designed for expectant mothers.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Clinical Pilates",
          description: "Rehabilitation-focused Pilates for injury recovery and management.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Private Sessions",
          description: "One-to-one Pilates sessions tailored to individual needs and goals.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Group Classes",
          description: "Small group Pilates classes with a maximum of 12 participants.",
        },
      },
    ],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "89 Fulham Road",
    addressLocality: "Chelsea",
    addressRegion: "London",
    postalCode: "SW3 6RD",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4907,
    longitude: -0.1725,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:30",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  sameAs: [],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://chelseapilates.co.uk/#localbusiness",
  name: "Chelsea Pilates Studio",
  image: "https://chelseapilates.co.uk/logo.png",
  telephone: "+442079464510",
  email: "hello@chelseapilates.co.uk",
  url: "https://chelseapilates.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "89 Fulham Road",
    addressLocality: "Chelsea",
    addressRegion: "London",
    postalCode: "SW3 6RD",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4907,
    longitude: -0.1725,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:30",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://chelseapilates.co.uk/#website",
  url: "https://chelseapilates.co.uk",
  name: "Chelsea Pilates Studio",
  description: "Premium Pilates studio in Chelsea, London",
  publisher: {
    "@id": "https://chelseapilates.co.uk/#organization",
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
        id="exercise-gym-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(exerciseGymSchema),
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
