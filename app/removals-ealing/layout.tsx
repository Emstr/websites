import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Ealing Moving Company | Professional Removals in Ealing, W5",
    template: "%s | Ealing Moving Company",
  },
  description:
    "Professional home and office removals in Ealing and West London. BAR member, fully insured, Which? Trusted Trader. Packing, storage, and international moves.",
  keywords: [
    "removals Ealing", "moving company W5", "house removals Ealing", "office relocation West London",
    "packing service Ealing", "storage solutions", "man and van Ealing", "international removals",
    "BAR member removals", "Which Trusted Trader removals", "removals West London",
  ],
  authors: [{ name: "Ealing Moving Company" }],
  creator: "Ealing Moving Company",
  publisher: "Ealing Moving Company",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    type: "website", locale: "en_GB", url: "https://ealingmoving.co.uk", siteName: "Ealing Moving Company",
    title: "Ealing Moving Company | Professional Removals in Ealing",
    description: "BAR member removals company in Ealing. Home removals, office relocations, packing, storage, and international moves.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Ealing Moving Company - Professional Removals" }],
  },
  twitter: { card: "summary_large_image", title: "Ealing Moving Company | Removals W5", description: "Professional removals in Ealing. BAR member, fully insured, Which? Trusted Trader." },
  alternates: { canonical: "https://ealingmoving.co.uk" },
  other: { "geo.region": "GB-LND", "geo.placename": "Ealing, London", "geo.position": "51.5130;-0.3089", ICBM: "51.5130, -0.3089" },
};

const movingCompanySchema = {
  "@context": "https://schema.org", "@type": "MovingCompany", "@id": "https://ealingmoving.co.uk/#organization",
  name: "Ealing Moving Company", description: "Professional home and office removals in Ealing and West London. BAR member, fully insured.",
  url: "https://ealingmoving.co.uk", telephone: "+442079469234", email: "moves@ealingmoving.co.uk",
  priceRange: "$$", currenciesAccepted: "GBP", paymentAccepted: "Bank Transfer, Credit Card, Debit Card",
  areaServed: [{ "@type": "City", name: "London" }, { "@type": "AdministrativeArea", name: "West London" }],
  hasOfferCatalog: {
    "@type": "OfferCatalog", name: "Removal Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Removals", description: "Full home removals service with professional crews and modern vehicles." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Relocations", description: "Minimal disruption office moves, including IT equipment and furniture." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Packing Services", description: "Professional packing with quality materials to protect your belongings." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Storage Solutions", description: "Secure, climate-controlled storage for short or long term." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Man & Van", description: "Flexible man and van service for smaller moves and deliveries." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "International Moves", description: "Worldwide removals by road, sea, and air with full customs support." } },
    ],
  },
  location: {
    "@type": "Place", name: "Ealing Moving Company",
    address: { "@type": "PostalAddress", streetAddress: "112 Uxbridge Road", addressLocality: "Ealing", addressRegion: "London", postalCode: "W5 2TL", addressCountry: "GB" },
    geo: { "@type": "GeoCoordinates", latitude: 51.513, longitude: -0.3089 },
    telephone: "+442079469234",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:00", closes: "17:00" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://ealingmoving.co.uk/#localbusiness",
  name: "Ealing Moving Company", image: "https://ealingmoving.co.uk/logo.png",
  telephone: "+442079469234", email: "moves@ealingmoving.co.uk", url: "https://ealingmoving.co.uk",
  address: { "@type": "PostalAddress", streetAddress: "112 Uxbridge Road", addressLocality: "Ealing", addressRegion: "London", postalCode: "W5 2TL", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.513, longitude: -0.3089 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:00", closes: "17:00" },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org", "@type": "WebSite", "@id": "https://ealingmoving.co.uk/#website",
  url: "https://ealingmoving.co.uk", name: "Ealing Moving Company",
  description: "Professional home and office removals in Ealing and West London",
  publisher: { "@id": "https://ealingmoving.co.uk/#organization" },
};

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="moving-company-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(movingCompanySchema) }} />
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
