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
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">BAR Accredited Removals</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Moving Made{" "}<span className="text-accent-gradient">Simple</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
              Professional home and office removals in Ealing and across West London. Fully insured, expertly packed, carefully moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/removals-ealing/contact" className="btn-accent text-lg">Get a Free Quote</Link>
              <Link href="/removals-ealing/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg">Our Services</Link>
            </div>
            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>BAR Member</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>Which? Trusted Trader</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 400 400" className="w-full h-full"><circle cx="200" cy="200" r="180" stroke="#f59e0b" strokeWidth="2" fill="none" /><circle cx="200" cy="200" r="140" stroke="#f59e0b" strokeWidth="1" fill="none" /><circle cx="200" cy="200" r="100" stroke="#f59e0b" strokeWidth="0.5" fill="none" /></svg>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Everything You Need for a Stress-Free Move</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From a single item to an entire office, we handle every aspect of your move with care and professionalism.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Home Removals", desc: "Full house moves with professional crews, modern vehicles, and careful handling of your precious belongings.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
              { title: "Office Relocations", desc: "Minimal disruption office moves. We work evenings and weekends to keep your business running.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /> },
              { title: "Packing Services", desc: "Expert packing with quality materials. We protect your fragile items and label everything for easy unpacking.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /> },
              { title: "Storage Solutions", desc: "Secure, clean storage units in West London. Flexible terms from one week to one year or longer.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /> },
              { title: "Man & Van", desc: "Perfect for smaller moves, student relocations, eBay deliveries, or single item collections.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /> },
              { title: "International Moves", desc: "Worldwide removals by road, sea, and air. Full customs documentation and door-to-door delivery.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
            ].map((service) => (
              <div key={service.title} className="card-premium p-8">
                <div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">{service.icon}</svg></div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link href="/removals-ealing/services" className="text-accent font-semibold inline-flex items-center gap-2">Learn More<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12"><Link href="/removals-ealing/services" className="btn-primary">View All Services</Link></div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Ealing&apos;s Most Trusted Removals Company</h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">As a BAR member and Which? Trusted Trader, we meet the highest industry standards for professionalism, care, and customer service.</p>
              <div className="space-y-6">
                {[
                  { title: "BAR Accredited", desc: "Members of the British Association of Removers, meeting strict quality and financial standards." },
                  { title: "Fully Insured", desc: "Comprehensive goods-in-transit and public liability insurance for complete peace of mind." },
                  { title: "Experienced Crews", desc: "Trained, uniformed teams who treat your belongings as if they were their own." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    </div>
                    <div><h3 className="text-lg font-bold text-primary mb-1">{item.title}</h3><p className="text-gray-600">{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center"><div className="stat-number">20+</div><p className="text-gray-600 mt-2">Years Experience</p></div>
                <div className="text-center"><div className="stat-number">10,000+</div><p className="text-gray-600 mt-2">Moves Completed</p></div>
                <div className="text-center"><div className="stat-number">4.9/5</div><p className="text-gray-600 mt-2">Customer Rating</p></div>
                <div className="text-center"><div className="stat-number">0%</div><p className="text-gray-600 mt-2">Damage Claims</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">What Our Customers Say</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Absolutely fantastic service. The team were punctual, careful with our furniture, and even reassembled everything at the new house. Could not recommend more highly.", name: "Sarah L.", role: "Home Move, Ealing" },
              { quote: "We used them for our office move and they were brilliant. Worked through the weekend so we were back up and running Monday morning. Zero downtime.", name: "Michael R.", role: "Office Move, Acton" },
              { quote: "Third time using Ealing Moving Company. They packed our entire 4-bed house in a day and everything arrived in perfect condition. True professionals.", name: "Helen K.", role: "Home Move, Chiswick" },
            ].map((t) => (
              <div key={t.name} className="testimonial-card">
                <p className="text-gray-600 mb-6 italic">&quot;{t.quote}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">{t.name.split(" ").map(n => n[0]).join("")}</span></div>
                  <div><p className="font-semibold text-primary">{t.name}</p><p className="text-sm text-gray-500">{t.role}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-accent">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ready to Move?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Get a free, no-obligation quote for your home or office move. We&apos;ll visit your property and provide a fixed price — no surprises on moving day.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/removals-ealing/contact" className="btn-accent">Get a Free Quote</Link>
              <a href="tel:02079469234" className="btn-outline">Call 020 7946 9234</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
