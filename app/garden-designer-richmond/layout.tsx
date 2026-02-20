import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Richmond Garden Design | Award-Winning Garden Designers in Richmond, London", template: "%s | Richmond Garden Design" },
  description: "Award-winning garden design studio in Richmond, London. Bespoke garden design, planting plans, landscaping, lighting and water features. RHS Chelsea medal winners. 150+ gardens designed.",
  keywords: ["garden design Richmond", "garden designer London", "landscaping Richmond", "planting plans", "lighting design", "water features", "RHS Chelsea", "garden maintenance", "landscape architect", "Richmond gardens"],
  authors: [{ name: "Richmond Garden Design" }],
  creator: "Richmond Garden Design",
  publisher: "Richmond Garden Design",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_GB", url: "https://richmondgardens.co.uk", siteName: "Richmond Garden Design", title: "Richmond Garden Design | Award-Winning Garden Designers", description: "Bespoke garden design, planting plans and landscaping from an award-winning studio in Richmond, London.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Richmond Garden Design" }] },
  twitter: { card: "summary_large_image", title: "Richmond Garden Design | Award-Winning Garden Designers", description: "Bespoke garden design and landscaping in Richmond, London.", images: ["/og-image.jpg"] },
  alternates: { canonical: "https://richmondgardens.co.uk" },
  other: { "geo.region": "GB-LND", "geo.placename": "Richmond", "geo.position": "51.4613;-0.3037", ICBM: "51.4613, -0.3037" },
};

const gardenDesignSchema = {
  "@context": "https://schema.org", "@type": "ProfessionalService", "@id": "https://richmondgardens.co.uk/#organization",
  name: "Richmond Garden Design", description: "Award-winning garden design studio in Richmond, London. Bespoke garden design, planting plans, landscaping, maintenance, lighting design and water features.",
  url: "https://richmondgardens.co.uk", telephone: "+442079463340", email: "hello@richmondgardens.co.uk", foundingDate: "2013", priceRange: "$$$", currenciesAccepted: "GBP", paymentAccepted: "Bank Transfer, Card",
  areaServed: [{ "@type": "City", name: "Richmond" }, { "@type": "AdministrativeArea", name: "South West London" }, { "@type": "AdministrativeArea", name: "Greater London" }],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Garden Design Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Garden Design", description: "Full garden design service from concept to detailed plans." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Planting Plans", description: "Bespoke planting schemes for year-round colour and interest." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landscaping", description: "Complete hard and soft landscaping implementation." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Garden Maintenance", description: "Ongoing garden care and seasonal maintenance programmes." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lighting Design", description: "Garden lighting design to extend enjoyment into the evening." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Features", description: "Bespoke water features including ponds, rills and fountains." } },
  ] },
  location: { "@type": "Place", name: "Richmond Garden Design", address: { "@type": "PostalAddress", streetAddress: "22 The Quadrant", addressLocality: "Richmond", addressRegion: "London", postalCode: "TW9 1BP", addressCountry: "GB" }, geo: { "@type": "GeoCoordinates", latitude: 51.4613, longitude: -0.3037 }, telephone: "+442079463340" },
};

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://richmondgardens.co.uk/#localbusiness",
  name: "Richmond Garden Design", image: "https://richmondgardens.co.uk/logo.png", telephone: "+442079463340", email: "hello@richmondgardens.co.uk", url: "https://richmondgardens.co.uk",
  address: { "@type": "PostalAddress", streetAddress: "22 The Quadrant", addressLocality: "Richmond", addressRegion: "London", postalCode: "TW9 1BP", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.4613, longitude: -0.3037 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" },
  ], priceRange: "$$$",
};

const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://richmondgardens.co.uk/#website", url: "https://richmondgardens.co.uk", name: "Richmond Garden Design", description: "Award-winning garden design in Richmond, London", publisher: { "@id": "https://richmondgardens.co.uk/#organization" } };

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="garden-design-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gardenDesignSchema) }} />
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header /><main>{children}</main><Footer />
    </>
  );
}
