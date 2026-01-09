import type { Metadata } from "next";
import CaseStudyCard from "../components/CaseStudyCard";
import ContactBanner from "../components/ContactBanner";

export const metadata: Metadata = {
  title: "Track Record",
  description:
    "Camden Associates track record of successful corporate finance transactions across Biotech, Technology, Real Estate, and Mining sectors.",
};

export default function TrackRecordPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-charcoal to-background py-24 border-b border-gray-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Proven Transaction Execution
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Track Record
            </h1>
            <p className="text-xl text-silver leading-relaxed">
              A selection of successful corporate finance transactions we've advised on across Europe. Each deal reflects our commitment to delivering exceptional results for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-charcoal border-b border-gray-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-electric-blue mb-2">
                50+
              </div>
              <div className="text-silver text-sm uppercase tracking-wide">
                Transactions Advised
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-electric-blue mb-2">
                €500M+
              </div>
              <div className="text-silver text-sm uppercase tracking-wide">
                Transaction Value
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-electric-blue mb-2">
                15+
              </div>
              <div className="text-silver text-sm uppercase tracking-wide">
                Countries
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-electric-blue mb-2">
                4
              </div>
              <div className="text-silver text-sm uppercase tracking-wide">
                Core Sectors
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Transactions */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Transactions
            </h2>
            <p className="text-xl text-silver max-w-3xl mx-auto">
              Recent transactions demonstrating our sector expertise and international reach
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <CaseStudyCard
              company="THERAVECTYS"
              location="Paris, France"
              sector="Biotech - Vaccine Platform"
              description="Advised on strategic financing for innovative vaccine platform technology. Successfully structured cross-border transaction and facilitated investor engagement with international biotech investors. Supported management through complex deal negotiations and regulatory considerations."
              dealType="Strategic Financing"
              year="2024"
            />

            <CaseStudyCard
              company="Mooveco-Muses"
              location="France"
              sector="Technology - Last Mile Delivery"
              description="Provided comprehensive corporate finance advisory for last mile delivery platform. Facilitated growth financing round to support market expansion and infrastructure development. Structured strategic partnerships with logistics and retail partners across Europe."
              dealType="Growth Capital"
              year="2024"
            />
          </div>
        </div>
      </section>

      {/* Additional Transactions by Sector */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Representative Transactions by Sector
          </h2>

          <div className="space-y-12">
            {/* Biotech */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-electric-blue/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-electric-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Biotech</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    company: "THERAVECTYS",
                    type: "Strategic Financing",
                    location: "Paris",
                  },
                  {
                    company: "Cell Therapy Platform",
                    type: "Series B Financing",
                    location: "UK",
                  },
                  {
                    company: "Oncology Therapeutics",
                    type: "Licensing Partnership",
                    location: "Germany",
                  },
                ].map((deal) => (
                  <div
                    key={deal.company}
                    className="bg-background border border-gray-dark rounded-lg p-6 hover:border-electric-blue transition-all"
                  >
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {deal.company}
                    </h4>
                    <p className="text-electric-blue text-sm mb-2">{deal.type}</p>
                    <p className="text-silver text-sm">{deal.location}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-electric-blue/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-electric-blue"
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
                <h3 className="text-2xl font-bold text-white">Technology</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    company: "Mooveco-Muses",
                    type: "Growth Capital",
                    location: "France",
                  },
                  {
                    company: "SaaS Platform",
                    type: "Series A Financing",
                    location: "London",
                  },
                  {
                    company: "Fintech Startup",
                    type: "Strategic Acquisition",
                    location: "Netherlands",
                  },
                ].map((deal) => (
                  <div
                    key={deal.company}
                    className="bg-background border border-gray-dark rounded-lg p-6 hover:border-electric-blue transition-all"
                  >
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {deal.company}
                    </h4>
                    <p className="text-electric-blue text-sm mb-2">{deal.type}</p>
                    <p className="text-silver text-sm">{deal.location}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Real Estate */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-electric-blue/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-electric-blue"
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
                <h3 className="text-2xl font-bold text-white">Real Estate</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    company: "Commercial Portfolio",
                    type: "Portfolio Acquisition",
                    location: "London",
                  },
                  {
                    company: "Residential Development",
                    type: "Development Finance",
                    location: "Manchester",
                  },
                  {
                    company: "Logistics Facility",
                    type: "Joint Venture",
                    location: "Birmingham",
                  },
                ].map((deal) => (
                  <div
                    key={deal.company}
                    className="bg-background border border-gray-dark rounded-lg p-6 hover:border-electric-blue transition-all"
                  >
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {deal.company}
                    </h4>
                    <p className="text-electric-blue text-sm mb-2">{deal.type}</p>
                    <p className="text-silver text-sm">{deal.location}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mining */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-electric-blue/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-electric-blue"
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
                <h3 className="text-2xl font-bold text-white">Mining & Exploration</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    company: "Gold Exploration Project",
                    type: "Project Financing",
                    location: "Canada",
                  },
                  {
                    company: "Copper Development",
                    type: "Stream Financing",
                    location: "Chile",
                  },
                  {
                    company: "Lithium Project",
                    type: "Joint Venture",
                    location: "Australia",
                  },
                ].map((deal) => (
                  <div
                    key={deal.company}
                    className="bg-background border border-gray-dark rounded-lg p-6 hover:border-electric-blue transition-all"
                  >
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {deal.company}
                    </h4>
                    <p className="text-electric-blue text-sm mb-2">{deal.type}</p>
                    <p className="text-silver text-sm">{deal.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial / Quote Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-charcoal to-gray-dark border border-gray-dark rounded-xl p-8 md:p-12 text-center">
            <svg
              className="w-12 h-12 text-electric-blue mx-auto mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed italic">
              "Camden Associates' deep sector knowledge and international network were instrumental in helping us structure and close our financing round. Their team truly understood our business and the European investment landscape."
            </p>
            <div className="text-silver">
              <p className="font-semibold">European Technology CEO</p>
            </div>
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
