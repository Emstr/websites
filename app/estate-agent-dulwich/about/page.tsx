import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Dulwich Estate Agents with Local Expertise",
  description:
    "Learn about Dulwich Property Group - established estate agents in Dulwich, SE21. NAEA Propertymark members with unrivalled local property knowledge.",
  openGraph: {
    title: "About Us | Dulwich Property Group",
    description: "Established estate agents in Dulwich, SE21 with unrivalled local property expertise.",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Your Local Property Experts</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Dulwich Property Group has been helping people buy, sell, let and manage
              property in Dulwich and South East London for over fifteen years.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
                Rooted in Dulwich Since 2010
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Dulwich Property Group was founded with a simple belief: that estate
                agency should be built on genuine local expertise, transparent service
                and exceptional results. We opened our doors on Lordship Lane in 2010
                and have been at the heart of the Dulwich property market ever since.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team doesn&apos;t just work in Dulwich &mdash; we live here. We know the
                best streets, the school catchments, the planning applications and the
                micro-markets that can make a significant difference to property values.
                That knowledge is what sets us apart from the corporate chains.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we are proud to be one of the most recommended estate agents in
                SE21, with a 4.9-star Google rating and hundreds of successful sales and
                lettings to our name. As NAEA Propertymark members, we guarantee the
                highest standards of professional conduct and client care.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">15+</div>
                  <p className="text-gray-600 mt-2 font-medium">Years in Dulwich</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">1,200+</div>
                  <p className="text-gray-600 mt-2 font-medium">Properties Sold</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">98%</div>
                  <p className="text-gray-600 mt-2 font-medium">Asking Price</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">4.9/5</div>
                  <p className="text-gray-600 mt-2 font-medium">Google Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">What Sets Us Apart</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Local Knowledge</h3>
              <p className="text-gray-600">We live and work in Dulwich. Our understanding of every street, school and amenity gives our clients a genuine advantage in this competitive market.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Professional Standards</h3>
              <p className="text-gray-600">NAEA Propertymark membership means client money protection, professional indemnity insurance and adherence to a strict code of conduct.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Transparency</h3>
              <p className="text-gray-600">No hidden fees, no jargon and no pressure. We believe in honest advice and clear communication from valuation through to completion.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Premium Marketing</h3>
              <p className="text-gray-600">Professional photography, drone footage, floor plans and immersive virtual tours ensure your property stands out in a crowded market.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Personal Service</h3>
              <p className="text-gray-600">You will have a dedicated point of contact throughout your journey. We treat every client as an individual, not a number in a database.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Results-Driven</h3>
              <p className="text-gray-600">Our 98% asking-price achievement rate and average 21-day sale time speak for themselves. We deliver results, not just promises.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Location</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Find Us on Lordship Lane</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our office is situated in the heart of East Dulwich on Lordship Lane,
              one of South London&apos;s most vibrant high streets. Pop in for a chat
              about the local market &mdash; the kettle is always on.
            </p>
          </div>
          <div className="bg-gray-50 p-8 lg:p-12 rounded-sm border-t-4 border-accent max-w-2xl mx-auto">
            <address className="not-italic text-gray-700 text-lg mb-4">
              <strong>Dulwich Property Group</strong><br />
              84 Lordship Lane<br />
              Dulwich, London SE22 8HF
            </address>
            <p className="text-gray-600 mb-2"><strong>Opening Hours:</strong></p>
            <p className="text-gray-600">Monday &ndash; Friday: 9:00am &ndash; 6:00pm</p>
            <p className="text-gray-600">Saturday: 10:00am &ndash; 4:00pm</p>
            <p className="text-gray-600 mb-4">Sunday: By appointment</p>
            <p className="text-sm text-gray-500">Nearest station: East Dulwich (overground). Free parking available on surrounding streets.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Discuss Your Property?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a free valuation or pop into our Lordship Lane office to speak with one of our local experts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/estate-agent-dulwich/contact" className="btn-accent">Book Free Valuation</Link>
            <a href="tel:02079462345" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 2345</a>
          </div>
        </div>
      </section>
    </>
  );
}
