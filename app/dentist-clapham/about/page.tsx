import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Meet Our Dental Team",
  description:
    "Learn about Clapham Dental Practice — established NHS and private dentists in Clapham, SW4. GDC registered team with over 20 years of experience. Evening appointments available.",
  openGraph: {
    title: "About Us | Clapham Dental Practice",
    description:
      "Meet our experienced dental team in Clapham. GDC registered, NHS and private treatments, evening appointments Monday to Thursday.",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 font-serif">Meet Our Dental Team</h1>
            <p className="text-xl text-gray-200 leading-relaxed">Established dental practice in the heart of Clapham. GDC registered dentists providing NHS and private care with genuine warmth and clinical excellence.</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4 font-serif">Caring for Clapham&apos;s Smiles Since 2003</h2>
              <div className="w-16 h-1 bg-[var(--accent)] mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Clapham Dental Practice was founded with a simple belief: everyone deserves access to high-quality dental care in a friendly, welcoming environment. What started as a small family practice on Clapham High Street has grown into one of South London&apos;s most trusted dental surgeries.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We understand that visiting the dentist can feel daunting. That&apos;s why our team goes above and beyond to make every patient feel at ease — from our calming waiting room to our gentle, unhurried approach to treatment. Nervous patients are particularly welcome, and we take all the time you need.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Over the years, we&apos;ve invested in the latest dental technology and continued professional development to ensure our patients receive the best care possible. From routine check-ups to advanced cosmetic procedures, we provide the full spectrum of modern dentistry under one roof.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-4xl font-bold text-[var(--accent)]">20+</div>
                  <p className="text-gray-600 mt-2 font-medium">Years Established</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-4xl font-bold text-[var(--accent)]">10,000+</div>
                  <p className="text-gray-600 mt-2 font-medium">Patients Treated</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-4xl font-bold text-[var(--accent)]">4</div>
                  <p className="text-gray-600 mt-2 font-medium">Experienced Dentists</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-4xl font-bold text-[var(--accent)]">4.9/5</div>
                  <p className="text-gray-600 mt-2 font-medium">Patient Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4 font-serif">What Sets Us Apart</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Patient-First Approach", desc: "Every treatment plan starts with listening. We take time to understand your concerns, explain your options clearly, and never pressure you into unnecessary procedures.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
              { title: "Gentle Care for All", desc: "We specialise in treating nervous patients. Our team is trained in anxiety management techniques and we always work at your pace, ensuring comfort throughout.", icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Modern Technology", desc: "Digital X-rays, intraoral cameras, and the latest treatment techniques mean more precise diagnoses, less invasive procedures, and better outcomes for every patient.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
              { title: "NHS & Private Options", desc: "We believe in giving patients choice. Whether you prefer NHS or private treatment, you'll receive the same high standard of care and personal attention from our team.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { title: "Evening Appointments", desc: "We know how busy life gets. That's why we open until 8pm Monday to Thursday, so you can fit your dental care around your work and family commitments.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Continuous Learning", desc: "Our dentists regularly attend courses and conferences to stay at the forefront of dental science. You benefit from the latest evidence-based techniques and treatments.", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
            ].map((v) => (
              <div key={v.title} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow border-t-4 border-transparent hover:border-[var(--accent)]">
                <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={v.icon} /></svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-3 font-serif">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Location</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4 font-serif">Right in the Heart of Clapham</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Conveniently located on Clapham High Street, our modern practice is easily accessible by public transport and has nearby parking. We serve patients from across Clapham, Battersea, Brixton, Balham, and the wider South London area.</p>
          </div>
          <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-8 lg:p-12 rounded-sm text-white max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[var(--accent)] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <span className="text-[var(--accent)] font-semibold text-sm">Our Practice</span>
                <h3 className="text-2xl font-bold font-serif">Clapham, South London</h3>
              </div>
            </div>
            <p className="text-gray-200 mb-6 leading-relaxed">Our bright, modern practice offers a welcoming environment with comfortable treatment rooms, a relaxing waiting area, and the latest dental equipment. We&apos;re a short walk from Clapham High Street Overground station and Clapham Common and Clapham North tube stations.</p>
            <address className="not-italic text-gray-200 mb-6">87 Clapham High Street<br />Clapham, London SW4 7TB</address>
            <ul className="space-y-2 text-gray-200">
              {["5 minutes from Clapham High Street station", "Near Clapham Common and Clapham North tubes", "Serving Clapham, Battersea, Brixton & Balham"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4 font-serif">GDC Registered &amp; CQC Regulated</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">All dentists at Clapham Dental Practice are registered with the General Dental Council (GDC), the independent regulator of dental professionals in the United Kingdom. Our practice is also regulated by the Care Quality Commission (CQC), ensuring we meet the highest standards of safety and clinical care.</p>
            <p className="text-gray-600 leading-relaxed">These registrations mean you can be confident that our team has met rigorous professional standards and continues to maintain them through ongoing professional development. Your safety and wellbeing are always our top priority.</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">Ready to Meet Our Team?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book your appointment today. New patients welcome. NHS and private options available with evening appointments Monday to Thursday.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/dentist-clapham/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Book Appointment</Link>
            <a href="tel:02079461234" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors inline-block">Call 020 7946 1234</a>
          </div>
        </div>
      </section>
    </>
  );
}
