export const metadata = {
  title: 'Contact Us | E8 Dental Care Hackney',
  description: 'Visit E8 Dental Care at 380A Mare Street, Hackney. Short walk from Hackney Central Overground. Call 020 8985 4547 to book your appointment.',
};

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dental-light via-white to-dental-soft py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We'd love to hear from you. Visit us in Hackney or get in touch by phone or email.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Phone */}
              <div className="bg-gradient-to-br from-dental-teal to-dental-sky rounded-2xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <a href="tel:02089854547" className="text-2xl font-bold hover:underline">
                  020 8985 4547
                </a>
                <p className="text-sm mt-2 opacity-90">Mon-Fri: 9am-6pm, Sat: 9am-2pm</p>
              </div>

              {/* Email */}
              <div className="bg-gradient-to-br from-dental-sky to-dental-teal rounded-2xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a href="mailto:info@e8dentalcare.co.uk" className="text-lg font-bold hover:underline break-all">
                  info@e8dentalcare.co.uk
                </a>
                <p className="text-sm mt-2 opacity-90">We'll respond within 24 hours</p>
              </div>

              {/* Address */}
              <div className="bg-gradient-to-br from-dental-teal to-dental-sky rounded-2xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-lg font-bold">380A Mare Street</p>
                <p className="text-lg font-bold">Hackney, London</p>
                <p className="text-lg font-bold">E8 1HR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Directions */}
      <section className="py-20 bg-dental-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Map Placeholder */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us</h2>
                <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg h-96 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-gray-600 font-semibold">380A Mare Street, Hackney, London E8 1HR</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=380A+Mare+Street+Hackney+London+E8+1HR"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 bg-dental-teal text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Directions */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Find Us</h2>
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-dental-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-dental-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">By Train (Overground)</h3>
                        <p className="text-gray-600">
                          Short walk from <span className="font-semibold text-dental-teal">Hackney Central Overground</span> station.
                          Exit the station and head towards Mare Street. We're located on vibrant Narrow Way, just a few minutes away.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-dental-sky/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-dental-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">By Bus</h3>
                        <p className="text-gray-600">
                          Multiple bus routes serve Mare Street including <span className="font-semibold">30, 38, 55, 106, 236, 242, 277, D6, N38, N277</span>.
                          Stop on Mare Street very close to the practice.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-dental-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-dental-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">By Car</h3>
                        <p className="text-gray-600">
                          Street parking available on Mare Street and surrounding roads. Please check parking restrictions and payment requirements.
                          Postcode for sat-nav: <span className="font-semibold text-dental-teal">E8 1HR</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Opening Hours</h2>
            <div className="bg-gradient-to-br from-dental-light to-dental-soft rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-dental-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg font-semibold text-gray-900">Monday</span>
                  </div>
                  <span className="text-dental-teal font-semibold">9:00 AM - 6:00 PM*</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-dental-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg font-semibold text-gray-900">Tuesday</span>
                  </div>
                  <span className="text-dental-teal font-semibold">9:00 AM - 6:00 PM*</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-dental-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg font-semibold text-gray-900">Wednesday</span>
                  </div>
                  <span className="text-dental-teal font-semibold">9:00 AM - 6:00 PM*</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-dental-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg font-semibold text-gray-900">Thursday</span>
                  </div>
                  <span className="text-dental-teal font-semibold">9:00 AM - 6:00 PM*</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-dental-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg font-semibold text-gray-900">Friday</span>
                  </div>
                  <span className="text-dental-teal font-semibold">9:00 AM - 6:00 PM*</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-dental-sky/20 rounded-lg border-2 border-dental-sky">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-dental-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg font-bold text-gray-900">Saturday</span>
                  </div>
                  <span className="text-dental-sky font-bold">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-lg font-semibold text-gray-900">Sunday</span>
                  </div>
                  <span className="text-gray-500 font-semibold">Closed</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg border-2 border-dental-teal/20">
                <p className="text-sm text-gray-600 text-center">
                  * Lunch break: 1:00 PM - 2:00 PM on weekdays
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-dental-teal to-dental-sky text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Visit Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book your appointment today and experience exceptional dental care in the heart of Hackney.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book"
              className="bg-white text-dental-teal px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <span>Book Online</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href="tel:02089854547"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-dental-teal transition-all shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call: 020 8985 4547</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
