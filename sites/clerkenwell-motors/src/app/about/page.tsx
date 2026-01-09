import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-garage-charcoal to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-garage-red px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Family Owned Since 1993
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Clerkenwell Motors</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Over 30 years of trusted automotive expertise in the heart of Central London.
              Your local independent garage with the knowledge and equipment to service all vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-garage-charcoal mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Clerkenwell Motors was established in <strong className="text-garage-red">1993</strong> with a simple mission:
                  to provide honest, professional automotive services to the Central London community.
                </p>
                <p>
                  For over three decades, we've been a family-owned and operated independent garage, serving thousands
                  of satisfied customers across Islington, Camden, and The City. Our longevity is a testament to our
                  commitment to quality workmanship, fair pricing, and exceptional customer service.
                </p>
                <p>
                  Located on Warner Street in the heart of Clerkenwell, we've watched the area transform while
                  maintaining our core values: integrity, expertise, and reliability. We treat every vehicle
                  that enters our workshop with the same care and attention we'd give our own.
                </p>
                <p>
                  Today, Clerkenwell Motors is proud to be recognized as one of Central London's most trusted
                  independent garages, holding prestigious accreditations from the RAC, AA, MIPOC, and Which? Trusted Trader.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-garage-red to-red-800 text-white p-12 rounded-2xl">
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-bold mb-2">30+</div>
                  <div className="text-xl text-red-100">Years of Excellence</div>
                </div>
                <div className="border-t border-red-400 pt-6">
                  <div className="text-5xl font-bold mb-2">1993</div>
                  <div className="text-xl text-red-100">Established</div>
                </div>
                <div className="border-t border-red-400 pt-6">
                  <div className="text-5xl font-bold mb-2">4.7★</div>
                  <div className="text-xl text-red-100">Google Rating (111 reviews)</div>
                </div>
                <div className="border-t border-red-400 pt-6">
                  <div className="text-5xl font-bold mb-2">4</div>
                  <div className="text-xl text-red-100">Major Accreditations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-garage-charcoal mb-4">
              Trusted & Accredited
            </h2>
            <p className="text-xl text-gray-600">
              Recognized by the UK's leading automotive and consumer organizations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-white border-4 border-gray-200 rounded-lg p-6 mb-6 inline-block">
                <div className="text-black font-bold text-3xl">RAC</div>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-3">RAC Approved Garage</h3>
              <p className="text-gray-600 text-sm">
                Meet the RAC's rigorous standards for quality workmanship, customer service, and fair pricing.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-yellow-400 rounded-lg p-6 mb-6 inline-block">
                <div className="text-black font-bold text-3xl">AA</div>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-3">AA Approved Garage</h3>
              <p className="text-gray-600 text-sm">
                Inspected and approved by the AA for quality repairs, competitive pricing, and excellent service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-white border-4 border-gray-200 rounded-lg p-6 mb-6 inline-block">
                <div className="text-black font-bold text-2xl">MIPOC</div>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-3">MIPOC Member</h3>
              <p className="text-gray-600 text-sm">
                Member of the Motor Industry Public Opinion Council, demonstrating our commitment to industry best practices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-green-600 rounded-lg p-6 mb-6 inline-block">
                <div className="text-white font-bold text-2xl">Which?</div>
                <div className="text-xs text-green-100 font-semibold mt-1">TRUSTED TRADER</div>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-3">Which? Trusted Trader</h3>
              <p className="text-gray-600 text-sm">
                Vetted and monitored by Which? to ensure we meet their high standards for trading practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-garage-charcoal mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">What sets Clerkenwell Motors apart</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-garage-red bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-garage-red" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-3">Expert Technicians</h3>
              <p className="text-gray-600">
                Our team has decades of combined experience working on all makes and models, from classic vehicles to the latest electric cars.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-garage-red bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-garage-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">
                No hidden fees or surprise charges. We provide detailed quotes before any work begins and keep you informed throughout.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-garage-red bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-garage-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-3">Quality Parts</h3>
              <p className="text-gray-600">
                We use only quality parts from trusted suppliers and manufacturers, ensuring reliability and longevity.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-garage-red bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-garage-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-3">Central Location</h3>
              <p className="text-gray-600">
                Conveniently located in Clerkenwell with easy access from Islington, Camden, and The City. Public transport nearby.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-garage-red bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-garage-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-3">Flexible Hours</h3>
              <p className="text-gray-600">
                Open Monday to Friday 7:30-18:30, plus Saturday mornings by appointment to fit your schedule.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-garage-red bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-garage-red" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-3">Customer Focused</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We take time to explain repairs and answer your questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-garage-charcoal mb-4">Serving Central London</h2>
            <p className="text-xl text-gray-600">
              Proudly serving the local community for over 30 years
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex flex-wrap justify-center gap-4 text-lg">
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
              ].map((area, index) => (
                <div key={index} className="bg-garage-red bg-opacity-10 px-4 py-2 rounded-lg">
                  <span className="text-garage-charcoal font-semibold">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-garage-red to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience the Difference</h2>
          <p className="text-xl mb-8 text-red-100">
            Join thousands of satisfied customers who trust Clerkenwell Motors
          </p>
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
              Visit Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
