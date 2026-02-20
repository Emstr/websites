import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Chelsea Travel Company | Luxury Holidays & Bespoke Travel in Chelsea, London",
    template: "%s | Chelsea Travel Company",
  },
  description:
    "Bespoke travel agency in Chelsea, London. Luxury holidays, honeymoon planning, ski trips, safaris, cruises and business travel. ABTA & ATOL protected. Over 5,000 holidays booked since 2010.",
  keywords: [
    "travel agent Chelsea",
    "luxury holidays London",
    "honeymoon planning Chelsea",
    "ski holidays UK",
    "safari holidays",
    "cruise bookings London",
    "business travel Chelsea",
    "ABTA travel agent",
    "ATOL protected holidays",
    "bespoke travel London",
    "Kings Road travel agent",
    "Chelsea travel agency",
  ],
  authors: [{ name: "Chelsea Travel Company" }],
  creator: "Chelsea Travel Company",
  publisher: "Chelsea Travel Company",
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
    url: "https://chelseatravel.co.uk",
    siteName: "Chelsea Travel Company",
    title: "Chelsea Travel Company | Luxury Holidays & Bespoke Travel",
    description:
      "Bespoke travel agency on King's Road, Chelsea. Luxury holidays, honeymoons, ski trips, safaris and cruises. ABTA & ATOL protected.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chelsea Travel Company - Luxury Holidays & Bespoke Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chelsea Travel Company | Luxury Holidays & Bespoke Travel",
    description:
      "Bespoke travel agency in Chelsea, London. ABTA & ATOL protected since 2010.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://chelseatravel.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Chelsea, London",
    "geo.position": "51.4875;-0.1687",
    ICBM: "51.4875, -0.1687",
  },
};

const travelAgencySchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": "https://chelseatravel.co.uk/#organization",
  name: "Chelsea Travel Company",
  description:
    "Bespoke travel agency in Chelsea, London offering luxury holidays, honeymoon planning, ski trips, safaris, cruises and business travel. ABTA & ATOL protected.",
  url: "https://chelseatravel.co.uk",
  telephone: "+442079466650",
  email: "holidays@chelseatravel.co.uk",
  foundingDate: "2010",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
  areaServed: [
    { "@type": "City", name: "London" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Travel Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luxury Holidays", description: "Bespoke luxury holiday packages to worldwide destinations." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Honeymoon Planning", description: "Romantic honeymoon planning and booking service." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ski Holidays", description: "Ski holiday packages to the finest resorts in Europe and beyond." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Safari & Adventure", description: "African safari and adventure holiday experiences." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cruise Bookings", description: "Luxury and expedition cruise bookings worldwide." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Travel", description: "Corporate travel management and booking services." } },
    ],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "203 King's Road",
    addressLocality: "Chelsea",
    addressRegion: "London",
    postalCode: "SW3 5ED",
    addressCountry: "GB",
  },
  geo: { "@type": "GeoCoordinates", latitude: 51.4875, longitude: -0.1687 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "10:00", closes: "16:00" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://chelseatravel.co.uk/#localbusiness",
  name: "Chelsea Travel Company",
  image: "https://chelseatravel.co.uk/logo.png",
  telephone: "+442079466650",
  email: "holidays@chelseatravel.co.uk",
  url: "https://chelseatravel.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "203 King's Road",
    addressLocality: "Chelsea",
    addressRegion: "London",
    postalCode: "SW3 5ED",
    addressCountry: "GB",
  },
  geo: { "@type": "GeoCoordinates", latitude: 51.4875, longitude: -0.1687 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "10:00", closes: "16:00" },
  ],
  priceRange: "$$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://chelseatravel.co.uk/#website",
  url: "https://chelseatravel.co.uk",
  name: "Chelsea Travel Company",
  description: "Bespoke travel agency in Chelsea, London",
  publisher: { "@id": "https://chelseatravel.co.uk/#organization" },
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script
        id="travel-agency-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencySchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
