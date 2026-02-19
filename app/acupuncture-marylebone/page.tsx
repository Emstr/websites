import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} /></div>
        <div className="container-width relative z-10"><div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6"><div className="w-12 h-px bg-accent"></div><span className="text-accent font-semibold tracking-wider uppercase text-sm">BAcC Registered Acupuncture</span></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Restore Balance,{" "}<span className="text-accent-gradient">Restore Health</span></h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">Expert acupuncture in Marylebone from a BSc-qualified, BAcC registered practitioner with over 15 years of clinical experience. Treating pain, fertility, stress and more.</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/acupuncture-marylebone/contact" className="btn-accent text-lg">Book Your Appointment</Link>
            <Link href="/acupuncture-marylebone/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg">Our Treatments</Link>
          </div>
          <div className="flex flex-wrap items-center gap-8 text-white/80">
            {["BAcC Member", "BSc in Acupuncture", "15+ Years Experience"].map((t) => (
              <div key={t} className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>{t}</span></div>
            ))}
          </div>
        </div></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10"><svg viewBox="0 0 400 400" className="w-full h-full"><circle cx="200" cy="200" r="180" stroke="#a3b18a" strokeWidth="2" fill="none" /><circle cx="200" cy="200" r="140" stroke="#a3b18a" strokeWidth="1" fill="none" /><circle cx="200" cy="200" r="100" stroke="#a3b18a" strokeWidth="0.5" fill="none" /></svg></div>
      </section>

      <section className="section-padding bg-gray-50"><div className="container-width">
        <div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Treatments</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Holistic Acupuncture Treatments</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 max-w-2xl mx-auto">We treat the whole person, not just the symptoms. Our approach combines traditional Chinese medicine wisdom with modern clinical knowledge.</p></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Traditional Acupuncture", desc: "Classical five-element and TCM acupuncture to restore balance, boost energy and support your body's natural healing processes.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
            { title: "Fertility Acupuncture", desc: "Specialist fertility support for natural conception and IVF. Evidence-based protocols to improve reproductive health and outcomes.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
            { title: "Pain Management", desc: "Effective relief for chronic pain, back pain, migraines, sciatica, arthritis and sports injuries without medication.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            { title: "Stress & Anxiety", desc: "Deeply calming treatments that regulate the nervous system, reduce cortisol and restore a sense of inner peace.", icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
            { title: "Cosmetic Acupuncture", desc: "Natural facial rejuvenation that stimulates collagen production, reduces fine lines and gives skin a radiant glow.", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
            { title: "Cupping Therapy", desc: "Traditional cupping to relieve deep muscle tension, improve circulation and support the body's natural detoxification.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
          ].map((s) => (
            <div key={s.title} className="card-premium p-8">
              <div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">{s.title}</h3>
              <p className="text-gray-600 mb-4">{s.desc}</p>
              <Link href="/acupuncture-marylebone/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12"><Link href="/acupuncture-marylebone/services" className="btn-primary">View All Treatments</Link></div>
      </div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Expert, Evidence-Based Acupuncture</h2>
          <div className="gold-line mb-6"></div>
          <p className="text-lg text-gray-600 mb-8">Our clinic combines the ancient wisdom of Traditional Chinese Medicine with modern evidence-based practice. Every treatment is tailored to your unique constitution, health history and goals.</p>
          <div className="space-y-6">
            {[
              { title: "BAcC Registered", desc: "Full member of the British Acupuncture Council, the UK's leading regulatory body for traditional acupuncture. This guarantees the highest standards of training, safety and ethics." },
              { title: "BSc in Acupuncture", desc: "University-educated with a BSc in Acupuncture, combining in-depth knowledge of Traditional Chinese Medicine with modern biomedical science." },
              { title: "15+ Years Clinical Experience", desc: "Over 15 years in clinical practice, treating thousands of patients with conditions ranging from chronic pain to fertility and mental health." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></div>
                <div><h3 className="text-lg font-bold text-primary mb-1">{item.title}</h3><p className="text-gray-600">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-50 p-8 lg:p-12 rounded-sm"><div className="grid grid-cols-2 gap-8">
          <div className="text-center"><div className="stat-number">15+</div><p className="text-gray-600 mt-2">Years Experience</p></div>
          <div className="text-center"><div className="stat-number">5,000+</div><p className="text-gray-600 mt-2">Patients Treated</p></div>
          <div className="text-center"><div className="stat-number">BAcC</div><p className="text-gray-600 mt-2">Registered</p></div>
          <div className="text-center"><div className="stat-number">BSc</div><p className="text-gray-600 mt-2">Qualified</p></div>
        </div></div>
      </div></div></section>

      <section className="section-padding bg-primary"><div className="container-width">
        <div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Patient Stories</span><h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">What Our Patients Say</h2><div className="gold-line-center mb-6"></div></div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { text: "After years of chronic back pain and countless NHS appointments, acupuncture at this clinic has been transformative. I'm now virtually pain-free and my GP is amazed.", initials: "MH", name: "Michael H.", role: "Back Pain Patient" },
            { text: "I came for fertility acupuncture alongside my IVF treatment. The practitioner was incredibly knowledgeable and supportive. I'm now 20 weeks pregnant with our first child.", initials: "SW", name: "Sophie W.", role: "Fertility Patient" },
            { text: "The stress and anxiety treatments have genuinely changed my life. I sleep better, I'm calmer at work, and I've reduced my medication with my doctor's support.", initials: "JL", name: "James L.", role: "Anxiety Patient" },
          ].map((t) => (
            <div key={t.initials} className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">&quot;{t.text}&quot;</p>
              <div className="flex items-center gap-3"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">{t.initials}</span></div><div><p className="font-semibold text-primary">{t.name}</p><p className="text-sm text-gray-500">{t.role}</p></div></div>
            </div>
          ))}
        </div>
      </div></section>

      <section className="section-padding bg-gray-50"><div className="container-width">
        <div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-accent">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ready to Start Your Healing Journey?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Book a consultation at our Marylebone clinic. We&apos;ll take the time to understand your health concerns and create a personalised treatment plan.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/acupuncture-marylebone/contact" className="btn-accent">Book Your Appointment</Link>
            <a href="tel:02079465890" className="btn-outline">Call 020 7946 5890</a>
          </div>
        </div>
      </div></section>
    </>
  );
}
