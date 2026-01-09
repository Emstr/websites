import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-500 text-white">
        <div className="section-container py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Beautiful websites for local businesses
            </h1>
            <p className="text-xl md:text-2xl text-purple-100">
              Get a stunning, modern website that helps your business shine online
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/refresh" className="btn-primary bg-white text-purple-600 hover:bg-gray-100">
                Refresh My Website
              </Link>
              <Link href="/portfolio" className="btn-secondary border-white text-white hover:bg-white/10">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Your website is your digital storefront
            </h2>
            <p className="text-xl text-gray-600">
              In today's world, your website is often the first impression customers have of your business.
              Is yours making the right impression? Whether you need a fresh start or a complete refresh,
              we're here to help your local business stand out online.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What we do
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to succeed online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-purple-blue rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-3">Web Design</h3>
              <p className="text-gray-600">
                Brand new websites built from scratch with modern design and functionality
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-purple-blue rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-3">Website Redesign</h3>
              <p className="text-gray-600">
                Breathe new life into your existing website with a fresh, modern look
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-purple-blue rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-3">SEO & Local Search</h3>
              <p className="text-gray-600">
                Get found by customers searching for your services in your area
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-purple-blue rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-3">Ongoing Maintenance</h3>
              <p className="text-gray-600">
                Keep your website secure, updated, and running smoothly
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by local businesses
            </h2>
            <p className="text-xl text-gray-600">
              Hear what our clients have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6">
                "Kolider transformed our outdated website into something we're proud to show clients.
                Our online bookings have doubled!"
              </p>
              <div className="font-semibold">Sarah M.</div>
              <div className="text-gray-500 text-sm">Local Dental Practice</div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6">
                "Professional, affordable, and they really understood what our garage business needed.
                Couldn't be happier!"
              </p>
              <div className="font-semibold">James T.</div>
              <div className="text-gray-500 text-sm">Auto Repair Shop</div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6">
                "Finally, a website that represents our brand properly. The process was smooth and the
                results speak for themselves."
              </p>
              <div className="font-semibold">Emma L.</div>
              <div className="text-gray-500 text-sm">Boutique Law Firm</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our work speaks for itself
            </h2>
            <p className="text-xl text-gray-600">
              Beautiful websites across a variety of industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {['Solicitors', 'Accountants', 'Dental Practices', 'Estate Agents',
              'Auto Garages', 'Florists', 'Tailors', 'Photographers'].map((industry) => (
              <div key={industry} className="bg-gradient-purple-blue p-6 rounded-xl text-white text-center font-semibold hover:scale-105 transition-transform">
                {industry}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/portfolio" className="btn-primary">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Hint */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Affordable pricing, no hidden fees
            </h2>
            <p className="text-xl text-gray-600">
              We believe every local business deserves a professional website without breaking the bank.
              Our transparent pricing means you'll know exactly what you're getting, with no surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="/refresh" className="btn-primary">
                Get Your Free Quote
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-500 text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to refresh your website?
            </h2>
            <p className="text-xl text-purple-100">
              Let's work together to create something beautiful for your business
            </p>
            <Link href="/refresh" className="inline-block btn-primary bg-white text-purple-600 hover:bg-gray-100">
              Start Your Website Refresh
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
