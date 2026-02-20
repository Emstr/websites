import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Qualified Massage Therapists in Covent Garden",
  description: "Learn about Covent Garden Massage Therapy — established in 2013, 8 ITEC & VTCT qualified therapists, over 25,000 treatments delivered in Central London.",
  openGraph: { title: "About Us | Covent Garden Massage Therapy", description: "Established massage therapy clinic in the heart of Covent Garden since 2013." },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width"><div className="max-w-3xl">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Dedicated to Your Wellbeing</h1>
          <p className="text-xl text-gray-200 leading-relaxed">A professional massage therapy clinic on Floral Street, serving Central London since 2013 with qualified, experienced therapists.</p>
        </div></div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width"><div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">From One Room to Eight Therapists</h2>
            <div className="gold-line mb-6"></div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Covent Garden Massage Therapy was founded in 2013 by two qualified therapists who believed Central London lacked a genuinely clinical massage practice — somewhere focused on therapeutic outcomes rather than luxury spa aesthetics. We set up in a single treatment room on Floral Street and let the results speak for themselves.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Word spread quickly. Office workers from the Strand and Holborn came for lunchtime deep tissue sessions. Runners training for the London Marathon booked sports massage. Expectant mothers found relief from pregnancy aches they&apos;d been told were just part of the process. Within three years we had expanded to four treatment rooms and a team of six therapists.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today we employ eight fully qualified therapists — each holding ITEC or VTCT Level 3 and 4 qualifications — and we have delivered over 25,000 individual treatments. Our focus remains the same: understand what your body needs, treat it with skill and care, and give you practical advice to stay well between sessions.
            </p>
          </div>
          <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">12+</div><p className="text-gray-600 mt-2 font-medium">Years Running</p></div>
              <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">8</div><p className="text-gray-600 mt-2 font-medium">Qualified Therapists</p></div>
              <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">25k+</div><p className="text-gray-600 mt-2 font-medium">Treatments Delivered</p></div>
              <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">7</div><p className="text-gray-600 mt-2 font-medium">Days Open</p></div>
            </div>
          </div>
        </div></div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">What Guides Us</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Clinical Standards</h3>
              <p className="text-gray-600">Every therapist holds nationally recognised qualifications and completes continuing professional development annually. We maintain full insurance and follow strict hygiene protocols.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Individual Approach</h3>
              <p className="text-gray-600">No two bodies are the same. Every session begins with a conversation about how you feel today, not just what you booked. We adapt in real time to deliver the treatment you actually need.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Genuine Care</h3>
              <p className="text-gray-600">We chose this profession because we care about helping people feel better. That warmth comes through in every interaction, from your first call to your aftercare advice.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Accessibility</h3>
              <p className="text-gray-600">Open seven days a week with evening appointments. We make it easy to prioritise your health, no matter how busy your schedule.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Transparency</h3>
              <p className="text-gray-600">Clear pricing with no hidden charges. We explain what each treatment involves before you commit, and we will always be honest about what massage can and cannot achieve.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Results-Focused</h3>
              <p className="text-gray-600">We measure success by how you feel when you leave and in the days that follow. If a treatment plan would serve you better than a one-off session, we will say so.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Find Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Our Covent Garden Clinic</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">We&apos;re on Floral Street, a two-minute walk from Covent Garden tube. Our clinic is calm, clean, and designed to help you switch off from the moment you arrive.</p>
          </div>
          <div className="bg-gray-50 p-8 lg:p-12 rounded-sm border-t-4 border-accent max-w-2xl mx-auto">
            <address className="not-italic text-gray-700 mb-4 text-center">
              <strong className="text-primary text-lg">Covent Garden Massage Therapy</strong><br />16 Floral Street<br />Covent Garden, London WC2E 9DH
            </address>
            <div className="text-center text-gray-600">
              <p className="mb-2"><strong>Opening Hours:</strong></p>
              <p>Monday - Friday: 9am - 9pm</p>
              <p>Saturday: 9am - 7pm</p>
              <p>Sunday: 10am - 6pm</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Book?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Whether it&apos;s your first massage or your hundredth, we&apos;d love to welcome you to our Covent Garden clinic.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/massage-covent-garden/contact" className="btn-accent">Book Your Session</Link>
            <a href="tel:02079467740" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 7740</a>
          </div>
        </div>
      </section>
    </>
  );
}
