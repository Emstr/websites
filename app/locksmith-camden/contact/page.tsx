import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | 24/7 Emergency Locksmith Camden",
  description: "Contact Camden Lock & Key for emergency locksmith service or a free quote. Call 020 7946 0789. DBS checked, 30-minute response, no call-out fee.",
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Get In Touch</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Contact Us</h1><p className="text-xl text-gray-200 leading-relaxed">Locked out? Call us now for a 30-minute response. For non-urgent enquiries, fill in the form below and we&apos;ll get back to you promptly.</p></div></div></section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">For non-emergency enquiries, fill in the form and we&apos;ll respond within 2 hours during business hours.</p>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label><input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="John" /></div>
                  <div><label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label><input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="Smith" /></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email *</label><input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="john@example.com" /></div>
                  <div><label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label><input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="07123 456789" /></div>
                </div>
                <div><label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">Service Required</label><select id="service" name="service" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"><option value="">Select a service</option><option value="lockout">Emergency Lockout</option><option value="lock-change">Lock Replacement</option><option value="upvc">UPVC &amp; Multipoint Lock Repair</option><option value="keys">Key Cutting</option><option value="security">Security Upgrades</option><option value="safe">Safe Opening</option><option value="other">Other</option></select></div>
                <div><label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Tell Us What You Need</label><textarea id="message" name="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="Please describe your situation including your postcode..."></textarea></div>
                <div className="flex items-start gap-3"><input type="checkbox" id="consent" name="consent" required className="mt-1 w-4 h-4 text-[var(--accent)] border-gray-300 rounded focus:ring-[var(--accent)]" /><label htmlFor="consent" className="text-sm text-gray-600">I consent to Camden Lock &amp; Key contacting me regarding my enquiry. *</label></div>
                <button type="submit" className="bg-[var(--accent)] text-white px-8 py-3 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors w-full sm:w-auto">Send Enquiry</button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-8">Our Details</h2>
              <div className="bg-[var(--accent)]/10 border-2 border-[var(--accent)] rounded-sm p-6 mb-8">
                <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Emergency? Call Now</h3>
                <a href="tel:02079460789" className="text-3xl font-bold text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors">020 7946 0789</a>
                <p className="text-gray-600 mt-2">Available 24/7 — we aim to be with you within 30 minutes</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-sm p-6 mb-8">
                <h3 className="text-xl font-bold text-[var(--primary)] mb-4">Camden, NW1</h3>
                <address className="not-italic text-gray-700 mb-4"><strong>Camden Lock &amp; Key</strong><br />28 Parkway<br />Camden<br />London NW1 7AH</address>
                <p className="text-gray-600"><strong>Enquiry Hours:</strong><br />Monday - Saturday: 8:00am - 8:00pm<br /><strong className="text-[var(--accent)]">Emergency Service: 24/7</strong></p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-sm p-6">
                <h3 className="text-lg font-bold text-[var(--primary)] mb-4">Email Us</h3>
                <a href="mailto:info@camdenlockandkey.co.uk" className="text-[var(--accent)] font-semibold hover:text-[var(--accent-light)] transition-colors">info@camdenlockandkey.co.uk</a>
                <p className="text-sm text-gray-500 mt-1">For non-urgent enquiries — we reply within 2 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><h2 className="text-2xl font-bold text-[var(--primary)] mb-6 text-center">Find Us in Camden</h2><div className="aspect-video bg-gray-200 rounded-sm overflow-hidden"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.5!2d-0.1426!3d51.5390!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMyJzIwLjQiTiAwwrAwOCczMy40Ilc!5e0!3m2!1sen!2suk!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Camden Lock & Key Location"></iframe></div></div></section>

      <section className="py-8 bg-gray-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="bg-gray-50 border border-gray-200 rounded-sm p-4 text-sm text-gray-600"><p><strong>DBS Checked:</strong> All Camden Lock &amp; Key locksmiths are DBS checked and fully insured. We use non-destructive entry wherever possible.</p></div></div></section>
    </>
  );
}
