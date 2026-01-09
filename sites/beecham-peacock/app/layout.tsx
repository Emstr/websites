import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Beecham Peacock | Compassionate Family Law Solicitors - Newcastle',
    template: '%s | Beecham Peacock',
  },
  description:
    'Beecham Peacock - Compassionate family law solicitors in Newcastle. Expert legal support for divorce, child care, domestic violence, and prenuptial agreements. Legal aid available. Complete family law service covering all your needs.',
  keywords: [
    'family law Newcastle',
    'divorce solicitors Newcastle',
    'child care lawyers Newcastle',
    'domestic violence solicitors',
    'prenuptial agreements Newcastle',
    'legal aid family law',
    'Newcastle solicitors',
    'family solicitors North East',
    'divorce lawyers Newcastle',
    'custody lawyers Newcastle',
    'compassionate family law',
  ],
  authors: [{ name: 'Beecham Peacock' }],
  creator: 'Beecham Peacock',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://beechampeacock.co.uk',
    siteName: 'Beecham Peacock',
    title: 'Beecham Peacock | Compassionate Family Law Solicitors - Newcastle',
    description:
      'Expert family law solicitors in Newcastle. Legal aid available. Specialising in divorce, child care, domestic violence, and prenuptial agreements.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Beecham Peacock - Compassionate Family Law Solicitors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beecham Peacock | Compassionate Family Law Solicitors - Newcastle',
    description:
      'Expert family law solicitors in Newcastle. Legal aid available. Complete family law service.',
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
              '@id': 'https://beechampeacock.co.uk',
              name: 'Beecham Peacock',
              description:
                'Compassionate family law solicitors in Newcastle. Legal aid available. Expert support for divorce, child care, domestic violence, and prenuptial agreements.',
              url: 'https://beechampeacock.co.uk',
              telephone: '+44 191 232 5300',
              email: 'info@beechampeacock.co.uk',
              priceRange: '££',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Newcastle',
                addressRegion: 'North East England',
                addressCountry: 'GB',
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Newcastle',
                },
                {
                  '@type': 'State',
                  name: 'North East England',
                },
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Family Law Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Divorce',
                      description: 'Expert divorce solicitors providing compassionate support throughout the divorce process',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Child Care',
                      description: 'Child custody and care arrangements, always prioritising children\'s welfare',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Domestic Violence',
                      description: 'Urgent support and protection for victims of domestic violence',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Prenuptial Agreements',
                      description: 'Expert prenuptial and postnuptial agreements',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Legal Aid',
                      description: 'Legal aid available for eligible clients',
                    },
                  },
                ],
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '17:30',
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
