import Link from 'next/link';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-florist-rose-light via-florist-cream to-florist-sage-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-florist-rose/10 text-florist-rose-dark px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Our Story
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              A <span className="text-florist-rose-dark">Family-Run</span> Florist
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Since 2009, we've been bringing joy to Southwark with beautiful flowers and warm, friendly service.
              More than just a florist - we're part of your community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Family-Run Since 2009</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    The London Flower Shop opened its doors in 2009, bringing a true family touch to the heart of Southwark.
                    Our shop at 158 Long Lane has actually been a florist for over 20 years, and we're proud to continue
                    this wonderful tradition.
                  </p>
                  <p>
                    What makes us special? It's simple - we're a real family business. When you visit us or call,
                    you'll speak with family members who genuinely care about making your floral experience perfect.
                    We remember our regular customers, their preferences, and the special occasions in their lives.
                  </p>
                  <p>
                    Over the years, we've built wonderful relationships with our local community - from hotels and pubs
                    to corporate clients and families celebrating life's precious moments. Each bouquet we create,
                    each arrangement we deliver, carries our family's commitment to quality and care.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-florist-rose-light to-florist-sage-light rounded-2xl p-8 shadow-xl">
                <div className="bg-white rounded-xl p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-florist-rose to-florist-sage rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">15+ Years</h3>
                  <p className="text-gray-600 mb-4">Serving the Southwark community</p>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <p className="text-4xl font-bold text-florist-rose-dark mb-1">20+</p>
                    <p className="text-gray-600">Years as a florist at this location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-florist-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What We Believe In</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-florist-rose to-florist-rose-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Care</h3>
                <p className="text-gray-600">
                  We treat every customer like family, taking the time to understand your needs and create something truly special.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-florist-sage to-florist-sage-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community First</h3>
                <p className="text-gray-600">
                  We're proud to be part of Southwark's fabric, building lasting relationships with local businesses and residents.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-florist-rose to-florist-rose-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality & Freshness</h3>
                <p className="text-gray-600">
                  Only the freshest flowers and highest quality products. We take pride in every arrangement that leaves our shop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Connections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Part of the Southwark Community</h2>
            <div className="bg-florist-sage-light rounded-2xl p-8 md:p-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We're incredibly proud of the wonderful relationships we've built over the years. From providing
                weekly flowers for local hotels and pubs to creating magical weddings and supporting corporate events,
                we've become a trusted partner to businesses and families across Southwark.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our customers aren't just transactions - they're neighbors, friends, and part of our extended family.
                We remember birthdays, anniversaries, and those special moments that make life beautiful. That's what
                being a family-run business is all about.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-florist-sage-dark flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Local Hotels & Pubs</h4>
                    <p className="text-gray-600 text-sm">Regular flower deliveries keeping local businesses looking their best</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-florist-sage-dark flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Corporate Clients</h4>
                    <p className="text-gray-600 text-sm">Professional service for offices and business events</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-florist-sage-dark flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Wedding Couples</h4>
                    <p className="text-gray-600 text-sm">Creating floral magic for hundreds of happy couples</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-florist-sage-dark flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Local Families</h4>
                    <p className="text-gray-600 text-sm">Celebrating life's moments with our community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Long Lane */}
      <section className="py-20 bg-florist-rose-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Long Lane?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our location at 158 Long Lane has been home to a florist for over 20 years. When we took over in 2009,
              we knew we were inheriting something special - a place where people come for beautiful flowers and leave
              with smiles.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Southwark is our home, and we're committed to continuing this legacy. Every day, we pour our heart into
              creating beautiful arrangements and building relationships that last for years.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-florist-rose-dark to-florist-rose text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Come Visit Our Family</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We'd love to meet you! Pop into our shop on Long Lane or give us a call.
            Experience the warmth of a true family-run florist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-florist-rose-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Find Us</span>
            </Link>
            <a
              href="tel:02074071666"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-florist-rose-dark transition-all shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call: 020 7407 1666</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
