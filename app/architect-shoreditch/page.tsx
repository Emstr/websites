import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Shoreditch Architecture Studio | RIBA Chartered Architects in Shoreditch, E2", description: "Award-winning RIBA Chartered architects in Shoreditch. Residential and commercial architecture, planning applications, loft conversions and interior design. ARB Registered studio in E2." };

export default function HomePage() {
  const services = [
    { title: "Residential Architecture", desc: "Bespoke home design from concept to completion. New builds, renovations and conversions that reflect your lifestyle and maximise your space.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
    { title: "Commercial Design", desc: "Offices, retail spaces and mixed-use developments designed to enhance productivity, attract customers and deliver strong returns.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
    { title: "Planning Applications", desc: "Expert planning strategy and application management. We navigate complex planning systems to secure approval for your project.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
    { title: "Interior Design", desc: "Interiors that complement the architecture. Material specification, spatial planning and bespoke joinery designed to create remarkable spaces.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg> },
    { title: "Loft Conversions & Extensions", desc: "Maximise your property's potential with expertly designed loft conversions, rear extensions, side returns and basement conversions.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg> },
    { title: "Heritage & Conservation", desc: "Sensitive restoration and adaptation of listed buildings and conservation area properties. Balancing historic character with modern living.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg> },
  ];

  const testimonials = [
    { name: "James Thornton", role: "Homeowner, Hackney", quote: "They transformed our Victorian terrace into a stunning modern family home while respecting every original feature. The loft conversion and rear extension have completely changed how we live." },
    { name: "Priya Mehta", role: "Restaurant Owner, Shoreditch", quote: "Our restaurant fit-out was delivered on time and within budget. The design captures exactly the atmosphere we wanted — our customers constantly comment on the space." },
    { name: "David & Sarah Collins", role: "Property Developer", quote: "We've worked with the studio on three developments now. Their planning expertise and design quality consistently add value. They understand the commercial realities of development." },
  ];

  return (
    <>
      <section className="hero-gradient py-24 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs><rect width="100" height="100" fill="url(#grid)" /></svg></div>
        <div className="container-width relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">RIBA Chartered Architects</span>
              <span className="w-12 h-px bg-[var(--accent)]"></span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Architecture That <span className="text-accent-gradient">Inspires</span></h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">Award-winning residential and commercial architects in Shoreditch. We design buildings that are beautiful, functional and built to last.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/architect-shoreditch/contact" className="btn-accent">Book a Consultation</Link>
              <Link href="/architect-shoreditch/services" className="btn-outline border-white text-white hover:bg-white hover:text-[var(--primary)]">View Our Services</Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-300">
              <span className="flex items-center gap-2"><svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>RIBA Chartered</span>
              <span className="flex items-center gap-2"><svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>ARB Registered</span>
              <span className="flex items-center gap-2"><svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Award-Winning Design</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Architecture & Design Services</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From initial concept through to completion, we deliver exceptional design across residential, commercial and heritage projects.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="card-premium p-8">
                <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6 text-[var(--primary)]">{s.icon}</div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/architect-shoreditch/services" className="btn-accent">Explore All Services</Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Design-Led Architecture with a Personal Approach</h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">We are a RIBA Chartered practice rooted in Shoreditch with a reputation for thoughtful, contemporary design. Every project receives the same level of care and attention, regardless of scale.</p>
              <ul className="space-y-4">
                {["Design-led approach to every project, large or small", "Deep understanding of East London planning policies", "Transparent fixed-fee pricing with no hidden costs", "Hands-on involvement from directors at every stage", "Strong contractor relationships for seamless delivery"].map((item) => (
                  <li key={item} className="flex items-start gap-3"><svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span className="text-gray-600">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-8 bg-white rounded-sm shadow-sm"><div className="stat-number">15+</div><p className="text-gray-600 mt-2 font-medium">Years in Practice</p></div>
              <div className="text-center p-8 bg-white rounded-sm shadow-sm"><div className="stat-number">200+</div><p className="text-gray-600 mt-2 font-medium">Projects Completed</p></div>
              <div className="text-center p-8 bg-white rounded-sm shadow-sm"><div className="stat-number">95%</div><p className="text-gray-600 mt-2 font-medium">Planning Approval Rate</p></div>
              <div className="text-center p-8 bg-white rounded-sm shadow-sm"><div className="stat-number">5★</div><p className="text-gray-600 mt-2 font-medium">Google Rating</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Client Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">What Our Clients Say</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="card-premium p-8">
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => (<svg key={i} className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}</div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                <div><p className="font-bold text-[var(--primary)]">{t.name}</p><p className="text-sm text-gray-500">{t.role}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--primary)]">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Have a Project in Mind?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book a free initial consultation to discuss your project. We will listen to your ideas, offer honest advice and outline the next steps.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/architect-shoreditch/contact" className="btn-accent">Book a Consultation</Link>
            <a href="tel:02079466901" className="btn-outline border-white text-white hover:bg-white hover:text-[var(--primary)]">Call 020 7946 6901</a>
          </div>
        </div>
      </section>
    </>
  );
}
