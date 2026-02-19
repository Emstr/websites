import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Services | Residential & Commercial Architecture", description: "Architecture and design services from Shoreditch Architecture Studio. Residential design, commercial projects, planning applications, interior design, loft conversions and heritage conservation.", openGraph: { title: "Architecture Services | Shoreditch Architecture Studio", description: "RIBA Chartered architects offering residential, commercial, and heritage design services in East London." } };

const services = [
  {
    id: "residential",
    title: "Residential Architecture",
    subtitle: "Homes designed around how you live",
    description: "Whether you are building a new home, renovating an existing property or converting a commercial space, we design residences that are tailored to your lifestyle. Our residential projects range from compact flats in converted warehouses to substantial family homes, each one unique to its owners and its context.",
    features: ["New build house design", "Full property renovations", "Warehouse and barn conversions", "Multi-unit residential developments", "Feasibility studies and site appraisals", "Sustainable design and passive house principles"],
    icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
  },
  {
    id: "commercial",
    title: "Commercial Design",
    subtitle: "Workspaces that work harder",
    description: "From creative studios and co-working spaces to restaurants, retail units and mixed-use developments, we design commercial spaces that attract and retain tenants, enhance brand identity and deliver measurable returns on investment. Our Shoreditch location gives us first-hand understanding of the East London commercial market.",
    features: ["Office and co-working design", "Retail and hospitality fit-outs", "Mixed-use development", "Workplace strategy consulting", "Landlord and tenant works", "Commercial feasibility analysis"],
    icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  },
  {
    id: "planning",
    title: "Planning Applications",
    subtitle: "Navigating the planning system with confidence",
    description: "Securing planning permission is often the most critical stage of any project. We have extensive experience working with Hackney, Tower Hamlets, Islington and other London boroughs. Our understanding of local planning policy, combined with strong relationships with planning officers, gives your application the best possible chance of approval.",
    features: ["Full planning applications", "Householder applications", "Listed building consent", "Conservation area consent", "Prior approval applications", "Planning appeals and enforcement"],
    icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
  },
  {
    id: "interior",
    title: "Interior Design",
    subtitle: "Spaces that feel as good as they look",
    description: "Our interior design service extends the architectural vision into every detail of your space. We specify materials, design bespoke joinery, select finishes and coordinate with specialist craftspeople to create interiors that are cohesive, functional and beautiful. From concept boards to final snagging, we manage every element.",
    features: ["Full interior design schemes", "Bespoke joinery and furniture design", "Material and finish specification", "Kitchen and bathroom design", "Lighting design and specification", "Art consultation and styling"],
    icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>,
  },
  {
    id: "extensions",
    title: "Loft Conversions & Extensions",
    subtitle: "Maximise your property's potential",
    description: "London property is valuable — make the most of every square metre. We are specialists in loft conversions, rear extensions, side returns and basement conversions that add significant living space and value to your home. We handle everything from initial feasibility and structural advice through to planning, building regulations and construction.",
    features: ["Dormer and mansard loft conversions", "Rear and wraparound extensions", "Side return infills", "Basement conversions and light wells", "Structural engineering coordination", "Party wall advice and support"],
    icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>,
  },
  {
    id: "heritage",
    title: "Heritage & Conservation",
    subtitle: "Respecting the past, designing for the future",
    description: "East London is rich with architectural heritage — Georgian townhouses, Victorian terraces, Edwardian villas and industrial warehouses. We specialise in the sensitive adaptation and restoration of historic buildings, working closely with conservation officers to achieve designs that honour original character while meeting modern needs.",
    features: ["Listed building applications", "Conservation area projects", "Historic building surveys", "Restoration and repair specifications", "Adaptive reuse of heritage buildings", "Heritage impact assessments"],
    icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>,
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We meet you on site, listen to your brief, assess the property and discuss your budget and timeline. We provide an honest appraisal of what is achievable." },
  { step: "02", title: "Design", desc: "We develop concept designs, present options and refine the scheme based on your feedback. We produce detailed drawings, 3D visualisations and material samples." },
  { step: "03", title: "Planning & Approvals", desc: "We prepare and submit planning applications, manage building regulations approval and coordinate with structural engineers and other consultants." },
  { step: "04", title: "Construction", desc: "We tender the project to trusted contractors, administer the building contract and carry out regular site inspections to ensure quality and programme." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Services</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Architecture & Design Services</h1><p className="text-xl text-gray-200 leading-relaxed">From residential renovations to commercial developments, we provide a complete architectural service tailored to your project.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="space-y-24">
        {services.map((service, i) => (
          <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6 text-[var(--primary)]">{service.icon}</div>
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-2">{service.title}</h2>
              <p className="text-[var(--accent)] font-semibold mb-4">{service.subtitle}</p>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              <Link href="/architect-shoreditch/contact" className="btn-accent">Discuss Your Project</Link>
            </div>
            <div className={`bg-gray-50 p-8 rounded-sm ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <h3 className="text-lg font-bold text-[var(--primary)] mb-4">What&apos;s Included</h3>
              <ul className="space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3"><svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span className="text-gray-600">{f}</span></li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="text-center mb-16"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Process</span><h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">How We Work</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 max-w-2xl mx-auto">A clear, structured process from first meeting to project completion.</p></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((p) => (
            <div key={p.step} className="text-center">
              <div className="w-16 h-16 bg-[var(--accent)] rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-white font-bold text-lg">{p.step}</span></div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">{p.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div></section>

      <section className="section-padding bg-[var(--primary)]"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book a free initial consultation at our Shoreditch studio. We will discuss your brief, visit your site and provide an honest assessment.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/architect-shoreditch/contact" className="btn-accent">Book a Consultation</Link><a href="tel:02079466901" className="btn-outline border-white text-white hover:bg-white hover:text-[var(--primary)]">Call 020 7946 6901</a></div></div></section>
    </>
  );
}
