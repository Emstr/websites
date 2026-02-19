import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} /></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6"><div className="w-12 h-px bg-[var(--accent)]"></div><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">GDC Registered Dental Practice</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-serif">Your Smile Starts in{" "}<span className="text-gold-gradient">Clapham</span></h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">Modern, friendly dental care for the whole family. From routine check-ups to stunning smile makeovers, Clapham Dental Practice offers NHS and private treatments with evening appointments to fit your schedule.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/dentist-clapham/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors text-lg text-center">Book an Appointment</Link>
              <a href="tel:02079461234" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors text-lg text-center">Call 020 7946 1234</a>
            </div>
            <div className="flex flex-wrap items-center gap-8 text-white/80">
              {["GDC Registered", "NHS & Private", "Evening Appointments"].map((t) => (<div key={t} className="flex items-center gap-2"><svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>{t}</span></div>))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10"><svg viewBox="0 0 400 400" className="w-full h-full"><circle cx="200" cy="200" r="180" stroke="#4ecdc4" strokeWidth="2" fill="none" /><circle cx="200" cy="200" r="140" stroke="#4ecdc4" strokeWidth="1" fill="none" /><circle cx="200" cy="200" r="100" stroke="#4ecdc4" strokeWidth="0.5" fill="none" /></svg></div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Treatments</span><h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4 font-serif">Comprehensive Dental Care</h2><div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div><p className="text-lg text-gray-600 max-w-2xl mx-auto">From preventive care to transformative cosmetic treatments, we provide everything you need for a healthy, beautiful smile.</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "General Dentistry", desc: "Routine check-ups, hygiene appointments, fillings, root canals, and extractions. Preventive care to keep your smile healthy for life.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
              { title: "Cosmetic Dentistry", desc: "Porcelain veneers, composite bonding, and complete smile makeovers. Transform your confidence with a smile you love.", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
              { title: "Teeth Whitening", desc: "Professional whitening treatments that deliver results you simply can't achieve at home. Dramatically brighter in just one visit.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
              { title: "Dental Implants", desc: "The gold standard in tooth replacement. Permanent, natural-looking implants that function just like your own teeth.", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
              { title: "Invisalign", desc: "Straighten your teeth discreetly with clear aligners. No metal brackets, no wires — just a gradually perfecting smile.", icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Emergency Dental Care", desc: "Toothache, broken tooth, or dental trauma? We offer same-day emergency appointments to get you out of pain fast.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
            ].map((s) => (
              <div key={s.title} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow border-t-4 border-transparent hover:border-[var(--accent)]">
                <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} /></svg></div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-3 font-serif">{s.title}</h3><p className="text-gray-600 mb-4">{s.desc}</p>
                <Link href="/dentist-clapham/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4 font-serif">Dental Care That Puts You First</h2>
              <div className="w-16 h-1 bg-[var(--accent)] mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">We know that visiting the dentist can be daunting. That&apos;s why we&apos;ve created a warm, welcoming practice where nervous patients feel at ease and everyone receives the time and attention they deserve.</p>
              <div className="space-y-6">
                {[
                  { t: "Evening Appointments", d: "Open until 8pm Monday to Thursday, so you don't have to take time off work for your dental care." },
                  { t: "NHS & Private Options", d: "We offer both NHS and private treatments, giving you choice and flexibility depending on your needs and budget." },
                  { t: "Nervous Patient Specialists", d: "Anxious about dental visits? Our gentle approach and calming environment help even the most nervous patients feel comfortable." },
                  { t: "Latest Technology", d: "Digital X-rays, intraoral cameras, and modern equipment for more precise, comfortable treatments." },
                ].map((item) => (
                  <div key={item.t} className="flex gap-4">
                    <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></div>
                    <div><h3 className="text-lg font-bold text-[var(--primary)] mb-1 font-serif">{item.t}</h3><p className="text-gray-600">{item.d}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center"><div className="text-4xl font-bold text-[var(--accent)]">20+</div><p className="text-gray-600 mt-2">Years Experience</p></div>
                <div className="text-center"><div className="text-4xl font-bold text-[var(--accent)]">10,000+</div><p className="text-gray-600 mt-2">Patients Treated</p></div>
                <div className="text-center"><div className="text-4xl font-bold text-[var(--accent)]">4</div><p className="text-gray-600 mt-2">Dentists on Team</p></div>
                <div className="text-center"><div className="text-4xl font-bold text-[var(--accent)]">4.9/5</div><p className="text-gray-600 mt-2">Patient Rating</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Patient Reviews</span><h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4 font-serif">What Our Patients Say</h2><div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div></div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "I used to dread going to the dentist, but the team here are so gentle and patient. The evening appointments are a lifesaver for my work schedule. Best dental practice I've been to.", name: "Lucy M.", role: "Patient, Clapham Common" },
              { text: "Had Invisalign treatment and the results are incredible. Dr Patel explained every step clearly and the whole process was much easier than I expected. Can't stop smiling!", name: "Tom B.", role: "Patient, Balham" },
              { text: "Emergency appointment for a cracked tooth — they saw me the same morning. Professional, reassuring, and painless. I've now registered the whole family here.", name: "Anita S.", role: "Patient, Brixton" },
            ].map((r) => (
              <div key={r.name} className="bg-white p-8 rounded-sm shadow-lg">
                <p className="text-gray-600 mb-6 italic">&quot;{r.text}&quot;</p>
                <div className="flex items-center gap-3"><div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center"><span className="text-[var(--primary)] font-bold">{r.name.split(" ").map(n=>n[0]).join("")}</span></div><div><p className="font-semibold text-[var(--primary)]">{r.name}</p><p className="text-sm text-gray-500">{r.role}</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-[var(--accent)]">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4 font-serif">Ready for a Healthier Smile?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Book your appointment today. New patients welcome. NHS and private options available. Evening appointments Monday to Thursday.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/dentist-clapham/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Book an Appointment</Link>
              <a href="tel:02079461234" className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--primary)] hover:text-white transition-colors inline-block">Call 020 7946 1234</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="bg-gray-50 border border-gray-200 rounded-sm p-4 text-sm text-gray-600"><p><strong>GDC Registered:</strong> All dentists at Clapham Dental Practice are registered with the General Dental Council. We are regulated by the Care Quality Commission (CQC) and maintain the highest standards of clinical care.</p></div></div></section>
    </>
  );
}
