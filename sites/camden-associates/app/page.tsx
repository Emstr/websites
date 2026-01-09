import Link from "next/link";
import SectorCard from "./components/SectorCard";
import ContactBanner from "./components/ContactBanner";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-charcoal to-background py-24 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234361ee' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              International Corporate Finance
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Strategic Financial
              <br />
              <span className="text-electric-blue">Advisory</span> for
              <br />
              Growth Companies
            </h1>
            <p className="text-xl md:text-2xl text-silver mb-8 leading-relaxed">
              Camden Associates delivers expert corporate finance advice across Biotech, Technology, Real Estate, and Mining sectors. Based in London, serving clients throughout Europe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-electric-blue text-white rounded-lg hover:bg-blue-light transition-colors font-semibold text-lg text-center"
              >
                Get in Touch
              </Link>
              <Link
                href="/track-record"
                className="px-8 py-4 bg-transparent border-2 border-electric-blue text-electric-blue rounded-lg hover:bg-electric-blue hover:text-white transition-colors font-semibold text-lg text-center"
              >
                View Our Track Record
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-charcoal border-y border-gray-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-electric-blue mb-2">
                4
              </div>
              <div className="text-silver text-sm uppercase tracking-wide">
                Core Sectors
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-electric-blue mb-2">
                15+
              </div>
              <div className="text-silver text-sm uppercase tracking-wide">
                Countries Served
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-electric-blue mb-2">
                100%
              </div>
              <div className="text-silver text-sm uppercase tracking-wide">
                Client Focused
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-electric-blue mb-2">
                24/7
              </div>
              <div className="text-silver text-sm uppercase tracking-wide">
                Deal Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Sector Expertise
            </h2>
            <p className="text-xl text-silver max-w-3xl mx-auto">
              Deep industry knowledge combined with proven transaction execution across four specialized sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <SectorCard
              title="Biotech"
              description="From early-stage platforms to commercial-stage therapeutics, we understand the unique challenges of biotech financing and strategic transactions."
              icon={
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
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              }
              href="/sectors/biotech"
            />

            <SectorCard
              title="Technology"
              description="Supporting innovative tech companies through funding rounds, acquisitions, and strategic partnerships in the digital economy."
              icon={
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
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              }
              href="/sectors/technology"
            />

            <SectorCard
              title="Real Estate"
              description="Structuring complex real estate transactions, from development finance to portfolio acquisitions and joint ventures."
              icon={
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
              }
              href="/sectors/real-estate"
            />

            <SectorCard
              title="Mining & Exploration"
              description="Specialized advisory for junior mining and exploration companies, from project financing to strategic transactions."
              icon={
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
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  />
                </svg>
              }
              href="/sectors/mining"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Camden Associates
            </h2>
            <p className="text-xl text-silver max-w-3xl mx-auto">
              We combine deep sector expertise with proven deal execution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-electric-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                International Reach
              </h3>
              <p className="text-silver">
                Operating across Europe with a strong network in London, Paris, and beyond
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-electric-blue"
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
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Sector Specialists
              </h3>
              <p className="text-silver">
                Deep expertise in Biotech, Tech, Real Estate, and Mining sectors
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-electric-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Deal Execution
              </h3>
              <p className="text-silver">
                Proven track record of closing complex cross-border transactions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Recent Transaction Highlights
            </h2>
            <p className="text-xl text-silver max-w-3xl mx-auto">
              A selection of our recent advisory work
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-charcoal border border-gray-dark rounded-xl p-8 hover:border-electric-blue transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
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
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    THERAVECTYS
                  </h3>
                  <div className="text-sm text-silver mb-3">
                    Paris, France • Biotech
                  </div>
                </div>
              </div>
              <p className="text-silver mb-4">
                Advised on strategic financing for innovative vaccine platform technology. Supported cross-border transaction structuring and investor engagement.
              </p>
              <div className="flex items-center gap-2 text-electric-blue text-sm font-medium">
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
                Strategic Financing
              </div>
            </div>

            <div className="bg-charcoal border border-gray-dark rounded-xl p-8 hover:border-electric-blue transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
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
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Mooveco-Muses
                  </h3>
                  <div className="text-sm text-silver mb-3">
                    France • Technology
                  </div>
                </div>
              </div>
              <p className="text-silver mb-4">
                Provided corporate finance advisory for last mile delivery platform. Facilitated funding round and strategic partnership development.
              </p>
              <div className="flex items-center gap-2 text-electric-blue text-sm font-medium">
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
                Growth Financing
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/track-record"
              className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-electric-blue text-electric-blue rounded-lg hover:bg-electric-blue hover:text-white transition-colors font-semibold"
            >
              View Full Track Record
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <ContactBanner />
    </>
  );
}
