import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Award-Winning Islington Caterers",
  description: "Learn about Islington Catering Company. Award-winning chef, 5-star hygiene rating, sustainable kitchen. Passionate about exceptional food for over 10 years.",
  openGraph: { title: "About Us | Islington Catering Company", description: "Award-winning, sustainable catering from the heart of Islington since 2015." },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl">
        <span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Passionate About Food Since 2015</h1>
        <p className="text-xl text-gray-200 leading-relaxed">From a small kitchen in Islington to one of London&apos;s most respected catering companies. Our story is one of passion, sustainability and great food.</p>
      </div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">From Market Stall to Award-Winning Caterer</h2>
          <div className="gold-line mb-6"></div>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">Islington Catering Company began in 2015 when our head chef, fresh from a decade in Michelin-starred kitchens, decided to bring restaurant-quality food to private events. What started as weekend pop-ups at Chapel Market grew into a full-service catering operation trusted by some of London&apos;s most prestigious venues.</p>
          <p className="text-gray-600 mb-6 leading-relaxed">Our philosophy is simple: use the best seasonal ingredients, prepare everything from scratch, and treat every event as if it were our own celebration. We work with trusted farmers, fishmongers and producers to source ingredients that are as ethical as they are exceptional.</p>
          <p className="text-gray-600 leading-relaxed">Today, we cater over 500 events a year, from intimate home dinners to weddings of 300 guests. Our 5-star hygiene rating and commitment to sustainability mean you can trust us completely with the food at your event.</p>
        </div>
        <div className="bg-gray-50 p-8 lg:p-12 rounded-sm"><div className="grid grid-cols-2 gap-8">
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">500+</div><p className="text-gray-600 mt-2 font-medium">Events Per Year</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">10+</div><p className="text-gray-600 mt-2 font-medium">Years Experience</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">5</div><p className="text-gray-600 mt-2 font-medium">Star Hygiene</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">98%</div><p className="text-gray-600 mt-2 font-medium">Rebooking Rate</p></div>
        </div></div>
      </div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="text-center mb-16">
        <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Values</span>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">What Drives Us</h2><div className="gold-line-center mb-6"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Seasonal & Local", desc: "We change our menus with the seasons and source from local producers. Every dish celebrates the best ingredients available right now." },
          { title: "Sustainability", desc: "Zero single-use plastics, compostable packaging, food waste composting and carbon offsetting. We're committed to catering responsibly." },
          { title: "From Scratch", desc: "Every sauce, pastry, bread and garnish is made fresh in our kitchen. We never use pre-made components or shortcuts." },
          { title: "Inclusive Menus", desc: "Dietary requirements are never an afterthought. We design menus where vegan, gluten-free and allergen-aware dishes shine." },
          { title: "Personal Service", desc: "You'll work directly with our head chef and event manager from first enquiry to the last plate cleared." },
          { title: "Reliable Excellence", desc: "We've never missed an event, never run out of food, and never delivered anything less than exceptional." },
        ].map((v) => (
          <div key={v.title} className="card-premium p-8">
            <h3 className="text-xl font-bold text-primary mb-3">{v.title}</h3>
            <p className="text-gray-600">{v.desc}</p>
          </div>
        ))}
      </div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="text-center mb-16">
        <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Base</span>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Based in Islington, Serving All of London</h2><div className="gold-line-center mb-6"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our kitchen is on Upper Street in the heart of Islington. We cater events across London and the Home Counties, from Mayfair hotels to countryside barns.</p>
      </div></div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Taste the Difference?</h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Get in touch to discuss your event. We&apos;d love to create something special for you.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/catering-islington/contact" className="btn-accent">Request a Quote</Link>
          <a href="tel:02079464789" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 4789</a>
        </div>
      </div></section>
    </>
  );
}
