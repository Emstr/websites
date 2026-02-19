import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Camden Lock & Key | 24/7 Emergency Locksmith in Camden, NW1", template: "%s | Camden Lock & Key" },
  description: "Emergency locksmith in Camden, NW1. 30-minute response, no call-out fee. Lock replacements, lockouts, UPVC repairs, key cutting, and security upgrades. DBS checked.",
  keywords: ["locksmith Camden", "emergency locksmith NW1", "lock replacement Camden", "lockout service Camden", "UPVC lock repair Camden", "key cutting Camden", "security upgrades Camden", "24 hour locksmith North London", "DBS checked locksmith", "door lock Camden"],
  authors: [{ name: "Camden Lock & Key" }],
  creator: "Camden Lock & Key", publisher: "Camden Lock & Key",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_GB", url: "https://camdenlockandkey.co.uk", siteName: "Camden Lock & Key", title: "Camden Lock & Key | 24/7 Emergency Locksmith in Camden, NW1", description: "DBS checked locksmith in Camden. 30-minute response, no call-out fee. Emergency lockouts, lock changes, UPVC repairs, and security upgrades.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Camden Lock & Key - Emergency Locksmith" }] },
  twitter: { card: "summary_large_image", title: "Camden Lock & Key | Emergency Locksmith Camden", description: "DBS checked locksmith in Camden. 30-minute response, no call-out fee.", images: ["/og-image.jpg"] },
  alternates: { canonical: "https://camdenlockandkey.co.uk" },
  other: { "geo.region": "GB-LND", "geo.placename": "Camden, London", "geo.position": "51.5390;-0.1426", ICBM: "51.5390, -0.1426" },
};

const locksmithSchema = {
  "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://camdenlockandkey.co.uk/#organization",
  name: "Camden Lock & Key", description: "DBS checked emergency locksmith in Camden, NW1. 24/7 lockout service, lock replacements, UPVC repairs, key cutting, security upgrades, and safe opening.",
  url: "https://camdenlockandkey.co.uk", telephone: "+442079460789", email: "info@camdenlockandkey.co.uk",
  priceRange: "$$", currenciesAccepted: "GBP", paymentAccepted: "Cash, Bank Transfer, Card",
  areaServed: [{ "@type": "City", name: "London" }, { "@type": "AdministrativeArea", name: "Camden" }, { "@type": "AdministrativeArea", name: "North London" }],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Locksmith Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Lockout Service", description: "24/7 emergency lockout service with 30-minute response." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lock Replacement", description: "All types of lock replacement including British Standard locks." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "UPVC & Multipoint Lock Repair", description: "UPVC door and window lock repairs and replacements." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Key Cutting", description: "Precision key cutting for all lock types." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Security Upgrades", description: "Home and business security assessments and upgrades." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Safe Opening", description: "Professional safe opening and repair services." } },
  ]},
  location: { "@type": "Place", name: "Camden Lock & Key", address: { "@type": "PostalAddress", streetAddress: "28 Parkway", addressLocality: "Camden", addressRegion: "London", postalCode: "NW1 7AH", addressCountry: "GB" }, geo: { "@type": "GeoCoordinates", latitude: 51.5390, longitude: -0.1426 }, telephone: "+442079460789" },
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" }],
};

const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://camdenlockandkey.co.uk/#website", url: "https://camdenlockandkey.co.uk", name: "Camden Lock & Key", description: "24/7 emergency locksmith in Camden and North London", publisher: { "@id": "https://camdenlockandkey.co.uk/#organization" } };

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="locksmith-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locksmithSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
