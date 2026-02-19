import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        </div>
        <div className="container-width relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-accent"></div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Award-Winning Event Catering</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Unforgettable Food for{" "}<span className="text-accent-gradient">Unforgettable Events</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
              From intimate private dinners to grand weddings and corporate events, our award-winning chef and team create bespoke menus using the finest seasonal, locally sourced ingredients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/catering-islington/contact" className="btn-accent text-lg">Request a Quote</Link>
              <Link href="/catering-islington/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg">Our Services</Link>
            </div>
            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>5-Star Hygiene Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>Sustainable Kitchen</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>Award-Winning Chef</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 400 400" className="w-full h-full"><circle cx="200" cy="200" r="180" stroke="#e85d04" strokeWidth="2" fill="none" /><circle cx="200" cy="200" r="140" stroke="#e85d04" strokeWidth="1" fill="none" /><circle cx="200" cy="200" r="100" stroke="#e85d04" strokeWidth="0.5" fill="none" /></svg>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Catering for Every Occasion</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Whether you&apos;re planning a wedding for 200 or a dinner party for 10, we create bespoke menus that delight every guest.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Wedding Catering", desc: "From elegant sit-down dinners to relaxed sharing feasts, we make your wedding breakfast truly memorable.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
              { title: "Corporate Events", desc: "Professional catering for conferences, product launches, away days and client entertaining that impresses.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { title: "Private Dining", desc: "Your own personal chef for intimate dinner parties at home. Restaurant-quality food in the comfort of your dining room.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Canap\u00e9s & Receptions", desc: "Handcrafted canap\u00e9s and bowl food that look as stunning as they taste. Perfect for drinks receptions and networking events.", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
              { title: "Buffets", desc: "Generous, beautifully presented buffet spreads for parties, celebrations and casual gatherings of any size.", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" },
              { title: "Dietary-Specific Menus", desc: "Expert catering for vegan, vegetarian, gluten-free, halal, kosher and all dietary requirements. No compromise on flavour.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
            ].map((service) => (
              <div key={service.title} className="card-premium p-8">
                <div className="service-icon">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} /></svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link href="/catering-islington/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">
                  Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12"><Link href="/catering-islington/services" className="btn-primary">View All Services</Link></div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Food That Tells a Story</h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">We&apos;re not just caterers &mdash; we&apos;re storytellers. Every menu we create reflects the personality of our clients and the character of their event. Seasonal, sustainable, and always delicious.</p>
              <div className="space-y-6">
                {[
                  { title: "5-Star Hygiene Rating", desc: "Our kitchen holds the highest food hygiene rating from the London Borough of Islington. Your safety is guaranteed." },
                  { title: "Sustainable Kitchen", desc: "We source locally, minimise waste, use compostable packaging and offset our carbon footprint. Good food that does good." },
                  { title: "Award-Winning Chef", desc: "Our head chef brings Michelin-star experience to every event, creating dishes that are as visually stunning as they are flavourful." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    </div>
                    <div><h3 className="text-lg font-bold text-primary mb-1">{item.title}</h3><p className="text-gray-600">{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center"><div className="stat-number">500+</div><p className="text-gray-600 mt-2">Events Catered</p></div>
                <div className="text-center"><div className="stat-number">10+</div><p className="text-gray-600 mt-2">Years Experience</p></div>
                <div className="text-center"><div className="stat-number">5</div><p className="text-gray-600 mt-2">Star Hygiene</p></div>
                <div className="text-center"><div className="stat-number">98%</div><p className="text-gray-600 mt-2">Rebooking Rate</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">What Our Clients Say</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "The food at our wedding was absolutely phenomenal. Every single guest commented on how incredible the menu was. The team were professional, discreet and nothing was too much trouble.", initials: "AC", name: "Anna C.", role: "Bride, Islington" },
              { text: "We use Islington Catering for all our corporate events. The canap\u00e9s are always a talking point and the service is impeccable. They understand exactly what a professional setting requires.", initials: "DT", name: "David T.", role: "Events Director" },
              { text: "Having a private chef for our anniversary dinner was such a treat. The five-course tasting menu was restaurant-quality, and the chef even accommodated our daughter's allergies beautifully.", initials: "RP", name: "Rachel P.", role: "Private Dining Client" },
            ].map((t) => (
              <div key={t.initials} className="testimonial-card">
                <p className="text-gray-600 mb-6 italic">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">{t.initials}</span></div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Let&apos;s Plan Your Event</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Tell us about your event and we&apos;ll create a bespoke menu and quote. No obligation, just great food ideas.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/catering-islington/contact" className="btn-accent">Request a Quote</Link>
              <a href="tel:02079464789" className="btn-outline">Call 020 7946 4789</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
