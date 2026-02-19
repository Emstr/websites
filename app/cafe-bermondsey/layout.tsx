import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Bermondsey Coffee House | Speciality Coffee & Brunch in Bermondsey, SE1",
    template: "%s | Bermondsey Coffee House",
  },
  description:
    "Speciality coffee shop in Bermondsey, London SE1. Locally roasted coffee, artisan pastries, brunch menu and private hire. 5-star hygiene rated.",
  keywords: [
    "coffee shop bermondsey",
    "cafe bermondsey",
    "speciality coffee SE1",
    "brunch bermondsey",
    "bermondsey coffee house",
    "artisan coffee london",
    "best cafe bermondsey",
    "pastries bermondsey",
    "coffee near bermondsey street",
    "private hire cafe london",
    "locally roasted coffee",
    "catering bermondsey",
  ],
  authors: [{ name: "Bermondsey Coffee House" }],
  creator: "Bermondsey Coffee House",
  publisher: "Bermondsey Coffee House",
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
    url: "https://bermondseycoffee.co.uk",
    siteName: "Bermondsey Coffee House",
    title: "Bermondsey Coffee House | Speciality Coffee & Brunch",
    description:
      "Speciality coffee, artisan pastries and brunch in Bermondsey, London SE1. Locally roasted, 5-star hygiene rated.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bermondsey Coffee House - Speciality Coffee in Bermondsey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bermondsey Coffee House | Speciality Coffee & Brunch",
    description:
      "Speciality coffee, artisan pastries and brunch in Bermondsey, London SE1.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://bermondseycoffee.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Bermondsey, London",
    "geo.position": "51.4980;-0.0812",
    ICBM: "51.4980, -0.0812",
  },
};

const cafeSchema = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "@id": "https://bermondseycoffee.co.uk/#organization",
  name: "Bermondsey Coffee House",
  description:
    "Speciality coffee shop in Bermondsey serving locally roasted coffee, artisan pastries, brunch and catering. 5-star hygiene rated.",
  url: "https://bermondseycoffee.co.uk",
  telephone: "+442079468901",
  email: "hello@bermondsycoffee.co.uk",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Credit Card, Debit Card, Apple Pay",
  servesCuisine: ["Coffee", "Brunch", "Pastries", "Cakes"],
  areaServed: {
    "@type": "City",
    name: "London",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cafe Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Speciality Coffee", description: "Locally roasted speciality coffee brewed by trained baristas." },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Artisan Pastries & Cakes", description: "Freshly baked pastries, cakes and sweet treats made daily." },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Brunch Menu", description: "Weekend brunch and all-day breakfast options using fresh, local ingredients." },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Private Hire & Events", description: "Hire our space for private events, meetings and celebrations." },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Coffee Subscriptions", description: "Monthly coffee bean subscription delivering fresh roasts to your door." },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Catering", description: "Coffee and food catering for corporate events, meetings and parties." },
      },
    ],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "78 Bermondsey Street",
    addressLocality: "Bermondsey",
    addressRegion: "London",
    postalCode: "SE1 3UD",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.498,
    longitude: -0.0812,
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
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bermondseycoffee.co.uk/#localbusiness",
  name: "Bermondsey Coffee House",
  image: "https://bermondseycoffee.co.uk/logo.png",
  telephone: "+442079468901",
  email: "hello@bermondsycoffee.co.uk",
  url: "https://bermondseycoffee.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "78 Bermondsey Street",
    addressLocality: "Bermondsey",
    addressRegion: "London",
    postalCode: "SE1 3UD",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.498,
    longitude: -0.0812,
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
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://bermondseycoffee.co.uk/#website",
  url: "https://bermondseycoffee.co.uk",
  name: "Bermondsey Coffee House",
  description: "Speciality coffee and brunch in Bermondsey, London SE1",
  publisher: { "@id": "https://bermondseycoffee.co.uk/#organization" },
};

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="cafe-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cafeSchema) }} />
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
