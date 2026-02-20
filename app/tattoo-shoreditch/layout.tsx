import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Shoreditch Ink Studio | Custom Tattoos in Shoreditch, London",
    template: "%s | Shoreditch Ink Studio",
  },
  description:
    "Award-winning tattoo studio in Shoreditch, London. Custom tattoos, cover-ups, fine line, colour realism, blackwork and geometric designs. Book your consultation today.",
  keywords: [
    "tattoo studio Shoreditch",
    "custom tattoos London",
    "cover-up tattoos",
    "fine line tattoos",
    "colour realism tattoo",
    "blackwork tattoo",
    "geometric tattoo",
    "tattoo artist East London",
    "Shoreditch tattoo parlour",
    "best tattoo studio London",
    "tattoo consultation",
    "tattoo near Old Street",
  ],
  authors: [{ name: "Shoreditch Ink Studio" }],
  creator: "Shoreditch Ink Studio",
  publisher: "Shoreditch Ink Studio",
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
    url: "https://shoreditchink.co.uk",
    siteName: "Shoreditch Ink Studio",
    title: "Shoreditch Ink Studio | Custom Tattoos in Shoreditch, London",
    description:
      "Award-winning tattoo studio in the heart of Shoreditch. Custom designs, cover-ups, fine line work, and more. Book a consultation with our expert artists.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shoreditch Ink Studio - Custom Tattoos in London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoreditch Ink Studio | Custom Tattoos in Shoreditch",
    description:
      "Award-winning tattoo studio in the heart of Shoreditch, London. Custom designs, cover-ups, and fine line work.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://shoreditchink.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Shoreditch, London",
    "geo.position": "51.5255;-0.0808",
    ICBM: "51.5255, -0.0808",
  },
};

const tattooParlourSchema = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  "@id": "https://shoreditchink.co.uk/#organization",
  name: "Shoreditch Ink Studio",
  description:
    "Award-winning tattoo studio specialising in custom tattoos, cover-ups, fine line work, colour realism, blackwork and geometric designs in Shoreditch, London.",
  url: "https://shoreditchink.co.uk",
  telephone: "+442079463210",
  email: "studio@shoreditchink.co.uk",
  foundingDate: "2017",
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
      name: "Greater London",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tattoo Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Tattoos",
          description: "Bespoke tattoo designs created in collaboration with our experienced artists.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cover-Up Work",
          description: "Expert cover-up tattoos to transform unwanted ink into stunning new designs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fine Line Tattoos",
          description: "Delicate, intricate fine line tattoo work for subtle and elegant designs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Colour Realism",
          description: "Photorealistic colour tattoos that bring images to life on skin.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Blackwork & Geometric",
          description: "Bold blackwork and precise geometric tattoo designs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tattoo Consultations",
          description: "Free consultations to discuss your design ideas, placement, and pricing.",
        },
      },
    ],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "18 Rivington Street",
    addressLocality: "Shoreditch",
    addressRegion: "London",
    postalCode: "EC2A 3DU",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5255,
    longitude: -0.0808,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "11:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "12:00",
      closes: "18:00",
    },
  ],
  sameAs: [],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://shoreditchink.co.uk/#localbusiness",
  name: "Shoreditch Ink Studio",
  image: "https://shoreditchink.co.uk/logo.png",
  telephone: "+442079463210",
  email: "studio@shoreditchink.co.uk",
  url: "https://shoreditchink.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18 Rivington Street",
    addressLocality: "Shoreditch",
    addressRegion: "London",
    postalCode: "EC2A 3DU",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5255,
    longitude: -0.0808,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "11:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "12:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://shoreditchink.co.uk/#website",
  url: "https://shoreditchink.co.uk",
  name: "Shoreditch Ink Studio",
  description: "Award-winning tattoo studio in Shoreditch, London",
  publisher: {
    "@id": "https://shoreditchink.co.uk/#organization",
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
        id="tattoo-parlour-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(tattooParlourSchema),
        }}
      />
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
