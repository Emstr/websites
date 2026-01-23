import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notary Services',
  description: 'Professional notary public services in Stamford Hill, London. Business and individual document authentication, apostille and legalisation services.',
};

const businessServices = [
  'Notarising the execution of Powers of Attorney on behalf of a company, LLP or other trading medium',
  'Certificates of Incorporation and corporate bylaws for UK and foreign entities',
  'Company Certificates of Good Standing',
  'Certified copies of company resolutions, minutes, and reports',
  'Notarising the execution of Commercial Contracts',
  'Commercial mortgages for international financing',
  'Corporate bank account and branch office authentication documents',
  'Share issue certification',
  'International Affidavits, Statutory Declarations, Sworn Statements & Depositions',
  'Certificates to authenticate Intellectual Property Rights',
];

const individualServices = [
  'Copies of passports for example to open a bank account',
  'Certified copies of academic credentials and other documents',
  'Lost document replacements (passports, share certificates, etc.)',
  'Power of attorney setup',
  'Statutory declarations made before a notary public',
  'Single status declarations for marriage purposes',
  'Oaths and affirmations',
  'Change of name deeds',
  'Permission to let one parent travel with children',
  'Immigration sponsorship forms',
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2c3e50] to-[#1a252f] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive notarial services for businesses and individuals. From corporate documentation
              to personal certifications, we provide professional authentication services.
            </p>
          </div>
        </div>
      </section>

      {/* Business Services */}
      <section id="business" className="py-20 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-[#2c3e50] rounded-lg p-3">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[#2c3e50]">Business Services</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {businessServices.map((service, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <svg className="w-5 h-5 text-[#27ae60] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section id="individual" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-[#2c3e50] rounded-lg p-3">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[#2c3e50]">Individual Services</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {individualServices.map((service, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <svg className="w-5 h-5 text-[#27ae60] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apostille Section */}
      <section id="apostille" className="py-20 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-[#27ae60] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2c3e50] mb-6">
              Apostille & Legalisation Service
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We provide a complete apostille and legalisation service for all documents
              that need to be used abroad. This includes arranging for documents to be legalised
              at the Foreign, Commonwealth & Development Office and at relevant embassies and consulates.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you need documents for international business transactions, opening overseas
              offices, or any other purpose requiring authentication for use abroad, we can assist
              with the entire process.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2c3e50] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Service Not Listed?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your specific requirements. We can notarise most documents
            that require authentication for use in the UK or abroad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-[#27ae60] hover:bg-[#219a52] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Get Instant Quote
            </Link>
            <a
              href="tel:02088005000"
              className="border-2 border-white hover:bg-white hover:text-[#2c3e50] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call: 020 8800 5000
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
