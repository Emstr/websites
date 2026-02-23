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
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Family-Run Since 1908</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Over a Century of Trusted{" "}<span className="text-gold-gradient">Financial Advice</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
              Independent financial advice from the name you can trust. Wealth management, pensions, investments, ethical investing, equity release and later life advice in Bridport and Dorset.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/gillinghams-ifa/contact" className="btn-accent text-lg">Schedule Consultation</Link>
              <Link href="/gillinghams-ifa/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg">Our Services</Link>
            </div>
            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>FCA Regulated</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>Whole of Market</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>Bridport, Dorset</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="180" stroke="#b8860b" strokeWidth="2" fill="none" />
            <circle cx="200" cy="200" r="140" stroke="#b8860b" strokeWidth="1" fill="none" />
            <circle cx="200" cy="200" r="100" stroke="#b8860b" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-50 py-10 border-b border-gray-200">
        <div className="container-width">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <p className="font-bold text-primary text-sm">FCA Regulated</p>
              <p className="text-xs text-gray-500 mt-1">Ref: 609295</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <p className="font-bold text-primary text-sm">Est. 1908</p>
              <p className="text-xs text-gray-500 mt-1">115+ years experience</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <p className="font-bold text-primary text-sm">Independent Advice</p>
              <p className="text-xs text-gray-500 mt-1">Whole of market access</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <p className="font-bold text-primary text-sm">Bridport Based</p>
              <p className="text-xs text-gray-500 mt-1">Serving Dorset</p>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Heritage</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">A Trusted Name Since 1908</h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                For over 115 years, Gillinghams Independent Financial Advisers has been providing independent financial advice to families and businesses in Bridport and across Dorset. As a family firm, we understand that trust is earned through generations of honest, personalised service.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our whole-of-market approach means we search the entire market to find the best solutions for your individual needs. Whether you need advice on wealth management, pensions, investments, ethical investing, equity release, or later life planning, our experienced team is here to guide you every step of the way.
              </p>
              <Link href="/gillinghams-ifa/about" className="text-accent font-semibold hover:text-accent-dark inline-flex items-center gap-2">
                Learn More About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="relative h-80 rounded-sm overflow-hidden shadow-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="text-7xl font-bold font-serif text-accent mb-4">1908</div>
                <p className="text-xl text-gray-200">Established in Bridport</p>
                <p className="text-gray-300 mt-2">Over a century of trusted advice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Comprehensive Financial Advice</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">As whole-of-market independent advisers, we search the entire market to find the best solutions for your individual needs.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-premium p-8">
              <div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Wealth Management</h3>
              <p className="text-gray-600 mb-4">Comprehensive wealth management tailored to your financial goals, combining investment strategy with tax planning.</p>
              <Link href="/gillinghams-ifa/services" className="text-accent font-semibold hover:text-accent-dark inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>
            <div className="card-premium p-8">
              <div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Pensions &amp; Retirement</h3>
              <p className="text-gray-600 mb-4">Expert pension advice including workplace pensions, SIPPs, pension consolidation, and retirement income strategies.</p>
              <Link href="/gillinghams-ifa/services" className="text-accent font-semibold hover:text-accent-dark inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>
            <div className="card-premium p-8">
              <div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Ethical Investing</h3>
              <p className="text-gray-600 mb-4">Invest in line with your values. Sustainable and ethical investment options that deliver returns while making a positive impact.</p>
              <Link href="/gillinghams-ifa/services" className="text-accent font-semibold hover:text-accent-dark inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>
            <div className="card-premium p-8">
              <div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Family Protection</h3>
              <p className="text-gray-600 mb-4">Safeguard your family&apos;s future with life assurance, critical illness cover, income protection, and family income benefit.</p>
              <Link href="/gillinghams-ifa/services" className="text-accent font-semibold hover:text-accent-dark inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>
            <div className="card-premium p-8">
              <div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Equity Release &amp; Later Life</h3>
              <p className="text-gray-600 mb-4">Specialist equity release, later life advice, and long-term care planning to protect your assets and future.</p>
              <Link href="/gillinghams-ifa/services" className="text-accent font-semibold hover:text-accent-dark inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>
            <div className="card-premium p-8">
              <div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Tax &amp; Estate Planning</h3>
              <p className="text-gray-600 mb-4">Effective tax and estate planning to protect your wealth and ensure more of your assets pass to future generations.</p>
              <Link href="/gillinghams-ifa/services" className="text-accent font-semibold hover:text-accent-dark inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>
          </div>
          <div className="text-center mt-12"><Link href="/gillinghams-ifa/services" className="btn-primary">View All Services</Link></div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Why Gillinghams</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">The Name You Can Trust</h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">Founded in 1908, Gillinghams Independent Financial Advisers has been providing whole-of-market independent financial advice to clients across Bridport and Dorset for over a century. As a family firm, we pride ourselves on building lasting relationships and delivering personalised guidance.</p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">FCA Regulated</h3>
                    <p className="text-gray-600">Fully authorised and regulated by the Financial Conduct Authority (Ref: 609295), providing you with complete peace of mind and FSCS protection.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">Whole of Market</h3>
                    <p className="text-gray-600">We&apos;re not tied to any provider, giving us access to the entire market to find the best solutions for your needs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">Family Heritage</h3>
                    <p className="text-gray-600">Over 115 years serving the Bridport and Dorset community as a family firm, building lasting relationships across generations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center"><div className="stat-number">115+</div><p className="text-gray-600 mt-2">Years Experience</p></div>
                <div className="text-center"><div className="stat-number">1908</div><p className="text-gray-600 mt-2">Year Established</p></div>
                <div className="text-center"><div className="stat-number">100%</div><p className="text-gray-600 mt-2">Independent</p></div>
                <div className="text-center"><div className="stat-number">98%</div><p className="text-gray-600 mt-2">Client Satisfaction</p></div>
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
              <p className="text-gray-600 mb-6 italic">&quot;Gillinghams have managed our pensions and investments for over 20 years. Their advice has been invaluable and we have complete confidence in their team. A true family firm.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">RH</span></div>
                <div><p className="font-semibold text-primary">Robert H.</p><p className="text-sm text-gray-500">Retired Teacher, Bridport</p></div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">&quot;The team helped us plan our retirement and set up ethical investments that align with our values. Professional, caring, and always available when we need them.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">JP</span></div>
                <div><p className="font-semibold text-primary">Janet P.</p><p className="text-sm text-gray-500">GP, Dorchester</p></div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">&quot;Their equity release advice gave us peace of mind and helped us enjoy our retirement. The whole-of-market approach means we know we&apos;re getting the best options available.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">DT</span></div>
                <div><p className="font-semibold text-primary">David T.</p><p className="text-sm text-gray-500">Retired Farmer, Lyme Regis</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Conveniently Located</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Visit Us in Bridport</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our Bridport office provides a welcoming environment for face-to-face consultations. We also offer telephone and video appointments.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="location-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <span className="text-sm text-accent font-semibold">Our Office</span>
                  <h3 className="text-2xl font-bold text-primary">Bridport, Dorset</h3>
                </div>
              </div>
              <address className="not-italic text-gray-700 mb-4"><strong>Gillinghams Independent Financial Advisers</strong><br />2 Victoria Grove<br />Bridport, Dorset DT6 3AA</address>
              <div className="space-y-3 mb-6">
                <a href="tel:01308425962" className="flex items-center gap-2 text-gray-700 hover:text-accent transition-colors">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span className="font-semibold">01308 425962</span>
                </a>
                <a href="mailto:info@gillinghamsifa.co.uk" className="flex items-center gap-2 text-gray-700 hover:text-accent transition-colors">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span className="font-semibold">info@gillinghamsifa.co.uk</span>
                </a>
              </div>
              <Link href="/gillinghams-ifa/contact" className="btn-accent w-full text-center">Book an Appointment</Link>
            </div>
            <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden shadow-lg">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.0!2d-2.7594!3d50.7333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDQ0JzAwLjAiTiAywrA0NSczNS4wIlc!5e0!3m2!1sen!2suk!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Gillinghams IFA - Bridport, Dorset"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-accent">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Let Us Take Care of Your Future</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Book a complimentary initial consultation at our Bridport office or by phone. We&apos;ll discuss your goals and how our experienced team can help you achieve them.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/gillinghams-ifa/contact" className="btn-accent">Book Free Consultation</Link>
              <a href="tel:01308425962" className="btn-outline">Call 01308 425962</a>
            </div>
          </div>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p><strong>Important Notice:</strong> Gillinghams Independent Financial Advisers Ltd is authorised and regulated by the Financial Conduct Authority (FCA Reference: 609295). The value of investments can go down as well as up, and you may get back less than you invested. Past performance is not a reliable indicator of future results. Tax treatment depends on individual circumstances and may change in the future.</p>
          </div>
        </div>
      </section>
    </>
  );
}
