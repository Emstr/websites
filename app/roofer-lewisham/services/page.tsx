import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roofing Services | Repairs, Installations & Flat Roofing",
  description:
    "Complete roofing services in Lewisham and SE London. Roof repairs, new installations, flat roofing, guttering, chimney repairs and roof surveys. TrustMark registered, 10-year guarantee.",
  openGraph: {
    title: "Roofing Services | Lewisham Roofing Specialists",
    description:
      "Expert roofing services from TrustMark registered contractors. Roof repairs, installations, flat roofing, guttering, chimney work and surveys in SE London.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "roof-repairs",
      title: "Roof Repairs",
      subtitle: "Fast, Lasting Repairs for Every Roof Type",
      description:
        "From a single slipped tile to major storm damage, our experienced roofers diagnose the problem accurately and carry out lasting repairs. We work on all roof types including slate, concrete tile, clay tile, and felt. Every repair comes with a written guarantee and we always carry common materials so many jobs can be completed on the first visit.",
      features: [
        "Emergency leak repairs — same day where possible",
        "Slipped, cracked, and missing tile replacement",
        "Storm and wind damage repair",
        "Ridge tile rebedding and repointing",
        "Roof felt and membrane replacement",
        "Moss removal and preventative treatments",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
    },
    {
      id: "new-roof-installation",
      title: "New Roof Installation",
      subtitle: "Complete Re-Roofs and New Builds",
      description:
        "When a roof is beyond economical repair, a full re-roof is the best long-term investment. We strip the existing covering, inspect and replace any damaged timbers, install new breathable membrane, battens, and your chosen covering material. All new roofs include a comprehensive 10-year guarantee on materials and workmanship.",
      features: [
        "Natural slate and clay tile roofing",
        "Concrete tile and interlocking tile systems",
        "Full timber inspection and replacement",
        "Breathable roofing membrane installation",
        "Lead flashing and valley work",
        "Building regulations compliance and sign-off",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: "flat-roofing",
      title: "Flat Roofing",
      subtitle: "Modern Flat Roof Systems Built to Last",
      description:
        "We install and repair all types of flat roofing, from traditional felt to modern EPDM rubber and GRP fibreglass systems. Flat roofs are ideal for extensions, garages, dormers, and commercial properties. Our GRP fibreglass system is seamless, watertight, and comes with a manufacturer-backed 25-year guarantee.",
      features: [
        "GRP fibreglass flat roofing (25-year guarantee)",
        "EPDM rubber roofing systems",
        "Three-layer felt roofing",
        "Flat roof repairs and patching",
        "Warm roof and cold roof insulation upgrades",
        "Green roof and balcony waterproofing",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      id: "guttering-fascias",
      title: "Guttering & Fascias",
      subtitle: "Protect Your Property from Water Damage",
      description:
        "Blocked or damaged guttering is one of the most common causes of damp and structural damage. We install and repair all guttering, fascia boards, soffits, and downpipes in uPVC, cast iron, and aluminium. Regular gutter maintenance can prevent costly problems down the line.",
      features: [
        "Complete gutter replacement in uPVC, cast iron, or aluminium",
        "Fascia board and soffit installation",
        "Downpipe replacement and realignment",
        "Gutter cleaning and maintenance contracts",
        "Box gutter lining and repair",
        "Rainwater goods for listed and period properties",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      ),
    },
    {
      id: "chimney-repairs",
      title: "Chimney Repairs",
      subtitle: "Expert Chimney Work at Height",
      description:
        "Chimneys are exposed to the worst of the weather and are a common source of leaks and damp. Our team carries out all chimney work including repointing, lead flashing replacement, cowl installation, and full chimney stack rebuilds. We use traditional lime mortar on period properties to match existing work.",
      features: [
        "Chimney stack repointing with lime or cement mortar",
        "Lead flashing replacement and stepped flashing",
        "Chimney cowl and cap fitting",
        "Chimney stack rebuilding and height reduction",
        "Chimney pot replacement",
        "Damp diagnosis and weatherproofing",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
    },
    {
      id: "roof-surveys",
      title: "Roof Surveys",
      subtitle: "Detailed Roof Condition Reports",
      description:
        "Whether you are buying a new property, planning maintenance, or dealing with an insurance claim, our comprehensive roof surveys give you a clear picture of your roof&apos;s condition. We provide detailed written reports with photographs, identifying any defects and recommending the most cost-effective solutions.",
      features: [
        "Pre-purchase roof condition surveys",
        "Insurance claim surveys and reports",
        "Planned maintenance surveys for landlords",
        "Drone-assisted surveys for large or complex roofs",
        "Detailed photographic reports",
        "Prioritised repair recommendations with costings",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Complete Roofing Services
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From minor repairs to full re-roofs, we provide expert roofing
              solutions for homeowners and businesses across Lewisham and South East London.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What We Offer
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As NFRC members and TrustMark registered contractors, we deliver
              roofing solutions that meet the highest industry standards. Every job
              is backed by our comprehensive guarantee.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-accent font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/roofer-lewisham/contact" className="btn-accent">
                    Get a Free Quote
                  </Link>
                </div>
                <div
                  className={`bg-gray-50 p-8 lg:p-12 rounded-sm ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-sm flex items-center justify-center">
                    <div className="text-white opacity-20 scale-150">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              Our Process
            </h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                1
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Free Inspection
              </h3>
              <p className="text-gray-600">
                We visit your property, inspect the roof, and discuss your
                requirements. No charge, no obligation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                2
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Detailed Quote</h3>
              <p className="text-gray-600">
                We provide a clear, itemised written quote with no hidden charges.
                We explain exactly what work is needed and why.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                3
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Expert Work</h3>
              <p className="text-gray-600">
                Our skilled roofers carry out the work to the highest standards,
                keeping your property clean and secure throughout.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                4
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Guaranteed</h3>
              <p className="text-gray-600">
                Every job comes with a written guarantee. We stand behind our
                work for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Your Roof Sorted?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today for a free inspection and no-obligation quote. We
            respond to all enquiries within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/roofer-lewisham/contact" className="btn-accent">
              Get a Free Quote
            </Link>
            <a href="tel:02079461456" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Call 020 7946 1456
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
