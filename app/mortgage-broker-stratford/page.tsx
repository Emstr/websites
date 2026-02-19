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
                Whole of Market Mortgage Broker
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Home,{" "}
              <span className="text-green-gradient">Your Mortgage</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
              Expert mortgage advice from Stratford, East London. Whether
              you&apos;re buying your first home, remortgaging, or investing in
              property, we search the whole market to find you the best deal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/mortgage-broker-stratford/contact"
                className="btn-accent text-lg"
              >
                Free Consultation
              </Link>
              <Link
                href="/mortgage-broker-stratford/services"
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
                <span>FCA Regulated</span>
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
                <span>Free Initial Consultation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="180" stroke="#38a169" strokeWidth="2" fill="none" />
            <circle cx="200" cy="200" r="140" stroke="#38a169" strokeWidth="1" fill="none" />
            <circle cx="200" cy="200" r="100" stroke="#38a169" strokeWidth="0.5" fill="none" />
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
              Mortgage Solutions for Every Situation
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From stepping onto the property ladder to growing a portfolio,
              we provide expert advice across the full spectrum of mortgage products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* First-Time Buyer */}
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">First-Time Buyer</h3>
              <p className="text-gray-600 mb-4">
                Step onto the property ladder with confidence. We guide you through
                every stage, from agreement in principle to completion day.
              </p>
              <Link href="/mortgage-broker-stratford/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Remortgaging */}
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Remortgaging</h3>
              <p className="text-gray-600 mb-4">
                Don&apos;t overpay on your mortgage. We compare thousands of deals
                to find you a better rate and potentially save you thousands.
              </p>
              <Link href="/mortgage-broker-stratford/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Buy-to-Let */}
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Buy-to-Let</h3>
              <p className="text-gray-600 mb-4">
                Build your property portfolio with specialist buy-to-let
                mortgages. Expert advice on rental yields, tax implications and
                lender criteria.
              </p>
              <Link href="/mortgage-broker-stratford/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Help to Buy */}
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Help to Buy</h3>
              <p className="text-gray-600 mb-4">
                Make the most of government schemes designed to help you buy
                your first home. We handle the complexity so you don&apos;t have to.
              </p>
              <Link href="/mortgage-broker-stratford/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Shared Ownership */}
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Shared Ownership</h3>
              <p className="text-gray-600 mb-4">
                Buy a share of your home and pay rent on the rest. We specialise
                in shared ownership mortgages across London housing associations.
              </p>
              <Link href="/mortgage-broker-stratford/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Commercial Mortgages */}
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Commercial Mortgages</h3>
              <p className="text-gray-600 mb-4">
                Finance your business premises, mixed-use property or development
                project with our specialist commercial lending expertise.
              </p>
              <Link href="/mortgage-broker-stratford/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/mortgage-broker-stratford/services" className="btn-primary">
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
                Why Stratford Mortgage Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
                Honest Advice, Better Mortgages
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">
                As a whole of market broker, we&apos;re not tied to any single
                lender. We search across dozens of banks, building societies
                and specialist lenders to find the mortgage that truly fits
                your circumstances and goals.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">FCA Regulated</h3>
                    <p className="text-gray-600">
                      Fully authorised and regulated by the Financial Conduct
                      Authority, giving you complete peace of mind that you&apos;re
                      protected.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">Whole of Market Access</h3>
                    <p className="text-gray-600">
                      We compare deals from over 90 lenders including high
                      street banks, building societies, and specialist lenders
                      you won&apos;t find on the high street.
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
                    <h3 className="text-lg font-bold text-primary mb-1">From Start to Finish</h3>
                    <p className="text-gray-600">
                      We don&apos;t just find you a mortgage and disappear. We
                      manage the entire application process, liaising with
                      solicitors, estate agents and valuers on your behalf.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="stat-number">10+</div>
                  <p className="text-gray-600 mt-2">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="stat-number">2,500+</div>
                  <p className="text-gray-600 mt-2">Mortgages Arranged</p>
                </div>
                <div className="text-center">
                  <div className="stat-number">90+</div>
                  <p className="text-gray-600 mt-2">Lenders Compared</p>
                </div>
                <div className="text-center">
                  <div className="stat-number">4.9</div>
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
                &quot;As a first-time buyer in London, I was completely overwhelmed. Stratford
                Mortgage Solutions made the whole process painless. They found me a rate
                I couldn&apos;t believe and handled everything from start to finish.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">DP</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">Daniel P.</p>
                  <p className="text-sm text-gray-500">First-Time Buyer, Stratford</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">
                &quot;I was coming off a fixed rate and my lender&apos;s SVR was crippling.
                The team found me a deal that saved over &pound;300 a month. I only
                wish I&apos;d come to them sooner.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">FK</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">Fatima K.</p>
                  <p className="text-sm text-gray-500">Remortgage Client, Forest Gate</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">
                &quot;Brilliant service for my buy-to-let portfolio. They understand
                the East London property market inside out and found lenders
                willing to work with my complex income structure.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">MO</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">Marcus O.</p>
                  <p className="text-sm text-gray-500">Property Investor, Canary Wharf</p>
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
              Ready to Find Your Perfect Mortgage?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book a free, no-obligation consultation at our Stratford office
              or by phone. We&apos;ll discuss your situation and show you what&apos;s
              available across the whole market.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/mortgage-broker-stratford/contact" className="btn-accent">
                Book Free Consultation
              </Link>
              <a
                href="tel:02079466901"
                className="btn-outline"
              >
                Call 020 7946 6901
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
              <strong>Important Notice:</strong> Stratford Mortgage Solutions Ltd
              is authorised and regulated by the Financial Conduct Authority (FCA).
              Your home may be repossessed if you do not keep up repayments on
              your mortgage. There may be a fee for mortgage advice. The actual
              amount you pay will depend upon your circumstances.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
