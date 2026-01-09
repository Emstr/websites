import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fee Information',
  description:
    'Transparent pricing for legal services at Archstone Solicitors. Fixed fees, hourly rates, and no win no fee options available. No hidden costs.',
};

const feeStructures = [
  {
    service: 'Immigration Law',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    pricing: [
      { item: 'Visa application consultation', price: 'From £150' },
      { item: 'Spouse/Partner visa', price: 'From £1,200 + VAT' },
      { item: 'Work visa (Skilled Worker)', price: 'From £800 + VAT' },
      { item: 'Citizenship application', price: 'From £1,500 + VAT' },
      { item: 'Appeal representation', price: 'From £2,000 + VAT' },
    ],
    note: 'Home Office fees are additional. Complex cases may require higher fees - we provide detailed quotes.',
  },
  {
    service: 'Conveyancing',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    pricing: [
      { item: 'Property purchase (up to £250k)', price: 'From £695 + VAT' },
      { item: 'Property purchase (£250k-£500k)', price: 'From £895 + VAT' },
      { item: 'Property sale', price: 'From £595 + VAT' },
      { item: 'Remortgage', price: 'From £395 + VAT' },
      { item: 'Transfer of equity', price: 'From £495 + VAT' },
    ],
    note: 'Disbursements (searches, Land Registry fees) are additional. Fixed fee packages available.',
  },
  {
    service: 'Family Law',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    pricing: [
      { item: 'Initial consultation', price: 'FREE' },
      { item: 'Uncontested divorce', price: 'From £599 + VAT' },
      { item: 'Financial settlement', price: 'From £1,500 + VAT' },
      { item: 'Child arrangements order', price: 'From £1,200 + VAT' },
      { item: 'Hourly rate (complex cases)', price: '£200-£300 + VAT' },
    ],
    note: 'Court fees are additional. We offer payment plans for family law matters.',
  },
  {
    service: 'Civil Litigation',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    pricing: [
      { item: 'Initial assessment', price: 'FREE' },
      { item: 'Pre-action letter', price: 'From £350 + VAT' },
      { item: 'Small claims (up to £10k)', price: 'From £1,000 + VAT' },
      { item: 'Fast track claims', price: 'From £3,000 + VAT' },
      { item: 'Hourly rate', price: '£200-£300 + VAT' },
    ],
    note: 'Pricing depends on case complexity. We can discuss conditional fee arrangements.',
  },
  {
    service: 'Personal Injury',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    pricing: [
      { item: 'Initial consultation', price: 'FREE' },
      { item: 'No Win, No Fee', price: '0% upfront' },
      { item: 'Success fee', price: 'Up to 25% of damages' },
      { item: 'Road traffic accidents', price: 'No Win, No Fee' },
      { item: 'Workplace accidents', price: 'No Win, No Fee' },
    ],
    note: 'We only get paid if you win. No financial risk to you. After the Event insurance available.',
  },
  {
    service: 'Company & Commercial',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    pricing: [
      { item: 'Company formation', price: 'From £299 + VAT' },
      { item: 'Commercial contract review', price: 'From £350 + VAT' },
      { item: 'Shareholder agreement', price: 'From £800 + VAT' },
      { item: 'Employment contracts', price: 'From £250 + VAT' },
      { item: 'Hourly rate', price: '£200-£300 + VAT' },
    ],
    note: 'We offer retainer packages for ongoing business legal support at discounted rates.',
  },
];

export default function FeesPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transparent Fee Information
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              At Archstone Solicitors, we believe in complete transparency. We provide clear pricing upfront
              with no hidden costs, so you know exactly what to expect.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Clear Pricing</h3>
              <p className="text-gray-600">
                We provide detailed quotes before starting work. No surprises, no hidden fees.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Competitive Rates</h3>
              <p className="text-gray-600">
                High-quality legal advice at reasonable prices. We offer excellent value for money.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Flexible Payment</h3>
              <p className="text-gray-600">
                Payment plans available for certain services. No Win, No Fee for personal injury claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structures */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {feeStructures.map((structure, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {structure.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-primary">
                      {structure.service}
                    </h2>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <tbody className="divide-y divide-gray-200">
                        {structure.pricing.map((item, idx) => (
                          <tr key={idx} className="hover:bg-gray-50">
                            <td className="py-4 pr-4 text-gray-700">{item.item}</td>
                            <td className="py-4 text-right font-semibold text-gold whitespace-nowrap">
                              {item.price}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 p-4 bg-gold/5 rounded-lg border border-gold/20">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm text-gray-700">{structure.note}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Understanding Our Fees
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Fixed Fees</h3>
                <p className="text-gray-600">
                  Many of our services are offered at fixed fees, giving you certainty about costs from the start.
                  This includes most conveyancing, company formation, and straightforward immigration matters.
                </p>
              </div>
              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Hourly Rates</h3>
                <p className="text-gray-600">
                  For complex litigation or bespoke commercial work, we charge hourly rates between £200-£300 + VAT
                  depending on the seniority of the solicitor. We provide regular billing updates.
                </p>
              </div>
              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-xl font-semibold text-primary mb-2">No Win, No Fee</h3>
                <p className="text-gray-600">
                  Personal injury claims are taken on a no win, no fee basis. If we don't win your case, you don't pay
                  our legal fees. Success fees are capped at 25% of damages recovered.
                </p>
              </div>
              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Disbursements</h3>
                <p className="text-gray-600">
                  Some services require third-party payments (disbursements) such as court fees, search fees, or
                  Land Registry fees. These are additional to our fees and we always inform you of these costs upfront.
                </p>
              </div>
              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Payment Plans</h3>
                <p className="text-gray-600">
                  We understand legal costs can be significant. For family law and some other matters, we offer
                  flexible payment plans to spread the cost. Speak to us about options available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get a Free Quote
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation consultation and detailed quote for your legal matter.
            We'll explain all costs clearly before you commit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-light text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors shadow-lg"
            >
              Contact Us Today
            </Link>
            <a
              href="tel:02085348008"
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors border border-white/30"
            >
              Call 020 8534 8008
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
