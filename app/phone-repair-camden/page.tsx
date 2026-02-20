import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} /></div>
        <div className="container-width relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6"><div className="w-12 h-px bg-accent"></div><span className="text-accent font-semibold tracking-wider uppercase text-sm">Open 7 Days &mdash; Camden High Street</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Fixed While{" "}<span className="text-gold-gradient">You Wait</span></h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">Cracked screen? Dead battery? Water damage? We fix phones, tablets and laptops fast. Most repairs completed in 30 minutes with a 90-day warranty.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/phone-repair-camden/contact" className="btn-accent text-lg">Get a Free Quote</Link>
              <Link href="/phone-repair-camden/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg">Our Services</Link>
            </div>
            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>30-Minute Repairs</span></div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>90-Day Warranty</span></div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>All Brands Welcome</span></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10"><svg viewBox="0 0 400 400" className="w-full h-full"><circle cx="200" cy="200" r="180" stroke="#6c5ce7" strokeWidth="2" fill="none" /><circle cx="200" cy="200" r="140" stroke="#6c5ce7" strokeWidth="1" fill="none" /><circle cx="200" cy="200" r="100" stroke="#6c5ce7" strokeWidth="0.5" fill="none" /></svg></div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">We Fix Everything</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From cracked iPhone screens to waterlogged Samsungs, our certified technicians handle it all. No fix, no fee.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-premium p-8"><div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Screen Replacement</h3><p className="text-gray-600 mb-4">Cracked, smashed or unresponsive screen? We replace screens for all iPhone, Samsung, Huawei and Google models in as little as 30 minutes.</p><Link href="/phone-repair-camden/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link></div>
            <div className="card-premium p-8"><div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Battery Replacement</h3><p className="text-gray-600 mb-4">Phone dying by lunchtime? We fit premium replacement batteries that restore your device to all-day performance. Done in 20 minutes.</p><Link href="/phone-repair-camden/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link></div>
            <div className="card-premium p-8"><div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Water Damage Repair</h3><p className="text-gray-600 mb-4">Dropped your phone in water? Bring it in immediately. Our ultrasonic cleaning and micro-soldering techniques save most water-damaged devices.</p><Link href="/phone-repair-camden/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link></div>
            <div className="card-premium p-8"><div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Charging Port Fix</h3><p className="text-gray-600 mb-4">Loose, damaged or non-functioning charging port? We clean, repair or replace charging ports for all phone models.</p><Link href="/phone-repair-camden/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link></div>
            <div className="card-premium p-8"><div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Data Recovery</h3><p className="text-gray-600 mb-4">Phone not turning on? We specialise in recovering photos, contacts and files from damaged, broken or water-damaged devices.</p><Link href="/phone-repair-camden/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link></div>
            <div className="card-premium p-8"><div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Tablet &amp; Laptop Repair</h3><p className="text-gray-600 mb-4">We don&apos;t just fix phones. iPad screen repairs, laptop keyboard replacements, and general device troubleshooting &mdash; all under one roof.</p><Link href="/phone-repair-camden/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link></div>
          </div>
          <div className="text-center mt-12"><Link href="/phone-repair-camden/services" className="btn-primary">View All Services</Link></div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width"><div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Why Camden Phone Fix</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">The Smarter Choice for Repairs</h2>
            <div className="gold-line mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">Why pay manufacturer prices or wait weeks for a repair? We offer the same quality parts, faster turnaround and a fraction of the cost. Walk in, get fixed, walk out.</p>
            <div className="space-y-6">
              <div className="flex gap-4"><div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><div><h3 className="text-lg font-bold text-primary mb-1">30-Minute Repairs</h3><p className="text-gray-600">Most screen and battery replacements are done in 30 minutes or less. Grab a coffee on Camden High Street and come back to a fixed phone.</p></div></div>
              <div className="flex gap-4"><div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div><div><h3 className="text-lg font-bold text-primary mb-1">90-Day Warranty</h3><p className="text-gray-600">Every repair is backed by our 90-day warranty. If the same issue recurs within that period, we fix it again at no extra cost.</p></div></div>
              <div className="flex gap-4"><div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div><div><h3 className="text-lg font-bold text-primary mb-1">No Fix, No Fee</h3><p className="text-gray-600">If we can&apos;t repair your device, you don&apos;t pay a penny. We&apos;ll always give you an honest assessment before starting any work.</p></div></div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center"><div className="stat-number">7+</div><p className="text-gray-600 mt-2">Years Experience</p></div>
              <div className="text-center"><div className="stat-number">15k+</div><p className="text-gray-600 mt-2">Devices Repaired</p></div>
              <div className="text-center"><div className="stat-number">30</div><p className="text-gray-600 mt-2">Minute Repairs</p></div>
              <div className="text-center"><div className="stat-number">90</div><p className="text-gray-600 mt-2">Day Warranty</p></div>
            </div>
          </div>
        </div></div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width">
          <div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Client Reviews</span><h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">What Our Customers Say</h2><div className="gold-line-center mb-6"></div></div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="testimonial-card"><p className="text-gray-600 mb-6 italic">&quot;Smashed my iPhone screen on a night out in Camden. Walked in the next morning and had it fixed in 25 minutes. Brilliant service and really reasonable price. Highly recommend.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">LB</span></div><div><p className="font-semibold text-primary">Lauren B.</p><p className="text-sm text-gray-500">iPhone 15 Screen Replacement</p></div></div></div>
            <div className="testimonial-card"><p className="text-gray-600 mb-6 italic">&quot;My Samsung Galaxy was completely dead after dropping it in the bath. Camden Phone Fix recovered all my photos and got the phone working again. I was amazed they could save it.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">AK</span></div><div><p className="font-semibold text-primary">Ahmed K.</p><p className="text-sm text-gray-500">Samsung Water Damage Repair</p></div></div></div>
            <div className="testimonial-card"><p className="text-gray-600 mb-6 italic">&quot;Battery on my Pixel was lasting about two hours. These guys replaced it for a third of what Google quoted me, and it was done in 20 minutes. Open on Sundays too, which is a massive bonus.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">TN</span></div><div><p className="font-semibold text-primary">Tom N.</p><p className="text-sm text-gray-500">Google Pixel Battery Replacement</p></div></div></div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width"><div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-accent">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Need a Repair? Walk In or Call Ahead</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">No appointment needed for most repairs. Just pop into our Camden High Street shop. Open 7 days a week for your convenience.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/phone-repair-camden/contact" className="btn-accent">Get a Free Quote</Link><a href="tel:02079464460" className="btn-outline">Call 020 7946 4460</a></div>
        </div></div>
      </section>
    </>
  );
}
