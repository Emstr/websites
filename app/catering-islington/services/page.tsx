import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Catering Services | Weddings, Corporate Events & Private Dining",
  description: "Full catering services from Islington Catering Company. Wedding catering, corporate events, private dining, canapes, buffets and dietary-specific menus in London.",
  openGraph: { title: "Catering Services | Islington Catering Company", description: "Award-winning catering for weddings, corporate events and private dining in London N1." },
};

export default function ServicesPage() {
  const services = [
    { id: "wedding-catering", title: "Wedding Catering", subtitle: "Your Perfect Day, Perfectly Catered", description: "Your wedding breakfast should be as unique as your love story. We work closely with every couple to design menus that reflect their personality, heritage and tastes. From elegant three-course dinners to relaxed sharing platters, wood-fired feasts to afternoon tea receptions, we create wedding food that your guests will talk about for years.", features: ["Bespoke menu design with tastings included", "Three-course sit-down, sharing plates or family-style", "Drinks reception canapes and evening food", "Wedding cake cutting and serving", "Front-of-house staff and tableware available", "Venue liaison and logistics management"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
    { id: "corporate-events", title: "Corporate Events", subtitle: "Impress Clients, Inspire Teams", description: "Professional catering that elevates your corporate events. Whether it's a boardroom lunch, product launch, annual conference or team away day, we deliver food that impresses and a service that runs seamlessly. We understand the importance of presentation and punctuality in a business setting.", features: ["Boardroom lunches and working breakfasts", "Conference and seminar catering for 20-500 guests", "Product launch and press event catering", "Team building and away day catering", "Branded packaging and presentation options", "Dietary requirements handled seamlessly"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
    { id: "private-dining", title: "Private Dining", subtitle: "Restaurant Quality at Home", description: "Imagine having your own personal chef prepare a multi-course dinner in your kitchen while you and your guests enjoy the evening. Our private dining service brings the restaurant experience to your home, complete with bespoke menus, wine pairing suggestions and a fully cleared kitchen at the end.", features: ["Personal chef in your home", "Multi-course tasting menus designed for you", "Wine pairing recommendations", "All ingredients sourced and prepared by us", "Full kitchen clean-up after service", "Available for 2-20 guests"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { id: "canapes-receptions", title: "Canap\u00e9s & Receptions", subtitle: "Bite-Sized Brilliance", description: "Our handcrafted canap\u00e9s are miniature works of culinary art. Each piece is designed to be visually stunning, packed with flavour, and perfectly sized for one elegant bite. Ideal for drinks receptions, networking events, gallery openings and celebrations where mingling is the main event.", features: ["Minimum of 6 canap\u00e9 varieties per event", "Hot, cold and vegetarian/vegan options", "Seasonal ingredients and creative flavour combinations", "Elegant presentation and service staff", "Bowl food and grazing stations also available", "Drinks service coordination"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg> },
    { id: "buffets", title: "Buffets", subtitle: "Generous Spreads, Beautiful Presentation", description: "Our buffets are anything but ordinary. From Mediterranean mezze and Asian street food to classic British roasts and global fusion, we create stunning buffet displays that offer something for everyone. Perfect for parties, celebrations and casual gatherings where variety and generosity are key.", features: ["Themed buffet options from around the world", "Hot and cold dishes with vegetarian options", "Beautiful styling and display presentation", "Suitable for 20-500+ guests", "Live cooking stations available as add-ons", "Eco-friendly serving ware and packaging"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg> },
    { id: "dietary-specific", title: "Dietary-Specific Menus", subtitle: "Every Guest Included", description: "We believe dietary requirements should never mean a compromise on taste or creativity. Our chefs are experts in vegan, vegetarian, gluten-free, dairy-free, halal, kosher and allergen-aware cooking. We don't just adapt dishes — we design menus where dietary-specific options are the star.", features: ["Vegan and plant-based menus that wow", "Gluten-free, dairy-free and nut-free options", "Halal and kosher catering available", "Allergen management and clear labelling", "Full allergen risk assessments for each event", "Menus designed around restrictions, not despite them"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
  ];

  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width"><div className="max-w-3xl">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Bespoke Catering Services</h1>
          <p className="text-xl text-gray-200 leading-relaxed">From intimate private dinners to grand celebrations, every event deserves food that&apos;s as memorable as the occasion itself.</p>
        </div></div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What We Offer</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Every menu is crafted from scratch using seasonal, locally sourced ingredients. We never use pre-made components — everything is freshly prepared by our award-winning kitchen team.</p>
          </div>
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-accent font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span className="text-gray-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/catering-islington/contact" className="btn-accent">Request a Quote</Link>
                </div>
                <div className={`bg-gray-50 p-8 lg:p-12 rounded-sm ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-sm flex items-center justify-center"><div className="text-white opacity-20 scale-150">{service.icon}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">How It Works</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Initial Chat", desc: "Tell us about your event, guest numbers, budget and any dietary requirements. No obligation." },
              { step: "2", title: "Menu Design", desc: "Our chef designs a bespoke menu tailored to your event, including a complimentary tasting for weddings." },
              { step: "3", title: "The Event", desc: "We handle everything on the day — food preparation, presentation, service staff and clean-up." },
              { step: "4", title: "Raving Reviews", desc: "Your guests enjoy incredible food and you take all the credit. Everyone&apos;s happy." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">{s.step}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let&apos;s Create Something Delicious</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Get in touch for a free, no-obligation quote. We&apos;d love to hear about your event.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/catering-islington/contact" className="btn-accent">Request a Quote</Link>
            <a href="tel:02079464789" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 4789</a>
          </div>
        </div>
      </section>
    </>
  );
}
