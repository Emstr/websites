import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Camden Phone Fix | Fast Phone & Device Repair in Camden, London", template: "%s | Camden Phone Fix" },
  description: "Fast, affordable phone and device repair in Camden, London. Screen replacement, battery replacement, water damage repair and more. 30-minute repairs, 90-day warranty. All brands including iPhone, Samsung, Huawei and Google.",
  keywords: ["phone repair Camden", "iPhone screen repair Camden", "Samsung repair London", "phone screen replacement", "water damage repair Camden", "phone battery replacement", "tablet repair Camden", "laptop repair Camden", "Camden Town phone fix", "cracked screen repair London", "device repair NW1", "fast phone repair"],
  authors: [{ name: "Camden Phone Fix" }], creator: "Camden Phone Fix", publisher: "Camden Phone Fix",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_GB", url: "https://camdenphonefix.co.uk", siteName: "Camden Phone Fix", title: "Camden Phone Fix | Fast Phone & Device Repair", description: "30-minute phone repairs in Camden. Screen replacement, battery, water damage and more. 90-day warranty on all repairs.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Camden Phone Fix - Fast Phone & Device Repair" }] },
  twitter: { card: "summary_large_image", title: "Camden Phone Fix | Fast Phone Repair", description: "Fast, affordable phone repairs in Camden. 30-minute service, 90-day warranty.", images: ["/og-image.jpg"] },
  alternates: { canonical: "https://camdenphonefix.co.uk" },
  other: { "geo.region": "GB-LND", "geo.placename": "Camden, London", "geo.position": "51.5392;-0.1426", ICBM: "51.5392, -0.1426" },
};

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://camdenphonefix.co.uk/#organization",
  name: "Camden Phone Fix", description: "Fast, affordable phone and device repair in Camden, London. Screen replacement, battery replacement, water damage repair and more.",
  url: "https://camdenphonefix.co.uk", telephone: "+442079464460", email: "repairs@camdenphonefix.co.uk",
  foundingDate: "2018", priceRange: "$$", currenciesAccepted: "GBP", paymentAccepted: "Cash, Credit Card, Debit Card, Apple Pay, Google Pay",
  areaServed: [{ "@type": "City", name: "London" }],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Device Repair Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Screen Replacement", description: "Fast screen replacement for all phone brands." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Battery Replacement", description: "Same-day battery replacement for smartphones and tablets." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Damage Repair", description: "Professional water damage assessment and repair." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Charging Port Fix", description: "Charging port repair and replacement for all devices." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Data Recovery", description: "Data recovery from damaged or non-functioning devices." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tablet & Laptop Repair", description: "Repair services for tablets and laptops." } },
  ]},
  address: { "@type": "PostalAddress", streetAddress: "28 Camden High Street", addressLocality: "Camden", addressRegion: "London", postalCode: "NW1 0JH", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.5392, longitude: -0.1426 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "09:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "10:00", closes: "18:00" },
  ],
};

const phoneRepairSchema = {
  "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://camdenphonefix.co.uk/#localbusiness",
  name: "Camden Phone Fix", image: "https://camdenphonefix.co.uk/logo.png", telephone: "+442079464460", email: "repairs@camdenphonefix.co.uk", url: "https://camdenphonefix.co.uk",
  address: { "@type": "PostalAddress", streetAddress: "28 Camden High Street", addressLocality: "Camden", addressRegion: "London", postalCode: "NW1 0JH", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.5392, longitude: -0.1426 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "09:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "10:00", closes: "18:00" },
  ],
  priceRange: "$$",
};

const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://camdenphonefix.co.uk/#website", url: "https://camdenphonefix.co.uk", name: "Camden Phone Fix", description: "Fast phone and device repair in Camden, London", publisher: { "@id": "https://camdenphonefix.co.uk/#organization" } };

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="phone-repair-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(phoneRepairSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
