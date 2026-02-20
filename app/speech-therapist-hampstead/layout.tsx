import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const heading = Playfair_Display({ subsets: ["latin"], variable: "--font-heading", display: "swap", weight: ["400", "500", "600", "700"] });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap", weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: { default: "Hampstead Speech Therapy | Finding Your Voice", template: "%s | Hampstead Speech Therapy" },
  description: "Expert speech and language therapy in Hampstead, London. HCPC registered therapists helping children and adults with communication, stammering, voice and swallowing difficulties since 2014.",
  keywords: ["speech therapy Hampstead", "speech therapist London", "children speech therapy", "adult speech therapy", "stammering support", "voice therapy", "swallowing assessment", "HCPC registered", "RCSLT member", "speech and language therapist NW3"],
  authors: [{ name: "Hampstead Speech Therapy" }],
  openGraph: { title: "Hampstead Speech Therapy | Finding Your Voice", description: "Expert speech and language therapy for children and adults from our Hampstead clinic. HCPC registered, RCSLT members. Book a consultation today.", url: "https://hampsteadspeech.co.uk", siteName: "Hampstead Speech Therapy", locale: "en_GB", type: "website" },
  twitter: { card: "summary_large_image", title: "Hampstead Speech Therapy | Finding Your Voice", description: "Expert speech and language therapy for children and adults from our Hampstead clinic." },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://hampsteadspeech.co.uk" },
};

const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Hampstead Speech Therapy",
  description: "Expert speech and language therapy for children and adults from our Hampstead clinic. HCPC registered therapists and RCSLT members.",
  url: "https://hampsteadspeech.co.uk",
  telephone: "020 7946 4450",
  email: "clinic@hampsteadspeech.co.uk",
  address: { "@type": "PostalAddress", streetAddress: "8 Flask Walk", addressLocality: "Hampstead", addressRegion: "London", postalCode: "NW3 1HE", addressCountry: "GB" },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "18:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" },
  ],
  priceRange: "££",
  foundingDate: "2014",
  numberOfEmployees: "6",
  areaServed: { "@type": "City", name: "London" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Hampstead Speech Therapy",
  image: "https://hampsteadspeech.co.uk/og-image.jpg",
  telephone: "020 7946 4450",
  email: "clinic@hampsteadspeech.co.uk",
  address: { "@type": "PostalAddress", streetAddress: "8 Flask Walk", addressLocality: "Hampstead", addressRegion: "London", postalCode: "NW3 1HE", addressCountry: "GB" },
  url: "https://hampsteadspeech.co.uk",
  priceRange: "££",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Hampstead Speech Therapy",
  url: "https://hampsteadspeech.co.uk",
  description: "Expert speech and language therapy for children and adults in Hampstead, London.",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${heading.variable} ${body.variable}`}>
      <Script id="medical-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }} />
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
