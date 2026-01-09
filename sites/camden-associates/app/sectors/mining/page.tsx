import type { Metadata } from "next";
import Link from "next/link";
import ContactBanner from "../../components/ContactBanner";

export const metadata: Metadata = {
  title: "Mining & Exploration Corporate Finance",
  description:
    "Specialized advisory for junior mining and exploration companies. From project financing to strategic transactions in the resources sector.",
};

export default function MiningPage() {
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
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  />
                </svg>
              </div>
              <div className="text-electric-blue text-sm font-medium uppercase tracking-wide">
                Sector Expertise
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Mining & Exploration Finance
            </h1>
            <p className="text-xl text-silver leading-relaxed">
              Specialized corporate finance advisory for junior mining and exploration companies navigating project financing, strategic partnerships, and M&A transactions in the resources sector.
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
                Resources Sector Expertise
              </h2>
              <p className="text-silver mb-6 leading-relaxed">
                Junior mining and exploration companies face unique financing challenges, from early-stage exploration through development and into production. We understand the technical, regulatory, and market dynamics that drive value in the resources sector.
              </p>
              <p className="text-silver leading-relaxed">
                Our team brings deep experience in structuring mining finance transactions, from stream and royalty arrangements to joint ventures with major mining companies, and we maintain strong relationships across the mining investment community.
              </p>
            </div>
            <div className="bg-charcoal border border-gray-dark rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Mining Finance Services
              </h3>
              <ul className="space-y-4">
                {[
                  "Exploration & project financing",
                  "Stream & royalty arrangements",
                  "Joint venture structuring",
                  "M&A advisory for mining assets",
                  "Farm-in & farm-out agreements",
                  "Public market fundraising",
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
              Commodities We Cover
            </h2>
            <p className="text-xl text-silver max-w-3xl mx-auto">
              Comprehensive expertise across the resources spectrum
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Precious Metals",
                description:
                  "Gold, silver, platinum group metals exploration and production projects",
              },
              {
                title: "Base & Battery Metals",
                description:
                  "Copper, zinc, nickel, lithium, cobalt and other critical minerals",
              },
              {
                title: "Bulk Commodities",
                description:
                  "Iron ore, coal, and other bulk mining and extraction projects",
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

      {/* Project Stages */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Financing Across Project Stages
            </h2>
            <div className="space-y-6">
              {[
                {
                  stage: "Exploration",
                  description:
                    "Early-stage financing for drill programs and resource definition",
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  ),
                },
                {
                  stage: "Development",
                  description:
                    "Project development financing including feasibility studies and permitting",
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  ),
                },
                {
                  stage: "Construction",
                  description:
                    "Construction and pre-production financing through to first production",
                  icon: (
                    <svg
                      className="w-6 h-6"
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
                  ),
                },
                {
                  stage: "Production",
                  description:
                    "Operating mine financing, expansion capital, and strategic transactions",
                  icon: (
                    <svg
                      className="w-6 h-6"
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
                },
              ].map((item) => (
                <div
                  key={item.stage}
                  className="bg-charcoal border border-gray-dark rounded-xl p-6 flex items-start gap-4 hover:border-electric-blue transition-all"
                >
                  <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 text-electric-blue">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.stage}
                    </h3>
                    <p className="text-silver">{item.description}</p>
                  </div>
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
              Need Mining Finance Expertise?
            </h2>
            <p className="text-xl text-silver mb-8">
              Contact our resources team to discuss your project financing needs
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
