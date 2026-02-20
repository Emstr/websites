import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Bermondsey Motors | MOT, Servicing & Repairs in Bermondsey, SE1", template: "%s | Bermondsey Motors" },
  description: "Trusted car garage in Bermondsey, South East London. MOT testing, full servicing, brake repairs, diagnostics, tyre fitting and air conditioning. All makes and models. Est. 2010.",
  keywords: ["car mechanic Bermondsey", "MOT Bermondsey", "car service SE1", "brake repair South London", "tyre fitting Bermondsey", "car diagnostics London", "garage Bermondsey", "car air conditioning London", "MOT test centre SE1", "vehicle repair Bermondsey", "mechanic near me South London", "Bermondsey Motors"],
  authors: [{ name: "Bermondsey Motors" }], creator: "Bermondsey Motors", publisher: "Bermondsey Motors",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_GB", url: "https://bermondseymotors.co.uk", siteName: "Bermondsey Motors", title: "Bermondsey Motors | Honest Work, Fair Prices", description: "Trusted car garage in Bermondsey. MOT testing, servicing, brakes, diagnostics, tyres and air con. All makes and models.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Bermondsey Motors - Honest Work, Fair Prices" }] },
  twitter: { card: "summary_large_image", title: "Bermondsey Motors | Car Garage in Bermondsey", description: "MOT testing, servicing and repairs in Bermondsey, SE1. Honest work, fair prices.", images: ["/og-image.jpg"] },
  alternates: { canonical: "https://bermondseymotors.co.uk" },
  other: { "geo.region": "GB-LND", "geo.placename": "Bermondsey, London", "geo.position": "51.4975;-0.0778", ICBM: "51.4975, -0.0778" },
};

const autoRepairSchema = { "@context": "https://schema.org", "@type": "AutoRepair", "@id": "https://bermondseymotors.co.uk/#organization", name: "Bermondsey Motors", description: "Trusted car garage providing MOT testing, servicing, brake repairs, diagnostics, tyre fitting and air conditioning services for all makes and models in Bermondsey, SE1.", url: "https://bermondseymotors.co.uk", telephone: "+442079468810", email: "bookings@bermondseymotors.co.uk", foundingDate: "2010", priceRange: "$$", currenciesAccepted: "GBP", paymentAccepted: "Cash, Credit Card, Bank Transfer",
  areaServed: [{ "@type": "City", name: "London" }, { "@type": "AdministrativeArea", name: "South East London" }],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Garage Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "MOT Testing", description: "DVSA-approved MOT test centre for Class 4 vehicles." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Servicing", description: "Interim and full vehicle servicing to manufacturer specifications." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brake Repairs", description: "Brake pad, disc and caliper replacement and repairs." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diagnostics", description: "Engine diagnostics using the latest scan tools for all makes." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tyre Fitting", description: "New tyre supply and fitting, wheel balancing and alignment." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Air Conditioning", description: "Car air conditioning re-gas, servicing and repair." } },
  ]},
  location: { "@type": "Place", name: "Bermondsey Motors", address: { "@type": "PostalAddress", streetAddress: "Unit 7, 38 Tanner Street", addressLocality: "Bermondsey", addressRegion: "London", postalCode: "SE1 3LD", addressCountry: "GB" }, geo: { "@type": "GeoCoordinates", latitude: 51.4975, longitude: -0.0778 }, telephone: "+442079468810" },
};

const localBusinessSchema = { "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://bermondseymotors.co.uk/#localbusiness", name: "Bermondsey Motors", image: "https://bermondseymotors.co.uk/logo.png", telephone: "+442079468810", email: "bookings@bermondseymotors.co.uk", url: "https://bermondseymotors.co.uk",
  address: { "@type": "PostalAddress", streetAddress: "Unit 7, 38 Tanner Street", addressLocality: "Bermondsey", addressRegion: "London", postalCode: "SE1 3LD", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.4975, longitude: -0.0778 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "13:00" },
  ], priceRange: "$$" };

const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://bermondseymotors.co.uk/#website", url: "https://bermondseymotors.co.uk", name: "Bermondsey Motors", description: "Trusted car garage in Bermondsey, South East London", publisher: { "@id": "https://bermondseymotors.co.uk/#organization" } };

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (<><Script id="auto-repair-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(autoRepairSchema) }} /><Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} /><Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} /><Header /><main>{children}</main><Footer /></>);
}
