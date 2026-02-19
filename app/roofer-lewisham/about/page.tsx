import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Trusted Roofers in Lewisham Since 2008",
  description: "Learn about Lewisham Roofing Specialists - TrustMark registered, NFRC members, fully insured roofing contractors serving SE London since 2008.",
  openGraph: { title: "About Us | Lewisham Roofing Specialists", description: "TrustMark registered roofers serving Lewisham and SE London. NFRC members with a 10-year guarantee on all work." },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Lewisham&apos;s Trusted Roofing Team</h1><p className="text-xl text-gray-200 leading-relaxed">TrustMark registered, NFRC members, and fully insured. Delivering quality roofing across South East London since 2008.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Roofing Done Right Since 2008</h2>
          <div className="gold-line mb-6"></div>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">Lewisham Roofing Specialists was founded by a father-and-son team who believed that honest, quality roofing work should be available to every homeowner at a fair price. That principle still guides everything we do today.</p>
          <p className="text-gray-600 mb-6 leading-relaxed">We started with a van and a reputation for doing things properly. Through word of mouth and consistent quality, we have grown into one of SE London&apos;s most trusted roofing contractors. Every member of our team is time-served, fully trained, and shares our commitment to getting the job done right first time.</p>
          <p className="text-gray-600 leading-relaxed">Today we are proud to be TrustMark registered and members of the National Federation of Roofing Contractors (NFRC). These accreditations are not just badges — they represent our adherence to strict quality standards, fair trading practices, and ongoing professional development.</p>
        </div>
        <div className="bg-gray-50 p-8 lg:p-12 rounded-sm"><div className="grid grid-cols-2 gap-8">
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">16+</div><p className="text-gray-600 mt-2 font-medium">Years in Business</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">3,000+</div><p className="text-gray-600 mt-2 font-medium">Roofs Completed</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">25+</div><p className="text-gray-600 mt-2 font-medium">Skilled Roofers</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">10yr</div><p className="text-gray-600 mt-2 font-medium">Guarantee</p></div>
        </div></div>
      </div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Values</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">What Sets Us Apart</h2><div className="gold-line-center mb-6"></div></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Honest Pricing", desc: "We provide detailed, itemised quotes with no hidden charges. The price we quote is the price you pay." },
            { title: "Quality Materials", desc: "We use only premium roofing materials from trusted manufacturers. No shortcuts, no cheap substitutes." },
            { title: "TrustMark Registered", desc: "Government-endorsed quality mark meaning our work meets the highest trade standards and consumer protection." },
            { title: "Fully Insured", desc: "Comprehensive public liability insurance and employer liability cover. Your property is protected at all times." },
            { title: "Clean and Tidy", desc: "We take pride in leaving properties spotless. All waste is removed responsibly and we protect your garden and driveway." },
            { title: "10-Year Guarantee", desc: "Every roofing job comes with a comprehensive written guarantee. We stand behind our work long after we leave." },
          ].map((v) => (
            <div key={v.title} className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">{v.title}</h3><p className="text-gray-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Accreditations</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Our Credentials</h2><div className="gold-line-center mb-6"></div></div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-8 bg-gray-50 rounded-sm">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4"><svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
            <h3 className="text-xl font-bold text-primary mb-2">TrustMark</h3>
            <p className="text-gray-600 text-sm">Government-endorsed quality scheme for tradespeople. All work meets strict quality and consumer protection standards.</p>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-sm">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4"><svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></div>
            <h3 className="text-xl font-bold text-primary mb-2">NFRC</h3>
            <p className="text-gray-600 text-sm">National Federation of Roofing Contractors. The UK&apos;s largest roofing trade association, ensuring industry best practice.</p>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-sm">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4"><svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
            <h3 className="text-xl font-bold text-primary mb-2">Fully Insured</h3>
            <p className="text-gray-600 text-sm">Comprehensive public liability and employer liability insurance. Your property is fully protected during all roofing work.</p>
          </div>
        </div>
      </div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Roofer You Can Trust?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Get a free inspection and no-obligation quote. We respond to all enquiries within 24 hours.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/roofer-lewisham/contact" className="btn-accent">Get a Free Quote</Link><a href="tel:02079461456" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 1456</a></div></div></section>
    </>
  );
}
