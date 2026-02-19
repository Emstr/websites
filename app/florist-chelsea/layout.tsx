import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Chelsea Blooms | Luxury Florist in Chelsea, London SW3", template: "%s | Chelsea Blooms" },
  description: "Luxury florist in Chelsea, London. Wedding flowers, funeral tributes, luxury bouquets, corporate flowers and event styling. Same day delivery. British Florist Association member.",
  keywords: ["florist chelsea", "flower delivery chelsea", "wedding flowers london", "funeral flowers chelsea", "luxury bouquets SW3", "corporate flowers london", "event florist chelsea", "same day flower delivery", "chelsea blooms", "sustainable florist london", "flower subscription chelsea"],
  authors: [{ name: "Chelsea Blooms" }],
  creator: "Chelsea Blooms",
  publisher: "Chelsea Blooms",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_GB", url: "https://chelseablooms.co.uk", siteName: "Chelsea Blooms", title: "Chelsea Blooms | Luxury Florist in Chelsea", description: "Luxury flowers for every occasion. Wedding flowers, bouquets, corporate arrangements and same day delivery in Chelsea and across London.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Chelsea Blooms - Luxury Florist in Chelsea" }] },
  twitter: { card: "summary_large_image", title: "Chelsea Blooms | Luxury Florist in Chelsea", description: "Luxury florist in Chelsea, London. Same day delivery, wedding flowers and bespoke arrangements.", images: ["/og-image.jpg"] },
  alternates: { canonical: "https://chelseablooms.co.uk" },
  other: { "geo.region": "GB-LND", "geo.placename": "Chelsea, London", "geo.position": "51.4875;-0.1687", ICBM: "51.4875, -0.1687" },
};

const floristSchema = {
  "@context": "https://schema.org", "@type": "Florist", "@id": "https://chelseablooms.co.uk/#organization",
  name: "Chelsea Blooms", description: "Luxury florist in Chelsea offering bespoke bouquets, wedding flowers, funeral tributes, corporate arrangements and event styling. Same day delivery across London.",
  url: "https://chelseablooms.co.uk", telephone: "+442079469012", email: "orders@chelseablooms.co.uk", priceRange: "$$$", currenciesAccepted: "GBP", paymentAccepted: "Cash, Credit Card, Debit Card, Apple Pay, Bank Transfer",
  areaServed: [{ "@type": "City", name: "London" }, { "@type": "AdministrativeArea", name: "Chelsea" }],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Florist Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Flowers", description: "Bespoke bridal bouquets, buttonholes, table centrepieces and venue styling." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Funeral Tributes", description: "Respectful and beautiful funeral flowers, wreaths and tribute arrangements." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luxury Bouquets", description: "Hand-tied luxury bouquets for birthdays, anniversaries and special occasions." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Flowers", description: "Weekly office arrangements, reception displays and event floristry for businesses." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event Styling", description: "Complete floral styling for launches, parties, weddings and corporate events." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flower Subscriptions", description: "Regular fresh flower deliveries to your home or office." } },
  ] },
  address: { "@type": "PostalAddress", streetAddress: "156 King's Road", addressLocality: "Chelsea", addressRegion: "London", postalCode: "SW3 4UT", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.4875, longitude: -0.1687 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "16:00" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://chelseablooms.co.uk/#localbusiness",
  name: "Chelsea Blooms", image: "https://chelseablooms.co.uk/logo.png", telephone: "+442079469012", email: "orders@chelseablooms.co.uk", url: "https://chelseablooms.co.uk",
  address: { "@type": "PostalAddress", streetAddress: "156 King's Road", addressLocality: "Chelsea", addressRegion: "London", postalCode: "SW3 4UT", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.4875, longitude: -0.1687 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "16:00" },
  ],
  priceRange: "$$$",
};

const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://chelseablooms.co.uk/#website", url: "https://chelseablooms.co.uk", name: "Chelsea Blooms", description: "Luxury florist in Chelsea, London", publisher: { "@id": "https://chelseablooms.co.uk/#organization" } };

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="florist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(floristSchema) }} />
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
