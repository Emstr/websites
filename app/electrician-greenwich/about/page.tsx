import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | NICEIC Approved Electricians Serving Greenwich",
  description: "Learn about Greenwich Electrical Solutions - NICEIC approved, Part P certified electricians with over 18 years of experience serving Greenwich and South East London.",
  openGraph: { title: "About Us | Greenwich Electrical Solutions", description: "NICEIC approved electricians with 18+ years experience in Greenwich and SE London." },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Your Local Greenwich Electrician</h1>
            <p className="text-xl text-gray-200 leading-relaxed">NICEIC approved, Part P certified, and dedicated to delivering safe, high-quality electrical work across Greenwich and South East London.</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Powering Greenwich Since 2007</h2>
              <div className="w-16 h-1 bg-[var(--accent)] mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">Greenwich Electrical Solutions was founded with a commitment to raising the standard of electrical work in South East London. Too many homeowners were dealing with cowboy electricians who left unsafe installations behind. We set out to be the opposite.</p>
              <p className="text-gray-600 mb-6 leading-relaxed">From our first EICR inspection to our latest EV charger installation, every single job has been carried out to NICEIC standards and backed by our comprehensive guarantee. We&apos;ve grown from a sole trader to a team of eight qualified electricians, but our standards haven&apos;t changed.</p>
              <p className="text-gray-600 leading-relaxed">Based in Greenwich, we understand the unique electrical challenges of South East London properties — from Georgian townhouses needing sensitive rewiring to modern flats requiring smart home integration. Whatever the job, we get it right first time.</p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="text-4xl font-bold text-[var(--accent)]">18+</div><p className="text-gray-600 mt-2 font-medium">Years of Experience</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="text-4xl font-bold text-[var(--accent)]">3,500+</div><p className="text-gray-600 mt-2 font-medium">Jobs Completed</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="text-4xl font-bold text-[var(--accent)]">8</div><p className="text-gray-600 mt-2 font-medium">Qualified Electricians</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="text-4xl font-bold text-[var(--accent)]">4.9/5</div><p className="text-gray-600 mt-2 font-medium">Customer Rating</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">What We Stand For</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Safety", desc: "Electrical safety is non-negotiable. Every installation meets or exceeds BS 7671 standards. We never take shortcuts.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { title: "Quality", desc: "We use premium materials and meticulous installation techniques. Our NICEIC approval is your guarantee of quality.", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
              { title: "Transparency", desc: "Fixed-price quotes with no hidden extras. We explain exactly what&apos;s needed and why before starting any work.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Reliability", desc: "We turn up when we say we will, finish on time, and leave your property clean and tidy. Our reputation depends on it.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Expertise", desc: "All our electricians hold the latest qualifications and complete regular training to stay current with regulations and technology.", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
              { title: "Innovation", desc: "From EV chargers to smart home wiring, we embrace new technology and help our customers future-proof their properties.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
            ].map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={value.icon} /></svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Area</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Serving South East London</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Based in the heart of Greenwich, we cover SE10 and the surrounding areas including Blackheath, Woolwich, Charlton, Lewisham, Deptford, and across South East London.</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">NICEIC Approved Contractor</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">Our NICEIC approval means our work is regularly assessed by an independent body to ensure it meets the highest industry standards. We&apos;re also Part P certified, which means we can self-certify notifiable work — saving you time and money on building control.</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Qualified Electrician in Greenwich?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Get in touch for a free, no-obligation quote. NICEIC approved with a 5-year guarantee on all work.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/electrician-greenwich/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Get a Free Quote</Link>
            <a href="tel:02079460456" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors inline-block">Call 020 7946 0456</a>
          </div>
        </div>
      </section>
    </>
  );
}
