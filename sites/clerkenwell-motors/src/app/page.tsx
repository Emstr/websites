import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-garage-charcoal via-gray-800 to-garage-charcoal text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-garage-red px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Est. 1993 - Over 30 Years of Excellence
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Central London's Trusted Independent Garage
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Family-owned garage specializing in MOT, servicing, and repairs for all vehicles. RAC & AA Approved, Which? Trusted Trader.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-garage-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-center"
                >
                  Book Now
                </Link>
                <a
                  href="tel:02072786375"
                  className="inline-block bg-white hover:bg-gray-100 text-garage-charcoal font-bold py-4 px-8 rounded-lg transition-colors text-center"
                >
                  Call 020 7278 6375
                </a>
              </div>
              <div className="mt-8 flex items-center space-x-2">
                <div className="flex items-center space-x-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white font-semibold text-lg">4.7/5</span>
                <span className="text-gray-400">| 111 Reviews</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-20">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-garage-red p-3 rounded-lg">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">RAC & AA Approved</h3>
                      <p className="text-gray-300 text-sm">Certified by the UK's leading motoring organizations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-garage-red p-3 rounded-lg">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">All Vehicle Types</h3>
                      <p className="text-gray-300 text-sm">Cars, vans, motorcycles - modern, classic & electric</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-garage-red p-3 rounded-lg">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Central London</h3>
                      <p className="text-gray-300 text-sm">Convenient location serving Islington, Camden & The City</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-garage-charcoal mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Complete automotive care under one roof</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* MOT Testing */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-garage-red">
              <div className="bg-garage-red bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-garage-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-3">MOT Testing</h3>
              <p className="text-gray-600 mb-4">Comprehensive MOT tests while you wait. Cars, vans, and motorcycles.</p>
              <Link href="/mot" className="text-garage-red font-semibold hover:underline">Learn More →</Link>
            </div>

            {/* Servicing */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-garage-red">
              <div className="bg-garage-red bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-garage-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-3">Full Servicing</h3>
              <p className="text-gray-600 mb-4">Regular maintenance to keep your vehicle running at its best.</p>
              <Link href="/services" className="text-garage-red font-semibold hover:underline">Learn More →</Link>
            </div>

            {/* Repairs */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-garage-red">
              <div className="bg-garage-red bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-garage-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-3">Diagnostics & Repairs</h3>
              <p className="text-gray-600 mb-4">Expert diagnosis and repair of all mechanical and electrical issues.</p>
              <Link href="/services" className="text-garage-red font-semibold hover:underline">Learn More →</Link>
            </div>

            {/* Tyres */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-garage-red">
              <div className="bg-garage-red bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-garage-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v.878A2.25 2.25 0 0110.75 16h-1.5A2.25 2.25 0 017 13.878V13a2 2 0 00-2-2v-.025c-.163-.512-.335-1.013-.668-1.948z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-3">Tyres & Balancing</h3>
              <p className="text-gray-600 mb-4">Premium tyres, fitting, balancing, and alignment services.</p>
              <Link href="/services" className="text-garage-red font-semibold hover:underline">Learn More →</Link>
            </div>

            {/* Body Repairs */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-garage-red">
              <div className="bg-garage-red bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-garage-red" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-3">Body Repairs</h3>
              <p className="text-gray-600 mb-4">Professional bodywork and cosmetic repairs to restore your vehicle.</p>
              <Link href="/services" className="text-garage-red font-semibold hover:underline">Learn More →</Link>
            </div>

            {/* Performance */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-garage-red">
              <div className="bg-garage-red bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-garage-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-3">Performance Tuning</h3>
              <p className="text-gray-600 mb-4">ECU remapping and performance upgrades for enhanced power.</p>
              <Link href="/services" className="text-garage-red font-semibold hover:underline">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-garage-charcoal mb-4">Why Choose Clerkenwell Motors?</h2>
            <p className="text-xl text-gray-600">Over three decades of trusted service in Central London</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-garage-red bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-garage-red" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-2">30+ Years Experience</h3>
              <p className="text-gray-600">Family-owned and operated since 1993</p>
            </div>
            <div className="text-center">
              <div className="bg-garage-red bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-garage-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-2">Fully Accredited</h3>
              <p className="text-gray-600">RAC, AA, MIPOC & Which? Trusted Trader</p>
            </div>
            <div className="text-center">
              <div className="bg-garage-red bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-garage-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-2">Central Location</h3>
              <p className="text-gray-600">Easy access from Islington, Camden & The City</p>
            </div>
            <div className="text-center">
              <div className="bg-garage-red bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="flex flex-col items-center">
                  <div className="flex items-center space-x-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-garage-red font-bold text-lg">4.7/5</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-2">Highly Rated</h3>
              <p className="text-gray-600">111 five-star Google reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-garage-red to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Book Your Service?</h2>
          <p className="text-xl mb-8 text-red-100">Call us today or visit our Central London garage</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02072786375"
              className="inline-block bg-white hover:bg-gray-100 text-garage-red font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Call 020 7278 6375
            </a>
            <Link
              href="/contact"
              className="inline-block bg-garage-charcoal hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Get Directions
            </Link>
          </div>
          <p className="mt-6 text-red-100">
            <strong>Open:</strong> Mon-Fri 7:30-18:30 | Sat 9:00-14:00 (by appointment)
          </p>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-garage-charcoal mb-4">Serving Central London</h3>
          <p className="text-gray-600 text-lg">
            Islington • Camden • The City • Clerkenwell • King's Cross • Angel • Farringdon
          </p>
        </div>
      </section>
    </div>
  );
}
