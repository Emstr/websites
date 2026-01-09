import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lettings in Hackney',
  description: 'Professional lettings services for landlords and tenants across Hackney. Expert tenant finding, property marketing, and tenancy management since 1994.',
};

export default function LettingsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f97316] to-[#ea580c] text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Lettings in Hackney
            </h1>
            <p className="text-xl md:text-2xl text-orange-50 mb-8">
              Expert letting services for landlords and tenants. Finding quality matches since 1994.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/valuation"
                className="inline-block bg-white text-[#f97316] px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-xl hover:bg-gray-50"
              >
                Landlord Services
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-[#0f766e] hover:bg-[#0d9488] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
              >
                Tenant Enquiries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For Landlords Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              For Landlords
            </h2>
            <p className="text-xl text-gray-600">
              Professional tenant finding and letting services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#f97316] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tenant Finding</h3>
              <p className="text-gray-600">
                We find quality, vetted tenants for your property. Comprehensive referencing, credit checks, and employment verification.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#f97316] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Marketing</h3>
              <p className="text-gray-600">
                High-quality photography and compelling listings across all major property portals for maximum tenant reach.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#f97316] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tenancy Agreements</h3>
              <p className="text-gray-600">
                Legally compliant AST agreements drafted and executed. Full inventory and check-in services available.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#f97316] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rent Collection</h3>
              <p className="text-gray-600">
                Reliable monthly rent collection with prompt payment to your account. Arrears management if needed.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#f97316] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance & Certificates</h3>
              <p className="text-gray-600">
                We ensure all safety certificates are in place - EPC, gas safety, EICR, and smoke/CO alarms.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#f97316] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deposit Protection</h3>
              <p className="text-gray-600">
                All deposits protected in government-approved schemes with full documentation provided.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Landlord Package Options</h3>
            <p className="text-xl text-orange-50 mb-8">
              Choose the service level that's right for you - from tenant find only to full property management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/property-management"
                className="bg-white text-[#f97316] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Full Management
              </Link>
              <Link
                href="/valuation"
                className="bg-[#0f766e] hover:bg-[#0d9488] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Get Rental Valuation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For Tenants Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              For Tenants
            </h2>
            <p className="text-xl text-gray-600">
              Finding your perfect Hackney home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Offer Tenants</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#f97316] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Wide Property Selection</h4>
                    <p className="text-gray-600">
                      Flats, houses, studios, and maisonettes across all Hackney areas in various price ranges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#f97316] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Speedy Viewings</h4>
                    <p className="text-gray-600">
                      Quick turnaround on viewing requests. We know you need to move fast in the Hackney rental market.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#f97316] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Smooth Application Process</h4>
                    <p className="text-gray-600">
                      Simple, transparent application and referencing process. We guide you through every step.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#f97316] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Responsive Tenancy Support</h4>
                    <p className="text-gray-600">
                      Maintenance issues? Questions about your tenancy? We're here to help throughout your rental.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#f97316] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Fair & Transparent</h4>
                    <p className="text-gray-600">
                      No hidden fees. Clear rental terms. Your deposit protected in government-approved schemes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Looking for a Property?</h3>
              <p className="text-gray-600 mb-6">
                Register your requirements and we'll notify you as soon as suitable properties become available.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[#f97316] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Priority access to new listings
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[#f97316] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Instant email alerts
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[#f97316] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Personalized property matches
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[#f97316] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Expert area advice
                </div>
              </div>

              <Link
                href="/contact"
                className="block w-full bg-[#f97316] hover:bg-[#ea580c] text-center text-white px-6 py-4 rounded-lg font-semibold transition-colors"
              >
                Register Your Requirements
              </Link>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Or call us:</p>
                <p className="text-xl font-semibold text-gray-900">
                  <a href="tel:02072577177" className="hover:text-[#f97316]">020 7257 7177</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Areas */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Rental Properties Across Hackney
            </h2>
            <p className="text-xl text-gray-600">
              From trendy London Fields to leafy Stoke Newington
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Popular Areas</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#f97316] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  London Fields (E8)
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#f97316] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Dalston (E8, N16)
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#f97316] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Victoria Park (E2, E9)
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Family Friendly</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#f97316] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Stoke Newington (N16)
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#f97316] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  De Beauvoir Town (N1)
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#f97316] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Clapton (E5)
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Up & Coming</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#f97316] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Homerton (E9)
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#f97316] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Hackney Wick (E9)
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#f97316] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  South Hackney (E9)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#f97316] to-[#ea580c] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Let Your Property?
          </h2>
          <p className="text-xl text-orange-50 mb-8">
            Get in touch today for a free rental valuation and discover how much your property could achieve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/valuation"
              className="bg-white text-[#f97316] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Get Rental Valuation
            </Link>
            <Link
              href="/contact"
              className="bg-[#0f766e] hover:bg-[#0d9488] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
