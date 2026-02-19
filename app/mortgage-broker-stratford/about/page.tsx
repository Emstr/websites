import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | FCA Regulated Mortgage Broker in Stratford",
  description: "Meet the team at Stratford Mortgage Solutions. FCA regulated, whole of market mortgage broker with 10+ years experience helping East London clients find the best mortgage deals.",
  openGraph: { title: "About | Stratford Mortgage Solutions", description: "FCA regulated, whole of market mortgage broker with over 10 years of experience in Stratford, East London." },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Your Local Mortgage Experts</h1><p className="text-xl text-gray-200 leading-relaxed">FCA regulated, whole of market, and genuinely passionate about helping people in East London find the right mortgage for their circumstances.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="grid lg:grid-cols-2 gap-16 items-center">
        <div><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">10 Years of Mortgage Expertise in Stratford</h2><div className="gold-line mb-6"></div>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">Stratford Mortgage Solutions was founded in 2014 with a simple mission: to provide honest, jargon-free mortgage advice to people in East London. We saw too many buyers struggling to navigate the mortgage market alone, paying over the odds or missing out on deals they didn&apos;t know existed.</p>
          <p className="text-gray-600 mb-6 leading-relaxed">Our founding director spent a decade working for high street banks before realising that tied advisers can only recommend their own products &mdash; even when better options exist elsewhere. That frustration drove the decision to go independent, and Stratford Mortgage Solutions has been a whole of market broker from day one.</p>
          <p className="text-gray-600 leading-relaxed">Today, we&apos;re proud to have helped over 2,500 clients secure their mortgages, from first-time buyers in Stratford to property investors across London. Our office on The Broadway is a two-minute walk from Stratford station, and we offer evening and weekend appointments because we know house buying doesn&apos;t stop at 5pm.</p>
        </div>
        <div className="bg-gray-50 p-8 lg:p-12 rounded-sm"><div className="grid grid-cols-2 gap-8">
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">10+</div><p className="text-gray-600 mt-2 font-medium">Years Experience</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">2,500+</div><p className="text-gray-600 mt-2 font-medium">Mortgages Arranged</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">90+</div><p className="text-gray-600 mt-2 font-medium">Lenders Compared</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">FCA</div><p className="text-gray-600 mt-2 font-medium">Regulated</p></div>
        </div></div>
      </div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Values</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">What Sets Us Apart</h2><div className="gold-line-center mb-6"></div></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Truly Independent", desc: "We're not tied to any bank or lender. We search the whole market to find the mortgage that genuinely suits your circumstances, not the one that pays us the highest commission." },
            { title: "Jargon-Free Advice", desc: "LTV, SVR, ERC — the mortgage world is full of confusing acronyms. We explain everything in plain English so you can make informed decisions with confidence." },
            { title: "Local Knowledge", desc: "We know East London. From new-build developments in Stratford to Victorian terraces in Leyton, we understand the local property market and what lenders think about it." },
            { title: "Full Process Management", desc: "We don't just find you a mortgage and wave goodbye. We manage the entire application, chasing solicitors, valuers and lenders so you don't have to." },
            { title: "Flexible Appointments", desc: "We offer face-to-face meetings at our Stratford office, video calls, phone consultations, and evening and weekend appointments to fit around your life." },
            { title: "Ongoing Support", desc: "Your mortgage is a long-term commitment. We track your deal end date and proactively contact you before it expires, ensuring you never overpay on the SVR." },
          ].map((v) => (
            <div key={v.title} className="card-premium p-8"><h3 className="text-xl font-bold text-primary mb-3">{v.title}</h3><p className="text-gray-600">{v.desc}</p></div>
          ))}
        </div>
      </div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">FCA Regulated</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Your Protection, Our Priority</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 max-w-3xl mx-auto">Stratford Mortgage Solutions Ltd is authorised and regulated by the Financial Conduct Authority. This means you benefit from the protections of the Financial Ombudsman Service and the Financial Services Compensation Scheme.</p></div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6"><div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4"><svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div><h3 className="text-lg font-bold text-primary mb-2">FCA Authorised</h3><p className="text-gray-600 text-sm">Fully authorised and regulated by the Financial Conduct Authority</p></div>
          <div className="text-center p-6"><div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4"><svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg></div><h3 className="text-lg font-bold text-primary mb-2">Ombudsman Access</h3><p className="text-gray-600 text-sm">Access to the Financial Ombudsman Service if you&apos;re not satisfied</p></div>
          <div className="text-center p-6"><div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4"><svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg></div><h3 className="text-lg font-bold text-primary mb-2">FSCS Protected</h3><p className="text-gray-600 text-sm">Protected by the Financial Services Compensation Scheme</p></div>
        </div>
      </div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Location</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">In the Heart of Stratford</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 max-w-3xl mx-auto">Our office on The Broadway is a two-minute walk from Stratford station (Central, Jubilee, Elizabeth lines, DLR and Overground). Easy to reach from anywhere in East London and beyond.</p></div></div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Talk Mortgages?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book a free, no-obligation consultation at our Stratford office or by phone. We&apos;ll give you honest advice about your options.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/mortgage-broker-stratford/contact" className="btn-accent">Book Free Consultation</Link><a href="tel:02079466901" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 6901</a></div>
      </div></section>
    </>
  );
}
