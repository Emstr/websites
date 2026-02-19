import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Master Tailors Since 1985",
  description: "Learn about Savile Row Bespoke - master tailors on Savile Row since 1985. Members of the Savile Row Association, crafting bespoke suits of the highest distinction.",
  openGraph: { title: "About Us | Savile Row Bespoke", description: "Master tailors on Savile Row since 1985. Nearly four decades of bespoke tailoring excellence." },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Nearly Four Decades of Excellence</h1><p className="text-xl text-gray-200 leading-relaxed">Master tailors on Savile Row since 1985, upholding the traditions that make this street the world capital of bespoke tailoring.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Heritage</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">A Legacy of Craftsmanship</h2>
          <div className="gold-line mb-6"></div>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">Savile Row Bespoke was established in 1985 by a master tailor trained in the traditional Savile Row method. From our very first suit, the mission has been clear: to create garments of extraordinary quality that honour the heritage of this legendary street.</p>
          <p className="text-gray-600 mb-6 leading-relaxed">Over nearly four decades, we have dressed barristers, bankers, politicians and royalty. Yet every client, regardless of stature, receives the same meticulous attention. Our reputation has been earned one suit at a time, through countless hours of careful hand craftsmanship.</p>
          <p className="text-gray-600 leading-relaxed">Today, as proud members of the Savile Row Association, we continue to champion the art of bespoke tailoring. While we embrace modern fabrics and contemporary styles, our methods remain rooted in the techniques that have defined Savile Row for over two centuries.</p>
        </div>
        <div className="bg-gray-50 p-8 lg:p-12 rounded-sm"><div className="grid grid-cols-2 gap-8">
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">1985</div><p className="text-gray-600 mt-2 font-medium">Established</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">5,000+</div><p className="text-gray-600 mt-2 font-medium">Suits Crafted</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">60+</div><p className="text-gray-600 mt-2 font-medium">Hours Per Suit</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">3,000+</div><p className="text-gray-600 mt-2 font-medium">Fabric Choices</p></div>
        </div></div>
      </div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width">
        <div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Values</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">The Principles We Tailor By</h2><div className="gold-line-center mb-6"></div></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Craftsmanship", desc: "Every stitch, every seam, every buttonhole is executed with the precision and care that only decades of practice can deliver." },
            { title: "Individuality", desc: "No two bodies are alike, and no two suits should be either. Every garment is as unique as the person who wears it." },
            { title: "Heritage", desc: "We honour the 200-year tradition of Savile Row tailoring while embracing contemporary style and modern fabrics." },
            { title: "Discretion", desc: "Our client relationships are built on trust and confidentiality. What happens in the fitting room stays in the fitting room." },
            { title: "Excellence", desc: "We never compromise on quality. If a garment doesn't meet our standards, it doesn't leave the atelier." },
            { title: "Service", desc: "From your first consultation to ongoing care of your wardrobe, we provide attentive, personal service at every stage." },
          ].map((v) => (
            <div key={v.title} className="card-premium p-8"><div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">{v.title}</h3><p className="text-gray-600">{v.desc}</p></div>
          ))}
        </div>
      </div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Atelier</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">14 Savile Row, Mayfair</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 max-w-3xl mx-auto">Our atelier on the world&apos;s most famous tailoring street is where tradition and modernity converge. Step through our doors and experience the quiet confidence of a Savile Row fitting room.</p></div>
        <div className="bg-gradient-to-br from-primary to-secondary p-8 lg:p-12 rounded-sm text-white max-w-2xl mx-auto">
          <address className="not-italic text-gray-200 mb-6">14 Savile Row<br />Mayfair, London W1S 3PR</address>
          <ul className="space-y-2 text-gray-200">
            <li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Private fitting rooms</li>
            <li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Near Piccadilly Circus and Oxford Circus</li>
            <li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Appointments by arrangement</li>
          </ul>
        </div>
      </div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Visit Our Savile Row Atelier</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book a private consultation and discover the art of bespoke tailoring.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/tailor-savile-row/contact" className="btn-accent">Book a Consultation</Link><a href="tel:02079464789" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 4789</a></div></div></section>
    </>
  );
}
