import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Leases',
  description:
    'Fixed-fee commercial lease services £1,000-£1,500. Expert legal support for business tenants and landlords in Wembley. Transparent pricing, no hidden costs.',
};

const services = [
  {
    title: 'New Lease Agreements',
    description: 'Drafting and negotiating new commercial lease agreements for retail, office, and industrial properties.',
    fee: '£1,000 - £1,500',
    includes: [
      'Review of heads of terms',
      'Lease negotiation',
      'Legal advice on terms',
      'Completion of lease',
      'Registration if required',
    ],
  },
  {
    title: 'Lease Renewals',
    description: 'Assistance with lease renewal negotiations and Landlord and Tenant Act 1954 procedures.',
    fee: 'From £800',
    includes: [
      'Section 25/26 notices',
      'Renewal negotiations',
      'Court applications if needed',
      'New lease completion',
      'Rent review advice',
    ],
  },
  {
    title: 'Assignment & Subletting',
    description: 'Transferring your lease to a new tenant or subletting part of your commercial premises.',
    fee: 'From £900',
    includes: [
      'Landlord consent applications',
      'Deed of assignment drafting',
      'Sublease agreements',
      'License to assign',
      'AGA considerations',
    ],
  },
  {
    title: 'Lease Variations',
    description: 'Negotiating changes to existing lease terms to suit changing business needs.',
    fee: 'From £600',
    includes: [
      'Variation deed drafting',
      'Negotiation with landlord',
      'Legal advice on implications',
      'Completion of variation',
      'Registration if required',
    ],
  },
];

const benefits = [
  {
    title: 'Fixed Fees',
    description: 'Know exactly what you\'ll pay from the outset. No hourly rates or unexpected bills.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Commercial Focus',
    description: 'Dedicated expertise in commercial property law and lease negotiations.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Fast Turnaround',
    description: 'Efficient service to meet your business deadlines and completion dates.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Plain English',
    description: 'Commercial lease jargon explained clearly so you understand every clause.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
];

const keyTerms = [
  {
    term: 'Rent & Rent Review',
    description: 'How much you\'ll pay and how it might increase over time.',
  },
  {
    term: 'Repair Obligations',
    description: 'Who\'s responsible for maintaining the property - crucial for cost planning.',
  },
  {
    term: 'Service Charges',
    description: 'Additional costs for shared services and building maintenance.',
  },
  {
    term: 'Break Clauses',
    description: 'Options to exit the lease early - essential flexibility for businesses.',
  },
  {
    term: 'Permitted Use',
    description: 'What business activities you\'re allowed to conduct from the premises.',
  },
  {
    term: 'Alienation',
    description: 'Your rights to assign, sublet, or share occupation - important for future flexibility.',
  },
];

export default function CommercialLeasesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#134e4a] to-[#0f766e] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#f59e0b] text-[#134e4a] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Fixed Fees £1,000 - £1,500
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Commercial Lease Services
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Expert legal support for commercial leases with transparent fixed-fee pricing.
              No hidden costs, no hourly rates, no surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[#f59e0b] hover:bg-[#d97706] px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-[#134e4a] text-center"
              >
                Book £60 Consultation
              </Link>
              <Link
                href="/fees"
                className="border-2 border-white hover:bg-white hover:text-[#134e4a] px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                View All Fees
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Banner */}
      <section className="bg-[#f59e0b] text-[#134e4a] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Transparent Fixed-Fee Pricing</h2>
            <p className="text-lg">
              Commercial lease agreements from <span className="font-bold text-2xl">£1,000 to £1,500</span>
            </p>
            <p className="text-sm mt-2">Includes all legal work from instruction to completion</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#134e4a] mb-4">
              Our Commercial Lease Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fixed-fee legal services for business tenants and landlords
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border-2 border-transparent hover:border-[#f59e0b]"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#134e4a]">
                    {service.title}
                  </h3>
                  <div className="bg-[#f59e0b] text-[#134e4a] px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap ml-4">
                    {service.fee}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-[#134e4a] mb-3">Includes:</p>
                  <ul className="space-y-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-teal-50 border border-teal-200 rounded-xl p-6 text-center">
            <p className="text-gray-700">
              <span className="font-semibold text-[#134e4a]">Note:</span> Fees exclude disbursements (search fees, registration fees, etc.) which will be quoted separately.
              All fees are subject to VAT where applicable.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#134e4a] mb-4">
              Why Choose Us for Your Commercial Lease?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert commercial property law with business-friendly service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#f59e0b] text-[#134e4a] rounded-lg mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#134e4a] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Terms */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#134e4a] mb-6">
                Key Commercial Lease Terms We Review
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We carefully review every aspect of your commercial lease to protect your interests
                and ensure you understand your obligations.
              </p>
              <div className="space-y-4">
                {keyTerms.map((item) => (
                  <div key={item.term} className="bg-white rounded-lg p-5 shadow-sm">
                    <h3 className="font-semibold text-[#134e4a] mb-2">{item.term}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#134e4a] to-[#0f766e] rounded-2xl p-8 text-white lg:sticky lg:top-24">
              <h3 className="text-2xl font-semibold mb-6">The Process</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#f59e0b] text-[#134e4a] rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Initial Consultation</h4>
                    <p className="text-gray-200 text-sm">Book a £60 consultation to discuss your requirements and receive a fixed-fee quote.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#f59e0b] text-[#134e4a] rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Document Review</h4>
                    <p className="text-gray-200 text-sm">We review heads of terms and draft lease, highlighting key issues and risks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#f59e0b] text-[#134e4a] rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Negotiation</h4>
                    <p className="text-gray-200 text-sm">We negotiate improvements to the lease terms on your behalf.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#f59e0b] text-[#134e4a] rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Completion</h4>
                    <p className="text-gray-200 text-sm">Final lease executed and registered if required. You receive your completed lease.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-teal-600">
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-white">Typical timescale:</span> 2-4 weeks from instruction to completion,
                  depending on negotiations and landlord responsiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-amber-50 border-y border-amber-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#134e4a] mb-4">
              Additional Commercial Property Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#f59e0b] rounded-full mb-3">
                <svg className="w-6 h-6 text-[#134e4a]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#134e4a] mb-2">Lease Disputes</h3>
              <p className="text-gray-600 text-sm">Advice on dilapidations, rent arrears, and lease breaches</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#f59e0b] rounded-full mb-3">
                <svg className="w-6 h-6 text-[#134e4a]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#134e4a] mb-2">Rent Reviews</h3>
              <p className="text-gray-600 text-sm">Representation in rent review negotiations and disputes</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#f59e0b] rounded-full mb-3">
                <svg className="w-6 h-6 text-[#134e4a]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#134e4a] mb-2">Lease Protection</h3>
              <p className="text-gray-600 text-sm">Section 25 & 26 notices and security of tenure advice</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#134e4a] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Get a Fixed-Fee Quote Today
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a £60 consultation to discuss your commercial lease and receive a transparent fixed-fee quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#f59e0b] hover:bg-[#d97706] px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-[#134e4a]"
            >
              Book Consultation
            </Link>
            <a
              href="tel:02034173700"
              className="border-2 border-white hover:bg-white hover:text-[#134e4a] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call: 020 3417 3700
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
