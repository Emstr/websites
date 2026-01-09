import Link from 'next/link';

export default function Shop() {
  const products = [
    {
      category: 'Bouquets',
      items: ['Hand-tied Bouquets', 'Luxury Flowers', 'Seasonal Arrangements', 'Anniversary Specials']
    },
    {
      category: 'Occasions',
      items: ['Wedding Flowers', 'Baby Gifts', 'Funeral Tributes', 'Corporate Events']
    },
    {
      category: 'Gifts & Extras',
      items: ['Balloons', 'Baskets', 'Champagne & Wine', 'Chocolates', 'Teddies', 'Plants']
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-florist-rose-light via-white to-florist-sage-light py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Shop Our <span className="text-florist-rose-dark">Beautiful Collection</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              From stunning bouquets to thoughtful gifts, find the perfect way to brighten someone's day
            </p>
            <a
              href="tel:02074071666"
              className="inline-flex items-center space-x-2 bg-florist-sage text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-florist-sage-dark transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call to Order: 020 7407 1666</span>
            </a>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {products.map((category, idx) => (
              <div key={idx} className={`mb-16 ${idx !== products.length - 1 ? 'border-b border-gray-200 pb-16' : ''}`}>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{category.category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="bg-florist-cream rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 bg-gradient-to-br from-florist-rose to-florist-sage rounded-full flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{item}</h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corsages Section */}
      <section className="py-16 bg-florist-rose-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Special Corsages & Buttonholes</h2>
            <p className="text-lg text-gray-600 mb-6">
              Perfect for weddings, proms, and special occasions. Custom-made with care and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How to Order</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-florist-sage text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call or Visit</h3>
                <p className="text-gray-600">
                  Ring us on <a href="tel:02074071666" className="text-florist-rose-dark font-semibold">020 7407 1666</a> or pop into our shop at 158 Long Lane
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-florist-rose-dark text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Share Your Vision</h3>
                <p className="text-gray-600">
                  Tell us about the occasion, preferred colours, and any special requirements
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-florist-sage-dark text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">We'll Handle the Rest</h3>
                <p className="text-gray-600">
                  We'll create something beautiful and deliver it with care
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Same-Day Delivery CTA */}
      <section className="py-16 bg-gradient-to-br from-florist-sage to-florist-sage-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Same-Day Delivery Available</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Order before 2pm for same-day delivery across Southwark, Elephant & Castle, Newington, and Waterloo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02074071666"
              className="bg-white text-florist-sage-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Order Now: 020 7407 1666</span>
            </a>
            <Link
              href="/delivery"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-florist-sage-dark transition-all shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <span>Delivery Info</span>
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
