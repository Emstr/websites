export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-garage-charcoal to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Get in touch with our team today. We're here to help with all your automotive needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-garage-charcoal mb-8">Get In Touch</h2>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-garage-red p-4 rounded-lg mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-garage-charcoal mb-2">Phone</h3>
                    <a href="tel:02072786375" className="text-garage-red text-xl font-semibold hover:underline">
                      020 7278 6375
                    </a>
                    <p className="text-gray-600 mt-1">Call us during opening hours for bookings and enquiries</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-garage-red p-4 rounded-lg mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-garage-charcoal mb-2">Email</h3>
                    <a href="mailto:info@clerkenwellmotors.co.uk" className="text-garage-red text-xl font-semibold hover:underline break-all">
                      info@clerkenwellmotors.co.uk
                    </a>
                    <p className="text-gray-600 mt-1">Send us an email anytime, we'll respond promptly</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="bg-garage-red p-4 rounded-lg mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-garage-charcoal mb-2">Address</h3>
                    <p className="text-garage-red text-xl font-semibold">14 Warner Street</p>
                    <p className="text-garage-red text-xl font-semibold">London EC1R 5HA</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=14+Warner+Street+London+EC1R+5HA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-garage-red hover:underline font-semibold"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="mt-12 bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-garage-charcoal mb-6 flex items-center">
                  <svg className="w-6 h-6 text-garage-red mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Opening Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">Monday</span>
                    <span className="text-garage-charcoal font-semibold">7:30 - 18:30</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">Tuesday</span>
                    <span className="text-garage-charcoal font-semibold">7:30 - 18:30</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">Wednesday</span>
                    <span className="text-garage-charcoal font-semibold">7:30 - 18:30</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">Thursday</span>
                    <span className="text-garage-charcoal font-semibold">7:30 - 18:30</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">Friday</span>
                    <span className="text-garage-charcoal font-semibold">7:30 - 18:30</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">Saturday</span>
                    <span className="text-garage-charcoal font-semibold">9:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700 font-medium">Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 italic">
                  * Saturday appointments by arrangement - please call ahead
                </p>
              </div>
            </div>

            {/* Map & Directions */}
            <div>
              <h2 className="text-3xl font-bold text-garage-charcoal mb-8">Find Us</h2>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl overflow-hidden mb-8" style={{ height: '400px' }}>
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-garage-charcoal to-gray-700 text-white">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto mb-4 text-garage-red" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-lg font-semibold mb-2">14 Warner Street</p>
                    <p className="text-gray-300">London EC1R 5HA</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=14+Warner+Street+London+EC1R+5HA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 bg-garage-red hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Transport Links */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-garage-charcoal mb-6">How to Find Us</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-garage-charcoal mb-2 flex items-center">
                      <svg className="w-5 h-5 text-garage-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v.878A2.25 2.25 0 0110.75 16h-1.5A2.25 2.25 0 017 13.878V13a2 2 0 00-2-2v-.025c-.163-.512-.335-1.013-.668-1.948z" clipRule="evenodd" />
                      </svg>
                      Underground
                    </h4>
                    <p className="text-gray-700 ml-7">
                      <strong>Farringdon</strong> (5 min walk) - Circle, Hammersmith & City, Metropolitan lines<br />
                      <strong>Angel</strong> (10 min walk) - Northern line
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-garage-charcoal mb-2 flex items-center">
                      <svg className="w-5 h-5 text-garage-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                      </svg>
                      Bus Routes
                    </h4>
                    <p className="text-gray-700 ml-7">
                      Multiple bus routes serve the area including 19, 38, 341, and night buses
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-garage-charcoal mb-2 flex items-center">
                      <svg className="w-5 h-5 text-garage-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      Parking
                    </h4>
                    <p className="text-gray-700 ml-7">
                      Street parking available nearby. Please check signage for restrictions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-garage-charcoal mb-4">
              Areas We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Conveniently located to serve Central London
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Clerkenwell',
              'Islington',
              'Camden',
              'The City',
              'King\'s Cross',
              'Angel',
              'Farringdon',
              'Bloomsbury',
              'Finsbury',
              'Shoreditch',
              'Barbican',
              'St Pancras',
              'Holborn',
              'Pentonville',
              'Smithfield',
              'Hatton Garden',
            ].map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                <span className="text-garage-charcoal font-semibold">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-garage-charcoal mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-garage-charcoal mb-2">Do I need to book an appointment?</h3>
              <p className="text-gray-700">
                We recommend booking in advance, especially for MOTs and major services. However, we do accept walk-ins
                subject to availability. Saturday appointments must be arranged in advance.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-garage-charcoal mb-2">How long does an MOT take?</h3>
              <p className="text-gray-700">
                Most MOT tests take around 45 minutes to an hour. We offer a while-you-wait service, or you can drop
                your vehicle off and collect it later the same day.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-garage-charcoal mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-700">
                We accept cash, all major credit and debit cards, and bank transfers. Payment is taken when you collect
                your vehicle.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-garage-charcoal mb-2">Do you provide courtesy cars?</h3>
              <p className="text-gray-700">
                We don't have courtesy cars, but we're well connected by public transport. We're a short walk from
                Farringdon and Angel stations.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-garage-charcoal mb-2">Can you service electric vehicles?</h3>
              <p className="text-gray-700">
                Yes! We have the expertise and equipment to service and repair electric and hybrid vehicles, as well as
                traditional petrol and diesel cars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-garage-red to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Book?</h2>
          <p className="text-xl mb-8 text-red-100">
            Contact us today to schedule your service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02072786375"
              className="inline-block bg-white hover:bg-gray-100 text-garage-red font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Call 020 7278 6375
            </a>
            <a
              href="mailto:info@clerkenwellmotors.co.uk"
              className="inline-block bg-garage-charcoal hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="mt-8 space-y-2">
            <p className="text-red-100">
              <strong>Open:</strong> Mon-Fri 7:30-18:30 | Sat 9:00-14:00 (by appointment)
            </p>
            <p className="text-red-100">
              14 Warner Street, London EC1R 5HA
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
