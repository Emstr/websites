import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[var(--accent)]"></div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">NICEIC Approved Contractor</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Expert Electricians in{" "}<span className="text-gold-gradient">Greenwich, SE10</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
              From complete rewires to EV charger installations, Greenwich
              Electrical Solutions delivers safe, certified electrical work across
              South East London. NICEIC approved. Part P certified. 5-year guarantee.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/electrician-greenwich/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors text-lg text-center">
                Get a Free Quote
              </Link>
              <a href="tel:02079460456" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors text-lg text-center">
                Call Us Today
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>NICEIC Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>Part P Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>5-Year Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path d="M200 50 L350 200 L200 350 L50 200 Z" stroke="#f5a623" strokeWidth="2" fill="none" />
            <path d="M200 100 L300 200 L200 300 L100 200 Z" stroke="#f5a623" strokeWidth="1" fill="none" />
            <path d="M200 150 L250 200 L200 250 L150 200 Z" stroke="#f5a623" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Comprehensive Electrical Services</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you need a full rewire or a simple socket installation, our
              NICEIC approved electricians deliver safe, compliant work every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow border-t-4 border-transparent hover:border-[var(--accent)]">
              <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Rewiring</h3>
              <p className="text-gray-600 mb-4">Full and partial house rewiring to 18th Edition standards. Essential for older Greenwich properties with outdated wiring.</p>
              <Link href="/electrician-greenwich/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow border-t-4 border-transparent hover:border-[var(--accent)]">
              <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Fuse Board Upgrades</h3>
              <p className="text-gray-600 mb-4">Replace outdated fuse boxes with modern consumer units featuring RCD protection for maximum safety.</p>
              <Link href="/electrician-greenwich/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow border-t-4 border-transparent hover:border-[var(--accent)]">
              <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Electrical Testing (EICR)</h3>
              <p className="text-gray-600 mb-4">Electrical Installation Condition Reports for homeowners, landlords, and businesses. Now a legal requirement for rentals.</p>
              <Link href="/electrician-greenwich/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow border-t-4 border-transparent hover:border-[var(--accent)]">
              <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Lighting Installation</h3>
              <p className="text-gray-600 mb-4">Interior and exterior lighting design and installation. LED upgrades, garden lighting, and feature lighting throughout.</p>
              <Link href="/electrician-greenwich/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow border-t-4 border-transparent hover:border-[var(--accent)]">
              <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">EV Charger Installation</h3>
              <p className="text-gray-600 mb-4">OZEV approved electric vehicle charging point installation for your home. Future-proof your property with a dedicated EV charger.</p>
              <Link href="/electrician-greenwich/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow border-t-4 border-transparent hover:border-[var(--accent)]">
              <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Smart Home Wiring</h3>
              <p className="text-gray-600 mb-4">Future-proof your home with smart wiring for lighting, heating, security, and entertainment systems.</p>
              <Link href="/electrician-greenwich/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/electrician-greenwich/services" className="bg-[var(--primary)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--secondary)] transition-colors inline-block">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Greenwich&apos;s Trusted Electrician</h2>
              <div className="w-16 h-1 bg-[var(--accent)] mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">
                Electrical work is not something to take chances with. When you
                choose Greenwich Electrical Solutions, you get NICEIC approved
                contractors who are properly qualified, insured, and committed
                to getting it right.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--primary)] mb-1">NICEIC Approved</h3>
                    <p className="text-gray-600">Regularly assessed by NICEIC to ensure our work meets the highest industry standards. Your guarantee of quality.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--primary)] mb-1">Part P Certified</h3>
                    <p className="text-gray-600">We self-certify all notifiable electrical work, saving you the cost and hassle of building control inspections.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--primary)] mb-1">5-Year Guarantee</h3>
                    <p className="text-gray-600">All our work comes with a comprehensive 5-year guarantee. If anything goes wrong with our installation, we put it right free of charge.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center"><div className="text-4xl font-bold text-[var(--accent)]">18+</div><p className="text-gray-600 mt-2">Years Experience</p></div>
                <div className="text-center"><div className="text-4xl font-bold text-[var(--accent)]">3,500+</div><p className="text-gray-600 mt-2">Jobs Completed</p></div>
                <div className="text-center"><div className="text-4xl font-bold text-[var(--accent)]">5yr</div><p className="text-gray-600 mt-2">Work Guarantee</p></div>
                <div className="text-center"><div className="text-4xl font-bold text-[var(--accent)]">100%</div><p className="text-gray-600 mt-2">NICEIC Approved</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Customer Reviews</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">What Our Customers Say</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm shadow-lg">
              <p className="text-gray-600 mb-6 italic">&quot;Had our entire house rewired by Greenwich Electrical. The team was incredibly tidy and professional. They worked around our schedule and the result is faultless. NICEIC certificate provided promptly.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center"><span className="text-[var(--primary)] font-bold">JW</span></div>
                <div><p className="font-semibold text-[var(--primary)]">James W.</p><p className="text-sm text-gray-500">Homeowner, Blackheath</p></div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-lg">
              <p className="text-gray-600 mb-6 italic">&quot;They installed an EV charger at our home in Greenwich. The whole process was seamless — they handled the grant application and the installation was done in half a day. Highly recommended.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center"><span className="text-[var(--primary)] font-bold">PH</span></div>
                <div><p className="font-semibold text-[var(--primary)]">Priya H.</p><p className="text-sm text-gray-500">Homeowner, Greenwich</p></div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-lg">
              <p className="text-gray-600 mb-6 italic">&quot;As a landlord with several properties in SE10, I rely on Greenwich Electrical for all my EICR testing and remedial work. Always on time, reasonably priced, and certificates done properly.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center"><span className="text-[var(--primary)] font-bold">AT</span></div>
                <div><p className="font-semibold text-[var(--primary)]">Andrew T.</p><p className="text-sm text-gray-500">Property Landlord, Woolwich</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-[var(--accent)]">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">Need an Electrician in Greenwich?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Get in touch for a free, no-obligation quote. All work is NICEIC certified with a 5-year guarantee.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/electrician-greenwich/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Get a Free Quote</Link>
              <a href="tel:02079460456" className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--primary)] hover:text-white transition-colors inline-block">Call 020 7946 0456</a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Notice */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-sm p-4 text-sm text-gray-600">
            <p><strong>NICEIC Approved Contractor:</strong> Greenwich Electrical Solutions is an NICEIC Approved Contractor and Part P certified. All work complies with BS 7671 (18th Edition) regulations. Electrical installation certificates issued with all notifiable work.</p>
          </div>
        </div>
      </section>
    </>
  );
}
