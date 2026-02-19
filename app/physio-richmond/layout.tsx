import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Richmond Physiotherapy Clinic | Expert Physio in Richmond, TW9", template: "%s | Richmond Physiotherapy Clinic" },
  description: "Expert physiotherapy clinic in Richmond, TW9. Sports injuries, back and neck pain, post-surgery rehabilitation, acupuncture, massage therapy, and women's health physio. HCPC registered. Self-referral welcome.",
  keywords: ["physiotherapy Richmond", "physio Richmond", "sports injury Richmond", "back pain treatment Richmond", "physiotherapist TW9", "massage therapy Richmond", "acupuncture Richmond", "women's health physio Richmond", "post-surgery rehab Richmond", "HCPC registered physiotherapist"],
  authors: [{ name: "Richmond Physiotherapy Clinic" }], creator: "Richmond Physiotherapy Clinic", publisher: "Richmond Physiotherapy Clinic",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_GB", url: "https://richmondphysio.co.uk", siteName: "Richmond Physiotherapy Clinic", title: "Richmond Physiotherapy Clinic | Expert Physio in TW9", description: "HCPC registered physiotherapy clinic in Richmond. Sports injuries, back pain, rehabilitation, acupuncture, and massage therapy. Self-referral welcome.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Richmond Physiotherapy Clinic" }] },
  twitter: { card: "summary_large_image", title: "Richmond Physiotherapy Clinic | Physio in Richmond, TW9", description: "HCPC registered physiotherapists in Richmond. Self-referral welcome. Evening appointments available.", images: ["/og-image.jpg"] },
  alternates: { canonical: "https://richmondphysio.co.uk" },
  other: { "geo.region": "GB-LND", "geo.placename": "Richmond, London", "geo.position": "51.4613;-0.3037", ICBM: "51.4613, -0.3037" },
};

const physioSchema = {
  "@context": "https://schema.org", "@type": "PhysicalTherapy", "@id": "https://richmondphysio.co.uk/#organization",
  name: "Richmond Physiotherapy Clinic", description: "HCPC registered physiotherapy clinic in Richmond, TW9. Sports injury treatment, back and neck pain, post-surgery rehabilitation, acupuncture, massage therapy, and women's health physiotherapy. Self-referral welcome.",
  url: "https://richmondphysio.co.uk", telephone: "+442079465678", email: "info@richmondphysio.co.uk",
  priceRange: "$$", currenciesAccepted: "GBP", paymentAccepted: "Cash, Bank Transfer, Card",
  areaServed: [{ "@type": "City", name: "London" }, { "@type": "AdministrativeArea", name: "Richmond upon Thames" }],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Physiotherapy Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sports Injury Treatment", description: "Expert diagnosis and rehabilitation for all sports injuries." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Back & Neck Pain", description: "Assessment and treatment for back pain, neck pain, and spinal conditions." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Post-Surgery Rehabilitation", description: "Structured rehabilitation programmes following surgery." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Acupuncture", description: "Western medical acupuncture for pain relief and recovery." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Massage Therapy", description: "Sports massage and deep tissue therapy." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Women's Health Physiotherapy", description: "Specialist pelvic health and pre/postnatal physiotherapy." } },
  ]},
  location: { "@type": "Place", name: "Richmond Physiotherapy Clinic", address: { "@type": "PostalAddress", streetAddress: "14 Hill Street", addressLocality: "Richmond", addressRegion: "London", postalCode: "TW9 1TN", addressCountry: "GB" }, geo: { "@type": "GeoCoordinates", latitude: 51.4613, longitude: -0.3037 } },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday"], opens: "07:30", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday"], opens: "07:30", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:00", closes: "13:00" },
  ],
};

const medicalBusinessSchema = {
  "@context": "https://schema.org", "@type": "MedicalBusiness", "@id": "https://richmondphysio.co.uk/#medical-business",
  name: "Richmond Physiotherapy Clinic", url: "https://richmondphysio.co.uk", telephone: "+442079465678",
  medicalSpecialty: "Musculoskeletal", isAcceptingNewPatients: true,
};

const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://richmondphysio.co.uk/#website", url: "https://richmondphysio.co.uk", name: "Richmond Physiotherapy Clinic", description: "Expert physiotherapy clinic in Richmond, South West London", publisher: { "@id": "https://richmondphysio.co.uk/#organization" } };

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="physio-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(physioSchema) }} />
      <Script id="medical-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header /><main>{children}</main><Footer />
    </>
  );
}
