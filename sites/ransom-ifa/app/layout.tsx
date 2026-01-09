import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ransomifa.co.uk"),
  title: {
    default: "Ransom IFA | Chartered Financial Advisers | Yorkshire",
    template: "%s | Ransom IFA",
  },
  description:
    "Chartered Independent Financial Advisers in Burley-in-Wharfedale, Yorkshire. Est. 1999. Expert lifetime planning, investments, pensions, and protection advice. Small family firm with 50+ years combined experience serving Yorkshire.",
  keywords: [
    "independent financial adviser",
    "chartered financial adviser",
    "IFA Yorkshire",
    "financial planning",
    "lifetime planning",
    "investments",
    "pensions",
    "protection",
    "Burley-in-Wharfedale",
    "Ilkley",
    "Otley",
    "Leeds",
    "Yorkshire",
    "FCA regulated",
  ],
  authors: [{ name: "Ransom IFA" }],
  creator: "Ransom IFA",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://ransomifa.co.uk",
    siteName: "Ransom IFA",
    title: "Ransom IFA | Chartered Financial Advisers | Yorkshire",
    description:
      "Chartered Independent Financial Advisers in Yorkshire. Est. 1999. Expert lifetime planning, investments, pensions, and protection advice. Small family firm with 50+ years combined experience.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ransom IFA - Chartered Financial Advisers Yorkshire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ransom IFA | Chartered Financial Advisers | Yorkshire",
    description:
      "Chartered Independent Financial Advisers in Yorkshire. Est. 1999. Expert lifetime planning, investments, pensions, and protection.",
  },
  alternates: {
    canonical: "https://ransomifa.co.uk",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Ransom IFA",
  description:
    "Chartered Independent Financial Advisers providing lifetime planning, investment advice, pension planning, and protection services. Small family firm established in 1999 with over 50 years combined experience.",
  url: "https://ransomifa.co.uk",
  telephone: "+44 1943 850222",
  email: "tony@ransomifa.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "113 Main Street",
    addressLocality: "Burley-in-Wharfedale",
    addressRegion: "Ilkley",
    postalCode: "LS29 7JN",
    addressCountry: "GB",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  areaServed: [
    "Burley-in-Wharfedale",
    "Ilkley",
    "Otley",
    "Leeds",
    "Yorkshire",
    "West Yorkshire",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Financial Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lifetime Planning",
        },
      },
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
          name: "Protection & Insurance",
        },
      },
    ],
  },
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "FCA Reference",
      value: "425959",
    },
    {
      "@type": "PropertyValue",
      name: "Chartered Status",
      value: "Chartered Financial Adviser",
    },
    {
      "@type": "PropertyValue",
      name: "Established",
      value: "1999",
    },
  ],
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
        <main className="min-h-screen">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
