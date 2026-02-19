import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Electrical Services | Rewiring, Fuse Boards, EICR & EV Chargers",
  description:
    "Full range of electrical services in Greenwich, SE10. Rewiring, fuse board upgrades, EICR testing, lighting, EV charger installation, and smart home wiring. NICEIC approved.",
  openGraph: {
    title: "Electrical Services | Greenwich Electrical Solutions",
    description: "NICEIC approved electrical services in Greenwich. Rewiring, fuse boards, testing, lighting, EV chargers, and smart home wiring.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "rewiring",
      title: "Rewiring",
      subtitle: "Complete Electrical Rewiring to 18th Edition Standards",
      description: "Older properties in Greenwich often have outdated wiring that can be a serious safety hazard. Our rewiring service brings your electrics up to current BS 7671 (18th Edition) standards, improving safety and allowing your home to handle modern electrical demands.",
      features: [
        "Full and partial house rewiring",
        "Minimal disruption — we work room by room",
        "All wiring to BS 7671 18th Edition standards",
        "New consumer unit included where required",
        "Electrical Installation Certificate on completion",
        "5-year guarantee on all workmanship",
      ],
      icon: (<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>),
    },
    {
      id: "fuse-board-upgrades",
      title: "Fuse Board Upgrades",
      subtitle: "Modern Consumer Units with RCD Protection",
      description: "If your property still has an old-style fuse box with rewirable fuses, you're missing vital safety features. We replace outdated fuse boards with modern consumer units featuring RCD protection, which can detect faults and cut power in milliseconds.",
      features: [
        "Full consumer unit replacement",
        "RCD and RCBO protection for every circuit",
        "Surge protection devices available",
        "Labelled and colour-coded to regulations",
        "Minor Works or Installation Certificate issued",
        "Typically completed in half a day",
      ],
      icon: (<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>),
    },
    {
      id: "eicr-testing",
      title: "Electrical Testing (EICR)",
      subtitle: "Essential Safety Reports for Homeowners & Landlords",
      description: "An Electrical Installation Condition Report (EICR) assesses the safety of your property's electrical installations. Since 2020, landlords in England are legally required to have an EICR for every rental property, renewed every 5 years.",
      features: [
        "Full EICR testing to BS 7671 standards",
        "Legally required for all rental properties",
        "Detailed report with observations and recommendations",
        "Remedial work quoted and carried out if needed",
        "Certificates valid for 5 years",
        "Competitive rates for landlords with multiple properties",
      ],
      icon: (<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>),
    },
    {
      id: "lighting-installation",
      title: "Lighting Installation",
      subtitle: "Transform Your Space with Expert Lighting Design",
      description: "Good lighting transforms a space. Whether you want to upgrade to energy-efficient LEDs, install feature lighting, or illuminate your garden, our electricians design and install lighting solutions that enhance your property's look and functionality.",
      features: [
        "LED downlight and spotlight installation",
        "Kitchen and bathroom lighting schemes",
        "Garden and exterior lighting",
        "Smart lighting systems (Philips Hue, Lutron)",
        "Emergency and security lighting",
        "Dimmer switch installation and wiring",
      ],
      icon: (<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>),
    },
    {
      id: "ev-charger-installation",
      title: "EV Charger Installation",
      subtitle: "Home Charging Points for Electric Vehicles",
      description: "With the shift to electric vehicles accelerating, a home charging point is an increasingly essential addition. We install all major brands of EV charger, ensuring your setup is safe, efficient, and compliant with current regulations.",
      features: [
        "Installation of all major EV charger brands",
        "Dedicated circuit from your consumer unit",
        "Smart chargers with app control and scheduling",
        "Solar panel integration where applicable",
        "Compliant with BS 7671 and IET Code of Practice",
        "Typically installed within one day",
      ],
      icon: (<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>),
    },
    {
      id: "smart-home-wiring",
      title: "Smart Home Wiring",
      subtitle: "Future-Proof Your Home with Intelligent Systems",
      description: "Smart home technology is revolutionising how we live, but it needs proper electrical infrastructure. We install the wiring and systems that make smart living possible — from automated lighting and heating to integrated security and entertainment systems.",
      features: [
        "Structured cabling for data and entertainment",
        "Smart thermostat installation (Nest, Hive, Tado)",
        "Automated lighting control systems",
        "Multi-room audio and video wiring",
        "Smart security system wiring (CCTV, alarms)",
        "Consultation on smart home planning and design",
      ],
      icon: (<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
    },
  ];

  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Professional Electrical Services in Greenwich</h1>
            <p className="text-xl text-gray-200 leading-relaxed">NICEIC approved, Part P certified electrical services for homes and businesses across Greenwich and South East London.</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">Certified Electrical Work</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Every job is carried out by qualified, NICEIC approved electricians working to the latest BS 7671 regulations. All notifiable work comes with the appropriate electrical certificates.</p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-[var(--primary)] mb-4">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-2">{service.title}</h3>
                  <p className="text-[var(--accent)] font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/electrician-greenwich/contact" className="bg-[var(--accent)] text-white px-8 py-3 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Get a Free Quote</Link>
                </div>
                <div className={`bg-gray-50 p-8 lg:p-12 rounded-sm ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-video bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-sm flex items-center justify-center">
                    <div className="text-white opacity-20 scale-150">{service.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">How We Work</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Initial Enquiry</h3>
              <p className="text-gray-600">Call or email us with details of the work you need. We&apos;ll discuss your requirements and arrange a site visit.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Survey & Quote</h3>
              <p className="text-gray-600">We survey the work, explain what&apos;s needed, and provide a detailed, fixed-price quote with no hidden costs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Installation</h3>
              <p className="text-gray-600">Our NICEIC approved electricians carry out the work to BS 7671 standards, keeping disruption to a minimum.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Test & Certify</h3>
              <p className="text-gray-600">We test all work, issue the relevant certificates, and back everything with our 5-year guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Your Electrics Sorted?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Contact us today for a free quote. All work NICEIC certified with a 5-year guarantee.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/electrician-greenwich/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Get a Free Quote</Link>
            <a href="tel:02079460456" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors inline-block">Call 020 7946 0456</a>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-sm p-4 text-sm text-gray-600">
            <p><strong>NICEIC Approved:</strong> All electrical work is carried out to BS 7671 standards by NICEIC approved contractors. Electrical certificates issued with all notifiable work. 5-year guarantee on all installations.</p>
          </div>
        </div>
      </section>
    </>
  );
}
