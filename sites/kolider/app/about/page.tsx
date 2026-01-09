import Link from 'next/link'

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-500 text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              About Kolider
            </h1>
            <p className="text-xl text-purple-100">
              We're on a mission to help local businesses shine online
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-600">
              <p className="text-xl leading-relaxed">
                Kolider was founded with a simple belief: every local business deserves a beautiful,
                professional website without breaking the bank.
              </p>

              <p className="text-xl leading-relaxed">
                We've seen too many talented local businesses—solicitors, dentists, garages, florists,
                and more—struggling with outdated websites that don't represent the quality of their work.
                Or worse, paying thousands for websites that are difficult to update and maintain.
              </p>

              <p className="text-xl leading-relaxed">
                That's why we created Kolider. We combine modern design, cutting-edge technology, and
                affordable pricing to give local businesses the online presence they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local Businesses */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why We Focus on Local Businesses
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-2xl font-bold mb-4">Community First</h3>
                <p className="text-gray-600">
                  Local businesses are the backbone of our communities. When they succeed,
                  everyone benefits. We're passionate about helping them thrive in the digital age.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4">We Understand Your Needs</h3>
                <p className="text-gray-600">
                  Local businesses have unique needs. You need to show up in local search, build trust
                  with your community, and make it easy for customers to reach you.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-2xl font-bold mb-4">Affordable Excellence</h3>
                <p className="text-gray-600">
                  You shouldn't have to choose between a professional website and managing your budget.
                  We make high-quality web design accessible to all local businesses.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold mb-4">Long-term Partnership</h3>
                <p className="text-gray-600">
                  We're not just building websites; we're building relationships. We're here to support
                  your business as it grows and evolves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Process</h2>
              <p className="text-xl text-gray-600">
                Simple, transparent, and designed around your needs
              </p>
            </div>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-purple-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Discovery</h3>
                  <p className="text-gray-600 text-lg">
                    We start by understanding your business, your goals, and what you want your website
                    to achieve. This is where you tell us what you like, what you don't, and what your
                    dream website looks like.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-purple-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Design & Planning</h3>
                  <p className="text-gray-600 text-lg">
                    We create a design concept tailored to your brand and industry. You'll see mockups
                    and provide feedback until we get it just right. No surprises, just collaboration.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-purple-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Development</h3>
                  <p className="text-gray-600 text-lg">
                    We build your website using modern technology that's fast, secure, and easy to update.
                    Throughout development, you'll get progress updates and opportunities to provide input.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-purple-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Review & Refine</h3>
                  <p className="text-gray-600 text-lg">
                    Before launch, you'll review everything on a staging site. We'll make any final
                    adjustments to ensure everything is perfect.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-purple-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Launch & Support</h3>
                  <p className="text-gray-600 text-lg">
                    We launch your website and provide training so you can manage it confidently.
                    Plus, we're always here when you need us for updates, maintenance, or support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="text-xl font-bold mb-3">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on design or functionality. Every website we create is something
                  we're proud to put our name on.
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">💙</div>
                <h3 className="text-xl font-bold mb-3">Transparency</h3>
                <p className="text-gray-600">
                  No hidden fees, no jargon, no surprises. We believe in honest communication and
                  straightforward pricing.
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-3">Results</h3>
                <p className="text-gray-600">
                  Beautiful design is just the start. We focus on creating websites that drive real
                  business results for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-500 text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Let's work together
            </h2>
            <p className="text-xl text-purple-100">
              Ready to give your business the online presence it deserves?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/refresh" className="btn-primary bg-white text-purple-600 hover:bg-gray-100">
                Refresh My Website
              </Link>
              <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
