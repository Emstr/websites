import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | SIA-Licensed Security Company in East London",
  description:
    "Learn about Stratford Security Solutions - SIA-licensed security company with 50+ trained guards, 24/7 control room and over a decade of experience in East London.",
  openGraph: {
    title: "About Us | Stratford Security Solutions",
    description: "Professional SIA-licensed security company protecting businesses across East London since 2011.",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Protection You Can Trust</h1>
            <p className="text-xl text-gray-200 leading-relaxed">Since 2011, Stratford Security Solutions has been providing professional, reliable security services to businesses and events across East London and beyond.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">From Stratford to Across London</h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Stratford Security Solutions was founded in 2011 by a former Metropolitan Police officer who saw a gap in the market for a security company that combined police-grade professionalism with genuine customer service. Starting with just three officers, we set out to prove that security did not have to mean compromise.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Based in Stratford, we grew alongside the regeneration of East London, providing security for construction sites during the Olympic build, retail units in Westfield, and the wave of new businesses that followed. Today we employ over 50 SIA-licensed officers and operate a 24/7 manned control room.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our reputation has been built on reliability, transparency and a genuine commitment to our clients&apos; safety. We do not just supply guards; we design, implement and manage complete security programmes that reduce risk and give you peace of mind.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">14+</div><p className="text-gray-600 mt-2 font-medium">Years of Service</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">50+</div><p className="text-gray-600 mt-2 font-medium">Trained Officers</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">24/7</div><p className="text-gray-600 mt-2 font-medium">Control Room</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">100%</div><p className="text-gray-600 mt-2 font-medium">SIA Licensed</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">What We Stand For</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Professionalism</h3>
              <p className="text-gray-600">Our officers are trained, uniformed and briefed to the highest standards. We represent your business as if it were our own.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Reliability</h3>
              <p className="text-gray-600">When we say we will be there, we will be there. Our 99.8% shift fulfilment rate speaks for itself.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">People First</h3>
              <p className="text-gray-600">We invest in our officers with fair pay, proper training and career progression. Happy, well-treated staff deliver better security.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Transparency</h3>
              <p className="text-gray-600">Clear pricing, honest reporting and open communication. No hidden charges, no surprises, no excuses.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Innovation</h3>
              <p className="text-gray-600">We embrace technology to enhance our services, from GPS-tracked patrols to digital incident reporting and remote CCTV monitoring.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Community</h3>
              <p className="text-gray-600">We are proud members of the Stratford business community and actively recruit locally, providing employment and training opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Base</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Strategically Located in Stratford</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our Stratford base and 24/7 control room give us rapid response capability across East London, with excellent transport links to the rest of the capital.</p>
          </div>
          <div className="bg-gray-50 p-8 lg:p-12 rounded-sm border-t-4 border-accent max-w-3xl mx-auto">
            <address className="not-italic text-gray-700 mb-6 text-lg">
              <strong>Stratford Security Solutions</strong><br />
              Unit 12, 80 High Street<br />
              Stratford, London E15 2QS
            </address>
            <div className="space-y-2 text-gray-600">
              <p><strong>Stratford Station:</strong> 3-minute walk</p>
              <p><strong>Stratford International:</strong> 5-minute walk</p>
              <p><strong>Maryland Station:</strong> 8-minute walk</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Secure Your Business?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Get a free security assessment and quote. No obligation, just honest advice from experienced professionals.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/security-stratford/contact" className="btn-accent">Get a Free Quote</Link>
            <a href="tel:02079469920" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 9920</a>
          </div>
        </div>
      </section>
    </>
  );
}
