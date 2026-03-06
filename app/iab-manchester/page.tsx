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
                Independent Financial Advice in Manchester
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Money Deserves{" "}
              <span className="text-gold-gradient">Independent Advice</span>
            </h1>

            {/* FREE CONSULTATION - MASSIVE USP */}
            <div className="bg-accent/20 border-2 border-accent rounded-sm p-6 mb-8 max-w-2xl">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-2xl md:text-3xl font-bold text-white font-serif">
                  FREE 45-Minute Consultation
                </span>
              </div>
              <p className="text-gray-200 text-lg">
                No obligation. No pressure. Just honest, independent financial advice
                tailored to your situation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/iab-manchester/contact"
                className="btn-accent text-lg"
              >
                Book Your Free Consultation
              </Link>
              <Link
                href="/iab-manchester/services"
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
                <span>Fully Independent</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free 45-Min Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>South Manchester</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="180" stroke="#c0392b" strokeWidth="2" fill="none" />
            <circle cx="200" cy="200" r="140" stroke="#c0392b" strokeWidth="1" fill="none" />
            <circle cx="200" cy="200" r="100" stroke="#c0392b" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
      </section>

      {/* Free Consultation Banner */}
      <section className="bg-accent py-6">
        <div className="container-width">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-white">
              <svg className="w-10 h-10 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-xl font-bold font-serif">Your First 45 Minutes Are On Us</p>
                <p className="text-white/80">No cost. No commitment. Just straightforward financial advice.</p>
              </div>
            </div>
            <Link
              href="/iab-manchester/contact"
              className="bg-white text-accent px-8 py-3 font-semibold rounded-sm hover:bg-gray-100 transition-colors shadow-md whitespace-nowrap"
            >
              Book Now
            </Link>
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
              Comprehensive Financial Advice
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              As fully independent advisers, we search the whole of the market to find
              the right solutions for you. Every conversation starts with a free
              45-minute consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Financial Planning */}
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Financial Planning</h3>
              <p className="text-gray-600 mb-4">
                A clear, personalised roadmap for your financial future. We look at the
                full picture and create a plan that works for your life.
              </p>
              <Link href="/iab-manchester/services" className="text-accent font-semibold hover:text-accent-dark inline-flex items-center gap-2">
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
                Expert pension advice including workplace pensions, SIPPs, drawdown
                strategies and pension consolidation.
              </p>
              <Link href="/iab-manchester/services" className="text-accent font-semibold hover:text-accent-dark inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Investments */}
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Investments</h3>
              <p className="text-gray-600 mb-4">
                Independent investment advice tailored to your goals and risk profile.
                ISAs, bonds, funds and tax-efficient investing.
              </p>
              <Link href="/iab-manchester/services" className="text-accent font-semibold hover:text-accent-dark inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Protection */}
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Protection</h3>
              <p className="text-gray-600 mb-4">
                Safeguard your family with life assurance, critical illness cover,
                income protection and mortgage protection.
              </p>
              <Link href="/iab-manchester/services" className="text-accent font-semibold hover:text-accent-dark inline-flex items-center gap-2">
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
                Plan the retirement you deserve with expert guidance on income
                strategies, drawdown and pension freedom options.
              </p>
              <Link href="/iab-manchester/services" className="text-accent font-semibold hover:text-accent-dark inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Free Consultation CTA card */}
            <div className="bg-accent rounded-sm p-8 text-white flex flex-col justify-center">
              <svg className="w-12 h-12 mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <h3 className="text-2xl font-bold mb-3 font-serif">Not Sure Where to Start?</h3>
              <p className="text-white/90 mb-6">
                Book your free 45-minute consultation. We&apos;ll listen, understand your
                situation, and give you honest advice.
              </p>
              <Link
                href="/iab-manchester/contact"
                className="bg-white text-accent px-6 py-3 font-semibold rounded-sm hover:bg-gray-100 transition-colors text-center"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                Why Choose IAB
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
                Truly Independent Advice You Can Trust
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">
                Based in South Manchester, The Independent Advice Bureau provides
                genuinely independent financial advice. We&apos;re not tied to any provider,
                so our recommendations are based solely on what&apos;s best for you. And
                your first 45 minutes are always free.
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
                      Fully authorised and regulated by the Financial Conduct Authority,
                      giving you complete peace of mind and protection.
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
                    <h3 className="text-lg font-bold text-primary mb-1">Whole-of-Market Access</h3>
                    <p className="text-gray-600">
                      We&apos;re not tied to any provider. We search the entire market to
                      find the best solutions for your needs.
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
                    <h3 className="text-lg font-bold text-primary mb-1">Free 45-Minute Consultation</h3>
                    <p className="text-gray-600">
                      Your first meeting is completely free and without obligation. We
                      take the time to understand your situation properly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="stat-number">45</div>
                  <p className="text-gray-600 mt-2">Free Minutes</p>
                </div>
                <div className="text-center">
                  <div className="stat-number">100%</div>
                  <p className="text-gray-600 mt-2">Independent</p>
                </div>
                <div className="text-center">
                  <div className="stat-number">FCA</div>
                  <p className="text-gray-600 mt-2">Regulated</p>
                </div>
                <div className="text-center">
                  <div className="stat-number">5</div>
                  <p className="text-gray-600 mt-2">Core Services</p>
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
                &quot;The free consultation was brilliant. No pressure, just clear
                advice about my pension options. I felt properly informed for the
                first time in years. Highly recommend IAB.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">DT</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">David T.</p>
                  <p className="text-sm text-gray-500">Teacher, Burnage</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">
                &quot;I was nervous about seeking financial advice, but the team made
                me feel completely at ease. The 45-minute consultation helped me
                understand exactly where I stood.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">SK</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">Sarah K.</p>
                  <p className="text-sm text-gray-500">Small Business Owner, Didsbury</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">
                &quot;Independent advice that genuinely put my interests first.
                They found me better investment options than my bank ever offered.
                The free initial meeting sealed the deal.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">MR</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">Michael R.</p>
                  <p className="text-sm text-gray-500">Engineer, Stockport</p>
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
              Ready for Your Free 45-Minute Consultation?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Take the first step towards financial confidence. Book your free,
              no-obligation consultation at our South Manchester office. We&apos;ll listen,
              we&apos;ll advise, and there&apos;s absolutely no pressure to proceed.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/iab-manchester/contact" className="btn-accent">
                Book Your Free Consultation
              </Link>
              <a
                href="tel:01612489746"
                className="btn-outline"
              >
                Call 0161 248 9746
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
              <strong>Important Notice:</strong> The Independent Advice Bureau Limited
              is authorised and regulated by the Financial Conduct Authority (FCA). The value
              of investments can go down as well as up, and you may get back less than you
              invested. Past performance is not a reliable indicator of future results. Tax
              treatment depends on individual circumstances and may change in the future.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
