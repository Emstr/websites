import Link from 'next/link';

export default function Workshops() {
  return (
    <div className="bg-rebel-black">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rebel-pink/10 via-rebel-black to-rebel-purple/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient-rebel">Floristry Workshops</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-rebel-pink to-rebel-purple mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Learn our rebellious approach to wild, unstructured floristry
            </p>
          </div>
        </div>
      </section>

      {/* Partnership with Dusty Knuckle */}
      <section className="py-20 bg-rebel-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-rebel-pink/20 px-4 py-2 rounded-full mb-4">
                <span className="text-rebel-pink font-bold text-sm">IN PARTNERSHIP WITH</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Workshops at <span className="text-rebel-purple">Dusty Knuckle</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  We host our workshops at Dusty Knuckle Bakery in Dalston, one of Hackney's
                  most creative community spaces.
                </p>
                <p>
                  In an intimate setting surrounded by the aroma of fresh bread, you'll learn
                  the techniques that have made Rebel Rebel the florist of choice for BAFTAs,
                  Vogue, and Victoria Beckham.
                </p>
                <p className="text-rebel-pink italic font-semibold">
                  25 years of wild floristry expertise, distilled into hands-on workshops
                  where rules are meant to be broken.
                </p>
              </div>
            </div>

            <div className="bg-rebel-dark p-10 rounded-xl border-2 border-rebel-pink/50">
              <h3 className="text-2xl font-bold text-white mb-6">Workshop Location</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="text-lg font-bold text-rebel-pink mb-2">Dusty Knuckle Bakery</h4>
                  <p className="text-gray-400">
                    Abbot Street, Dalston<br />
                    London E8
                  </p>
                </div>
                <div className="pt-4 border-t border-rebel-pink/20">
                  <h4 className="text-lg font-bold text-white mb-2">What's Included</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start">
                      <span className="text-rebel-pink mr-2">✓</span>
                      All materials & premium blooms
                    </li>
                    <li className="flex items-start">
                      <span className="text-rebel-pink mr-2">✓</span>
                      Expert instruction from our team
                    </li>
                    <li className="flex items-start">
                      <span className="text-rebel-pink mr-2">✓</span>
                      Take your creation home
                    </li>
                    <li className="flex items-start">
                      <span className="text-rebel-pink mr-2">✓</span>
                      Refreshments & coffee
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Types */}
      <section className="py-20 bg-rebel-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Our <span className="text-gradient-rebel">Workshops</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Beginner Workshop */}
            <div className="bg-rebel-dark p-8 rounded-xl border-2 border-rebel-pink/50 hover:border-rebel-pink transition-all">
              <div className="text-5xl mb-4">🌸</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Introduction to Rebel Floristry
              </h3>
              <p className="text-gray-400 mb-4">
                Perfect for beginners. Learn the fundamentals of our wild, unstructured approach.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start text-sm">
                  <span className="text-rebel-pink mr-2">→</span>
                  Color theory rebellion
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-rebel-pink mr-2">→</span>
                  Wild arrangement techniques
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-rebel-pink mr-2">→</span>
                  Seasonal bloom selection
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-rebel-pink mr-2">→</span>
                  Hand-tied bouquet creation
                </li>
              </ul>
              <div className="pt-4 border-t border-rebel-pink/20">
                <p className="text-rebel-pink font-bold">3 hours • £95 per person</p>
              </div>
            </div>

            {/* Advanced Workshop */}
            <div className="bg-rebel-dark p-8 rounded-xl border-2 border-rebel-purple/50 hover:border-rebel-purple transition-all">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Advanced Wild Arrangements
              </h3>
              <p className="text-gray-400 mb-4">
                For those with floristry experience. Master our signature rebellious style.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start text-sm">
                  <span className="text-rebel-purple mr-2">→</span>
                  Complex wild structures
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-rebel-purple mr-2">→</span>
                  Event installation techniques
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-rebel-purple mr-2">→</span>
                  Professional finishing
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-rebel-purple mr-2">→</span>
                  Portfolio development
                </li>
              </ul>
              <div className="pt-4 border-t border-rebel-purple/20">
                <p className="text-rebel-purple font-bold">4 hours • £150 per person</p>
              </div>
            </div>

            {/* Masterclass */}
            <div className="bg-rebel-dark p-8 rounded-xl border-2 border-rebel-pink/50 hover:border-rebel-pink transition-all">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Masterclass with Founders
              </h3>
              <p className="text-gray-400 mb-4">
                Learn directly from Mairead & Athena. 25 years of wisdom in one intensive day.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start text-sm">
                  <span className="text-rebel-pink mr-2">→</span>
                  Behind-the-scenes A-list stories
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-rebel-pink mr-2">→</span>
                  Wedding & event design
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-rebel-pink mr-2">→</span>
                  Business of bold floristry
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-rebel-pink mr-2">→</span>
                  Intimate small group (max 6)
                </li>
              </ul>
              <div className="pt-4 border-t border-rebel-pink/20">
                <p className="text-rebel-pink font-bold">Full day • £350 per person</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-gradient-to-br from-rebel-grey via-rebel-dark to-rebel-grey">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            The <span className="text-rebel-pink">Rebel Rebel</span> Method
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'Break the Rules',
                description: 'Learn why "a flagrant disregard for the colour wheel" creates the most memorable arrangements',
              },
              {
                title: 'Wild & Organic',
                description: 'Master techniques for creating unstructured, natural-looking designs that appear effortlessly wild',
              },
              {
                title: 'Premium Blooms',
                description: 'Understand how to source and work with the highest quality seasonal flowers',
              },
              {
                title: 'A-List Standards',
                description: 'Learn the quality and attention to detail that has won us clients like BAFTAs and Vogue',
              },
            ].map((item) => (
              <div key={item.title} className="bg-rebel-dark p-6 rounded-lg border border-rebel-pink/20">
                <h3 className="text-xl font-bold text-rebel-pink mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-rebel-black p-8 rounded-xl border-l-4 border-rebel-purple">
            <p className="text-xl text-gray-300 italic text-center mb-4">
              "We've spent 25 years perfecting our rebellious approach. Now it's your turn
              to learn what makes Rebel Rebel floristry so distinctive."
            </p>
            <p className="text-center text-rebel-pink font-semibold">
              — Mairead & Athena, Founders
            </p>
          </div>
        </div>
      </section>

      {/* Private Group & Corporate */}
      <section className="py-20 bg-rebel-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            <span className="text-rebel-purple">Private</span> & Corporate Workshops
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Private Groups */}
            <div className="bg-rebel-dark p-8 rounded-xl border border-rebel-pink/30">
              <h3 className="text-2xl font-bold text-white mb-4">Private Group Workshops</h3>
              <p className="text-gray-400 mb-6">
                Perfect for hen parties, birthdays, team building, or special celebrations.
              </p>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-rebel-pink mr-3">✓</span>
                  <span>Tailored to your group's experience level</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rebel-pink mr-3">✓</span>
                  <span>Flexible scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rebel-pink mr-3">✓</span>
                  <span>Your choice of theme or style</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rebel-pink mr-3">✓</span>
                  <span>Minimum 6 people</span>
                </li>
              </ul>
              <p className="text-rebel-pink font-bold">From £90 per person</p>
            </div>

            {/* Corporate */}
            <div className="bg-rebel-dark p-8 rounded-xl border border-rebel-purple/30">
              <h3 className="text-2xl font-bold text-white mb-4">Corporate Workshops</h3>
              <p className="text-gray-400 mb-6">
                Creative team building with the florist trusted by Gucci, Dior, and Victoria Beckham.
              </p>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-rebel-purple mr-3">✓</span>
                  <span>Bespoke programs for your company</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rebel-purple mr-3">✓</span>
                  <span>Can be held at your office</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rebel-purple mr-3">✓</span>
                  <span>Team creativity & collaboration focus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rebel-purple mr-3">✓</span>
                  <span>Catering available</span>
                </li>
              </ul>
              <p className="text-rebel-purple font-bold">Contact for pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-rebel-grey">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Workshop <span className="text-gradient-rebel">Reviews</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                quote: "The most creative and inspiring workshop I've attended. Mairead's passion for breaking floristry rules is contagious!",
                author: "Sarah K., Masterclass Attendee",
              },
              {
                quote: "Our team absolutely loved the corporate workshop. It was the perfect blend of creativity, skill-building, and fun.",
                author: "Corporate Client, Tech Company",
              },
              {
                quote: "I've taken workshops all over London, but Rebel Rebel's approach is truly unique. Wild, rebellious, and utterly beautiful.",
                author: "Emma L., Advanced Workshop",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-rebel-dark p-6 rounded-lg border-l-4 border-rebel-pink"
              >
                <p className="text-lg text-gray-300 italic mb-3">"{testimonial.quote}"</p>
                <p className="text-rebel-pink font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-20 bg-gradient-to-br from-rebel-pink/20 via-rebel-black to-rebel-purple/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Learn <span className="text-gradient-rebel">Rebel Floristry?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Book your workshop at Dusty Knuckle, Dalston, and discover 25 years of
            wild, rebellious floristry expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-rebel-pink to-rebel-purple px-10 py-4 rounded-full text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-rebel-pink/50"
            >
              Book a Workshop
            </Link>
            <a
              href="tel:02037452605"
              className="border-2 border-rebel-pink px-10 py-4 rounded-full text-white font-bold text-lg hover:bg-rebel-pink/10 transition-all"
            >
              Call 020 3745 2605
            </a>
          </div>

          <div className="mt-10 text-gray-400">
            <p>117 Mare St, Hackney • hello@rebelrebel.co.uk</p>
            <p className="mt-2 text-sm">Workshops held at Dusty Knuckle, Dalston</p>
          </div>
        </div>
      </section>
    </div>
  );
}
