import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Lewisham Osteopathic Practice | Richard Lewey BSc (Hons) Ost',
    template: '%s | Lewisham Osteopathic Practice',
  },
  description:
    'Expert osteopathic treatment in Lewisham, South London. Richard Lewey has 25+ years of experience treating back pain, sciatica, neck pain, sports injuries and more. Online booking available.',
  keywords: [
    'osteopath Lewisham',
    'osteopath South London',
    'back pain treatment Lewisham',
    'sciatica treatment London',
    'sports injury osteopath',
    'neck pain treatment',
    'Richard Lewey osteopath',
    'GOsC registered osteopath',
  ],
  authors: [{ name: 'Richard Lewey' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Lewisham Osteopathic Practice',
    title: 'Lewisham Osteopathic Practice | Richard Lewey',
    description: 'Expert osteopathic treatment in Lewisham. 25+ years experience. Online booking available.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Lewisham Osteopathic Practice',
  description: 'Expert osteopathic treatment in Lewisham, South London',
  telephone: '+442088525577',
  email: 'lewishamosteo@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Studio 107, Ladywell Works, 15 Whitburn Road',
    addressLocality: 'Lewisham',
    addressRegion: 'London',
    postalCode: 'SE13 7UQ',
    addressCountry: 'GB',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '14:00',
    },
  ],
  priceRange: '£60 per appointment',
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
