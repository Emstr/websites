import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Services | Wealth Management, Pensions & Investments",
  description:
    "Comprehensive financial planning services from Chartered Financial Planners. Wealth management, pensions, investments, tax planning, estate planning, and protection in Sheffield.",
  openGraph: {
    title: "Financial Services | Hamnett Wealth Management",
    description:
      "Expert financial advice from Chartered Financial Planners. Wealth management, pensions, investments, tax planning, and estate planning in Sheffield.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "wealth-management",
      title: "Wealth Management",
      subtitle: "Holistic Financial Stewardship",
      description:
        "Our wealth management service brings together all aspects of your financial life into one cohesive strategy. As Chartered Financial Planners, we provide comprehensive, ongoing financial oversight tailored to your unique circumstances and aspirations.",
      features: [
        "Comprehensive financial planning and review",
        "Investment portfolio management",
        "Estate and succession planning",
        "Trust planning and administration",
        "Cash flow modelling and forecasting",
        "Multi-generational wealth transfer",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
    {
      id: "financial-planning",
      title: "Financial Planning",
      subtitle: "Your Roadmap to Financial Independence",
      description:
        "Our Chartered Financial Planners create detailed financial plans that map out your route to financial security. We consider every aspect of your financial life to build a comprehensive strategy that evolves with you.",
      features: [
        "Lifetime cash flow analysis and modelling",
        "Goal-based financial planning",
        "Income and expenditure analysis",
        "Risk profiling and management",
        "Regular plan reviews and adjustments",
        "Retirement readiness assessments",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      id: "pensions",
      title: "Pensions",
      subtitle: "Secure Your Retirement",
      description:
        "Whether you are just starting to save for retirement or approaching pension age, our Chartered advisers can help you make the most of your pension savings. We provide clear, jargon-free advice on all aspects of pension planning.",
      features: [
        "Pension consolidation and transfer analysis",
        "SIPP (Self-Invested Personal Pension) advice",
        "Retirement income planning and drawdown strategies",
        "Pension tax relief optimisation",
        "Final salary and defined benefit pension advice",
        "State pension planning",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "investments",
      title: "Investments",
      subtitle: "Grow Your Wealth Strategically",
      description:
        "Our investment service is designed to help you build and grow your wealth in line with your financial goals and risk tolerance. We take a comprehensive approach, considering your entire financial picture before recommending suitable investment strategies.",
      features: [
        "Personalised portfolio construction based on your goals",
        "Risk profiling and ongoing risk management",
        "Access to a wide range of investment funds and platforms",
        "Regular portfolio reviews and rebalancing",
        "ISA and investment account management",
        "Ethical and sustainable investment options",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      id: "tax-planning",
      title: "Tax Planning",
      subtitle: "Optimise Your Tax Position",
      description:
        "Effective tax planning can make a significant difference to your wealth over time. Our Chartered advisers work with you to develop strategies that legally minimise your tax burden while maximising your returns.",
      features: [
        "ISA planning and bed & ISA strategies",
        "Capital Gains Tax planning",
        "Inheritance Tax mitigation strategies",
        "VCT and EIS investment advice",
        "Income tax planning for higher earners",
        "Business owner tax planning",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "estate-planning",
      title: "Estate Planning",
      subtitle: "Protect Your Legacy",
      description:
        "Estate planning ensures your wealth passes to your loved ones as efficiently as possible. We help you structure your assets, utilise reliefs and exemptions, and create strategies to mitigate inheritance tax.",
      features: [
        "Inheritance Tax planning and mitigation",
        "Will and trust planning advice",
        "Power of Attorney guidance",
        "Business succession planning",
        "Gift planning and exemption utilisation",
        "Family wealth transfer strategies",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: "protection",
      title: "Protection",
      subtitle: "Safeguard What Matters Most",
      description:
        "Protection planning ensures your loved ones are financially secure, whatever life brings. We help you understand your protection needs and find the right cover at the right price.",
      features: [
        "Life assurance and term life cover",
        "Critical illness protection",
        "Income protection insurance",
        "Family income benefit",
        "Relevant life policies for business owners",
        "Mortgage protection",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
              Comprehensive Financial Solutions
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              As Chartered Financial Planners, we provide expert financial advice
              across the full spectrum of wealth management, tailored to your
              unique circumstances and aspirations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Chartered Financial Advice
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As independent Chartered Financial Planners, we have access to the
              whole of the market, allowing us to find the best solutions for your
              individual needs. All our advice is regulated by the FCA.
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
                  <Link href="/hamnett-wealth/contact" className="btn-accent">
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
              <h3 className="text-xl font-bold text-primary mb-2">Research & Analysis</h3>
              <p className="text-gray-600">
                Our Chartered team analyses your situation in detail and researches
                the best options from across the market.
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
            Book a complimentary consultation with our Chartered Financial Planners
            to discuss your financial goals and how we can help you achieve them.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/hamnett-wealth/contact" className="btn-accent">
              Book Free Consultation
            </Link>
            <a href="tel:01142353500" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Call 0114 235 3500
            </a>
          </div>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> Hamnett Wealth Management is authorised
              and regulated by the Financial Conduct Authority. Hamnett Wealth Management
              is a firm of Chartered Financial Planners. The value of investments can go
              down as well as up, and you may get back less than you invested. Past
              performance is not a reliable indicator of future results. Tax treatment
              depends on individual circumstances and may change in the future.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
