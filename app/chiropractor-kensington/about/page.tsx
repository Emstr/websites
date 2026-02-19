import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | GCC Registered Chiropractors in Kensington",
  description: "Learn about Kensington Chiropractic Centre - GCC registered, BCA member chiropractors providing evidence-based care in Kensington, W8.",
  openGraph: { title: "About Us | Kensington Chiropractic Centre", description: "GCC registered chiropractors in Kensington with 15+ years experience." },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Dedicated to Your Spinal Health</h1><p className="text-xl text-gray-200 leading-relaxed">GCC registered chiropractors providing evidence-based care from our clinic on Kensington Church Street.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="grid lg:grid-cols-2 gap-16 items-center">
        <div><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Evidence-Based Chiropractic Since 2010</h2><div className="gold-line mb-6"></div>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">Kensington Chiropractic Centre was established with a commitment to providing the highest standard of evidence-based chiropractic care. Our founding chiropractor, a graduate of the Anglo-European College of Chiropractic, sought to create a clinic where clinical excellence meets genuine patient care.</p>
          <p className="text-gray-600 mb-6 leading-relaxed">We are proud members of the British Chiropractic Association and registered with the General Chiropractic Council. Our team holds additional qualifications in sports chiropractic, rehabilitation and prenatal care, allowing us to offer comprehensive treatment for a wide range of conditions.</p>
          <p className="text-gray-600 leading-relaxed">Over 15 years, we have helped more than 10,000 patients with conditions ranging from simple back pain to complex spinal conditions. Our approach is always the same: listen carefully, assess thoroughly, treat effectively and empower patients with the knowledge to maintain their own health.</p>
        </div>
        <div className="bg-gray-50 p-8 lg:p-12 rounded-sm"><div className="grid grid-cols-2 gap-8">
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">15+</div><p className="text-gray-600 mt-2 font-medium">Years Experience</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">10,000+</div><p className="text-gray-600 mt-2 font-medium">Patients Treated</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">98%</div><p className="text-gray-600 mt-2 font-medium">Satisfaction Rate</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">5★</div><p className="text-gray-600 mt-2 font-medium">Google Rating</p></div>
        </div></div>
      </div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Approach</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">What Sets Us Apart</h2><div className="gold-line-center mb-6"></div></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Evidence-Based", desc: "Every treatment we recommend is supported by clinical research. We stay current with the latest evidence to provide the most effective care." },
            { title: "Patient-Centred", desc: "We listen to your concerns, explain your condition clearly and involve you in every decision about your treatment." },
            { title: "Thorough Assessment", desc: "We never treat without a proper diagnosis. Our comprehensive assessments identify the root cause of your pain." },
            { title: "Integrated Care", desc: "We combine chiropractic adjustments with exercise rehabilitation, soft tissue therapy and lifestyle advice." },
            { title: "Transparent Pricing", desc: "Clear, upfront pricing with no hidden costs. We tell you what to expect before treatment begins." },
            { title: "Convenient Location", desc: "Our Kensington Church Street clinic is easily accessible from High Street Kensington and Notting Hill Gate stations." },
          ].map((v) => (<div key={v.title} className="card-premium p-8"><div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">{v.title}</h3><p className="text-gray-600">{v.desc}</p></div>))}
        </div>
      </div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Clinic</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Visit Us in Kensington</h2><div className="gold-line-center mb-6"></div></div>
        <div className="bg-gray-50 p-8 lg:p-12 rounded-sm border-t-4 border-accent max-w-2xl mx-auto"><address className="not-italic text-gray-700 mb-4">27 Kensington Church Street<br />Kensington, London W8 4LL</address>
          <ul className="space-y-2 text-gray-600"><li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>2 minutes from High Street Kensington station</li><li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Ground floor, step-free access</li><li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Modern, fully equipped treatment rooms</li></ul>
        </div>
      </div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Recovery?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book your initial consultation and take the first step towards better spinal health.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/chiropractor-kensington/contact" className="btn-accent">Book an Appointment</Link><a href="tel:02079465890" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 5890</a></div></div></section>
    </>
  );
}
