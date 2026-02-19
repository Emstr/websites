import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Croydon Driving Academy | Driving Lessons in Croydon, CR0",
    template: "%s | Croydon Driving Academy",
  },
  description:
    "DVSA approved driving school in Croydon, CR0. Manual and automatic driving lessons, intensive courses, Pass Plus and motorway lessons. 90% first-time pass rate.",
  keywords: [
    "driving lessons Croydon",
    "driving school CR0",
    "learn to drive Croydon",
    "automatic lessons Croydon",
    "manual lessons Croydon",
    "intensive driving course Croydon",
    "Pass Plus Croydon",
    "DVSA approved instructor",
    "driving instructor Croydon",
    "motorway lessons",
    "refresher lessons Croydon",
    "driving test preparation",
  ],
  authors: [{ name: "Croydon Driving Academy" }],
  creator: "Croydon Driving Academy",
  publisher: "Croydon Driving Academy",
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
    url: "https://croydondrivingacademy.co.uk",
    siteName: "Croydon Driving Academy",
    title: "Croydon Driving Academy | Driving Lessons in Croydon",
    description:
      "DVSA approved driving school with a 90% first-time pass rate. Manual and automatic lessons, intensive courses and Pass Plus in Croydon.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Croydon Driving Academy - Driving Lessons in Croydon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Croydon Driving Academy | Driving Lessons Croydon",
    description:
      "DVSA approved driving school in Croydon. 90% first-time pass rate. Manual and automatic lessons.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://croydondrivingacademy.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Croydon",
    "geo.position": "51.3762;-0.0982",
    ICBM: "51.3762, -0.0982",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://croydondrivingacademy.co.uk/#business",
  name: "Croydon Driving Academy",
  description:
    "DVSA approved driving school in Croydon offering manual and automatic driving lessons, intensive courses, Pass Plus, motorway lessons and refresher courses.",
  url: "https://croydondrivingacademy.co.uk",
  telephone: "+442079463678",
  email: "lessons@croydondrivingacademy.co.uk",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
  areaServed: [
    {
      "@type": "City",
      name: "Croydon",
    },
    {
      "@type": "AdministrativeArea",
      name: "South London",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Driving Lesson Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Manual Lessons",
          description: "Professional manual driving lessons with DVSA approved instructors.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automatic Lessons",
          description: "Automatic driving lessons for a simpler, stress-free learning experience.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Intensive Courses",
          description: "Fast-track intensive driving courses to get you on the road quickly.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pass Plus",
          description: "Post-test training to build confidence and potentially reduce insurance premiums.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Motorway Lessons",
          description: "Professional motorway driving tuition for newly qualified drivers.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Refresher Courses",
          description: "Confidence-building refresher courses for drivers returning to the road.",
        },
      },
    ],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "18 George Street",
    addressLocality: "Croydon",
    addressRegion: "London",
    postalCode: "CR0 1PA",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.3762,
    longitude: -0.0982,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "16:00",
    },
  ],
  image: "https://croydondrivingacademy.co.uk/logo.png",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://croydondrivingacademy.co.uk/#website",
  url: "https://croydondrivingacademy.co.uk",
  name: "Croydon Driving Academy",
  description: "DVSA approved driving school in Croydon, London",
  publisher: {
    "@id": "https://croydondrivingacademy.co.uk/#business",
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
