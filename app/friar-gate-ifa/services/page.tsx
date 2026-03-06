import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Services | Investment, Retirement & IHT Planning in Derby",
  description:
    "Whole-of-market financial services including investment advice, retirement planning, inheritance tax planning, cost reduction, and independent financial reviews. Based at Pride Park, Derby.",
  openGraph: {
    title: "Financial Services | Friar Gate Independent Financial Services",
    description:
      "Expert independent financial advice from FCA regulated advisers at Pride Park, Derby. Investment, retirement, IHT planning, and cost reduction.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "investment-advice",
      title: "Investment Advice",
      subtitle: "Whole-of-Market Investment Strategies",
      description:
        "Our independent investment advice is built on whole-of-market access. Unlike tied advisers, we search the entire market to find investment solutions that truly match your goals and risk profile. Whether you are building wealth for the future, generating income, or protecting capital, we create a strategy that works for you.",
      features: [
        "Whole-of-market fund and platform selection",
        "Personalised portfolio construction based on your goals",
        "Risk profiling and ongoing risk management",
        "ISA, GIA, and investment bond advice",
        "Regular portfolio reviews and rebalancing",
        "Ethical and sustainable investment options",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      id: "retirement-planning",
      title: "Retirement Planning",
      subtitle: "Secure Your Retirement With Confidence",
      description:
        "Whether you are decades from retirement or approaching pension age, our expert advisers help you make the most of your pension savings. We provide clear, jargon-free advice on all aspects of retirement planning — from consolidation and contribution strategy to drawdown and income planning.",
      features: [
        "Pension consolidation and transfer analysis",
        "SIPP (Self-Invested Personal Pension) advice",
        "Retirement income planning and drawdown strategies",
        "Pension tax relief optimisation",
        "Final salary and defined benefit pension advice",
        "State pension planning and forecasting",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "inheritance-tax-planning",
      title: "Inheritance Tax Planning",
      subtitle: "Protect Your Wealth for Future Generations",
      description:
        "Inheritance Tax (IHT) planning is one of our specialist areas. With the nil-rate band frozen and property values rising, more families than ever face an IHT liability. We help you structure your affairs to legally minimise the amount of tax your estate pays, so more passes to the people who matter most.",
      features: [
        "Estate valuation and IHT liability assessment",
        "Utilisation of nil-rate bands and transferable allowances",
        "Trust planning and establishment",
        "Gift planning and potentially exempt transfer strategies",
        "Business Property Relief and Agricultural Property Relief",
        "Life assurance solutions to cover IHT liabilities",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: "cost-reduction",
      title: "Cost Reduction",
      subtitle: "Pay Less, Keep More",
      description:
        "Many people are paying far more than they need to in hidden charges on their investments and pensions. Our cost reduction service conducts a thorough review of your existing arrangements to identify where charges can be reduced — without compromising on the quality of your investments or the level of service you receive.",
      features: [
        "Complete audit of existing product charges",
        "Platform and fund charge comparisons across the market",
        "Pension charge reviews and switching analysis",
        "Identification of exit penalties and transfer costs",
        "Like-for-like switches to lower-cost alternatives",
        "Ongoing monitoring to ensure charges remain competitive",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "independent-financial-reviews",
      title: "Independent Financial Reviews",
      subtitle: "A Fresh, Impartial Look at Your Finances",
      description:
        "Our comprehensive financial review examines every aspect of your existing arrangements — investments, pensions, protection, and tax efficiency — from a completely independent, whole-of-market perspective. Whether you have been with another adviser or managing your own finances, we provide an honest, unbiased assessment of where you stand and what could be improved.",
      features: [
        "Full portfolio and pension review",
        "Risk assessment and asset allocation analysis",
        "Tax efficiency review (ISAs, CGT, income tax)",
        "Protection gap analysis",
        "Benchmark comparison against whole-of-market alternatives",
        "Written report with clear, actionable recommendations",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
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
              Whole-of-Market Financial Solutions
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              As fully independent advisers, we search the entire market to find
              the right solutions for you. From investment advice to specialist
              IHT planning, every recommendation is made in your best interests.
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
              As independent financial advisers with whole-of-market access, we
              recommend the best solutions from across the entire market — not just
              from a limited panel of providers. Every piece of advice is tailored
              to your unique circumstances.
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
                  <Link href="/friar-gate-ifa/contact" className="btn-accent">
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
                We meet at our Pride Park office to understand your financial
                situation, goals, and concerns. This meeting is free and without
                obligation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                2
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Research & Analysis</h3>
              <p className="text-gray-600">
                We analyse your situation in detail and research the best options
                from across the whole market — not just a limited panel.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                3
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Recommendations</h3>
              <p className="text-gray-600">
                We present our recommendations in clear, understandable terms,
                explaining why each option is suitable for your needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                4
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                We provide regular reviews and adapt your plan as your life and
                circumstances evolve. We are always here when you need us.
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
            Book a complimentary consultation at our Pride Park office to discuss
            your financial goals and how our independent, whole-of-market approach
            can help you achieve them.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/friar-gate-ifa/contact" className="btn-accent">
              Book Free Consultation
            </Link>
            <a href="tel:01332438361" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Call 01332 438361
            </a>
          </div>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> Friar Gate Independent Financial
              Services Ltd is authorised and regulated by the Financial Conduct
              Authority. The value of investments can go down as well as up, and
              you may get back less than you invested. Past performance is not a
              reliable indicator of future results. Tax treatment depends on
              individual circumstances and may change in the future.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
