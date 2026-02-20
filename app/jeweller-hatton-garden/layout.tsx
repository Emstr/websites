import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Hatton Garden Fine Jewellers | Bespoke Jewellery in London", template: "%s | Hatton Garden Fine Jewellers" },
  description: "Bespoke engagement rings, wedding bands, diamond sourcing and jewellery repair in Hatton Garden, London. 3rd generation family business, GIA-certified gemologists. Crafted with love, set in gold.",
  keywords: ["bespoke engagement rings", "Hatton Garden jeweller", "wedding bands London", "diamond sourcing", "jewellery repair London", "bespoke jewellery", "GIA certified", "Hatton Garden rings", "remodelling jewellery", "jewellery valuations London"],
  authors: [{ name: "Hatton Garden Fine Jewellers" }], creator: "Hatton Garden Fine Jewellers", publisher: "Hatton Garden Fine Jewellers",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_GB", url: "https://hgfinejewellers.co.uk", siteName: "Hatton Garden Fine Jewellers", title: "Hatton Garden Fine Jewellers | Bespoke Jewellery", description: "Bespoke engagement rings, wedding bands and fine jewellery from Hatton Garden. 3rd generation family business.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Hatton Garden Fine Jewellers" }] },
  twitter: { card: "summary_large_image", title: "Hatton Garden Fine Jewellers | Crafted With Love, Set in Gold", description: "Bespoke engagement rings and fine jewellery from Hatton Garden, London.", images: ["/og-image.jpg"] },
  alternates: { canonical: "https://hgfinejewellers.co.uk" },
  other: { "geo.region": "GB-LND", "geo.placename": "Hatton Garden, London", "geo.position": "51.5207;-0.1080", ICBM: "51.5207, -0.1080" },
};

const jewelleryStoreSchema = {
  "@context": "https://schema.org", "@type": "JewelryStore", "@id": "https://hgfinejewellers.co.uk/#organization",
  name: "Hatton Garden Fine Jewellers", description: "3rd generation family-run bespoke jewellers in Hatton Garden, London. GIA-certified gemologists crafting engagement rings, wedding bands and fine jewellery since 2005.",
  url: "https://hgfinejewellers.co.uk", telephone: "+442079467750", email: "enquiries@hgfinejewellers.co.uk",
  foundingDate: "2005", priceRange: "$$$", currenciesAccepted: "GBP", paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
  areaServed: [{ "@type": "City", name: "London" }, { "@type": "Country", name: "United Kingdom" }],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Jewellery Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bespoke Engagement Rings", description: "Custom-designed engagement rings crafted to your vision with GIA-certified diamonds." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Bands", description: "Handcrafted wedding bands in gold, platinum and palladium." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diamond Sourcing", description: "Ethically sourced diamonds hand-selected by our GIA-certified gemologists." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Jewellery Repair", description: "Expert repair and restoration of fine jewellery and watches." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remodelling & Redesign", description: "Transform inherited or outdated jewellery into contemporary pieces." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Valuations", description: "Professional jewellery valuations for insurance, probate and resale." } },
  ]},
  address: { "@type": "PostalAddress", streetAddress: "88 Hatton Garden", addressLocality: "Holborn", addressRegion: "London", postalCode: "EC1N 8PN", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.5207, longitude: -0.1080 },
};

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://hgfinejewellers.co.uk/#localbusiness",
  name: "Hatton Garden Fine Jewellers", image: "https://hgfinejewellers.co.uk/logo.png", telephone: "+442079467750", email: "enquiries@hgfinejewellers.co.uk", url: "https://hgfinejewellers.co.uk",
  address: { "@type": "PostalAddress", streetAddress: "88 Hatton Garden", addressLocality: "Holborn", addressRegion: "London", postalCode: "EC1N 8PN", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.5207, longitude: -0.1080 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:30", closes: "17:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "16:00" },
  ],
  priceRange: "$$$",
};

const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://hgfinejewellers.co.uk/#website", url: "https://hgfinejewellers.co.uk", name: "Hatton Garden Fine Jewellers", description: "Bespoke jewellery in Hatton Garden, London", publisher: { "@id": "https://hgfinejewellers.co.uk/#organization" } };

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="jewellery-store-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jewelleryStoreSchema) }} />
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header /><main>{children}</main><Footer />
    </>
  );
}
