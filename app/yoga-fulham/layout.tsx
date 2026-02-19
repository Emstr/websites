import type { Metadata } from "next";
import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fulhamyoga.co.uk"),
  title: { default: "Fulham Yoga Studio | Yoga Classes in Fulham, SW6", template: "%s | Fulham Yoga Studio" },
  description: "Fulham Yoga Studio offers Vinyasa Flow, Yin Yoga, Hot Yoga, Pregnancy Yoga, Private Sessions and Teacher Training in the heart of Fulham, SW6. Yoga Alliance registered instructors. All levels welcome.",
  keywords: ["yoga studio fulham", "yoga classes SW6", "vinyasa flow fulham", "hot yoga fulham", "pregnancy yoga fulham", "yin yoga london", "yoga teacher training london", "private yoga sessions fulham", "yoga near me fulham", "fulham yoga studio"],
  openGraph: { title: "Fulham Yoga Studio | Yoga Classes in Fulham, SW6", description: "Yoga Alliance registered studio offering Vinyasa, Yin, Hot Yoga, Pregnancy Yoga and more. All levels welcome.", url: "https://fulhamyoga.co.uk", siteName: "Fulham Yoga Studio", locale: "en_GB", type: "website" },
  twitter: { card: "summary_large_image", title: "Fulham Yoga Studio | Yoga Classes in Fulham", description: "Yoga Alliance registered studio in Fulham, SW6. Vinyasa, Yin, Hot Yoga and more." },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://fulhamyoga.co.uk" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Fulham Yoga Studio",
  image: "https://fulhamyoga.co.uk/og-image.jpg",
  url: "https://fulhamyoga.co.uk",
  telephone: "+442079461456",
  email: "namaste@fulhamyoga.co.uk",
  address: { "@type": "PostalAddress", streetAddress: "34 Wandsworth Bridge Road", addressLocality: "Fulham", addressRegion: "London", postalCode: "SW6 2TH", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.4685, longitude: -0.1925 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "06:30", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "09:00", closes: "17:00" },
  ],
  priceRange: "££",
  areaServed: { "@type": "Place", name: "Fulham, London" },
};

const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: "Fulham Yoga Studio", url: "https://fulhamyoga.co.uk" };

export default function YogaFulhamLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
