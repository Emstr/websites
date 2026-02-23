import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Services | Pensions, Mortgages, Protection & Wealth Management",
  description:
    "Comprehensive whole-of-market financial advice including pension transfers, retirement planning, mortgages, life assurance, health insurance, wealth management and corporate pensions from Independent Financial Solutions in Preston.",
  openGraph: {
    title: "Financial Services | Independent Financial Solutions",
    description:
      "Whole-of-market independent financial advice from FCA regulated advisers. Pension transfers, retirement planning, mortgages, protection and corporate pensions in Preston.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "pension-transfers",
      title: "Pension Transfers",
      subtitle: "Make Informed Decisions About Your Pension",
      description:
        "Pension transfers can be complex, and getting the right advice is critical. Our experienced consultants will analyse your existing pension arrangements and help you understand whether a transfer is in your best interest. We provide clear, jargon-free advice with access to the whole of the market.",
      features: [
        "Pension transfer value analysis",
        "Defined benefit to defined contribution transfers",
        "Pension consolidation advice",
        "SIPP (Self-Invested Personal Pension) guidance",
        "Pension tax relief optimisation",
        "Safeguarded benefits assessment",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "retirement-planning",
      title: "Retirement Planning",
      subtitle: "Plan for the Retirement You Deserve",
      description:
        "Whether retirement is years away or just around the corner, proper planning is essential. We help you build a comprehensive retirement strategy that provides the income you need, when you need it, in the most tax-efficient way possible.",
      features: [
        "Retirement income planning and drawdown strategies",
        "Annuity advice and comparison",
        "State pension planning and forecasting",
        "Tax-efficient withdrawal strategies",
        "Pension freedom options and guidance",
        "Phased retirement planning",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "mortgages",
      title: "Mortgages",
      subtitle: "Find Your Best Rate",
      description:
        "Our independent mortgage advice gives you access to the whole of the market, helping you find the most suitable mortgage at the best rate. Whether you're a first-time buyer, moving home, or remortgaging, our consultants will guide you through the process.",
      features: [
        "First-time buyer mortgage advice",
        "Remortgage and product transfer guidance",
        "Buy-to-let mortgage advice",
        "Equity release and lifetime mortgages",
        "Mortgage protection advice",
        "Help to Buy and shared ownership guidance",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: "life-assurance",
      title: "Life Assurance & Health Insurance",
      subtitle: "Protect What Matters Most",
      description:
        "Protection planning ensures your loved ones are financially secure, whatever life brings. We help you understand your protection needs and find the right cover at the right price, from life assurance to private health insurance.",
      features: [
        "Life assurance and term life cover",
        "Critical illness protection",
        "Private health insurance",
        "Income protection insurance",
        "Family income benefit",
        "Relevant life policies for business owners",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: "wealth-management",
      title: "Wealth Management & Savings",
      subtitle: "Grow Your Wealth Strategically",
      description:
        "Our wealth management and savings advice is designed to help you build and grow your assets in line with your financial goals and risk tolerance. As whole-of-market advisers, we have access to the widest range of investment and savings options.",
      features: [
        "Personalised portfolio construction based on your goals",
        "Risk profiling and ongoing risk management",
        "ISA and investment account management",
        "Tax-efficient savings strategies",
        "Tax reduction planning",
        "Regular portfolio reviews and rebalancing",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      id: "corporate-pensions",
      title: "Corporate Workplace Pensions & Employee Benefits",
      subtitle: "Solutions for Your Business",
      description:
        "We help businesses of all sizes set up and manage workplace pension schemes and employee benefit packages. From auto-enrolment compliance to bespoke corporate pension arrangements, we provide comprehensive support for employers across Lancashire.",
      features: [
        "Workplace pension scheme setup and management",
        "Auto-enrolment compliance",
        "Employee benefit package design",
        "Group life and income protection schemes",
        "Corporate health insurance",
        "Employee financial education and guidance",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Whole-of-Market Financial Advice
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From pension transfers to corporate workplace pensions, our experienced
              team provides independent financial advice tailored to your unique
              circumstances and aspirations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Expert Independent Advice
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As independent financial advisers, we have access to the whole of the
              market, allowing us to find the best solutions for your individual needs.
              All our advice is regulated by the FCA, and we have been serving clients
              in Preston and Lancashire since 2001.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-accent font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/ifs-preston/contact" className="btn-accent">
                    Discuss Your Needs
                  </Link>
                </div>
                <div
                  className={`bg-gray-50 p-8 lg:p-12 rounded-sm ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-sm flex items-center justify-center">
                    <div className="text-white opacity-20 scale-150">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              How We Work With You
            </h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                1
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Initial Consultation
              </h3>
              <p className="text-gray-600">
                We meet to understand your financial situation, goals, and concerns.
                This meeting is free and without obligation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                2
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Research &amp; Analysis</h3>
              <p className="text-gray-600">
                We analyse your situation in detail and research the best options from
                across the whole of the market.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                3
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Recommendations</h3>
              <p className="text-gray-600">
                We present our recommendations in clear, understandable terms, explaining
                why each option suits your needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                4
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                We provide regular reviews and adapt your plan as your life and
                circumstances evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a complimentary consultation to discuss your financial goals and how
            our experienced team can help you achieve them.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/ifs-preston/contact" className="btn-accent">
              Book Free Consultation
            </Link>
            <a href="tel:01772860760" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Call 01772 860 760
            </a>
          </div>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> Independent Financial Solutions
              is authorised and regulated by the Financial Conduct Authority. The
              value of investments can go down as well as up, and you may get back
              less than you invested. Past performance is not a reliable indicator
              of future results. Tax treatment depends on individual circumstances
              and may change in the future. Your home may be repossessed if you do
              not keep up repayments on your mortgage.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
