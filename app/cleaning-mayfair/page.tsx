import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} /></div>
        <div className="container-width relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6"><div className="w-12 h-px bg-accent"></div><span className="text-accent font-semibold tracking-wider uppercase text-sm">Premium Cleaning Services</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Spotless Spaces,{" "}<span className="text-accent-gradient">Every Time</span></h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">Premium domestic and commercial cleaning in Mayfair and across Central London. DBS checked staff, eco-friendly products, impeccable results.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/cleaning-mayfair/contact" className="btn-accent text-lg">Book a Clean</Link>
              <Link href="/cleaning-mayfair/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg">Our Services</Link>
            </div>
            <div className="flex flex-wrap items-center gap-8 text-white/80">
              {["DBS Checked Staff", "Fully Insured", "Eco-Friendly Products"].map((t) => (
                <div key={t} className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>{t}</span></div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10"><svg viewBox="0 0 400 400" className="w-full h-full"><circle cx="200" cy="200" r="180" stroke="#805ad5" strokeWidth="2" fill="none" /><circle cx="200" cy="200" r="140" stroke="#805ad5" strokeWidth="1" fill="none" /><circle cx="200" cy="200" r="100" stroke="#805ad5" strokeWidth="0.5" fill="none" /></svg></div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Cleaning Services for Every Need</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From regular weekly cleans to one-off deep cleans, we deliver a sparkling finish you can trust.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Regular Domestic Cleaning", desc: "Reliable weekly or fortnightly cleaning with your own dedicated cleaner. We follow your preferences every visit.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
              { title: "Deep Cleaning", desc: "Intensive top-to-bottom clean reaching every corner, including behind appliances, inside ovens, and limescale removal.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /> },
              { title: "End of Tenancy", desc: "Comprehensive move-out cleaning that satisfies landlords and letting agents. Deposit return guarantee included.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /> },
              { title: "Office Cleaning", desc: "Professional office cleaning for businesses of all sizes. Daily, weekly, or bespoke schedules to suit your needs.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /> },
              { title: "After-Party Cleaning", desc: "Had a party or event? We arrive next morning to restore your space to its pristine condition.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
              { title: "Carpet & Upholstery", desc: "Professional deep cleaning for carpets, rugs, sofas, and curtains using hot water extraction technology.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /> },
            ].map((s) => (
              <div key={s.title} className="card-premium p-8">
                <div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">{s.icon}</svg></div>
                <h3 className="text-xl font-bold text-primary mb-3">{s.title}</h3>
                <p className="text-gray-600 mb-4">{s.desc}</p>
                <Link href="/cleaning-mayfair/services" className="text-accent font-semibold inline-flex items-center gap-2">Learn More<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12"><Link href="/cleaning-mayfair/services" className="btn-primary">View All Services</Link></div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Mayfair&apos;s Premium Cleaning Service</h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">We understand that Mayfair homes and offices demand the highest standard. Every member of our team is DBS checked, professionally trained, and takes genuine pride in delivering immaculate results.</p>
              <div className="space-y-6">
                {[
                  { title: "DBS Checked & Vetted", desc: "Every cleaner undergoes enhanced DBS checks and thorough reference verification for your complete peace of mind." },
                  { title: "Eco-Friendly Products", desc: "We use premium, non-toxic cleaning products that are safe for families, pets, and the environment." },
                  { title: "Consistent Quality", desc: "The same dedicated cleaner every visit, trained to your preferences and our exacting standards." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></div>
                    <div><h3 className="text-lg font-bold text-primary mb-1">{item.title}</h3><p className="text-gray-600">{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center"><div className="stat-number">12+</div><p className="text-gray-600 mt-2">Years in Mayfair</p></div>
                <div className="text-center"><div className="stat-number">500+</div><p className="text-gray-600 mt-2">Regular Clients</p></div>
                <div className="text-center"><div className="stat-number">4.9/5</div><p className="text-gray-600 mt-2">Customer Rating</p></div>
                <div className="text-center"><div className="stat-number">100%</div><p className="text-gray-600 mt-2">DBS Checked</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width">
          <div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Testimonials</span><h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">What Our Clients Say</h2><div className="gold-line-center mb-6"></div></div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "The best cleaning service I have ever used. My cleaner is wonderful — reliable, thorough, and she remembers exactly how I like things done.", name: "Charlotte B.", role: "Resident, Mayfair" },
              { quote: "We switched to Mayfair Cleaning for our offices and the difference is remarkable. The team are always professional and our space looks immaculate.", name: "James H.", role: "Office Manager, Marylebone" },
              { quote: "Their end of tenancy clean was outstanding. My landlord returned my full deposit without question. Worth every penny.", name: "Sophie T.", role: "Tenant, Soho" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ready for a Sparkling Clean?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Book your first clean today and discover why hundreds of Mayfair residents and businesses trust us with their spaces.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/cleaning-mayfair/contact" className="btn-accent">Book a Clean</Link>
              <a href="tel:02079460345" className="btn-outline">Call 020 7946 0345</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
