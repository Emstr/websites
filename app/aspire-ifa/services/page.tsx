import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Services | Wealth Management, Pensions, Mortgages & More",
  description:
    "Comprehensive financial planning services in Finchley: wealth management, pensions, mortgages, insurance, equity release and will writing. Independent advice from one team.",
  openGraph: {
    title: "Financial Services | Aspire Independent Financial Planners",
    description:
      "Six specialist financial services under one roof in Finchley, North London. Independent advice on wealth, pensions, mortgages, insurance, equity release and wills.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "wealth-management",
      title: "Wealth Management",
      subtitle: "Grow and Protect Your Assets",
      description:
        "Our wealth management service takes a holistic view of your finances, building a bespoke strategy to grow your assets whilst managing risk. Whether you are building wealth for the future or looking to make the most of what you have, we provide expert guidance every step of the way.",
      features: [
        "Personalised investment portfolio construction",
        "Risk profiling and ongoing risk management",
        "ISA and investment account management",
        "Tax-efficient investing strategies",
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
      id: "pensions",
      title: "Pensions",
      subtitle: "Secure Your Retirement",
      description:
        "Whether you are just starting to save or approaching retirement, our pension specialists help you make the most of your pension savings. We provide clear, jargon-free advice on all aspects of pension planning, from workplace schemes to drawdown strategies.",
      features: [
        "Pension consolidation and transfer analysis",
        "SIPP and personal pension advice",
        "Retirement income planning and drawdown",
        "Pension tax relief optimisation",
        "Defined benefit pension transfers",
        "State pension planning and forecasting",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "mortgages",
      title: "Mortgages",
      subtitle: "Find the Right Deal",
      description:
        "Our mortgage advisers search the whole market to find the best deal for your circumstances. Whether you are buying your first home, remortgaging, moving up the ladder or investing in buy-to-let, we make the process straightforward and stress-free.",
      features: [
        "First-time buyer mortgages",
        "Remortgage advice and savings analysis",
        "Buy-to-let mortgage solutions",
        "Help to Buy and shared ownership",
        "Self-employed and complex income mortgages",
        "Mortgage protection and buildings insurance",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: "insurance",
      title: "Insurance",
      subtitle: "Protect What Matters Most",
      description:
        "Life can be unpredictable. Our protection specialists help you safeguard your family and lifestyle against the unexpected. We assess your needs thoroughly and find the right cover at competitive rates from across the market.",
      features: [
        "Life assurance and term life cover",
        "Critical illness protection",
        "Income protection insurance",
        "Family income benefit",
        "Relevant life policies for business owners",
        "Mortgage and loan protection",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: "equity-release",
      title: "Equity Release",
      subtitle: "Unlock Your Property Wealth",
      description:
        "For homeowners aged 55 and over, equity release can provide a way to access the wealth tied up in your property without having to move. Our specialist advisers explain all the options, risks and alternatives so you can make a fully informed decision.",
      features: [
        "Lifetime mortgage advice",
        "Home reversion plan options",
        "Impact on inheritance and benefits assessment",
        "Equity Release Council member standards",
        "No negative equity guarantee products",
        "Family involvement and transparency",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: "will-writing",
      title: "Will Writing",
      subtitle: "Protect Your Family and Estate",
      description:
        "A will is one of the most important documents you will ever create, yet many people put it off. Our professional will writing service ensures your wishes are clearly recorded and legally binding. We also help with Lasting Powers of Attorney and estate planning.",
      features: [
        "Single and mirror wills for couples",
        "Trust creation within wills",
        "Lasting Powers of Attorney (LPA)",
        "Inheritance Tax planning",
        "Guardianship arrangements for children",
        "Will review and updating service",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
              Six Specialist Services, One Trusted Team
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From wealth management to will writing, we provide comprehensive
              financial planning under one roof. Independent advice that covers
              every stage of your financial life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Comprehensive Financial Planning
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As independent financial planners, we search the whole market to find
              the best solutions for you. Our breadth of expertise means your
              mortgage, pension, insurance and estate plan all work together seamlessly.
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
                  <Link href="/aspire-ifa/contact" className="btn-accent">
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
                Free Consultation
              </h3>
              <p className="text-gray-600">
                We meet to understand your complete financial picture — goals,
                concerns and priorities across all areas.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                2
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Research & Analysis</h3>
              <p className="text-gray-600">
                We analyse your situation across all relevant areas and research the
                best options from the whole market.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                3
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Coordinated Plan</h3>
              <p className="text-gray-600">
                We present a joined-up plan where your mortgage, pension, insurance
                and estate arrangements all work together.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                4
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                Regular reviews ensure your plan evolves as your life changes. One
                team looking after everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Simplify Your Financial Life?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a complimentary consultation at our Finchley office to discuss how
            our comprehensive service can help you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/aspire-ifa/contact" className="btn-accent">
              Book Free Consultation
            </Link>
            <a href="tel:02083714411" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Call 020 8371 4411
            </a>
          </div>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> Aspire Independent Financial Planners LLP
              is authorised and regulated by the Financial Conduct Authority. The value of
              investments can go down as well as up, and you may get back less than you
              invested. Past performance is not a reliable indicator of future results. Tax
              treatment depends on individual circumstances and may change in the future.
              Your home may be repossessed if you do not keep up repayments on your mortgage.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
