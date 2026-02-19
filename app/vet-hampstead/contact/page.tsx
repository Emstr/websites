import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book a Veterinary Appointment",
  description: "Contact Hampstead Veterinary Clinic to book an appointment. Call 020 7946 5670. RCVS registered vets in Hampstead, NW3. 24/7 emergency care available.",
  openGraph: { title: "Contact Us | Hampstead Veterinary Clinic", description: "Book a veterinary appointment. Call 020 7946 5670. 24/7 emergency care." },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Get In Touch</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Contact Us</h1><p className="text-xl text-gray-200 leading-relaxed">Book an appointment, ask a question or contact our emergency line. Our friendly team is here to help you and your pet.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="grid lg:grid-cols-2 gap-16">
        <div><h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Book an Appointment</h2><p className="text-gray-600 mb-8">Complete the form below and our reception team will contact you to confirm your appointment time.</p>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6"><div><label htmlFor="ownerName" className="form-label">Your Name *</label><input type="text" id="ownerName" name="ownerName" required className="form-input" placeholder="John Smith" /></div><div><label htmlFor="petName" className="form-label">Pet&apos;s Name *</label><input type="text" id="petName" name="petName" required className="form-input" placeholder="Buddy" /></div></div>
            <div className="grid md:grid-cols-2 gap-6"><div><label htmlFor="email" className="form-label">Email Address *</label><input type="email" id="email" name="email" required className="form-input" placeholder="john@example.com" /></div><div><label htmlFor="phone" className="form-label">Phone Number *</label><input type="tel" id="phone" name="phone" required className="form-input" placeholder="07123 456789" /></div></div>
            <div className="grid md:grid-cols-2 gap-6"><div><label htmlFor="petType" className="form-label">Pet Type</label><select id="petType" name="petType" className="form-input"><option value="">Select pet type</option><option value="dog">Dog</option><option value="cat">Cat</option><option value="rabbit">Rabbit</option><option value="other">Other Small Animal</option></select></div><div><label htmlFor="service" className="form-label">Reason for Visit</label><select id="service" name="service" className="form-input"><option value="">Select reason</option><option value="checkup">Health Check-up</option><option value="vaccination">Vaccination</option><option value="illness">Illness / Concern</option><option value="surgery">Surgery Consultation</option><option value="dental">Dental Check</option><option value="microchip">Microchipping</option><option value="other">Other</option></select></div></div>
            <div><label htmlFor="message" className="form-label">Tell Us About Your Pet&apos;s Needs</label><textarea id="message" name="message" rows={5} className="form-textarea" placeholder="Please describe any symptoms or concerns..."></textarea></div>
            <div className="flex items-start gap-3"><input type="checkbox" id="consent" name="consent" required className="mt-1 w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent" /><label htmlFor="consent" className="text-sm text-gray-600">I consent to Hampstead Veterinary Clinic contacting me regarding my enquiry. I understand my data will be processed in accordance with the <a href="/vet-hampstead/privacy" className="text-accent hover:underline">Privacy Policy</a>. *</label></div>
            <button type="submit" className="btn-accent w-full sm:w-auto">Request Appointment</button>
          </form>
        </div>

        <div><h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Our Clinic</h2>
          <div className="location-card mb-8"><div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div><div><span className="text-sm text-primary font-semibold">Heath Street</span><h3 className="text-xl font-bold text-primary">Hampstead, NW3</h3></div></div>
            <address className="not-italic text-gray-700 mb-4"><strong>Hampstead Veterinary Clinic</strong><br />52 Heath Street<br />Hampstead<br />London NW3 1DN</address>
            <div className="space-y-2 text-gray-600 mb-4"><p><strong>Opening Hours:</strong><br />Monday &ndash; Friday: 8:00am &ndash; 7:00pm<br />Saturday: 9:00am &ndash; 5:00pm<br />Sunday: 10:00am &ndash; 2:00pm</p><p className="text-accent font-semibold">24/7 Emergency Line Available</p></div>
            <p className="text-sm text-gray-500">2-minute walk from Hampstead tube station (Northern line). Street parking available on surrounding roads.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-sm"><h3 className="text-lg font-bold text-primary mb-4">Call Us</h3><div className="space-y-4">
            <a href="tel:02079465670" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"><div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div><div><p className="font-semibold">020 7946 5670</p><p className="text-sm text-gray-500">Appointments &amp; enquiries</p></div></a>
            <a href="mailto:info@hampsteadvet.co.uk" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"><div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div><div><p className="font-semibold">info@hampsteadvet.co.uk</p><p className="text-sm text-gray-500">Email us anytime</p></div></a>
          </div></div>
        </div>
      </div></div></section>

      <section className="bg-gray-100"><div className="container-width py-8"><h2 className="text-2xl font-bold text-primary mb-6 text-center">Find Our Clinic</h2><div className="aspect-video bg-gray-200 rounded-sm overflow-hidden"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.0!2d-0.1781!3d51.5565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMzJzIzLjQiTiAwwrAxMCc0MS4yIlc!5e0!3m2!1sen!2suk!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Hampstead Veterinary Clinic Location"></iframe></div></div></section>

      <section className="py-8 bg-gray-100"><div className="container-width"><div className="fca-notice"><p><strong>Professional Standards:</strong> Hampstead Veterinary Clinic is registered with the Royal College of Veterinary Surgeons (RCVS). For life-threatening emergencies outside our opening hours, please call our main number which will direct you to our emergency service.</p></div></div></section>
    </>
  );
}
