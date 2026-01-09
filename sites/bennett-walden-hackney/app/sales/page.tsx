import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Property Sales in Hackney',
  description: 'Expert property sales services across Hackney, London Fields, Dalston, Clapton, and Stoke Newington. 30 years of local expertise. Fast results and detailed feedback.',
};

export default function SalesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f766e] to-[#0d9488] text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Property Sales in Hackney
            </h1>
            <p className="text-xl md:text-2xl text-teal-50 mb-8">
              30 years of expertise delivering fast results and exceptional service for property sellers across Hackney.
            </p>
            <Link
              href="/valuation"
              className="inline-block bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-xl"
            >
              Get Free Valuation
            </Link>
          </div>
        </div>
      </section>

      {/* Sales Process Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sales Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple, transparent, and effective
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0f766e] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Free Valuation</h3>
              <p className="text-gray-600">
                Expert property assessment based on current market conditions and 30 years of local knowledge.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0f766e] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Marketing</h3>
              <p className="text-gray-600">
                Professional photography, compelling descriptions, and exposure across all major property portals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0f766e] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Viewings</h3>
              <p className="text-gray-600">
                Accompanied viewings with detailed feedback after every visit so you know exactly where you stand.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0f766e] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Completion</h3>
              <p className="text-gray-600">
                We guide you through offers, negotiations, and completion - supporting you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Sell With Bennett Walden?
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#0f766e] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Results</h3>
                    <p className="text-gray-600">
                      Our deep local knowledge and extensive buyer database mean faster sales at better prices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#0f766e] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Detailed Feedback</h3>
                    <p className="text-gray-600">
                      After every viewing, we provide comprehensive feedback so you understand buyer reactions and can adjust strategy if needed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#0f766e] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No Sale, No Fee</h3>
                    <p className="text-gray-600">
                      We only get paid when you successfully sell. Fair, transparent pricing with no hidden charges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#0f766e] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">30 Years Local Expertise</h3>
                    <p className="text-gray-600">
                      Since 1994, we've sold thousands of properties in Hackney. We know every street, every buyer type, and every market nuance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#0f766e] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Maximum Exposure</h3>
                    <p className="text-gray-600">
                      Your property will be listed on Rightmove, Zoopla, OnTheMarket, and our own website for maximum visibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0f766e] to-[#0d9488] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Sell?</h3>
              <p className="text-teal-50 mb-6">
                Get your free, no-obligation property valuation today. Find out what your Hackney property is really worth.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free property valuation</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No obligation or pressure</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Expert local market insight</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Same-day response</span>
                </div>
              </div>

              <Link
                href="/valuation"
                className="block w-full bg-[#f97316] hover:bg-[#ea580c] text-center text-white px-6 py-4 rounded-lg font-semibold transition-colors shadow-lg"
              >
                Book Free Valuation
              </Link>

              <div className="mt-6 pt-6 border-t border-teal-400">
                <p className="text-sm text-teal-100 mb-3">Or call us directly:</p>
                <p className="text-xl font-semibold">
                  <a href="tel:02072577177" className="hover:text-teal-100">020 7257 7177</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas We Cover
            </h2>
            <p className="text-xl text-gray-600">
              Expert property sales across all of Hackney
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Hackney', postcode: 'E8, E9' },
              { name: 'London Fields', postcode: 'E8' },
              { name: 'Clapton', postcode: 'E5' },
              { name: 'Dalston', postcode: 'E8, N16' },
              { name: 'Stoke Newington', postcode: 'N16' },
              { name: 'De Beauvoir Town', postcode: 'N1' },
              { name: 'Victoria Park', postcode: 'E2, E9' },
              { name: 'Homerton', postcode: 'E9' },
            ].map((area) => (
              <div key={area.name} className="bg-slate-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{area.name}</h3>
                <p className="text-sm text-gray-600">{area.postcode}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Thinking of Selling?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book your free valuation today and discover what your property could achieve in today's market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/valuation"
              className="bg-[#0f766e] hover:bg-[#0d9488] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Book Free Valuation
            </Link>
            <Link
              href="/contact"
              className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
