import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Complete Employment Solicitors | UK Employment Law Specialists',
    template: '%s | Complete Employment Solicitors',
  },
  description:
    'Complete Employment Solicitors - 100% employment law focused firm. Expert tribunal representation, settlement agreements, unfair dismissal claims. UK-wide coverage with Sheffield base. All solicitors are employment law specialists.',
  keywords: [
    'employment solicitors UK',
    'employment law specialists',
    'tribunal representation',
    'settlement agreements',
    'unfair dismissal solicitors',
    'discrimination claims',
    'employment lawyers Sheffield',
    'redundancy advice',
    'TUPE solicitors',
    'employment contracts',
    'Complete Employment Solicitors',
    'employment tribunal UK',
  ],
  authors: [{ name: 'Complete Employment Solicitors' }],
  creator: 'Complete Employment Solicitors',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://completeemploymentsolicitors.com',
    siteName: 'Complete Employment Solicitors',
    title: 'Complete Employment Solicitors | UK Employment Law Specialists',
    description:
      '100% employment law focused. Expert tribunal representation, settlement agreements & unfair dismissal claims. UK-wide coverage.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Complete Employment Solicitors - Employment Law Specialists',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Employment Solicitors | UK Employment Law Specialists',
    description:
      '100% employment law focused. Expert tribunal representation & settlement agreements.',
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
              name: 'Complete Employment Solicitors',
              description:
                '100% employment law focused firm. All our solicitors are employment law specialists providing expert tribunal representation, settlement agreements, and unfair dismissal claims across the UK.',
              url: 'https://completeemploymentsolicitors.com',
              telephone: '+44 114 275 6368',
              email: 'info@completeemploymentsolicitors.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Sheffield',
                addressCountry: 'GB',
              },
              areaServed: [
                {
                  '@type': 'Country',
                  name: 'United Kingdom',
                },
              ],
              priceRange: 'Competitive rates',
              knowsAbout: [
                'Employment Law',
                'Employment Tribunal Representation',
                'Settlement Agreements',
                'Unfair Dismissal',
                'Discrimination Claims',
                'Redundancy',
                'TUPE',
                'Employment Contracts',
                'Constructive Dismissal',
                'Whistleblowing',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Employment Law Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Employment Tribunal Representation',
                      description:
                        'Expert representation at employment tribunals for unfair dismissal, discrimination, and other claims',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Settlement Agreements',
                      description:
                        'Professional advice and negotiation on settlement agreements and compromise agreements',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Unfair Dismissal Claims',
                      description:
                        'Specialist representation for unfair dismissal and wrongful dismissal claims',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Discrimination Claims',
                      description:
                        'Expert support for discrimination claims including age, disability, race, sex, and religion',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Redundancy & TUPE',
                      description:
                        'Advice on redundancy processes, unfair selection, and TUPE transfers',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Employment Contracts',
                      description:
                        'Review and advice on employment contracts, restrictive covenants, and terms',
                    },
                  },
                ],
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '156',
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
