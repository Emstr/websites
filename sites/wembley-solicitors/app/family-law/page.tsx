import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Family Law Services',
  description:
    'Expert family law solicitors in Wembley. Divorce, child custody, financial settlements. Sensitive support with transparent fixed fees. Book £60 consultation.',
};

const services = [
  {
    title: 'Divorce',
    description: 'Professional guidance through the divorce process, from initial filing to decree absolute.',
    items: [
      'Uncontested divorce applications',
      'Contested divorce proceedings',
      'Financial remedy orders',
      'Consent orders',
      'Mediation support',
    ],
  },
  {
    title: 'Children Matters',
    description: 'Expert advice on all matters relating to children, prioritizing their best interests.',
    items: [
      'Child arrangement orders',
      'Parental responsibility',
      'Contact disputes',
      'Prohibited steps orders',
      'Specific issue orders',
    ],
  },
  {
    title: 'Financial Settlements',
    description: 'Comprehensive support for dividing assets and reaching fair financial settlements.',
    items: [
      'Division of matrimonial assets',
      'Pension sharing orders',
      'Spousal maintenance',
      'Lump sum payments',
      'Property transfer orders',
    ],
  },
  {
    title: 'Cohabitation Disputes',
    description: 'Legal support for unmarried couples facing separation and property disputes.',
    items: [
      'Cohabitation agreements',
      'Property ownership disputes',
      'TOLATA claims',
      'Trusts of land',
      'Children arrangements',
    ],
  },
];

const approach = [
  {
    title: 'Sensitive Support',
    description: 'We understand family matters are personal. We provide compassionate, non-judgmental advice.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: 'Clear Communication',
    description: 'We explain legal processes in plain English and keep you informed at every stage.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    title: 'Cost-Effective Solutions',
    description: 'Fixed fees where possible, with transparent pricing and no hidden costs.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Child-Focused',
    description: 'In all matters involving children, their welfare is our primary consideration.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
];

export default function FamilyLawPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#134e4a] to-[#0f766e] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#f59e0b] text-[#134e4a] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Sensitive & Professional
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Family Law Services
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Compassionate legal support for divorce, children matters, and financial settlements.
              Fixed-fee options available with transparent pricing.
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
                View Fees
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#134e4a] mb-4">
              Our Family Law Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional legal support through life's challenging transitions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f59e0b] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#134e4a]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#134e4a] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#134e4a] mb-4">
              Our Approach to Family Law
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Combining legal expertise with understanding and compassion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item) => (
              <div key={item.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#f59e0b] text-[#134e4a] rounded-lg mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#134e4a] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divorce Process */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#134e4a] mb-6">
                Understanding the Divorce Process
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We guide you through every step of the divorce process, making it as straightforward
                and stress-free as possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#134e4a] text-white rounded-full flex items-center justify-center font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#134e4a] mb-1">Initial Consultation</h3>
                    <p className="text-gray-600">Discuss your situation and understand your options</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#134e4a] text-white rounded-full flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#134e4a] mb-1">Divorce Application</h3>
                    <p className="text-gray-600">Prepare and file the divorce petition online</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#134e4a] text-white rounded-full flex items-center justify-center font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#134e4a] mb-1">Financial Settlement</h3>
                    <p className="text-gray-600">Negotiate and formalize division of assets</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#134e4a] text-white rounded-full flex items-center justify-center font-semibold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#134e4a] mb-1">Children Arrangements</h3>
                    <p className="text-gray-600">Agree custody and contact arrangements if applicable</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#134e4a] text-white rounded-full flex items-center justify-center font-semibold">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#134e4a] mb-1">Decree Absolute</h3>
                    <p className="text-gray-600">Obtain final divorce decree and close the case</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#134e4a] to-[#0f766e] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Common Family Law Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#f59e0b] mb-2">How long does divorce take?</h4>
                  <p className="text-gray-200 text-sm">Typically 6-9 months for uncontested cases, longer if financial or children matters are contested.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#f59e0b] mb-2">What are the costs?</h4>
                  <p className="text-gray-200 text-sm">We offer fixed fees for straightforward cases. Book a £60 consultation for a detailed quote.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#f59e0b] mb-2">Do I need to go to court?</h4>
                  <p className="text-gray-200 text-sm">Many cases are resolved through negotiation. Court is only necessary if agreement cannot be reached.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#f59e0b] mb-2">How are assets divided?</h4>
                  <p className="text-gray-200 text-sm">Courts aim for fairness considering factors like income, needs, contributions, and children's welfare.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#f59e0b] mb-2">What about our children?</h4>
                  <p className="text-gray-200 text-sm">Children's welfare is paramount. We help you reach arrangements that prioritize their best interests.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mediation Info */}
      <section className="py-16 bg-amber-50 border-y border-amber-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f59e0b] rounded-full mb-6">
              <svg className="w-8 h-8 text-[#134e4a]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[#134e4a] mb-4">
              Family Mediation
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Mediation can be a cost-effective alternative to court proceedings. We can refer you to
              qualified family mediators and provide legal support throughout the mediation process.
            </p>
            <p className="text-gray-600">
              Mediation is often faster, less expensive, and less stressful than going to court,
              while still ensuring both parties reach a fair agreement.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#134e4a] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Get Expert Family Law Support
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a £60 consultation to discuss your family law matter in a sensitive, confidential environment.
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
