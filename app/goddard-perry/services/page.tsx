import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Financial Services',
  description: 'Independent financial advisory services in Croydon. Pension planning, investment management, retirement planning, wealth management, corporate employee benefits, and protection.',
};

const privateClientServices = [
  {
    id: 'pensions',
    title: 'Pension Planning',
    description: 'Whether you are saving for retirement, approaching it, or already retired, we provide expert guidance to help you make the most of your pension savings.',
    features: [
      'Workplace pension advice and auto-enrolment guidance',
      'Self-Invested Personal Pension (SIPP) management',
      'Pension consolidation — bringing old pensions together',
      'Drawdown and annuity options at retirement',
      'Final salary pension transfer analysis',
      'Pension contributions and tax relief optimisation',
    ],
  },
  {
    id: 'investments',
    title: 'Investment Management',
    description: 'We design bespoke investment portfolios aligned to your risk tolerance, goals, and timescales, drawing from the whole of market.',
    features: [
      'ISA planning — stocks & shares, cash, and Lifetime ISAs',
      'General investment accounts and portfolio management',
      'Risk-profiled fund selection',
      'Regular reviews and portfolio rebalancing',
      'Ethical and sustainable investment options',
      'Tax-efficient investment strategies',
    ],
  },
  {
    id: 'retirement',
    title: 'Retirement Planning',
    description: 'Comprehensive retirement planning to ensure you can enjoy the lifestyle you want when you stop working.',
    features: [
      'Retirement income projection and cash flow modelling',
      'State Pension entitlement analysis',
      'Pension freedoms — understanding your options',
      'Phased retirement strategies',
      'Later life planning and care costs',
      'Inheritance tax and estate planning',
    ],
  },
  {
    id: 'wealth',
    title: 'Wealth Management',
    description: 'Holistic financial planning that brings together your investments, pensions, tax position, and protection needs into one cohesive strategy.',
    features: [
      'Comprehensive financial health check',
      'Capital gains tax planning',
      'Inheritance tax mitigation',
      'Trust planning and administration',
      'Income planning and cash flow management',
      'Annual financial reviews',
    ],
  },
  {
    id: 'protection',
    title: 'Protection & Insurance',
    description: 'Safeguard your family and your income with the right protection products, sourced independently from across the market.',
    features: [
      'Life assurance — term, whole of life, and family income benefit',
      'Critical illness cover',
      'Income protection insurance',
      'Private medical insurance',
      'Mortgage protection',
      'Key person insurance for businesses',
    ],
  },
];

const corporateServices = [
  'Group pension schemes and auto-enrolment compliance',
  'Group life assurance (death in service)',
  'Group income protection',
  'Group private medical insurance',
  'Employee financial wellbeing programmes',
  'Salary sacrifice arrangements',
  'Executive pension planning',
  'Shareholder protection',
  'Key person insurance',
  'Relevant life policies',
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f2b46] to-[#1a3c5e] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Independent, whole-of-market financial advice for individuals and businesses.
              From your first savings to retirement and beyond, we help you make informed decisions
              about your financial future.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-[#c4952b] text-white py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-center text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              FCA Regulated
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Independent &amp; Impartial
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Whole of Market Access
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Free Initial Consultation
            </span>
          </div>
        </div>
      </section>

      {/* Private Client Services */}
      {privateClientServices.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 scroll-mt-20 ${index % 2 === 0 ? '' : 'bg-gray-50'}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#0f2b46] rounded-lg p-3">
                <svg className="w-8 h-8 text-[#c4952b]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#0f2b46]">{service.title}</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl">{service.description}</p>

            <div className="grid md:grid-cols-2 gap-4">
              {service.features.map((feature, fIndex) => (
                <div key={fIndex} className={`flex items-start gap-3 p-4 rounded-lg ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <svg className="w-5 h-5 text-[#c4952b] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Corporate Services */}
      <section id="corporate" className="py-20 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-[#c4952b] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2b46] mb-6">
              Corporate Employee Benefits
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe the best employee benefit solutions include products which are complementary
              to each other and provide maximum value and efficiency for both employer and employee.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {corporateServices.map((service, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <svg className="w-5 h-5 text-[#c4952b] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0f2b46] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Where to Start?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a free, no-obligation consultation and we&apos;ll help you understand your options.
            Independent advice means we work for you, not for any product provider.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/goddard-perry/contact"
              className="bg-[#c4952b] hover:bg-[#b3862a] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Book Free Consultation
            </Link>
            <a
              href="tel:02086033700"
              className="border-2 border-white hover:bg-white hover:text-[#0f2b46] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call: 020 8603 3700
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
