import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container-width relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-accent"></div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                Dulwich&apos;s Leading Estate Agents
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Property,{" "}
              <span className="text-gold-gradient">Our Passion</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
              Whether you&apos;re selling, letting, buying or investing, Dulwich
              Property Group delivers exceptional results with unmatched local
              expertise in SE21 and South East London.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/estate-agent-dulwich/contact"
                className="btn-accent text-lg"
              >
                Book Free Valuation
              </Link>
              <Link
                href="/estate-agent-dulwich/services"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg"
              >
                Our Services
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>NAEA Propertymark</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Trading Standards Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Local Experts</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path d="M200 50 L350 150 L350 350 L50 350 L50 150 Z" stroke="#c7944a" strokeWidth="2" fill="none" />
            <path d="M200 80 L320 160 L320 320 L80 320 L80 160 Z" stroke="#c7944a" strokeWidth="1" fill="none" />
            <path d="M200 110 L290 170 L290 290 L110 290 L110 170 Z" stroke="#c7944a" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              Complete Property Services
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From sales and lettings to valuations and investment advice, we provide
              the full spectrum of property services in Dulwich and South East London.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Property Sales</h3>
              <p className="text-gray-600 mb-4">
                Expert marketing and negotiation to achieve the best price for your
                Dulwich property. Professional photography, floor plans and premium portal listings included.
              </p>
              <Link href="/estate-agent-dulwich/services" className="text-accent font-semibold inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Property Lettings</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive lettings service for landlords and tenants. Tenant
                referencing, inventory management and full legal compliance guaranteed.
              </p>
              <Link href="/estate-agent-dulwich/services" className="text-accent font-semibold inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Property Valuations</h3>
              <p className="text-gray-600 mb-4">
                Accurate, market-leading valuations backed by decades of Dulwich
                expertise. Free, no-obligation valuations for sales and lettings.
              </p>
              <Link href="/estate-agent-dulwich/services" className="text-accent font-semibold inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Property Management</h3>
              <p className="text-gray-600 mb-4">
                Full property management for landlords who want hassle-free lettings.
                Rent collection, maintenance and tenant relations handled for you.
              </p>
              <Link href="/estate-agent-dulwich/services" className="text-accent font-semibold inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">New Homes</h3>
              <p className="text-gray-600 mb-4">
                Specialist new-build sales and marketing. We work with leading
                developers to bring the finest new homes to Dulwich buyers.
              </p>
              <Link href="/estate-agent-dulwich/services" className="text-accent font-semibold inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Investment Property</h3>
              <p className="text-gray-600 mb-4">
                Expert guidance on property investment in South East London. Yield
                analysis, portfolio building and market insights to maximise your returns.
              </p>
              <Link href="/estate-agent-dulwich/services" className="text-accent font-semibold inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/estate-agent-dulwich/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                Why Dulwich Property Group
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
                The Dulwich Property Experts
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">
                We live and breathe Dulwich property. Our team knows every street,
                every school catchment and every micro-market in SE21. That local
                knowledge translates into better prices for sellers and smarter
                decisions for buyers.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">NAEA Propertymark Members</h3>
                    <p className="text-gray-600">
                      Full members of the National Association of Estate Agents,
                      guaranteeing professional standards and client money protection.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">Unrivalled Local Knowledge</h3>
                    <p className="text-gray-600">
                      Our team lives in the area and knows Dulwich inside out, from
                      Dulwich Village to East Dulwich and Herne Hill.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">Premium Marketing</h3>
                    <p className="text-gray-600">
                      Professional photography, drone footage, floor plans and
                      premium portal listings to showcase your property at its best.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="stat-number">15+</div>
                  <p className="text-gray-600 mt-2">Years in Dulwich</p>
                </div>
                <div className="text-center">
                  <div className="stat-number">1,200+</div>
                  <p className="text-gray-600 mt-2">Properties Sold</p>
                </div>
                <div className="text-center">
                  <div className="stat-number">98%</div>
                  <p className="text-gray-600 mt-2">Asking Price Achieved</p>
                </div>
                <div className="text-center">
                  <div className="stat-number">4.9/5</div>
                  <p className="text-gray-600 mt-2">Google Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Client Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              What Our Clients Say
            </h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">
                &quot;Dulwich Property Group sold our Victorian terrace in just two
                weeks, achieving well above the asking price. Their knowledge of
                the local market is genuinely unmatched.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">AT</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">Andrew T.</p>
                  <p className="text-sm text-gray-500">Seller, Dulwich Village</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">
                &quot;As first-time buyers, we were nervous about the process. The
                team guided us through every step and found us the perfect family
                home near the park.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">LR</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">Laura R.</p>
                  <p className="text-sm text-gray-500">Buyer, East Dulwich</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">
                &quot;I&apos;ve used their lettings service for three properties and
                they&apos;ve always found excellent tenants quickly. Their management
                service means I can be truly hands-off.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">MH</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">Michael H.</p>
                  <p className="text-sm text-gray-500">Landlord, Herne Hill</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-accent">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Thinking of Selling or Letting?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book a free, no-obligation property valuation with one of our local
              experts. We&apos;ll give you an honest, accurate assessment of your
              property&apos;s value in today&apos;s market.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/estate-agent-dulwich/contact" className="btn-accent">
                Book Free Valuation
              </Link>
              <a href="tel:02079462345" className="btn-outline">
                Call 020 7946 2345
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Professional Standards:</strong> Dulwich Property Group is a
              member of NAEA Propertymark and complies with all Trading Standards
              regulations. We are registered with a government-approved redress scheme
              and hold Client Money Protection insurance. All fees are transparent and
              agreed in writing before instruction.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
