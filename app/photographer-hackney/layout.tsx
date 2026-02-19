import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Hackney Photography Studio | Portrait, Wedding & Commercial Photography, E8", template: "%s | Hackney Photography Studio" },
  description: "Professional photography studio in Hackney, London E8. Portrait, wedding, commercial, events and family photography. SWPP member. Fully insured. Studio hire available.",
  keywords: ["photographer hackney", "photography studio E8", "wedding photographer london", "portrait photographer hackney", "commercial photography east london", "family photographer hackney", "studio hire hackney", "headshot photographer london", "event photographer london", "hackney photography studio"],
  authors: [{ name: "Hackney Photography Studio" }], creator: "Hackney Photography Studio", publisher: "Hackney Photography Studio",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_GB", url: "https://hackneyphoto.co.uk", siteName: "Hackney Photography Studio", title: "Hackney Photography Studio | Professional Photography in East London", description: "Professional photography in Hackney. Portraits, weddings, commercial and events. SWPP member, fully insured.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Hackney Photography Studio" }] },
  twitter: { card: "summary_large_image", title: "Hackney Photography Studio | Photography in Hackney", description: "Professional portrait, wedding and commercial photography in Hackney, London E8.", images: ["/og-image.jpg"] },
  alternates: { canonical: "https://hackneyphoto.co.uk" },
  other: { "geo.region": "GB-LND", "geo.placename": "Hackney, London", "geo.position": "51.5450;-0.0553", ICBM: "51.5450, -0.0553" },
};

const photographerSchema = {
  "@context": "https://schema.org", "@type": "ProfessionalService", "@id": "https://hackneyphoto.co.uk/#organization",
  name: "Hackney Photography Studio", description: "Professional photography studio in Hackney offering portrait, wedding, commercial, event and family photography. SWPP member. Studio hire available.",
  url: "https://hackneyphoto.co.uk", telephone: "+442079460134", email: "hello@hackneyphoto.co.uk", priceRange: "$$", currenciesAccepted: "GBP", paymentAccepted: "Bank Transfer, Credit Card, Debit Card",
  areaServed: [{ "@type": "City", name: "London" }, { "@type": "AdministrativeArea", name: "Hackney" }],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Photography Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Portrait Photography", description: "Professional headshots, personal branding and creative portraiture." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Photography", description: "Documentary and editorial wedding photography across London and the UK." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial & Product", description: "Product photography, brand campaigns and commercial content creation." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Events & Corporate", description: "Corporate events, conferences, awards ceremonies and private parties." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Family Photography", description: "Natural, relaxed family portraits in-studio or on location." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Studio Hire", description: "Professional studio space available for hire with lighting and backdrop options." } },
  ] },
  address: { "@type": "PostalAddress", streetAddress: "Unit 4, 28 Dalston Lane", addressLocality: "Hackney", addressRegion: "London", postalCode: "E8 3AZ", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.545, longitude: -0.0553 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "16:00" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://hackneyphoto.co.uk/#localbusiness",
  name: "Hackney Photography Studio", image: "https://hackneyphoto.co.uk/logo.png", telephone: "+442079460134", email: "hello@hackneyphoto.co.uk", url: "https://hackneyphoto.co.uk",
  address: { "@type": "PostalAddress", streetAddress: "Unit 4, 28 Dalston Lane", addressLocality: "Hackney", addressRegion: "London", postalCode: "E8 3AZ", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.545, longitude: -0.0553 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "16:00" },
  ],
  priceRange: "$$",
};

const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://hackneyphoto.co.uk/#website", url: "https://hackneyphoto.co.uk", name: "Hackney Photography Studio", description: "Professional photography studio in Hackney, London E8", publisher: { "@id": "https://hackneyphoto.co.uk/#organization" } };

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="photographer-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(photographerSchema) }} />
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
