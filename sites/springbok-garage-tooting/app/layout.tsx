import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Springbok Garage Ltd | Award-Winning Tooting Garage Since 1963',
    template: '%s | Springbok Garage',
  },
  description:
    'Springbok Garage Ltd - Award-winning family garage in Tooting since 1963. 60+ years of trusted service. MOT, Servicing, Body Repairs, Car Wash, Breakdown & Recovery. Wandsworth Guardian Garage of the Year 2012. Near Tooting Broadway tube.',
  keywords: [
    'garage Tooting',
    'MOT Tooting',
    'car servicing Tooting',
    'body repairs Tooting',
    'Springbok Garage',
    'Tooting Broadway garage',
    'car repairs London SW17',
    'breakdown recovery Tooting',
    'commercial vehicle repairs',
    'award-winning garage',
    'family garage Tooting',
    'Wandsworth garage',
  ],
  authors: [{ name: 'Springbok Garage Ltd' }],
  creator: 'Springbok Garage Ltd',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://springbok-garage.co.uk',
    siteName: 'Springbok Garage Ltd',
    title: 'Springbok Garage Ltd | Award-Winning Tooting Garage Since 1963',
    description:
      '60+ years of excellence. MOT, Servicing, Body Repairs & more. Wandsworth Guardian Garage of the Year 2012. Family business serving Tooting since 1963.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Springbok Garage Ltd - Tooting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Springbok Garage Ltd | Award-Winning Tooting Garage Since 1963',
    description:
      '60+ years of excellence. Award-winning garage serving Tooting since 1963.',
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
              '@type': 'AutomotiveBusiness',
              name: 'Springbok Garage Ltd',
              description:
                'Award-winning family garage serving Tooting since 1963. Over 60 years of trusted automotive service. Specializing in MOT, Servicing, Body Repairs, Car Wash, Breakdown & Recovery, and Commercial Vehicles.',
              url: 'https://springbok-garage.co.uk',
              telephone: '+44 20 8672 7788',
              additionalType: 'AutoRepair',
              foundingDate: '1963',
              slogan: '60+ Years of Trusted Service',
              award: 'Wandsworth Guardian Garage of the Year 2012',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '110 Totterdown Street',
                addressLocality: 'Tooting',
                addressRegion: 'London',
                postalCode: 'SW17 8TA',
                addressCountry: 'GB',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 51.4311,
                longitude: -0.1678,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '07:30',
                  closes: '17:30',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '08:00',
                  closes: '11:00',
                },
              ],
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Tooting',
                },
                {
                  '@type': 'City',
                  name: 'Wandsworth',
                },
                {
                  '@type': 'City',
                  name: 'Balham',
                },
                {
                  '@type': 'City',
                  name: 'Streatham',
                },
                {
                  '@type': 'AdministrativeArea',
                  name: 'South London',
                },
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Automotive Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'MOT Testing',
                      description: 'Comprehensive MOT testing for all vehicle types',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Car Servicing',
                      description: 'Full and interim car servicing',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Body Repairs',
                      description: 'Professional body work and accident repairs',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Car Wash',
                      description: 'Professional car washing services',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Breakdown & Recovery',
                      description: 'Emergency breakdown and recovery service',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Commercial Vehicles',
                      description: 'Servicing and repairs for commercial vehicles',
                    },
                  },
                ],
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '240',
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
