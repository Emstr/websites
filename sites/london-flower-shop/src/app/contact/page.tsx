import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-florist-rose-light via-florist-cream to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-florist-rose/10 text-florist-rose-dark px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Get in Touch
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Visit Our <span className="text-florist-rose-dark">Family Shop</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We'd love to see you! Pop in for a chat, browse our flowers, or give us a call.
              Our friendly family team is always ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Phone */}
              <div className="bg-florist-sage-light rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-florist-sage to-florist-sage-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Call Us</h3>
                <a href="tel:02074071666" className="text-2xl font-bold text-florist-sage-dark hover:text-florist-sage transition-colors">
                  020 7407 1666
                </a>
                <p className="text-gray-600 mt-2 text-sm">Monday - Saturday</p>
              </div>

              {/* Address */}
              <div className="bg-florist-rose-light rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-florist-rose to-florist-rose-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Visit Us</h3>
                <p className="text-gray-700 font-medium">
                  158 Long Lane<br />
                  Southwark<br />
                  London SE1 4BS
                </p>
              </div>

              {/* Opening Hours */}
              <div className="bg-florist-sage-light rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-florist-sage to-florist-sage-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Opening Hours</h3>
                <div className="text-gray-700 space-y-1 text-sm">
                  <p><strong>Mon - Sat:</strong> 9:00am - 5:30pm</p>
                  <p><strong>Sunday:</strong> Closed</p>
                  <p className="text-xs text-gray-500 mt-2">Call for special arrangements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-florist-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Find Us on Long Lane</h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Placeholder for map - in a real implementation, you'd use Google Maps embed */}
              <div className="aspect-video bg-gradient-to-br from-florist-sage-light to-florist-rose-light flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 text-florist-rose-dark mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">158 Long Lane, Southwark</h3>
                  <p className="text-gray-600 mb-4">London SE1 4BS</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=158+Long+Lane+London+SE1+4BS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-florist-rose-dark text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Reach Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How to Reach Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-florist-rose-light rounded-xl p-8">
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-florist-rose-dark flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">By Tube</h3>
                    <p className="text-gray-600">
                      <strong>Borough Station</strong> (Northern Line) - 5 minute walk<br />
                      <strong>Southwark Station</strong> (Jubilee Line) - 8 minute walk
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-florist-sage-light rounded-xl p-8">
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-florist-sage-dark flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">By Bus</h3>
                    <p className="text-gray-600">
                      Multiple bus routes serve Long Lane including routes <strong>35, 40, 133, 343</strong> and more.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-florist-sage-light rounded-xl p-8">
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-florist-sage-dark flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Parking</h3>
                    <p className="text-gray-600">
                      Limited street parking available. Pay & Display bays nearby. Check signage for restrictions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-florist-rose-light rounded-xl p-8">
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-florist-rose-dark flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Walking Distance</h3>
                    <p className="text-gray-600">
                      Easy walk from Elephant & Castle, Newington, and Borough Market area. We're on Long Lane between Borough High Street and Tower Bridge Road.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-20 bg-florist-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Questions? Just Ask!</h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you need advice on flowers, want to discuss an event, or just fancy a chat,
              we're here for you. Our family team loves helping customers find the perfect flowers.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Best Ways to Contact Us:</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-florist-sage-dark flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Phone (Fastest)</p>
                    <p className="text-gray-600">Call us on <a href="tel:02074071666" className="text-florist-rose-dark font-semibold hover:underline">020 7407 1666</a> - we're always happy to chat!</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-florist-sage-dark flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Visit In Person</p>
                    <p className="text-gray-600">Pop into our shop at 158 Long Lane - we love meeting customers face to face!</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-florist-sage-dark flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">For Orders</p>
                    <p className="text-gray-600">Same-day delivery available - order before 2pm Monday to Saturday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-florist-rose-dark to-florist-rose text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">We'd Love to Hear From You</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether you're planning a wedding, need same-day delivery, or just want to brighten someone's day -
            get in touch with our friendly family team today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02074071666"
              className="bg-white text-florist-rose-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call: 020 7407 1666</span>
            </a>
            <Link
              href="/shop"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-florist-rose-dark transition-all shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <span>Browse Our Flowers</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
