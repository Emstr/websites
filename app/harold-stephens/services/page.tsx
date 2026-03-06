import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Services | Later Life Planning, Equity Release & Retirement",
  description:
    "Specialist later life financial services including retirement planning, equity release, care fee planning, pensions, investments, inheritance tax planning, and estate planning in Bristol.",
  openGraph: {
    title: "Financial Services | Harold Stephens Financial Planning",
    description:
      "Expert later life financial advice from FCA regulated specialists. Equity release, care fees, retirement income, and inheritance tax planning in Bristol.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "later-life-planning",
      title: "Later Life Planning",
      subtitle: "Comprehensive Financial Guidance for Your Later Years",
      description:
        "Our flagship service brings together all aspects of your financial life in retirement. We take a holistic view of your circumstances, considering income needs, care possibilities, property wealth, family obligations, and legacy wishes to create a cohesive plan for your later years.",
      features: [
        "Full financial review tailored to retirement circumstances",
        "Income and expenditure analysis for retirement years",
        "Care needs assessment and forward planning",
        "Coordination across pensions, investments, property, and benefits",
        "Regular reviews as your circumstances evolve",
        "Family involvement where appropriate",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "retirement-income",
      title: "Retirement Income Planning",
      subtitle: "Sustainable Income for the Life You Want",
      description:
        "Creating a reliable income in retirement requires careful planning. We help you balance your need for regular income with the desire to maintain and grow your capital, using pension drawdown, annuities, and investment income strategies tailored to your situation.",
      features: [
        "Pension drawdown strategies and management",
        "Annuity comparison and purchase advice",
        "Tax-efficient income withdrawal planning",
        "State pension optimisation",
        "Investment income strategies",
        "Cash flow modelling for retirement years",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "equity-release",
      title: "Equity Release",
      subtitle: "Unlock the Value in Your Home",
      description:
        "Equity release can transform your retirement by unlocking the wealth tied up in your property. As specialists, we provide thorough, impartial advice on lifetime mortgages and home reversion plans, ensuring you understand every option, cost, and risk before making a decision.",
      features: [
        "Lifetime mortgage advice and comparison",
        "Home reversion plan assessment",
        "Impact analysis on estate value and benefits",
        "Family involvement and discussion facilitation",
        "Comparison with alternative options",
        "Ongoing review of equity release arrangements",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: "care-fee-planning",
      title: "Care Fee Planning",
      subtitle: "Protecting Your Assets While Funding Quality Care",
      description:
        "The cost of long-term care can be devastating without proper planning. We help families navigate the complex landscape of care funding, including local authority assessments, self-funding strategies, immediate needs annuities, and asset protection approaches.",
      features: [
        "Care cost assessment and forward planning",
        "Local authority funding eligibility guidance",
        "Immediate needs annuity advice",
        "Asset protection strategies within legal limits",
        "NHS Continuing Healthcare guidance",
        "Coordination with solicitors on Lasting Powers of Attorney",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      id: "pensions",
      title: "Pensions",
      subtitle: "Making the Most of Your Pension Savings",
      description:
        "Whether you are approaching retirement or already drawing your pension, we provide expert advice on all aspects of pension planning. From consolidation and transfers to drawdown and annuity decisions, we help you maximise the value of your pension savings.",
      features: [
        "Pension consolidation and transfer analysis",
        "Defined benefit pension transfer advice",
        "SIPP management and advice",
        "Pension drawdown strategy",
        "Annuity comparison and placement",
        "Pension tax relief optimisation",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: "investments",
      title: "Investments",
      subtitle: "Growing and Protecting Your Wealth in Retirement",
      description:
        "Investment needs change in retirement. We help you balance the need for growth with the requirement for security, constructing portfolios that provide income and capital preservation appropriate for your stage of life and risk tolerance.",
      features: [
        "Retirement-focused portfolio construction",
        "Risk-appropriate investment strategies",
        "ISA and tax-efficient wrapper management",
        "Regular portfolio reviews and rebalancing",
        "Income-generating investment selection",
        "Ethical and sustainable investment options",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      id: "inheritance-tax-planning",
      title: "Inheritance Tax Planning",
      subtitle: "Protecting Your Legacy for Future Generations",
      description:
        "With property values and pension freedoms, more estates than ever face inheritance tax. We help you plan ahead with strategies including gifting, trusts, and tax-efficient investments to ensure your wealth passes to those you love as efficiently as possible.",
      features: [
        "Estate valuation and IHT liability assessment",
        "Gifting strategies and PET planning",
        "Trust creation and management guidance",
        "Business Property Relief opportunities",
        "Pension death benefit planning",
        "Coordination with solicitors on will planning",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
    {
      id: "estate-planning",
      title: "Estate Planning",
      subtitle: "Organising Your Affairs for Peace of Mind",
      description:
        "Estate planning goes beyond inheritance tax. We help you organise your financial affairs, coordinate with legal professionals, and ensure your wishes are clearly documented and your family protected, whatever the future holds.",
      features: [
        "Comprehensive estate review and organisation",
        "Coordination with solicitors on wills and trusts",
        "Lasting Power of Attorney guidance",
        "Beneficiary nomination reviews",
        "Life assurance and protection assessment",
        "Family wealth transfer planning",
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
              Later Life Financial Services
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Specialist financial advice for retirement and later life. From
              equity release and care fee planning to pensions and inheritance
              tax, every service is designed for the unique challenges of your
              later years.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Expert Later Life Advice
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As later life planning specialists, we bring focused expertise to
              every aspect of retirement finance. All our advice is regulated by
              the FCA and tailored to your individual circumstances.
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
                  <Link href="/harold-stephens/contact" className="btn-accent">
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
                A free, no-obligation meeting to understand your situation,
                concerns, and what you want from your later years.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                2
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Research &amp; Analysis</h3>
              <p className="text-gray-600">
                We analyse your circumstances in detail and research the best
                options from across the market for your specific needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                3
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Recommendations</h3>
              <p className="text-gray-600">
                We present clear, jargon-free recommendations explaining what
                we suggest, why, and what the alternatives are.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                4
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                We provide regular reviews and adapt your plan as your life
                and circumstances evolve through retirement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Plan Your Later Years?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a complimentary consultation to discuss your later life
            financial planning needs with our specialist team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/harold-stephens/contact" className="btn-accent">
              Book Free Consultation
            </Link>
            <a href="tel:01173636212" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Call 0117 363 6212
            </a>
          </div>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p className="mb-2">
              <strong>Important Notice:</strong> Harold Stephens Financial Planning
              is authorised and regulated by the Financial Conduct Authority. The value of
              investments can go down as well as up, and you may get back less than you
              invested. Past performance is not a reliable indicator of future results. Tax
              treatment depends on individual circumstances and may change in the future.
            </p>
            <p>
              <strong>Equity Release:</strong> This is a lifetime mortgage or home reversion
              plan. To understand the features and risks, ask for a personalised illustration.
              Equity release will reduce the value of your estate and may affect your
              entitlement to means-tested benefits.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
