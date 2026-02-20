import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Clapham Wine Room | Wine Bar in Clapham, London", template: "%s | Clapham Wine Room" },
  description: "Intimate wine bar in Clapham, London. 200+ wines, sommelier-curated tastings, cheese & charcuterie boards, private events and wine club membership. Discover, Taste, Enjoy.",
  keywords: ["wine bar Clapham", "wine tasting London", "Clapham wine room", "wine club London", "cheese and charcuterie Clapham", "wine events London", "best wine bar south London", "Clapham High Street wine", "corporate wine tasting", "wine by the glass"],
  authors: [{ name: "Clapham Wine Room" }], creator: "Clapham Wine Room", publisher: "Clapham Wine Room",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_GB", url: "https://claphamwineroom.co.uk", siteName: "Clapham Wine Room", title: "Clapham Wine Room | Discover, Taste, Enjoy", description: "Intimate wine bar in Clapham. 200+ wines, tastings, cheese boards and private events.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Clapham Wine Room" }] },
  twitter: { card: "summary_large_image", title: "Clapham Wine Room | Discover, Taste, Enjoy", description: "Intimate wine bar in Clapham. 200+ wines, tastings, cheese boards and private events.", images: ["/og-image.jpg"] },
  alternates: { canonical: "https://claphamwineroom.co.uk" },
  other: { "geo.region": "GB-LND", "geo.placename": "Clapham, London", "geo.position": "51.4621;-0.1385", ICBM: "51.4621, -0.1385" },
};

const winerySchema = {
  "@context": "https://schema.org", "@type": "Winery", "@id": "https://claphamwineroom.co.uk/#organization",
  name: "Clapham Wine Room", description: "Intimate wine bar in Clapham, London. Sommelier-curated wine selection with over 200 wines, tastings, cheese and charcuterie boards, and private events.",
  url: "https://claphamwineroom.co.uk", telephone: "+442079469930", email: "hello@claphamwineroom.co.uk",
  foundingDate: "2020", priceRange: "$$-$$$", currenciesAccepted: "GBP", paymentAccepted: "Cash, Credit Card, Debit Card",
  areaServed: { "@type": "City", name: "London" },
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Wine Bar Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wine Tastings", description: "Guided wine tasting events led by our resident sommelier." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cheese & Charcuterie Boards", description: "Artisan British and European cheese and charcuterie boards paired with wine." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wine by the Glass", description: "Over 40 wines available by the glass from our Coravin system." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Private Events", description: "Private wine tasting events and venue hire for celebrations and corporate groups." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wine Club Membership", description: "Monthly curated wine selections delivered to your door with exclusive member benefits." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Wine Experiences", description: "Bespoke wine tasting experiences for corporate teams and client entertainment." } },
  ]},
  address: { "@type": "PostalAddress", streetAddress: "78 Clapham High Street", addressLocality: "Clapham", addressRegion: "London", postalCode: "SW4 7UL", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.4621, longitude: -0.1385 },
};

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://claphamwineroom.co.uk/#localbusiness",
  name: "Clapham Wine Room", image: "https://claphamwineroom.co.uk/logo.png", telephone: "+442079469930", email: "hello@claphamwineroom.co.uk", url: "https://claphamwineroom.co.uk",
  address: { "@type": "PostalAddress", streetAddress: "78 Clapham High Street", addressLocality: "Clapham", addressRegion: "London", postalCode: "SW4 7UL", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.4621, longitude: -0.1385 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday"], opens: "16:00", closes: "23:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "16:00", closes: "00:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "12:00", closes: "00:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "12:00", closes: "22:00" },
  ],
  priceRange: "$$-$$$",
};

const websiteSchema = {
  "@context": "https://schema.org", "@type": "WebSite", "@id": "https://claphamwineroom.co.uk/#website",
  url: "https://claphamwineroom.co.uk", name: "Clapham Wine Room", description: "Intimate wine bar in Clapham, London",
  publisher: { "@id": "https://claphamwineroom.co.uk/#organization" },
};

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="winery-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(winerySchema) }} />
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
