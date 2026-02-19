import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} /></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6"><div className="w-12 h-px bg-[var(--accent)]"></div><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Hackney, East London</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Capture the{" "}<span className="text-gold-gradient">Moment</span></h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">Professional photography from our Hackney studio. Whether it&apos;s a portrait, a wedding or a product campaign, we bring creative vision and technical excellence to every shoot.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/photographer-hackney/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors shadow-lg text-lg text-center">Book a Shoot</Link>
              <Link href="/photographer-hackney/services" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors text-lg text-center">View Services</Link>
            </div>
            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>SWPP Member</span></div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Fully Insured</span></div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Published Photographer</span></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10"><svg viewBox="0 0 400 400" className="w-full h-full"><circle cx="200" cy="200" r="180" stroke="#a29bfe" strokeWidth="2" fill="none" /><circle cx="200" cy="200" r="140" stroke="#a29bfe" strokeWidth="1" fill="none" /><circle cx="200" cy="200" r="100" stroke="#a29bfe" strokeWidth="0.5" fill="none" /></svg></div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Services</span><h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">What We Shoot</h2><div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div><p className="text-lg text-gray-600 max-w-2xl mx-auto">From intimate portraits to large-scale commercial campaigns, our studio is equipped for every type of photography.</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Portrait Photography", desc: "Professional headshots, personal branding and creative portraiture in our fully equipped Hackney studio.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> },
              { title: "Wedding Photography", desc: "Natural, documentary-style wedding photography that tells the real story of your day. London and UK-wide.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /> },
              { title: "Commercial & Product", desc: "Product photography, lookbooks, brand campaigns and content creation for businesses and agencies.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /> },
              { title: "Events & Corporate", desc: "Conference photography, awards nights, product launches and corporate events across London.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /> },
              { title: "Family Photography", desc: "Relaxed, natural family portraits that capture real connections. In-studio or on location in East London.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /> },
              { title: "Studio Hire", desc: "Professional studio space with lighting rigs, backdrops and props. Available for photographers and creatives.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /> },
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-4 border-[var(--accent)]">
                <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6"><svg className="w-7 h-7 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">{s.icon}</svg></div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-3">{s.title}</h3><p className="text-gray-600 mb-4">{s.desc}</p>
                <Link href="/photographer-hackney/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Why Choose Us</span><h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Your Story, Our Lens</h2><div className="w-16 h-1 bg-[var(--accent)] mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">We believe great photography is about connection, not just composition. We take time to understand what you need and deliver images that exceed expectations.</p>
              <div className="space-y-6">
                <div className="flex gap-4"><div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div><div><h3 className="text-lg font-bold text-[var(--primary)] mb-1">Professional Standards</h3><p className="text-gray-600">SWPP member, fully insured and published in multiple publications. You&apos;re in experienced, professional hands.</p></div></div>
                <div className="flex gap-4"><div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div><div><h3 className="text-lg font-bold text-[var(--primary)] mb-1">Dedicated Studio</h3><p className="text-gray-600">Our Hackney studio is fully equipped with professional lighting, backdrops and everything needed for flawless results.</p></div></div>
                <div className="flex gap-4"><div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><div><h3 className="text-lg font-bold text-[var(--primary)] mb-1">Quick Turnaround</h3><p className="text-gray-600">Professional editing and delivery within an agreed timeline. We never keep you waiting longer than necessary.</p></div></div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm"><div className="grid grid-cols-2 gap-8"><div className="text-center"><div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">500+</div><p className="text-gray-600 mt-2">Shoots Completed</p></div><div className="text-center"><div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">150+</div><p className="text-gray-600 mt-2">Weddings Shot</p></div><div className="text-center"><div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">SWPP</div><p className="text-gray-600 mt-2">Accredited Member</p></div><div className="text-center"><div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">4.9★</div><p className="text-gray-600 mt-2">Google Rating</p></div></div></div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-16"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Reviews</span><h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">What Our Clients Say</h2><div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div></div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm"><p className="text-gray-600 mb-6 italic">&quot;Our wedding photos are absolutely stunning. The team captured every moment so naturally &mdash; looking through the gallery makes us feel like we&apos;re reliving the day.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center"><span className="text-[var(--primary)] font-bold">RB</span></div><div><p className="font-semibold text-[var(--primary)]">Rachel B.</p><p className="text-sm text-gray-500">Wedding Client</p></div></div></div>
            <div className="bg-white p-8 rounded-sm"><p className="text-gray-600 mb-6 italic">&quot;Brilliant headshots for our entire team. The photographer made everyone feel comfortable and the results were professional, consistent and exactly what we needed.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center"><span className="text-[var(--primary)] font-bold">MK</span></div><div><p className="font-semibold text-[var(--primary)]">Mark K.</p><p className="text-sm text-gray-500">Creative Director</p></div></div></div>
            <div className="bg-white p-8 rounded-sm"><p className="text-gray-600 mb-6 italic">&quot;The product shots transformed our website. Clean, sharp and beautifully lit. We&apos;ve seen a noticeable increase in engagement since updating our images.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center"><span className="text-[var(--primary)] font-bold">NP</span></div><div><p className="font-semibold text-[var(--primary)]">Nina P.</p><p className="text-sm text-gray-500">E-commerce Founder</p></div></div></div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-[var(--accent)]"><h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">Ready to Book?</h2><p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Get in touch to discuss your shoot, check availability or visit our Hackney studio.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/photographer-hackney/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors shadow-lg">Book a Shoot</Link><a href="tel:02079460134" className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--primary)] hover:text-white transition-colors">Call 020 7946 0134</a></div></div></div>
      </section>
    </>
  );
}
