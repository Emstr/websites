import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Mayfair Cleaning Services | Premium Cleaning in Mayfair, W1", template: "%s | Mayfair Cleaning Services" },
  description: "Premium cleaning services in Mayfair and Central London. DBS checked staff, fully insured, eco-friendly products. Regular, deep, end of tenancy, and office cleaning.",
  keywords: ["cleaning Mayfair", "cleaner W1", "domestic cleaning Mayfair", "deep cleaning London", "end of tenancy cleaning", "office cleaning Mayfair", "eco-friendly cleaning", "DBS checked cleaners", "premium cleaning service", "carpet cleaning Mayfair"],
  authors: [{ name: "Mayfair Cleaning Services" }], creator: "Mayfair Cleaning Services", publisher: "Mayfair Cleaning Services",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_GB", url: "https://mayfaircleaning.co.uk", siteName: "Mayfair Cleaning Services", title: "Mayfair Cleaning Services | Premium Cleaning in Mayfair", description: "DBS checked, fully insured cleaning services in Mayfair. Regular domestic, deep cleaning, end of tenancy, and office cleaning.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Mayfair Cleaning Services" }] },
  twitter: { card: "summary_large_image", title: "Mayfair Cleaning Services | Premium Cleaning W1", description: "Premium cleaning in Mayfair with DBS checked staff and eco-friendly products." },
  alternates: { canonical: "https://mayfaircleaning.co.uk" },
  other: { "geo.region": "GB-LND", "geo.placename": "Mayfair, London", "geo.position": "51.5100;-0.1468", ICBM: "51.5100, -0.1468" },
};

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://mayfaircleaning.co.uk/#organization",
  name: "Mayfair Cleaning Services", description: "Premium cleaning services in Mayfair and Central London. DBS checked, fully insured, eco-friendly.",
  url: "https://mayfaircleaning.co.uk", telephone: "+442079460345", email: "bookings@mayfaircleaning.co.uk",
  priceRange: "$$", currenciesAccepted: "GBP", paymentAccepted: "Bank Transfer, Credit Card, Debit Card",
  areaServed: [{ "@type": "City", name: "London" }, { "@type": "AdministrativeArea", name: "Central London" }],
  hasOfferCatalog: {
    "@type": "OfferCatalog", name: "Cleaning Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Regular Domestic Cleaning", description: "Scheduled weekly or fortnightly cleaning for homes and flats." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deep Cleaning", description: "Intensive top-to-bottom cleaning for a thorough refresh." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "End of Tenancy Cleaning", description: "Comprehensive move-out cleaning to guarantee your deposit return." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Cleaning", description: "Professional office cleaning services for businesses of all sizes." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "After-Party Cleaning", description: "Next-day cleanup after events and parties." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Carpet & Upholstery Cleaning", description: "Professional deep cleaning for carpets, rugs, and soft furnishings." } },
    ],
  },
  location: {
    "@type": "Place", name: "Mayfair Cleaning Services",
    address: { "@type": "PostalAddress", streetAddress: "22 Brook Street", addressLocality: "Mayfair", addressRegion: "London", postalCode: "W1K 5DF", addressCountry: "GB" },
    geo: { "@type": "GeoCoordinates", latitude: 51.51, longitude: -0.1468 }, telephone: "+442079460345",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:00", closes: "18:00" },
  ],
};

const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://mayfaircleaning.co.uk/#website", url: "https://mayfaircleaning.co.uk", name: "Mayfair Cleaning Services", description: "Premium cleaning services in Mayfair and Central London", publisher: { "@id": "https://mayfaircleaning.co.uk/#organization" } };

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header /><main>{children}</main><Footer />
    </>
  );
}
