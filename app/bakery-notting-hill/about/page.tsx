import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Artisan Bakery Since 2016",
  description: "Learn about Notting Hill Bakehouse — an artisan bakery on Westbourne Grove since 2016. Six skilled bakers, organic ingredients, and a community-first approach to bread.",
  openGraph: { title: "About Us | Notting Hill Bakehouse", description: "Artisan bakery in Notting Hill since 2016. Six bakers, 500+ loaves daily, and a commitment to proper bread-making." },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Real Bread, Real Bakers</h1><p className="text-xl text-gray-200 leading-relaxed">A neighbourhood bakery built on the belief that great bread cannot be rushed and good ingredients make all the difference.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="grid lg:grid-cols-2 gap-16 items-center">
        <div><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">From Home Kitchen to Westbourne Grove</h2><div className="gold-line mb-6"></div>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">Notting Hill Bakehouse began in 2016 when baker Tomasz Kowalski left his position at a Michelin-starred restaurant to pursue a lifelong dream: opening a proper neighbourhood bakery. He started with a sourdough starter, a domestic oven, and a stall at Portobello Market.</p>
          <p className="text-gray-600 mb-6 leading-relaxed">Within six months, the market queue stretched down the street. The demand was clear — Notting Hill wanted real bread, made properly. In early 2017, Tomasz signed the lease on 62 Westbourne Grove, installed a French stone-deck oven, and opened the doors of Notting Hill Bakehouse.</p>
          <p className="text-gray-600 leading-relaxed">Today, our team of six bakers produces over 500 loaves a day alongside hand-laminated pastries, bespoke celebration cakes, and wedding cakes. We supply a growing list of restaurants and cafes, and our weekend baking classes are booked months in advance. The sourdough starter that began it all is still going strong — fed daily and at the heart of every loaf we bake.</p>
        </div>
        <div className="bg-gray-50 p-8 lg:p-12 rounded-sm"><div className="grid grid-cols-2 gap-8">
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">500+</div><p className="text-gray-600 mt-2 font-medium">Loaves Per Day</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">6</div><p className="text-gray-600 mt-2 font-medium">Skilled Bakers</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">2016</div><p className="text-gray-600 mt-2 font-medium">Established</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">30+</div><p className="text-gray-600 mt-2 font-medium">Wholesale Clients</p></div>
        </div></div>
      </div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Values</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">What We Stand For</h2><div className="gold-line-center mb-6"></div></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{ t: "Quality Ingredients", d: "Organic stoneground flour from Shipton Mill, free-range eggs from Sussex, French butter, and seasonal British fruit. We never compromise on what goes into our bakes." },
            { t: "Time & Patience", d: "Our sourdough ferments for 24 hours. Our croissants take two days to laminate. Great baking cannot be hurried, and we give every product the time it needs." },
            { t: "Handmade Always", d: "No pre-mixes, no bread improvers, no frozen dough. Every loaf is shaped by hand, every pastry is laminated by hand, and every cake is decorated by hand." },
            { t: "Sustainability", d: "We compost all organic waste, donate unsold bread to the Felix Project, use compostable packaging, and source ingredients as locally as possible." },
            { t: "Community", d: "We are proud to be part of the Notting Hill neighbourhood. We sponsor the local primary school bake sale, host charity bakes, and employ locally." },
            { t: "Passing It On", d: "Through our baking classes, we share the skills and knowledge that make real bread possible. We want more people to experience the joy of baking from scratch." },
          ].map((v, i) => (
            <div key={i} className="card-premium p-8"><div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">{v.t}</h3><p className="text-gray-600">{v.d}</p></div>
          ))}
        </div>
      </div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Find Us</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">On Westbourne Grove</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 max-w-3xl mx-auto">A four-minute walk from Notting Hill Gate station, our bakery is easy to find. Follow your nose — the smell of fresh bread will guide you in.</p></div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary to-secondary p-8 lg:p-12 rounded-sm text-white"><h3 className="text-2xl font-bold mb-6">Bakery Details</h3><address className="not-italic text-gray-200 mb-6"><strong className="text-white">62 Westbourne Grove</strong><br />Notting Hill, London W2 5SH</address><div className="mb-6"><p className="text-accent font-semibold mb-2">Opening Hours</p><p className="text-gray-200">Mon-Sat: 7am - 7pm<br />Sun: 8am - 5pm</p></div>
            <ul className="space-y-2 text-gray-200"><li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Notting Hill Gate — 4 min walk</li><li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Bayswater — 6 min walk</li><li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Queensway — 7 min walk</li></ul>
          </div>
          <div className="bg-gray-50 p-8 lg:p-12 rounded-sm border-t-4 border-accent"><h3 className="text-2xl font-bold text-primary mb-6">Baking Classes</h3><p className="text-gray-600 mb-6 leading-relaxed">Our weekend workshops are the perfect way to learn the craft of real bread-making. Whether you are a complete beginner or an experienced home baker, our small-group classes will take your skills to the next level.</p><p className="text-gray-600 mb-6 leading-relaxed">Classes run on Saturdays and Sundays from 10am to 2pm. All ingredients and equipment are provided, and you take your bakes home at the end. Includes a light lunch.</p><Link href="/bakery-notting-hill/contact" className="btn-accent inline-block">Book a Class</Link></div>
        </div>
      </div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Come and Say Hello</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Pop in for a loaf, order a celebration cake, or join one of our baking classes. We would love to welcome you.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/bakery-notting-hill/contact" className="btn-accent">Get in Touch</Link><a href="tel:02079462280" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 2280</a></div></div></section>
    </>
  );
}
