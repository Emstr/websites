import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Fees',
  description:
    'Transparent fixed-fee pricing for legal services. £60 consultations, commercial leases £1,000-£1,500. No hidden costs at Wembley Solicitors.',
};

const pricingTable = [
  {
    service: 'Initial Consultation',
    fee: '£60',
    description: 'In-depth consultation to discuss your case and receive expert advice',
    highlight: true,
  },
  {
    service: 'Commercial Lease (New)',
    fee: '£1,000 - £1,500',
    description: 'Complete service from review to completion, including negotiation',
    highlight: true,
  },
  {
    service: 'Commercial Lease Renewal',
    fee: 'From £800',
    description: 'Section 25/26 notices, negotiation, and new lease completion',
  },
  {
    service: 'Lease Assignment',
    fee: 'From £900',
    description: 'Assignment of lease including landlord consent and documentation',
  },
  {
    service: 'Lease Variation',
    fee: 'From £600',
    description: 'Variation deed drafting and negotiation',
  },
  {
    service: 'Uncontested Divorce',
    fee: 'From £800',
    description: 'Online divorce application for straightforward cases',
  },
  {
    service: 'Child Arrangement Order',
    fee: 'From £1,200',
    description: 'Court application for child custody and contact arrangements',
  },
  {
    service: 'Financial Settlement (Consent Order)',
    fee: 'From £600',
    description: 'Drafting and submitting consent order for agreed financial division',
  },
  {
    service: 'Immigration Advice (Initial)',
    fee: 'Free Online',
    description: 'Free initial assessment of your immigration case',
    highlight: true,
  },
  {
    service: 'Visa Application (Straightforward)',
    fee: 'From £1,000',
    description: 'Preparation and submission of visa application (excl. Home Office fees)',
  },
  {
    service: 'Immigration Appeal (First Tier)',
    fee: 'From £2,500',
    description: 'Full representation at First Tier Tribunal',
  },
  {
    service: 'British Citizenship Application',
    fee: 'From £800',
    description: 'Application preparation and submission (excl. Home Office fees)',
  },
];

const features = [
  {
    title: 'No Hidden Costs',
    description: 'Our fixed fees include all legal work. Disbursements (third-party costs) are clearly itemized separately.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Upfront Quotes',
    description: 'You\'ll know exactly what you\'re paying before we start work. No hourly rates or surprise bills.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: 'Payment Plans Available',
    description: 'For larger cases, we can arrange staged payments to spread the cost over the duration of your matter.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>
    ),
  },
  {
    title: 'VAT Included',
    description: 'All our quoted fees include VAT where applicable. What you see is what you pay.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function FeesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#134e4a] to-[#0f766e] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-[#f59e0b] text-[#134e4a] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Transparent Pricing
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Our Fees
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Clear, fixed-fee pricing with no hidden costs. Know exactly what you'll pay before we start work.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#f59e0b] hover:bg-[#d97706] px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-[#134e4a]"
            >
              Book £60 Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#134e4a] mb-4">
              Why Our Fixed-Fee Approach Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparent pricing that gives you peace of mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-[#f59e0b] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#134e4a] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#134e4a] mb-4">
              Our Standard Fees
            </h2>
            <p className="text-lg text-gray-600">
              Fixed fees for common legal services
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#134e4a] text-white">
                    <th className="px-6 py-4 text-left font-semibold">Service</th>
                    <th className="px-6 py-4 text-left font-semibold">Fee</th>
                    <th className="px-6 py-4 text-left font-semibold hidden md:table-cell">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingTable.map((item, index) => (
                    <tr
                      key={item.service}
                      className={`border-b border-gray-200 ${
                        item.highlight ? 'bg-amber-50' : index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-[#134e4a]">{item.service}</span>
                          {item.highlight && (
                            <span className="inline-block bg-[#f59e0b] text-[#134e4a] text-xs px-2 py-1 rounded-full font-semibold">
                              Popular
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-lg font-bold text-[#134e4a]">{item.fee}</span>
                      </td>
                      <td className="px-6 py-4 text-gray-600 text-sm hidden md:table-cell">
                        {item.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 bg-teal-50 border border-teal-200 rounded-xl p-6">
            <h3 className="font-semibold text-[#134e4a] mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              Important Notes
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>All fees are subject to VAT at the current rate where applicable</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Disbursements (court fees, search fees, registration fees, etc.) are charged separately at cost</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Fees shown are for standard cases; complex matters may require additional fees which will be quoted upfront</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>The £60 consultation fee is deducted from your final bill if you instruct us</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Disbursements Explained */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#134e4a] mb-6">
                Understanding Disbursements
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Disbursements are costs paid to third parties on your behalf. We always itemize
                these separately so you know exactly where your money is going.
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <h3 className="font-semibold text-[#134e4a] mb-2">Common Disbursements</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      <span>Court fees (e.g., £593 for divorce, £255 for child arrangements)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      <span>Home Office visa fees (vary by visa type, from £95 to £1,500+)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      <span>Land Registry fees (for commercial lease registration)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      <span>Search fees (property searches for commercial leases)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      <span>Expert fees (e.g., translators, medical reports)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#134e4a] to-[#0f766e] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Payment Options</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[#f59e0b] mb-2">Single Payment</h4>
                  <p className="text-gray-200 text-sm">Pay the full fee upfront and proceed with your matter immediately.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#f59e0b] mb-2">Staged Payments</h4>
                  <p className="text-gray-200 text-sm">For larger cases, we can arrange payment in stages tied to milestones in your case.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#f59e0b] mb-2">Payment Methods</h4>
                  <p className="text-gray-200 text-sm mb-3">We accept:</p>
                  <ul className="space-y-2 text-gray-200 text-sm">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Bank transfer (BACS)
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Debit card
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Credit card
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Cheque
                    </li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-teal-600">
                  <h4 className="font-semibold text-[#f59e0b] mb-2">Client Account Protection</h4>
                  <p className="text-gray-200 text-sm">All client funds are held in our regulated client account and protected by our professional indemnity insurance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Services */}
      <section className="py-16 bg-amber-50 border-y border-amber-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#134e4a] mb-6">
              Free Services We Offer
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#f59e0b] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#134e4a]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#134e4a] mb-2">Free Initial Immigration Advice</h3>
                <p className="text-gray-600 text-sm">Get free initial immigration advice online to understand your options</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#f59e0b] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#134e4a]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#134e4a] mb-2">Free Telephone Triage</h3>
                <p className="text-gray-600 text-sm">Quick phone assessment to determine if we can help with your legal issue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#134e4a] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Get a Transparent Quote Today
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a £60 consultation to discuss your matter and receive a clear, fixed-fee quote with no hidden costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#f59e0b] hover:bg-[#d97706] px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-[#134e4a]"
            >
              Book £60 Consultation
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
