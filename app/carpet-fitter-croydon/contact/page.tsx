import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book a Free Flooring Estimate",
  description: "Contact Croydon Carpet & Flooring for a free estimate. Visit our showroom at 146 London Road or call 020 7946 1170.",
  openGraph: { title: "Contact Us | Croydon Carpet & Flooring", description: "Book a free flooring estimate. Call 020 7946 1170 or visit our Croydon showroom." },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Get In Touch</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Contact Us</h1><p className="text-xl text-gray-200 leading-relaxed">Book a free home estimate, visit our showroom or simply ask us a question. We are always happy to help.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Book Your Free Estimate</h2><p className="text-gray-600 mb-8">Fill in the form and we will call you back to arrange a convenient time for your free home visit.</p>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6"><div><label htmlFor="firstName" className="form-label">First Name *</label><input type="text" id="firstName" name="firstName" required className="form-input" placeholder="Jane" /></div><div><label htmlFor="lastName" className="form-label">Last Name *</label><input type="text" id="lastName" name="lastName" required className="form-input" placeholder="Smith" /></div></div>
            <div className="grid md:grid-cols-2 gap-6"><div><label htmlFor="email" className="form-label">Email Address *</label><input type="email" id="email" name="email" required className="form-input" placeholder="jane@example.com" /></div><div><label htmlFor="phone" className="form-label">Phone Number *</label><input type="tel" id="phone" name="phone" required className="form-input" placeholder="07123 456789" /></div></div>
            <div><label htmlFor="service" className="form-label">Flooring Type</label><select id="service" name="service" className="form-input"><option value="">Select flooring type</option><option value="carpet">Carpet</option><option value="lvt">Luxury Vinyl Tiles</option><option value="laminate">Laminate</option><option value="hardwood">Hardwood</option><option value="commercial">Commercial Flooring</option><option value="other">Other / Not Sure</option></select></div>
            <div><label htmlFor="preferredDate" className="form-label">Preferred Visit Date</label><input type="text" id="preferredDate" name="preferredDate" className="form-input" placeholder="e.g. Saturday morning" /></div>
            <div><label htmlFor="message" className="form-label">Tell Us About Your Project</label><textarea id="message" name="message" rows={5} className="form-textarea" placeholder="How many rooms? What type of flooring are you considering? Any other details..."></textarea></div>
            <button type="submit" className="btn-accent w-full sm:w-auto">Request Free Estimate</button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Our Showroom</h2>
          <div className="location-card mb-8">
            <div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div><div><span className="text-sm text-primary font-semibold">Croydon</span><h3 className="text-xl font-bold text-primary">Showroom & Office</h3></div></div>
            <address className="not-italic text-gray-700 mb-4"><strong>Croydon Carpet & Flooring</strong><br />146 London Road<br />Croydon<br />London CR0 2TD</address>
            <div className="space-y-2 text-gray-600 mb-4"><p><strong>Opening Hours:</strong><br />Monday - Friday: 9:00am - 5:30pm<br />Saturday: 9:00am - 4:00pm<br />Sunday: Closed</p></div>
          </div>
          <div className="bg-gray-50 p-6 rounded-sm mb-8"><h3 className="text-lg font-bold text-primary mb-4">Direct Contact</h3><div className="space-y-4">
            <a href="tel:02079461170" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"><div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div><div><p className="font-semibold">020 7946 1170</p><p className="text-sm text-gray-500">Call during opening hours</p></div></a>
            <a href="mailto:info@croydoncarpets.co.uk" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"><div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div><div><p className="font-semibold">info@croydoncarpets.co.uk</p><p className="text-sm text-gray-500">Email us anytime</p></div></a>
          </div></div>
          <div className="bg-gray-50 p-6 rounded-sm"><h3 className="text-lg font-bold text-primary mb-4">Getting Here</h3><div className="space-y-3 text-gray-600">
            <div className="flex items-center gap-3"><svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg><p><strong>East Croydon:</strong> 5-minute walk</p></div>
            <div className="flex items-center gap-3"><svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg><p><strong>West Croydon:</strong> 7-minute walk</p></div>
          </div></div>
        </div>
      </div></div></section>
    </>
  );
}
