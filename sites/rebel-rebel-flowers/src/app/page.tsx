import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-rebel-black">
      {/* Hero Section - Bold & Dramatic */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rebel-pink/20 via-rebel-black to-rebel-purple/20"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-gradient-rebel">Rebel Rebel</span>
              <span className="block text-white">Flowers</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-rebel-pink to-rebel-purple mx-auto mb-8"></div>
          </div>

          <p className="text-2xl md:text-4xl text-white font-light mb-6 italic">
            "A flagrant disregard for the colour wheel"
          </p>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Wild, unstructured arrangements trusted by BAFTAs, American Vogue, Victoria Beckham, Gucci & Dior
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/weddings"
              className="bg-gradient-to-r from-rebel-pink to-rebel-purple px-8 py-4 rounded-full text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-rebel-pink/50"
            >
              Weddings & Events
            </Link>
            <Link
              href="/shop"
              className="border-2 border-rebel-pink px-8 py-4 rounded-full text-white font-bold text-lg hover:bg-rebel-pink/10 transition-all"
            >
              Shop Bouquets
            </Link>
          </div>

          <div className="mt-12 text-sm text-gray-400">
            <p>117 Mare St, Hackney E8 4RU • Est. 2000</p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-rebel-pink/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-rebel-purple/10 rounded-full blur-3xl"></div>
      </section>

      {/* A-List Clients Section */}
      <section className="py-20 bg-rebel-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient-rebel">Trusted by the Best</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">25 years creating extraordinary florals for extraordinary clients</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              'BAFTAs',
              'American Vogue',
              'Victoria Beckham',
              'Fenty',
              'Gucci',
              'Dior',
            ].map((client) => (
              <div
                key={client}
                className="text-center p-6 bg-rebel-dark/50 rounded-lg border border-rebel-pink/20 hover:border-rebel-pink/50 transition-all"
              >
                <p className="text-white font-bold text-lg">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-rebel-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Wild & Unstructured <span className="text-rebel-pink">Floristry</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Weddings */}
            <Link href="/weddings" className="group">
              <div className="bg-rebel-dark p-8 rounded-xl border-2 border-transparent hover:border-rebel-pink transition-all duration-300 h-full">
                <div className="text-5xl mb-4">💐</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-rebel-pink transition-colors">
                  Weddings & Events
                </h3>
                <p className="text-gray-400">
                  Bold, unforgettable florals for your most important moments
                </p>
              </div>
            </Link>

            {/* Corporate */}
            <div className="bg-rebel-dark p-8 rounded-xl border-2 border-rebel-purple/30 h-full">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Corporate Events
              </h3>
              <p className="text-gray-400">
                Make a statement at your next high-profile event
              </p>
            </div>

            {/* Bouquets */}
            <Link href="/shop" className="group">
              <div className="bg-rebel-dark p-8 rounded-xl border-2 border-transparent hover:border-rebel-purple transition-all duration-300 h-full">
                <div className="text-5xl mb-4">💮</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-rebel-purple transition-colors">
                  Hand-tied Bouquets
                </h3>
                <p className="text-gray-400">
                  From £60 • Wild arrangements that break all the rules
                </p>
              </div>
            </Link>

            {/* Workshops */}
            <Link href="/workshops" className="group">
              <div className="bg-rebel-dark p-8 rounded-xl border-2 border-transparent hover:border-rebel-pink transition-all duration-300 h-full">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-rebel-pink transition-colors">
                  Workshops
                </h3>
                <p className="text-gray-400">
                  Learn our rebellious approach at Dusty Knuckle, Dalston
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-gradient-to-br from-rebel-dark via-rebel-grey to-rebel-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-gradient-rebel">Our Philosophy</span>
          </h2>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p className="text-2xl italic text-white">
              "Wild and unstructured, with a flagrant disregard for the colour wheel"
            </p>

            <p>
              Since 2000, founders Mairead and Athena have been creating extraordinary florals
              that challenge convention and celebrate nature's untamed beauty.
            </p>

            <p>
              From our Hackney studio near London Fields, to our flower farm in Tuscany and
              cutting garden in Norfolk, we cultivate blooms as bold and unapologetic as our designs.
            </p>
          </div>

          <Link
            href="/about"
            className="inline-block mt-10 border-2 border-rebel-purple px-8 py-3 rounded-full text-white font-bold hover:bg-rebel-purple/20 transition-all"
          >
            Our Story
          </Link>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-rebel-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Visit Us */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-6">
                Visit Our <span className="text-rebel-pink">Hackney Studio</span>
              </h2>
              <div className="space-y-3 text-gray-300">
                <p className="text-xl">117 Mare St, London E8 4RU</p>
                <p className="text-sm text-gray-400">Near London Fields</p>
                <div className="mt-6 space-y-2">
                  <p>
                    <a href="tel:02037452605" className="text-rebel-pink hover:text-rebel-purple transition-colors text-xl font-bold">
                      020 3745 2605
                    </a>
                  </p>
                  <p>
                    <a href="mailto:hello@rebelrebel.co.uk" className="text-gray-400 hover:text-rebel-pink transition-colors">
                      hello@rebelrebel.co.uk
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-rebel-dark p-8 rounded-xl border border-rebel-pink/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-400 mb-6">
                Ready to create something extraordinary? Contact us to discuss your vision.
              </p>
              <Link
                href="/contact"
                className="block w-full bg-gradient-to-r from-rebel-pink to-rebel-purple px-6 py-4 rounded-full text-white font-bold text-center hover:opacity-90 transition-opacity"
              >
                Contact Us
              </Link>
              <div className="mt-6 pt-6 border-t border-rebel-pink/20">
                <p className="text-sm text-gray-400 text-center">
                  Bouquets from £60 • Weddings • Events • Corporate • Workshops
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
