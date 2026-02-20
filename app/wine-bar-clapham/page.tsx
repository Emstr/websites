import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} /></div>
        <div className="container-width relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6"><div className="w-12 h-px bg-accent"></div><span className="text-accent font-semibold tracking-wider uppercase text-sm">Discover, Taste, Enjoy</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Your Neighbourhood{" "}<span className="text-accent-gradient">Wine Destination</span></h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">An intimate, sommelier-curated wine bar on Clapham High Street. Over 200 wines, artisan cheese boards, guided tastings and a cosy 40-seat space designed for discovering your next favourite bottle.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/wine-bar-clapham/contact" className="btn-accent text-lg">Book a Tasting</Link>
              <Link href="/wine-bar-clapham/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg">Explore Our Wines</Link>
            </div>
            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>200+ Wines</span></div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Sommelier Curated</span></div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Cosy 40-Seat Venue</span></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10"><svg viewBox="0 0 400 400" className="w-full h-full"><circle cx="200" cy="200" r="180" stroke="#8e44ad" strokeWidth="2" fill="none" /><circle cx="200" cy="200" r="140" stroke="#8e44ad" strokeWidth="1" fill="none" /><circle cx="200" cy="200" r="100" stroke="#8e44ad" strokeWidth="0.5" fill="none" /></svg></div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Wine Experiences for Every Palate</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From casual glasses after work to guided tastings and private celebrations, Clapham Wine Room is your home for all things wine.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-premium p-8"><div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Wine Tastings</h3><p className="text-gray-600 mb-4">Guided tasting events led by our resident sommelier. Explore regions, grape varieties and styles in a relaxed, social setting.</p><Link href="/wine-bar-clapham/services" className="text-accent font-semibold inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link></div>
            <div className="card-premium p-8"><div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Cheese & Charcuterie</h3><p className="text-gray-600 mb-4">Artisan British and European cheese and charcuterie boards, expertly paired with wines from our list. The perfect accompaniment to any glass.</p><Link href="/wine-bar-clapham/services" className="text-accent font-semibold inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link></div>
            <div className="card-premium p-8"><div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Wine by the Glass</h3><p className="text-gray-600 mb-4">Over 40 wines available by the glass thanks to our Coravin system — including premium bottles you would not normally find by the glass.</p><Link href="/wine-bar-clapham/services" className="text-accent font-semibold inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link></div>
            <div className="card-premium p-8"><div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Private Events</h3><p className="text-gray-600 mb-4">Host your birthday, hen do or celebration with a private tasting event. Exclusive use of our venue for up to 40 guests with bespoke wine packages.</p><Link href="/wine-bar-clapham/services" className="text-accent font-semibold inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link></div>
            <div className="card-premium p-8"><div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Wine Club</h3><p className="text-gray-600 mb-4">Join our monthly wine club and receive curated bottles delivered to your door, plus exclusive discounts, early access to events and member tastings.</p><Link href="/wine-bar-clapham/services" className="text-accent font-semibold inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link></div>
            <div className="card-premium p-8"><div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Corporate Experiences</h3><p className="text-gray-600 mb-4">Impress clients or reward your team with a bespoke corporate wine tasting. Educational, entertaining and unforgettable.</p><Link href="/wine-bar-clapham/services" className="text-accent font-semibold inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link></div>
          </div>
          <div className="text-center mt-12"><Link href="/wine-bar-clapham/services" className="btn-primary">View All Services</Link></div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Why Clapham Wine Room</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">A Sommelier in Your Neighbourhood</h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">Since 2020, we have been on a mission to make great wine accessible, approachable and fun. Our sommelier curates every bottle on our shelves, and our team is passionate about helping you discover wines you will love — whether you are a seasoned collector or just starting your journey.</p>
              <div className="space-y-6">
                <div className="flex gap-4"><div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg></div><div><h3 className="text-lg font-bold text-primary mb-1">Sommelier Curated</h3><p className="text-gray-600">Every wine on our list has been personally selected by our sommelier. No mass-market plonk — only wines we genuinely love and want to share.</p></div></div>
                <div className="flex gap-4"><div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div><div><h3 className="text-lg font-bold text-primary mb-1">Coravin Technology</h3><p className="text-gray-600">Our Coravin system lets us pour premium wines by the glass without opening the bottle. Try a glass of something special without committing to a full bottle.</p></div></div>
                <div className="flex gap-4"><div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></div><div><h3 className="text-lg font-bold text-primary mb-1">Intimate & Welcoming</h3><p className="text-gray-600">Our cosy 40-seat venue is designed for connection. Whether you are on a date, catching up with friends or flying solo, you will feel right at home.</p></div></div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center"><div className="stat-number">200+</div><p className="text-gray-600 mt-2">Wines</p></div>
                <div className="text-center"><div className="stat-number">40+</div><p className="text-gray-600 mt-2">By the Glass</p></div>
                <div className="text-center"><div className="stat-number">40</div><p className="text-gray-600 mt-2">Cosy Seats</p></div>
                <div className="text-center"><div className="stat-number">100%</div><p className="text-gray-600 mt-2">Sommelier Curated</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width">
          <div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">What People Say</span><h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">Our Guests Love Us</h2><div className="gold-line-center mb-6"></div></div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="testimonial-card"><p className="text-gray-600 mb-6 italic">&quot;An absolute gem on Clapham High Street. The sommelier recommended a Barolo that completely changed my understanding of Italian wine. The cheese board was heavenly too. We are regulars now.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">LC</span></div><div><p className="font-semibold text-primary">Laura C.</p><p className="text-sm text-gray-500">Clapham Resident</p></div></div></div>
            <div className="testimonial-card"><p className="text-gray-600 mb-6 italic">&quot;We hosted a wine tasting for my birthday — 12 friends, 8 wines, and the most knowledgeable guide I have ever met. Everyone said it was the best birthday event they had been to. Book this place immediately.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">JB</span></div><div><p className="font-semibold text-primary">James B.</p><p className="text-sm text-gray-500">Balham</p></div></div></div>
            <div className="testimonial-card"><p className="text-gray-600 mb-6 italic">&quot;The wine club membership is outstanding value. Every month I get two bottles I would never have picked myself, and I have loved every single one. The tasting notes are brilliant and the member events are great fun.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">RN</span></div><div><p className="font-semibold text-primary">Rachel N.</p><p className="text-sm text-gray-500">Brixton</p></div></div></div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width"><div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-accent">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ready to Discover Your Next Favourite Wine?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Book a tasting, pop in for a glass or enquire about our wine club. However you prefer to explore, we are here to help.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/wine-bar-clapham/contact" className="btn-accent">Book a Tasting</Link>
            <a href="tel:02079469930" className="btn-outline">Call 020 7946 9930</a>
          </div>
        </div></div>
      </section>
    </>
  );
}
