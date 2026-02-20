import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} /></div>
        <div className="container-width relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6"><div className="w-12 h-px bg-accent"></div><span className="text-accent font-semibold tracking-wider uppercase text-sm">Est. 2012 &middot; Mayfair, London</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Where Luxury Meets{" "}<span className="text-gold-gradient">Wellness</span></h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">An oasis of calm on Brook Street. Twelve expert therapists, bespoke treatments, and over a decade of experience in helping Londoners unwind, restore, and rejuvenate.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/spa-mayfair/contact" className="btn-accent text-lg">Book a Treatment</Link>
              <Link href="/spa-mayfair/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg">View Treatments</Link>
            </div>
            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>12 Expert Therapists</span></div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>20,000+ Treatments</span></div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Open 7 Days</span></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10"><svg viewBox="0 0 400 400" className="w-full h-full"><circle cx="200" cy="200" r="180" stroke="#d4a574" strokeWidth="2" fill="none" /><circle cx="200" cy="200" r="140" stroke="#d4a574" strokeWidth="1" fill="none" /><circle cx="200" cy="200" r="100" stroke="#d4a574" strokeWidth="0.5" fill="none" /></svg></div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Treatments</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Indulge, Restore, Renew</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From therapeutic massage to luxury facials, every treatment is tailored to your individual needs by our highly trained therapists.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Deep Tissue Massage", desc: "Targeted, firm-pressure massage to release chronic tension, alleviate muscle pain, and restore mobility. Ideal for desk workers and athletes alike.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
              { title: "Facial Treatments", desc: "Luxury facials using premium organic products. Deep cleansing, hydrating, anti-ageing, and brightening options tailored to your skin type.", icon: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Body Wraps", desc: "Detoxifying marine, nourishing shea butter, and slimming seaweed wraps. Full-body treatments that leave your skin silky smooth and deeply hydrated.", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
              { title: "Aromatherapy", desc: "Therapeutic massage combined with carefully blended essential oils to promote relaxation, reduce stress, and support emotional balance.", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" },
              { title: "Couples Treatments", desc: "Share the experience in our dual treatment suite. Side-by-side massages, facials, and bespoke spa packages for two.", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
              { title: "Membership Packages", desc: "Monthly spa memberships with priority booking, exclusive discounts, and complimentary treatments. The ultimate investment in your wellbeing.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
            ].map((s, i) => (
              <div key={i} className="card-premium p-8">
                <div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} /></svg></div>
                <h3 className="text-xl font-bold text-primary mb-3">{s.title}</h3>
                <p className="text-gray-600 mb-4">{s.desc}</p>
                <Link href="/spa-mayfair/services" className="text-accent font-semibold inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12"><Link href="/spa-mayfair/services" className="btn-primary">View All Treatments</Link></div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Why Mayfair Wellness</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">A Sanctuary in the City</h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">Step through our doors and leave the city behind. Our spa was designed to be an escape — a place where time slows down and your wellbeing takes priority.</p>
              <div className="space-y-6">
                {[
                  { title: "Premium Products", desc: "We use only the finest organic and luxury skincare brands, including Elemis, ESPA, and our own bespoke blends." },
                  { title: "Bespoke Approach", desc: "Every treatment begins with a consultation. Your therapist tailors each session to your specific needs and preferences." },
                  { title: "Tranquil Environment", desc: "Six private treatment rooms, a relaxation lounge, and a thermal suite. Every detail designed for your comfort." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></div>
                    <div><h3 className="text-lg font-bold text-primary mb-1">{item.title}</h3><p className="text-gray-600">{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center"><div className="stat-number">20K+</div><p className="text-gray-600 mt-2">Treatments Given</p></div>
                <div className="text-center"><div className="stat-number">12</div><p className="text-gray-600 mt-2">Expert Therapists</p></div>
                <div className="text-center"><div className="stat-number">12</div><p className="text-gray-600 mt-2">Years in Mayfair</p></div>
                <div className="text-center"><div className="stat-number">4.9</div><p className="text-gray-600 mt-2">Google Rating</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Guest Reviews</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">What Our Guests Say</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "The deep tissue massage was exactly what I needed after weeks of travel. The therapist found every knot. Genuinely the best massage I have had in London.", name: "Victoria S.", role: "Regular Guest, Kensington" },
              { text: "My husband and I had the couples package for our anniversary. The whole experience was impeccable — from the welcome to the relaxation room afterwards. Truly luxurious.", name: "Catherine B.", role: "Couples Treatment, Belgravia" },
              { text: "I have been a member for three years. The consistency is what keeps me coming back. Every therapist is excellent and they remember my preferences. Worth every penny.", name: "Oliver P.", role: "Spa Member, Mayfair" },
            ].map((t, i) => (
              <div key={i} className="testimonial-card">
                <p className="text-gray-600 mb-6 italic">&quot;{t.text}&quot;</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Escape the Everyday</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Book your treatment today and discover why Mayfair Wellness has been London&apos;s sanctuary of choice for over a decade.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/spa-mayfair/contact" className="btn-accent">Book a Treatment</Link>
              <a href="tel:02079468800" className="btn-outline">Call 020 7946 8800</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
