import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} /></div>
        <div className="container-width relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6"><div className="w-12 h-px bg-accent"></div><span className="text-accent font-semibold tracking-wider uppercase text-sm">Est. 2016 &middot; Notting Hill, London</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Baked Fresh,{" "}<span className="text-terracotta-gradient">Every Morning</span></h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">Artisan sourdough, hand-laminated pastries, and bespoke celebration cakes from our bakery on Westbourne Grove. Six skilled bakers, organic flour, and a ten-year-old sourdough starter.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/bakery-notting-hill/contact" className="btn-accent text-lg">Order a Cake</Link>
              <Link href="/bakery-notting-hill/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg">View Products</Link>
            </div>
            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>6 Skilled Bakers</span></div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>500+ Loaves Daily</span></div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Open 7 Days</span></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10"><svg viewBox="0 0 400 400" className="w-full h-full"><circle cx="200" cy="200" r="180" stroke="#e17055" strokeWidth="2" fill="none" /><circle cx="200" cy="200" r="140" stroke="#e17055" strokeWidth="1" fill="none" /><circle cx="200" cy="200" r="100" stroke="#e17055" strokeWidth="0.5" fill="none" /></svg></div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">From Our Ovens</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">What We Bake</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From long-fermented sourdough to hand-laminated croissants and bespoke celebration cakes, everything is made from scratch in our Notting Hill bakehouse.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Sourdough Bread", desc: "Our signature loaves are made with organic flour and our ten-year-old starter. Slow-fermented for 24 hours for deep flavour, a crisp crust, and an open, airy crumb.", icon: "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.75 1.75 0 003 15.546V12a9 9 0 0118 0v3.546z" },
              { title: "Pastries & Viennoiseries", desc: "Croissants, pain au chocolat, almond croissants, and Danish pastries. Hand-laminated with French butter and baked fresh every morning from 6am.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Celebration Cakes", desc: "Bespoke cakes for birthdays, christenings, and every occasion worth marking. Flavours range from classic Victoria sponge to dark chocolate and salted caramel.", icon: "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.75 1.75 0 003 15.546V12a9 9 0 0118 0v3.546zM12 2v4m-4 0h8" },
              { title: "Wedding Cakes", desc: "Hand-crafted wedding cakes designed in close consultation with every couple. Tasting sessions included. From elegant tiered cakes to rustic naked styles.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
              { title: "Wholesale Supply", desc: "We supply fresh bread and pastries daily to restaurants, cafes, and hotels across west London. Reliable early-morning delivery, consistent quality.", icon: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" },
              { title: "Baking Classes", desc: "Learn to bake sourdough, croissants, and more in our hands-on weekend workshops. Small groups, all materials provided, and you take your bakes home.", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
            ].map((s, i) => (
              <div key={i} className="card-premium p-8">
                <div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} /></svg></div>
                <h3 className="text-xl font-bold text-primary mb-3">{s.title}</h3>
                <p className="text-gray-600 mb-4">{s.desc}</p>
                <Link href="/bakery-notting-hill/services" className="text-accent font-semibold inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12"><Link href="/bakery-notting-hill/services" className="btn-primary">View All Products</Link></div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Why Notting Hill Bakehouse</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Bread Worth Queuing For</h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">We believe great bread takes time. Our sourdough ferments for 24 hours. Our croissants are laminated by hand over two days. There are no shortcuts in our bakehouse.</p>
              <div className="space-y-6">
                {[
                  { title: "Organic & Local", desc: "We use stoneground organic flour from Shipton Mill, free-range eggs from Sussex farms, and French butter for all our pastries." },
                  { title: "Slow Fermentation", desc: "Every loaf is given time. Our 24-hour fermentation develops complex flavour, improves digestibility, and creates the perfect crust." },
                  { title: "Handmade Daily", desc: "No pre-mixes, no improvers, no frozen dough. Everything is shaped by hand and baked fresh on site, seven days a week." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></div>
                    <div><h3 className="text-lg font-bold text-primary mb-1">{item.title}</h3><p className="text-gray-600">{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center"><div className="stat-number">500+</div><p className="text-gray-600 mt-2">Loaves Per Day</p></div>
                <div className="text-center"><div className="stat-number">6</div><p className="text-gray-600 mt-2">Skilled Bakers</p></div>
                <div className="text-center"><div className="stat-number">2016</div><p className="text-gray-600 mt-2">Established</p></div>
                <div className="text-center"><div className="stat-number">4.9</div><p className="text-gray-600 mt-2">Google Rating</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Customer Reviews</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">What Our Customers Say</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "The best sourdough in west London, hands down. The crust shatters, the crumb is soft and tangy, and it keeps beautifully for days. I have been coming every Saturday morning for three years.", name: "Eleanor T.", role: "Regular Customer, Notting Hill" },
              { text: "They made the most beautiful wedding cake for us — three tiers of lemon and elderflower. The tasting session was such fun, and on the day it looked even better than the photos. Cannot recommend them enough.", name: "James & Sophie W.", role: "Wedding Cake, Kensington" },
              { text: "I did the sourdough baking class with my daughter. Brilliant morning — the teachers were patient and knowledgeable, and we went home with two gorgeous loaves each. Already booked the croissant workshop.", name: "Michael P.", role: "Baking Class, Paddington" },
            ].map((t, i) => (
              <div key={i} className="testimonial-card">
                <p className="text-gray-600 mb-6 italic">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">{t.name.split(" ").map(n => n[0]).join("")}</span></div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Order Your Celebration Cake</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Whether it is a birthday, wedding, or just because — our bakers will create something special. Get in touch to discuss flavours, sizes, and designs.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/bakery-notting-hill/contact" className="btn-accent">Enquire Now</Link>
              <a href="tel:02079462280" className="btn-outline">Call 020 7946 2280</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
