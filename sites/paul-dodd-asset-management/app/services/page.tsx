import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | Paul Dodd Asset Management",
  description: "Comprehensive financial services including pensions, wealth management, investment advice, ISAs, retirement planning and portfolio management. Expert independent advice in Leeds.",
};

export default function Services() {
  const services = [
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      title: "Pensions & Retirement Planning",
      description: "Planning for retirement is one of the most important financial decisions you'll make. We provide expert guidance on:",
      features: [
        "Personal Pension Plans",
        "Workplace Pension Reviews",
        "Pension Consolidation",
        "Retirement Income Planning",
        "Drawdown vs Annuities",
        "State Pension Optimization",
        "Pension Transfer Advice"
      ]
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      ),
      title: "Wealth Management",
      description: "Build, grow, and protect your wealth with our comprehensive wealth management services:",
      features: [
        "Investment Portfolio Construction",
        "Asset Allocation Strategies",
        "Risk Management",
        "Regular Portfolio Reviews",
        "Estate Planning Advice",
        "Generational Wealth Transfer",
        "Holistic Financial Planning"
      ]
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      ),
      title: "Investment Advice",
      description: "Independent investment guidance tailored to your goals, risk tolerance, and time horizon:",
      features: [
        "Stocks & Shares ISAs",
        "General Investment Accounts",
        "Collective Investments",
        "Bond Portfolios",
        "Ethical & ESG Investing",
        "Offshore Investments",
        "Tax-Efficient Strategies"
      ]
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      ),
      title: "ISAs & Tax Planning",
      description: "Maximize your tax-efficient savings and investment allowances with expert guidance on:",
      features: [
        "Stocks & Shares ISAs",
        "Lifetime ISAs",
        "Junior ISAs",
        "ISA Transfers",
        "Annual Allowance Planning",
        "Capital Gains Tax Planning",
        "Inheritance Tax Strategies"
      ]
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      ),
      title: "Portfolio Management",
      description: "Active management of your investment portfolio to meet your financial objectives:",
      features: [
        "Ongoing Portfolio Monitoring",
        "Regular Rebalancing",
        "Performance Reporting",
        "Risk Assessment Reviews",
        "Market Analysis & Insights",
        "Quarterly Strategy Reviews",
        "Goal-Based Investing"
      ]
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      ),
      title: "Business & Corporate Services",
      description: "Financial planning solutions for business owners and corporate clients:",
      features: [
        "Corporate Pension Schemes",
        "Executive Benefits Planning",
        "Key Person Insurance",
        "Business Protection",
        "Succession Planning",
        "Group Life Cover",
        "Employee Benefits Review"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#15293f] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#c9a227] text-[#1e3a5f] px-4 py-2 rounded-full font-bold mb-6 text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>FCA Authorised - Independent Advice</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Financial Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive, independent financial advice tailored to your unique circumstances and goals.
              Backed by over 30 years of trusted expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a5f] to-[#15293f] rounded-xl flex items-center justify-center">
                      <svg className="w-10 h-10 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {service.icon}
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">{service.title}</h2>
                    <p className="text-gray-700 text-lg mb-6">{service.description}</p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-[#c9a227] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Independent Advice Matters */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">Why Independent Advice Matters</h2>
              <p className="text-xl text-gray-600">
                As independent financial advisers, we're not tied to any particular provider or product.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c9a227] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Whole of Market</h3>
                    <p className="text-gray-600">Access to the full range of products and providers in the market, ensuring you get the best solution for your needs.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c9a227] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Client-First Approach</h3>
                    <p className="text-gray-600">Your interests always come first. We're paid by you, not by product providers, eliminating conflicts of interest.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c9a227] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Transparent Fees</h3>
                    <p className="text-gray-600">Clear, upfront pricing with no hidden charges. You'll know exactly what you're paying for our services.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c9a227] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Ongoing Support</h3>
                    <p className="text-gray-600">Regular reviews and continuous support as your circumstances change throughout your life.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">Our Advisory Process</h2>
              <p className="text-xl text-gray-600">
                A clear, straightforward approach to financial planning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Initial Consultation", desc: "Free, no-obligation meeting to understand your needs and goals" },
                { step: "02", title: "Research & Analysis", desc: "Comprehensive review of your finances and the available options" },
                { step: "03", title: "Recommendations", desc: "Clear, tailored advice with transparent fee structure" },
                { step: "04", title: "Implementation & Review", desc: "Execute the plan and provide ongoing support and reviews" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1e3a5f] to-[#15293f] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-[#c9a227]">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#15293f] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Book your free consultation today and discover how we can help you achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#c9a227] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#b08f1f] transition-all shadow-lg hover:shadow-xl">
                Book Free Consultation
              </Link>
              <a href="tel:01132300449" className="bg-white text-[#1e3a5f] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 0113 2300449
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
