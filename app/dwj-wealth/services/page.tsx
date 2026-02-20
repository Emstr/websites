import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Services | Wealth Management, Equity Release & Corporate Advice",
  description:
    "Comprehensive financial services including tailored wealth management, private client advice, corporate financial solutions, and equity release in Swansea and South Wales.",
  openGraph: {
    title: "Financial Services | DWJ Wealth Management",
    description:
      "Expert financial advice from FCA regulated advisers. Wealth management, private client advice, corporate solutions, and equity release in Swansea.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "wealth-management",
      title: "Wealth Management",
      subtitle: "Tailored Strategies for Your Goals",
      description:
        "Our wealth management service takes a holistic view of your finances, bringing together investment, tax, and estate planning into one cohesive strategy. Whether you are building wealth for the future or looking to preserve and grow existing assets, we create a bespoke plan aligned with your goals.",
      features: [
        "Comprehensive financial planning tailored to your life stage",
        "Investment portfolio construction and ongoing management",
        "Tax-efficient strategies including ISA and pension optimisation",
        "Estate and succession planning",
        "Cash flow modelling and retirement forecasting",
        "Regular reviews and proactive portfolio adjustments",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      id: "private-client",
      title: "Private Client Advice",
      subtitle: "Personalised Financial Planning",
      description:
        "Our private client service is designed for individuals and families who want personalised financial advice. We take the time to understand your unique circumstances, goals, and concerns, and create a plan that evolves with you through every stage of life.",
      features: [
        "Pension planning and retirement income strategies",
        "Investment advice and portfolio management",
        "Tax planning and mitigation strategies",
        "Life assurance and income protection",
        "Inheritance tax planning",
        "Savings and ISA management",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      id: "corporate-client",
      title: "Corporate Client Advice",
      subtitle: "Financial Solutions for Businesses",
      description:
        "We work with businesses of all sizes to provide comprehensive financial solutions for employers and their workforces. From workplace pension schemes to executive benefit planning, we help businesses attract and retain talent while meeting their regulatory obligations.",
      features: [
        "Workplace pension setup and auto-enrolment compliance",
        "Employee benefit schemes and group protection",
        "Executive pension and remuneration planning",
        "Corporate investment and cash management",
        "Key person insurance and shareholder protection",
        "Business succession and exit planning",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: "equity-release",
      title: "Equity Release",
      subtitle: "Unlock the Value in Your Home",
      description:
        "Equity release allows homeowners aged 55 and over to access the value tied up in their property without having to move. We provide clear, honest guidance on lifetime mortgages and home reversion plans, ensuring you understand all the options and implications before making a decision.",
      features: [
        "Lifetime mortgage advice and comparison",
        "Home reversion plan guidance",
        "Impact assessment on inheritance and benefits",
        "No negative equity guarantee options",
        "Drawdown and lump sum options explained",
        "Family involvement and transparency throughout",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
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
              Tailored Financial Solutions
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From wealth management to equity release, we provide expert
              financial advice for both private and corporate clients in
              Swansea and across South Wales.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Expert Financial Advice
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              DWJ Wealth Management provides tailored advice across four core
              service areas, ensuring that both private individuals and businesses
              receive the expert guidance they deserve. All our advice is regulated
              by the FCA.
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
                  <Link href="/dwj-wealth/contact" className="btn-accent">
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
                We analyse your situation in detail and research the best options
                tailored to your specific needs.
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
            we can help you achieve them.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/dwj-wealth/contact" className="btn-accent">
              Book Free Consultation
            </Link>
            <a href="tel:01639825066" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Call 01639 825066
            </a>
          </div>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> DWJ Wealth Management Ltd
              (Company No. 09104954) is authorised and regulated by the Financial Conduct
              Authority. The value of investments can go down as well as up, and you may
              get back less than you invested. Past performance is not a reliable indicator
              of future results. Tax treatment depends on individual circumstances and may
              change in the future. Equity release will reduce the value of your estate
              and may affect your entitlement to means-tested benefits.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
