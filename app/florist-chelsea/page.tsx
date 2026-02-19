import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} /></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6"><div className="w-12 h-px bg-[var(--accent)]"></div><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">King&apos;s Road, Chelsea</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Beautiful Flowers,{" "}<span className="text-gold-gradient">Beautifully Made</span></h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">Luxury floristry from our Chelsea studio. Bespoke bouquets, wedding flowers and stunning arrangements, all sustainably sourced and hand-crafted with care.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/florist-chelsea/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors shadow-lg text-lg text-center">Order Flowers</Link>
              <Link href="/florist-chelsea/services" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors text-lg text-center">Our Services</Link>
            </div>
            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>British Florist Association</span></div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Same Day Delivery</span></div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Sustainable Sourcing</span></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10"><svg viewBox="0 0 400 400" className="w-full h-full"><circle cx="200" cy="200" r="180" stroke="#e17055" strokeWidth="2" fill="none" /><circle cx="200" cy="200" r="140" stroke="#e17055" strokeWidth="1" fill="none" /><circle cx="200" cy="200" r="100" stroke="#e17055" strokeWidth="0.5" fill="none" /></svg></div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Flowers for Every Occasion</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From intimate bouquets to grand wedding installations, every arrangement is designed with artistry and delivered with care.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Wedding Flowers", desc: "Bridal bouquets, buttonholes, table centres and full venue styling. We work with you to bring your floral vision to life.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /> },
              { title: "Funeral Tributes", desc: "Respectful, beautiful funeral flowers. Traditional wreaths, sprays and bespoke tributes crafted with sensitivity.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /> },
              { title: "Luxury Bouquets", desc: "Hand-tied bouquets for birthdays, anniversaries and spontaneous gestures. Each one is unique and made to order.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /> },
              { title: "Corporate Flowers", desc: "Weekly office arrangements, reception displays and contract floristry. Fresh flowers that make a lasting impression.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /> },
              { title: "Event Styling", desc: "Complete floral styling for launches, dinners, exhibitions and celebrations. From concept to installation.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.75 1.75 0 013 15.546" /> },
              { title: "Flower Subscriptions", desc: "Regular fresh flower deliveries to your home or office. Choose weekly, fortnightly or monthly and we do the rest.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /> },
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-4 border-[var(--accent)]">
                <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6"><svg className="w-7 h-7 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">{s.icon}</svg></div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-3">{s.title}</h3>
                <p className="text-gray-600 mb-4">{s.desc}</p>
                <Link href="/florist-chelsea/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Why Chelsea Blooms</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Artistry in Every Arrangement</h2>
              <div className="w-16 h-1 bg-[var(--accent)] mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">We combine creative flair with technical expertise to create arrangements that are genuinely breathtaking. Every stem is chosen for quality, every design is crafted with intention.</p>
              <div className="space-y-6">
                <div className="flex gap-4"><div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div><div><h3 className="text-lg font-bold text-[var(--primary)] mb-1">Sustainably Sourced</h3><p className="text-gray-600">We prioritise British-grown, seasonal blooms and work with ethical importers. Beautiful flowers with a smaller footprint.</p></div></div>
                <div className="flex gap-4"><div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><div><h3 className="text-lg font-bold text-[var(--primary)] mb-1">Same Day Delivery</h3><p className="text-gray-600">Order before 1pm for same day delivery across Chelsea and greater London. Because sometimes you need flowers now.</p></div></div>
                <div className="flex gap-4"><div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg></div><div><h3 className="text-lg font-bold text-[var(--primary)] mb-1">Bespoke Design</h3><p className="text-gray-600">Every arrangement is designed to order. Tell us the occasion and we&apos;ll create something truly special.</p></div></div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">1000+</div><p className="text-gray-600 mt-2">Weddings Styled</p></div>
                <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">50+</div><p className="text-gray-600 mt-2">Corporate Clients</p></div>
                <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">Same Day</div><p className="text-gray-600 mt-2">London Delivery</p></div>
                <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">4.9★</div><p className="text-gray-600 mt-2">Google Rating</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Reviews</span><h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">What Our Clients Say</h2><div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div></div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm"><p className="text-gray-600 mb-6 italic">&quot;Chelsea Blooms created the most stunning wedding flowers I&apos;ve ever seen. The bridal bouquet was absolute perfection and the venue styling took my breath away.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center"><span className="text-[var(--primary)] font-bold">SH</span></div><div><p className="font-semibold text-[var(--primary)]">Sophie H.</p><p className="text-sm text-gray-500">Wedding Client</p></div></div></div>
            <div className="bg-white p-8 rounded-sm"><p className="text-gray-600 mb-6 italic">&quot;We use Chelsea Blooms for our office reception flowers every week. Always fresh, always beautiful, and the team are a pleasure to work with.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center"><span className="text-[var(--primary)] font-bold">AD</span></div><div><p className="font-semibold text-[var(--primary)]">Alex D.</p><p className="text-sm text-gray-500">Office Manager, SW3</p></div></div></div>
            <div className="bg-white p-8 rounded-sm"><p className="text-gray-600 mb-6 italic">&quot;Ordered a last-minute birthday bouquet and it was delivered the same afternoon. Absolutely gorgeous arrangement and my wife was thrilled. Will definitely be back.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center"><span className="text-[var(--primary)] font-bold">JP</span></div><div><p className="font-semibold text-[var(--primary)]">James P.</p><p className="text-sm text-gray-500">Chelsea Local</p></div></div></div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-[var(--accent)]">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">Ready to Order?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Whether it&apos;s a single bouquet or a full wedding, we&apos;d love to help. Same day delivery available across London.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/florist-chelsea/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors shadow-lg">Order Flowers</Link>
              <a href="tel:02079469012" className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--primary)] hover:text-white transition-colors">Call 020 7946 9012</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
