import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residential Sales - Buying & Selling Homes',
  description: 'Expert residential property sales in Hackney, East & North London. Family-run estate agency with 20+ years local knowledge. Free valuations, professional marketing.',
};

export default function Sales() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4f46e5] to-[#6366f1] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Residential Property Sales
            </h1>
            <p className="text-xl text-indigo-100 leading-relaxed mb-8">
              Expert guidance through every step of buying or selling your home. With over
              20 years of local knowledge, we help families across Hackney find their perfect property.
            </p>
            <a
              href="tel:02072758000"
              className="inline-block bg-[#fbbf24] hover:bg-[#f59e0b] text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call for Free Valuation: 0207 275 8000
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#4f46e5] mb-4">
              Our Sales Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive support throughout your property journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-8 border-2 border-indigo-100">
              <h3 className="text-2xl font-semibold text-[#4f46e5] mb-4">Selling Your Home</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#fbbf24] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Free Market Valuation:</strong> Accurate pricing based on current market conditions and local expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#fbbf24] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Professional Photography:</strong> High-quality images that showcase your property at its best</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#fbbf24] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Marketing Strategy:</strong> Online portals, local advertising, and social media promotion</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#fbbf24] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Viewings Management:</strong> We handle all viewing arrangements and buyer feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#fbbf24] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Expert Negotiation:</strong> Achieving the best possible price for your property</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#fbbf24] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Sales Progression:</strong> Guiding you through to completion with regular updates</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-8 border-2 border-amber-100">
              <h3 className="text-2xl font-semibold text-[#4f46e5] mb-4">Buying a Home</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#4f46e5] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Property Search:</strong> Access to all available properties matching your criteria</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#4f46e5] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Local Knowledge:</strong> 20+ years expertise in Hackney, East & North London</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#4f46e5] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Viewing Coordination:</strong> We arrange viewings at times convenient for you</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#4f46e5] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Honest Advice:</strong> Transparent information about properties and neighborhoods</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#4f46e5] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Offer Negotiation:</strong> Helping you secure your dream home at the right price</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#4f46e5] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Purchase Support:</strong> Guidance through surveys, contracts, and completion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#4f46e5] mb-4">
              Areas We Cover
            </h2>
            <p className="text-xl text-gray-600">
              20+ years of local expertise across Hackney, East & North London
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              'Dalston',
              'Hackney',
              'Stoke Newington',
              'Clapton',
              'Homerton',
              'Hackney Wick',
              'Shoreditch',
              'Hoxton',
              'De Beauvoir Town',
              'London Fields',
              'Victoria Park',
              'Stamford Hill',
            ].map((area) => (
              <div
                key={area}
                className="bg-white rounded-lg p-4 text-center border-2 border-gray-200 hover:border-[#4f46e5] transition-colors"
              >
                <p className="font-medium text-gray-900">{area}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8">
            And surrounding areas of East & North London
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#4f46e5] mb-6">
                Why Sell with Courtneys?
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  As a family-run business with over 20 years in Dalston, we understand
                  the local property market like no other. Our honest, transparent approach
                  has earned us countless 5-star reviews from satisfied clients.
                </p>
                <p className="leading-relaxed">
                  Unlike larger corporate agents, we provide a personal service where
                  you&apos;re not just a number. Tim and the team are always available to
                  answer your questions and provide expert guidance.
                </p>
                <p className="leading-relaxed">
                  We combine traditional family values with modern marketing techniques,
                  ensuring your property receives maximum exposure to qualified buyers
                  while you receive the attentive service you deserve.
                </p>
              </div>

              <div className="mt-8 bg-gradient-to-br from-indigo-50 to-amber-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#4f46e5] mb-4">
                  Our Track Record
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#fbbf24]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>5-star Google reviews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#fbbf24]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>20+ years serving Hackney</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#fbbf24]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>Hundreds of successful sales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#fbbf24]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>Family values, personal service</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#4f46e5] to-[#6366f1] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Ready to Get Started?</h3>
              <p className="text-indigo-100 mb-6">
                Whether you&apos;re buying or selling, we&apos;re here to help. Get in touch
                for a free, no-obligation consultation.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#fbbf24] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Call us directly</p>
                    <a href="tel:02072758000" className="text-[#fbbf24] text-lg font-semibold hover:text-[#f59e0b]">
                      0207 275 8000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#fbbf24] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Visit our office</p>
                    <p className="text-indigo-100">544 Kingsland Rd, London E8 4AH</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="block w-full bg-[#fbbf24] hover:bg-[#f59e0b] text-gray-900 px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                  >
                    Request Free Valuation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-amber-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#4f46e5] mb-4">
            Start Your Property Journey Today
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join the hundreds of satisfied clients who have trusted Courtneys with their home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02072758000"
              className="bg-[#4f46e5] hover:bg-[#6366f1] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call: 0207 275 8000
            </a>
            <Link
              href="/contact"
              className="border-2 border-[#4f46e5] hover:bg-[#4f46e5] hover:text-white text-[#4f46e5] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Book Valuation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
