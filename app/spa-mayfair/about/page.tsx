import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Luxury Day Spa Since 2012",
  description: "Learn about Mayfair Wellness Spa — luxury day spa established in 2012 with twelve expert therapists and over 20,000 treatments delivered. Brook Street, Mayfair.",
  openGraph: { title: "About Us | Mayfair Wellness Spa", description: "Luxury day spa in Mayfair since 2012. Twelve therapists, six treatment rooms, and a passion for wellness." },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">The Story of Mayfair Wellness</h1><p className="text-xl text-gray-200 leading-relaxed">Over a decade of dedication to the art of wellness, creating moments of peace in one of London&apos;s most vibrant neighbourhoods.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">A Decade of Wellness Excellence</h2><div className="gold-line mb-6"></div>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">Mayfair Wellness Spa was founded in 2012 by Anna Whitfield, a former hotel spa director who believed that world-class spa experiences should be available as a daily luxury, not just a holiday treat.</p>
          <p className="text-gray-600 mb-6 leading-relaxed">She found a beautiful Georgian townhouse on Brook Street and transformed it into a sanctuary. Six private treatment rooms, a relaxation lounge, and a thermal suite — all designed with an unwavering attention to detail and comfort.</p>
          <p className="text-gray-600 leading-relaxed">Today, our team of twelve therapists has delivered over 20,000 treatments. Our guests return because they trust us with their wellbeing and know that every visit will be exceptional.</p>
        </div>
        <div className="bg-gray-50 p-8 lg:p-12 rounded-sm"><div className="grid grid-cols-2 gap-8">
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">20K+</div><p className="text-gray-600 mt-2 font-medium">Treatments Delivered</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">12</div><p className="text-gray-600 mt-2 font-medium">Expert Therapists</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">2012</div><p className="text-gray-600 mt-2 font-medium">Established</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">6</div><p className="text-gray-600 mt-2 font-medium">Treatment Rooms</p></div>
        </div></div>
      </div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Values</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">What We Believe In</h2><div className="gold-line-center mb-6"></div></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { t: "Personalisation", d: "No two guests are the same. Every treatment is adapted to your body, your preferences, and your goals for the session." },
            { t: "Excellence", d: "We recruit the most talented therapists and invest in ongoing training. Our standards are exacting and we hold ourselves accountable." },
            { t: "Sustainability", d: "We use organic, cruelty-free products and minimise waste throughout our operations. Luxury and responsibility are not mutually exclusive." },
            { t: "Discretion", d: "Our Mayfair location attracts guests who value privacy. We offer a discreet, peaceful environment where confidentiality is guaranteed." },
            { t: "Warmth", d: "Luxury does not mean cold or impersonal. Our team is genuinely warm, attentive, and committed to making you feel welcome from the moment you arrive." },
            { t: "Consistency", d: "Whether it is your first visit or your hundredth, the quality of your experience will be identical. That is our promise." },
          ].map((v, i) => (
            <div key={i} className="card-premium p-8"><div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">{v.t}</h3><p className="text-gray-600">{v.d}</p></div>
          ))}
        </div>
      </div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Location</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Brook Street, Mayfair</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 max-w-3xl mx-auto">Our spa sits on one of Mayfair&apos;s most elegant streets, just moments from Bond Street station. A peaceful haven tucked away from the bustle of Oxford Street.</p></div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary to-secondary p-8 lg:p-12 rounded-sm text-white">
            <h3 className="text-2xl font-bold mb-6">Spa Details</h3><address className="not-italic text-gray-200 mb-6"><strong className="text-white">24 Brook Street</strong><br />Mayfair, London W1K 5DG</address>
            <div className="mb-6"><p className="text-accent font-semibold mb-2">Opening Hours</p><p className="text-gray-200">Mon-Sat: 9am - 9pm<br />Sun: 10am - 7pm</p></div>
            <ul className="space-y-2 text-gray-200">
              <li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Bond Street — 2 min walk</li>
              <li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Oxford Circus — 5 min walk</li>
              <li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Green Park — 6 min walk</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-8 lg:p-12 rounded-sm border-t-4 border-accent"><h3 className="text-2xl font-bold text-primary mb-6">Our Facilities</h3><p className="text-gray-600 mb-6 leading-relaxed">Six private treatment rooms, a dual suite for couples, a relaxation lounge with complimentary refreshments, and a thermal suite with steam room. Every space has been designed for your comfort and tranquillity.</p><p className="text-gray-600 mb-6 leading-relaxed">We provide robes, slippers, towels, and luxury toiletries. Simply arrive and let us take care of everything.</p><Link href="/spa-mayfair/contact" className="btn-accent inline-block">Book Your Visit</Link></div>
        </div>
      </div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Experience Mayfair Wellness?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book your treatment and discover a new standard of luxury wellness in the heart of London.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/spa-mayfair/contact" className="btn-accent">Book a Treatment</Link><a href="tel:02079468800" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 8800</a></div>
      </div></section>
    </>
  );
}
