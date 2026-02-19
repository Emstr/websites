import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Marylebone Acupuncture Clinic | Traditional Acupuncture in London W1", template: "%s | Marylebone Acupuncture Clinic" },
  description: "Expert acupuncture clinic in Marylebone, London W1. BAcC registered practitioner with BSc in Acupuncture and 15+ years experience. Traditional acupuncture, fertility support, pain management, stress relief and cosmetic acupuncture.",
  keywords: ["acupuncture Marylebone", "acupuncture London W1", "fertility acupuncture London", "pain management acupuncture", "BAcC acupuncture", "traditional Chinese acupuncture", "cosmetic acupuncture London", "cupping therapy Marylebone", "stress acupuncture", "acupuncture clinic London"],
  authors: [{ name: "Marylebone Acupuncture Clinic" }],
  creator: "Marylebone Acupuncture Clinic",
  publisher: "Marylebone Acupuncture Clinic",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_GB", url: "https://maryleboneacupuncture.co.uk", siteName: "Marylebone Acupuncture Clinic", title: "Marylebone Acupuncture Clinic | Expert Acupuncture in London W1", description: "BAcC registered acupuncturist with 15+ years experience offering traditional acupuncture, fertility support, pain management and more in Marylebone.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Marylebone Acupuncture Clinic" }] },
  twitter: { card: "summary_large_image", title: "Marylebone Acupuncture Clinic | Acupuncture in London W1", description: "BAcC registered clinic offering traditional acupuncture, fertility support and pain management in Marylebone.", images: ["/og-image.jpg"] },
  alternates: { canonical: "https://maryleboneacupuncture.co.uk" },
  other: { "geo.region": "GB-LND", "geo.placename": "Marylebone, London", "geo.position": "51.5206;-0.1512", ICBM: "51.5206, -0.1512" },
};

const medicalBusinessSchema = {
  "@context": "https://schema.org", "@type": "MedicalBusiness", "@id": "https://maryleboneacupuncture.co.uk/#organization",
  name: "Marylebone Acupuncture Clinic", description: "Expert acupuncture clinic offering traditional acupuncture, fertility support, pain management, stress relief, cosmetic acupuncture and cupping therapy. BAcC registered with 15+ years experience.",
  url: "https://maryleboneacupuncture.co.uk", telephone: "+442079465890", email: "clinic@maryleboneacupuncture.co.uk",
  foundingDate: "2010", priceRange: "$$", currenciesAccepted: "GBP", paymentAccepted: "Cash, Credit Card, Bank Transfer",
  areaServed: [{ "@type": "City", name: "London" }],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Acupuncture Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Traditional Acupuncture", description: "Classical five-element and TCM acupuncture for holistic wellbeing." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fertility Acupuncture", description: "Specialist acupuncture to support natural conception and IVF treatment." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pain Management", description: "Acupuncture for chronic pain, back pain, migraines and musculoskeletal conditions." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stress & Anxiety Treatment", description: "Calming acupuncture treatments for stress, anxiety and insomnia." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cosmetic Acupuncture", description: "Natural facial rejuvenation acupuncture for a radiant, youthful complexion." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cupping Therapy", description: "Traditional cupping to relieve muscle tension, improve circulation and support detoxification." } },
  ] },
  location: { "@type": "Place", name: "Marylebone Acupuncture Clinic", address: { "@type": "PostalAddress", streetAddress: "27 Devonshire Place", addressLocality: "Marylebone", addressRegion: "London", postalCode: "W1G 6JD", addressCountry: "GB" }, geo: { "@type": "GeoCoordinates", latitude: 51.5206, longitude: -0.1512 }, telephone: "+442079465890" },
};

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://maryleboneacupuncture.co.uk/#localbusiness",
  name: "Marylebone Acupuncture Clinic", image: "https://maryleboneacupuncture.co.uk/logo.png", telephone: "+442079465890",
  email: "clinic@maryleboneacupuncture.co.uk", url: "https://maryleboneacupuncture.co.uk",
  address: { "@type": "PostalAddress", streetAddress: "27 Devonshire Place", addressLocality: "Marylebone", addressRegion: "London", postalCode: "W1G 6JD", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.5206, longitude: -0.1512 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "15:00" },
  ],
  priceRange: "$$",
};

const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://maryleboneacupuncture.co.uk/#website", url: "https://maryleboneacupuncture.co.uk", name: "Marylebone Acupuncture Clinic", description: "Expert acupuncture clinic in Marylebone, London", publisher: { "@id": "https://maryleboneacupuncture.co.uk/#organization" } };

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="medical-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }} />
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
