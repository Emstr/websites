import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Menu & Services | Speciality Coffee, Brunch & Catering",
  description: "Full menu at Bermondsey Coffee House. Speciality coffee, artisan pastries, brunch, private hire, coffee subscriptions and catering in Bermondsey SE1.",
  openGraph: { title: "Menu & Services | Bermondsey Coffee House", description: "Speciality coffee, pastries, brunch and catering in Bermondsey, London SE1." },
};

export default function ServicesPage() {
  const services = [
    { id: "speciality-coffee", title: "Speciality Coffee", subtitle: "Locally Roasted, Expertly Brewed", description: "Our coffee is roasted in small batches by a South London roastery and brewed by SCA-trained baristas. We offer espresso-based drinks, single-origin pour-overs, cold brew and batch filter. Every cup is dialled in daily for peak flavour.", features: ["Single-origin and house blend espresso", "V60 pour-over and AeroPress", "Cold brew and iced coffee", "Oat, soy and almond milk alternatives", "SCA-trained baristas", "Retail bags of our house blend"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg> },
    { id: "pastries-cakes", title: "Artisan Pastries & Cakes", subtitle: "Baked Fresh Every Morning", description: "Our pastry chef arrives at 4am each day to prepare everything from scratch. Butter croissants, sourdough loaves, seasonal tarts, celebration cakes and more. We use local, seasonal ingredients wherever possible.", features: ["Butter croissants and pain au chocolat", "Sourdough loaves and focaccia", "Seasonal tarts and cakes", "Celebration and bespoke cakes to order", "Gluten-free and vegan options available", "All baked on-site, never frozen"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.75 1.75 0 013 15.546" /></svg> },
    { id: "brunch", title: "Brunch Menu", subtitle: "All-Day, Every Day", description: "Our brunch menu runs all day, every day. From a classic eggs Benedict to our shakshuka and house granola bowls, there's something for everyone. We use free-range eggs, locally sourced produce and proper sourdough.", features: ["Full English and veggie English", "Eggs every way: poached, scrambled, Benedict", "Smashed avocado on sourdough", "House shakshuka with feta", "Granola bowls and overnight oats", "Fresh juices and smoothies"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { id: "private-hire", title: "Private Hire & Events", subtitle: "Your Event, Our Space", description: "Our cafe is available for private hire in the evenings and on request during quieter periods. Perfect for birthday parties, baby showers, corporate meetings and product launches. Full food and drink packages available.", features: ["Capacity up to 40 guests seated", "Full food and drink packages", "AV equipment for presentations", "Custom menus and dietary options", "Evening availability", "Flexible setup and decoration allowed"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
    { id: "subscriptions", title: "Coffee Subscriptions", subtitle: "Fresh Beans to Your Door", description: "Never run out of great coffee at home. Our subscription service delivers freshly roasted beans straight to your door on a schedule that suits you. Choose whole bean or ground, and select your preferred roast level.", features: ["Weekly, fortnightly or monthly delivery", "Whole bean or pre-ground options", "Choose light, medium or dark roast", "Pause or cancel any time", "Exclusive subscriber pricing", "Free delivery on all subscriptions"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg> },
    { id: "catering", title: "Catering", subtitle: "Great Coffee, Wherever You Need It", description: "Bring the Bermondsey Coffee House experience to your event. Our catering service includes mobile coffee carts, pastry platters, brunch spreads and full lunch catering for offices, weddings and private events across London.", features: ["Mobile coffee cart hire", "Pastry and cake platters", "Brunch and lunch catering", "Corporate office catering", "Wedding and event packages", "Delivery across London"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
  ];

  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Menu</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Menu &amp; Services</h1>
            <p className="text-xl text-gray-200 leading-relaxed">From your morning flat white to a full catering spread, everything is made with care using the best ingredients we can source.</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">What We Offer</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Everything is made fresh, sourced locally where possible, and prepared with genuine passion for quality.</p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-[var(--primary)] mb-4">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-2">{service.title}</h3>
                  <p className="text-[var(--accent)] font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/cafe-bermondsey/contact" className="bg-[var(--accent)] text-white px-6 py-3 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Get in Touch</Link>
                </div>
                <div className={`bg-gray-50 p-8 lg:p-12 rounded-sm ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-video bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-sm flex items-center justify-center">
                    <div className="text-white opacity-20 scale-150">{service.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">From Bean to Cup</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Sourced</h3>
              <p className="text-gray-600">Single-origin beans selected for quality and character from farms we trust.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Roasted Locally</h3>
              <p className="text-gray-600">Small-batch roasting in South London, delivered fresh to us weekly.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Dialled In</h3>
              <p className="text-gray-600">Our baristas calibrate every brew for optimal extraction and flavour.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Served with Care</h3>
              <p className="text-gray-600">Every cup is made with attention and served with a smile. That&apos;s the Bermondsey way.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Fancy a Coffee?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Pop in any time, or get in touch about catering and private hire.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/cafe-bermondsey/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors">Visit Us</Link>
            <a href="tel:02079468901" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors">Call 020 7946 8901</a>
          </div>
        </div>
      </section>
    </>
  );
}
