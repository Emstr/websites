import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} /></div>
        <div className="container-width relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6"><div className="w-12 h-px bg-accent"></div><span className="text-accent font-semibold tracking-wider uppercase text-sm">Savile Row, Mayfair &mdash; Est. 1985</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">The Art of{" "}<span className="text-gold-gradient">Bespoke Tailoring</span></h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">Master tailors crafting suits of distinction on Savile Row for nearly four decades. Every stitch tells a story of tradition, precision and uncompromising quality.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/tailor-savile-row/contact" className="btn-accent text-lg">Book a Consultation</Link>
              <Link href="/tailor-savile-row/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg">Our Services</Link>
            </div>
            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Savile Row Association</span></div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Master Tailor</span></div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Est. Since 1985</span></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10"><svg viewBox="0 0 400 400" className="w-full h-full"><circle cx="200" cy="200" r="180" stroke="#b8860b" strokeWidth="2" fill="none" /><circle cx="200" cy="200" r="140" stroke="#b8860b" strokeWidth="1" fill="none" /><circle cx="200" cy="200" r="100" stroke="#b8860b" strokeWidth="0.5" fill="none" /></svg></div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Craft</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Tailoring of the Highest Distinction</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From fully bespoke suits to expert alterations, every garment that leaves our atelier reflects decades of mastery and an unwavering commitment to excellence.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Bespoke Suits", desc: "Crafted entirely from scratch to your precise measurements, body shape and personal style. The pinnacle of tailoring.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg> },
              { title: "Made-to-Measure", desc: "An exceptional fit from a curated range of styles and fabrics. The perfect balance of bespoke quality and convenience.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg> },
              { title: "Shirt Making", desc: "Bespoke shirts in the finest cottons and linens. Choose your collar, cuff and monogramming for a truly personal garment.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg> },
              { title: "Alterations & Repairs", desc: "Expert alterations to ensure a perfect fit. We also restore and repair treasured garments to extend their life.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" /></svg> },
              { title: "Wedding Suits", desc: "Make your wedding day unforgettable with a bespoke suit crafted for the occasion. Matching waistcoats and accessories available.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
              { title: "Corporate Tailoring", desc: "Dress your team to impress. Corporate tailoring packages for businesses that value professional presentation.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
            ].map((service) => (
              <div key={service.title} className="card-premium p-8">
                <div className="service-icon">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link href="/tailor-savile-row/services" className="text-accent font-semibold inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12"><Link href="/tailor-savile-row/services" className="btn-primary">View All Services</Link></div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width"><div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Why Savile Row Bespoke</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Tradition Meets Modern Elegance</h2>
            <div className="gold-line mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">For nearly four decades, we have dressed discerning gentlemen from our atelier on the world&apos;s most famous tailoring street. Our approach marries time-honoured Savile Row techniques with contemporary style.</p>
            <div className="space-y-6">
              {[
                { title: "Savile Row Heritage", desc: "A proud member of the Savile Row Association, upholding the standards that make this street the global capital of bespoke tailoring." },
                { title: "Master Craftsmanship", desc: "Every bespoke suit requires over 60 hours of hand craftsmanship across multiple fittings to achieve perfection." },
                { title: "Exceptional Fabrics", desc: "We source the finest cloths from the world's leading mills including Dormeuil, Holland & Sherry and Loro Piana." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></div>
                  <div><h3 className="text-lg font-bold text-primary mb-1">{item.title}</h3><p className="text-gray-600">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 p-8 lg:p-12 rounded-sm"><div className="grid grid-cols-2 gap-8">
            <div className="text-center"><div className="stat-number">40</div><p className="text-gray-600 mt-2">Years of Excellence</p></div>
            <div className="text-center"><div className="stat-number">5,000+</div><p className="text-gray-600 mt-2">Suits Crafted</p></div>
            <div className="text-center"><div className="stat-number">60+</div><p className="text-gray-600 mt-2">Hours Per Suit</p></div>
            <div className="text-center"><div className="stat-number">3,000+</div><p className="text-gray-600 mt-2">Fabric Options</p></div>
          </div></div>
        </div></div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width">
          <div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Testimonials</span><h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">What Our Clients Say</h2><div className="gold-line-center mb-6"></div></div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="testimonial-card"><p className="text-gray-600 mb-6 italic">&quot;The attention to detail is extraordinary. My bespoke suit fits like nothing I&apos;ve ever worn. The fabric selection process alone was an experience in itself.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">JH</span></div><div><p className="font-semibold text-primary">James H.</p><p className="text-sm text-gray-500">Barrister, Temple</p></div></div></div>
            <div className="testimonial-card"><p className="text-gray-600 mb-6 italic">&quot;They made my wedding suit and four groomsmen&apos;s suits. Every single one was impeccable. The team understood exactly the look I wanted.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">MR</span></div><div><p className="font-semibold text-primary">Marcus R.</p><p className="text-sm text-gray-500">Groom, Chelsea</p></div></div></div>
            <div className="testimonial-card"><p className="text-gray-600 mb-6 italic">&quot;I&apos;ve been coming here for fifteen years. The consistency of quality is remarkable. These are tailors who genuinely care about their craft.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">PG</span></div><div><p className="font-semibold text-primary">Philip G.</p><p className="text-sm text-gray-500">CEO, Kensington</p></div></div></div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width"><div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-accent">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Experience Savile Row Tailoring</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Book a private consultation at our Savile Row atelier. We&apos;ll guide you through fabrics, styles and the bespoke process over a glass of champagne.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/tailor-savile-row/contact" className="btn-accent">Book a Consultation</Link>
            <a href="tel:02079464789" className="btn-outline">Call 020 7946 4789</a>
          </div>
        </div></div>
      </section>
    </>
  );
}
