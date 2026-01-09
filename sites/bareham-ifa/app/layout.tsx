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
  metadataBase: new URL("https://barehamifa.com"),
  title: {
    default: "Bareham IFA | Independent Financial Advisers Leeds | Family-Owned Since 1985",
    template: "%s | Bareham IFA",
  },
  description:
    "Family-owned independent financial advisers in Leeds. From Gordon to James Bareham - three generations of bespoke investment, pension, and retirement planning advice in plain English. FCA regulated (939595).",
  keywords: [
    "financial adviser Leeds",
    "IFA Leeds",
    "independent financial adviser",
    "investment planning Leeds",
    "pension planning Leeds",
    "retirement planning",
    "family financial adviser",
    "bespoke financial advice",
    "Bareham IFA",
    "Allerton Grange",
    "Leeds LS17",
  ],
  authors: [{ name: "Bareham IFA" }],
  creator: "Bareham IFA",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://barehamifa.com",
    siteName: "Bareham IFA",
    title: "Bareham IFA | Independent Financial Advisers Leeds | Family-Owned",
    description:
      "Three generations of family-owned independent financial advice in Leeds. Bespoke investment, pension, and retirement planning in plain English.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bareham IFA - Independent Financial Advisers Leeds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bareham IFA | Independent Financial Advisers Leeds",
    description:
      "Family-owned independent financial advisers in Leeds. Bespoke investment, pension, and retirement planning in plain English.",
  },
  alternates: {
    canonical: "https://barehamifa.com",
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
  name: "Bareham IFA",
  description:
    "Family-owned independent financial advisers in Leeds providing bespoke investment, pension, and retirement planning advice. Three generations of trusted service from Gordon Bareham to James Bareham.",
  url: "https://barehamifa.com",
  email: "info@barehamifa.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Foxborough House, 96 Allerton Grange Rise",
    addressLocality: "Leeds",
    postalCode: "LS17 6LG",
    addressCountry: "GB",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  areaServed: [
    "Leeds",
    "Allerton",
    "Chapel Allerton",
    "Moortown",
    "Roundhay",
    "West Yorkshire",
    "Yorkshire",
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
          name: "Retirement Planning",
        },
      },
    ],
  },
  founder: {
    "@type": "Person",
    name: "Gordon Bareham",
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
