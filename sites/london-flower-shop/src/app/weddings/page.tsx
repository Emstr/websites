import Link from 'next/link';

export default function Weddings() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-florist-rose-light via-florist-cream to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-florist-rose/10 text-florist-rose-dark px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Wedding Specialists
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Beautiful Flowers for Your <span className="text-florist-rose-dark">Special Day</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let our family help create the floral magic for your wedding day. With years of experience and a warm, personal approach, we'll make your vision bloom.
            </p>
            <a
              href="tel:02074071666"
              className="inline-flex items-center space-x-2 bg-florist-rose-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Book Consultation: 020 7407 1666</span>
            </a>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Complete Wedding Flower Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-florist-rose-light rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-florist-rose to-florist-rose-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bridal Bouquets</h3>
                <p className="text-gray-600">Stunning hand-tied bouquets designed to match your style and colour theme</p>
              </div>

              <div className="bg-florist-sage-light rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-florist-sage to-florist-sage-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bridesmaid Flowers</h3>
                <p className="text-gray-600">Beautiful matching bouquets for your bridesmaids in coordinating colours</p>
              </div>

              <div className="bg-florist-rose-light rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-florist-rose to-florist-rose-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Buttonholes & Corsages</h3>
                <p className="text-gray-600">Elegant buttonholes for groom and groomsmen, corsages for special guests</p>
              </div>

              <div className="bg-florist-sage-light rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-florist-sage to-florist-sage-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ceremony Flowers</h3>
                <p className="text-gray-600">Archways, pedestals, pew ends, and venue decorations</p>
              </div>

              <div className="bg-florist-rose-light rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-florist-rose to-florist-rose-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Reception Flowers</h3>
                <p className="text-gray-600">Table centrepieces, top table arrangements, and venue styling</p>
              </div>

              <div className="bg-florist-sage-light rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-florist-sage to-florist-sage-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Flower Girl Extras</h3>
                <p className="text-gray-600">Adorable baskets, posies, and floral accessories for flower girls</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-florist-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Personal Approach</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-florist-rose-dark text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Free Consultation</h3>
                    <p className="text-gray-600">
                      Visit our shop or give us a call to discuss your wedding vision. We'll talk about your colour scheme,
                      favourite flowers, venue, and budget. No pressure, just friendly advice from our experienced family team.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-florist-sage-dark text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Custom Design</h3>
                    <p className="text-gray-600">
                      We'll create a bespoke proposal tailored to your style and requirements. Whether you love classic roses,
                      wildflower meadows, or elegant orchids, we'll design arrangements that reflect your personality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-florist-rose-dark text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Perfect Execution</h3>
                    <p className="text-gray-600">
                      On your big day, we'll deliver and set up everything with meticulous care. Your flowers will be fresh,
                      beautiful, and exactly as planned. We've done this for hundreds of happy couples!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Happy Couples</h2>
            <p className="text-xl text-gray-600">What our wedding clients say</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-florist-rose-light rounded-2xl p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "The London Flower Shop made our wedding absolutely magical! Our bouquets were stunning and lasted beautifully all day.
                The family were so helpful and understanding throughout the planning. Can't recommend them enough!"
              </p>
              <p className="text-gray-900 font-semibold">Emma & James</p>
              <p className="text-gray-500 text-sm">Married June 2025</p>
            </div>

            <div className="bg-florist-sage-light rounded-2xl p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "We wanted wildflower vibes for our summer wedding and they absolutely nailed it! The table centrepieces were incredible
                and everyone commented on how beautiful the flowers were. Thank you for making our day perfect!"
              </p>
              <p className="text-gray-900 font-semibold">Sophie & Tom</p>
              <p className="text-gray-500 text-sm">Married August 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-florist-rose-dark to-florist-rose text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Create Your Dream Wedding Flowers</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book your free consultation today and let our family help make your special day truly unforgettable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02074071666"
              className="bg-white text-florist-rose-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call: 020 7407 1666</span>
            </a>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-florist-rose-dark transition-all shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <span>Visit Our Shop</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
