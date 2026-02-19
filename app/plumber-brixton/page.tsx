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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[var(--accent)]"></div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
                Gas Safe Registered Plumber
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Reliable Plumbing in{" "}
              <span className="text-gold-gradient">Brixton, SW2</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
              From burst pipes at 3am to complete bathroom renovations, Brixton
              Plumbing Services has been keeping South London homes flowing for
              over 15 years. Gas Safe registered. Free quotes. No call-out fee.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/plumber-brixton/contact"
                className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors text-lg text-center"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:02079460123"
                className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors text-lg text-center"
              >
                Emergency? Call Now
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Gas Safe Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free Quotes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="180" stroke="#e8530e" strokeWidth="2" fill="none" />
            <circle cx="200" cy="200" r="140" stroke="#e8530e" strokeWidth="1" fill="none" />
            <circle cx="200" cy="200" r="100" stroke="#e8530e" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">
              Complete Plumbing Solutions
            </h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether it&apos;s a dripping tap or a full central heating installation,
              our experienced team handles every plumbing job with skill and care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Emergency Plumbing */}
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow border-t-4 border-transparent hover:border-[var(--accent)]">
              <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Emergency Plumbing</h3>
              <p className="text-gray-600 mb-4">
                Burst pipe at 2am? Flooding kitchen? We provide round-the-clock
                emergency plumbing across Brixton and South London. Fast response,
                no call-out fee.
              </p>
              <Link href="/plumber-brixton/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Boiler Installation & Repair */}
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow border-t-4 border-transparent hover:border-[var(--accent)]">
              <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Boiler Installation &amp; Repair</h3>
              <p className="text-gray-600 mb-4">
                Gas Safe registered engineers for all boiler work. New installations,
                annual servicing, breakdowns, and replacements. All major brands covered.
              </p>
              <Link href="/plumber-brixton/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Bathroom Installation */}
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow border-t-4 border-transparent hover:border-[var(--accent)]">
              <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Bathroom Installation</h3>
              <p className="text-gray-600 mb-4">
                From design to completion, we create beautiful bathrooms. Full
                installations, wet rooms, walk-in showers, and accessibility
                adaptations.
              </p>
              <Link href="/plumber-brixton/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Central Heating */}
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow border-t-4 border-transparent hover:border-[var(--accent)]">
              <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Central Heating</h3>
              <p className="text-gray-600 mb-4">
                Full central heating installations, radiator replacements, power
                flushing, and thermostat upgrades. Keep your home warm and efficient.
              </p>
              <Link href="/plumber-brixton/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Leak Detection & Repair */}
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow border-t-4 border-transparent hover:border-[var(--accent)]">
              <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Leak Detection &amp; Repair</h3>
              <p className="text-gray-600 mb-4">
                Non-invasive leak detection using the latest technology. We find
                hidden leaks fast and fix them properly, minimising damage to your
                property.
              </p>
              <Link href="/plumber-brixton/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Drain Unblocking */}
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow border-t-4 border-transparent hover:border-[var(--accent)]">
              <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Drain Unblocking</h3>
              <p className="text-gray-600 mb-4">
                Blocked drains cleared quickly and efficiently. High-pressure jetting,
                CCTV drain surveys, and root removal. Domestic and commercial.
              </p>
              <Link href="/plumber-brixton/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/plumber-brixton/services" className="bg-[var(--primary)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--secondary)] transition-colors inline-block">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">
                Brixton&apos;s Most Trusted Plumber
              </h2>
              <div className="w-16 h-1 bg-[var(--accent)] mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">
                When you&apos;ve got a plumbing emergency, you need someone you can
                trust to turn up on time, do the job properly, and charge a fair
                price. That&apos;s been our promise to Brixton since day one.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--primary)] mb-1">Gas Safe Registered</h3>
                    <p className="text-gray-600">
                      All our engineers are Gas Safe registered and fully qualified.
                      You can verify our registration at any time for complete peace of mind.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--primary)] mb-1">24/7 Emergency Response</h3>
                    <p className="text-gray-600">
                      Plumbing emergencies don&apos;t wait for business hours. We&apos;re
                      available round the clock, 365 days a year. Average response
                      time under 60 minutes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--primary)] mb-1">Transparent Pricing</h3>
                    <p className="text-gray-600">
                      No hidden charges. No inflated quotes. We give you a clear,
                      written quote before starting any work, so there are never
                      any surprises.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[var(--accent)]">15+</div>
                  <p className="text-gray-600 mt-2">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[var(--accent)]">5,000+</div>
                  <p className="text-gray-600 mt-2">Jobs Completed</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[var(--accent)]">&lt;60m</div>
                  <p className="text-gray-600 mt-2">Avg Response Time</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[var(--accent)]">100%</div>
                  <p className="text-gray-600 mt-2">Gas Safe Registered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
              Customer Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              What Our Customers Say
            </h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm shadow-lg">
              <p className="text-gray-600 mb-6 italic">
                &quot;Had a burst pipe on a Sunday evening. Called Brixton Plumbing
                and they were at my door within 40 minutes. Professional, quick,
                and didn&apos;t charge me a fortune. Highly recommend.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                  <span className="text-[var(--primary)] font-bold">DT</span>
                </div>
                <div>
                  <p className="font-semibold text-[var(--primary)]">David T.</p>
                  <p className="text-sm text-gray-500">Homeowner, Brixton Hill</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-lg">
              <p className="text-gray-600 mb-6 italic">
                &quot;They installed a new combi boiler for us and the difference
                is incredible. The team was tidy, explained everything clearly,
                and finished ahead of schedule. Great value for money.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                  <span className="text-[var(--primary)] font-bold">SN</span>
                </div>
                <div>
                  <p className="font-semibold text-[var(--primary)]">Sarah N.</p>
                  <p className="text-sm text-gray-500">Landlord, Herne Hill</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-lg">
              <p className="text-gray-600 mb-6 italic">
                &quot;Brilliant job on our bathroom renovation. They managed the
                whole project from start to finish and it looks stunning. We&apos;ve
                used them three times now and they never disappoint.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                  <span className="text-[var(--primary)] font-bold">MK</span>
                </div>
                <div>
                  <p className="font-semibold text-[var(--primary)]">Michael K.</p>
                  <p className="text-sm text-gray-500">Homeowner, Tulse Hill</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-[var(--accent)]">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
              Need a Plumber in Brixton?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether it&apos;s an emergency or a planned project, get in touch for
              a free, no-obligation quote. We&apos;re here to help 24/7.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/plumber-brixton/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">
                Get a Free Quote
              </Link>
              <a
                href="tel:02079460123"
                className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--primary)] hover:text-white transition-colors inline-block"
              >
                Call 020 7946 0123
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Notice */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-sm p-4 text-sm text-gray-600">
            <p>
              <strong>Gas Safe Registered:</strong> Brixton Plumbing Services is
              Gas Safe registered. All gas work is carried out by qualified
              engineers. We are fully insured with public liability cover and
              provide written guarantees on all workmanship.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
