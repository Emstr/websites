import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book an Architecture Consultation",
  description: "Book a free architecture consultation with Shoreditch Architecture Studio. Call 020 7946 6901 or enquire online. RIBA Chartered architects in Shoreditch, E2.",
  openGraph: { title: "Contact Us | Shoreditch Architecture Studio", description: "Book a free architecture consultation. Call 020 7946 6901." },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Get In Touch</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Start Your Project</h1><p className="text-xl text-gray-200 leading-relaxed">Ready to discuss your project? Book a free initial consultation at our Shoreditch studio or get in touch below.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-2">Project Enquiry</h2>
          <p className="text-gray-600 mb-8">Tell us about your project and we&apos;ll arrange a free initial consultation.</p>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6"><div><label htmlFor="firstName" className="form-label">First Name *</label><input type="text" id="firstName" name="firstName" required className="form-input" placeholder="Alex" /></div><div><label htmlFor="lastName" className="form-label">Last Name *</label><input type="text" id="lastName" name="lastName" required className="form-input" placeholder="Morgan" /></div></div>
            <div className="grid md:grid-cols-2 gap-6"><div><label htmlFor="email" className="form-label">Email *</label><input type="email" id="email" name="email" required className="form-input" placeholder="alex@example.com" /></div><div><label htmlFor="phone" className="form-label">Phone *</label><input type="tel" id="phone" name="phone" required className="form-input" placeholder="07123 456789" /></div></div>
            <div className="grid md:grid-cols-2 gap-6">
              <div><label htmlFor="projectType" className="form-label">Project Type</label><select id="projectType" name="projectType" className="form-input"><option value="">Select project type</option><option value="new-build">New Build</option><option value="renovation">Renovation</option><option value="extension">Extension / Loft Conversion</option><option value="commercial">Commercial / Retail</option><option value="interior">Interior Design</option><option value="planning">Planning Application</option><option value="heritage">Heritage / Listed Building</option><option value="other">Other</option></select></div>
              <div><label htmlFor="budget" className="form-label">Approximate Budget</label><select id="budget" name="budget" className="form-input"><option value="">Select budget range</option><option value="under-50k">Under &pound;50,000</option><option value="50k-100k">&pound;50,000 - &pound;100,000</option><option value="100k-250k">&pound;100,000 - &pound;250,000</option><option value="250k-500k">&pound;250,000 - &pound;500,000</option><option value="500k-1m">&pound;500,000 - &pound;1,000,000</option><option value="over-1m">Over &pound;1,000,000</option><option value="unsure">Not Sure Yet</option></select></div>
            </div>
            <div><label htmlFor="siteAddress" className="form-label">Site Address / Postcode</label><input type="text" id="siteAddress" name="siteAddress" className="form-input" placeholder="e.g. E2 7QN or 58 Rivington Street" /></div>
            <div><label htmlFor="message" className="form-label">Tell Us About Your Project</label><textarea id="message" name="message" rows={5} className="form-textarea" placeholder="Describe your project, what you hope to achieve, and any relevant details such as property type, planning history or timeline..."></textarea></div>
            <button type="submit" className="btn-accent w-full sm:w-auto">Submit Enquiry</button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-8">Our Studio</h2>
          <div className="location-card mb-8">
            <div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center"><svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div><div><span className="text-sm text-[var(--accent)] font-semibold">Design Studio</span><h3 className="text-xl font-bold text-[var(--primary)]">Shoreditch, E2</h3></div></div>
            <address className="not-italic text-gray-700 mb-4"><strong>Shoreditch Architecture Studio</strong><br />58 Rivington Street<br />Shoreditch<br />London E2 7QN</address>
            <div className="space-y-2 text-gray-600 mb-4"><p><strong>Studio Hours:</strong><br />Monday - Friday: 9:00am - 6:00pm<br />Saturday: By appointment only<br />Sunday: Closed</p></div>
            <p className="text-sm text-gray-500">5 minutes from Shoreditch High Street Overground. Ground floor studio with step-free access and meeting room.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-sm"><h3 className="text-lg font-bold text-[var(--primary)] mb-4">Call or Email</h3><div className="space-y-4">
            <a href="tel:02079466901" className="flex items-center gap-3 text-gray-700 hover:text-[var(--accent)] transition-colors"><div className="w-10 h-10 bg-[var(--accent)]/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div><div><p className="font-semibold">020 7946 6901</p><p className="text-sm text-gray-500">Call during studio hours</p></div></a>
            <a href="mailto:studio@shoreditcharchitecture.co.uk" className="flex items-center gap-3 text-gray-700 hover:text-[var(--accent)] transition-colors"><div className="w-10 h-10 bg-[var(--accent)]/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div><div><p className="font-semibold">studio@shoreditcharchitecture.co.uk</p><p className="text-sm text-gray-500">Email us anytime</p></div></a>
          </div></div>
        </div>
      </div></div></section>

      <section className="bg-gray-100"><div className="container-width py-8"><h2 className="text-2xl font-bold text-[var(--primary)] mb-6 text-center">Find Our Studio</h2><div className="aspect-video bg-gray-200 rounded-sm overflow-hidden"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4!2d-0.0790!3d51.5263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMxJzM0LjciTiAwwrAwNCc0NC40Ilc!5e0!3m2!1sen!2suk!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Shoreditch Architecture Studio Location"></iframe></div></div></section>
    </>
  );
}
