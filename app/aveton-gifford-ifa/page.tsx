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
                Chartered Financial Planners
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Chartered Financial Planners in{" "}
              <span className="text-gold-gradient">Edinburgh & Central Scotland</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
              Independent, whole-of-market financial advice from Chartered Financial
              Planners with over 40 years combined experience. Investment planning,
              pensions, tax mitigation and retirement planning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/aveton-gifford-ifa/contact"
                className="btn-accent text-lg"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/aveton-gifford-ifa/services"
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
                <span>Chartered Status</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>FCA Regulated</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>40+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Whole of Market</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>2 Scottish Offices</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="180" stroke="#c5a55a" strokeWidth="2" fill="none" />
            <circle cx="200" cy="200" r="140" stroke="#c5a55a" strokeWidth="1" fill="none" />
            <circle cx="200" cy="200" r="100" stroke="#c5a55a" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
      </section>

      {/* Chartered Status Banner */}
      <section className="bg-accent py-6">
        <div className="container-width">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white text-center">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <p className="text-lg font-semibold">
              Chartered Financial Planner status &mdash; the gold standard in financial planning, held by fewer than 10% of UK advisers
            </p>
          </div>
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
              Comprehensive Financial Planning
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              As Chartered Financial Planners and independent advisers, we search the
              whole of the market to find the best solutions for your unique circumstances.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Investment Planning */}
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Investment Planning</h3>
              <p className="text-gray-600 mb-4">
                Bespoke investment strategies designed to grow your wealth while managing
                risk according to your personal profile and goals.
              </p>
              <Link href="/aveton-gifford-ifa/services" className="text-accent font-semibold hover:text-accent-dark inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Pensions */}
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Pensions</h3>
              <p className="text-gray-600 mb-4">
                Expert pension advice including workplace pensions, SIPPs, and drawdown
                strategies to secure your retirement income.
              </p>
              <Link href="/aveton-gifford-ifa/services" className="text-accent font-semibold hover:text-accent-dark inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Tax Mitigation */}
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Tax Mitigation</h3>
              <p className="text-gray-600 mb-4">
                Strategic tax planning to optimise your wealth, utilising ISAs, pension
                allowances, and other tax-efficient vehicles.
              </p>
              <Link href="/aveton-gifford-ifa/services" className="text-accent font-semibold hover:text-accent-dark inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Retirement Planning */}
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Retirement Planning</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive retirement planning to ensure you achieve the lifestyle
                you want, with income strategies tailored to your needs.
              </p>
              <Link href="/aveton-gifford-ifa/services" className="text-accent font-semibold hover:text-accent-dark inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Whole-of-Market Reviews */}
            <div className="card-premium p-8 md:col-span-2 lg:col-span-1">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Whole-of-Market Reviews</h3>
              <p className="text-gray-600 mb-4">
                Independent reviews across the entire financial product market, ensuring
                you always have the most suitable arrangements in place.
              </p>
              <Link href="/aveton-gifford-ifa/services" className="text-accent font-semibold hover:text-accent-dark inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/aveton-gifford-ifa/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Two Locations Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Conveniently Located
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              Two Scottish Offices
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet with our Chartered Financial Planners at our Edinburgh head
              office or our Coatbridge location. Personal service, wherever
              suits you best.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Edinburgh Office */}
            <div className="location-card group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm text-accent font-semibold">Head Office</span>
                  <h3 className="text-2xl font-bold text-primary">Edinburgh</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Our Edinburgh head office on Cammo Road provides expert Chartered
                Financial Planning in Scotland&apos;s capital. Convenient for clients
                across Edinburgh, the Lothians and Fife.
              </p>
              <address className="not-italic text-gray-700 mb-4">
                <strong>36 Cammo Road</strong>
                <br />
                Edinburgh EH4 8AP
              </address>
              <p className="text-gray-600 mb-4">
                <strong>Derek:</strong>{" "}
                <a href="tel:01313396508" className="text-accent hover:underline">0131 339 6508</a>
              </p>
              <div className="flex items-center gap-2 text-accent group-hover:gap-3 transition-all">
                <Link href="/aveton-gifford-ifa/contact" className="font-semibold">
                  Book Edinburgh Appointment
                </Link>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Coatbridge Office */}
            <div className="location-card group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm text-primary font-semibold">Regional Office</span>
                  <h3 className="text-2xl font-bold text-primary">Coatbridge</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Our Coatbridge office serves clients across Central Scotland, including
                North Lanarkshire, Glasgow and the surrounding areas. Expert advice
                in a welcoming environment.
              </p>
              <address className="not-italic text-gray-700 mb-4">
                <strong>Gartcolt Cottages, Gartgill Road</strong>
                <br />
                Coatbridge ML5 2EQ
              </address>
              <p className="text-gray-600 mb-4">
                <strong>Hugh:</strong>{" "}
                <a href="tel:01236872751" className="text-accent hover:underline">01236 872751</a>
              </p>
              <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                <Link href="/aveton-gifford-ifa/contact" className="font-semibold">
                  Book Coatbridge Appointment
                </Link>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                Why Aveton Gifford Associates
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
                The Gold Standard in Financial Planning
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">
                Chartered Financial Planner status is the gold standard qualification
                in the profession, held by fewer than 10% of financial advisers in the
                UK. When you work with Aveton Gifford Associates, you work with
                professionals who have demonstrated the highest levels of technical
                competence and ethical standards.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">Chartered Status</h3>
                    <p className="text-gray-600">
                      The highest professional qualification for financial planners,
                      demonstrating exceptional expertise and commitment to ethical practice.
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
                    <h3 className="text-lg font-bold text-primary mb-1">Whole-of-Market Independence</h3>
                    <p className="text-gray-600">
                      We&apos;re not tied to any provider, allowing us to recommend the best
                      solutions from the entire market for your specific needs.
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
                    <h3 className="text-lg font-bold text-primary mb-1">40+ Years Combined Experience</h3>
                    <p className="text-gray-600">
                      Decades of combined experience navigating every market condition,
                      providing you with seasoned, reliable guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-12 rounded-sm shadow-lg">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="stat-number">40+</div>
                  <p className="text-gray-600 mt-2">Years Combined Experience</p>
                </div>
                <div className="text-center">
                  <div className="stat-number">2</div>
                  <p className="text-gray-600 mt-2">Scottish Offices</p>
                </div>
                <div className="text-center">
                  <div className="stat-number">100%</div>
                  <p className="text-gray-600 mt-2">Independent</p>
                </div>
                <div className="text-center">
                  <div className="stat-number">2004</div>
                  <p className="text-gray-600 mt-2">Incorporated</p>
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
                &quot;The Chartered status gave me real confidence. Derek took the
                time to understand our situation thoroughly and recommended a pension
                strategy that has made a significant difference to our retirement plans.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">AM</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">Alistair M.</p>
                  <p className="text-sm text-gray-500">Business Owner, Edinburgh</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">
                &quot;Hugh&apos;s knowledge of tax mitigation strategies has saved us
                thousands. As whole-of-market advisers, they found solutions we
                didn&apos;t even know existed. Highly recommend.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">FC</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">Fiona C.</p>
                  <p className="text-sm text-gray-500">Medical Professional, Glasgow</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">
                &quot;After years with a restricted adviser, switching to Aveton Gifford
                was transformative. Their independent, Chartered approach means I know
                I&apos;m getting the very best advice available.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">JR</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">James R.</p>
                  <p className="text-sm text-gray-500">Retired Engineer, Coatbridge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="bg-gray-50 rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-accent">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Ready to Secure Your Financial Future?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book a complimentary initial consultation at our Edinburgh or Coatbridge
              office. Our Chartered Financial Planners will discuss your goals and how
              we can help you achieve them.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/aveton-gifford-ifa/contact" className="btn-accent">
                Book Free Consultation
              </Link>
              <a
                href="tel:01313396508"
                className="btn-outline"
              >
                Call 0131 339 6508
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> Aveton Gifford Associates Limited
              is authorised and regulated by the Financial Conduct Authority (FCA).
              Company registered in Scotland No. SC268741. The value of investments
              can go down as well as up, and you may get back less than you invested.
              Past performance is not a reliable indicator of future results. Tax
              treatment depends on individual circumstances and may change in the future.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
