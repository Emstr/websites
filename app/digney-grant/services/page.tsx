import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Services | Planning, Mortgages & Insurance",
  description:
    "Comprehensive financial services including financial planning, mortgage advice, personal insurance, commercial insurance, and independent financial advice in Newry, Northern Ireland.",
  openGraph: {
    title: "Financial Services | Digney Grant Financial Planning",
    description:
      "Expert financial advice from FCA regulated advisers. Financial planning, mortgages, and insurance in Newry, Northern Ireland.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "financial-planning",
      title: "Financial Planning",
      subtitle: "Build Wealth & Secure Your Future",
      description:
        "Our comprehensive financial planning service looks at every aspect of your financial life. Whether you are saving for retirement, planning for your children's education, or simply want to make the most of your money, our qualified advisers will create a tailored plan that works for you.",
      features: [
        "Retirement planning and pension advice",
        "Investment strategy and portfolio management",
        "Tax-efficient savings and ISA planning",
        "Estate planning and inheritance tax advice",
        "Cash flow modelling and financial forecasting",
        "Regular reviews and plan adjustments",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      id: "mortgage-advice",
      title: "Mortgage Advice",
      subtitle: "Find Your Perfect Mortgage",
      description:
        "Our dedicated mortgage brokers have access to the whole of the market, meaning we can find the right mortgage for your circumstances. Whether you are a first-time buyer stepping onto the property ladder, moving to your next home, or looking to remortgage for a better deal, we are here to guide you every step of the way.",
      features: [
        "First-time buyer mortgages",
        "Home mover and remortgage advice",
        "Buy-to-let mortgage solutions",
        "Self-employed and contractor mortgages",
        "Mortgage protection and life cover",
        "Whole-of-market access for the best rates",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: "personal-insurance",
      title: "Personal Insurance",
      subtitle: "Protect What Matters Most",
      description:
        "Life is unpredictable, but your financial protection does not have to be. We offer a comprehensive range of personal insurance products to safeguard you and your family against the unexpected. With over 40 years of insurance expertise, we know how to find the right cover at the right price.",
      features: [
        "Life assurance and term life cover",
        "Critical illness protection",
        "Income protection insurance",
        "Home and contents insurance",
        "Motor insurance",
        "Travel insurance",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: "commercial-insurance",
      title: "Commercial Insurance",
      subtitle: "Safeguard Your Business",
      description:
        "Running a business comes with risks. Our commercial insurance team works with businesses across Northern Ireland to provide tailored cover that protects your livelihood. From sole traders to larger enterprises, we find policies that fit your specific industry and risk profile.",
      features: [
        "Public liability insurance",
        "Employer's liability insurance",
        "Professional indemnity cover",
        "Commercial property insurance",
        "Fleet and commercial vehicle insurance",
        "Business interruption cover",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: "independent-financial-advice",
      title: "Independent Financial Advice",
      subtitle: "Unbiased, Whole-of-Market Guidance",
      description:
        "As independent financial advisers, we are not restricted to recommending products from a single provider. We have access to the entire market, which means we can genuinely find the best solutions for your individual needs. Our advice is always in your best interest, not influenced by commission or provider relationships.",
      features: [
        "Whole-of-market product research",
        "Unbiased recommendations based on your needs",
        "Comprehensive financial health checks",
        "Ongoing reviews and portfolio rebalancing",
        "Access to exclusive institutional products",
        "Clear, jargon-free explanations of your options",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
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
              From financial planning to mortgages and insurance, Digney Grant
              provides whole-of-market independent advice tailored to your needs.
              Over 40 years of expertise under one roof.
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
              All our advice is regulated by the FCA (Number 702579).
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
                  <Link href="/digney-grant/contact" className="btn-accent">
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
            our team of advisers and brokers can help you achieve them.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/digney-grant/contact" className="btn-accent">
              Book Free Consultation
            </Link>
            <a href="tel:02830828880" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Call 028 3082 8880
            </a>
          </div>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> Digney Grant Financial Planning Ltd
              is authorised and regulated by the Financial Conduct Authority. FCA
              Number: 702579. The value of investments can go down as well as up, and
              you may get back less than you invested. Past performance is not a
              reliable indicator of future results. Tax treatment depends on individual
              circumstances and may change in the future. Your home may be repossessed
              if you do not keep up repayments on your mortgage.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
