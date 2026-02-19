import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Brixton Plumbing Services | Emergency Plumber in Brixton, SW2",
    template: "%s | Brixton Plumbing Services",
  },
  description:
    "Reliable plumbing services in Brixton, SW2. Emergency plumber, boiler installation & repair, bathroom fitting, central heating, and drain unblocking. Gas Safe registered. Call 020 7946 0123.",
  keywords: [
    "plumber Brixton",
    "emergency plumber SW2",
    "boiler installation Brixton",
    "boiler repair Brixton",
    "bathroom installation Brixton",
    "central heating Brixton",
    "leak detection Brixton",
    "drain unblocking Brixton",
    "Gas Safe plumber London",
    "24 hour plumber Brixton",
    "local plumber SW2",
    "plumbing services South London",
  ],
  authors: [{ name: "Brixton Plumbing Services" }],
  creator: "Brixton Plumbing Services",
  publisher: "Brixton Plumbing Services",
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
    url: "https://brixtonplumbing.co.uk",
    siteName: "Brixton Plumbing Services",
    title: "Brixton Plumbing Services | Emergency Plumber in Brixton, SW2",
    description:
      "Gas Safe registered plumber in Brixton. 24/7 emergency callouts, boiler installation & repair, bathroom fitting, and all plumbing services. Free quotes available.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brixton Plumbing Services - Reliable Plumber in SW2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brixton Plumbing Services | Emergency Plumber in Brixton",
    description:
      "Gas Safe registered plumber in Brixton, SW2. 24/7 emergency callouts, boiler repairs, bathroom installations. Free quotes.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://brixtonplumbing.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Brixton, London",
    "geo.position": "51.4613;-0.1156",
    ICBM: "51.4613, -0.1156",
  },
};

const plumberSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": "https://brixtonplumbing.co.uk/#organization",
  name: "Brixton Plumbing Services",
  description:
    "Reliable plumbing services in Brixton, SW2. Emergency plumber, boiler installation & repair, bathroom fitting, central heating, leak detection, and drain unblocking. Gas Safe registered.",
  url: "https://brixtonplumbing.co.uk",
  telephone: "+442079460123",
  email: "info@brixtonplumbing.co.uk",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Bank Transfer, Card",
  areaServed: [
    {
      "@type": "City",
      name: "London",
    },
    {
      "@type": "AdministrativeArea",
      name: "Brixton",
    },
    {
      "@type": "AdministrativeArea",
      name: "South London",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Plumbing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Plumbing",
          description: "24/7 emergency plumbing callouts across Brixton and South London.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Boiler Installation & Repair",
          description: "Gas Safe registered boiler installation, servicing, and repairs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bathroom Installation",
          description: "Complete bathroom design and installation services.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Central Heating",
          description: "Central heating installation, repair, and power flushing.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Leak Detection & Repair",
          description: "Advanced leak detection and repair services for all property types.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Drain Unblocking",
          description: "Professional drain unblocking and drainage solutions.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Brixton Plumbing Services",
    address: {
      "@type": "PostalAddress",
      streetAddress: "45 Atlantic Road",
      addressLocality: "Brixton",
      addressRegion: "London",
      postalCode: "SW2 1DR",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.4613,
      longitude: -0.1156,
    },
    telephone: "+442079460123",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://brixtonplumbing.co.uk/#localbusiness",
  name: "Brixton Plumbing Services",
  image: "https://brixtonplumbing.co.uk/logo.png",
  telephone: "+442079460123",
  email: "info@brixtonplumbing.co.uk",
  url: "https://brixtonplumbing.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "45 Atlantic Road",
    addressLocality: "Brixton",
    addressRegion: "London",
    postalCode: "SW2 1DR",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4613,
    longitude: -0.1156,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://brixtonplumbing.co.uk/#website",
  url: "https://brixtonplumbing.co.uk",
  name: "Brixton Plumbing Services",
  description: "Reliable plumbing services in Brixton and South London",
  publisher: {
    "@id": "https://brixtonplumbing.co.uk/#organization",
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
        id="plumber-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(plumberSchema),
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
