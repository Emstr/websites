import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Award-Winning Interior Design Studio in Islington",
  description:
    "Learn about Islington Interiors - an award-winning interior design studio in N1 since 2015. Four talented designers, BIID members, 200+ projects completed across London.",
  openGraph: {
    title: "About Us | Islington Interiors",
    description:
      "Award-winning interior design studio in Islington since 2015. Four designers, BIID members, creating beautiful spaces across London.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">The Studio Behind the Spaces</h1>
            <p className="text-xl text-gray-200 leading-relaxed">We are a small, dedicated team of designers who believe that great interiors start with great conversations. Based on Upper Street in Islington since 2015.</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Design With Meaning</h2>
              <div className="w-16 h-1 bg-[var(--accent)] mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">Islington Interiors was founded in 2015 by a designer who had spent a decade at large London firms and wanted to do things differently. The vision was simple: create a studio small enough to give every client genuine personal attention, but talented enough to deliver results that rival any practice in the capital.</p>
              <p className="text-gray-600 mb-6 leading-relaxed">Ten years on, our team of four designers has completed over 200 projects across London &mdash; from compact Islington flats to Georgian townhouses in Bloomsbury, penthouse apartments in the Barbican, and boutique offices in Clerkenwell. Each project is different, but our approach remains the same: listen carefully, design thoughtfully, and deliver spaces that genuinely improve how people live and work.</p>
              <p className="text-gray-600 leading-relaxed">We are proud members of the British Institute of Interior Design (BIID), which means we adhere to a strict code of professional conduct and continuing education. Our clients benefit from the confidence that comes with working with accredited professionals who are accountable to the highest industry standards.</p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-4xl font-bold text-[var(--accent)] font-serif">10+</div>
                  <p className="text-gray-600 mt-2 font-medium">Years in Islington</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-4xl font-bold text-[var(--accent)] font-serif">4</div>
                  <p className="text-gray-600 mt-2 font-medium">Talented Designers</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-4xl font-bold text-[var(--accent)] font-serif">200+</div>
                  <p className="text-gray-600 mt-2 font-medium">Projects Completed</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-4xl font-bold text-[var(--accent)] font-serif">BIID</div>
                  <p className="text-gray-600 mt-2 font-medium">Registered Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">What Guides Our Work</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Client First</h3>
              <p className="text-gray-600">Your home is personal. We start every project by understanding you &mdash; your routine, your tastes, how you use your space. The design follows the person, never the other way around.</p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Creativity With Purpose</h3>
              <p className="text-gray-600">Beautiful design is not enough on its own. Every choice we make serves a purpose &mdash; to improve comfort, maximise light, create storage, or enhance how a room feels to be in.</p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Professional Standards</h3>
              <p className="text-gray-600">As BIID members, we uphold the highest standards of professional practice. Clear contracts, transparent pricing, insured work and a commitment to continuing professional development.</p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a6 6 0 00-6-6H7" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Attention to Detail</h3>
              <p className="text-gray-600">The difference between good and exceptional is in the details. From the grain direction of a timber panel to the exact tone of a cushion trim, we obsess over the small things that make a space feel special.</p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Budget Transparency</h3>
              <p className="text-gray-600">We provide detailed quotes at the outset and keep you informed of costs throughout. No hidden fees, no scope creep, no uncomfortable conversations at the end of a project.</p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Sustainable Thinking</h3>
              <p className="text-gray-600">We prioritise sustainable materials, local suppliers and timeless design over fast trends. Spaces designed to last decades, not seasons. Better for you, better for the planet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Studio */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Visit Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Our Islington Studio</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our studio is on Upper Street in the heart of Islington, surrounded by the design shops, galleries and independent boutiques that inspire our work every day. You are always welcome to pop in for a coffee and a chat about your project.</p>
          </div>

          <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-8 lg:p-12 rounded-sm text-white">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Studio Details</h3>
                <address className="not-italic text-gray-200 mb-6 text-lg">
                  67 Upper Street<br />Islington, London N1 0NY
                </address>
                <div className="space-y-4 text-gray-200">
                  <p><strong className="text-white">Opening Hours:</strong><br />Monday &ndash; Friday: 9am &ndash; 6pm<br />Saturday: By appointment<br />Sunday: Closed</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Getting Here</h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Angel station &mdash; 3 minute walk</li>
                  <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Highbury &amp; Islington station &mdash; 6 minute walk</li>
                  <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>King&apos;s Cross station &mdash; 10 minute walk</li>
                  <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>On-street parking and nearby car parks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let&apos;s Talk About Your Space</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book a complimentary consultation and tell us about your project. Whether it is a single room or a whole home, we would love to hear your ideas.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/interior-designer-islington/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors text-lg">Book a Consultation</Link>
            <a href="tel:02079466670" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors text-lg">Call 020 7946 6670</a>
          </div>
        </div>
      </section>
    </>
  );
}
