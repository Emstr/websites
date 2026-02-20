import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} /></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6"><div className="w-12 h-px bg-[var(--accent)]"></div><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Established 2008</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Immaculate Care,{" "}<span className="text-teal-gradient">Every Time</span></h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">Premium dry cleaning and laundry on Kensington High Street. Eco-friendly solvents, expert garment care and free collection and delivery across West London.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/dry-cleaner-kensington/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors text-lg text-center">Book a Collection</Link>
              <Link href="/dry-cleaner-kensington/services" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors text-lg text-center">Our Services</Link>
            </div>
            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Eco-Friendly</span></div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Free Collection &amp; Delivery</span></div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Same-Day Express</span></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10"><svg viewBox="0 0 400 400" className="w-full h-full"><circle cx="200" cy="200" r="180" stroke="#00b894" strokeWidth="2" fill="none" /><circle cx="200" cy="200" r="140" stroke="#00b894" strokeWidth="1" fill="none" /><circle cx="200" cy="200" r="100" stroke="#00b894" strokeWidth="0.5" fill="none" /></svg></div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Expert Garment Care</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From business suits to bridal gowns, we handle every garment with the care it deserves. Over 15,000 garments trusted to us each year.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Dry Cleaning", desc: "Professional dry cleaning for suits, dresses, coats and delicates using eco-friendly GreenEarth solvents that are gentle on fabrics and the planet.", icon: <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg> },
              { title: "Shirt Service", desc: "Crisp, professionally laundered and pressed shirts returned on hangers or folded. Perfect for busy professionals who demand impeccable presentation.", icon: <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
              { title: "Wedding Dress Care", desc: "Specialist bridal gown cleaning and preservation. We carefully clean, press and box your dress in acid-free tissue to keep it beautiful for years to come.", icon: <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
              { title: "Curtain & Upholstery", desc: "Professional cleaning for curtains, blinds, cushion covers and upholstered furniture. We can take down and re-hang curtains on request.", icon: <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
              { title: "Alterations & Repairs", desc: "Expert tailoring, alterations and repairs for all garments. Trouser hems, zip replacements, re-lining and bespoke adjustments from our in-house seamstress.", icon: <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" /></svg> },
              { title: "Same-Day Express", desc: "Need it back today? Drop off before 10am and collect by 5pm. Perfect for last-minute events, interviews or business trips.", icon: <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
            ].map((s) => (
              <div key={s.title} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-4 border-[var(--accent)]">
                <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">{s.icon}</div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-3">{s.title}</h3>
                <p className="text-gray-600 mb-4">{s.desc}</p>
                <Link href="/dry-cleaner-kensington/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Why Kensington Dry Cleaners</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Trusted by Kensington Since 2008</h2>
              <div className="w-16 h-1 bg-[var(--accent)] mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">We combine traditional craftsmanship with modern, eco-friendly technology. Every garment is individually assessed, treated with the appropriate process and finished to an impeccable standard.</p>
              <div className="space-y-6">
                <div className="flex gap-4"><div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><div><h3 className="text-lg font-bold text-[var(--primary)] mb-1">Eco-Friendly Solvents</h3><p className="text-gray-600">We use GreenEarth silicone-based solvents that are kinder to fabrics, colours and the environment than traditional perc-based cleaning.</p></div></div>
                <div className="flex gap-4"><div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div><div><h3 className="text-lg font-bold text-[var(--primary)] mb-1">Free Collection &amp; Delivery</h3><p className="text-gray-600">We collect and deliver free of charge across Kensington, Chelsea, Notting Hill and surrounding areas. Simply book a slot that suits you.</p></div></div>
                <div className="flex gap-4"><div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><div><h3 className="text-lg font-bold text-[var(--primary)] mb-1">Same-Day Service</h3><p className="text-gray-600">In a rush? Our express service has your garments cleaned and ready the same day. Drop off before 10am, collect by 5pm.</p></div></div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center"><div className="text-4xl font-bold text-[var(--accent)] font-serif">17+</div><p className="text-gray-600 mt-2">Years Experience</p></div>
                <div className="text-center"><div className="text-4xl font-bold text-[var(--accent)] font-serif">15k+</div><p className="text-gray-600 mt-2">Garments/Year</p></div>
                <div className="text-center"><div className="text-4xl font-bold text-[var(--accent)] font-serif">Free</div><p className="text-gray-600 mt-2">Collection &amp; Delivery</p></div>
                <div className="text-center"><div className="text-4xl font-bold text-[var(--accent)] font-serif">100%</div><p className="text-gray-600 mt-2">Eco-Friendly</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Customer Reviews</span><h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">What Our Customers Say</h2><div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div></div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm"><p className="text-gray-600 mb-6 italic">&quot;I have used Kensington Dry Cleaners for years and the quality is consistently excellent. They saved a silk blouse I thought was ruined. The collection service is wonderfully convenient.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center"><span className="text-[var(--primary)] font-bold">CW</span></div><div><p className="font-semibold text-[var(--primary)]">Charlotte W.</p><p className="text-sm text-gray-500">Kensington resident</p></div></div></div>
            <div className="bg-white p-8 rounded-sm"><p className="text-gray-600 mb-6 italic">&quot;Brilliant shirt service. I drop off five shirts on Monday morning and they come back immaculate by Wednesday. The eco-friendly approach is a bonus. Would not go anywhere else.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center"><span className="text-[var(--primary)] font-bold">JH</span></div><div><p className="font-semibold text-[var(--primary)]">James H.</p><p className="text-sm text-gray-500">Business professional</p></div></div></div>
            <div className="bg-white p-8 rounded-sm"><p className="text-gray-600 mb-6 italic">&quot;They cleaned and preserved my wedding dress beautifully. It came back looking as good as the day I bought it, and the preservation box is gorgeous. Truly a premium service.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center"><span className="text-[var(--primary)] font-bold">OB</span></div><div><p className="font-semibold text-[var(--primary)]">Olivia B.</p><p className="text-sm text-gray-500">Bride, Holland Park</p></div></div></div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-[var(--accent)]">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">Ready for Immaculate Garment Care?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Book a free collection or drop in to our Kensington High Street shop. We look forward to taking care of your wardrobe.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/dry-cleaner-kensington/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors">Book a Collection</Link>
              <a href="tel:02079465530" className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--primary)] hover:text-white transition-colors">Call 020 7946 5530</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
