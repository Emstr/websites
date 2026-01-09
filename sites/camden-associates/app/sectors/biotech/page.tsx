import type { Metadata } from "next";
import Link from "next/link";
import ContactBanner from "../../components/ContactBanner";

export const metadata: Metadata = {
  title: "Biotech Corporate Finance",
  description:
    "Expert corporate finance advisory for biotech companies. From early-stage platforms to commercial therapeutics, we understand the unique challenges of biotech financing.",
};

export default function BiotechPage() {
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
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <div className="text-electric-blue text-sm font-medium uppercase tracking-wide">
                Sector Expertise
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Biotech Corporate Finance
            </h1>
            <p className="text-xl text-silver leading-relaxed">
              Specialized advisory for biotechnology companies navigating the complex landscape of life sciences financing, from seed rounds to IPOs and strategic partnerships.
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
                Deep Understanding of Life Sciences
              </h2>
              <p className="text-silver mb-6 leading-relaxed">
                The biotech sector requires specialized knowledge of drug development timelines, regulatory pathways, and the unique risk-reward profile of therapeutic development. Our team brings this expertise to every transaction.
              </p>
              <p className="text-silver leading-relaxed">
                We understand the challenges facing biotech companies at every stage, from pre-clinical platforms to commercial-stage therapeutics, and we structure transactions that reflect the realities of life sciences innovation.
              </p>
            </div>
            <div className="bg-charcoal border border-gray-dark rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Services for Biotech Companies
              </h3>
              <ul className="space-y-4">
                {[
                  "Series A through C financing",
                  "Strategic partnerships & licensing",
                  "M&A advisory",
                  "IPO readiness & execution",
                  "Bridge financing & mezzanine debt",
                  "Crossover investor introduction",
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
              Our Biotech Focus Areas
            </h2>
            <p className="text-xl text-silver max-w-3xl mx-auto">
              Specialized expertise across the life sciences spectrum
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Therapeutic Development",
                description:
                  "Small molecules, biologics, cell & gene therapies across all stages of development",
              },
              {
                title: "Platform Technologies",
                description:
                  "Discovery platforms, drug delivery systems, and enabling technologies",
              },
              {
                title: "Diagnostics & Tools",
                description:
                  "Diagnostic technologies, research tools, and precision medicine platforms",
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
                THERAVECTYS
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
                  Paris, France
                </span>
                <span className="text-gray-dark">|</span>
                <span>Vaccine Platform Technology</span>
              </div>
              <p className="text-silver text-lg leading-relaxed mb-6">
                Advised THERAVECTYS, a Paris-based biotech company developing innovative vaccine platform technology, on strategic financing and investor engagement. Structured cross-border transaction to support continued platform development and clinical advancement.
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
                <span>Strategic Financing</span>
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
              Need Expert Biotech Advisory?
            </h2>
            <p className="text-xl text-silver mb-8">
              Contact us to discuss how we can support your biotech financing needs
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
