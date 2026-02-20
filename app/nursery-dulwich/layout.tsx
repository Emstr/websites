import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Dulwich Day Nursery | Ofsted Outstanding Childcare in Dulwich, SE21",
    template: "%s | Dulwich Day Nursery",
  },
  description:
    "Ofsted Outstanding day nursery in Dulwich, South London. Baby room, toddler room, pre-school, after-school club, holiday club and forest school sessions. Ages 3 months to 11 years.",
  keywords: [
    "nursery Dulwich",
    "day nursery SE21",
    "Ofsted Outstanding nursery",
    "childcare Dulwich",
    "pre-school Dulwich",
    "baby room South London",
    "toddler group Dulwich",
    "after school club Dulwich",
    "holiday club SE21",
    "forest school London",
    "nursery near me South London",
    "Dulwich childcare",
  ],
  authors: [{ name: "Dulwich Day Nursery" }],
  creator: "Dulwich Day Nursery",
  publisher: "Dulwich Day Nursery",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://dulwichdaynursery.co.uk",
    siteName: "Dulwich Day Nursery",
    title: "Dulwich Day Nursery | Where Little Ones Flourish",
    description:
      "Ofsted Outstanding nursery in Dulwich Village. Nurturing childcare for ages 3 months to 11 years including forest school sessions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dulwich Day Nursery - Where Little Ones Flourish",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulwich Day Nursery | Ofsted Outstanding Childcare",
    description:
      "Ofsted Outstanding day nursery in Dulwich, South London. Nurturing care for ages 3 months to 11 years.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://dulwichdaynursery.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Dulwich, London",
    "geo.position": "51.4454;-0.0834",
    ICBM: "51.4454, -0.0834",
  },
};

const childCareSchema = {
  "@context": "https://schema.org",
  "@type": "ChildCare",
  "@id": "https://dulwichdaynursery.co.uk/#organization",
  name: "Dulwich Day Nursery",
  description:
    "Ofsted Outstanding day nursery providing nurturing childcare for children aged 3 months to 11 years in Dulwich, South London.",
  url: "https://dulwichdaynursery.co.uk",
  telephone: "+442079462290",
  email: "admissions@dulwichdaynursery.co.uk",
  foundingDate: "2011",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit, Childcare Vouchers",
  areaServed: [
    { "@type": "City", name: "London" },
    { "@type": "AdministrativeArea", name: "South London" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Childcare Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Baby Room", description: "Nurturing care for babies aged 3 to 12 months in a calm, stimulating environment." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Toddler Room", description: "Active learning for children aged 1 to 2 years with age-appropriate activities." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pre-School", description: "School-readiness programme for children aged 2 to 4 years." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "After-School Club", description: "After-school care with homework support and creative activities." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Holiday Club", description: "Fun-filled holiday programmes during school breaks." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Forest School Sessions", description: "Outdoor learning sessions in local green spaces." } },
    ],
  },
  location: {
    "@type": "Place",
    name: "Dulwich Day Nursery",
    address: {
      "@type": "PostalAddress",
      streetAddress: "14 Village Way",
      addressLocality: "Dulwich",
      addressRegion: "London",
      postalCode: "SE21 7AW",
      addressCountry: "GB",
    },
    geo: { "@type": "GeoCoordinates", latitude: 51.4454, longitude: -0.0834 },
    telephone: "+442079462290",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://dulwichdaynursery.co.uk/#localbusiness",
  name: "Dulwich Day Nursery",
  image: "https://dulwichdaynursery.co.uk/logo.png",
  telephone: "+442079462290",
  email: "admissions@dulwichdaynursery.co.uk",
  url: "https://dulwichdaynursery.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "14 Village Way",
    addressLocality: "Dulwich",
    addressRegion: "London",
    postalCode: "SE21 7AW",
    addressCountry: "GB",
  },
  geo: { "@type": "GeoCoordinates", latitude: 51.4454, longitude: -0.0834 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "18:30",
    },
  ],
  priceRange: "$$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://dulwichdaynursery.co.uk/#website",
  url: "https://dulwichdaynursery.co.uk",
  name: "Dulwich Day Nursery",
  description: "Ofsted Outstanding day nursery in Dulwich, South London",
  publisher: { "@id": "https://dulwichdaynursery.co.uk/#organization" },
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script id="childcare-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(childCareSchema) }} />
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
