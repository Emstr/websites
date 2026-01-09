import Link from 'next/link';

export default function Weddings() {
  return (
    <div className="bg-rebel-black">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rebel-pink/10 via-rebel-black to-rebel-purple/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient-rebel">Weddings & Events</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-rebel-pink to-rebel-purple mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Bold, unforgettable florals for the most important moments of your life
            </p>
          </div>
        </div>
      </section>

      {/* A-List Track Record */}
      <section className="py-20 bg-rebel-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by <span className="text-rebel-pink">A-List Clients</span>
            </h2>
            <p className="text-gray-400 text-lg">
              The florist of choice for the world's most prestigious events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'BAFTAs',
                description: 'Official florals for British Academy Film Awards ceremonies',
                icon: '🏆',
              },
              {
                title: 'American Vogue',
                description: 'Featured editorials and high-fashion shoots',
                icon: '📸',
              },
              {
                title: 'Victoria Beckham',
                description: 'Personal events and brand activations',
                icon: '👗',
              },
              {
                title: 'Fenty',
                description: 'Bold florals for Rihanna\'s luxury brand events',
                icon: '💄',
              },
              {
                title: 'Gucci',
                description: 'European fashion week installations',
                icon: '👜',
              },
              {
                title: 'Dior',
                description: 'Couture shows and exclusive gatherings',
                icon: '💎',
              },
            ].map((client) => (
              <div
                key={client.title}
                className="bg-rebel-dark p-8 rounded-xl border border-rebel-pink/30 hover:border-rebel-pink transition-all"
              >
                <div className="text-5xl mb-4">{client.icon}</div>
                <h3 className="text-2xl font-bold text-rebel-pink mb-3">{client.title}</h3>
                <p className="text-gray-400">{client.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl text-white italic">
              "When the world's biggest brands need florals, they call Rebel Rebel"
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-rebel-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Wild, Unstructured, <span className="text-rebel-purple">Unforgettable</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  We don't do traditional. We don't do predictable. We create florals that
                  make people stop, stare, and remember.
                </p>
                <p>
                  Our signature style combines wild, organic forms with fearless color choices
                  that deliberately challenge conventional floral design.
                </p>
                <p className="text-rebel-pink italic font-semibold">
                  "A flagrant disregard for the colour wheel" isn't just a tagline —
                  it's how we've created extraordinary moments for 25 years.
                </p>
              </div>
            </div>

            <div className="bg-rebel-dark p-10 rounded-xl border-2 border-rebel-pink/30">
              <h3 className="text-2xl font-bold text-white mb-6">What We Do</h3>
              <ul className="space-y-4">
                {[
                  'Bespoke Wedding Florals',
                  'Ceremony Installations',
                  'Reception Centerpieces',
                  'Bridal Bouquets & Buttonholes',
                  'Venue Styling & Decor',
                  'Corporate Events',
                  'Fashion Week Installations',
                  'Brand Activations',
                  'VIP Gatherings',
                  'Award Ceremonies',
                ].map((service) => (
                  <li key={service} className="flex items-start">
                    <span className="text-rebel-pink mr-3 text-xl">→</span>
                    <span className="text-gray-300">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Rebel Rebel Difference */}
      <section className="py-20 bg-gradient-to-br from-rebel-grey via-rebel-dark to-rebel-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            The <span className="text-gradient-rebel">Rebel Rebel</span> Difference
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '25 Years of Bold Floristry',
                description: 'Since 2000, we\'ve been creating wild, unstructured arrangements that challenge the status quo.',
                icon: '🌸',
              },
              {
                title: 'Tuscany to Hackney',
                description: 'Our flower farm in Tuscany and cutting garden in Norfolk ensure the highest quality blooms.',
                icon: '🌻',
              },
              {
                title: 'A-List Credentials',
                description: 'When Victoria Beckham, Gucci, and the BAFTAs need florals, they trust Rebel Rebel.',
                icon: '⭐',
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center p-8">
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-rebel-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            What Our <span className="text-rebel-pink">Clients Say</span>
          </h2>

          <div className="space-y-8">
            {[
              {
                quote: "Rebel Rebel transformed our wedding into an artistic masterpiece. Their fearless approach to color and form created moments our guests are still talking about.",
                author: "Wedding Client, 2025",
              },
              {
                quote: "We've worked with florists worldwide, but Rebel Rebel's creative vision is in a league of its own. They don't just arrange flowers — they create experiences.",
                author: "Corporate Event Planner",
              },
              {
                quote: "25 years in Hackney and they're still pushing boundaries. Mairead and Athena's passion for wild, unstructured floristry is unmatched.",
                author: "Fashion Industry Professional",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-rebel-dark p-8 md:p-10 rounded-xl border-l-4 border-rebel-purple"
              >
                <p className="text-xl text-gray-300 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="text-rebel-pink font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-rebel-pink/20 via-rebel-black to-rebel-purple/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Create Something <span className="text-gradient-rebel">Extraordinary</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Whether it's an intimate wedding or a high-profile event, we'll bring our 25 years
            of bold, rebellious floristry to make your vision unforgettable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-rebel-pink to-rebel-purple px-10 py-4 rounded-full text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-rebel-pink/50"
            >
              Book a Consultation
            </Link>
            <a
              href="tel:02037452605"
              className="border-2 border-rebel-pink px-10 py-4 rounded-full text-white font-bold text-lg hover:bg-rebel-pink/10 transition-all"
            >
              Call 020 3745 2605
            </a>
          </div>

          <div className="mt-10 text-gray-400">
            <p>117 Mare St, Hackney E8 4RU • hello@rebelrebel.co.uk</p>
          </div>
        </div>
      </section>
    </div>
  );
}
