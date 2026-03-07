import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Independent Financial Adviser in Wirral",
  description: "Learn about Endeavour Financial Planning - established independent financial adviser in Wirral. FCA regulated, providing personal financial planning and wealth management.",
  openGraph: {
    title: "About Us | Endeavour Financial Planning",
    description: "Established independent financial adviser providing personal financial planning in Wirral.",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Your Trusted Financial Adviser</h1>
            <p className="text-xl text-gray-200 leading-relaxed">Established independent financial adviser serving the Wirral, Liverpool and wider Merseyside region with trusted financial guidance.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Personal Financial Advice in Wirral</h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">Endeavour Financial Planning was established to provide genuine, personal financial advice to individuals and families across Wirral, Liverpool and Merseyside. We believe that everyone deserves access to quality financial guidance, delivered with honesty and transparency.</p>
              <p className="text-gray-600 mb-6 leading-relaxed">As an independent adviser, we are free to recommend products and solutions from across the entire market. This means our advice is always based on what&apos;s best for you, not what benefits a particular provider.</p>
              <p className="text-gray-600 leading-relaxed">We take pride in building lasting relationships with our clients, providing ongoing support and adapting financial plans as circumstances change over the years.</p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">20+</div><p className="text-gray-600 mt-2 font-medium">Years of Excellence</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">300+</div><p className="text-gray-600 mt-2 font-medium">Satisfied Clients</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">100%</div><p className="text-gray-600 mt-2 font-medium">Independent</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">FCA</div><p className="text-gray-600 mt-2 font-medium">Regulated</p></div>
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
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Independence</h3>
              <p className="text-gray-600">We&apos;re not tied to any product provider. We recommend the best solutions for you from the entire market.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Personal Service</h3>
              <p className="text-gray-600">Every client is unique. We take time to understand your circumstances and goals before making recommendations.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Transparency</h3>
              <p className="text-gray-600">Our fees are clear and explained upfront. We always ensure you understand our recommendations before proceeding.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Expertise</h3>
              <p className="text-gray-600">Qualified and experienced in all areas of financial planning, continuously updating knowledge to provide cutting-edge advice.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Long-term Focus</h3>
              <p className="text-gray-600">We build lasting relationships, adapting plans as circumstances change over the years.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Integrity</h3>
              <p className="text-gray-600">We operate with the highest ethical standards, always doing the right thing for our clients.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">FCA Regulated</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">Endeavour Financial Planning is authorised and regulated by the Financial Conduct Authority (FCA). This means we adhere to the highest standards of professional conduct and our clients benefit from the protections provided by the Financial Services Compensation Scheme (FSCS).</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Discuss Your Financial Future?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book a complimentary consultation and discover how we can help you achieve your financial goals.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/endeavour-financial-planning/contact" className="btn-accent">Book Free Consultation</Link>
            <a href="tel:01513462218" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 0151 346 2218</a>
          </div>
        </div>
      </section>
    </>
  );
}
