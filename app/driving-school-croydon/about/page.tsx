import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | DVSA Approved Driving Instructors in Croydon",
  description: "Learn about Croydon Driving Academy - DVSA approved driving instructors with 15+ years experience and a 90% first-time pass rate in Croydon.",
  openGraph: { title: "About Us | Croydon Driving Academy", description: "DVSA approved driving instructors in Croydon with a 90% first-time pass rate." },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width"><div className="max-w-3xl">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Your Road to Success Starts Here</h1>
          <p className="text-xl text-gray-200 leading-relaxed">DVSA approved driving instructors dedicated to helping Croydon learners pass their test and become safe, confident drivers.</p>
        </div></div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width"><div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Helping Croydon Drive Since 2009</h2>
            <div className="gold-line mb-6"></div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Croydon Driving Academy was founded with one goal: to provide the highest quality driving tuition in the Croydon area. Our founder, a DVSA grade A instructor, was frustrated by schools that prioritised volume over quality, rushing learners through without proper preparation.</p>
            <p className="text-gray-600 mb-6 leading-relaxed">We took a different approach. By limiting each instructor&apos;s diary, we ensure every learner gets the time and attention they need. The result? A 90% first-time pass rate that speaks for itself. We&apos;ve helped over 2,000 learners pass their test, and we&apos;re proud that many come to us through word-of-mouth recommendations.</p>
            <p className="text-gray-600 leading-relaxed">Today, our team of DVSA approved instructors covers the entire Croydon borough and surrounding areas including Purley, Coulsdon, Thornton Heath and Norbury. Whether you&apos;re 17 or 70, we&apos;ll help you get on the road.</p>
          </div>
          <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">15+</div><p className="text-gray-600 mt-2 font-medium">Years Teaching</p></div>
              <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">2,000+</div><p className="text-gray-600 mt-2 font-medium">Tests Passed</p></div>
              <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">90%</div><p className="text-gray-600 mt-2 font-medium">Pass Rate</p></div>
              <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">5★</div><p className="text-gray-600 mt-2 font-medium">Google Rating</p></div>
            </div>
          </div>
        </div></div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">What Makes Us Different</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Patience First</h3>
              <p className="text-gray-600">Every learner progresses at their own pace. We never rush, never shout and never make you feel pressured. Learning should be enjoyable.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Safety Focused</h3>
              <p className="text-gray-600">We teach you to be a safe driver for life, not just to pass the test. Hazard awareness and defensive driving are woven into every lesson.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Results Driven</h3>
              <p className="text-gray-600">Our 90% first-time pass rate isn&apos;t luck. It&apos;s the result of structured tuition, thorough preparation and only booking tests when you&apos;re truly ready.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Fair Pricing</h3>
              <p className="text-gray-600">Transparent pricing with no hidden fees. Block booking discounts available. We believe quality tuition should be accessible.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600">Early mornings, evenings and weekends available. We work around your schedule, not the other way around.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Local Knowledge</h3>
              <p className="text-gray-600">We know every test route from Croydon test centre inside out. You&apos;ll practise on the exact roads you&apos;ll face on test day.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Coverage Area</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Serving All of Croydon</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">We cover the entire Croydon borough including Purley, Coulsdon, Thornton Heath, Norbury, Selhurst, South Croydon and Addiscombe. We pick you up from home, work or college.</p>
          </div>
          <div className="bg-gray-50 p-8 lg:p-12 rounded-sm border-t-4 border-accent max-w-2xl mx-auto">
            <address className="not-italic text-gray-700 mb-4"><strong>Croydon Driving Academy</strong><br />18 George Street<br />Croydon, CR0 1PA</address>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Door-to-door pick-up and drop-off</li>
              <li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Croydon test centre route knowledge</li>
              <li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Lessons 7 days a week</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book your first lesson and experience the Croydon Driving Academy difference.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/driving-school-croydon/contact" className="btn-accent">Book Your First Lesson</Link>
            <a href="tel:02079463678" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 3678</a>
          </div>
        </div>
      </section>
    </>
  );
}
