import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Camden Strength & Fitness | Gym in Camden, London",
    template: "%s | Camden Strength & Fitness",
  },
  description:
    "Serious strength and fitness training in the heart of Camden. Personal training, HIIT classes, Olympic lifting, boxing fitness and nutritional coaching. Open 5am-10pm.",
  keywords: [
    "gym Camden",
    "strength training Camden",
    "personal trainer Camden",
    "HIIT classes Camden",
    "Olympic lifting London",
    "boxing fitness Camden",
    "gym near Chalk Farm",
    "Camden Town gym",
    "fitness classes Camden",
    "nutritional coaching London",
    "CrossFit Camden",
    "strength and conditioning London",
  ],
  authors: [{ name: "Camden Strength & Fitness" }],
  creator: "Camden Strength & Fitness",
  publisher: "Camden Strength & Fitness",
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
    url: "https://camdenstrength.co.uk",
    siteName: "Camden Strength & Fitness",
    title: "Camden Strength & Fitness | Built Different",
    description:
      "Serious strength and fitness training in Camden. Personal training, HIIT, Olympic lifting, boxing and nutritional coaching from expert coaches.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Camden Strength & Fitness - Built Different",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Camden Strength & Fitness | Built Different",
    description:
      "Serious strength and fitness training in Camden. Personal training, HIIT, Olympic lifting, boxing and nutritional coaching.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://camdenstrength.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Camden",
    "geo.position": "51.5415;-0.1459",
    ICBM: "51.5415, -0.1459",
  },
};

const exerciseGymSchema = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  "@id": "https://camdenstrength.co.uk/#organization",
  name: "Camden Strength & Fitness",
  alternateName: "Camden Strength",
  description:
    "Serious strength and fitness training facility in Camden offering personal training, HIIT classes, Olympic lifting, boxing fitness and nutritional coaching.",
  url: "https://camdenstrength.co.uk",
  telephone: "+442079463350",
  email: "info@camdenstrength.co.uk",
  foundingDate: "2019",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Credit Card, Debit Card, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "London",
    },
    {
      "@type": "AdministrativeArea",
      name: "Camden",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Fitness Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Strength Training",
          description: "Structured strength programmes with expert coaching and premium equipment.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "HIIT Classes",
          description: "High-intensity interval training classes designed to torch fat and build endurance.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Personal Training",
          description: "One-to-one personal training with certified coaches tailored to your goals.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Olympic Lifting",
          description: "Specialist Olympic weightlifting coaching for all levels from beginner to competitor.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Boxing Fitness",
          description: "Boxing-based fitness classes combining technique, conditioning and core work.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Nutritional Coaching",
          description: "Evidence-based nutritional guidance to support your training and body composition goals.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Camden Strength & Fitness",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit 3, 56 Chalk Farm Road",
      addressLocality: "Camden",
      addressRegion: "London",
      postalCode: "NW1 8AN",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5415,
      longitude: -0.1459,
    },
    telephone: "+442079463350",
  },
  sameAs: [
    "https://www.instagram.com/camdenstrength",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://camdenstrength.co.uk/#localbusiness",
  name: "Camden Strength & Fitness",
  image: "https://camdenstrength.co.uk/logo.png",
  telephone: "+442079463350",
  email: "info@camdenstrength.co.uk",
  url: "https://camdenstrength.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 3, 56 Chalk Farm Road",
    addressLocality: "Camden",
    addressRegion: "London",
    postalCode: "NW1 8AN",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5415,
    longitude: -0.1459,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "05:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "08:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://camdenstrength.co.uk/#website",
  url: "https://camdenstrength.co.uk",
  name: "Camden Strength & Fitness",
  description: "Serious strength and fitness training in Camden, London",
  publisher: {
    "@id": "https://camdenstrength.co.uk/#organization",
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
