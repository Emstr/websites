import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Kensington Chiropractic Centre | Chiropractor in Kensington, W8", template: "%s | Kensington Chiropractic Centre" },
  description: "GCC registered chiropractors in Kensington, W8. Evidence-based chiropractic care including spinal adjustments, sports chiropractic, posture correction and headache relief. BCA member.",
  keywords: ["chiropractor Kensington", "chiropractic W8", "back pain Kensington", "spinal adjustment London", "sports chiropractor", "posture correction", "headache relief chiropractic", "pregnancy chiropractic", "GCC registered chiropractor", "BCA member"],
  authors: [{ name: "Kensington Chiropractic Centre" }], creator: "Kensington Chiropractic Centre", publisher: "Kensington Chiropractic Centre",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_GB", url: "https://kensingtonchiro.co.uk", siteName: "Kensington Chiropractic Centre", title: "Kensington Chiropractic Centre | Expert Chiropractic Care", description: "GCC registered, evidence-based chiropractic care in Kensington. Spinal adjustments, sports chiropractic, posture correction and more.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Kensington Chiropractic Centre" }] },
  twitter: { card: "summary_large_image", title: "Kensington Chiropractic Centre | Chiropractor W8", description: "GCC registered chiropractors in Kensington. Evidence-based care for back pain, neck pain, headaches and more.", images: ["/og-image.jpg"] },
  alternates: { canonical: "https://kensingtonchiro.co.uk" },
  other: { "geo.region": "GB-LND", "geo.placename": "Kensington", "geo.position": "51.5000;-0.1920", ICBM: "51.5000, -0.1920" },
};

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "MedicalBusiness", "@id": "https://kensingtonchiro.co.uk/#business",
  name: "Kensington Chiropractic Centre", description: "GCC registered chiropractic clinic in Kensington offering evidence-based care including spinal adjustments, sports chiropractic, posture correction, headache relief and pregnancy chiropractic.",
  url: "https://kensingtonchiro.co.uk", telephone: "+442079465890", email: "info@kensingtonchiro.co.uk",
  priceRange: "$$$", currenciesAccepted: "GBP", paymentAccepted: "Cash, Credit Card, Debit Card",
  areaServed: [{ "@type": "City", name: "London" }, { "@type": "AdministrativeArea", name: "Kensington" }],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Chiropractic Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chiropractic Adjustments", description: "Precise spinal adjustments to restore proper alignment and relieve pain." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Spinal Decompression", description: "Non-surgical spinal decompression therapy for disc-related conditions." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sports Chiropractic", description: "Specialist chiropractic care for athletes and active individuals." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Posture Correction", description: "Comprehensive posture assessment and correction programmes." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Headache & Migraine Relief", description: "Chiropractic treatment for tension headaches and cervicogenic migraines." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pregnancy Chiropractic", description: "Gentle, safe chiropractic care during pregnancy using the Webster Technique." } },
  ] },
  address: { "@type": "PostalAddress", streetAddress: "27 Kensington Church Street", addressLocality: "Kensington", addressRegion: "London", postalCode: "W8 4LL", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.5, longitude: -0.192 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "14:00" },
  ],
  image: "https://kensingtonchiro.co.uk/logo.png",
};

const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://kensingtonchiro.co.uk/#website", url: "https://kensingtonchiro.co.uk", name: "Kensington Chiropractic Centre", description: "GCC registered chiropractic clinic in Kensington, London", publisher: { "@id": "https://kensingtonchiro.co.uk/#business" } };

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (<><Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} /><Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} /><Header /><main>{children}</main><Footer /></>);
}
