import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Notting Hill Bakehouse | Artisan Bakery in Notting Hill, London", template: "%s | Notting Hill Bakehouse" },
  description: "Artisan bakery in Notting Hill, London. Sourdough bread, pastries, celebration cakes, wedding cakes, and baking classes. Baked fresh every morning since 2016.",
  keywords: ["artisan bakery Notting Hill", "sourdough bread London", "celebration cakes", "wedding cakes Notting Hill", "pastries London", "baking classes", "bakery near Notting Hill Gate", "fresh bread Westbourne Grove", "croissants London", "viennoiseries", "wholesale bakery London", "best bakery Notting Hill"],
  authors: [{ name: "Notting Hill Bakehouse" }],
  creator: "Notting Hill Bakehouse",
  publisher: "Notting Hill Bakehouse",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_GB", url: "https://nottinghillbakehouse.co.uk", siteName: "Notting Hill Bakehouse", title: "Notting Hill Bakehouse | Artisan Bakery in Notting Hill", description: "Artisan bakery on Westbourne Grove. Six skilled bakers, over 500 loaves daily, and a decade of dedication to proper bread and pastry.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Notting Hill Bakehouse" }] },
  twitter: { card: "summary_large_image", title: "Notting Hill Bakehouse | Artisan Bakery", description: "Artisan bakery in Notting Hill offering sourdough, pastries, celebration cakes, and baking classes.", images: ["/og-image.jpg"] },
  alternates: { canonical: "https://nottinghillbakehouse.co.uk" },
  other: { "geo.region": "GB-LND", "geo.placename": "Notting Hill, London", "geo.position": "51.5155;-0.1915", ICBM: "51.5155, -0.1915" },
};

const bakerySchema = {
  "@context": "https://schema.org", "@type": "Bakery", "@id": "https://nottinghillbakehouse.co.uk/#organization",
  name: "Notting Hill Bakehouse", description: "Artisan bakery in Notting Hill, London. Sourdough bread, pastries, viennoiseries, celebration cakes, wedding cakes, wholesale supply, and baking classes. Baked fresh every morning.",
  url: "https://nottinghillbakehouse.co.uk", telephone: "+442079462280", email: "hello@nottinghillbakehouse.co.uk",
  foundingDate: "2016", priceRange: "$$", currenciesAccepted: "GBP", paymentAccepted: "Cash, Credit Card, Debit Card, Contactless",
  areaServed: [{ "@type": "City", name: "London" }, { "@type": "AdministrativeArea", name: "Greater London" }],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Bakery Products & Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sourdough Bread", description: "Slow-fermented sourdough loaves made with organic flour and our 10-year-old starter." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pastries & Viennoiseries", description: "Croissants, pain au chocolat, Danish pastries, and seasonal viennoiseries baked fresh daily." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Celebration Cakes", description: "Bespoke celebration cakes for birthdays, anniversaries, and special occasions." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Cakes", description: "Hand-crafted wedding cakes designed and tasted with every couple." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wholesale Supply", description: "Daily bread and pastry supply for restaurants, cafes, and hotels across London." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Baking Classes", description: "Hands-on sourdough and pastry workshops for all skill levels." } },
  ]},
  address: { "@type": "PostalAddress", streetAddress: "62 Westbourne Grove", addressLocality: "Notting Hill", addressRegion: "London", postalCode: "W2 5SH", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.5155, longitude: -0.1915 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "07:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "08:00", closes: "17:00" },
  ],
  sameAs: [],
};

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://nottinghillbakehouse.co.uk/#localbusiness",
  name: "Notting Hill Bakehouse", image: "https://nottinghillbakehouse.co.uk/logo.png",
  telephone: "+442079462280", email: "hello@nottinghillbakehouse.co.uk", url: "https://nottinghillbakehouse.co.uk",
  address: { "@type": "PostalAddress", streetAddress: "62 Westbourne Grove", addressLocality: "Notting Hill", addressRegion: "London", postalCode: "W2 5SH", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.5155, longitude: -0.1915 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "07:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "08:00", closes: "17:00" },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org", "@type": "WebSite", "@id": "https://nottinghillbakehouse.co.uk/#website",
  url: "https://nottinghillbakehouse.co.uk", name: "Notting Hill Bakehouse", description: "Artisan bakery in Notting Hill, London",
  publisher: { "@id": "https://nottinghillbakehouse.co.uk/#organization" },
};

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="bakery-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bakerySchema) }} />
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
