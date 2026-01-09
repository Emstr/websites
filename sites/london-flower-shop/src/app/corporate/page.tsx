import Link from 'next/link';

export default function Corporate() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-florist-sage-light via-white to-florist-rose-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-florist-sage/10 text-florist-sage-dark px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Corporate Flower Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Elevate Your <span className="text-florist-sage-dark">Business Events</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From hotel lobbies to corporate events, we've built wonderful relationships with local businesses.
              Let us brighten your workplace and impress your clients with fresh, beautiful flowers.
            </p>
            <a
              href="tel:02074071666"
              className="inline-flex items-center space-x-2 bg-florist-sage-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Discuss Your Needs: 020 7407 1666</span>
            </a>
          </div>
        </div>
      </section>

      {/* Our Corporate Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Corporate Flower Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-florist-cream rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-florist-sage to-florist-sage-dark rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Hotels & Restaurants</h3>
                <p className="text-gray-600 mb-4">
                  Regular weekly or monthly flower deliveries to keep your reception, dining areas, and guest spaces looking fresh and welcoming.
                  We work with several local hotels and pubs across Southwark.
                </p>
              </div>

              <div className="bg-florist-rose-light rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-florist-rose to-florist-rose-dark rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Office Displays</h3>
                <p className="text-gray-600 mb-4">
                  Brighten your workplace with beautiful floral arrangements. Reception areas, boardrooms, and communal spaces -
                  we'll create displays that reflect your company's image and values.
                </p>
              </div>

              <div className="bg-florist-sage-light rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-florist-sage to-florist-sage-dark rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Corporate Events</h3>
                <p className="text-gray-600 mb-4">
                  Conferences, product launches, gala dinners, award ceremonies - we'll create impressive floral displays that
                  wow your guests and enhance your event's atmosphere.
                </p>
              </div>

              <div className="bg-florist-cream rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-florist-rose to-florist-rose-dark rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Client Gifts</h3>
                <p className="text-gray-600 mb-4">
                  Show appreciation to valued clients and partners with beautiful bouquets and gift arrangements.
                  We can add champagne, chocolates, or other treats to create the perfect impression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-florist-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Local Businesses Trust Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-florist-sage to-florist-sage-dark rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable Service</h3>
                <p className="text-gray-600">On-time delivery and consistent quality. We never let our business clients down.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-florist-rose to-florist-rose-dark rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Relationships</h3>
                <p className="text-gray-600">We build long-term partnerships with our corporate clients based on trust and quality.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-florist-sage to-florist-sage-dark rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">Excellent value with flexible contracts. Special rates for regular customers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Local Partnerships */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted by Southwark Businesses</h2>
            <p className="text-xl text-gray-600 mb-8">
              We've built wonderful relationships with hotels, pubs, restaurants, and businesses across
              Southwark, Elephant & Castle, and Waterloo. Our reputation for quality and reliability
              speaks for itself.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-florist-sage-light rounded-xl p-6">
                <svg className="w-12 h-12 text-florist-sage-dark mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="font-semibold text-gray-900">Hotels</p>
              </div>
              <div className="bg-florist-rose-light rounded-xl p-6">
                <svg className="w-12 h-12 text-florist-rose-dark mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <p className="font-semibold text-gray-900">Pubs</p>
              </div>
              <div className="bg-florist-sage-light rounded-xl p-6">
                <svg className="w-12 h-12 text-florist-sage-dark mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="font-semibold text-gray-900">Offices</p>
              </div>
              <div className="bg-florist-rose-light rounded-xl p-6">
                <svg className="w-12 h-12 text-florist-rose-dark mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
                <p className="font-semibold text-gray-900">Events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-florist-sage-dark to-florist-sage text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Discuss Your Business Needs</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether you need regular office flowers, event styling, or client gifts, we'd love to hear from you.
            Let's build a wonderful working relationship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02074071666"
              className="bg-white text-florist-sage-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call: 020 7407 1666</span>
            </a>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-florist-sage-dark transition-all shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <span>Get In Touch</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
