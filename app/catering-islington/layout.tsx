import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Islington Catering Company | Event Catering in Islington, London N1", template: "%s | Islington Catering Company" },
  description: "Award-winning catering service in Islington, London N1. Wedding catering, corporate events, private dining, canapes, buffets and dietary-specific menus. 5-star hygiene rating, sustainable kitchen.",
  keywords: ["catering Islington", "wedding catering London", "corporate catering N1", "private dining Islington", "event catering London", "canapes London", "buffet catering", "sustainable catering", "dietary catering London", "Islington caterer"],
  authors: [{ name: "Islington Catering Company" }],
  creator: "Islington Catering Company",
  publisher: "Islington Catering Company",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_GB", url: "https://islingtoncatering.co.uk", siteName: "Islington Catering Company", title: "Islington Catering Company | Award-Winning Event Catering", description: "5-star hygiene rated catering for weddings, corporate events and private dining in Islington and across London.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Islington Catering Company" }] },
  twitter: { card: "summary_large_image", title: "Islington Catering Company | Event Catering London", description: "Award-winning catering for weddings, corporate events and private dining in London N1.", images: ["/og-image.jpg"] },
  alternates: { canonical: "https://islingtoncatering.co.uk" },
  other: { "geo.region": "GB-LND", "geo.placename": "Islington, London", "geo.position": "51.5362;-0.1033", ICBM: "51.5362, -0.1033" },
};

const foodEstablishmentSchema = {
  "@context": "https://schema.org", "@type": "FoodEstablishment", "@id": "https://islingtoncatering.co.uk/#organization",
  name: "Islington Catering Company", description: "Award-winning catering service offering wedding catering, corporate events, private dining, canapes and buffets. 5-star hygiene rating, sustainable kitchen.",
  url: "https://islingtoncatering.co.uk", telephone: "+442079464789", email: "events@islingtoncatering.co.uk",
  foundingDate: "2015", priceRange: "$$$", currenciesAccepted: "GBP", paymentAccepted: "Bank Transfer, Credit Card",
  areaServed: [{ "@type": "City", name: "London" }, { "@type": "AdministrativeArea", name: "Greater London" }],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Catering Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Catering", description: "Bespoke wedding menus from elegant sit-down dinners to relaxed sharing plates." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Events", description: "Professional catering for conferences, launches, meetings and team events." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Private Dining", description: "Intimate private dining experiences with a personal chef in your own home." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Canapes & Receptions", description: "Exquisite handcrafted canapes and drinks reception catering." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Buffets", description: "Stunning buffet spreads for any occasion, from casual to formal." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dietary-Specific Menus", description: "Expert catering for vegan, gluten-free, halal, kosher and all dietary requirements." } },
  ] },
  location: { "@type": "Place", name: "Islington Catering Company", address: { "@type": "PostalAddress", streetAddress: "54 Upper Street", addressLocality: "Islington", addressRegion: "London", postalCode: "N1 0QH", addressCountry: "GB" }, geo: { "@type": "GeoCoordinates", latitude: 51.5362, longitude: -0.1033 }, telephone: "+442079464789" },
};

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://islingtoncatering.co.uk/#localbusiness",
  name: "Islington Catering Company", image: "https://islingtoncatering.co.uk/logo.png", telephone: "+442079464789",
  email: "events@islingtoncatering.co.uk", url: "https://islingtoncatering.co.uk",
  address: { "@type": "PostalAddress", streetAddress: "54 Upper Street", addressLocality: "Islington", addressRegion: "London", postalCode: "N1 0QH", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.5362, longitude: -0.1033 },
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" }],
  priceRange: "$$$",
};

const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://islingtoncatering.co.uk/#website", url: "https://islingtoncatering.co.uk", name: "Islington Catering Company", description: "Award-winning event catering service in Islington, London", publisher: { "@id": "https://islingtoncatering.co.uk/#organization" } };

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="food-establishment-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(foodEstablishmentSchema) }} />
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
