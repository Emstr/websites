import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Services | Pensions, Investments & Business Advice",
  description:
    "Comprehensive independent financial advice including personal financial planning, pensions, investments, and small business advisory. Whole-of-market advice from Bothwell, Glasgow.",
  openGraph: {
    title: "Financial Services | Financial Independent Solutions",
    description:
      "Expert independent financial advice from a PFS and CII qualified adviser. Personal planning, pensions, investments, and business advice in Bothwell, Glasgow.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "personal-financial-planning",
      title: "Personal Financial Planning",
      subtitle: "Your Complete Financial Picture",
      description:
        "Mark takes a holistic approach to your finances, creating a tailored plan that addresses every aspect of your financial life. Whether you are saving for a specific goal, planning for retirement, or simply wanting to make the most of what you have, he will build a plan that works for you.",
      features: [
        "Comprehensive financial health check and review",
        "Goal-based financial planning and cash flow modelling",
        "Tax-efficient savings strategies including ISAs",
        "Protection planning for you and your family",
        "Estate planning and inheritance tax considerations",
        "Regular reviews to keep your plan on track",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      id: "pensions",
      title: "Pensions",
      subtitle: "Secure Your Retirement",
      description:
        "Pensions are often the most valuable asset after your home, yet many people do not know what they have or whether it is working hard enough. Mark provides clear, jargon-free pension advice to help you make confident decisions about your retirement.",
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
      id: "investments",
      title: "Investments",
      subtitle: "Grow Your Wealth With Confidence",
      description:
        "As a truly independent adviser, Mark has access to the entire investment market. He will build an investment strategy that matches your goals, timeline, and appetite for risk &mdash; and review it regularly to ensure it remains on course.",
      features: [
        "Whole-of-market investment research and selection",
        "Risk profiling and ongoing risk management",
        "ISA and general investment account management",
        "Tax-efficient investment strategies",
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
      id: "business-financial-advice",
      title: "Business Financial Advice",
      subtitle: "Supporting Small Business Owners",
      description:
        "Running a small business brings unique financial challenges. Mark works with business owners across Glasgow and Lanarkshire, providing advice that bridges both personal and commercial financial planning.",
      features: [
        "Workplace pension and auto-enrolment solutions",
        "Key person and shareholder protection",
        "Business succession and exit planning",
        "Directors&apos; pension planning",
        "Group protection schemes",
        "Business loan and cash flow advice",
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
              Independent Financial Advice
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Whole-of-market advice tailored to your unique circumstances. From
              personal financial planning to small business advisory, Mark provides
              expert guidance you can trust.
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
              As an independent financial adviser with over 23 years of experience,
              Mark has access to the whole of the market, allowing him to find the
              best solutions for your individual needs. All advice is regulated by
              the FCA.
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
                  <Link href="/fis-glasgow/contact" className="btn-accent">
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
              How Mark Works With You
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
                A free, no-obligation meeting to understand your financial
                situation, goals, and concerns.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                2
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Research &amp; Analysis</h3>
              <p className="text-gray-600">
                Mark analyses your situation in detail and researches the best
                options from across the entire market.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                3
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Recommendations</h3>
              <p className="text-gray-600">
                Clear, jargon-free recommendations explaining why each option
                suits your needs and circumstances.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                4
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                Regular reviews and ongoing support as your life and
                circumstances evolve over the years.
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
            Book a complimentary consultation with Mark at Castle Chambers,
            Bothwell to discuss your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fis-glasgow/contact" className="btn-accent">
              Book Free Consultation
            </Link>
            <a href="tel:01698854422" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Call 01698 854422
            </a>
          </div>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> Financial Independent Solutions Ltd
              (SC218279) is authorised and regulated by the Financial Conduct Authority.
              The value of investments can go down as well as up, and you may get back
              less than you invested. Past performance is not a reliable indicator of
              future results. Tax treatment depends on individual circumstances and may
              change in the future.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
