import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[var(--accent)]"></div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">24/7 Emergency Locksmith</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Locked Out in{" "}<span className="text-gold-gradient">Camden?</span></h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">Camden Lock &amp; Key gets you back in fast. 30-minute response, no call-out fee, no damage to your door. DBS checked locksmiths you can trust, available 24 hours a day.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="tel:02079460789" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors text-lg text-center">Call Now — 020 7946 0789</a>
              <Link href="/locksmith-camden/contact" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors text-lg text-center">Request Callback</Link>
            </div>
            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>DBS Checked</span></div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>30-Minute Response</span></div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>No Call-Out Fee</span></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 400 400" className="w-full h-full"><circle cx="200" cy="200" r="180" stroke="#c9a84c" strokeWidth="2" fill="none" /><circle cx="200" cy="200" r="140" stroke="#c9a84c" strokeWidth="1" fill="none" /><circle cx="200" cy="200" r="100" stroke="#c9a84c" strokeWidth="0.5" fill="none" /></svg>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Complete Locksmith Solutions</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From emergency lockouts to security upgrades, our DBS checked locksmiths handle every lock situation with skill and discretion.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Emergency Lockout Service", desc: "Locked out? We'll have you back inside within 30 minutes. Non-destructive entry methods used wherever possible.", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
              { title: "Lock Replacement", desc: "Upgrade to British Standard locks for insurance compliance. All major brands fitted including Yale, Chubb, and ERA.", icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" },
              { title: "UPVC & Multipoint Lock Repair", desc: "Specialist UPVC door and window lock repairs. Multipoint mechanisms, handles, hinges, and gearboxes replaced.", icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
              { title: "Key Cutting", desc: "Precision key cutting while you wait. Standard, dimple, and restricted keys for all residential and commercial locks.", icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" },
              { title: "Security Upgrades", desc: "Comprehensive security assessments and upgrades. Insurance-compliant locks, door chains, spy holes, and smart locks.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { title: "Safe Opening", desc: "Professional safe opening without damage where possible. Combination changes, repairs, and new safe installations.", icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" },
            ].map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow border-t-4 border-transparent hover:border-[var(--accent)]">
                <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} /></svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link href="/locksmith-camden/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
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
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Camden&apos;s Trusted Locksmith</h2>
              <div className="w-16 h-1 bg-[var(--accent)] mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">When you&apos;re locked out or your security has been compromised, you need someone you can trust at your door. Every Camden Lock &amp; Key locksmith is DBS checked, fully insured, and trained to the highest standards.</p>
              <div className="space-y-6">
                {[
                  { title: "DBS Checked", desc: "Every locksmith carries an enhanced DBS certificate. You can verify their identity before they start work." },
                  { title: "30-Minute Response", desc: "We have locksmiths stationed across Camden and North London. Average arrival time is just 20 minutes." },
                  { title: "No Call-Out Fee", desc: "You only pay for the work done. No hidden charges, no inflated emergency rates. Honest pricing guaranteed." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    </div>
                    <div><h3 className="text-lg font-bold text-[var(--primary)] mb-1">{item.title}</h3><p className="text-gray-600">{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center"><div className="text-4xl font-bold text-[var(--accent)]">12+</div><p className="text-gray-600 mt-2">Years Experience</p></div>
                <div className="text-center"><div className="text-4xl font-bold text-[var(--accent)]">8,000+</div><p className="text-gray-600 mt-2">Lockouts Resolved</p></div>
                <div className="text-center"><div className="text-4xl font-bold text-[var(--accent)]">&lt;30m</div><p className="text-gray-600 mt-2">Avg Response Time</p></div>
                <div className="text-center"><div className="text-4xl font-bold text-[var(--accent)]">98%</div><p className="text-gray-600 mt-2">Non-Destructive Entry</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Customer Reviews</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">What Our Customers Say</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Locked myself out at midnight. Camden Lock & Key arrived in 20 minutes and had me back inside without a scratch on the door. Incredibly professional.", name: "Emma R.", role: "Resident, Camden Town" },
              { text: "Had all my locks changed after a break-in. They came the same day, fitted British Standard locks, and made me feel secure again. Can't thank them enough.", name: "Marcus J.", role: "Homeowner, Kentish Town" },
              { text: "They handle all the lock changes for my rental properties. Always reliable, always on time, and the tenants always comment on how professional they are.", name: "Fatima A.", role: "Landlord, Chalk Farm" },
            ].map((review) => (
              <div key={review.name} className="bg-white p-8 rounded-sm shadow-lg">
                <p className="text-gray-600 mb-6 italic">&quot;{review.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center"><span className="text-[var(--primary)] font-bold">{review.name.split(" ").map(n => n[0]).join("")}</span></div>
                  <div><p className="font-semibold text-[var(--primary)]">{review.name}</p><p className="text-sm text-gray-500">{review.role}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-[var(--accent)]">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">Locked Out? Need Better Security?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Call us now for immediate assistance or get in touch for a free security assessment. Available 24/7, 365 days a year.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:02079460789" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Call 020 7946 0789</a>
              <Link href="/locksmith-camden/contact" className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--primary)] hover:text-white transition-colors inline-block">Request Callback</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-sm p-4 text-sm text-gray-600">
            <p><strong>DBS Checked & Fully Insured:</strong> All Camden Lock &amp; Key locksmiths are DBS checked and fully insured. We use non-destructive entry methods wherever possible and guarantee all work.</p>
          </div>
        </div>
      </section>
    </>
  );
}
