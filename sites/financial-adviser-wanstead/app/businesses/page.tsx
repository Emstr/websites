import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Services | Financial Adviser Wanstead',
  description: 'Notarial services for businesses including corporate documentation, commercial contracts, powers of attorney, apostille and legalisation services in London.',
};

const corporateServices = [
  'Notarising the execution of Powers of Attorney on behalf of a company, LLP or other trading medium',
  'Certificates of Incorporation and corporate bylaws for UK and foreign entities',
  'Company Certificates of Good Standing',
  'Certified copies of company resolutions, minutes, and reports',
  'Officer identity certification for Directors and Company Secretaries',
];

const commercialServices = [
  'Notarising the execution of Commercial Contracts',
  'Commercial mortgages for international financing',
  'Corporate bank account and branch office authentication documents',
  'Share issue certification',
];

const legalServices = [
  'International Affidavits, Statutory Declarations, Sworn Statements & Depositions',
  'Property transaction documentation (transfers, purchases, sales)',
];

const ipServices = [
  'Certificates to authenticate Intellectual Property Rights',
  'Copyright infringement statements',
  'Trademark assignments and registration',
];

export default function BusinessesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Business Services
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive financial advice for businesses of all sizes. From corporate documentation
              to international contracts, I provide efficient and professional authentication services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Corporate Documentation */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#0f172a] rounded-lg p-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[#0f172a]">Corporate Documentation</h2>
              </div>
              <ul className="space-y-4">
                {corporateServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#f97316] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Commercial & Financial */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#0f172a] rounded-lg p-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[#0f172a]">Commercial & Financial</h2>
              </div>
              <ul className="space-y-4">
                {commercialServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#f97316] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Declarations */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#0f172a] rounded-lg p-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[#0f172a]">Legal Declarations</h2>
              </div>
              <ul className="space-y-4">
                {legalServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#f97316] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#0f172a] rounded-lg p-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[#0f172a]">Intellectual Property</h2>
              </div>
              <ul className="space-y-4">
                {ipServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#f97316] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Apostille Section */}
      <section id="apostille" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-[#f97316] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-6">
              Apostille & Legalisation Service
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I provide a complete apostille and legalisation service for all business documents
              that need to be used abroad. This includes arranging for documents to be legalised
              at the Foreign, Commonwealth & Development Office and at relevant embassies and consulates.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you need documents for international business transactions, opening overseas
              offices, or any other purpose requiring authentication for use abroad, I can assist
              with the entire process.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Other Documents for Abroad</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  In addition to the services listed above, I can notarise any other documents
                  that require a financial adviser stamp for use abroad. If you have specific
                  requirements not listed here, please get in touch to discuss your needs.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I can also arrange home or business visits for your convenience, available
                  for an additional fee, including evening and weekend appointments when necessary.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Link
                  href="/quote"
                  className="bg-[#f97316] hover:bg-[#ea580c] px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
                >
                  Get Instant Quote
                </Link>
                <a
                  href="tel:02089895300"
                  className="border-2 border-white hover:bg-white hover:text-[#0f172a] px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
                >
                  Call: 020 8989 5300
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
