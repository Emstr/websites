import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book an Appointment | Contact Hirschfelds',
  description:
    'Book your appointment at Hirschfelds Jewellery Repairs. By appointment only. Mon-Fri 11am-4pm. Call 020 7405 1536. Hatton Garden, London.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="heritage-gradient text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-gold mb-6">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">By Appointment Only</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Visit Our Workshop
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Experience 150 years of craftsmanship excellence in the heart of Hatton Garden
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Info */}
            <div>
              <div className="mb-8">
                <div className="inline-block mb-6">
                  <svg className="w-16 h-16 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-navy mb-4">
                  Book Your Appointment
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  We operate exclusively by appointment to ensure each client receives our undivided attention and the time needed to discuss your requirements in detail.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  This bespoke approach allows our master craftsmen to fully understand your needs and provide the exceptional service that has defined Hirschfelds for 150 years.
                </p>
              </div>

              {/* Why Appointment Only */}
              <div className="bg-cream border-2 border-gold/20 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-navy mb-6">Why Appointment Only?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700">Dedicated one-on-one consultation with master craftsmen</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700">Unhurried discussion of your jewellery needs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700">Detailed assessment and expert recommendations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700">Personalized service in a calm, professional environment</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700">Guaranteed availability of the right expertise for your piece</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Card */}
            <div>
              <div className="bg-navy text-white rounded-lg p-10 sticky top-24">
                <div className="mb-8">
                  <svg className="w-16 h-16 text-gold mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                  <h3 className="text-3xl font-bold text-center mb-2">Hirschfelds</h3>
                  <p className="text-center text-gold">Since 1875</p>
                </div>

                <div className="space-y-6">
                  {/* Phone */}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-6 h-6 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <h4 className="font-semibold text-lg">Phone</h4>
                    </div>
                    <a
                      href="tel:02074051536"
                      className="text-xl text-gray-200 hover:text-gold transition-colors block ml-9"
                    >
                      020 7405 1536
                    </a>
                    <p className="text-sm text-gray-400 ml-9 mt-1">Call to book your appointment</p>
                  </div>

                  {/* Location */}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-6 h-6 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <h4 className="font-semibold text-lg">Location</h4>
                    </div>
                    <div className="ml-9">
                      <p className="text-gray-200">Hatton Garden</p>
                      <p className="text-gray-200">London, EC1N</p>
                      <p className="text-sm text-gold mt-2">London's Historic Jewellery Quarter</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-6 h-6 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h4 className="font-semibold text-lg">Opening Hours</h4>
                    </div>
                    <div className="ml-9">
                      <p className="text-gray-200">Monday - Friday</p>
                      <p className="text-xl text-gold font-semibold">11:00am - 4:00pm</p>
                      <p className="text-sm text-gold-light mt-2">By Appointment Only</p>
                    </div>
                  </div>

                  {/* Transport */}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-6 h-6 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <h4 className="font-semibold text-lg">Getting Here</h4>
                    </div>
                    <div className="ml-9 text-gray-200 text-sm">
                      <p>Farringdon Station (5 min walk)</p>
                      <p>Chancery Lane Station (7 min walk)</p>
                      <p className="text-gold-light mt-2">Excellent transport links</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <a
                    href="tel:02074051536"
                    className="block w-full bg-gold hover:bg-gold-light text-white text-center px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Call to Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your visit to Hirschfelds
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-gold/20 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-navy text-gold rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Book</h3>
              <p className="text-gray-600">
                Call us to schedule your appointment at a time that suits you.
              </p>
            </div>
            <div className="bg-white border-2 border-gold/20 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-navy text-gold rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Consult</h3>
              <p className="text-gray-600">
                Meet with our master craftsmen to discuss your jewellery needs.
              </p>
            </div>
            <div className="bg-white border-2 border-gold/20 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-navy text-gold rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Assess</h3>
              <p className="text-gray-600">
                Detailed evaluation and expert recommendations for your piece.
              </p>
            </div>
            <div className="bg-white border-2 border-gold/20 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-navy text-gold rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Proceed</h3>
              <p className="text-gray-600">
                Once approved, our craftsmen begin working their magic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder / Additional Info */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-navy text-white rounded-lg p-12 text-center">
            <svg className="w-16 h-16 text-gold mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Us in Hatton Garden
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our workshop is located in the heart of London's historic jewellery quarter, easily accessible by public transport.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:02074051536"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-white px-8 py-3 rounded-md font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                020 7405 1536
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
