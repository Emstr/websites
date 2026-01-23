import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Services | Mortgages, Pensions & Protection",
  description:
    "Comprehensive financial services including mortgages, secured loans, life assurance, critical illness cover, income protection, and pension planning. Expert advice from FCA regulated advisers.",
  alternates: {
    canonical: "/services/",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "mortgages",
      title: "Mortgages",
      subtitle: "Find the perfect mortgage for your needs",
      description:
        "Whether you're a first-time buyer, moving home, remortgaging, or investing in buy-to-let property, our expert mortgage advisers will search the whole market to find the best deal for you.",
      features: [
        "First-time buyer mortgages",
        "Remortgage advice",
        "Buy-to-let mortgages",
        "Help to Buy schemes",
        "Shared ownership",
        "Self-employed mortgages",
        "Bad credit mortgages",
        "Interest-only mortgages",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      warning:
        "Your home may be repossessed if you do not keep up repayments on your mortgage.",
    },
    {
      id: "secured-loans",
      title: "Secured Loans",
      subtitle: "Access funds secured against your property",
      description:
        "Secured loans, also known as second charge mortgages, allow you to borrow money against the equity in your home. They can be used for home improvements, debt consolidation, or other major expenses.",
      features: [
        "Home improvement loans",
        "Debt consolidation",
        "Business purposes",
        "Large purchases",
        "Flexible repayment terms",
        "Competitive rates",
        "Quick decisions",
        "Various amounts available",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      warning:
        "Your home may be repossessed if you do not keep up repayments on a secured loan.",
    },
    {
      id: "life-assurance",
      title: "Life Assurance",
      subtitle: "Protect your loved ones financially",
      description:
        "Life assurance provides financial security for your family if you were to pass away. We'll help you find the right level of cover to ensure your loved ones are protected.",
      features: [
        "Term life insurance",
        "Whole of life cover",
        "Decreasing term assurance",
        "Family income benefit",
        "Joint life policies",
        "Mortgage protection",
        "Over 50s plans",
        "Trust arrangements",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      id: "critical-illness",
      title: "Critical Illness Cover",
      subtitle: "Financial protection when you need it most",
      description:
        "Critical illness cover provides a tax-free lump sum if you're diagnosed with a serious illness covered by your policy. This gives you the financial freedom to focus on your recovery.",
      features: [
        "Cancer cover",
        "Heart attack protection",
        "Stroke cover",
        "Multiple sclerosis",
        "Kidney failure",
        "Major organ transplant",
        "Children's cover included",
        "Enhanced cover options",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      id: "income-protection",
      title: "Income Protection",
      subtitle: "Safeguard your monthly income",
      description:
        "Income protection insurance pays you a regular income if you can't work due to illness or injury. It's one of the most important types of insurance you can have.",
      features: [
        "Monthly benefit payments",
        "Covers illness & injury",
        "Own occupation cover",
        "Any occupation cover",
        "Short-term options",
        "Long-term protection",
        "Indexation available",
        "Flexible deferment periods",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: "pension-planning",
      title: "Pension Planning",
      subtitle: "Secure your retirement",
      description:
        "Planning for retirement is one of the most important financial decisions you'll make. Our pension experts will help you understand your options and create a plan for a comfortable retirement.",
      features: [
        "Personal pensions",
        "Workplace pensions",
        "Self-invested personal pensions (SIPPs)",
        "Pension consolidation",
        "Pension transfers",
        "Retirement income options",
        "Drawdown advice",
        "Annuity comparison",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      warning:
        "The value of investments can go down as well as up. You may get back less than you invest. Pension rules can change and their benefits depend on your circumstances.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy text-white py-20">
        <div className="container-custom px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Financial Services
            </h1>
            <p className="text-xl text-gray-200">
              Comprehensive financial advice covering mortgages, protection, and
              pension planning. Whatever your financial goals, we&apos;re here to
              help you achieve them.
            </p>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="bg-light-gray py-8 sticky top-[140px] z-40 border-b">
        <div className="container-custom px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-4 py-2 bg-white rounded-lg text-navy font-medium hover:bg-primary hover:text-white transition-colors shadow-sm"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-[220px]"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="service-icon mb-6 w-20 h-20 text-3xl">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-navy mb-2">
                      {service.title}
                    </h2>
                    <p className="text-lg text-primary font-medium mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-slate text-lg mb-6">
                      {service.description}
                    </p>
                    {service.warning && (
                      <div className="fca-notice mb-6">
                        <p className="text-sm">
                          <strong>Important:</strong> {service.warning}
                        </p>
                      </div>
                    )}
                    <Link href="/contact/" className="btn-primary">
                      Get Advice
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="bg-light-gray rounded-xl p-8">
                      <h3 className="text-xl font-bold text-navy mb-6">
                        What We Offer
                      </h3>
                      <ul className="grid sm:grid-cols-2 gap-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <svg
                              className="w-5 h-5 text-primary flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-navy">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              How We Work
            </h2>
            <p className="text-lg text-slate">
              Our straightforward process ensures you receive the best possible
              advice for your circumstances.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description:
                  "We'll discuss your needs, goals, and current financial situation in a free, no-obligation meeting.",
              },
              {
                step: "2",
                title: "Research & Analysis",
                description:
                  "We search the whole market to find products that best match your requirements and budget.",
              },
              {
                step: "3",
                title: "Recommendation",
                description:
                  "We present our findings and recommendations, explaining everything clearly so you can make informed decisions.",
              },
              {
                step: "4",
                title: "Implementation",
                description:
                  "Once you're happy to proceed, we handle all the paperwork and liaise with providers on your behalf.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-slate">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-primary py-20">
        <div className="container-custom px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book your free consultation today and discover how we can help you
            achieve your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-accent text-lg">
              Book Free Consultation
            </Link>
            <a
              href="tel:02086957548"
              className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary text-lg"
            >
              Call 020 8695 7548
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
