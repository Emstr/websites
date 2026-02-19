import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} /></div>
        <div className="container-width relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6"><div className="w-12 h-px bg-accent"></div><span className="text-accent font-semibold tracking-wider uppercase text-sm">SRA Regulated Solicitors</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Expert Legal Advice,{" "}<span className="text-gold-gradient">Personal Service</span></h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">Wimbledon Legal Services provides clear, practical legal advice across conveyancing, family law, wills, employment, commercial law and immigration. Approachable solicitors who fight your corner.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/solicitor-wimbledon/contact" className="btn-accent text-lg">Free Initial Consultation</Link>
              <Link href="/solicitor-wimbledon/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg">Our Services</Link>
            </div>
            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>SRA Regulated</span></div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Law Society Accredited</span></div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Legal Aid Available</span></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10"><svg viewBox="0 0 400 400" className="w-full h-full"><path d="M200 50 L350 200 L200 350 L50 200 Z" stroke="#8b4513" strokeWidth="2" fill="none" /><path d="M200 100 L300 200 L200 300 L100 200 Z" stroke="#8b4513" strokeWidth="1" fill="none" /><path d="M200 150 L250 200 L200 250 L150 200 Z" stroke="#8b4513" strokeWidth="0.5" fill="none" /></svg></div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Legal Services You Can Trust</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From property transactions to family matters, our experienced solicitors provide expert guidance across a wide range of legal areas.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-premium p-8">
              <div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Conveyancing</h3>
              <p className="text-gray-600 mb-4">Buying, selling or remortgaging? Our conveyancing team handles residential and commercial property transactions with efficiency and care.</p>
              <Link href="/solicitor-wimbledon/services" className="text-accent font-semibold inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>
            <div className="card-premium p-8">
              <div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Family Law</h3>
              <p className="text-gray-600 mb-4">Sensitive, practical advice on divorce, separation, child arrangements, financial settlements and domestic violence protection orders.</p>
              <Link href="/solicitor-wimbledon/services" className="text-accent font-semibold inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>
            <div className="card-premium p-8">
              <div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Wills &amp; Probate</h3>
              <p className="text-gray-600 mb-4">Protect your family&apos;s future with professionally drafted wills, lasting powers of attorney and expert estate administration.</p>
              <Link href="/solicitor-wimbledon/services" className="text-accent font-semibold inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>
            <div className="card-premium p-8">
              <div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Employment Law</h3>
              <p className="text-gray-600 mb-4">Expert advice for employees and employers on contracts, disputes, unfair dismissal, redundancy and settlement agreements.</p>
              <Link href="/solicitor-wimbledon/services" className="text-accent font-semibold inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>
            <div className="card-premium p-8">
              <div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Commercial Law</h3>
              <p className="text-gray-600 mb-4">Practical commercial advice on contracts, partnerships, shareholder agreements, business sales and commercial disputes.</p>
              <Link href="/solicitor-wimbledon/services" className="text-accent font-semibold inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>
            <div className="card-premium p-8">
              <div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Immigration</h3>
              <p className="text-gray-600 mb-4">Visa applications, indefinite leave to remain, citizenship, sponsorship licences and immigration appeals handled with expertise.</p>
              <Link href="/solicitor-wimbledon/services" className="text-accent font-semibold inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>
          </div>
          <div className="text-center mt-12"><Link href="/solicitor-wimbledon/services" className="btn-primary">View All Services</Link></div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Why Wimbledon Legal Services</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Solicitors Who Put You First</h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">We believe legal advice should be accessible, understandable and affordable. Our team of experienced solicitors takes the time to listen, explains the law in plain English and fights for the best possible outcome.</p>
              <div className="space-y-6">
                <div className="flex gap-4"><div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div><div><h3 className="text-lg font-bold text-primary mb-1">SRA Regulated</h3><p className="text-gray-600">Authorised and regulated by the Solicitors Regulation Authority, guaranteeing professional standards and client protections.</p></div></div>
                <div className="flex gap-4"><div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><div><h3 className="text-lg font-bold text-primary mb-1">Legal Aid Available</h3><p className="text-gray-600">We offer legal aid in eligible family law and immigration cases, ensuring access to justice regardless of financial circumstances.</p></div></div>
                <div className="flex gap-4"><div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><div><h3 className="text-lg font-bold text-primary mb-1">Clear, Fixed Fees</h3><p className="text-gray-600">For most matters, we offer fixed-fee quotes so you know exactly what your legal costs will be from the outset. No hourly rate surprises.</p></div></div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center"><div className="stat-number">15+</div><p className="text-gray-600 mt-2">Years Experience</p></div>
                <div className="text-center"><div className="stat-number">3,000+</div><p className="text-gray-600 mt-2">Cases Handled</p></div>
                <div className="text-center"><div className="stat-number">98%</div><p className="text-gray-600 mt-2">Client Satisfaction</p></div>
                <div className="text-center"><div className="stat-number">4.9/5</div><p className="text-gray-600 mt-2">Google Rating</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width">
          <div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Client Testimonials</span><h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">What Our Clients Say</h2><div className="gold-line-center mb-6"></div></div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="testimonial-card"><p className="text-gray-600 mb-6 italic">&quot;Wimbledon Legal handled our house purchase brilliantly. They were thorough, responsive and kept us informed at every stage. Completed on time with zero stress.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">JC</span></div><div><p className="font-semibold text-primary">James C.</p><p className="text-sm text-gray-500">Homebuyer, Wimbledon</p></div></div></div>
            <div className="testimonial-card"><p className="text-gray-600 mb-6 italic">&quot;During a difficult divorce, their family law team was compassionate yet firm. They secured an excellent financial settlement and always had my best interests at heart.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">EM</span></div><div><p className="font-semibold text-primary">Emma M.</p><p className="text-sm text-gray-500">Family Law Client, Raynes Park</p></div></div></div>
            <div className="testimonial-card"><p className="text-gray-600 mb-6 italic">&quot;Their immigration team secured my spouse visa after another firm had failed. Professional, knowledgeable and genuinely caring. I cannot recommend them highly enough.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">AP</span></div><div><p className="font-semibold text-primary">Amir P.</p><p className="text-sm text-gray-500">Immigration Client, Morden</p></div></div></div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width"><div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-accent">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Need Legal Advice?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Book a free initial consultation with one of our experienced solicitors. We&apos;ll listen to your situation, explain your options and give you honest advice on the way forward.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/solicitor-wimbledon/contact" className="btn-accent">Free Initial Consultation</Link><a href="tel:02079464567" className="btn-outline">Call 020 7946 4567</a></div>
        </div></div>
      </section>

      <section className="py-8 bg-gray-100">
        <div className="container-width"><div className="fca-notice"><p><strong>Regulatory Notice:</strong> Wimbledon Legal Services is authorised and regulated by the Solicitors Regulation Authority (SRA). We are members of The Law Society. Legal aid is available for eligible cases. All work is covered by professional indemnity insurance.</p></div></div>
      </section>
    </>
  );
}
