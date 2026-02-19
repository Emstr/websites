import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book a Chiropractic Appointment",
  description: "Book a chiropractic appointment at Kensington Chiropractic Centre. Call 020 7946 5890 or book online. GCC registered chiropractors in Kensington, W8.",
  openGraph: { title: "Contact Us | Kensington Chiropractic Centre", description: "Book your chiropractic appointment in Kensington. Call 020 7946 5890." },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Get In Touch</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Book Your Appointment</h1><p className="text-xl text-gray-200 leading-relaxed">Ready to start your recovery? Book an appointment online or call our clinic. New patients welcome.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Appointment Request</h2>
          <p className="text-gray-600 mb-8">Fill in the form and we&apos;ll contact you to confirm your appointment.</p>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6"><div><label htmlFor="firstName" className="form-label">First Name *</label><input type="text" id="firstName" name="firstName" required className="form-input" placeholder="Caroline" /></div><div><label htmlFor="lastName" className="form-label">Last Name *</label><input type="text" id="lastName" name="lastName" required className="form-input" placeholder="Roberts" /></div></div>
            <div className="grid md:grid-cols-2 gap-6"><div><label htmlFor="email" className="form-label">Email *</label><input type="email" id="email" name="email" required className="form-input" placeholder="caroline@example.com" /></div><div><label htmlFor="phone" className="form-label">Phone *</label><input type="tel" id="phone" name="phone" required className="form-input" placeholder="07123 456789" /></div></div>
            <div><label htmlFor="condition" className="form-label">Main Concern</label><select id="condition" name="condition" className="form-input"><option value="">Select your main concern</option><option value="back-pain">Back Pain</option><option value="neck-pain">Neck Pain</option><option value="headaches">Headaches / Migraines</option><option value="sports-injury">Sports Injury</option><option value="posture">Posture Issues</option><option value="sciatica">Sciatica</option><option value="pregnancy">Pregnancy-Related Pain</option><option value="other">Other</option></select></div>
            <div><label htmlFor="appointmentType" className="form-label">Appointment Type</label><select id="appointmentType" name="appointmentType" className="form-input"><option value="">Select type</option><option value="initial">Initial Consultation (45 mins)</option><option value="follow-up">Follow-up Treatment (30 mins)</option><option value="not-sure">Not Sure - Please Advise</option></select></div>
            <div><label htmlFor="message" className="form-label">Tell Us About Your Condition</label><textarea id="message" name="message" rows={5} className="form-textarea" placeholder="Describe your symptoms, how long you've had them, and any relevant medical history..."></textarea></div>
            <button type="submit" className="btn-accent w-full sm:w-auto">Request Appointment</button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Our Clinic</h2>
          <div className="location-card mb-8">
            <div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div><div><span className="text-sm text-accent font-semibold">Kensington Clinic</span><h3 className="text-xl font-bold text-primary">Kensington, W8</h3></div></div>
            <address className="not-italic text-gray-700 mb-4"><strong>Kensington Chiropractic Centre</strong><br />27 Kensington Church Street<br />Kensington<br />London W8 4LL</address>
            <div className="space-y-2 text-gray-600 mb-4"><p><strong>Clinic Hours:</strong><br />Monday - Friday: 8:00am - 7:00pm<br />Saturday: 9:00am - 2:00pm<br />Sunday: Closed</p></div>
            <p className="text-sm text-gray-500">2 minutes from High Street Kensington station. Ground floor, step-free access. No referral needed.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-sm"><h3 className="text-lg font-bold text-primary mb-4">Call or Email</h3><div className="space-y-4">
            <a href="tel:02079465890" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"><div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div><div><p className="font-semibold">020 7946 5890</p><p className="text-sm text-gray-500">Call during clinic hours</p></div></a>
            <a href="mailto:info@kensingtonchiro.co.uk" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"><div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div><div><p className="font-semibold">info@kensingtonchiro.co.uk</p><p className="text-sm text-gray-500">Email us anytime</p></div></a>
          </div></div>
        </div>
      </div></div></section>

      <section className="bg-gray-100"><div className="container-width py-8"><h2 className="text-2xl font-bold text-primary mb-6 text-center">Find Our Clinic</h2><div className="aspect-video bg-gray-200 rounded-sm overflow-hidden"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5!2d-0.1920!3d51.5000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzAwLjAiTiAwwrAxMSczMS4yIlc!5e0!3m2!1sen!2suk!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Kensington Chiropractic Centre Location"></iframe></div></div></section>
    </>
  );
}
