import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0f766e] via-[#0d9488] to-[#14b8a6] text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-[#f97316] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🏆 Selling in Hackney Since 1994 - 30 Years of Local Expertise
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Hackney<br />Estate Agents
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-50 max-w-3xl mx-auto">
              Expert property sales, lettings, and management across Hackney, London Fields, Clapton, Dalston, and beyond
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/valuation"
                className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-xl hover:shadow-2xl"
              >
                Get Free Valuation
              </Link>
              <Link
                href="/sales"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all border-2 border-white/30"
              >
                View Properties
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 py-12 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#0f766e] mb-2">30+</div>
              <div className="text-gray-600">Years in Hackney</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0f766e] mb-2">25+</div>
              <div className="text-gray-600">Years Property Mgmt</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0f766e] mb-2">7</div>
              <div className="text-gray-600">Areas Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0f766e] mb-2">1994</div>
              <div className="text-gray-600">Established</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive property services backed by 30 years of Hackney expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sales */}
            <div className="bg-gradient-to-br from-[#0f766e] to-[#0d9488] rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Property Sales</h3>
              <p className="text-teal-50 mb-6">
                Fast results and detailed feedback. We know the Hackney market inside out and deliver exceptional results for sellers.
              </p>
              <Link
                href="/sales"
                className="inline-flex items-center text-white font-semibold hover:text-teal-100"
              >
                Learn more
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Lettings */}
            <div className="bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Lettings</h3>
              <p className="text-orange-50 mb-6">
                Expert letting services for landlords and tenants. From finding quality tenants to managing viewings and tenancy agreements.
              </p>
              <Link
                href="/lettings"
                className="inline-flex items-center text-white font-semibold hover:text-orange-100"
              >
                Learn more
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Property Management */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Property Management</h3>
              <p className="text-gray-200 mb-6">
                25 years of property management experience. Full service management giving landlords peace of mind and tenants responsive support.
              </p>
              <Link
                href="/property-management"
                className="inline-flex items-center text-white font-semibold hover:text-gray-200"
              >
                Learn more
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600">
              Discover your next home in Hackney
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Property Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#0f766e] to-[#14b8a6] flex items-center justify-center text-white">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <p className="text-sm">Property Image</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-[#0f766e] text-white px-3 py-1 rounded-full text-sm font-semibold">For Sale</span>
                  <span className="text-2xl font-bold text-[#0f766e]">£725,000</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">3 Bed Victorian Terrace</h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  London Fields, E8
                </p>
                <div className="flex gap-4 text-sm text-gray-600 mb-4">
                  <span>🛏️ 3 beds</span>
                  <span>🚿 2 baths</span>
                  <span>📏 1,450 sq ft</span>
                </div>
                <Link href="/sales" className="text-[#0f766e] font-semibold hover:text-[#0d9488]">
                  View Details →
                </Link>
              </div>
            </div>

            {/* Property Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#f97316] to-[#fb923c] flex items-center justify-center text-white">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="text-sm">Property Image</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-[#f97316] text-white px-3 py-1 rounded-full text-sm font-semibold">To Let</span>
                  <span className="text-2xl font-bold text-[#f97316]">£2,400 pcm</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modern 2 Bed Apartment</h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Dalston, E8
                </p>
                <div className="flex gap-4 text-sm text-gray-600 mb-4">
                  <span>🛏️ 2 beds</span>
                  <span>🚿 2 baths</span>
                  <span>📏 950 sq ft</span>
                </div>
                <Link href="/lettings" className="text-[#f97316] font-semibold hover:text-[#ea580c]">
                  View Details →
                </Link>
              </div>
            </div>

            {/* Property Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-white">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                  <p className="text-sm">Property Image</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-[#0f766e] text-white px-3 py-1 rounded-full text-sm font-semibold">For Sale</span>
                  <span className="text-2xl font-bold text-[#0f766e]">£550,000</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Spacious 2 Bed Maisonette</h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Stoke Newington, N16
                </p>
                <div className="flex gap-4 text-sm text-gray-600 mb-4">
                  <span>🛏️ 2 beds</span>
                  <span>🚿 1 bath</span>
                  <span>📏 1,100 sq ft</span>
                </div>
                <Link href="/sales" className="text-[#0f766e] font-semibold hover:text-[#0d9488]">
                  View Details →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/sales"
              className="inline-block bg-[#0f766e] hover:bg-[#0d9488] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Area Expertise Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Local Expertise Across Hackney
            </h2>
            <p className="text-xl text-gray-600">
              30 years of deep local knowledge covering all major Hackney areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Area Badge 1 */}
            <div className="bg-gradient-to-br from-[#0f766e] to-[#0d9488] rounded-xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Hackney</h3>
              <p className="text-teal-100 text-sm mb-3">E8, E9</p>
              <p className="text-teal-50 text-sm">Our home turf since 1994</p>
            </div>

            {/* Area Badge 2 */}
            <div className="bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">London Fields</h3>
              <p className="text-orange-100 text-sm mb-3">E8</p>
              <p className="text-orange-50 text-sm">Vibrant & trendy</p>
            </div>

            {/* Area Badge 3 */}
            <div className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Clapton</h3>
              <p className="text-gray-200 text-sm mb-3">E5</p>
              <p className="text-gray-300 text-sm">Up & coming area</p>
            </div>

            {/* Area Badge 4 */}
            <div className="bg-gradient-to-br from-[#0f766e] to-[#0d9488] rounded-xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Dalston</h3>
              <p className="text-teal-100 text-sm mb-3">E8, N16</p>
              <p className="text-teal-50 text-sm">Cultural hub</p>
            </div>

            {/* Area Badge 5 */}
            <div className="bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Stoke Newington</h3>
              <p className="text-orange-100 text-sm mb-3">N16</p>
              <p className="text-orange-50 text-sm">Village feel</p>
            </div>

            {/* Area Badge 6 */}
            <div className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">De Beauvoir Town</h3>
              <p className="text-gray-200 text-sm mb-3">N1</p>
              <p className="text-gray-300 text-sm">Georgian elegance</p>
            </div>

            {/* Area Badge 7 */}
            <div className="bg-gradient-to-br from-[#0f766e] to-[#0d9488] rounded-xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Victoria Park</h3>
              <p className="text-teal-100 text-sm mb-3">E2, E9</p>
              <p className="text-teal-50 text-sm">Park living</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/area-guide"
              className="inline-block bg-[#0f766e] hover:bg-[#0d9488] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Area Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Bennett Walden?
            </h2>
            <p className="text-xl text-gray-600">
              Three decades of excellence in Hackney property services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#0f766e] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Results</h3>
              <p className="text-gray-600">
                Quick turnarounds on sales and lettings. We understand the market and work efficiently to achieve your goals.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#f97316] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Detailed Feedback</h3>
              <p className="text-gray-600">
                Regular updates and comprehensive feedback after every viewing. You'll always know where you stand.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-slate-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Local Knowledge</h3>
              <p className="text-gray-600">
                30 years in Hackney means we know every street, every development, and every opportunity in the area.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#0f766e] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Service</h3>
              <p className="text-gray-600">
                We're a local, independent agency that puts relationships first. You'll get personal attention, not corporate bureaucracy.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#f97316] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No Sale, No Fee</h3>
              <p className="text-gray-600">
                Fair and transparent pricing. We only get paid when you're successful. No hidden charges or upfront fees.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-slate-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">25 Years Property Management</h3>
              <p className="text-gray-600">
                Quarter century of experience managing properties. Professional, responsive, and reliable service for landlords and tenants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by Hackney residents for three decades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-slate-50 rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-[#f97316]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Bennett Walden sold our flat in London Fields in just 3 weeks! Their knowledge of the local market is unmatched. Professional, efficient, and always available."
              </p>
              <p className="text-gray-900 font-semibold">Sarah & Tom M.</p>
              <p className="text-gray-600 text-sm">London Fields, E8</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-slate-50 rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-[#f97316]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Outstanding property management service. We've been with BW for over 10 years and they handle everything perfectly. Responsive, reliable, and trustworthy."
              </p>
              <p className="text-gray-900 font-semibold">David L.</p>
              <p className="text-gray-600 text-sm">Landlord, Dalston</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-slate-50 rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-[#f97316]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Found our perfect rental through Bennett Walden. They really understand what tenants need and made the whole process smooth and stress-free. Highly recommend!"
              </p>
              <p className="text-gray-900 font-semibold">Jessica R.</p>
              <p className="text-gray-600 text-sm">Tenant, Stoke Newington</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0f766e] via-[#0d9488] to-[#14b8a6] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-teal-50">
            Get your free property valuation today. No obligation, no pressure - just expert advice from Hackney's most experienced estate agents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/valuation"
              className="bg-[#f97316] hover:bg-[#ea580c] text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all shadow-xl hover:shadow-2xl"
            >
              Book Free Valuation
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all border-2 border-white/30"
            >
              Contact Us
            </Link>
          </div>
          <p className="mt-8 text-teal-100">
            📞 Call us: <a href="tel:02072577177" className="font-semibold hover:text-white">020 7257 7177</a>
            {' '} | {' '}
            ✉️ Email: <a href="mailto:hackney@bennettwalden.co.uk" className="font-semibold hover:text-white">hackney@bennettwalden.co.uk</a>
          </p>
        </div>
      </section>
    </div>
  );
}
