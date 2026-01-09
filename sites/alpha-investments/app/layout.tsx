import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alpha4u.co.uk"),
  title: {
    default: "Alpha Investments | Financial Planning & Wealth Management | Harrow & Mayfair",
    template: "%s | Alpha Investments",
  },
  description:
    "Professional financial planning and wealth management services in Harrow and Mayfair, London. Investment planning, pensions, life assurance, auto-enrolment, and tax planning. Expert advice for your financial future.",
  keywords: [
    "financial adviser",
    "wealth management",
    "investment planning",
    "pensions",
    "life assurance",
    "tax planning",
    "auto-enrolment",
    "financial planning",
    "Harrow",
    "Mayfair",
    "London",
  ],
  authors: [{ name: "Alpha Investments & Financial Planning Ltd" }],
  creator: "Alpha Investments & Financial Planning Ltd",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://alpha4u.co.uk",
    siteName: "Alpha Investments",
    title: "Alpha Investments | Financial Planning & Wealth Management | Harrow & Mayfair",
    description:
      "Professional financial planning and wealth management services in Harrow and Mayfair, London. Investment planning, pensions, life assurance, and tax planning.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alpha Investments - Financial Planning & Wealth Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Investments | Financial Planning & Wealth Management",
    description:
      "Professional financial planning and wealth management services in Harrow and Mayfair, London. Expert advice for your financial future.",
  },
  alternates: {
    canonical: "https://alpha4u.co.uk",
  },
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
  verification: {
    // Add these when you have the verification codes
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Alpha Investments & Financial Planning Ltd",
  description:
    "Professional financial planning and wealth management services. Investment planning, pensions, life assurance, auto-enrolment, and tax planning services in Harrow and Mayfair.",
  url: "https://alpha4u.co.uk",
  telephone: "+44 20 3397 7730",
  email: "info@alpha4u.co.uk",
  address: [
    {
      "@type": "PostalAddress",
      name: "Harrow Office",
      streetAddress: "79 College Road",
      addressLocality: "Harrow",
      addressRegion: "Middlesex",
      postalCode: "HA1 1BD",
      addressCountry: "GB",
    },
    {
      "@type": "PostalAddress",
      name: "Mayfair Office",
      streetAddress: "17 Hanover Square",
      addressLocality: "Mayfair",
      addressRegion: "London",
      postalCode: "W1S 1BN",
      addressCountry: "GB",
    },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:30",
  },
  areaServed: [
    "Harrow",
    "Mayfair",
    "Westminster",
    "Central London",
    "North West London",
    "Greater London",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Financial Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Planning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Planning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Life Assurance",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
