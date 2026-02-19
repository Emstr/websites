import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Property Services | Sales, Lettings & Valuations in Dulwich",
  description:
    "Complete property services in Dulwich, SE21. Property sales, lettings, valuations, management, new homes and investment property advice from NAEA Propertymark members.",
  openGraph: {
    title: "Property Services | Dulwich Property Group",
    description:
      "Expert property sales, lettings, valuations and management in Dulwich and South East London.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "property-sales",
      title: "Property Sales",
      subtitle: "Achieve the Best Price for Your Home",
      description:
        "Our sales team combines deep local knowledge with cutting-edge marketing to achieve outstanding results for Dulwich sellers. We handle every aspect of the sale, from valuation and marketing through to negotiation and completion, ensuring a smooth and stress-free experience.",
      features: [
        "Free, no-obligation market appraisal",
        "Professional photography and videography",
        "Premium listings on Rightmove, Zoopla and OnTheMarket",
        "Accompanied viewings by experienced negotiators",
        "Expert price negotiation to maximise your sale price",
        "Sales progression through to completion",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: "property-lettings",
      title: "Property Lettings",
      subtitle: "Quality Tenants, Maximum Returns",
      description:
        "Our lettings department provides a comprehensive service for landlords, from tenant-find only through to full management. We ensure your property is let quickly to thoroughly referenced tenants at the best possible rent, with full compliance with all current legislation.",
      features: [
        "Comprehensive tenant referencing and Right to Rent checks",
        "Professional property marketing and portal listings",
        "Detailed inventory and schedule of condition",
        "Tenancy agreement preparation and deposit registration",
        "Compliance with all landlord legislation including EPC and gas safety",
        "Rent collection and arrears management",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
    },
    {
      id: "property-valuations",
      title: "Property Valuations",
      subtitle: "Accurate, Evidence-Based Valuations",
      description:
        "Whether you are considering selling, letting or simply want to know your property's current market value, our expert valuers provide accurate assessments backed by comprehensive local market data. We track every sale and letting in Dulwich to ensure our valuations reflect the true market.",
      features: [
        "Free, no-obligation market appraisals",
        "Comprehensive comparable evidence analysis",
        "Understanding of planning and development potential",
        "Lettings yield and rental valuation assessments",
        "Probate and tax valuation referrals",
        "Detailed written valuation reports available",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "property-management",
      title: "Property Management",
      subtitle: "Hassle-Free Landlord Experience",
      description:
        "Our property management service takes the stress out of being a landlord. From routine maintenance to emergency repairs, rent collection to tenant communications, we handle everything so you can enjoy the returns without the day-to-day hassle.",
      features: [
        "Dedicated property manager for your portfolio",
        "24/7 emergency maintenance response",
        "Regular property inspections with photographic reports",
        "Rent collection with guaranteed payment options",
        "Approved contractor network for cost-effective repairs",
        "End-of-tenancy management and deposit negotiations",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: "new-homes",
      title: "New Homes",
      subtitle: "New Build Sales & Marketing",
      description:
        "We work with leading developers to market and sell new build properties in Dulwich and South East London. Our new homes team provides specialist advice to buyers navigating the new build process, including Help to Buy and shared ownership schemes.",
      features: [
        "Developer partnerships with exclusive off-plan opportunities",
        "Show home marketing and launch event management",
        "Help to Buy and shared ownership scheme advice",
        "Snagging and completion support for buyers",
        "New build investment analysis and yield projections",
        "Ongoing aftercare and resale advisory",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      id: "investment-property",
      title: "Investment Property",
      subtitle: "Build Your Property Portfolio",
      description:
        "Whether you are a first-time investor or an experienced landlord looking to expand your portfolio, our investment team provides expert guidance on property investment in South East London. We identify opportunities, analyse yields and help you build a profitable property portfolio.",
      features: [
        "Investment opportunity identification and sourcing",
        "Rental yield analysis and capital growth projections",
        "Portfolio review and optimisation advice",
        "Buy-to-let mortgage broker referrals",
        "Tax-efficient structuring advice referrals",
        "Ongoing portfolio management and letting services",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Complete Property Services in Dulwich</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From sales and lettings to valuations and investment advice, we provide
              the full spectrum of property services with unrivalled local expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Expert Property Services</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As NAEA Propertymark members, we adhere to the highest professional
              standards. Every service is delivered with the care and expertise
              your property deserves.
            </p>
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
                        <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/estate-agent-dulwich/contact" className="btn-accent">Book a Valuation</Link>
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
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">How We Work</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-primary mb-2">Free Valuation</h3>
              <p className="text-gray-600">We visit your property and provide an accurate, evidence-based market appraisal at no cost.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-primary mb-2">Premium Marketing</h3>
              <p className="text-gray-600">Professional photography, floor plans and listings across all major property portals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-primary mb-2">Expert Negotiation</h3>
              <p className="text-gray-600">Our skilled negotiators secure the best possible price and terms for your property.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold text-primary mb-2">Completion</h3>
              <p className="text-gray-600">We manage the entire process through to exchange and completion, keeping you informed throughout.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a free property valuation or speak to one of our local experts about your property needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/estate-agent-dulwich/contact" className="btn-accent">Book Free Valuation</Link>
            <a href="tel:02079462345" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 2345</a>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Professional Standards:</strong> Dulwich Property Group is a member of NAEA Propertymark
              and complies with all relevant property legislation including the Consumer Rights Act 2015,
              Tenant Fees Act 2019 and all current landlord and tenant regulations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
