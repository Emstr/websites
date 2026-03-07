import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        </div>

        <div className="container-width relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-accent"></div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Independent Financial Advice</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Financial Future,{" "}
              <span className="text-gold-gradient">Carefully Planned</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
              Established independent financial advice serving the Wirral, Liverpool and wider Merseyside region. Expert investment, pension, and retirement planning guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/endeavour-financial-planning/contact" className="btn-accent text-lg">Book Free Consultation</Link>
              <Link href="/endeavour-financial-planning/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg">Our Services</Link>
            </div>

            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>FCA Regulated</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>Independent Advice</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>Wirral</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent" />
            <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1" fill="none" className="text-accent" />
            <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-accent" />
          </svg>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Comprehensive Financial Planning</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From investment planning to retirement strategies, expert financial advice tailored to your unique circumstances and aspirations.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Investment Planning</h3>
              <p className="text-gray-600 mb-4">Bespoke investment strategies designed to grow your wealth while managing risk according to your personal goals.</p>
              <Link href="/endeavour-financial-planning/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Pension Planning</h3>
              <p className="text-gray-600 mb-4">Secure your retirement with expert pension advice, including workplace pensions, SIPPs, and drawdown strategies.</p>
              <Link href="/endeavour-financial-planning/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Tax Planning</h3>
              <p className="text-gray-600 mb-4">Strategic tax planning to optimise your wealth, utilising ISAs, VCTs, and other tax-efficient investment vehicles.</p>
              <Link href="/endeavour-financial-planning/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Life Assurance</h3>
              <p className="text-gray-600 mb-4">Protect your family&apos;s future with comprehensive life assurance, critical illness cover, and income protection.</p>
              <Link href="/endeavour-financial-planning/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Retirement Planning</h3>
              <p className="text-gray-600 mb-4">Comprehensive retirement strategies to ensure you can enjoy the lifestyle you deserve in your later years.</p>
              <Link href="/endeavour-financial-planning/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Estate Planning</h3>
              <p className="text-gray-600 mb-4">Protect your legacy and ensure your wealth passes to your loved ones as efficiently as possible.</p>
              <Link href="/endeavour-financial-planning/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/endeavour-financial-planning/services" className="btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Trusted Independent Advice</h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">Based in Wirral, we provide personal, independent financial advice that puts your interests first. As an independent adviser, we have access to the whole of the market, ensuring you receive the best possible recommendations.</p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">FCA Regulated</h3>
                    <p className="text-gray-600">Fully authorised and regulated by the Financial Conduct Authority, providing you with complete peace of mind.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">Truly Independent</h3>
                    <p className="text-gray-600">Not tied to any provider, allowing us to recommend the best solutions from the entire market for your needs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">Personal Service</h3>
                    <p className="text-gray-600">You deal directly with your adviser, building a lasting relationship based on trust and understanding.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center"><div className="stat-number">20+</div><p className="text-gray-600 mt-2">Years Experience</p></div>
                <div className="text-center"><div className="stat-number">300+</div><p className="text-gray-600 mt-2">Satisfied Clients</p></div>
                <div className="text-center"><div className="stat-number">100%</div><p className="text-gray-600 mt-2">Independent</p></div>
                <div className="text-center"><div className="stat-number">1</div><p className="text-gray-600 mt-2">Dedicated Adviser</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Client Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">What Our Clients Say</h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">&quot;Exceptional personal service. Having one dedicated adviser who truly understands my financial situation has made all the difference to my retirement planning.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">DM</span></div>
                <div><p className="font-semibold text-primary">David M.</p><p className="text-sm text-gray-500">Retired Teacher, Wirral</p></div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">&quot;Clear, honest advice without the jargon. I always feel confident that the recommendations are genuinely in my best interest.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">SH</span></div>
                <div><p className="font-semibold text-primary">Sarah H.</p><p className="text-sm text-gray-500">Business Owner</p></div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">&quot;I&apos;ve been a client for over ten years. The ongoing support and regular reviews give me great peace of mind about my family&apos;s financial future.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">PW</span></div>
                <div><p className="font-semibold text-primary">Peter W.</p><p className="text-sm text-gray-500">NHS Consultant</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-accent">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ready to Plan Your Financial Future?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Book a complimentary initial consultation. We&apos;ll discuss your goals and how we can help you achieve them.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/endeavour-financial-planning/contact" className="btn-accent">Book Free Consultation</Link>
              <a href="tel:01513462218" className="btn-outline">Call 0151 346 2218</a>
            </div>
          </div>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p><strong>Important Notice:</strong> Endeavour Financial Planning is authorised and regulated by the Financial Conduct Authority (FCA). The value of investments can go down as well as up, and you may get back less than you invested. Past performance is not a reliable indicator of future results. Tax treatment depends on individual circumstances and may change in the future.</p>
          </div>
        </div>
      </section>
    </>
  );
}
