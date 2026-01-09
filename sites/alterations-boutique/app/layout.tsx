import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Alterations Boutique | Premier London Alterations Service Since 1983',
    template: '%s | Alterations Boutique',
  },
  description:
    'Alterations Boutique - London\'s premier alterations service since 1983. Expert tailoring, seamstress services for men, women, and bridal wear. Three locations: Marylebone, Chelsea, Wimbledon. Same-day express service available.',
  keywords: [
    'alterations London',
    'tailoring London',
    'seamstress London',
    'bridal alterations London',
    'men\'s alterations',
    'women\'s alterations',
    'express alterations',
    'Marylebone tailoring',
    'Chelsea alterations',
    'Wimbledon seamstress',
    'same day alterations',
    'fashion alterations',
  ],
  authors: [{ name: 'Alterations Boutique' }],
  creator: 'Alterations Boutique',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://alterations-boutique.co.uk',
    siteName: 'Alterations Boutique',
    title: 'Alterations Boutique | Premier London Alterations Since 1983',
    description:
      'Expert alterations and tailoring in Marylebone, Chelsea, and Wimbledon. 40+ years experience. Same-day service available.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alterations Boutique - Premier London Alterations Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alterations Boutique | Premier London Alterations Since 1983',
    description:
      'Expert alterations and tailoring in three prime London locations. 40+ years experience.',
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
              '@type': 'LocalBusiness',
              '@id': 'https://alterations-boutique.co.uk',
              name: 'Alterations Boutique',
              description:
                'Premier alterations and tailoring service in London since 1983. Expert seamstresses and tailors specializing in men\'s, women\'s, and bridal alterations.',
              url: 'https://alterations-boutique.co.uk',
              telephone: '+44 207 724 4147',
              email: 'info@alterationsboutique.co.uk',
              foundingDate: '1983',
              priceRange: '££',
              areaServed: [
                {
                  '@type': 'City',
                  name: 'London',
                },
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Alterations Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Men\'s Alterations',
                      description: 'Expert tailoring for suits, trousers, shirts, and jackets',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Women\'s Alterations',
                      description: 'Professional alterations for dresses, skirts, trousers, and blouses',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Bridal Alterations',
                      description: 'Specialized bridal gown and wedding dress alterations',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Express Service',
                      description: 'Same-day and express alterations available',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Call-Out Service',
                      description: 'We come to you for fittings and consultations',
                    },
                  },
                ],
              },
              location: [
                {
                  '@type': 'Place',
                  name: 'Alterations Boutique Marylebone',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: '14 New Quebec Street',
                    addressLocality: 'Marylebone',
                    addressRegion: 'London',
                    postalCode: 'W1H 7RS',
                    addressCountry: 'GB',
                  },
                },
                {
                  '@type': 'Place',
                  name: 'Alterations Boutique Chelsea',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: '33 Elystan Street',
                    addressLocality: 'Chelsea',
                    addressRegion: 'London',
                    postalCode: 'SW3 3NT',
                    addressCountry: 'GB',
                  },
                },
                {
                  '@type': 'Place',
                  name: 'Alterations Boutique Wimbledon',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: '34 High Street',
                    addressLocality: 'Wimbledon Village',
                    addressRegion: 'London',
                    postalCode: 'SW19 5BY',
                    addressCountry: 'GB',
                  },
                },
              ],
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Monday',
                  opens: '09:00',
                  closes: '19:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '21:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '18:00',
                },
              ],
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
