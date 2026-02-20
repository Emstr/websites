import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Watch Repair Services | Servicing, Restoration & More",
  description:
    "Comprehensive watch repair services in Mayfair including servicing, restoration, battery replacement, crystal replacement, strap fitting and vintage watch specialist care.",
  openGraph: {
    title: "Watch Repair Services | Mayfair Horologists",
    description:
      "Expert watch servicing, restoration and repair from our Burlington Arcade workshop. Swiss-trained master horologist caring for luxury and vintage timepieces.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "watch-servicing",
      title: "Watch Servicing",
      subtitle: "Keep Your Timepiece Running Perfectly",
      description:
        "A full service is the cornerstone of watch care. Our master horologist completely disassembles your movement, ultrasonically cleans every component, replaces worn parts, lubricates critical points with Swiss-grade oils, and reassembles with exacting precision. We then regulate the movement on our timing machine and pressure-test the case to ensure water resistance is maintained.",
      features: [
        "Complete movement disassembly and inspection",
        "Ultrasonic cleaning of all components",
        "Replacement of worn gaskets and seals",
        "Swiss-grade lubrication of the movement",
        "Timing regulation on professional equipment",
        "Water resistance testing and certification",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "complete-restoration",
      title: "Complete Restoration",
      subtitle: "Breathing New Life into Treasured Timepieces",
      description:
        "Our restoration service is for watches that need more than a routine service. Whether your timepiece has suffered water damage, a hard impact, or simply the ravages of time, we return it to its original condition. We source genuine and period-correct parts, refinish cases and dials where appropriate, and ensure the movement performs to manufacturer specifications.",
      features: [
        "Full movement overhaul and parts replacement",
        "Case refinishing and polishing",
        "Dial restoration or replacement",
        "Crown and pusher replacement",
        "Hands refinishing or sourcing period-correct replacements",
        "Complete pressure testing and quality assurance",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      id: "battery-replacement",
      title: "Battery Replacement",
      subtitle: "Swift, Professional Power Restoration",
      description:
        "We provide expert battery replacement for all quartz watches while you wait. Our horologist opens the case with the correct tools to avoid damage, fits a premium cell matched precisely to your movement, and carefully reseals the case back. We always check the gaskets and recommend replacement if necessary to maintain your watch&apos;s water resistance rating.",
      features: [
        "Completed while you wait (most watches)",
        "Premium branded cells for maximum lifespan",
        "Gasket inspection and replacement if needed",
        "Movement function check after fitting",
        "Case back resealed to factory standards",
        "All major quartz brands catered for",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: "crystal-replacement",
      title: "Crystal Replacement",
      subtitle: "Restoring Clarity and Protection",
      description:
        "A scratched or cracked crystal detracts from your watch&apos;s appearance and compromises its protection. We replace mineral, acrylic and sapphire crystals for virtually all brands and models. Each crystal is sourced to the exact specification of your watch, ensuring a precise fit that maintains water resistance and the original aesthetic.",
      features: [
        "Sapphire, mineral and acrylic crystals available",
        "Exact specification matching for every model",
        "Anti-reflective coating options",
        "Gasket replacement included where applicable",
        "Water resistance testing after fitting",
        "Domed, flat and specially shaped crystals sourced",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      id: "strap-bracelet-fitting",
      title: "Strap & Bracelet Fitting",
      subtitle: "The Perfect Complement to Your Watch",
      description:
        "The right strap or bracelet transforms how a watch looks and feels on the wrist. We offer professional fitting and adjustment services for leather straps, rubber bands, NATO straps and metal bracelets. Our workshop stocks a curated selection of premium straps, or we can fit one you provide. Bracelet sizing and link removal are completed with precision tools to avoid scratching.",
      features: [
        "Leather, rubber, NATO and textile strap fitting",
        "Metal bracelet sizing and link adjustment",
        "Spring bar replacement with correct specifications",
        "Curated selection of premium straps in stock",
        "Deployant clasp fitting and adjustment",
        "Bracelet cleaning and refinishing available",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      id: "vintage-watch-specialist",
      title: "Vintage Watch Specialist",
      subtitle: "Preserving Horological Heritage",
      description:
        "Vintage watches require a specialist touch. Our horologist has extensive experience with historic movements from all the major Swiss, British and American manufacturers. We understand the importance of preserving originality &mdash; using period-correct parts where possible and avoiding unnecessary refinishing that could diminish a watch&apos;s character and collector value.",
      features: [
        "Expert knowledge of historic movements and calibres",
        "Period-correct parts sourced from specialist suppliers",
        "Sympathetic restoration preserving originality",
        "Dial preservation and conservation techniques",
        "Vintage bracelet and strap sourcing",
        "Pre-purchase inspection and authentication advice",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
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
              Expert Watch Repair &amp; Restoration
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From routine servicing to complex restoration, every timepiece
              receives meticulous care from our Swiss-trained master horologist
              at Burlington Arcade.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Watch Care Services
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every service is carried out by our master horologist using
              professional-grade Swiss tools and genuine components. We treat
              every watch as though it were our own.
            </p>
          </div>

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
                  <Link href="/watch-repair-mayfair/contact" className="btn-accent">
                    Book This Service
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
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              How We Care for Your Watch
            </h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                1
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Assessment
              </h3>
              <p className="text-gray-600">
                We examine your watch thoroughly, diagnose any issues and provide
                a detailed, transparent quote before any work begins.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                2
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Approval</h3>
              <p className="text-gray-600">
                We discuss our findings with you and only proceed once you&apos;ve
                approved the work and the quoted price.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                3
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Expert Repair</h3>
              <p className="text-gray-600">
                Our master horologist carries out the work using Swiss tools,
                genuine parts and time-honoured techniques.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                4
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Quality Check</h3>
              <p className="text-gray-600">
                Every watch is tested on our timing machine, pressure-tested
                where appropriate, and returned with a 12-month guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Book Your Watch In?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us to arrange a service or simply drop into our Burlington
            Arcade workshop during opening hours for a free assessment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/watch-repair-mayfair/contact" className="btn-accent">
              Book a Service
            </Link>
            <a href="tel:02079468850" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Call 020 7946 8850
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
