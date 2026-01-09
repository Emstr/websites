import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Hirschfelds Jewellery Repairs | 150 Years in Hatton Garden | Since 1875',
    template: '%s | Hirschfelds Jewellery Repairs',
  },
  description:
    'Hirschfelds - One of Britain\'s oldest jewellery repair workshops. Serving Hatton Garden since 1875. Master craftsmen offering bespoke jewellery repairs, ring sizing, restoration and manufacturing. By appointment only. 150 years of excellence.',
  keywords: [
    'Hatton Garden jewellers',
    'jewellery repairs London',
    'ring sizing London',
    'bespoke jewellery London',
    'jewellery restoration',
    'antique jewellery repair',
    'master jeweller London',
    'Hirschfelds jewellers',
    'historic jeweller Hatton Garden',
    'traditional jewellery craftsmen',
    'jewellery workshop London',
    'bespoke manufacturing',
  ],
  authors: [{ name: 'Hirschfelds Jewellery Repairs' }],
  creator: 'Hirschfelds Jewellery Repairs',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://hirschfelds-jewellers.co.uk',
    siteName: 'Hirschfelds Jewellery Repairs',
    title: 'Hirschfelds | 150 Years in Hatton Garden Since 1875',
    description:
      'One of Britain\'s oldest jewellery repair workshops. Master craftsmen in Hatton Garden offering bespoke repairs, restoration and manufacturing since 1875.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hirschfelds Jewellery Repairs - 150 Years in Hatton Garden',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hirschfelds | 150 Years in Hatton Garden',
    description:
      'Master jewellery craftsmen since 1875. Bespoke repairs, restoration and manufacturing.',
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
              '@type': 'JewelryStore',
              name: 'Hirschfelds Jewellery Repairs',
              description:
                'One of the country\'s oldest jewellery repair workshops, established in 1875. Master craftsmen specializing in bespoke jewellery repairs, ring sizing, restoration, and manufacturing in Hatton Garden, London.',
              url: 'https://hirschfelds-jewellers.co.uk',
              telephone: '+44 20 7405 1536',
              foundingDate: '1875',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Hatton Garden',
                addressLocality: 'London',
                addressRegion: 'Greater London',
                addressCountry: 'GB',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 51.5190,
                longitude: -0.1090,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '11:00',
                  closes: '16:00',
                },
              ],
              priceRange: 'Premium',
              areaServed: [
                {
                  '@type': 'City',
                  name: 'London',
                },
                {
                  '@type': 'Country',
                  name: 'United Kingdom',
                },
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Jewellery Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Jewellery Repairs',
                      description: 'Expert jewellery repairs using traditional techniques',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Ring Sizing',
                      description: 'Professional ring sizing and resizing services',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Bespoke Manufacturing',
                      description: 'Custom jewellery design and manufacturing',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Restoration',
                      description: 'Antique and heirloom jewellery restoration',
                    },
                  },
                ],
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '95',
              },
            }),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-cream text-gray-900">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
