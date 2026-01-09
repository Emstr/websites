import type { Metadata } from "next";
import Link from "next/link";
import ContactBanner from "../../components/ContactBanner";

export const metadata: Metadata = {
  title: "Real Estate Corporate Finance",
  description:
    "Specialized real estate finance advisory. Structuring complex transactions from development finance to portfolio acquisitions and joint ventures.",
};

export default function RealEstatePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-charcoal to-background py-24 border-b border-gray-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-electric-blue rounded-lg flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div className="text-electric-blue text-sm font-medium uppercase tracking-wide">
                Sector Expertise
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Real Estate Corporate Finance
            </h1>
            <p className="text-xl text-silver leading-relaxed">
              Expert advisory for complex real estate transactions, from development finance and portfolio acquisitions to joint ventures and strategic restructuring.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Structuring Complex Real Estate Deals
              </h2>
              <p className="text-silver mb-6 leading-relaxed">
                Real estate transactions require sophisticated financial structuring, deep understanding of property markets, and expertise in navigating complex capital stacks. We advise on all aspects of real estate corporate finance.
              </p>
              <p className="text-silver leading-relaxed">
                From single-asset transactions to portfolio deals, from development sites to income-producing properties, we structure solutions that align with our clients' strategic objectives and risk profiles.
              </p>
            </div>
            <div className="bg-charcoal border border-gray-dark rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Real Estate Finance Services
              </h3>
              <ul className="space-y-4">
                {[
                  "Development finance structuring",
                  "Portfolio acquisitions & disposals",
                  "Joint venture partnerships",
                  "Mezzanine & structured finance",
                  "Sale & leaseback transactions",
                  "Asset & portfolio valuations",
                ].map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-electric-blue flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-silver">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Property Sectors We Serve
            </h2>
            <p className="text-xl text-silver max-w-3xl mx-auto">
              Comprehensive coverage across real estate asset classes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Commercial & Office",
                description:
                  "Office buildings, business parks, and mixed-use commercial developments",
              },
              {
                title: "Residential Development",
                description:
                  "Residential projects from planning through construction and sales",
              },
              {
                title: "Industrial & Logistics",
                description:
                  "Warehouses, distribution centers, and industrial facilities",
              },
            ].map((area) => (
              <div
                key={area.title}
                className="bg-background border border-gray-dark rounded-xl p-6 hover:border-electric-blue transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {area.title}
                </h3>
                <p className="text-silver">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Real Estate Finance Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Capital Stack Structuring",
                  description:
                    "Expert structuring of senior debt, mezzanine, preferred equity, and common equity",
                },
                {
                  title: "Cross-Border Transactions",
                  description:
                    "International real estate transactions across European markets",
                },
                {
                  title: "Development Finance",
                  description:
                    "Specialized expertise in construction and development financing structures",
                },
                {
                  title: "Institutional Relationships",
                  description:
                    "Strong relationships with real estate debt and equity providers",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-charcoal border border-gray-dark rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-silver">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Complex Real Estate Transaction?
            </h2>
            <p className="text-xl text-silver mb-8">
              Our real estate finance team can help structure your transaction
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-electric-blue text-white rounded-lg hover:bg-blue-light transition-colors font-semibold text-lg"
              >
                Contact Our Team
              </Link>
              <Link
                href="/track-record"
                className="px-8 py-4 bg-transparent border-2 border-electric-blue text-electric-blue rounded-lg hover:bg-electric-blue hover:text-white transition-colors font-semibold text-lg"
              >
                View Track Record
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
