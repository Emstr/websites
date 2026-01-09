import Link from 'next/link'

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-500 text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Services tailored for local businesses
            </h1>
            <p className="text-xl text-purple-100">
              Everything you need to establish and maintain a stunning online presence
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="section-container">
          <div className="space-y-20">
            {/* Service 1: Website Design */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-purple-blue rounded-xl"></div>
                <h2 className="text-3xl md:text-4xl font-bold">Website Design</h2>
                <p className="text-xl text-gray-600">
                  Starting from scratch? We'll create a beautiful, professional website that represents
                  your business perfectly.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span>Custom design tailored to your brand</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span>Mobile-responsive and fast-loading</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span>SEO-optimized from day one</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span>Easy-to-update content management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span>Contact forms and business integrations</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-purple-blue rounded-2xl p-12 text-white h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎨</div>
                  <p className="text-2xl font-bold">Fresh Start</p>
                </div>
              </div>
            </div>

            {/* Service 2: Website Redesign */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-purple-blue rounded-2xl p-12 text-white h-96 flex items-center justify-center order-2 md:order-1">
                <div className="text-center">
                  <div className="text-6xl mb-4">✨</div>
                  <p className="text-2xl font-bold">Modern Refresh</p>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="w-16 h-16 bg-gradient-purple-blue rounded-xl"></div>
                <h2 className="text-3xl md:text-4xl font-bold">Website Redesign</h2>
                <p className="text-xl text-gray-600">
                  Already have a website but it feels outdated? Let's give it a complete refresh while
                  keeping what works.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span>Modernize your existing design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span>Improve mobile experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span>Enhance loading speed and performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span>Update content and imagery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span>Preserve your SEO rankings</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3: SEO & Local Search */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-purple-blue rounded-xl"></div>
                <h2 className="text-3xl md:text-4xl font-bold">SEO & Local Search</h2>
                <p className="text-xl text-gray-600">
                  Get found by customers searching for your services in your local area.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span>Local SEO optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span>Google Business Profile optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span>Keyword research and targeting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span>Content optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span>Monthly performance reports</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-purple-blue rounded-2xl p-12 text-white h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔍</div>
                  <p className="text-2xl font-bold">Get Found</p>
                </div>
              </div>
            </div>

            {/* Service 4: Ongoing Maintenance */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-purple-blue rounded-2xl p-12 text-white h-96 flex items-center justify-center order-2 md:order-1">
                <div className="text-center">
                  <div className="text-6xl mb-4">🛠️</div>
                  <p className="text-2xl font-bold">Always Running</p>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="w-16 h-16 bg-gradient-purple-blue rounded-xl"></div>
                <h2 className="text-3xl md:text-4xl font-bold">Ongoing Maintenance</h2>
                <p className="text-xl text-gray-600">
                  Keep your website secure, up-to-date, and running smoothly with our maintenance packages.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span>Regular security updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span>Content updates and changes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span>Performance monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span>24/7 uptime monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span>Priority support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-600">
              Tell us about your website needs and we'll create a custom solution for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/refresh" className="btn-primary">
                Refresh My Website
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
