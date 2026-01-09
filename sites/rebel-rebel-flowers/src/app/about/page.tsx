import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-rebel-black">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rebel-purple/10 via-rebel-black to-rebel-pink/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient-rebel">Our Story</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-rebel-pink to-rebel-purple mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              25 years of wild, rebellious floristry in the heart of Hackney
            </p>
          </div>
        </div>
      </section>

      {/* The Beginning */}
      <section className="py-20 bg-rebel-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-rebel-dark p-10 md:p-12 rounded-xl border-l-4 border-rebel-pink">
            <div className="text-center mb-8">
              <span className="text-6xl mb-4 block">🌸</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Founded in <span className="text-rebel-pink">2000</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                In the year 2000, Mairead and Athena opened a small flower shop on Mare Street
                in Hackney with a simple but radical philosophy: floristry didn't need to
                follow the rules.
              </p>

              <p>
                While other florists obsessed over the colour wheel and traditional symmetry,
                Mairead and Athena celebrated nature's wild, unstructured beauty. They created
                arrangements that broke conventions, combined "clashing" colours, and let blooms
                express their organic forms.
              </p>

              <p className="text-xl text-rebel-pink italic font-semibold">
                "A flagrant disregard for the colour wheel" became more than a tagline —
                it became a movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Founders */}
      <section className="py-20 bg-rebel-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Meet the <span className="text-gradient-rebel">Founders</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mairead */}
            <div className="bg-rebel-dark p-8 rounded-xl border-2 border-rebel-pink/50">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🌺</div>
                <h3 className="text-3xl font-bold text-white mb-2">Mairead</h3>
                <p className="text-rebel-pink font-semibold">Co-Founder</p>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  The creative visionary behind Rebel Rebel's signature wild style. Mairead's
                  artistic background and fearless approach to color transformed London's
                  floristry scene.
                </p>
                <p>
                  Her work has graced the BAFTAs, appeared in American Vogue, and adorned
                  events for Victoria Beckham, Gucci, and Dior.
                </p>
                <p className="text-white italic">
                  "Rules are made to be broken. The colour wheel is just a suggestion."
                </p>
              </div>
            </div>

            {/* Athena */}
            <div className="bg-rebel-dark p-8 rounded-xl border-2 border-rebel-purple/50">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🌻</div>
                <h3 className="text-3xl font-bold text-white mb-2">Athena</h3>
                <p className="text-rebel-purple font-semibold">Co-Founder</p>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  The horticultural expert who sources the world's most extraordinary blooms.
                  Athena established our flower farm in Tuscany and cutting garden in Norfolk.
                </p>
                <p>
                  Her deep knowledge of seasonal flowers and commitment to quality ensures
                  every Rebel Rebel arrangement features premium blooms.
                </p>
                <p className="text-white italic">
                  "Wild doesn't mean random. It means celebrating nature's perfect imperfection."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-20 bg-rebel-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            <span className="text-rebel-pink">25 Years</span> of Breaking Rules
          </h2>

          <div className="space-y-8">
            {[
              {
                year: '2000',
                title: 'The Beginning',
                description: 'Mairead and Athena open Rebel Rebel Flowers on Mare Street, Hackney, with a mission to challenge conventional floristry.',
              },
              {
                year: '2005',
                title: 'First High-Profile Client',
                description: 'Our wild style catches the attention of London\'s fashion industry. First major event for a luxury brand.',
              },
              {
                year: '2010',
                title: 'BAFTAs Partnership',
                description: 'Selected as florist for the British Academy Film Awards, cementing our reputation for high-profile events.',
              },
              {
                year: '2012',
                title: 'Tuscany Flower Farm',
                description: 'Athena establishes our flower farm in Tuscany, ensuring access to extraordinary Italian blooms.',
              },
              {
                year: '2015',
                title: 'American Vogue Features',
                description: 'Our arrangements featured in American Vogue editorial shoots, bringing international recognition.',
              },
              {
                year: '2018',
                title: 'A-List Expansion',
                description: 'Victoria Beckham, Gucci, Dior, and Fenty become regular clients for events and activations.',
              },
              {
                year: '2020',
                title: 'Norfolk Cutting Garden',
                description: 'Launch our cutting garden in Norfolk, bringing more British-grown seasonal blooms into our work.',
              },
              {
                year: '2022',
                title: 'Workshops Launch',
                description: 'Begin teaching our rebellious approach at Dusty Knuckle in Dalston, sharing 20+ years of expertise.',
              },
              {
                year: '2025',
                title: '25th Anniversary',
                description: 'Celebrating a quarter century of wild, unstructured floristry in Hackney. Still breaking rules, still creating extraordinary moments.',
              },
            ].map((milestone, index) => (
              <div
                key={milestone.year}
                className={`flex flex-col md:flex-row gap-6 items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/4 flex-shrink-0">
                  <div
                    className={`text-center p-6 rounded-xl ${
                      index % 2 === 0 ? 'bg-rebel-pink/20' : 'bg-rebel-purple/20'
                    }`}
                  >
                    <span
                      className={`text-4xl font-bold ${
                        index % 2 === 0 ? 'text-rebel-pink' : 'text-rebel-purple'
                      }`}
                    >
                      {milestone.year}
                    </span>
                  </div>
                </div>

                <div className="md:w-3/4">
                  <div className="bg-rebel-dark p-6 rounded-xl border-l-4 border-rebel-pink/50">
                    <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-rebel-grey via-rebel-dark to-rebel-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            What We <span className="text-gradient-rebel">Stand For</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎨',
                title: 'Creative Rebellion',
                description: 'We challenge conventions and celebrate nature\'s wild beauty',
              },
              {
                icon: '🌸',
                title: 'Quality First',
                description: 'Premium blooms from our Tuscany farm and Norfolk garden',
              },
              {
                icon: '💚',
                title: 'Hackney Roots',
                description: '25 years on Mare Street, deeply embedded in our community',
              },
              {
                icon: '⭐',
                title: 'Excellence',
                description: 'A-list standards for every client, from BAFTAs to local weddings',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-rebel-dark p-8 rounded-xl border border-rebel-pink/20 text-center hover:border-rebel-pink/50 transition-all"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From Hackney to the World */}
      <section className="py-20 bg-rebel-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              From <span className="text-rebel-pink">Hackney</span> to the World
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Hackney */}
            <div className="bg-rebel-dark p-8 rounded-xl border-2 border-rebel-pink/50 text-center">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-white mb-3">Hackney Studio</h3>
              <p className="text-gray-400">
                117 Mare St, London E8 4RU<br />
                Our home since 2000
              </p>
            </div>

            {/* Tuscany */}
            <div className="bg-rebel-dark p-8 rounded-xl border-2 border-rebel-purple/50 text-center">
              <div className="text-5xl mb-4">🇮🇹</div>
              <h3 className="text-2xl font-bold text-white mb-3">Tuscany Farm</h3>
              <p className="text-gray-400">
                Rebel Rebel Italia<br />
                Premium Italian blooms
              </p>
            </div>

            {/* Norfolk */}
            <div className="bg-rebel-dark p-8 rounded-xl border-2 border-rebel-pink/50 text-center">
              <div className="text-5xl mb-4">🌻</div>
              <h3 className="text-2xl font-bold text-white mb-3">Norfolk Garden</h3>
              <p className="text-gray-400">
                Cutting Garden<br />
                British seasonal flowers
              </p>
            </div>
          </div>

          <div className="bg-rebel-dark p-10 rounded-xl border-l-4 border-rebel-purple">
            <p className="text-2xl text-white text-center mb-6">
              "25 years ago, we started with a simple idea: floristry should be wild, rebellious, and beautiful."
            </p>
            <p className="text-xl text-gray-300 text-center">
              Today, from our Hackney studio to our Tuscany farm, we're still breaking rules
              and creating extraordinary moments for clients around the world.
            </p>
            <p className="text-center text-rebel-pink mt-6 font-semibold text-lg">
              — Mairead & Athena
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-rebel-pink/20 via-rebel-black to-rebel-purple/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our <span className="text-gradient-rebel">Rebel Story</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Whether it's a wedding, event, bouquet, or workshop, we'd love to create
            something extraordinary with you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-rebel-pink to-rebel-purple px-10 py-4 rounded-full text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-rebel-pink/50"
            >
              Get in Touch
            </Link>
            <Link
              href="/weddings"
              className="border-2 border-rebel-pink px-10 py-4 rounded-full text-white font-bold text-lg hover:bg-rebel-pink/10 transition-all"
            >
              View Our Work
            </Link>
          </div>

          <div className="mt-10 text-gray-400">
            <p>117 Mare St, Hackney E8 4RU • 020 3745 2605 • hello@rebelrebel.co.uk</p>
          </div>
        </div>
      </section>
    </div>
  );
}
