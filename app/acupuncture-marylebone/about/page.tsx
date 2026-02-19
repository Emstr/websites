import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | BAcC Registered Acupuncturist in Marylebone",
  description: "Meet our BAcC registered acupuncturist with BSc in Acupuncture and 15+ years experience. Learn about our Marylebone clinic and treatment philosophy.",
  openGraph: { title: "About | Marylebone Acupuncture Clinic", description: "BAcC registered, BSc qualified acupuncturist with over 15 years clinical experience in Marylebone, London." },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Your Practitioner</h1><p className="text-xl text-gray-200 leading-relaxed">BAcC registered, BSc qualified, and driven by a genuine passion for helping people heal naturally through the ancient art of acupuncture.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="grid lg:grid-cols-2 gap-16 items-center">
        <div><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">15 Years of Healing in Marylebone</h2><div className="gold-line mb-6"></div>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">Marylebone Acupuncture Clinic was established in 2010 with a clear mission: to make high-quality, evidence-based acupuncture accessible in the heart of London. Our principal practitioner holds a BSc in Acupuncture and is a full member of the British Acupuncture Council (BAcC), the UK&apos;s leading professional body.</p>
          <p className="text-gray-600 mb-6 leading-relaxed">With over 15 years of clinical experience and having treated more than 5,000 patients, our practice has developed particular expertise in fertility acupuncture, chronic pain management, and stress-related conditions. We maintain close relationships with several London fertility clinics, GPs and physiotherapists.</p>
          <p className="text-gray-600 leading-relaxed">Our Devonshire Place clinic is a calm, welcoming space designed to help you feel at ease from the moment you arrive. We believe that healing begins with being truly listened to, which is why every initial consultation takes a full hour.</p>
        </div>
        <div className="bg-gray-50 p-8 lg:p-12 rounded-sm"><div className="grid grid-cols-2 gap-8">
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">15+</div><p className="text-gray-600 mt-2 font-medium">Years Experience</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">5,000+</div><p className="text-gray-600 mt-2 font-medium">Patients Treated</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">BAcC</div><p className="text-gray-600 mt-2 font-medium">Registered</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">BSc</div><p className="text-gray-600 mt-2 font-medium">Qualified</p></div>
        </div></div>
      </div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Values</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Our Treatment Philosophy</h2><div className="gold-line-center mb-6"></div></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Whole-Person Care", desc: "We treat the whole person, not just isolated symptoms. Your physical, emotional and mental wellbeing are all considered in every treatment." },
            { title: "Evidence-Based", desc: "We stay current with the latest acupuncture research and integrate evidence-based protocols with traditional knowledge." },
            { title: "Truly Personalised", desc: "No two patients are alike. Every treatment plan is designed around your unique constitution, health history and goals." },
            { title: "Safety First", desc: "We use only sterile, single-use disposable needles. Our practice meets all BAcC safety and hygiene standards." },
            { title: "Patient Education", desc: "We empower you with knowledge about your condition and provide lifestyle guidance to support healing between sessions." },
            { title: "Collaborative Care", desc: "We work alongside your GP, consultant and other health professionals to ensure coordinated, comprehensive care." },
          ].map((v) => (
            <div key={v.title} className="card-premium p-8"><h3 className="text-xl font-bold text-primary mb-3">{v.title}</h3><p className="text-gray-600">{v.desc}</p></div>
          ))}
        </div>
      </div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Location</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">A Calm Oasis in Marylebone</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 max-w-3xl mx-auto">Our clinic on Devonshire Place is situated in the heart of Marylebone&apos;s prestigious medical district. A peaceful, purpose-designed treatment space just minutes from Baker Street and Regent&apos;s Park stations.</p></div></div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Book Your Consultation?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Take the first step towards better health. Your initial consultation gives us the time to understand your needs fully.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/acupuncture-marylebone/contact" className="btn-accent">Book Appointment</Link><a href="tel:02079465890" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 5890</a></div>
      </div></section>
    </>
  );
}
