import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Services | Pensions, Investments, Protection & Retirement",
  description:
    "Independent financial advice in Manchester: financial planning, pensions, investments, protection and retirement planning. Book your free 45-minute consultation today.",
  openGraph: {
    title: "Financial Services | The Independent Advice Bureau",
    description:
      "Expert independent financial advice from FCA regulated advisers in South Manchester. Free 45-minute initial consultation.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "financial-planning",
      title: "Financial Planning",
      subtitle: "A Clear Plan for Your Future",
      description:
        "Good financial planning starts with understanding where you are and where you want to be. We take the time to get to know your circumstances, goals and concerns, then create a personalised plan that evolves with your life. Your free 45-minute consultation is the perfect place to start.",
      features: [
        "Comprehensive financial health check",
        "Personalised financial roadmap",
        "Cash flow modelling and forecasting",
        "Tax-efficient strategies",
        "Regular reviews and plan adjustments",
        "Estate and inheritance planning",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "pensions",
      title: "Pensions",
      subtitle: "Secure Your Retirement Income",
      description:
        "Whether you are building your pension pot, approaching retirement, or already drawing an income, we provide clear and practical pension advice. As independent advisers, we can access the whole of the market to find the right pension solution for you. Start with a free 45-minute consultation.",
      features: [
        "Pension consolidation and transfer analysis",
        "SIPP (Self-Invested Personal Pension) advice",
        "Retirement income planning and drawdown",
        "Pension tax relief optimisation",
        "Defined benefit pension advice",
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
      subtitle: "Grow Your Wealth with Confidence",
      description:
        "Investing can feel overwhelming, but it does not have to be. We provide straightforward, independent investment advice based on your goals, timeline and attitude to risk. From ISAs to investment bonds, we search the whole market to find what works for you. Book your free 45-minute consultation to discuss your options.",
      features: [
        "Personalised investment portfolio construction",
        "Risk profiling and ongoing risk management",
        "ISA planning and management",
        "Investment bond advice",
        "Ethical and sustainable investment options",
        "Regular portfolio reviews and rebalancing",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      id: "protection",
      title: "Protection",
      subtitle: "Safeguard What Matters Most",
      description:
        "Life is unpredictable. Protection planning ensures your family and finances are secure if the unexpected happens. We help you understand what cover you need and find the best policies at competitive rates. Discuss your protection needs in a free 45-minute consultation.",
      features: [
        "Life assurance and term life cover",
        "Critical illness protection",
        "Income protection insurance",
        "Family income benefit",
        "Mortgage protection",
        "Business protection",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: "retirement-planning",
      title: "Retirement Planning",
      subtitle: "The Retirement You Deserve",
      description:
        "Retirement should be something to look forward to, not worry about. Our retirement planning service brings together your pensions, investments, tax position and goals into a comprehensive strategy that gives you confidence about your future. Start planning with a free 45-minute consultation.",
      features: [
        "Retirement income strategies",
        "Pension drawdown vs annuity analysis",
        "Tax-efficient retirement income planning",
        "Later life care planning",
        "Estate planning and inheritance tax",
        "Ongoing retirement reviews",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
              Independent Financial Advice in Manchester
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From financial planning to retirement strategies, we provide expert
              independent advice tailored to your circumstances. Every service starts
              with a free 45-minute consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Expert Financial Advice, Always Independent
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As independent financial advisers, we have access to the whole of the
              market. We are not tied to any provider, so our recommendations are
              based solely on what is best for you. All advice is FCA regulated.
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
                  <Link href="/iab-manchester/contact" className="btn-accent">
                    Book Your Free Consultation
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
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                1
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Free 45-Min Consultation
              </h3>
              <p className="text-gray-600">
                We meet to understand your financial situation, goals and concerns.
                This meeting is completely free and without obligation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                2
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Research & Analysis</h3>
              <p className="text-gray-600">
                We analyse your situation in detail and research the best options from
                across the entire market.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                3
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Recommendations</h3>
              <p className="text-gray-600">
                We present our recommendations in clear, plain English, explaining
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
            Ready for Your Free 45-Minute Consultation?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book your complimentary consultation to discuss your financial goals
            with our independent advisers. No obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/iab-manchester/contact" className="btn-accent">
              Book Your Free Consultation
            </Link>
            <a href="tel:01612489746" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Call 0161 248 9746
            </a>
          </div>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> The Independent Advice Bureau Limited
              is authorised and regulated by the Financial Conduct Authority. The value of
              investments can go down as well as up, and you may get back less than you
              invested. Past performance is not a reliable indicator of future results. Tax
              treatment depends on individual circumstances and may change in the future.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
