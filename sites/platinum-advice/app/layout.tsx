import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://platinum-advice.com"),
  title: {
    default: "Platinum Advice | Independent Financial Advisers | Wetherby, North Yorkshire",
    template: "%s | Platinum Advice",
  },
  description:
    "Independent Financial Advisers in Wetherby, North Yorkshire. Small, friendly, reliable company offering boutique financial advice. Pensions, Mortgages, Protection, and Investments across York, Harrogate, Leeds, Ripon, and Thirsk.",
  keywords: [
    "financial adviser",
    "Wetherby",
    "North Yorkshire",
    "York",
    "Harrogate",
    "Leeds",
    "Ripon",
    "Thirsk",
    "pensions",
    "mortgages",
    "protection",
    "investments",
    "IFA",
    "independent financial advice",
    "boutique financial advice",
  ],
  authors: [{ name: "Platinum Advice" }],
  creator: "Platinum Advice",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://platinum-advice.com",
    siteName: "Platinum Advice",
    title: "Platinum Advice | Independent Financial Advisers | Wetherby",
    description:
      "Small, friendly, reliable financial advice in North Yorkshire. Serving York, Harrogate, Leeds, Ripon, and Thirsk with a boutique approach to pensions, mortgages, protection, and investments.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Platinum Advice - Independent Financial Advisers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Platinum Advice | Independent Financial Advisers | Wetherby",
    description:
      "Small, friendly, reliable financial advice in North Yorkshire. Boutique approach to pensions, mortgages, protection, and investments.",
  },
  alternates: {
    canonical: "https://platinum-advice.com",
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
  name: "Platinum Advice",
  description:
    "Independent Financial Advisers in Wetherby, North Yorkshire. Small, friendly, reliable company offering boutique financial advice across pensions, mortgages, protection, and investments.",
  url: "https://platinum-advice.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wetherby",
    addressRegion: "North Yorkshire",
    addressCountry: "GB",
  },
  areaServed: [
    "Wetherby",
    "York",
    "Harrogate",
    "Leeds",
    "Ripon",
    "Thirsk",
    "North Yorkshire",
    "West Yorkshire",
    "United Kingdom",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  priceRange: "££",
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
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
