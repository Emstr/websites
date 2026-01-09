import type { Metadata } from "next";
import Link from "next/link";
import ContactBanner from "../../components/ContactBanner";

export const metadata: Metadata = {
  title: "Technology Corporate Finance",
  description:
    "Expert M&A and corporate finance advisory for technology companies. Supporting innovative tech businesses through funding rounds, acquisitions, and strategic partnerships.",
};

export default function TechnologyPage() {
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
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="text-electric-blue text-sm font-medium uppercase tracking-wide">
                Sector Expertise
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technology Corporate Finance
            </h1>
            <p className="text-xl text-silver leading-relaxed">
              Strategic financial advisory for technology companies navigating growth capital, strategic acquisitions, and market consolidation in the digital economy.
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
                Powering the Digital Economy
              </h2>
              <p className="text-silver mb-6 leading-relaxed">
                Technology companies face unique challenges in a rapidly evolving market. From SaaS businesses to marketplace platforms, from fintech to logistics technology, we understand the metrics, business models, and strategic drivers that matter.
              </p>
              <p className="text-silver leading-relaxed">
                Our technology practice combines deep sector knowledge with proven transaction execution, helping innovative companies access growth capital and execute strategic transactions.
              </p>
            </div>
            <div className="bg-charcoal border border-gray-dark rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Technology Advisory Services
              </h3>
              <ul className="space-y-4">
                {[
                  "Growth capital & venture rounds",
                  "M&A buy-side & sell-side",
                  "Strategic partnerships",
                  "Secondary transactions",
                  "Management buyouts",
                  "International expansion support",
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
              Technology Sub-Sectors
            </h2>
            <p className="text-xl text-silver max-w-3xl mx-auto">
              Expertise across the technology landscape
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "SaaS & Cloud",
                description:
                  "Enterprise software, cloud infrastructure, and subscription-based business models",
              },
              {
                title: "Marketplaces & E-commerce",
                description:
                  "Digital marketplaces, e-commerce platforms, and last-mile delivery solutions",
              },
              {
                title: "Fintech & Enterprise Tech",
                description:
                  "Financial technology, payments, and enterprise automation solutions",
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

      {/* Case Study Highlight */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-charcoal to-gray-dark border border-gray-dark rounded-xl p-8 md:p-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full text-electric-blue text-sm font-medium mb-6">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                Recent Transaction
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Mooveco-Muses
              </h3>
              <div className="flex items-center gap-4 text-sm text-silver mb-6">
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  France
                </span>
                <span className="text-gray-dark">|</span>
                <span>Last Mile Delivery Platform</span>
              </div>
              <p className="text-silver text-lg leading-relaxed mb-6">
                Provided corporate finance advisory to Mooveco-Muses, an innovative French technology startup revolutionizing last mile delivery. Facilitated growth financing round and supported strategic partnership development to accelerate market expansion.
              </p>
              <div className="flex items-center gap-2 text-electric-blue font-medium">
                <svg
                  className="w-5 h-5"
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
                <span>Growth Financing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Scale Your Technology Business?
            </h2>
            <p className="text-xl text-silver mb-8">
              Let our technology finance specialists help you achieve your strategic goals
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
