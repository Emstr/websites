import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-florist-rose-light via-florist-cream to-florist-sage-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-florist-rose/10 text-florist-rose-dark px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Family-Run Since 2009
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-florist-rose-dark">The London Flower Shop</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your friendly, family-run florist in the heart of Southwark. Beautiful blooms, warm smiles,
              and wonderful relationships with our community for over 15 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/shop"
                className="bg-florist-rose-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span>Shop Now</span>
              </Link>
              <a
                href="tel:02074071666"
                className="bg-white text-florist-sage border-2 border-florist-sage px-8 py-4 rounded-full font-semibold text-lg hover:bg-florist-sage hover:text-white transition-all shadow-lg inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>020 7407 1666</span>
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-florist-sage" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Same-Day Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-florist-sage" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Wedding Specialists</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-florist-sage" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Local Since 2009</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Our Southwark Community Loves Us</h2>
            <p className="text-xl text-gray-600">More than just a florist - we're your local flower family</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-florist-rose to-florist-rose-dark rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Family-Run</h3>
              <p className="text-gray-600">A true family business serving Southwark with care and dedication since 2009</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-florist-sage to-florist-sage-dark rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Focused</h3>
              <p className="text-gray-600">Wonderful relationships with local hotels, pubs, and corporate clients</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-florist-rose to-florist-rose-dark rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Same-Day Delivery</h3>
              <p className="text-gray-600">Quick, reliable delivery across Southwark, Elephant & Castle, and Waterloo</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-florist-sage to-florist-sage-dark rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Wide Selection</h3>
              <p className="text-gray-600">From bouquets to balloons, champagne to chocolates - we have it all!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Services */}
      <section className="py-20 bg-florist-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Beautiful Selection</h2>
            <p className="text-xl text-gray-600">Fresh flowers and thoughtful gifts for every occasion</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-florist-rose/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-florist-rose-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Beautiful Bouquets</h3>
              <p className="text-gray-600 mb-4">Hand-tied arrangements, luxury flowers, anniversary specials, and stunning seasonal blooms</p>
              <Link href="/shop" className="text-florist-rose-dark font-semibold hover:text-florist-rose transition-colors inline-flex items-center">
                Browse Collection
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-florist-sage/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-florist-sage-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Special Occasions</h3>
              <p className="text-gray-600 mb-4">Weddings, corporate events, funerals, baby gifts - with care and attention to detail</p>
              <Link href="/weddings" className="text-florist-rose-dark font-semibold hover:text-florist-rose transition-colors inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-florist-rose/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-florist-rose-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Gifts & Extras</h3>
              <p className="text-gray-600 mb-4">Balloons, baskets, champagne, chocolates, wine, teddies, plants, and corsages</p>
              <Link href="/shop" className="text-florist-rose-dark font-semibold hover:text-florist-rose transition-colors inline-flex items-center">
                Shop Gifts
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">We Deliver Across Southwark</h2>
              <p className="text-xl text-gray-600">Fast, reliable same-day delivery to your local area</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {['Southwark', 'Elephant & Castle', 'Newington', 'Waterloo'].map((area) => (
                <div key={area} className="bg-florist-rose-light rounded-xl p-6">
                  <svg className="w-8 h-8 text-florist-rose-dark mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="font-semibold text-gray-900">{area}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/delivery" className="text-florist-sage-dark font-semibold hover:text-florist-sage transition-colors inline-flex items-center">
                View Full Delivery Information
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-florist-sage-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Trusted by the Southwark community</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Absolutely wonderful florist! The family who run it are so friendly and helpful. They've done flowers for our pub's events for years - always beautiful and exactly what we want."
              </p>
              <p className="text-gray-900 font-semibold">Sarah T.</p>
              <p className="text-gray-500 text-sm">Local Business Owner</p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "They did our wedding flowers and they were STUNNING! Can't recommend highly enough. The bouquets, buttonholes, and table arrangements were perfect. Thank you so much!"
              </p>
              <p className="text-gray-900 font-semibold">Emma & James</p>
              <p className="text-gray-500 text-sm">Wedding Couple</p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "My go-to florist for 10+ years! Always fresh, beautiful flowers and the most lovely service. They remember me and my preferences - it's like visiting family!"
              </p>
              <p className="text-gray-900 font-semibold">Michael R.</p>
              <p className="text-gray-500 text-sm">Regular Customer</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-florist-rose-dark to-florist-rose text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Visit Us Today or Order Online</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the warmth of our family-run florist. Same-day delivery available across Southwark.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="bg-white text-florist-rose-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Shop Now</span>
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
          <p className="mt-8 text-sm opacity-80">158 Long Lane, Southwark, London SE1 4BS</p>
        </div>
      </section>
    </div>
  );
}
