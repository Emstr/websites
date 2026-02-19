import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Savile Row Bespoke | Master Tailors in Mayfair, W1", template: "%s | Savile Row Bespoke" },
  description: "Bespoke tailoring on Savile Row since 1985. Master tailors crafting bespoke suits, made-to-measure garments, shirts and wedding suits from our Mayfair atelier.",
  keywords: ["bespoke suits Savile Row", "Savile Row tailor", "bespoke tailoring London", "made to measure suits", "wedding suits Mayfair", "shirt making London", "alterations Savile Row", "master tailor", "corporate tailoring", "bespoke menswear"],
  authors: [{ name: "Savile Row Bespoke" }], creator: "Savile Row Bespoke", publisher: "Savile Row Bespoke",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_GB", url: "https://savilerowbespoke.co.uk", siteName: "Savile Row Bespoke", title: "Savile Row Bespoke | Master Tailors Since 1985", description: "Bespoke and made-to-measure tailoring from our Savile Row atelier. Master tailors crafting exceptional suits, shirts and formalwear.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Savile Row Bespoke - Master Tailors" }] },
  twitter: { card: "summary_large_image", title: "Savile Row Bespoke | Bespoke Tailoring", description: "Master tailors on Savile Row since 1985. Bespoke suits, made-to-measure and shirt making.", images: ["/og-image.jpg"] },
  alternates: { canonical: "https://savilerowbespoke.co.uk" },
  other: { "geo.region": "GB-LND", "geo.placename": "Mayfair", "geo.position": "51.5120;-0.1400", ICBM: "51.5120, -0.1400" },
};

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "ClothingStore", "@id": "https://savilerowbespoke.co.uk/#business",
  name: "Savile Row Bespoke", description: "Master tailors on Savile Row since 1985. Bespoke suits, made-to-measure garments, shirt making, alterations, wedding suits and corporate tailoring.",
  url: "https://savilerowbespoke.co.uk", telephone: "+442079464789", email: "appointments@savilerowbespoke.co.uk",
  foundingDate: "1985", priceRange: "$$$$", currenciesAccepted: "GBP", paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
  areaServed: [{ "@type": "City", name: "London" }, { "@type": "Country", name: "United Kingdom" }],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Tailoring Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bespoke Suits", description: "Fully bespoke suits crafted from scratch to your exact measurements and specifications." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Made-to-Measure", description: "Made-to-measure garments offering an exceptional fit from a curated range of styles." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shirt Making", description: "Bespoke shirts crafted from the finest fabrics with personalised details." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Alterations & Repairs", description: "Expert alterations and repairs to keep your garments in perfect condition." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Suits", description: "Bespoke wedding suits for grooms and wedding parties." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Tailoring", description: "Corporate tailoring services for businesses and professional wardrobes." } },
  ] },
  address: { "@type": "PostalAddress", streetAddress: "14 Savile Row", addressLocality: "Mayfair", addressRegion: "London", postalCode: "W1S 3PR", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.512, longitude: -0.14 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "10:00", closes: "16:00" },
  ],
  image: "https://savilerowbespoke.co.uk/logo.png",
};

const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://savilerowbespoke.co.uk/#website", url: "https://savilerowbespoke.co.uk", name: "Savile Row Bespoke", description: "Master tailors on Savile Row, London", publisher: { "@id": "https://savilerowbespoke.co.uk/#business" } };

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
