import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Fairway Independent Financial Advisers | Financial Advice in East Molesey, Surrey",
    template: "%s | Fairway Independent Financial Advisers",
  },
  description:
    "Independent financial advice from Fairway Independent Financial Advisers Ltd, near Hampton Court. Financial planning, investments, equity release, mortgages, pensions and protection in East Molesey, Surrey.",
  keywords: [
    "financial adviser East Molesey",
    "independent financial adviser Surrey",
    "IFA East Molesey",
    "financial advice Hampton Court",
    "investment advice Surrey",
    "equity release adviser Surrey",
    "mortgage adviser East Molesey",
    "pension advice Surrey",
    "wealth management Surrey",
    "Fairway Independent Financial Advisers",
    "financial planning East Molesey",
    "retirement planning Surrey",
    "business insurance Surrey",
    "taxation advice Surrey",
  ],
  authors: [{ name: "Fairway Independent Financial Advisers Ltd" }],
  creator: "Fairway Independent Financial Advisers Ltd",
  publisher: "Fairway Independent Financial Advisers Ltd",
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
    url: "https://fairway-ifa.co.uk",
    siteName: "Fairway Independent Financial Advisers",
    title: "Fairway Independent Financial Advisers | Guiding Your Wealth, Securing Your Future",
    description:
      "Independent financial advice with 65+ years combined experience, near Hampton Court. Financial planning, investments, equity release, mortgages, pensions, protection and wealth management in East Molesey, Surrey.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fairway Independent Financial Advisers - Guiding Your Wealth, Securing Your Future",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fairway Independent Financial Advisers | East Molesey, Surrey",
    description:
      "Independent financial advice with 65+ years combined experience near Hampton Court, Surrey.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://fairway-ifa.co.uk",
  },
  other: {
    "geo.region": "GB-SRY",
    "geo.placename": "East Molesey",
    "geo.position": "51.3880;-0.3580",
    ICBM: "51.3880, -0.3580",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://fairway-ifa.co.uk/#organization",
  name: "Fairway Independent Financial Advisers Ltd",
  alternateName: "Fairway IFA",
  description:
    "Independent financial advice including financial planning, investments, equity release, mortgages, pensions, business insurance, taxation and protection. 65+ years combined experience, serving East Molesey, Surrey and surrounding areas near Hampton Court.",
  url: "https://fairway-ifa.co.uk",
  telephone: "+442089414175",
  email: "Info@fairway-ifa.com",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "East Molesey",
    },
    {
      "@type": "AdministrativeArea",
      name: "Surrey",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Financial Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Financial Planning",
          description: "Comprehensive financial planning and advice tailored to your individual goals and circumstances.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Planning",
          description: "Expert investment advice and wealth management strategies for long-term growth.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Equity Release",
          description: "Specialist equity release advice for homeowners looking to unlock property wealth.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mortgages",
          description: "Independent mortgage advice with access to the whole market for the best rates.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pensions",
          description: "Pension planning, consolidation and retirement income strategies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Insurance",
          description: "Comprehensive business insurance solutions including key person cover and group schemes.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Fairway Independent Financial Advisers Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Fairway House, 127 Walton Road",
      addressLocality: "East Molesey",
      addressRegion: "Surrey",
      postalCode: "KT8 0DT",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.3880,
      longitude: -0.3580,
    },
    telephone: "+442089414175",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://fairway-ifa.co.uk/#localbusiness",
  name: "Fairway Independent Financial Advisers",
  image: "https://fairway-ifa.co.uk/logo.png",
  telephone: "+442089414175",
  email: "Info@fairway-ifa.com",
  url: "https://fairway-ifa.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Fairway House, 127 Walton Road",
    addressLocality: "East Molesey",
    addressRegion: "Surrey",
    postalCode: "KT8 0DT",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.3880,
    longitude: -0.3580,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
  ],
  priceRange: "$$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://fairway-ifa.co.uk/#website",
  url: "https://fairway-ifa.co.uk",
  name: "Fairway Independent Financial Advisers",
  description: "Independent financial advice in East Molesey, Surrey - 65+ years combined experience near Hampton Court",
  publisher: {
    "@id": "https://fairway-ifa.co.uk/#organization",
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
        id="financial-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(financialServiceSchema),
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
