import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} /></div>
        <div className="container-width relative z-10"><div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6"><div className="w-12 h-px bg-accent"></div><span className="text-accent font-semibold tracking-wider uppercase text-sm">GCC Registered Chiropractors</span></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Expert Chiropractic Care in{" "}<span className="text-accent-gradient">Kensington</span></h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">Evidence-based chiropractic treatment for back pain, neck pain, headaches and sports injuries. GCC registered professionals dedicated to your spinal health.</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12"><Link href="/chiropractor-kensington/contact" className="btn-accent text-lg">Book an Appointment</Link><Link href="/chiropractor-kensington/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg">Our Treatments</Link></div>
          <div className="flex flex-wrap items-center gap-8 text-white/80">
            {["GCC Registered", "BCA Member", "Evidence-Based Care"].map((t) => (<div key={t} className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>{t}</span></div>))}
          </div>
        </div></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10"><svg viewBox="0 0 400 400" className="w-full h-full"><circle cx="200" cy="200" r="180" stroke="#48cae4" strokeWidth="2" fill="none" /><circle cx="200" cy="200" r="140" stroke="#48cae4" strokeWidth="1" fill="none" /><circle cx="200" cy="200" r="100" stroke="#48cae4" strokeWidth="0.5" fill="none" /></svg></div>
      </section>

      <section className="section-padding bg-gray-50"><div className="container-width">
        <div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Treatments</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Comprehensive Chiropractic Care</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 max-w-2xl mx-auto">From acute pain relief to long-term spinal health, our evidence-based treatments are tailored to your individual needs.</p></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Chiropractic Adjustments", desc: "Precise, gentle spinal adjustments to restore proper alignment, relieve nerve pressure and reduce pain.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
            { title: "Spinal Decompression", desc: "Non-surgical decompression therapy for herniated discs, sciatica and chronic spinal conditions.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg> },
            { title: "Sports Chiropractic", desc: "Specialist care for athletes and active individuals. Injury treatment, prevention and performance optimisation.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> },
            { title: "Posture Correction", desc: "Comprehensive posture assessment and correction programmes for desk workers and those with postural imbalances.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
            { title: "Headache & Migraine Relief", desc: "Targeted treatment for tension headaches and cervicogenic migraines caused by spinal dysfunction.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg> },
            { title: "Pregnancy Chiropractic", desc: "Gentle, safe care during pregnancy using the Webster Technique. Relieve back pain and support a comfortable pregnancy.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
          ].map((s) => (<div key={s.title} className="card-premium p-8"><div className="service-icon">{s.icon}</div><h3 className="text-xl font-bold text-primary mb-3">{s.title}</h3><p className="text-gray-600 mb-4">{s.desc}</p><Link href="/chiropractor-kensington/services" className="text-accent font-semibold inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link></div>))}
        </div>
        <div className="text-center mt-12"><Link href="/chiropractor-kensington/services" className="btn-primary">View All Treatments</Link></div>
      </div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Your Spinal Health Experts</h2>
          <div className="gold-line mb-6"></div>
          <p className="text-lg text-gray-600 mb-8">We combine the latest clinical evidence with hands-on expertise to deliver chiropractic care that gets results. Every treatment plan is individually designed around your specific condition and goals.</p>
          <div className="space-y-6">
            {[
              { title: "GCC Registered Professionals", desc: "All our chiropractors are registered with the General Chiropractic Council, the UK's statutory regulatory body for chiropractic." },
              { title: "Evidence-Based Approach", desc: "We base our treatments on the latest clinical research, ensuring you receive care that is both safe and effective." },
              { title: "Holistic Treatment Plans", desc: "We look beyond the symptoms to address the root cause, incorporating exercise rehabilitation and lifestyle advice." },
            ].map((item) => (<div key={item.title} className="flex gap-4"><div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></div><div><h3 className="text-lg font-bold text-primary mb-1">{item.title}</h3><p className="text-gray-600">{item.desc}</p></div></div>))}
          </div>
        </div>
        <div className="bg-gray-50 p-8 lg:p-12 rounded-sm"><div className="grid grid-cols-2 gap-8">
          <div className="text-center"><div className="stat-number">15+</div><p className="text-gray-600 mt-2">Years Experience</p></div>
          <div className="text-center"><div className="stat-number">10,000+</div><p className="text-gray-600 mt-2">Patients Treated</p></div>
          <div className="text-center"><div className="stat-number">98%</div><p className="text-gray-600 mt-2">Patient Satisfaction</p></div>
          <div className="text-center"><div className="stat-number">5★</div><p className="text-gray-600 mt-2">Google Rating</p></div>
        </div></div>
      </div></div></section>

      <section className="section-padding bg-primary"><div className="container-width">
        <div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Patient Stories</span><h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">What Our Patients Say</h2><div className="gold-line-center mb-6"></div></div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="testimonial-card"><p className="text-gray-600 mb-6 italic">&quot;After years of chronic back pain, I finally found relief. The team here took the time to properly diagnose my condition and create a treatment plan that actually worked.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">CR</span></div><div><p className="font-semibold text-primary">Caroline R.</p><p className="text-sm text-gray-500">Office Worker, Kensington</p></div></div></div>
          <div className="testimonial-card"><p className="text-gray-600 mb-6 italic">&quot;As a runner, having a sports chiropractor I trust is invaluable. They&apos;ve kept me injury-free for three marathon seasons now. Brilliant, evidence-based care.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">DM</span></div><div><p className="font-semibold text-primary">David M.</p><p className="text-sm text-gray-500">Marathon Runner, Chelsea</p></div></div></div>
          <div className="testimonial-card"><p className="text-gray-600 mb-6 italic">&quot;The pregnancy chiropractic was a lifesaver. My lower back pain was making sleep impossible until I started treatment here. Gentle, professional and so effective.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">SJ</span></div><div><p className="font-semibold text-primary">Sophie J.</p><p className="text-sm text-gray-500">Expectant Mother, Notting Hill</p></div></div></div>
        </div>
      </div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-accent">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ready to Relieve Your Pain?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Book your initial consultation today. We&apos;ll carry out a thorough assessment and create a personalised treatment plan.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/chiropractor-kensington/contact" className="btn-accent">Book an Appointment</Link><a href="tel:02079465890" className="btn-outline">Call 020 7946 5890</a></div>
      </div></div></section>
    </>
  );
}
