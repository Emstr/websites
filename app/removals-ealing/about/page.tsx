import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | BAR Accredited Removals in Ealing",
  description: "Learn about Ealing Moving Company - BAR member, Which? Trusted Trader, fully insured removals company serving Ealing and West London for over 20 years.",
  openGraph: { title: "About Us | Ealing Moving Company", description: "BAR accredited removals in Ealing. Over 20 years of experience moving homes and offices across West London." },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width"><div className="max-w-3xl">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Ealing&apos;s Trusted Removals Company</h1>
          <p className="text-xl text-gray-200 leading-relaxed">BAR accredited, fully insured, and proud to be a Which? Trusted Trader. We have been moving Ealing since 2004.</p>
        </div></div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Moving Families &amp; Businesses for Over 20 Years</h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">Ealing Moving Company started with a single van and a commitment to do removals properly. Founded in 2004, we have grown into one of West London&apos;s most respected moving companies, trusted by thousands of families and businesses.</p>
              <p className="text-gray-600 mb-6 leading-relaxed">Our BAR membership means we meet the highest standards for equipment, training, and financial protection. Our Which? Trusted Trader accreditation means we have been independently assessed for customer service excellence.</p>
              <p className="text-gray-600 leading-relaxed">Every move matters to us. Whether it&apos;s a first-time buyer moving into a studio flat or a multinational relocating an entire floor, we bring the same level of care, professionalism, and attention to detail.</p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">20+</div><p className="text-gray-600 mt-2 font-medium">Years in Business</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">10,000+</div><p className="text-gray-600 mt-2 font-medium">Moves Completed</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">30+</div><p className="text-gray-600 mt-2 font-medium">Trained Staff</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">12</div><p className="text-gray-600 mt-2 font-medium">Modern Vehicles</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">What Sets Us Apart</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Care", desc: "Your belongings are precious. Our crews are trained to handle everything — from grand pianos to family heirlooms — with the utmost care." },
              { title: "Reliability", desc: "We arrive on time, every time. Your move coordinator keeps you informed at every stage, so there are no surprises." },
              { title: "Transparency", desc: "Our quotes are fixed prices based on a home survey. No hidden charges, no hourly surprises, no fuel surcharges." },
              { title: "Professionalism", desc: "Uniformed crews, modern clean vehicles, and quality packing materials. We represent our clients with pride." },
              { title: "Flexibility", desc: "We work around your schedule, including evenings, weekends, and bank holidays. Your timeline is our timeline." },
              { title: "Local Knowledge", desc: "Based in Ealing, we know the parking restrictions, narrow streets, and access challenges of West London inside out." },
            ].map((v) => (
              <div key={v.title} className="card-premium p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Service Area</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Based in Ealing, Serving All of London</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our depot on Uxbridge Road puts us at the heart of West London. We serve Ealing, Acton, Chiswick, Hanwell, Greenford, Southall, and all London postcodes.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Planning a Move?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Get a free home survey and fixed-price quote from Ealing&apos;s most trusted removals company.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/removals-ealing/contact" className="btn-accent">Get a Free Quote</Link>
            <a href="tel:02079469234" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 9234</a>
          </div>
        </div>
      </section>
    </>
  );
}
