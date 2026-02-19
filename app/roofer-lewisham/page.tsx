import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Background Pattern */}
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
                Lewisham&apos;s Trusted Roofers
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Roof,{" "}
              <span className="text-accent-gradient">Our Expertise</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
              TrustMark registered roofing contractors serving Lewisham and South
              East London. From emergency repairs to complete re-roofs, we deliver
              quality workmanship backed by a 10-year guarantee.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/roofer-lewisham/contact"
                className="btn-accent text-lg"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/roofer-lewisham/services"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg"
              >
                Our Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>TrustMark Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>NFRC Member</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>10-Year Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <polygon points="200,20 380,200 200,380 20,200" stroke="#d97706" strokeWidth="2" fill="none" />
            <polygon points="200,60 340,200 200,340 60,200" stroke="#d97706" strokeWidth="1" fill="none" />
            <polygon points="200,100 300,200 200,300 100,200" stroke="#d97706" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              Complete Roofing Solutions
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you need a minor repair or a complete new roof, our experienced
              team delivers exceptional results using premium materials and proven techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Roof Repairs */}
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Roof Repairs</h3>
              <p className="text-gray-600 mb-4">
                Fast, reliable repairs for leaks, missing tiles, storm damage and
                general wear. We fix it right the first time.
              </p>
              <Link href="/roofer-lewisham/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* New Roof Installation */}
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">New Roof Installation</h3>
              <p className="text-gray-600 mb-4">
                Complete re-roofing and new builds using premium slate, tile, or
                modern materials. Fully guaranteed for 10 years.
              </p>
              <Link href="/roofer-lewisham/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Flat Roofing */}
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Flat Roofing</h3>
              <p className="text-gray-600 mb-4">
                EPDM rubber, GRP fibreglass, and felt flat roofing systems for
                extensions, garages, and commercial properties.
              </p>
              <Link href="/roofer-lewisham/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Guttering & Fascias */}
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Guttering &amp; Fascias</h3>
              <p className="text-gray-600 mb-4">
                Replacement gutters, fascia boards, soffits, and downpipes. We keep
                rainwater flowing where it should.
              </p>
              <Link href="/roofer-lewisham/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Chimney Repairs */}
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Chimney Repairs</h3>
              <p className="text-gray-600 mb-4">
                Chimney repointing, lead flashing replacement, cowl fitting, and
                full chimney stack rebuilds.
              </p>
              <Link href="/roofer-lewisham/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Roof Surveys */}
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Roof Surveys</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive roof condition surveys with detailed written reports.
                Ideal for homebuyers and maintenance planning.
              </p>
              <Link href="/roofer-lewisham/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/roofer-lewisham/services" className="btn-primary">
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
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
                Roofers You Can Trust
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">
                Choosing the right roofer is about more than price. We are TrustMark
                registered, NFRC members, and fully insured. Every job comes with a
                written guarantee, detailed quote, and no hidden charges.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">TrustMark Registered</h3>
                    <p className="text-gray-600">
                      Government-endorsed quality mark for tradespeople. Your guarantee
                      of vetted, quality workmanship.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">NFRC Member</h3>
                    <p className="text-gray-600">
                      National Federation of Roofing Contractors member, demonstrating
                      our commitment to industry standards and best practice.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">10-Year Guarantee</h3>
                    <p className="text-gray-600">
                      Every roofing job comes with a comprehensive written guarantee
                      for your complete peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="stat-number">16+</div>
                  <p className="text-gray-600 mt-2">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="stat-number">3,000+</div>
                  <p className="text-gray-600 mt-2">Roofs Completed</p>
                </div>
                <div className="text-center">
                  <div className="stat-number">4.9/5</div>
                  <p className="text-gray-600 mt-2">Customer Rating</p>
                </div>
                <div className="text-center">
                  <div className="stat-number">10yr</div>
                  <p className="text-gray-600 mt-2">Written Guarantee</p>
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
              Customer Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              What Our Customers Say
            </h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">
                &quot;Brilliant job on our Victorian terrace roof. The team were
                punctual, tidy, and the finished result is excellent. The 10-year
                guarantee gives us real peace of mind.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">DT</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">David T.</p>
                  <p className="text-sm text-gray-500">Homeowner, Lewisham</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">
                &quot;Called them for an emergency leak on a Sunday morning and they
                were here within the hour. Professional, honest pricing, and the
                permanent repair was done the following week. Highly recommended.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">SN</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">Sarah N.</p>
                  <p className="text-sm text-gray-500">Landlord, Blackheath</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">
                &quot;Had the flat roof on our extension replaced with GRP
                fibreglass. Immaculate workmanship and they cleaned up thoroughly
                every day. Genuinely the best tradesmen we&apos;ve used.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">MR</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">Michael R.</p>
                  <p className="text-sm text-gray-500">Homeowner, Catford</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Service Area
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              Areas We Cover
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Based in Lewisham, we serve homeowners and businesses across South East London
              and the surrounding boroughs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Lewisham",
              "Blackheath",
              "Catford",
              "Lee",
              "Hither Green",
              "Brockley",
              "New Cross",
              "Deptford",
              "Greenwich",
              "Eltham",
              "Woolwich",
              "Peckham",
              "Dulwich",
              "Forest Hill",
              "Sydenham",
              "Bermondsey",
            ].map((area) => (
              <div
                key={area}
                className="bg-gray-50 p-4 rounded-sm text-center text-gray-700 font-medium hover:bg-accent/10 hover:text-primary transition-colors"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-accent">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Need a Roofer in Lewisham?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation quote for your roofing project. We offer
              honest advice, fair pricing, and workmanship you can trust.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/roofer-lewisham/contact" className="btn-accent">
                Get a Free Quote
              </Link>
              <a
                href="tel:02079461456"
                className="btn-outline"
              >
                Call 020 7946 1456
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
