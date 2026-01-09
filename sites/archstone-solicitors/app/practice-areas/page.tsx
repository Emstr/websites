import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Practice Areas',
  description:
    'Comprehensive legal services including Immigration, Conveyancing, Family Law, Litigation, Personal Injury, and Company & Commercial Law. Expert solicitors serving East London.',
};

const practiceAreas = [
  {
    id: 'immigration',
    name: 'Immigration Law',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description:
      'Expert immigration advice for individuals and businesses navigating the UK immigration system.',
    services: [
      'Visa applications (Work, Student, Family)',
      'British citizenship and naturalization',
      'Indefinite Leave to Remain (ILR)',
      'Asylum and refugee claims',
      'Appeals and administrative reviews',
      'Sponsor license applications for employers',
      'EU Settlement Scheme',
      'Human rights applications',
    ],
  },
  {
    id: 'conveyancing',
    name: 'Conveyancing',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    description:
      'Efficient and transparent property conveyancing services for buyers, sellers, and landlords.',
    services: [
      'Residential property purchase',
      'Property sales',
      'Buy-to-let investments',
      'Remortgaging',
      'Transfer of equity',
      'Lease extensions',
      'New build properties',
      'Help to Buy schemes',
    ],
  },
  {
    id: 'family',
    name: 'Family Law',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    description:
      'Compassionate and effective legal support during difficult family situations.',
    services: [
      'Divorce and dissolution',
      'Child custody and contact arrangements',
      'Financial settlements',
      'Separation agreements',
      'Domestic violence injunctions',
      'Pre-nuptial and post-nuptial agreements',
      'Child maintenance',
      'Cohabitation agreements',
    ],
  },
  {
    id: 'litigation',
    name: 'Civil Litigation',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    description:
      'Strategic representation in civil disputes and commercial litigation matters.',
    services: [
      'Contract disputes',
      'Debt recovery',
      'Property disputes',
      'Professional negligence claims',
      'Employment tribunals',
      'Landlord and tenant disputes',
      'Breach of contract',
      'Mediation and alternative dispute resolution',
    ],
  },
  {
    id: 'personal-injury',
    name: 'Personal Injury',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    description:
      'No win, no fee personal injury claims to secure the compensation you deserve.',
    services: [
      'Road traffic accidents',
      'Workplace accidents',
      'Slips, trips and falls',
      'Medical negligence',
      'Industrial disease claims',
      'Occupiers liability claims',
      'Criminal injury compensation',
      'Fatal accident claims',
    ],
  },
  {
    id: 'commercial',
    name: 'Company & Commercial Law',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description:
      'Comprehensive business law services to help your company thrive and grow.',
    services: [
      'Company formation and registration',
      'Commercial contracts',
      'Shareholder agreements',
      'Mergers and acquisitions',
      'Commercial property leases',
      'Employment contracts',
      'Business restructuring',
      'Intellectual property protection',
    ],
  },
];

export default function PracticeAreasPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Practice Areas
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Archstone Solicitors offers comprehensive legal services across multiple practice areas.
              Our experienced team is dedicated to providing expert advice and representation tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {practiceAreas.map((area, index) => (
              <div
                key={area.id}
                id={area.id}
                className="scroll-mt-20 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className={`p-8 lg:p-12 ${index % 2 === 0 ? 'lg:flex' : 'lg:flex lg:flex-row-reverse'}`}>
                  <div className={`lg:w-1/3 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {area.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-primary">
                        {area.name}
                      </h2>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                  <div className="lg:w-2/3">
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      Services Include:
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {area.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Legal Advice?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. Our experienced solicitors are ready to help you
            with your legal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-light text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors shadow-lg"
            >
              Free Consultation
            </Link>
            <Link
              href="/fees"
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors border border-white/30"
            >
              View Our Fees
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
