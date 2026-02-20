import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Repair Quote",
  description: "Contact Camden Phone Fix for a free repair quote. Visit our Camden High Street shop or call 020 7946 4460. Open 7 days a week, no appointment needed.",
  openGraph: { title: "Contact Us | Camden Phone Fix", description: "Get a free repair quote. Visit us on Camden High Street or call 020 7946 4460. Open 7 days." },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Get In Touch</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Contact Us</h1><p className="text-xl text-gray-200 leading-relaxed">Need a repair? Walk into our Camden High Street shop &mdash; no appointment needed. Or send us a message and we&apos;ll get back to you quickly.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="grid lg:grid-cols-2 gap-16">
        <div><h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Get a Free Quote</h2><p className="text-gray-600 mb-8">Tell us about your device and the issue and we&apos;ll give you an instant estimate.</p>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6"><div><label htmlFor="firstName" className="form-label">First Name *</label><input type="text" id="firstName" name="firstName" required className="form-input" placeholder="Alex" /></div><div><label htmlFor="lastName" className="form-label">Last Name *</label><input type="text" id="lastName" name="lastName" required className="form-input" placeholder="Smith" /></div></div>
            <div className="grid md:grid-cols-2 gap-6"><div><label htmlFor="email" className="form-label">Email Address *</label><input type="email" id="email" name="email" required className="form-input" placeholder="alex@example.com" /></div><div><label htmlFor="phone" className="form-label">Phone Number *</label><input type="tel" id="phone" name="phone" required className="form-input" placeholder="07123 456789" /></div></div>
            <div className="grid md:grid-cols-2 gap-6"><div><label htmlFor="deviceBrand" className="form-label">Device Brand</label><select id="deviceBrand" name="deviceBrand" className="form-input"><option value="">Select brand</option><option value="iphone">Apple iPhone</option><option value="samsung">Samsung</option><option value="huawei">Huawei</option><option value="google">Google Pixel</option><option value="oneplus">OnePlus</option><option value="ipad">iPad / Tablet</option><option value="laptop">Laptop</option><option value="other">Other</option></select></div><div><label htmlFor="deviceModel" className="form-label">Device Model</label><input type="text" id="deviceModel" name="deviceModel" className="form-input" placeholder="e.g. iPhone 15 Pro, Galaxy S24" /></div></div>
            <div><label htmlFor="service" className="form-label">Repair Needed</label><select id="service" name="service" className="form-input"><option value="">Select repair type</option><option value="screen">Screen Replacement</option><option value="battery">Battery Replacement</option><option value="water">Water Damage Repair</option><option value="charging">Charging Port Fix</option><option value="data">Data Recovery</option><option value="other">Other / Not Sure</option></select></div>
            <div><label htmlFor="message" className="form-label">Describe the Issue</label><textarea id="message" name="message" rows={4} className="form-textarea" placeholder="Tell us what happened and any symptoms your device is showing..."></textarea></div>
            <div className="flex items-start gap-3"><input type="checkbox" id="consent" name="consent" required className="mt-1 w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent" /><label htmlFor="consent" className="text-sm text-gray-600">I consent to Camden Phone Fix contacting me regarding my repair enquiry. *</label></div>
            <button type="submit" className="btn-accent w-full sm:w-auto">Get My Quote</button>
          </form>
        </div>
        <div><h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Visit Our Shop</h2>
          <div className="location-card mb-8"><div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div><div><span className="text-sm text-accent font-semibold">Our Shop</span><h3 className="text-xl font-bold text-primary">Camden High Street</h3></div></div>
            <address className="not-italic text-gray-700 mb-4"><strong>Camden Phone Fix</strong><br />28 Camden High Street<br />Camden<br />London NW1 0JH</address>
            <div className="space-y-2 text-gray-600 mb-4"><p><strong>Opening Hours:</strong><br />Monday - Saturday: 9:00am - 8:00pm<br />Sunday: 10:00am - 6:00pm</p></div>
            <p className="text-sm text-gray-500">1-minute walk from Camden Town tube station. Look for us on the left-hand side heading towards Camden Market.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-sm"><h3 className="text-lg font-bold text-primary mb-4">Prefer to Call?</h3><div className="space-y-4">
            <a href="tel:02079464460" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"><div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div><div><p className="font-semibold">020 7946 4460</p><p className="text-sm text-gray-500">Call us during opening hours</p></div></a>
            <a href="mailto:repairs@camdenphonefix.co.uk" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"><div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div><div><p className="font-semibold">repairs@camdenphonefix.co.uk</p><p className="text-sm text-gray-500">Email us anytime</p></div></a>
          </div></div>
        </div>
      </div></div></section>

      <section className="bg-gray-100"><div className="container-width py-8"><h2 className="text-2xl font-bold text-primary mb-6 text-center">Find Us on Camden High Street</h2><div className="aspect-video bg-gray-200 rounded-sm overflow-hidden"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.5!2d-0.1426!3d51.5392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMyJzIxLjEiTiAwwrAwOCczMy40Ilc!5e0!3m2!1sen!2suk!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Camden Phone Fix Location"></iframe></div></div></section>
    </>
  );
}
