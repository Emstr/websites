import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} /></div>
        <div className="container-width relative z-10"><div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6"><div className="w-12 h-px bg-accent"></div><span className="text-accent font-semibold tracking-wider uppercase text-sm">Est. 2010 &middot; Brixton, London</span></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Clear Vision,{" "}<span className="text-teal-gradient">Expert Care</span></h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">Independent opticians on Brixton Road. Four qualified optometrists, advanced diagnostic technology, and over 12,000 patients trusting us with their eye health.</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12"><Link href="/optician-brixton/contact" className="btn-accent text-lg">Book an Eye Test</Link><Link href="/optician-brixton/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg">Our Services</Link></div>
          <div className="flex flex-wrap items-center gap-8 text-white/80">
            <div className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>NHS &amp; Private</span></div>
            <div className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>12,000+ Patients</span></div>
            <div className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>GOC Registered</span></div>
          </div>
        </div></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10"><svg viewBox="0 0 400 400" className="w-full h-full"><circle cx="200" cy="200" r="180" stroke="#3dc1d3" strokeWidth="2" fill="none" /><circle cx="200" cy="200" r="140" stroke="#3dc1d3" strokeWidth="1" fill="none" /><circle cx="200" cy="200" r="100" stroke="#3dc1d3" strokeWidth="0.5" fill="none" /></svg></div>
      </section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Services</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Comprehensive Eye Care</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 max-w-2xl mx-auto">From routine eye tests to emergency care, we provide a full range of eye care services for the whole family.</p></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { t: "Eye Examinations", d: "Thorough 30-minute examinations using OCT scanning, retinal photography, and visual field testing. NHS and private options available.", i: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
            { t: "Contact Lens Fitting", d: "Expert fitting for all types of contact lenses including daily, monthly, toric, and multifocal. Full aftercare included.", i: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
            { t: "Designer Frames", d: "Over 500 frames in stock from brands including Ray-Ban, Tom Ford, Prada, and Oakley. Glazing and adjustments in-house.", i: "M4 6h16M4 10h16M4 14h16M4 18h16" },
            { t: "Children's Eye Care", d: "Specialist eye tests for children from age 3. Free NHS eye tests for all children under 16 and those in full-time education.", i: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
            { t: "Emergency Eye Care", d: "Same-day appointments for urgent concerns. Red eyes, sudden vision changes, foreign bodies, and eye injuries assessed promptly.", i: "M13 10V3L4 14h7v7l9-11h-7z" },
            { t: "DVLA Screening", d: "DVLA-standard vision screening and certificates for driving licence applications. Results issued same day.", i: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
          ].map((s, i) => (
            <div key={i} className="card-premium p-8"><div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.i} /></svg></div><h3 className="text-xl font-bold text-primary mb-3">{s.t}</h3><p className="text-gray-600 mb-4">{s.d}</p><Link href="/optician-brixton/services" className="text-accent font-semibold inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link></div>
          ))}
        </div>
        <div className="text-center mt-12"><Link href="/optician-brixton/services" className="btn-primary">View All Services</Link></div>
      </div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="grid lg:grid-cols-2 gap-16 items-center">
        <div><span className="text-accent font-semibold tracking-wider uppercase text-sm">Why Brixton Eye Care</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Your Eyes Deserve the Best</h2><div className="gold-line mb-6"></div><p className="text-lg text-gray-600 mb-8">We are not a chain. We are an independent practice that takes the time to get to know every patient. Our optometrists spend a full 30 minutes on each examination because your eye health is too important to rush.</p>
          <div className="space-y-6">
            {[{ t: "Advanced Technology", d: "OCT scanning, retinal photography, and visual field analysis included as standard in every eye examination." },
              { t: "Independent Advice", d: "We are not tied to any frame supplier. We recommend what suits your face, your prescription, and your budget." },
              { t: "Community Focus", d: "Proudly serving Brixton and the surrounding community for over 14 years. We know our patients by name." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4"><div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></div><div><h3 className="text-lg font-bold text-primary mb-1">{item.t}</h3><p className="text-gray-600">{item.d}</p></div></div>
            ))}
          </div>
        </div>
        <div className="bg-gray-50 p-8 lg:p-12 rounded-sm"><div className="grid grid-cols-2 gap-8">
          <div className="text-center"><div className="stat-number">12K+</div><p className="text-gray-600 mt-2">Patients Served</p></div>
          <div className="text-center"><div className="stat-number">4</div><p className="text-gray-600 mt-2">Optometrists</p></div>
          <div className="text-center"><div className="stat-number">14</div><p className="text-gray-600 mt-2">Years in Brixton</p></div>
          <div className="text-center"><div className="stat-number">4.8</div><p className="text-gray-600 mt-2">Google Rating</p></div>
        </div></div>
      </div></div></section>

      <section className="section-padding bg-primary"><div className="container-width"><div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Patient Reviews</span><h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">What Our Patients Say</h2><div className="gold-line-center mb-6"></div></div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { t: "Best eye test I have ever had. The optometrist explained everything clearly and spent proper time checking my eyes. Found a condition my previous optician had missed.", n: "Grace A.", r: "Patient, Herne Hill" },
            { t: "Brilliant with children. My daughter was nervous about her first eye test but the team made her feel completely comfortable. The frames selection for kids is excellent too.", n: "Marcus T.", r: "Parent, Brixton" },
            { t: "Needed emergency help when something got in my eye on a Saturday. They saw me within the hour and sorted it out. Really grateful for their quick response.", n: "Priya K.", r: "Emergency Patient, Camberwell" },
          ].map((t, i) => (
            <div key={i} className="testimonial-card"><p className="text-gray-600 mb-6 italic">&quot;{t.t}&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">{t.n.split(" ").map(n => n[0]).join("")}</span></div><div><p className="font-semibold text-primary">{t.n}</p><p className="text-sm text-gray-500">{t.r}</p></div></div></div>
          ))}
        </div>
      </div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-accent">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Time for an Eye Test?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">The NHS recommends an eye test every two years. Book yours today and protect your vision for the future.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/optician-brixton/contact" className="btn-accent">Book Eye Test</Link><a href="tel:02079465520" className="btn-outline">Call 020 7946 5520</a></div>
      </div></div></section>
    </>
  );
}
