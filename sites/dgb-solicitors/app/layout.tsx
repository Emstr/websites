import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'dgb Solicitors | Wills & Probate Specialists in Chatham, Kent',
    template: '%s | dgb Solicitors',
  },
  description:
    'dgb Solicitors - Expert wills and probate services in Chatham, Kent. Home visits available, accessible offices, and compassionate legal support for your estate planning needs.',
  keywords: [
    'solicitors Chatham',
    'wills solicitors Kent',
    'probate solicitors Kent',
    'estate planning Chatham',
    'will writing Kent',
    'probate services Chatham',
    'home visit solicitors',
    'accessible solicitors Kent',
    'inheritance law Kent',
    'lasting power of attorney',
  ],
  authors: [{ name: 'dgb Solicitors' }],
  creator: 'dgb Solicitors',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://dgblaw.co.uk',
    siteName: 'dgb Solicitors',
    title: 'dgb Solicitors | Wills & Probate Specialists in Chatham, Kent',
    description:
      'Expert wills and probate services in Chatham, Kent. Home visits available and accessible offices for all clients.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'dgb Solicitors - Wills & Probate Specialists',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'dgb Solicitors | Wills & Probate Specialists in Chatham, Kent',
    description:
      'Expert wills and probate services in Chatham, Kent. Home visits available.',
    images: ['/og-image.jpg'],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LegalService',
              '@id': 'https://dgblaw.co.uk',
              name: 'dgb Solicitors',
              description:
                'Specialist wills and probate solicitors in Chatham, Kent. Offering home visits and accessible legal services for estate planning, will writing, and probate administration.',
              url: 'https://dgblaw.co.uk',
              telephone: '+44 1634 304 000',
              email: 'enquiries@dgblaw.co.uk',
              priceRange: '££',
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Chatham',
                },
                {
                  '@type': 'City',
                  name: 'Medway',
                },
                {
                  '@type': 'AdministrativeArea',
                  name: 'Kent',
                },
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Legal Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Will Writing',
                      description: 'Professional will writing and estate planning services',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Probate Services',
                      description: 'Complete probate administration and estate settlement',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Lasting Power of Attorney',
                      description: 'LPA preparation and registration services',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Estate Planning',
                      description: 'Comprehensive estate planning and inheritance tax advice',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Home Visit Service',
                      description: 'Solicitors visit you at home for your convenience',
                    },
                  },
                ],
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Chatham',
                addressRegion: 'Kent',
                addressCountry: 'GB',
              },
              geo: {
                '@type': 'GeoCoordinates',
                addressCountry: 'GB',
              },
            }),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-white text-gray-900">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
