import Link from 'next/link';

export default function MOT() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-garage-charcoal to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-garage-red px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Book Your MOT Today
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">MOT Testing in Central London</h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive MOT testing for cars, vans, and motorcycles. While-you-wait service available.
                Free re-test if required within 10 working days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:02072786375"
                  className="inline-block bg-garage-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-center"
                >
                  Call to Book: 020 7278 6375
                </a>
                <Link
                  href="/contact"
                  className="inline-block bg-white hover:bg-gray-100 text-garage-charcoal font-bold py-4 px-8 rounded-lg transition-colors text-center"
                >
                  Email Enquiry
                </Link>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-6">MOT Checklist</h3>
              <ul className="space-y-3">
                {[
                  'Lights, indicators & reflectors',
                  'Steering & suspension',
                  'Brakes & brake lines',
                  'Tyres & wheels',
                  'Seat belts & airbags',
                  'Exhaust system & emissions',
                  'Fuel system',
                  'Body & structure',
                  'Windscreen & mirrors',
                  'Registration plates',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-garage-red mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What is MOT */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-garage-charcoal mb-6">What is an MOT Test?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              An MOT (Ministry of Transport) test is an annual inspection required by law for most vehicles over 3 years old.
              It checks that your vehicle meets road safety and environmental standards. Your vehicle must have a valid MOT
              certificate to be driven on public roads.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-garage-red bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-garage-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-3">When?</h3>
              <p className="text-gray-600">First MOT at 3 years old, then annually. Book up to one month before expiry.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-garage-red bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-garage-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-3">What's Checked?</h3>
              <p className="text-gray-600">Safety critical items, emissions, lights, tyres, brakes, and more.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-garage-red bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-garage-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-3">Cost?</h3>
              <p className="text-gray-600">Competitive pricing. Call for a quote. Payment accepted on the day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our MOT Service */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-garage-charcoal mb-4">Our MOT Service</h2>
            <p className="text-xl text-gray-600">Why choose Clerkenwell Motors for your MOT?</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-start">
                <div className="bg-garage-red p-3 rounded-lg mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-garage-charcoal mb-3">While You Wait</h3>
                  <p className="text-gray-600">
                    No need to leave your vehicle. We offer while-you-wait MOT testing so you can get back on
                    the road quickly. Comfortable waiting area available.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-start">
                <div className="bg-garage-red p-3 rounded-lg mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-garage-charcoal mb-3">Free Re-Test</h3>
                  <p className="text-gray-600">
                    If your vehicle fails, we offer a free partial re-test when you have the work done with us
                    and return within 10 working days.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-start">
                <div className="bg-garage-red p-3 rounded-lg mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-garage-charcoal mb-3">Detailed Report</h3>
                  <p className="text-gray-600">
                    Receive a comprehensive report of all items checked, including advisories for items that may
                    need attention in the future.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-start">
                <div className="bg-garage-red p-3 rounded-lg mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-garage-charcoal mb-3">Repairs On-Site</h3>
                  <p className="text-gray-600">
                    If repairs are needed, our expert technicians can carry them out immediately and re-test
                    your vehicle the same day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-garage-charcoal mb-4">MOT for All Vehicles</h2>
            <p className="text-xl text-gray-600">We test cars, vans, and motorcycles</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-garage-red bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-garage-red" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-3">Cars & Vans</h3>
              <p className="text-gray-600 mb-4">
                Class 4 (cars), Class 5 (13-16 seater minibuses), and Class 7 (goods vehicles up to 3,500kg)
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-garage-red bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-garage-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-3">Motorcycles</h3>
              <p className="text-gray-600 mb-4">
                Class 1 (motorcycles up to 200cc) and Class 2 (motorcycles over 200cc with or without sidecar)
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-garage-red bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-garage-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-3">Electric Vehicles</h3>
              <p className="text-gray-600 mb-4">
                We test all electric and hybrid vehicles, with specialist knowledge of EV systems and safety
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-garage-red to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Book Your MOT Today</h2>
          <p className="text-xl mb-8 text-red-100">Same-day appointments often available</p>
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
              Email Enquiry
            </Link>
          </div>
          <div className="mt-8 space-y-2">
            <p className="text-red-100">
              <strong>Location:</strong> 14 Warner Street, London EC1R 5HA
            </p>
            <p className="text-red-100">
              <strong>Hours:</strong> Mon-Fri 7:30-18:30 | Sat 9:00-14:00 (by appointment)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
