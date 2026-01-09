import Link from 'next/link';

export default function Delivery() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-florist-sage-light via-white to-florist-cream py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-florist-sage/10 text-florist-sage-dark px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Fast & Reliable
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-florist-sage-dark">Same-Day Delivery</span> Across Southwark
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Order before 2pm for same-day delivery to Southwark, Elephant & Castle, Newington, and Waterloo.
              Fresh flowers delivered with care by our family.
            </p>
            <a
              href="tel:02074071666"
              className="inline-flex items-center space-x-2 bg-florist-sage-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Order Now: 020 7407 1666</span>
            </a>
          </div>
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Delivery Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { area: 'Southwark', postcode: 'SE1, SE5, SE17' },
                { area: 'Elephant & Castle', postcode: 'SE1, SE11, SE17' },
                { area: 'Newington', postcode: 'SE1, SE11' },
                { area: 'Waterloo', postcode: 'SE1, SE11' },
              ].map((location, idx) => (
                <div key={idx} className="bg-florist-sage-light rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-florist-sage to-florist-sage-dark rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{location.area}</h3>
                  <p className="text-gray-600 text-sm">{location.postcode}</p>
                </div>
              ))}
            </div>
            <div className="bg-florist-rose-light rounded-2xl p-8 text-center">
              <p className="text-lg text-gray-700 mb-4">
                <strong>Not sure if we deliver to your area?</strong>
              </p>
              <p className="text-gray-600 mb-6">
                Give us a call on <a href="tel:02074071666" className="text-florist-rose-dark font-semibold hover:underline">020 7407 1666</a> and we'll let you know.
                We may be able to deliver to surrounding areas too!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-florist-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How Same-Day Delivery Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-florist-rose-dark text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Order Before 2pm</h3>
                <p className="text-gray-600 text-center">
                  Call us on <a href="tel:02074071666" className="text-florist-rose-dark font-semibold">020 7407 1666</a> before 2pm and let us know what you'd like
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-florist-sage-dark text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">We Create</h3>
                <p className="text-gray-600 text-center">
                  Our family team hand-picks the freshest flowers and creates your beautiful arrangement
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-florist-rose-dark text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Same-Day Delivery</h3>
                <p className="text-gray-600 text-center">
                  We deliver your flowers with care the same day to your chosen address
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Delivery Information</h2>
            <div className="space-y-6">
              <div className="bg-florist-sage-light rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-florist-sage-dark flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Same-Day Delivery</h3>
                    <p className="text-gray-600">
                      Order before 2pm for same-day delivery Monday to Saturday. Perfect for last-minute surprises or urgent orders!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-florist-rose-light rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-florist-rose-dark flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Delivery Times</h3>
                    <p className="text-gray-600">
                      We deliver throughout the day. If you need delivery at a specific time, please let us know when ordering and we'll do our best to accommodate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-florist-sage-light rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-florist-sage-dark flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Delivery Charges</h3>
                    <p className="text-gray-600">
                      Competitive delivery charges apply depending on your location. We'll confirm the total cost when you place your order.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-florist-rose-light rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-florist-rose-dark flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Care & Handling</h3>
                    <p className="text-gray-600">
                      All flowers are delivered with care. We include care instructions with every bouquet to help your flowers last longer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-florist-sage-light rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-florist-sage-dark flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Special Requests</h3>
                    <p className="text-gray-600">
                      Need a message card? Specific delivery instructions? Just let us know! We're happy to accommodate special requests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Option */}
      <section className="py-20 bg-florist-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-florist-rose to-florist-sage rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Prefer to Collect?</h2>
            <p className="text-lg text-gray-600 mb-6">
              You're welcome to visit our shop and collect your order! Located at 158 Long Lane, Southwark, London SE1 4BS.
              Give us a call to place your order and we'll have it ready for you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-florist-rose-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Find Our Shop</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-florist-sage-dark to-florist-sage text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Call us before 2pm for same-day delivery across Southwark. Our friendly family team is ready to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02074071666"
              className="bg-white text-florist-sage-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call: 020 7407 1666</span>
            </a>
            <Link
              href="/shop"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-florist-sage-dark transition-all shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <span>Browse Products</span>
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
