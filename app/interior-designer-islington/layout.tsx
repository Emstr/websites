import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Islington Interiors | Interior Design Studio in Islington, N1", template: "%s | Islington Interiors" },
  description: "Award-winning interior design studio in Islington, North London. Full home design, kitchen and bathroom design, colour consultations, space planning, styling and staging, and commercial interiors. BIID members. Est. 2015.",
  keywords: ["interior designer Islington", "interior design N1", "home design North London", "kitchen design Islington", "bathroom design London", "colour consultation Islington", "space planning London", "property staging Islington", "commercial interiors London", "BIID interior designer", "interior designer near me", "Islington Interiors"],
  authors: [{ name: "Islington Interiors" }], creator: "Islington Interiors", publisher: "Islington Interiors",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_GB", url: "https://islingtoninteriors.co.uk", siteName: "Islington Interiors", title: "Islington Interiors | Spaces That Inspire", description: "Award-winning interior design studio in Islington. Full home design, kitchens, bathrooms, colour consultations, space planning and styling.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Islington Interiors - Spaces That Inspire" }] },
  twitter: { card: "summary_large_image", title: "Islington Interiors | Interior Design Studio", description: "Interior design studio in Islington, N1. Full home design, kitchens, bathrooms, colour consultations and styling.", images: ["/og-image.jpg"] },
  alternates: { canonical: "https://islingtoninteriors.co.uk" },
  other: { "geo.region": "GB-LND", "geo.placename": "Islington, London", "geo.position": "51.5362;-0.1031", ICBM: "51.5362, -0.1031" },
};

const professionalServiceSchema = { "@context": "https://schema.org", "@type": "ProfessionalService", "@id": "https://islingtoninteriors.co.uk/#organization", name: "Islington Interiors", description: "Award-winning interior design studio providing full home design, kitchen and bathroom design, colour consultations, space planning, styling and staging, and commercial interiors in Islington and across London.", url: "https://islingtoninteriors.co.uk", telephone: "+442079466670", email: "studio@islingtoninteriors.co.uk", foundingDate: "2015", priceRange: "$$$", currenciesAccepted: "GBP", paymentAccepted: "Bank Transfer, Credit Card",
  areaServed: [{ "@type": "City", name: "London" }, { "@type": "AdministrativeArea", name: "North London" }],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Design Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Home Design", description: "Complete interior design for entire properties, from concept to completion." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen & Bathroom Design", description: "Bespoke kitchen and bathroom design with project management." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Colour Consultations", description: "Expert colour advice for any room or entire property." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Space Planning", description: "Optimise your layout for flow, function and light." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Styling & Staging", description: "Property styling for sale or rental, and finishing touches for completed projects." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Interiors", description: "Office, retail, hospitality and workspace design." } },
  ]},
  location: { "@type": "Place", name: "Islington Interiors", address: { "@type": "PostalAddress", streetAddress: "67 Upper Street", addressLocality: "Islington", addressRegion: "London", postalCode: "N1 0NY", addressCountry: "GB" }, geo: { "@type": "GeoCoordinates", latitude: 51.5362, longitude: -0.1031 }, telephone: "+442079466670" },
};

const localBusinessSchema = { "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://islingtoninteriors.co.uk/#localbusiness", name: "Islington Interiors", image: "https://islingtoninteriors.co.uk/logo.png", telephone: "+442079466670", email: "studio@islingtoninteriors.co.uk", url: "https://islingtoninteriors.co.uk",
  address: { "@type": "PostalAddress", streetAddress: "67 Upper Street", addressLocality: "Islington", addressRegion: "London", postalCode: "N1 0NY", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.5362, longitude: -0.1031 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "16:00" },
  ], priceRange: "$$$" };

const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://islingtoninteriors.co.uk/#website", url: "https://islingtoninteriors.co.uk", name: "Islington Interiors", description: "Award-winning interior design studio in Islington, North London", publisher: { "@id": "https://islingtoninteriors.co.uk/#organization" } };

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (<><Script id="professional-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} /><Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} /><Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} /><Header /><main>{children}</main><Footer /></>);
}
