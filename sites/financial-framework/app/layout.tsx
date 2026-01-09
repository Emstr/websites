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
  metadataBase: new URL("https://financialframework.co.uk"),
  title: {
    default: "Financial Framework | Independent Financial Advisers Otley Yorkshire | Wealth Management",
    template: "%s | Financial Framework",
  },
  description:
    "Comprehensive financial planning in Otley, Yorkshire. Investment advice, wealth management, retirement planning, tax planning and intergenerational wealth transfer for individuals and businesses. Many years of trusted experience.",
  keywords: [
    "financial adviser Otley",
    "IFA Yorkshire",
    "independent financial adviser",
    "wealth management Yorkshire",
    "investment advice Otley",
    "retirement planning",
    "tax planning",
    "intergenerational planning",
    "wealth transfer",
    "Financial Framework",
    "Otley",
    "Yorkshire",
  ],
  authors: [{ name: "Financial Framework" }],
  creator: "Financial Framework",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://financialframework.co.uk",
    siteName: "Financial Framework",
    title: "Financial Framework | Independent Financial Advisers Otley Yorkshire",
    description:
      "Comprehensive financial planning in Otley, Yorkshire. Investment advice, wealth management, retirement planning, and intergenerational wealth transfer.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Financial Framework - Independent Financial Advisers Otley Yorkshire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Framework | Independent Financial Advisers Otley Yorkshire",
    description:
      "Comprehensive financial planning in Yorkshire. Investment advice, wealth management, and intergenerational wealth transfer.",
  },
  alternates: {
    canonical: "https://financialframework.co.uk",
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
  name: "Financial Framework",
  description:
    "Comprehensive financial planning and wealth management in Otley, Yorkshire. Investment advice, retirement planning, tax planning, and intergenerational wealth transfer for individuals and businesses. Many years of trusted experience.",
  url: "https://financialframework.co.uk",
  email: "info@financialframework.co.uk",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Otley",
    addressRegion: "Yorkshire",
    addressCountry: "GB",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  areaServed: [
    "Otley",
    "Yorkshire",
    "West Yorkshire",
    "North Yorkshire",
    "Leeds",
    "Harrogate",
    "Ilkley",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Financial Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Advice",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wealth Management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Retirement Planning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tax Planning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Intergenerational Planning",
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
