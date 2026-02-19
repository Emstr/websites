import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plumbing Services | Emergency Plumber, Boilers & Bathrooms in Brixton",
  description:
    "Full range of plumbing services in Brixton, SW2. Emergency plumbing, boiler installation & repair, bathroom fitting, central heating, leak detection, and drain unblocking. Gas Safe registered.",
  openGraph: {
    title: "Plumbing Services | Brixton Plumbing Services",
    description:
      "Gas Safe registered plumbing services in Brixton. Emergency callouts, boilers, bathrooms, heating, leaks, and drains.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "emergency-plumbing",
      title: "Emergency Plumbing",
      subtitle: "24/7 Rapid Response Across South London",
      description:
        "When disaster strikes, you need a plumber you can rely on. Our emergency team is available round the clock, every day of the year. From burst pipes and major leaks to boiler breakdowns and overflowing toilets, we respond fast and fix the problem right the first time.",
      features: [
        "Available 24 hours a day, 7 days a week, 365 days a year",
        "Average response time under 60 minutes in Brixton",
        "No call-out fee — you only pay for the work done",
        "Temporary repairs to prevent further damage",
        "Insurance documentation provided for claims",
        "Follow-up service to ensure lasting repairs",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "boiler-installation-repair",
      title: "Boiler Installation & Repair",
      subtitle: "Gas Safe Engineers for All Boiler Work",
      description:
        "Our Gas Safe registered engineers handle everything from new boiler installations to emergency repairs. We work with all major brands including Worcester Bosch, Vaillant, Baxi, and Ideal. Whether you need a routine service or a complete system upgrade, we ensure your home stays warm and safe.",
      features: [
        "New boiler installation with up to 10-year manufacturer warranty",
        "Annual boiler servicing to maintain efficiency and safety",
        "Emergency boiler repairs — same-day where possible",
        "Landlord gas safety certificates (CP12)",
        "System upgrades from conventional to combi boilers",
        "Power flushing to restore heating efficiency",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
    },
    {
      id: "bathroom-installation",
      title: "Bathroom Installation",
      subtitle: "Beautiful Bathrooms, Expertly Fitted",
      description:
        "Transform your bathroom with our complete installation service. From initial design consultation to the final tile, we manage every aspect of your bathroom project. Our experienced fitters create stunning spaces that combine style with functionality.",
      features: [
        "Full bathroom design and installation",
        "Wet room creation and waterproofing",
        "Walk-in shower installations",
        "Disability and accessibility adaptations",
        "Tiling, flooring, and all finishing work",
        "Underfloor heating options available",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: "central-heating",
      title: "Central Heating",
      subtitle: "Keep Your Home Warm and Efficient",
      description:
        "A well-functioning central heating system is essential for comfort and energy efficiency. We install, repair, and maintain all types of central heating systems. Whether you need a complete new installation or just want to improve your existing system, our engineers deliver reliable results.",
      features: [
        "Full central heating system installation",
        "Radiator installation and replacement",
        "Power flushing to remove sludge and improve efficiency",
        "Smart thermostat installation (Nest, Hive, etc.)",
        "Underfloor heating systems",
        "Heating system diagnostics and fault-finding",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: "leak-detection-repair",
      title: "Leak Detection & Repair",
      subtitle: "Find and Fix Hidden Leaks Fast",
      description:
        "Hidden leaks can cause serious structural damage and increase your water bills. Our advanced leak detection technology pinpoints the exact location of leaks without unnecessary disruption to your property. Once found, we carry out professional repairs that last.",
      features: [
        "Thermal imaging and acoustic leak detection",
        "Non-invasive methods that minimise property damage",
        "Underground and concealed pipe leak detection",
        "Water pressure testing and analysis",
        "Pipe relining and repair without excavation",
        "Insurance report documentation for claims",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      id: "drain-unblocking",
      title: "Drain Unblocking",
      subtitle: "Professional Drainage Solutions",
      description:
        "Blocked drains are unpleasant and can lead to bigger problems if left untreated. Our drainage experts use professional equipment to clear blockages quickly and effectively. We also offer CCTV drain surveys to identify underlying issues and prevent future problems.",
      features: [
        "High-pressure water jetting to clear stubborn blockages",
        "CCTV drain surveys for accurate diagnosis",
        "Root removal from drain pipes",
        "Drain repairs and relining",
        "Gutter and downpipe clearing",
        "Preventative drainage maintenance plans",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Professional Plumbing Services in Brixton
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From emergency repairs to planned installations, our Gas Safe
              registered engineers deliver quality plumbing work across Brixton
              and South London.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
              Complete Plumbing Solutions
            </h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every job is carried out by qualified, experienced plumbers who
              take pride in their work. We&apos;re Gas Safe registered and fully
              insured for your complete peace of mind.
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
                  <div className="text-[var(--primary)] mb-4">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[var(--accent)] font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0"
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
                  <Link href="/plumber-brixton/contact" className="bg-[var(--accent)] text-white px-8 py-3 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">
                    Get a Free Quote
                  </Link>
                </div>
                <div
                  className={`bg-gray-50 p-8 lg:p-12 rounded-sm ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="aspect-video bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-sm flex items-center justify-center">
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
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">
              Simple, Straightforward Process
            </h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">
                Get in Touch
              </h3>
              <p className="text-gray-600">
                Call us or fill in our online form. Describe the issue and we&apos;ll
                give you an initial idea of what&apos;s needed.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Free Quote</h3>
              <p className="text-gray-600">
                We&apos;ll visit your property, assess the work, and provide a clear,
                written quote with no hidden costs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Expert Work</h3>
              <p className="text-gray-600">
                Our qualified engineers carry out the work efficiently and tidily,
                keeping you informed throughout.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Guaranteed</h3>
              <p className="text-gray-600">
                All work comes with a written guarantee. We stand behind everything
                we do and are always here if you need us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Your Plumbing Sorted?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation quote. Emergency? We&apos;re
            available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/plumber-brixton/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">
              Get a Free Quote
            </Link>
            <a href="tel:02079460123" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors inline-block">
              Call 020 7946 0123
            </a>
          </div>
        </div>
      </section>

      {/* Trust Notice */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-sm p-4 text-sm text-gray-600">
            <p>
              <strong>Gas Safe Registered:</strong> All gas work is carried out by
              Gas Safe registered engineers. We are fully insured and provide
              written guarantees on all work. Free quotes provided with no obligation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
