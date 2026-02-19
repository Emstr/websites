import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Premium Cleaning in Mayfair",
  description: "Learn about Mayfair Cleaning Services - DBS checked, fully insured, eco-friendly cleaning company serving Mayfair and Central London.",
  openGraph: { title: "About Us | Mayfair Cleaning Services", description: "Premium cleaning in Mayfair with DBS checked staff and eco-friendly products." },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Mayfair&apos;s Trusted Cleaning Team</h1><p className="text-xl text-gray-200 leading-relaxed">DBS checked, professionally trained, and passionate about delivering the highest cleaning standards in Central London.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Cleaning Mayfair to Perfection Since 2012</h2>
          <div className="gold-line mb-6"></div>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">Mayfair Cleaning Services was founded with a simple belief: cleaning should be done properly, by people you can trust, using products that are safe for your family and the environment.</p>
          <p className="text-gray-600 mb-6 leading-relaxed">We recruit only the most reliable, experienced cleaners. Every team member undergoes enhanced DBS checks, thorough reference verification, and our own intensive training programme before they ever step into a client&apos;s home.</p>
          <p className="text-gray-600 leading-relaxed">Today we serve over 500 regular clients across Mayfair, Marylebone, Knightsbridge, Chelsea, and the wider West End. From weekly domestic cleans to large-scale office contracts, we deliver impeccable results, every single time.</p>
        </div>
        <div className="bg-gray-50 p-8 lg:p-12 rounded-sm"><div className="grid grid-cols-2 gap-8">
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">12+</div><p className="text-gray-600 mt-2 font-medium">Years in Business</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">500+</div><p className="text-gray-600 mt-2 font-medium">Regular Clients</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">50+</div><p className="text-gray-600 mt-2 font-medium">Trained Cleaners</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">100%</div><p className="text-gray-600 mt-2 font-medium">DBS Checked</p></div>
        </div></div>
      </div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Values</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">What Sets Us Apart</h2><div className="gold-line-center mb-6"></div></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Trust", desc: "Enhanced DBS checks and thorough vetting for every cleaner. Your home is safe in our hands." },
            { title: "Consistency", desc: "The same dedicated cleaner every visit. They learn your preferences and maintain our high standards." },
            { title: "Eco-Friendly", desc: "We use only non-toxic, biodegradable cleaning products that are safe for families, pets, and the planet." },
            { title: "Reliability", desc: "We arrive on time, every time. If your cleaner is unwell, we send a trained replacement immediately." },
            { title: "Attention to Detail", desc: "We follow detailed checklists and welcome your feedback. No corner is overlooked." },
            { title: "Satisfaction Guarantee", desc: "Not happy? We return within 24 hours to put it right at no extra charge." },
          ].map((v) => (
            <div key={v.title} className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">{v.title}</h3><p className="text-gray-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for a Cleaner Home?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book your first clean today. New customers receive 20% off.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/cleaning-mayfair/contact" className="btn-accent">Book a Clean</Link><a href="tel:02079460345" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 0345</a></div></div></section>
    </>
  );
}
