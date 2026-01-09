import Link from 'next/link';

export default function Shop() {
  const bouquets = [
    {
      name: 'Wild Rebel',
      price: '£60',
      description: 'Our signature wild and unstructured hand-tied bouquet with seasonal blooms',
      features: ['Seasonal flowers', 'Wild arrangement', 'Hand-tied by our florists'],
    },
    {
      name: 'Color Chaos',
      price: '£85',
      description: 'A flagrant disregard for the colour wheel — our most rebellious arrangement',
      features: ['Bold color combinations', 'Premium blooms', 'Unique seasonal selection'],
    },
    {
      name: 'Luxury Statement',
      price: '£120',
      description: 'Premium florals in our distinctive wild style for the most special occasions',
      features: ['Premium seasonal flowers', 'Large arrangement', 'Luxury presentation'],
    },
    {
      name: 'Bespoke Creation',
      price: 'From £150',
      description: 'Custom arrangements tailored to your vision and our rebellious aesthetic',
      features: ['Personalized consultation', 'Your choice of flowers', 'Bespoke design'],
    },
  ];

  return (
    <div className="bg-rebel-black">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rebel-purple/10 via-rebel-black to-rebel-pink/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient-rebel">Hand-Tied Bouquets</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-rebel-pink to-rebel-purple mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Wild arrangements that break all the rules • From £60
            </p>
          </div>
        </div>
      </section>

      {/* Bouquets Grid */}
      <section className="py-20 bg-rebel-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {bouquets.map((bouquet, index) => (
              <div
                key={bouquet.name}
                className={`bg-rebel-dark p-8 md:p-10 rounded-xl border-2 ${
                  index === 2 || index === 3
                    ? 'border-rebel-purple/50'
                    : 'border-rebel-pink/50'
                } hover:border-rebel-pink transition-all`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold text-white">{bouquet.name}</h3>
                  <span className="text-2xl font-bold text-rebel-pink">{bouquet.price}</span>
                </div>

                <p className="text-gray-300 text-lg mb-6">{bouquet.description}</p>

                <ul className="space-y-3 mb-8">
                  {bouquet.features.map((feature) => (
                    <li key={feature} className="flex items-start text-gray-400">
                      <span className="text-rebel-pink mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="block w-full text-center bg-gradient-to-r from-rebel-pink to-rebel-purple px-6 py-3 rounded-full text-white font-bold hover:opacity-90 transition-opacity"
                >
                  Order Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-rebel-grey">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              The <span className="text-gradient-rebel">Rebel Rebel</span> Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: '🎨',
                title: 'Color Rebellion',
                description: 'We deliberately ignore the colour wheel, creating unexpected combinations that surprise and delight',
              },
              {
                icon: '🌿',
                title: 'Wild & Unstructured',
                description: 'Our arrangements celebrate nature\'s organic forms with minimal manipulation',
              },
              {
                icon: '🌸',
                title: 'Seasonal Best',
                description: 'Blooms from our Tuscany farm, Norfolk garden, and carefully selected growers',
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-rebel-dark p-8 rounded-xl border-l-4 border-rebel-pink">
            <p className="text-xl text-gray-300 italic text-center">
              "Every bouquet is a small rebellion against conventional floristry.
              We've been challenging the rules for 25 years."
            </p>
            <p className="text-center text-rebel-pink mt-4 font-semibold">
              — Mairead & Athena, Founders
            </p>
          </div>
        </div>
      </section>

      {/* Delivery & Info */}
      <section className="py-20 bg-rebel-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            <span className="text-rebel-purple">Delivery</span> & Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Delivery */}
            <div className="bg-rebel-dark p-8 rounded-xl border border-rebel-purple/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">🚚</span> Delivery Options
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-rebel-pink mr-3">→</span>
                  <div>
                    <strong className="text-white">Hackney & E8 Area:</strong> Same-day delivery available
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-rebel-pink mr-3">→</span>
                  <div>
                    <strong className="text-white">Central London:</strong> Next-day delivery
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-rebel-pink mr-3">→</span>
                  <div>
                    <strong className="text-white">Collection:</strong> Available from 117 Mare St
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-rebel-pink mr-3">→</span>
                  <div>
                    <strong className="text-white">Special Requests:</strong> Contact us for specific timing
                  </div>
                </li>
              </ul>
            </div>

            {/* Ordering */}
            <div className="bg-rebel-dark p-8 rounded-xl border border-rebel-pink/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">📞</span> How to Order
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Phone</h4>
                  <a
                    href="tel:02037452605"
                    className="text-rebel-pink hover:text-rebel-purple transition-colors text-xl font-bold"
                  >
                    020 3745 2605
                  </a>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Email</h4>
                  <a
                    href="mailto:hello@rebelrebel.co.uk"
                    className="text-rebel-pink hover:text-rebel-purple transition-colors"
                  >
                    hello@rebelrebel.co.uk
                  </a>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-2">In Person</h4>
                  <p className="text-gray-400">
                    Visit us at 117 Mare St, London E8 4RU<br />
                    (Near London Fields)
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-block w-full text-center border-2 border-rebel-purple px-6 py-3 rounded-full text-white font-bold hover:bg-rebel-purple/20 transition-all mt-4"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-rebel-grey via-rebel-dark to-rebel-grey">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Why Choose <span className="text-gradient-rebel">Rebel Rebel</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              '25 years of bold, rebellious floristry',
              'Trusted by BAFTAs, Vogue, Victoria Beckham',
              'Flower farm in Tuscany',
              'Cutting garden in Norfolk',
              'Wild, unstructured designs',
              'Premium seasonal blooms',
              'Hackney-based since 2000',
              'A-list credentials with local heart',
            ].map((point) => (
              <div
                key={point}
                className="bg-rebel-dark p-6 rounded-lg border border-rebel-pink/20 text-gray-300 text-left flex items-start"
              >
                <span className="text-rebel-pink mr-3 text-xl">✓</span>
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="bg-rebel-black p-8 rounded-xl border-2 border-rebel-pink/30">
            <p className="text-2xl text-white mb-6">
              Ready to order your wild bouquet?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:02037452605"
                className="bg-gradient-to-r from-rebel-pink to-rebel-purple px-8 py-4 rounded-full text-white font-bold hover:opacity-90 transition-opacity"
              >
                Call 020 3745 2605
              </a>
              <Link
                href="/contact"
                className="border-2 border-rebel-purple px-8 py-4 rounded-full text-white font-bold hover:bg-rebel-purple/20 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
