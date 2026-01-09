import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Visit Orhan London Tailoring in Shoreditch. 25a Pitfield Street, London N1 6HB. Near Old Street Station. Call 020 7250 3569. Mon-Fri 9am-6pm, Sat 10:30am-3pm. Free consultations.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary text-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-gold/20 rounded-full mb-6">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Visit Our Studio
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed">
              Located in the heart of Shoreditch, near Old Street Station
            </p>
            <p className="text-lg text-gray-300">
              Free consultations available for all services. Walk-ins welcome or call ahead to book a specific time.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">
                Contact Details
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center border-2 border-gold">
                    <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Address</h3>
                    <p className="text-gray-700 leading-relaxed">
                      25a Pitfield Street<br />
                      Shoreditch<br />
                      London N1 6HB
                    </p>
                    <p className="text-sm text-gold mt-2">Near Old Street Station</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center border-2 border-gold">
                    <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Phone</h3>
                    <a href="tel:02072503569" className="text-gray-700 hover:text-gold transition-colors text-lg">
                      020 7250 3569
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Call during opening hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center border-2 border-gold">
                    <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Opening Hours</h3>
                    <div className="space-y-1 text-gray-700">
                      <p><span className="font-semibold">Monday - Friday:</span> 9:00am - 6:00pm</p>
                      <p><span className="font-semibold">Saturday:</span> 10:30am - 3:00pm</p>
                      <p><span className="font-semibold">Sunday:</span> Closed</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Walk-ins welcome or call to book</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-cream border-2 border-gold/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Before You Visit</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">All consultations are free - no obligation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Walk-ins welcome, but calling ahead ensures availability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Bring any inspiration photos or ideas you have</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">For alterations, bring the garment you need adjusted</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Services Quick Links */}
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">
                What Can We Help You With?
              </h2>
              <div className="space-y-4">
                <Link
                  href="/bespoke-suits"
                  className="block bg-cream border-2 border-gold/20 rounded-lg p-6 hover:border-gold hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-gold transition-colors">
                        Bespoke Suits
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Hand-crafted suits tailored to your exact specifications
                      </p>
                    </div>
                    <svg className="w-6 h-6 text-gold flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>

                <Link
                  href="/occasionwear"
                  className="block bg-cream border-2 border-gold/20 rounded-lg p-6 hover:border-gold hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-gold transition-colors">
                        Occasionwear & Weddingwear
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Stunning dresses and formal attire for all genders
                      </p>
                    </div>
                    <svg className="w-6 h-6 text-gold flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>

                <Link
                  href="/alterations"
                  className="block bg-cream border-2 border-gold/20 rounded-lg p-6 hover:border-gold hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-gold transition-colors">
                        Alterations & Repairs
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Expert alterations with free consultations
                      </p>
                    </div>
                    <svg className="w-6 h-6 text-gold flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>

                <Link
                  href="/about"
                  className="block bg-cream border-2 border-gold/20 rounded-lg p-6 hover:border-gold hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-gold transition-colors">
                        About Orhan
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Learn about our master tailor's prestigious heritage
                      </p>
                    </div>
                    <svg className="w-6 h-6 text-gold flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>

              <div className="mt-8 bg-gradient-to-br from-primary to-secondary text-cream p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-gold">First Time Visiting?</h3>
                <p className="leading-relaxed mb-6">
                  Don't be nervous! We pride ourselves on creating a welcoming, relaxed atmosphere. Whether you're commissioning your first bespoke suit or bringing in clothes for alterations, Orhan and Denise will make you feel at ease while providing expert guidance.
                </p>
                <div className="flex items-center gap-2 text-gold">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">All genders welcome</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section id="directions" className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              How to Find Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're easy to reach by public transport or car
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-gold/20 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gold">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">By Tube</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong>Old Street Station</strong> (Northern Line) - 5 minute walk<br />
                <strong>Shoreditch High Street</strong> (Overground) - 8 minute walk
              </p>
            </div>

            <div className="bg-white border-2 border-gold/20 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gold">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">By Bus</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Multiple bus routes serve Old Street<br />
                <strong>Routes:</strong> 43, 55, 76, 135, 205, 214, 243
              </p>
            </div>

            <div className="bg-white border-2 border-gold/20 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gold">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">By Car</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                On-street parking available in the area (check restrictions)<br />
                <strong>Postcode:</strong> N1 6HB
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-white border-2 border-gold/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-4 text-center">Walking Directions from Old Street Station</h3>
            <ol className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-primary font-bold text-sm">1</span>
                <span>Exit Old Street Station (Exit 1 - Old Street/City Road)</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-primary font-bold text-sm">2</span>
                <span>Head north on Old Street towards Pitfield Street</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-primary font-bold text-sm">3</span>
                <span>Turn left onto Pitfield Street</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-primary font-bold text-sm">4</span>
                <span>We're at number 25a on the left - approximately 5 minute walk</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary text-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Visit?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Come and meet Orhan and Denise at our Shoreditch studio. Whether you're looking for a bespoke suit, an occasion dress, or expert alterations, we're here to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:02072503569"
              className="inline-block bg-gold hover:bg-gold-light text-primary px-8 py-4 rounded-md font-semibold text-lg transition-all shadow-lg transform hover:scale-105"
            >
              Call 020 7250 3569
            </a>
            <Link
              href="/"
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors border-2 border-gold"
            >
              Back to Home
            </Link>
          </div>
          <div className="mt-8 text-sm text-gray-300">
            <p>Mon-Fri: 9am-6pm | Sat: 10:30am-3pm</p>
            <p className="mt-2">25a Pitfield Street, Shoreditch, London N1 6HB</p>
          </div>
        </div>
      </section>
    </>
  );
}
