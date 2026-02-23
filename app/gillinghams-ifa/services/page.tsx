import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Services | Wealth Management, Pensions, Ethical Investing & More",
  description: "Comprehensive independent financial advice including wealth management, pensions, investments, ISAs, ethical investing, equity release, later life advice and estate planning from Gillinghams IFA in Bridport.",
  openGraph: {
    title: "Financial Services | Gillinghams Independent Financial Advisers",
    description: "Whole-of-market independent financial advice from FCA regulated advisers. Wealth management, pensions, ethical investing, equity release and more in Bridport, Dorset.",
  },
};

export default function ServicesPage() {
  const services = [
    { id: "wealth-management", title: "Wealth Management", subtitle: "Grow & Protect Your Wealth", description: "Our comprehensive wealth management service brings together all aspects of your financial life into one cohesive strategy. We take a holistic view of your finances, combining investment management with tax planning, retirement planning, and estate considerations to help you achieve your long-term goals.", features: ["Personalised wealth strategy aligned to your goals", "Tax-efficient investment structuring", "Regular portfolio reviews and rebalancing", "Cash flow modelling and financial planning", "Multi-generational wealth planning", "Coordination with your other professional advisers"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { id: "pensions", title: "Pensions & Retirement", subtitle: "Secure Your Retirement", description: "Whether you're just starting to save for retirement or approaching pension age, our experienced advisers can help you make the most of your pension savings. We provide clear, jargon-free advice on all aspects of pension planning, with access to the whole of the market.", features: ["Pension consolidation and transfer analysis", "SIPP (Self-Invested Personal Pension) advice", "Retirement income planning and drawdown strategies", "Pension tax relief optimisation", "Final salary and defined benefit pension advice", "State pension planning and forecasting"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> },
    { id: "investments", title: "Investment Planning & ISAs", subtitle: "Grow Your Wealth Strategically", description: "Our investment advice is designed to help you build and grow your wealth in line with your financial goals and risk tolerance. As whole-of-market advisers, we have access to the widest range of investment options to construct a portfolio that works for you.", features: ["Personalised portfolio construction", "ISA planning and management", "Risk profiling and ongoing management", "Access to wide range of funds and platforms", "Regular portfolio reviews and rebalancing", "Tax-efficient investment strategies"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> },
    { id: "ethical-investing", title: "Ethical Investing", subtitle: "Invest With Your Values", description: "We understand that many of our clients want their investments to reflect their personal values. Our ethical investing service helps you build a portfolio that delivers competitive returns while supporting positive environmental, social, and governance (ESG) outcomes.", features: ["ESG-focused portfolio construction", "Screening for environmental and social criteria", "Impact investing opportunities", "Sustainable fund selection from across the market", "Regular ESG reporting and reviews", "Alignment with UN Sustainable Development Goals"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { id: "equity-release", title: "Equity Release & Later Life", subtitle: "Unlock Your Property Wealth", description: "Our specialist later life advice covers equity release, long-term care planning, and financial strategies for your retirement years. We help homeowners aged 55 and over access the value tied up in their property while ensuring they fully understand all the implications.", features: ["Lifetime mortgages and equity release plans", "Long-term care fee planning", "Later life lending options", "Inheritance planning alongside equity release", "Power of attorney financial planning", "Care home fee funding strategies"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
    { id: "protection", title: "Family Protection", subtitle: "Protect What Matters Most", description: "Protection planning ensures your loved ones are financially secure, whatever life brings. We help you understand your protection needs and find the right cover at the right price, searching the whole market for the best solutions.", features: ["Life assurance and term life cover", "Critical illness protection", "Income protection insurance", "Family income benefit", "Relevant life policies for business owners", "Key person insurance"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
    { id: "estate-planning", title: "Tax & Estate Planning", subtitle: "Plan for Future Generations", description: "Effective estate planning can make a significant difference to how your wealth is passed on to future generations. Our advisers work with you to develop strategies that protect your assets and minimise inheritance tax liability.", features: ["Inheritance Tax mitigation strategies", "Trust planning and administration", "Will planning coordination with solicitors", "Gifting strategies and allowances", "Business succession planning", "Multi-generational wealth transfer"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg> },
    { id: "corporate", title: "Business & Corporate", subtitle: "Financial Solutions for Business", description: "We provide specialist financial advice for business owners and corporate clients, helping you protect your business, plan for succession, and make the most of corporate financial planning opportunities.", features: ["Auto-enrolment workplace pension setup", "Director and key person protection", "Business protection and shareholder agreements", "Corporate investment strategies", "Employee benefit schemes", "Business succession and exit planning"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
  ];

  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Independent Financial Advice You Can Trust</h1>
            <p className="text-xl text-gray-200 leading-relaxed">From wealth management to later life planning, our experienced team provides independent financial advice tailored to your unique circumstances and aspirations.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Expert Independent Advice</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">As independent financial advisers, we have access to the whole of the market. All our advice is regulated by the FCA, and we have been serving clients in Bridport and Dorset since 1908.</p>
          </div>
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-accent font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/gillinghams-ifa/contact" className="btn-accent">Discuss Your Needs</Link>
                </div>
                <div className={`bg-gray-50 p-8 lg:p-12 rounded-sm ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-sm flex items-center justify-center">
                    <div className="text-white opacity-20 scale-150">{service.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">How We Work With You</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center"><div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">1</div><h3 className="text-xl font-bold text-primary mb-2">Initial Consultation</h3><p className="text-gray-600">We meet to understand your financial situation, goals, and concerns. This meeting is free and without obligation.</p></div>
            <div className="text-center"><div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">2</div><h3 className="text-xl font-bold text-primary mb-2">Research &amp; Analysis</h3><p className="text-gray-600">We analyse your situation in detail and research the best options from across the whole of the market.</p></div>
            <div className="text-center"><div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">3</div><h3 className="text-xl font-bold text-primary mb-2">Recommendations</h3><p className="text-gray-600">We present our recommendations in clear, understandable terms, explaining why each option suits your needs.</p></div>
            <div className="text-center"><div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">4</div><h3 className="text-xl font-bold text-primary mb-2">Ongoing Support</h3><p className="text-gray-600">We provide regular reviews and adapt your plan as your life and circumstances evolve.</p></div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Take Control of Your Finances?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book a complimentary consultation to discuss your financial goals and how our experienced team can help you achieve them.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/gillinghams-ifa/contact" className="btn-accent">Book Free Consultation</Link>
            <a href="tel:01308425962" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 01308 425962</a>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p><strong>Important Notice:</strong> Gillinghams Independent Financial Advisers Ltd is authorised and regulated by the Financial Conduct Authority. The value of investments can go down as well as up, and you may get back less than you invested. Past performance is not a reliable indicator of future results. Tax treatment depends on individual circumstances and may change in the future. Your home may be repossessed if you do not keep up repayments on your mortgage. Equity release will reduce the value of your estate and may affect your entitlement to means-tested benefits.</p>
          </div>
        </div>
      </section>
    </>
  );
}
