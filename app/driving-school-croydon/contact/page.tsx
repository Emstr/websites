import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book Driving Lessons in Croydon",
  description: "Book driving lessons in Croydon. Call 020 7946 3678 or fill in our booking form. DVSA approved instructors, door-to-door pick-up.",
  openGraph: { title: "Contact Us | Croydon Driving Academy", description: "Book your driving lessons in Croydon. Call 020 7946 3678." },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width"><div className="max-w-3xl">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Book Your Lessons</h1>
          <p className="text-xl text-gray-200 leading-relaxed">Ready to start learning? Fill in our booking form or call us to arrange your first lesson. We offer door-to-door pick-up across Croydon.</p>
        </div></div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width"><div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Lesson Enquiry</h2>
            <p className="text-gray-600 mb-8">Tell us about your experience and goals, and we&apos;ll match you with the perfect course.</p>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div><label htmlFor="firstName" className="form-label">First Name *</label><input type="text" id="firstName" name="firstName" required className="form-input" placeholder="Sarah" /></div>
                <div><label htmlFor="lastName" className="form-label">Last Name *</label><input type="text" id="lastName" name="lastName" required className="form-input" placeholder="Jones" /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div><label htmlFor="email" className="form-label">Email *</label><input type="email" id="email" name="email" required className="form-input" placeholder="sarah@example.com" /></div>
                <div><label htmlFor="phone" className="form-label">Phone *</label><input type="tel" id="phone" name="phone" required className="form-input" placeholder="07123 456789" /></div>
              </div>
              <div><label htmlFor="course" className="form-label">Course Interest</label>
                <select id="course" name="course" className="form-input">
                  <option value="">Select a course</option>
                  <option value="manual">Manual Lessons</option>
                  <option value="automatic">Automatic Lessons</option>
                  <option value="intensive">Intensive Course</option>
                  <option value="pass-plus">Pass Plus</option>
                  <option value="motorway">Motorway Lessons</option>
                  <option value="refresher">Refresher Course</option>
                </select>
              </div>
              <div><label htmlFor="experience" className="form-label">Driving Experience</label>
                <select id="experience" name="experience" className="form-input">
                  <option value="">Select your level</option>
                  <option value="none">Complete Beginner</option>
                  <option value="some">Some Lessons (1-10)</option>
                  <option value="experienced">Experienced Learner (10+)</option>
                  <option value="test-ready">Nearly Test Ready</option>
                  <option value="licence">Full Licence (Refresher)</option>
                </select>
              </div>
              <div><label htmlFor="pickupPostcode" className="form-label">Pick-up Postcode</label><input type="text" id="pickupPostcode" name="pickupPostcode" className="form-input" placeholder="CR0 1PA" /></div>
              <div><label htmlFor="message" className="form-label">Anything Else?</label><textarea id="message" name="message" rows={4} className="form-textarea" placeholder="Tell us about your goals, preferred days/times, or any questions..."></textarea></div>
              <button type="submit" className="btn-accent w-full sm:w-auto">Request Lessons</button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Get In Touch</h2>
            <div className="location-card mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
                <div><span className="text-sm text-accent font-semibold">Our Office</span><h3 className="text-xl font-bold text-primary">Croydon</h3></div>
              </div>
              <address className="not-italic text-gray-700 mb-4"><strong>Croydon Driving Academy</strong><br />18 George Street<br />Croydon, CR0 1PA</address>
              <div className="space-y-2 text-gray-600 mb-4">
                <p><strong>Office Hours:</strong><br />Monday - Friday: 7:00am - 8:00pm<br />Saturday: 8:00am - 4:00pm<br />Sunday: Closed</p>
              </div>
              <p className="text-sm text-gray-500">Lessons available 7 days a week including early mornings and evenings. Door-to-door pick-up across Croydon.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-sm">
              <h3 className="text-lg font-bold text-primary mb-4">Call or Email</h3>
              <div className="space-y-4">
                <a href="tel:02079463678" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div>
                  <div><p className="font-semibold">020 7946 3678</p><p className="text-sm text-gray-500">Call during office hours</p></div>
                </a>
                <a href="mailto:lessons@croydondrivingacademy.co.uk" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                  <div><p className="font-semibold">lessons@croydondrivingacademy.co.uk</p><p className="text-sm text-gray-500">Email us anytime</p></div>
                </a>
              </div>
            </div>
          </div>
        </div></div>
      </section>

      <section className="bg-gray-100">
        <div className="container-width py-8">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Find Our Office</h2>
          <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.0!2d-0.0982!3d51.3762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDIyJzM0LjMiTiAwwrAwNSc1My41Ilc!5e0!3m2!1sen!2suk!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Croydon Driving Academy Location"></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
