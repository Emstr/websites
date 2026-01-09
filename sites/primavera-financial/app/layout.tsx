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
  metadataBase: new URL("https://primaverafp.com"),
  title: {
    default: "Primavera Financial Partners | Chartered Financial Planners | Wanstead E11",
    template: "%s | Primavera Financial Partners",
  },
  description:
    "Chartered Financial Planners in Wanstead, East London. Expert advice on investments, pensions, mortgages, protection and retirement planning. Your financial future deserves Chartered expertise.",
  keywords: [
    "chartered financial planner",
    "financial adviser",
    "Wanstead",
    "East London",
    "E11",
    "investments",
    "pensions",
    "mortgages",
    "retirement planning",
    "financial planning",
    "IFA",
    "chartered status",
  ],
  authors: [{ name: "Primavera Financial Partners LLP" }],
  creator: "Primavera Financial Partners LLP",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://primaverafp.com",
    siteName: "Primavera Financial Partners",
    title: "Primavera Financial Partners | Chartered Financial Planners | Wanstead",
    description:
      "Chartered Financial Planners in Wanstead, East London. Expert advice on investments, pensions, mortgages and retirement planning.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Primavera Financial Partners - Chartered Financial Planners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Primavera Financial Partners | Chartered Financial Planners",
    description:
      "Chartered Financial Planners in Wanstead. Expert advice on investments, pensions, mortgages and retirement planning.",
  },
  alternates: {
    canonical: "https://primaverafp.com",
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
  name: "Primavera Financial Partners LLP",
  description:
    "Chartered Financial Planners in Wanstead, East London. Expert advice on investments, pensions, mortgages, protection and retirement planning.",
  url: "https://primaverafp.com",
  telephone: "+44 20 8532 9652",
  email: "admin@primaverafp.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "87a High Street",
    addressLocality: "Wanstead",
    addressRegion: "London",
    postalCode: "E11 2AE",
    addressCountry: "GB",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  areaServed: [
    "Wanstead",
    "Redbridge",
    "East London",
    "Woodford",
    "Ilford",
    "Leytonstone",
    "Stratford",
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
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
