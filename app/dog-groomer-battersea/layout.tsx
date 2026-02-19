import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Battersea Dog Spa | Professional Dog Grooming in Battersea, SW11",
    template: "%s | Battersea Dog Spa",
  },
  description:
    "Professional dog grooming salon in Battersea, SW11. Full grooms, breed-specific styling, puppy first grooms, de-shedding treatments and spa services. City & Guilds qualified groomers.",
  keywords: [
    "dog grooming Battersea",
    "dog groomer SW11",
    "pet grooming Battersea",
    "puppy grooming London",
    "breed-specific grooming",
    "dog spa Battersea",
    "de-shedding treatment",
    "nail clipping dogs",
    "professional dog grooming",
    "Battersea dog salon",
    "dog grooming near me",
    "London dog groomer",
  ],
  authors: [{ name: "Battersea Dog Spa" }],
  creator: "Battersea Dog Spa",
  publisher: "Battersea Dog Spa",
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
    url: "https://batterseadogspa.co.uk",
    siteName: "Battersea Dog Spa",
    title: "Battersea Dog Spa | Professional Dog Grooming in Battersea",
    description:
      "City & Guilds qualified dog grooming in Battersea, SW11. Full grooms, puppy packages, breed-specific styling and luxury spa treatments for your furry friend.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Battersea Dog Spa - Professional Dog Grooming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Battersea Dog Spa | Dog Grooming Battersea",
    description:
      "Professional dog grooming salon in Battersea, SW11. City & Guilds qualified groomers.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://batterseadogspa.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Battersea",
    "geo.position": "51.4750;-0.1687",
    ICBM: "51.4750, -0.1687",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://batterseadogspa.co.uk/#business",
  name: "Battersea Dog Spa",
  description:
    "Professional dog grooming salon offering full grooms, breed-specific styling, puppy first grooms, de-shedding treatments, nail clipping, ear cleaning and luxury spa treatments in Battersea, London.",
  url: "https://batterseadogspa.co.uk",
  telephone: "+442079462567",
  email: "woof@batterseadogspa.co.uk",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  areaServed: [
    {
      "@type": "City",
      name: "London",
    },
    {
      "@type": "AdministrativeArea",
      name: "Battersea",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dog Grooming Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Groom",
          description: "Complete grooming service including bath, dry, clip, style and finishing touches.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Puppy First Groom",
          description: "Gentle introductory grooming session designed for puppies experiencing their first salon visit.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Breed-Specific Styling",
          description: "Expert styling tailored to your dog's breed standard or your preferred look.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "De-Shedding Treatment",
          description: "Specialist treatment to reduce shedding and maintain a healthy coat.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Nail Clipping & Ear Cleaning",
          description: "Essential maintenance services for your dog's health and comfort.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Spa Treatments",
          description: "Luxury spa packages including deep conditioning, blueberry facials and pawdicures.",
        },
      },
    ],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "42 Battersea Park Road",
    addressLocality: "Battersea",
    addressRegion: "London",
    postalCode: "SW11 4JP",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.475,
    longitude: -0.1687,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  image: "https://batterseadogspa.co.uk/logo.png",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://batterseadogspa.co.uk/#website",
  url: "https://batterseadogspa.co.uk",
  name: "Battersea Dog Spa",
  description: "Professional dog grooming salon in Battersea, London",
  publisher: {
    "@id": "https://batterseadogspa.co.uk/#business",
  },
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
