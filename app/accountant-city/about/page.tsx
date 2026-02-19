import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | ACCA Certified Accountants in the City of London",
  description: "Learn about City Accounting Partners - ACCA certified accountants in the City of London, EC2. Expert accounting, tax and business advisory services.",
  openGraph: { title: "About Us | City Accounting Partners", description: "ACCA certified accountants in the City of London providing expert business accounting and tax services." },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width"><div className="max-w-3xl">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Your Trusted Accounting Partners</h1>
          <p className="text-xl text-gray-200 leading-relaxed">ACCA certified accountants providing proactive, technology-driven accounting services from the heart of the City of London.</p>
        </div></div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Built for Modern Business Since 2012</h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">City Accounting Partners was founded with a clear mission: to provide small and medium businesses with the calibre of accounting advice typically reserved for large corporates, at a price that makes sense for growing companies.</p>
              <p className="text-gray-600 mb-6 leading-relaxed">Based on Moorgate in the City of London, we serve businesses across the capital and beyond. Our team of ACCA and ICAEW qualified accountants combines deep technical knowledge with genuine commercial awareness, helping clients not just stay compliant but actively grow their businesses.</p>
              <p className="text-gray-600 leading-relaxed">We embraced cloud technology from the start, and today we are recognised Xero Gold Partners and QuickBooks ProAdvisors. Our digital-first approach means real-time financial data, automated processes and fewer admin headaches for our clients.</p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">12+</div><p className="text-gray-600 mt-2 font-medium">Years Experience</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">750+</div><p className="text-gray-600 mt-2 font-medium">Clients Served</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">100%</div><p className="text-gray-600 mt-2 font-medium">MTD Compliant</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">4.8/5</div><p className="text-gray-600 mt-2 font-medium">Google Rating</p></div>
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
            <div className="card-premium p-8"><div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Proactive Advice</h3><p className="text-gray-600">We do not wait for you to ask questions. We proactively identify tax savings, flag risks and suggest improvements throughout the year.</p></div>
            <div className="card-premium p-8"><div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Technology-Led</h3><p className="text-gray-600">Cloud-first approach using Xero, QuickBooks and FreeAgent. Real-time data, automated bank feeds and digital receipt capture as standard.</p></div>
            <div className="card-premium p-8"><div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Fixed Fees</h3><p className="text-gray-600">Transparent fixed monthly fees with no hidden charges. You know exactly what you will pay and what you will receive. No clock-watching.</p></div>
            <div className="card-premium p-8"><div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Qualified Experts</h3><p className="text-gray-600">Every client is served by ACCA or ICAEW qualified accountants, not trainees. You get senior expertise on every interaction.</p></div>
            <div className="card-premium p-8"><div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Personal Service</h3><p className="text-gray-600">A dedicated accountant who knows your business inside out. Direct phone and email access, not a call centre or chatbot.</p></div>
            <div className="card-premium p-8"><div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Deadline Guarantee</h3><p className="text-gray-600">We have never missed a filing deadline. Our systematic approach ensures every return, submission and payment is made on time.</p></div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Location</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Find Us on Moorgate</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our office is in the heart of the City of London, easily accessible from Moorgate, Liverpool Street and Bank stations. We also offer video consultations for clients who prefer to meet remotely.</p>
          </div>
          <div className="bg-gray-50 p-8 lg:p-12 rounded-sm border-t-4 border-accent max-w-2xl mx-auto">
            <address className="not-italic text-gray-700 text-lg mb-4"><strong>City Accounting Partners</strong><br />45 Moorgate<br />City of London, EC2R 6EL</address>
            <p className="text-gray-600 mb-2"><strong>Opening Hours:</strong></p>
            <p className="text-gray-600">Monday &ndash; Friday: 8:30am &ndash; 6:00pm</p>
            <p className="text-gray-600 mb-4">Saturday &amp; Sunday: Closed</p>
            <p className="text-sm text-gray-500">Nearest stations: Moorgate (2 min walk), Liverpool Street (5 min walk), Bank (7 min walk).</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Talk Numbers?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book a free consultation and discover how City Accounting Partners can help your business thrive.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/accountant-city/contact" className="btn-accent">Book Free Consultation</Link>
            <a href="tel:02079463456" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 3456</a>
          </div>
        </div>
      </section>
    </>
  );
}
