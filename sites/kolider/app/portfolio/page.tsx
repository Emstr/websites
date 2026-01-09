import Link from 'next/link'

export default function Portfolio() {
  const portfolioItems = [
    { industry: 'Solicitors', count: 12, color: 'from-purple-600 to-purple-400' },
    { industry: 'Accountants', count: 8, color: 'from-blue-600 to-blue-400' },
    { industry: 'Dental Practices', count: 15, color: 'from-purple-500 to-blue-500' },
    { industry: 'Estate Agents', count: 10, color: 'from-blue-500 to-purple-500' },
    { industry: 'Auto Garages', count: 7, color: 'from-purple-600 to-blue-600' },
    { industry: 'Florists', count: 6, color: 'from-blue-600 to-purple-600' },
    { industry: 'Tailors & Alterations', count: 5, color: 'from-purple-500 to-purple-600' },
    { industry: 'Photographers', count: 9, color: 'from-blue-500 to-blue-600' },
    { industry: 'Jewellers', count: 4, color: 'from-purple-600 to-blue-500' },
    { industry: 'Restaurants & Cafes', count: 11, color: 'from-blue-600 to-purple-500' },
    { industry: 'Beauty Salons', count: 8, color: 'from-purple-500 to-blue-600' },
    { industry: 'Professional Services', count: 14, color: 'from-blue-500 to-purple-600' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-500 text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Our Portfolio
            </h1>
            <p className="text-xl text-purple-100">
              Beautiful websites we've created for local businesses across various industries
            </p>
          </div>
        </div>
      </section>

      {/* Before/After Concept */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Transformation</h2>
              <p className="text-xl text-gray-600">
                See how we take outdated websites and turn them into modern, engaging experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Before */}
              <div className="space-y-4">
                <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full inline-block font-semibold">
                  Before
                </div>
                <div className="bg-white rounded-xl shadow-lg p-8 space-y-4">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3">✗</span>
                      <span>Outdated design from 2010</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3">✗</span>
                      <span>Not mobile-friendly</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3">✗</span>
                      <span>Slow loading times</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3">✗</span>
                      <span>Poor SEO performance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3">✗</span>
                      <span>Difficult to update</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3">✗</span>
                      <span>Low conversion rates</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* After */}
              <div className="space-y-4">
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full inline-block font-semibold">
                  After
                </div>
                <div className="bg-gradient-purple-blue rounded-xl shadow-lg p-8 space-y-4 text-white">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="mr-3">✓</span>
                      <span>Modern, professional design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">✓</span>
                      <span>Fully responsive on all devices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">✓</span>
                      <span>Lightning-fast performance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">✓</span>
                      <span>Optimized for search engines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">✓</span>
                      <span>Easy content management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">✓</span>
                      <span>Higher engagement & conversions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid by Industry */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              We've helped businesses across {portfolioItems.length}+ different industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.industry} className="group cursor-pointer">
                <div className={`bg-gradient-to-br ${item.color} rounded-xl p-8 text-white h-64 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.industry}</h3>
                    <p className="text-white/90">{item.count} completed projects</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                      View Projects →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-gray-600">Websites Launched</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">12+</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">5★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-500 text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to join our portfolio?
            </h2>
            <p className="text-xl text-purple-100">
              Let's create something beautiful for your business
            </p>
            <Link href="/refresh" className="inline-block btn-primary bg-white text-purple-600 hover:bg-gray-100">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
