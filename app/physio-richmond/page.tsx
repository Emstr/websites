import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} /></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6"><div className="w-12 h-px bg-[var(--accent)]"></div><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">HCPC Registered Physiotherapy Clinic</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-serif">Expert Physio in{" "}<span className="text-gold-gradient">Richmond</span></h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">Specialist physiotherapy for sports injuries, back pain, rehabilitation, and more. Our HCPC registered team helps you move better, recover faster, and live without pain. Self-referral welcome — no GP letter needed.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/physio-richmond/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors text-lg text-center">Book an Appointment</Link>
              <a href="tel:02079465678" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors text-lg text-center">Call 020 7946 5678</a>
            </div>
            <div className="flex flex-wrap items-center gap-8 text-white/80">
              {["HCPC Registered", "CSP Members", "Self-Referral Welcome"].map((t) => (<div key={t} className="flex items-center gap-2"><svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>{t}</span></div>))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10"><svg viewBox="0 0 400 400" className="w-full h-full"><circle cx="200" cy="200" r="180" stroke="#7bc67e" strokeWidth="2" fill="none" /><circle cx="200" cy="200" r="140" stroke="#7bc67e" strokeWidth="1" fill="none" /><circle cx="200" cy="200" r="100" stroke="#7bc67e" strokeWidth="0.5" fill="none" /></svg></div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Treatments</span><h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4 font-serif">Specialist Physiotherapy Services</h2><div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div><p className="text-lg text-gray-600 max-w-2xl mx-auto">From acute injuries to chronic conditions, our experienced physiotherapists provide evidence-based treatment tailored to your individual needs.</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Sports Injury Treatment", desc: "Expert diagnosis and rehabilitation for all sports injuries. From sprains and strains to ligament tears and fractures, we get you back to peak performance.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              { title: "Back & Neck Pain", desc: "Comprehensive assessment and treatment for back pain, neck pain, sciatica, and spinal conditions. Manual therapy, exercise, and long-term management strategies.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
              { title: "Post-Surgery Rehabilitation", desc: "Structured rehabilitation programmes following joint replacement, ACL reconstruction, spinal surgery, and other procedures. Optimise your recovery.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
              { title: "Acupuncture", desc: "Western medical acupuncture for pain relief, muscle tension, and enhanced recovery. Evidence-based and delivered by trained physiotherapists.", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
              { title: "Massage Therapy", desc: "Sports massage, deep tissue therapy, and myofascial release to reduce tension, improve flexibility, and accelerate recovery from training or injury.", icon: "M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" },
              { title: "Women's Health Physio", desc: "Specialist pelvic health physiotherapy, pre and postnatal care, incontinence treatment, and pelvic pain management in a supportive environment.", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
            ].map((s) => (
              <div key={s.title} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow border-t-4 border-transparent hover:border-[var(--accent)]">
                <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} /></svg></div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-3 font-serif">{s.title}</h3><p className="text-gray-600 mb-4">{s.desc}</p>
                <Link href="/physio-richmond/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
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
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4 font-serif">Physiotherapy That Gets Results</h2>
              <div className="w-16 h-1 bg-[var(--accent)] mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">We combine hands-on expertise with the latest evidence-based techniques to help you recover, strengthen, and prevent future injury. Every treatment plan is individual, because no two patients are the same.</p>
              <div className="space-y-6">
                {[
                  { t: "Self-Referral Welcome", d: "You don't need a GP referral to see us. Simply book an appointment directly and we'll take care of the rest. Get treatment faster." },
                  { t: "Early & Evening Appointments", d: "Open from 7:30am Monday to Thursday and until 8pm, so you can fit treatment around your work and life commitments." },
                  { t: "HCPC Registered & CSP Members", d: "All our physiotherapists are registered with the Health and Care Professions Council and are Chartered Society of Physiotherapy members." },
                  { t: "Personalised Treatment Plans", d: "Every patient receives a thorough assessment and bespoke treatment plan. We treat the person, not just the condition." },
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
                <div className="text-center"><div className="text-4xl font-bold text-[var(--accent)]">15+</div><p className="text-gray-600 mt-2">Years Experience</p></div>
                <div className="text-center"><div className="text-4xl font-bold text-[var(--accent)]">8,000+</div><p className="text-gray-600 mt-2">Patients Treated</p></div>
                <div className="text-center"><div className="text-4xl font-bold text-[var(--accent)]">5</div><p className="text-gray-600 mt-2">Specialist Physios</p></div>
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
              { text: "I came in with a frozen shoulder that had been causing me agony for months. After six sessions with Sarah, I have full range of movement back. The exercises she gave me were clear and easy to follow at home. Genuinely life-changing.", name: "David H.", role: "Patient, Richmond" },
              { text: "Brilliant post-ACL surgery rehab. The team understood exactly where I was in my recovery and pushed me at the right pace. I'm back playing football and feeling stronger than before the injury. Can't recommend them enough.", name: "James T.", role: "Patient, Twickenham" },
              { text: "I was nervous about the women's health physio, but the team put me completely at ease from the first appointment. Professional, knowledgeable, and genuinely caring. The treatment has made such a difference to my quality of life.", name: "Rachel K.", role: "Patient, Kew" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4 font-serif">Ready to Start Your Recovery?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Book your appointment today. Self-referral welcome — no GP letter needed. Early morning and evening appointments available Monday to Thursday.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/physio-richmond/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Book an Appointment</Link>
              <a href="tel:02079465678" className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--primary)] hover:text-white transition-colors inline-block">Call 020 7946 5678</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="bg-gray-50 border border-gray-200 rounded-sm p-4 text-sm text-gray-600"><p><strong>HCPC Registered:</strong> All physiotherapists at Richmond Physiotherapy Clinic are registered with the Health and Care Professions Council (HCPC) and are members of the Chartered Society of Physiotherapy (CSP). We carry full professional indemnity insurance.</p></div></div></section>
    </>
  );
}
