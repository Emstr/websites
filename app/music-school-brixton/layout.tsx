import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Brixton School of Music | Music Lessons in Brixton, South London",
    template: "%s | Brixton School of Music",
  },
  description:
    "Professional music lessons for all ages and abilities in Brixton, South London. Guitar, piano, vocals, drums, music theory and band workshops. Established 2014.",
  keywords: [
    "music school Brixton",
    "guitar lessons Brixton",
    "piano lessons South London",
    "vocal training Brixton",
    "drum lessons Brixton",
    "music theory classes",
    "band workshops London",
    "music school South London",
    "Brixton music tuition",
    "learn guitar London",
    "singing lessons Brixton",
    "keyboard lessons South London",
  ],
  authors: [{ name: "Brixton School of Music" }],
  creator: "Brixton School of Music",
  publisher: "Brixton School of Music",
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
    url: "https://brixtonmusic.co.uk",
    siteName: "Brixton School of Music",
    title: "Brixton School of Music | Find Your Sound",
    description:
      "Professional music lessons for all ages and abilities in Brixton, South London. Guitar, piano, vocals, drums, theory and band workshops.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brixton School of Music - Find Your Sound",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brixton School of Music | Music Lessons in Brixton",
    description:
      "Professional music lessons for all ages and abilities in Brixton, South London.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://brixtonmusic.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Brixton, London",
    "geo.position": "51.4613;-0.1156",
    ICBM: "51.4613, -0.1156",
  },
};

const musicSchoolSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://brixtonmusic.co.uk/#organization",
  name: "Brixton School of Music",
  description:
    "Professional music school offering guitar, piano, vocal, drum, music theory and band workshop tuition for all ages and abilities in Brixton, South London.",
  url: "https://brixtonmusic.co.uk",
  telephone: "+442079464420",
  email: "info@brixtonmusic.co.uk",
  foundingDate: "2014",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  areaServed: [
    {
      "@type": "City",
      name: "London",
    },
    {
      "@type": "AdministrativeArea",
      name: "South London",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Music Lessons",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Guitar Lessons",
          description: "One-to-one and group guitar tuition for acoustic and electric guitar, all levels.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Piano & Keyboard",
          description: "Classical and contemporary piano and keyboard lessons for beginners through to advanced.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vocal Training",
          description: "Professional vocal coaching covering technique, performance and confidence building.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Drum Lessons",
          description: "Drum kit and percussion tuition in our fully equipped practice rooms.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Music Theory",
          description: "Graded music theory classes and exam preparation for ABRSM and Trinity.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Band Workshops",
          description: "Group band sessions where students collaborate, rehearse and perform together.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Brixton School of Music",
    address: {
      "@type": "PostalAddress",
      streetAddress: "29 Coldharbour Lane",
      addressLocality: "Brixton",
      addressRegion: "London",
      postalCode: "SW9 8PS",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.4613,
      longitude: -0.1156,
    },
    telephone: "+442079464420",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://brixtonmusic.co.uk/#localbusiness",
  name: "Brixton School of Music",
  image: "https://brixtonmusic.co.uk/logo.png",
  telephone: "+442079464420",
  email: "info@brixtonmusic.co.uk",
  url: "https://brixtonmusic.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "29 Coldharbour Lane",
    addressLocality: "Brixton",
    addressRegion: "London",
    postalCode: "SW9 8PS",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4613,
    longitude: -0.1156,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://brixtonmusic.co.uk/#website",
  url: "https://brixtonmusic.co.uk",
  name: "Brixton School of Music",
  description: "Professional music lessons for all ages and abilities in Brixton, South London",
  publisher: {
    "@id": "https://brixtonmusic.co.uk/#organization",
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
        id="music-school-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(musicSchoolSchema),
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
