import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Camden Notary Public | Linda Okagbue | London WC1',
    template: '%s | Camden Notary Public',
  },
  description:
    'Professional notary public services in Camden and Central London. Linda Okagbue offers document notarisation, apostille services, powers of attorney, and legalisation. Located near Kings Cross and Euston stations.',
  keywords: [
    'notary public Camden',
    'notary public London',
    'notary Kings Cross',
    'notary Euston',
    'document notarisation London',
    'apostille services London',
    'power of attorney notary',
    'legalisation services UK',
    'Linda Okagbue notary',
  ],
  authors: [{ name: 'Linda Okagbue' }],
  creator: 'Linda Okagbue',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://camdennotary.co.uk',
    siteName: 'Camden Notary Public',
    title: 'Camden Notary Public | Linda Okagbue',
    description:
      'Professional notary public services in Camden and Central London. Document notarisation, apostille, and legalisation services.',
    images: [
      {
        url: '/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Camden Notary Public - London',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Camden Notary Public | Linda Okagbue',
    description:
      'Professional notary public services in Camden and Central London.',
    images: ['/hero-bg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NotaryService',
  name: 'Camden Notary Public - Linda Okagbue',
  description:
    'Professional notary public services in Camden and Central London',
  url: 'https://camdennotary.co.uk',
  telephone: '+44 7985 405640',
  email: 'linda@camdennotary.co.uk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hamilton House, 4th Floor, Mabledon Place',
    addressLocality: 'London',
    postalCode: 'WC1H 9BB',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5294,
    longitude: -0.1296,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:30',
      closes: '17:30',
    },
  ],
  priceRange: 'From £85',
  areaServed: [
    'Camden',
    'Central London',
    'Islington',
    'Westminster',
    'North London',
    'South London',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Notary Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Document Notarisation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Apostille Services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Power of Attorney',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Legalisation Services',
        },
      },
    ],
  },
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
