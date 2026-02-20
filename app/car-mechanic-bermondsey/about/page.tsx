import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Your Local Bermondsey Garage Since 2010",
  description:
    "Learn about Bermondsey Motors - a trusted local garage in SE1 since 2010. Five experienced mechanics, MOT-approved test centre, honest work and fair prices for all makes and models.",
  openGraph: {
    title: "About Us | Bermondsey Motors",
    description:
      "Trusted local garage in Bermondsey since 2010. Five experienced mechanics providing MOT testing, servicing and repairs for all makes and models.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Your Local Garage Since 2010</h1>
            <p className="text-xl text-gray-200 leading-relaxed">We are a team of experienced mechanics who believe in honest work and fair prices. No chain-garage runaround, no unnecessary upselling &mdash; just quality car care in the heart of Bermondsey.</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Built on Trust, Not Targets</h2>
              <div className="w-16 h-1 bg-[var(--accent)] mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">Bermondsey Motors was founded in 2010 by two mechanics who were tired of the way big garages operated &mdash; hitting sales targets, pushing unnecessary work, and treating customers like numbers. We set up shop on Tanner Street with a simple promise: do the work that needs doing, charge a fair price, and explain everything in plain English.</p>
              <p className="text-gray-600 mb-6 leading-relaxed">Fifteen years on, that promise has not changed. What started as a two-person operation has grown into a team of five skilled mechanics with a fully equipped workshop and DVSA-approved MOT test centre. Our reputation has been built entirely on word of mouth &mdash; local residents, taxi drivers, delivery companies, and commuters who trust us with their vehicles year after year.</p>
              <p className="text-gray-600 leading-relaxed">We work on everything from runabouts to Range Rovers, and we treat every car the same: with care, attention, and respect. Whether it is a quick brake pad swap or a full engine rebuild, you will always get the same honest service.</p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-4xl font-bold text-[var(--accent)] font-serif">15+</div>
                  <p className="text-gray-600 mt-2 font-medium">Years in Bermondsey</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-4xl font-bold text-[var(--accent)] font-serif">5</div>
                  <p className="text-gray-600 mt-2 font-medium">Expert Mechanics</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-4xl font-bold text-[var(--accent)] font-serif">MOT</div>
                  <p className="text-gray-600 mt-2 font-medium">Approved Centre</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-4xl font-bold text-[var(--accent)] font-serif">4.8</div>
                  <p className="text-gray-600 mt-2 font-medium">Google Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">What We Stand For</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Honesty First</h3>
              <p className="text-gray-600">We will never recommend work your car does not need. If a part has life left in it, we will tell you. If something is urgent, we will explain why. No hidden agendas.</p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Fair Pricing</h3>
              <p className="text-gray-600">We quote before we start and there are no surprises on your bill. Our labour rates are competitive and transparent. We will always show you the old parts we have replaced.</p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Quality Work</h3>
              <p className="text-gray-600">We use OE-equivalent or genuine parts and follow manufacturer specifications. Every job comes with our workmanship guarantee, because we stand behind what we do.</p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Personal Service</h3>
              <p className="text-gray-600">We are not a faceless chain. You will deal with the same people every time. We remember your car, your service history, and what we discussed last time you were in.</p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Reliable Turnaround</h3>
              <p className="text-gray-600">We know you need your car. Most jobs are completed same-day and we will always give you a realistic timeframe upfront. No waiting around for weeks on end.</p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Proudly Local</h3>
              <p className="text-gray-600">We are part of the Bermondsey community. Many of our customers live within walking distance and we are proud to be the garage they recommend to their neighbours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Find Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Right in the Heart of Bermondsey</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our workshop is on Tanner Street, just off Bermondsey Street. We are easy to find whether you are driving, walking or coming by tube. Bermondsey station is a five-minute walk away.</p>
          </div>

          <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-8 lg:p-12 rounded-sm text-white">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Workshop Details</h3>
                <address className="not-italic text-gray-200 mb-6 text-lg">
                  Unit 7, 38 Tanner Street<br />Bermondsey, London SE1 3LD
                </address>
                <div className="space-y-4 text-gray-200">
                  <p><strong className="text-white">Opening Hours:</strong><br />Monday &ndash; Friday: 8am &ndash; 6pm<br />Saturday: 8am &ndash; 1pm<br />Sunday: Closed</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Getting Here</h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Bermondsey station &mdash; 5 minute walk</li>
                  <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>London Bridge station &mdash; 8 minute walk</li>
                  <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Borough station &mdash; 10 minute walk</li>
                  <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Street parking available on Tanner Street</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Book In?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Whether it is an MOT, a service or something else, give us a call or book online. We look forward to looking after your car.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/car-mechanic-bermondsey/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors text-lg">Book Online</Link>
            <a href="tel:02079468810" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors text-lg">Call 020 7946 8810</a>
          </div>
        </div>
      </section>
    </>
  );
}
