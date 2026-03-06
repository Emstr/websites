import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Services | Investment, Pensions, Estate Planning & Wills",
  description:
    "Comprehensive Chartered financial planning services including investment management, retirement planning, pensions, estate planning, wills and tax planning from the City of London.",
  openGraph: {
    title: "Financial Services | Holder & Combes — Chartered Financial Planners",
    description:
      "Expert Chartered financial advice from the City of London. Investment management, retirement planning, pensions, estate planning, wills and tax planning.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "investment-wealth-management",
      title: "Investment & Wealth Management",
      subtitle: "Grow and Protect Your Wealth",
      description:
        "Our Chartered investment management service is designed to help you build, grow and protect your wealth. We take a comprehensive, evidence-based approach, considering your entire financial picture before recommending bespoke strategies tailored to your goals and risk profile.",
      features: [
        "Personalised portfolio construction by Chartered professionals",
        "Risk profiling and ongoing risk management",
        "Access to institutional-quality investment solutions",
        "Regular portfolio reviews and strategic rebalancing",
        "ISA, GIA and offshore investment account management",
        "Ethical, sustainable and ESG investment options",
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
      subtitle: "Secure the Retirement You Deserve",
      description:
        "Retirement planning is about far more than pensions. Our Chartered specialists create comprehensive retirement strategies that consider every aspect of your financial life — from income needs and tax efficiency to legacy planning and long-term care.",
      features: [
        "Comprehensive retirement income modelling",
        "Pension drawdown and annuity strategies",
        "State pension optimisation",
        "Cash flow forecasting and scenario planning",
        "Lifestyle planning and phased retirement options",
        "Long-term care fee planning",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "pensions",
      title: "Pensions",
      subtitle: "Expert Pension Advice",
      description:
        "Whether you are building your pension savings, approaching retirement or reviewing existing arrangements, our Chartered pension specialists provide clear, expert advice. We navigate the complexities of pension legislation so you do not have to.",
      features: [
        "Pension consolidation and transfer analysis",
        "SIPP (Self-Invested Personal Pension) advice",
        "Defined benefit and final salary pension reviews",
        "Pension tax relief optimisation",
        "Workplace pension and auto-enrolment advice",
        "Pension sharing on divorce",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "estate-planning",
      title: "Estate Planning",
      subtitle: "Protect Your Legacy",
      description:
        "Effective estate planning ensures your wealth passes to your chosen beneficiaries as efficiently as possible. Our Chartered specialists work with you to develop strategies that minimise Inheritance Tax, protect assets and provide for future generations.",
      features: [
        "Inheritance Tax (IHT) mitigation strategies",
        "Trust planning and administration",
        "Business Property Relief and Agricultural Relief",
        "Lifetime gifting strategies",
        "Power of Attorney arrangements",
        "Multi-generational wealth transfer planning",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: "wills",
      title: "Wills",
      subtitle: "Secure Your Wishes",
      description:
        "A properly drafted will is the cornerstone of any sound financial plan. We work alongside trusted legal professionals to ensure your will accurately reflects your wishes and integrates seamlessly with your broader estate and financial planning strategy.",
      features: [
        "Professional will writing and review",
        "Will trusts for tax efficiency and asset protection",
        "Guardianship provisions for minor children",
        "Business succession planning within wills",
        "Codicils and will amendments",
        "Coordination with estate planning strategy",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      id: "tax-planning",
      title: "Tax Planning",
      subtitle: "Optimise Your Tax Position",
      description:
        "Effective tax planning can make a significant difference to your wealth over time. Our Chartered advisers develop strategies that legally minimise your tax burden whilst maximising your returns, ensuring every pound works as hard as possible for you.",
      features: [
        "ISA planning and bed & ISA strategies",
        "Capital Gains Tax planning and deferral",
        "Income tax planning for higher and additional rate taxpayers",
        "Dividend tax planning for company directors",
        "VCT and EIS tax-efficient investment advice",
        "Coordination with accountants and tax advisers",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
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
              Chartered Financial Planning Services
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From investment management to estate planning, we provide expert
              Chartered financial advice tailored to your unique circumstances
              and aspirations from our City of London office.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Expert Chartered Financial Advice
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As independent Chartered Financial Planners, we have access to the
              whole of the market, allowing us to find the best solutions for
              your individual needs. All our advice is regulated by the FCA.
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
                  <Link href="/holder-combes/contact" className="btn-accent">
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
                We meet at our St Paul&apos;s office to understand your
                financial situation, goals and concerns. This meeting is free
                and without obligation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                2
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Research &amp; Analysis</h3>
              <p className="text-gray-600">
                Our Chartered planners analyse your situation in detail and
                research the best options from across the entire market.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                3
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Recommendations</h3>
              <p className="text-gray-600">
                We present our recommendations in clear, jargon-free terms,
                explaining why each option suits your specific needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                4
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                We provide regular reviews and adapt your plan as your life
                and circumstances evolve. Your Chartered planner is always
                accessible.
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
            Book a complimentary consultation with our Chartered Financial
            Planners at our St Paul&apos;s office to discuss your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/holder-combes/contact" className="btn-accent">
              Book Free Consultation
            </Link>
            <a href="tel:02071012817" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Call 020 7101 2817
            </a>
          </div>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> Holder &amp; Combes is authorised
              and regulated by the Financial Conduct Authority. Holder &amp; Combes
              holds Chartered Financial Planner status. The value of investments can
              go down as well as up, and you may get back less than you invested.
              Past performance is not a reliable indicator of future results. Tax
              treatment depends on individual circumstances and may change in the
              future.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
