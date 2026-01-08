import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Notary Services',
  description:
    'Complete notary services for individuals and businesses in Camden and Central London. Powers of attorney, document certification, affidavits, legalisation, and more.',
};

const individualServices = [
  {
    title: 'Powers of Attorney',
    description:
      'Preparing and witnessing powers of attorney for use worldwide, allowing you to authorise others to act on your behalf.',
  },
  {
    title: 'Property Transactions',
    description:
      'Documentation for the purchase or sale of land and property overseas, including mortgage documents.',
  },
  {
    title: 'Estate Documentation',
    description:
      'Providing documentation concerning the estates of people who live or own property abroad.',
  },
  {
    title: 'International Wills',
    description:
      'Notarising wills for use across international borders, ensuring they are properly authenticated.',
  },
  {
    title: 'Oaths & Affidavits',
    description:
      'Administering oaths, affidavits, and statutory declarations for foreign jurisdictions.',
  },
  {
    title: 'Document Authentication',
    description:
      'Certifying copies of passports, academic qualifications, and authenticating signatures.',
  },
  {
    title: 'Immigration Documents',
    description:
      'Documentation needed for immigration and emigration purposes, including sponsorship forms.',
  },
  {
    title: 'Marriage Capacity Certificates',
    description:
      'Certifying your capacity to marry, often required when planning to marry abroad.',
  },
  {
    title: 'Residential Mortgages',
    description:
      'Notarising residential mortgage documents for properties in the UK or overseas.',
  },
  {
    title: 'Travel Authorisation',
    description:
      'Authorization documents for children travelling with one parent or guardians.',
  },
  {
    title: 'Depositions',
    description:
      'Taking evidence in England and Wales for use in foreign court proceedings.',
  },
  {
    title: 'Certified Copies',
    description:
      'Providing notarised copies of original documents when certified duplicates are required.',
  },
];

const businessServices = [
  {
    title: 'Corporate Powers of Attorney',
    description:
      'Attesting authority documents for businesses, LLPs, and other trading entities.',
  },
  {
    title: 'Company Document Authentication',
    description:
      'Authenticating and verifying corporate documents for UK or foreign companies.',
  },
  {
    title: 'Banking Documentation',
    description:
      'Documents assisting with branch office establishment and corporate account opening.',
  },
  {
    title: 'Commercial Mortgages',
    description:
      'Notarising business mortgage documents for commercial property transactions.',
  },
  {
    title: 'Bills of Exchange',
    description:
      'Presenting and noting commercial instruments for international trade.',
  },
  {
    title: 'Corporate Resolutions',
    description:
      'Certified copies of company resolutions, minutes, and board reports.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Notary Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Comprehensive notary public services for individuals and businesses.
            All documents professionally authenticated for use in the UK and abroad.
          </p>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Services for Individuals
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {individualServices.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Services */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Services for Businesses
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessServices.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legalisation Link */}
      <section className="py-16 bg-secondary text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Documents Legalised?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            We also provide apostille and embassy legalisation services for documents
            that need to be used abroad.
          </p>
          <Link
            href="/legalisation"
            className="inline-block bg-accent hover:bg-amber-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
          >
            Learn About Legalisation
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Get a Quote for Your Requirements
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Use our instant quote tool to get an estimate, or contact us directly
            to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-block bg-accent hover:bg-amber-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              Get an Instant Quote
            </Link>
            <Link
              href="/fees"
              className="inline-block bg-primary hover:bg-secondary text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              View Our Fees
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
