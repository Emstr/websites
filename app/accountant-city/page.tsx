import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        </div>

        <div className="container-width relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-accent"></div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">ACCA Certified Accountants</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Numbers,{" "}<span className="text-gold-gradient">Our Expertise</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
              City Accounting Partners delivers precise, proactive accounting
              services for SMEs, contractors and startups in the City of London.
              MTD-ready, cloud-based and always one step ahead of HMRC.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/accountant-city/contact" className="btn-accent text-lg">Free Consultation</Link>
              <Link href="/accountant-city/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg">Our Services</Link>
            </div>

            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>ACCA Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>ICAEW Members</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>MTD Ready</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <rect x="50" y="50" width="300" height="300" stroke="#2980b9" strokeWidth="2" fill="none" rx="10" />
            <rect x="90" y="90" width="220" height="220" stroke="#2980b9" strokeWidth="1" fill="none" rx="8" />
            <rect x="130" y="130" width="140" height="140" stroke="#2980b9" strokeWidth="0.5" fill="none" rx="6" />
          </svg>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Comprehensive Accounting Services</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From annual accounts and tax returns to payroll and company formation,
              we handle the numbers so you can focus on growing your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Business Accounting</h3>
              <p className="text-gray-600 mb-4">Annual accounts, management reports and financial statements prepared to the highest standards for sole traders, partnerships and limited companies.</p>
              <Link href="/accountant-city/services" className="text-accent font-semibold inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Tax Returns &amp; Planning</h3>
              <p className="text-gray-600 mb-4">Self Assessment, Corporation Tax and proactive tax planning to ensure you never pay more than you need to. Deadlines managed, penalties avoided.</p>
              <Link href="/accountant-city/services" className="text-accent font-semibold inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Payroll Services</h3>
              <p className="text-gray-600 mb-4">Full payroll bureau including RTI submissions, payslips, P60s, P11Ds and workplace pension auto-enrolment. From one employee to hundreds.</p>
              <Link href="/accountant-city/services" className="text-accent font-semibold inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Company Formation</h3>
              <p className="text-gray-600 mb-4">Same-day company formation with Companies House. We handle the paperwork, register for taxes and set up your accounting software from day one.</p>
              <Link href="/accountant-city/services" className="text-accent font-semibold inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">VAT Services</h3>
              <p className="text-gray-600 mb-4">VAT registration, quarterly returns and MTD-compliant digital submissions. We advise on the most beneficial VAT scheme for your business.</p>
              <Link href="/accountant-city/services" className="text-accent font-semibold inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Bookkeeping</h3>
              <p className="text-gray-600 mb-4">Accurate, timely bookkeeping using Xero, QuickBooks or FreeAgent. We keep your records clean so you always know where your business stands.</p>
              <Link href="/accountant-city/services" className="text-accent font-semibold inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/accountant-city/services" className="btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Why City Accounting Partners</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Accountants Who Understand Business</h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">
                We are not just number-crunchers. Our team of ACCA and ICAEW qualified
                accountants provides proactive advice that helps you save tax, grow
                your business and stay compliant with HMRC requirements.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">ACCA &amp; ICAEW Qualified</h3>
                    <p className="text-gray-600">Fully qualified chartered and certified accountants with professional indemnity insurance and regulatory oversight.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">MTD Ready &amp; Cloud-Based</h3>
                    <p className="text-gray-600">Fully compliant with Making Tax Digital. We use Xero, QuickBooks and FreeAgent to give you real-time visibility of your finances.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">Fixed Monthly Fees</h3>
                    <p className="text-gray-600">No surprise bills. Our transparent fixed-fee packages mean you know exactly what you will pay each month with no hidden extras.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center"><div className="stat-number">12+</div><p className="text-gray-600 mt-2">Years Experience</p></div>
                <div className="text-center"><div className="stat-number">750+</div><p className="text-gray-600 mt-2">Clients Served</p></div>
                <div className="text-center"><div className="stat-number">100%</div><p className="text-gray-600 mt-2">HMRC Compliant</p></div>
                <div className="text-center"><div className="stat-number">4.8/5</div><p className="text-gray-600 mt-2">Google Rating</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Client Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">What Our Clients Say</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">&quot;Switching to City Accounting Partners was the best business decision I made last year. They saved me thousands in tax and their Xero setup transformed how I manage my finances.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">DP</span></div>
                <div><p className="font-semibold text-primary">David P.</p><p className="text-sm text-gray-500">IT Contractor, EC2</p></div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">&quot;They handled our company formation, VAT registration and first year accounts flawlessly. Their fixed monthly fee means no surprises, which is exactly what a startup needs.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">SK</span></div>
                <div><p className="font-semibold text-primary">Sarah K.</p><p className="text-sm text-gray-500">Startup Founder, Shoreditch</p></div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">&quot;Our previous accountant was always chasing deadlines. City Accounting Partners is proactive, keeping us ahead of every filing date and HMRC requirement. Highly recommended.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">RJ</span></div>
                <div><p className="font-semibold text-primary">Robert J.</p><p className="text-sm text-gray-500">Restaurant Owner, Bank</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-accent">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ready to Switch Accountants?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book a free, no-obligation consultation. We&apos;ll review your current
              setup and show you how we can save you time and money.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/accountant-city/contact" className="btn-accent">Free Consultation</Link>
              <a href="tel:02079463456" className="btn-outline">Call 020 7946 3456</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Professional Standards:</strong> City Accounting Partners is an ACCA
              certified practice and members of ICAEW. We hold professional indemnity
              insurance and are registered with the Information Commissioner&apos;s Office.
              All tax advice is based on current legislation which may change.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
