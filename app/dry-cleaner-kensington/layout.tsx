import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Kensington Dry Cleaners | Premium Dry Cleaning & Laundry in Kensington, W8", template: "%s | Kensington Dry Cleaners" },
  description: "Premium dry cleaning and laundry services in Kensington, West London. Eco-friendly solvents, free collection and delivery, same-day express service. Wedding dress care, alterations and curtain cleaning.",
  keywords: ["dry cleaner Kensington", "laundry service W8", "dry cleaning West London", "wedding dress cleaning", "curtain cleaning Kensington", "same day dry cleaning", "alterations Kensington", "shirt service London", "eco friendly dry cleaner", "garment care Kensington", "free collection delivery dry cleaning", "Kensington High Street dry cleaner"],
  authors: [{ name: "Kensington Dry Cleaners" }],
  creator: "Kensington Dry Cleaners",
  publisher: "Kensington Dry Cleaners",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_GB", url: "https://kensingtondry.co.uk", siteName: "Kensington Dry Cleaners", title: "Kensington Dry Cleaners | Immaculate Care, Every Time", description: "Premium dry cleaning and laundry services in Kensington. Eco-friendly, free collection and delivery, same-day express.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Kensington Dry Cleaners - Immaculate Care, Every Time" }] },
  twitter: { card: "summary_large_image", title: "Kensington Dry Cleaners | Premium Dry Cleaning", description: "Premium dry cleaning and laundry in Kensington, West London. Eco-friendly solvents, free collection and delivery.", images: ["/og-image.jpg"] },
  alternates: { canonical: "https://kensingtondry.co.uk" },
  other: { "geo.region": "GB-LND", "geo.placename": "Kensington, London", "geo.position": "51.4998;-0.1914", ICBM: "51.4998, -0.1914" },
};

const dryCleanerSchema = {
  "@context": "https://schema.org", "@type": "DryCleaningOrLaundry", "@id": "https://kensingtondry.co.uk/#organization",
  name: "Kensington Dry Cleaners", description: "Premium dry cleaning and laundry services with eco-friendly solvents, free collection and delivery, and same-day express service in Kensington, West London.",
  url: "https://kensingtondry.co.uk", telephone: "+442079465530", email: "info@kensingtondry.co.uk", foundingDate: "2008", priceRange: "$$$", currenciesAccepted: "GBP", paymentAccepted: "Cash, Credit Card, Contactless",
  areaServed: [{ "@type": "City", name: "London" }, { "@type": "AdministrativeArea", name: "West London" }],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Dry Cleaning Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dry Cleaning", description: "Professional dry cleaning using eco-friendly solvents for suits, dresses, coats and delicates." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shirt Service", description: "Professional laundering and pressing for business and casual shirts." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Dress Care", description: "Specialist wedding dress cleaning, preservation and boxing." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Curtain & Upholstery Cleaning", description: "Professional cleaning for curtains, blinds, cushions and upholstery." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Alterations & Repairs", description: "Expert alterations, repairs and tailoring for all garments." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Same-Day Express", description: "Same-day dry cleaning and laundry service for urgent items." } },
  ]},
  location: { "@type": "Place", name: "Kensington Dry Cleaners", address: { "@type": "PostalAddress", streetAddress: "112 Kensington High Street", addressLocality: "Kensington", addressRegion: "London", postalCode: "W8 7RW", addressCountry: "GB" }, geo: { "@type": "GeoCoordinates", latitude: 51.4998, longitude: -0.1914 }, telephone: "+442079465530" },
};

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://kensingtondry.co.uk/#localbusiness",
  name: "Kensington Dry Cleaners", image: "https://kensingtondry.co.uk/logo.png", telephone: "+442079465530", email: "info@kensingtondry.co.uk", url: "https://kensingtondry.co.uk",
  address: { "@type": "PostalAddress", streetAddress: "112 Kensington High Street", addressLocality: "Kensington", addressRegion: "London", postalCode: "W8 7RW", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.4998, longitude: -0.1914 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:30", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "17:00" },
  ],
  priceRange: "$$$",
};

const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://kensingtondry.co.uk/#website", url: "https://kensingtondry.co.uk", name: "Kensington Dry Cleaners", description: "Premium dry cleaning and laundry services in Kensington, West London", publisher: { "@id": "https://kensingtondry.co.uk/#organization" } };

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="dry-cleaner-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dryCleanerSchema) }} />
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
