import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mortgage Services | First-Time Buyer, Remortgage, Buy-to-Let & More",
  description: "Whole of market mortgage services including first-time buyer mortgages, remortgaging, buy-to-let, Help to Buy, shared ownership and commercial mortgages. Expert advice from Stratford, East London.",
  openGraph: { title: "Our Services | Stratford Mortgage Solutions", description: "Expert mortgage advice across every type of mortgage. Whole of market access to over 90 lenders. Based in Stratford, East London." },
};

export default function ServicesPage() {
  const services = [
    {
      id: "first-time-buyer",
      title: "First-Time Buyer Mortgages",
      subtitle: "Step onto the property ladder with confidence",
      description: "Buying your first home is one of life's biggest financial decisions, and navigating the mortgage market without experience can feel daunting. We take the stress out of the process by searching the whole market, handling the paperwork, and guiding you through every step from agreement in principle to picking up the keys.",
      features: [
        "Agreement in principle within 24 hours to strengthen your offer",
        "Access to exclusive first-time buyer rates from over 90 lenders",
        "Guidance on deposit requirements, stamp duty and government schemes",
        "Full application management including solicitor and valuer liaison",
        "Advice on protection products to safeguard your new home",
        "Evening and weekend appointments to suit your schedule",
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: "remortgaging",
      title: "Remortgaging",
      subtitle: "Switch to a better deal and potentially save thousands",
      description: "If your current mortgage deal is ending, or you're stuck on your lender's standard variable rate, you could be paying hundreds more than you need to each month. We compare the entire market to find you a better rate, and handle the switch from start to finish so you don't have to lift a finger.",
      features: [
        "Free remortgage review to see if switching could save you money",
        "Comparison across 90+ lenders including exclusive broker-only deals",
        "Capital raising options for home improvements or debt consolidation",
        "No obligation to proceed if we can't beat your current deal",
        "We track your mortgage end date and contact you before it expires",
        "Many remortgages complete without a physical valuation",
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      id: "buy-to-let",
      title: "Buy-to-Let Mortgages",
      subtitle: "Specialist advice for property investors and landlords",
      description: "The buy-to-let mortgage market has its own rules and complexities. Lender criteria, stress testing, rental calculations and tax implications are all areas where specialist advice makes a real difference. Whether you're purchasing your first investment property or expanding a portfolio, we know which lenders will work with your situation.",
      features: [
        "Expert knowledge of lender criteria for portfolio and first-time landlords",
        "Advice on limited company (SPV) structures for tax efficiency",
        "HMO and multi-unit block mortgage sourcing",
        "Remortgaging existing buy-to-let properties to release equity",
        "Guidance on rental yield calculations and stress testing",
        "Access to specialist lenders for complex income or credit situations",
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: "help-to-buy",
      title: "Help to Buy Mortgages",
      subtitle: "Navigate government schemes with expert guidance",
      description: "Government-backed schemes can make home ownership more accessible, but understanding the eligibility criteria, equity loan terms and which lenders participate requires specialist knowledge. We guide you through the scheme requirements, find you the best mortgage to complement your equity loan, and ensure everything runs smoothly.",
      features: [
        "Detailed explanation of Help to Buy scheme rules and eligibility",
        "Access to all lenders participating in the Help to Buy programme",
        "Advice on equity loan repayment timelines and interest charges",
        "Combined Help to Buy and Shared Ownership options where available",
        "Support with the Help to Buy ISA or Lifetime ISA integration",
        "Liaison with Help to Buy agents and new-build developers",
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "shared-ownership",
      title: "Shared Ownership Mortgages",
      subtitle: "Affordable home ownership in London",
      description: "Shared ownership allows you to buy a share of a property (typically 25%-75%) and pay rent on the rest. It's one of the most popular routes to home ownership in London, but not all lenders offer shared ownership mortgages, and the criteria can vary significantly. We specialise in matching you with the right lender for your housing association and property.",
      features: [
        "Specialist knowledge of shared ownership lender criteria",
        "Experience with all major London housing associations",
        "Advice on initial share size and future staircasing options",
        "Guidance on combined rent and mortgage affordability",
        "Resale shared ownership mortgage advice",
        "Support with the application process from housing association to completion",
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: "commercial",
      title: "Commercial Mortgages",
      subtitle: "Finance for business premises and development projects",
      description: "Whether you're buying your own business premises, investing in commercial property, or financing a development project, the commercial mortgage market operates very differently from residential lending. We have established relationships with specialist commercial lenders and can source competitive terms for a wide range of commercial property types.",
      features: [
        "Office, retail, industrial and mixed-use property finance",
        "Owner-occupied and investment commercial mortgages",
        "Development finance for conversions, refurbishments and new builds",
        "Bridging finance for auction purchases and short-term needs",
        "Semi-commercial mortgages for properties with residential elements",
        "Competitive terms from high street and specialist commercial lenders",
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Expert Mortgage Advice for Every Situation</h1>
            <p className="text-xl text-gray-200 leading-relaxed">From your first home to your tenth investment property, we search the whole market to find you the right mortgage at the best possible rate.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="service-icon">{service.icon}</div>
                    <div>
                      <span className="text-accent font-semibold text-sm uppercase tracking-wider">{service.subtitle}</span>
                      <h2 className="text-2xl md:text-3xl font-bold text-primary">{service.title}</h2>
                    </div>
                  </div>
                  <div className="gold-line mb-6"></div>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-gray-50 p-8 lg:p-12 rounded-sm ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">{service.icon}</div>
                    <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">Ready to discuss your {service.title.toLowerCase()} options?</p>
                    <Link href="/mortgage-broker-stratford/contact" className="btn-accent">Get Expert Advice</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">How It Works</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Free Consultation", desc: "We discuss your situation, goals and timeline. No jargon, no pressure, just honest advice about what's possible." },
              { step: "2", title: "Market Search", desc: "We search across 90+ lenders to find the best mortgage for your specific circumstances, including exclusive broker-only deals." },
              { step: "3", title: "Application", desc: "We handle the entire application, liaising with the lender, solicitor, estate agent and valuer to keep everything on track." },
              { step: "4", title: "Completion", desc: "We see you through to completion day and beyond. We'll contact you before your deal ends so you never slip onto the SVR." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">{item.step}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Find Your Best Mortgage Deal?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book a free, no-obligation consultation and let us search the whole market for you.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/mortgage-broker-stratford/contact" className="btn-accent">Book Free Consultation</Link>
            <a href="tel:02079466901" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 6901</a>
          </div>
        </div>
      </section>
    </>
  );
}
