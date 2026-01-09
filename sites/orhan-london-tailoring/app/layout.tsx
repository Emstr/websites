import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Orhan London Tailoring | Bespoke Tailor Shoreditch | Master Craftsman',
    template: '%s | Orhan London Tailoring',
  },
  description:
    'Orhan London Tailoring - Master bespoke tailor in Shoreditch. Previously dressed Princess Diana and worked for Vivienne Westwood. Bespoke suits, occasion dresses, weddingwear, alterations. All genders welcome. Free consultations. Est. 2007.',
  keywords: [
    'bespoke tailor Shoreditch',
    'bespoke suits London',
    'master tailor London',
    'Vivienne Westwood tailor',
    'occasion dresses London',
    'wedding suits London',
    'alterations Shoreditch',
    'dressmaking London',
    'inclusive tailor',
    'Old Street tailor',
    'Orhan London',
    'bespoke clothing London',
    'made to measure suits',
  ],
  authors: [{ name: 'Orhan London Tailoring' }],
  creator: 'Orhan London Tailoring',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://orhan-london-tailoring.co.uk',
    siteName: 'Orhan London Tailoring',
    title: 'Orhan London Tailoring | Master Bespoke Tailor Shoreditch',
    description:
      'Master bespoke tailor in Shoreditch. Previously dressed Princess Diana and worked for Vivienne Westwood. Bespoke suits, occasion dresses, weddingwear. All genders welcome.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Orhan London Tailoring - Master Bespoke Tailor Shoreditch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orhan London Tailoring | Master Bespoke Tailor Shoreditch',
    description:
      'Master bespoke tailor. Previously dressed Princess Diana. Bespoke suits, occasion dresses, weddingwear. All genders welcome.',
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
              '@id': 'https://orhan-london-tailoring.co.uk',
              name: 'Orhan London Tailoring',
              image: 'https://orhan-london-tailoring.co.uk/og-image.jpg',
              description:
                'Master bespoke tailor in Shoreditch. Founded by Orhan (previously worked for Vivienne Westwood, dressed Princess Diana) and Denise in 2007. Specializing in bespoke suits, occasion dresses, weddingwear, and alterations. Inclusive service for all genders.',
              url: 'https://orhan-london-tailoring.co.uk',
              telephone: '+44 20 7250 3569',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '25a Pitfield Street',
                addressLocality: 'Shoreditch',
                addressRegion: 'London',
                postalCode: 'N1 6HB',
                addressCountry: 'GB',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 51.5252,
                longitude: -0.0854,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '10:30',
                  closes: '15:00',
                },
              ],
              priceRange: 'Bespoke tailoring',
              servesCuisine: 'N/A',
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Shoreditch',
                },
                {
                  '@type': 'City',
                  name: 'Old Street',
                },
                {
                  '@type': 'City',
                  name: 'Hoxton',
                },
                {
                  '@type': 'City',
                  name: 'Hackney',
                },
                {
                  '@type': 'City',
                  name: 'London',
                },
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Bespoke Tailoring Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Bespoke Suits',
                      description:
                        'Hand-crafted bespoke suits made to measure by master tailor Orhan',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Occasion Dresses',
                      description:
                        'Custom occasion dresses and weddingwear for all genders',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Alterations',
                      description: 'Expert alterations and repairs with free consultations',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Dressmaking',
                      description: 'Custom dressmaking services',
                    },
                  },
                ],
              },
              founder: {
                '@type': 'Person',
                name: 'Orhan',
                description:
                  'Master tailor who previously worked for Vivienne Westwood and dressed Princess Diana',
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
