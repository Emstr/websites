import Link from 'next/link';

export default function Contact() {
  return (
    <div className="bg-rebel-black">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rebel-pink/10 via-rebel-black to-rebel-purple/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient-rebel">Get in Touch</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-rebel-pink to-rebel-purple mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Let's create something extraordinary together
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-rebel-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Visit Our <span className="text-rebel-pink">Hackney Studio</span>
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  We're located on Mare Street in the heart of Hackney, near London Fields.
                  Come visit us to discuss your floristry needs or browse our seasonal bouquets.
                </p>
              </div>

              {/* Address */}
              <div className="bg-rebel-dark p-8 rounded-xl border-2 border-rebel-pink/50">
                <div className="flex items-start">
                  <span className="text-4xl mr-4">📍</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Address</h3>
                    <p className="text-gray-300 text-lg">
                      117 Mare St<br />
                      London E8 4RU
                    </p>
                    <p className="text-gray-400 text-sm mt-2">Near London Fields</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-rebel-dark p-8 rounded-xl border-2 border-rebel-purple/50">
                <div className="flex items-start">
                  <span className="text-4xl mr-4">📞</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Phone</h3>
                    <a
                      href="tel:02037452605"
                      className="text-rebel-pink hover:text-rebel-purple transition-colors text-2xl font-bold"
                    >
                      020 3745 2605
                    </a>
                    <p className="text-gray-400 text-sm mt-2">
                      Monday - Saturday, 9am - 6pm
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-rebel-dark p-8 rounded-xl border-2 border-rebel-pink/50">
                <div className="flex items-start">
                  <span className="text-4xl mr-4">✉️</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Email</h3>
                    <a
                      href="mailto:hello@rebelrebel.co.uk"
                      className="text-rebel-pink hover:text-rebel-purple transition-colors text-xl"
                    >
                      hello@rebelrebel.co.uk
                    </a>
                    <p className="text-gray-400 text-sm mt-2">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form / Quick Links */}
            <div className="bg-rebel-dark p-10 rounded-xl border border-rebel-pink/30">
              <h3 className="text-3xl font-bold text-white mb-6">
                What Can We <span className="text-rebel-purple">Create</span> For You?
              </h3>

              <div className="space-y-6">
                {/* Quick Links to Services */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Our Services</h4>
                  <div className="space-y-3">
                    <Link
                      href="/weddings"
                      className="block p-4 bg-rebel-black rounded-lg border-l-4 border-rebel-pink hover:bg-rebel-grey transition-all"
                    >
                      <div className="flex items-start">
                        <span className="text-2xl mr-3">💐</span>
                        <div>
                          <h5 className="text-white font-bold mb-1">Weddings & Events</h5>
                          <p className="text-gray-400 text-sm">
                            Bold florals for unforgettable moments
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/shop"
                      className="block p-4 bg-rebel-black rounded-lg border-l-4 border-rebel-purple hover:bg-rebel-grey transition-all"
                    >
                      <div className="flex items-start">
                        <span className="text-2xl mr-3">💮</span>
                        <div>
                          <h5 className="text-white font-bold mb-1">Hand-Tied Bouquets</h5>
                          <p className="text-gray-400 text-sm">From £60 • Wild arrangements</p>
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/workshops"
                      className="block p-4 bg-rebel-black rounded-lg border-l-4 border-rebel-pink hover:bg-rebel-grey transition-all"
                    >
                      <div className="flex items-start">
                        <span className="text-2xl mr-3">🎨</span>
                        <div>
                          <h5 className="text-white font-bold mb-1">Workshops</h5>
                          <p className="text-gray-400 text-sm">
                            Learn at Dusty Knuckle, Dalston
                          </p>
                        </div>
                      </div>
                    </Link>

                    <div className="p-4 bg-rebel-black rounded-lg border-l-4 border-rebel-purple">
                      <div className="flex items-start">
                        <span className="text-2xl mr-3">🏢</span>
                        <div>
                          <h5 className="text-white font-bold mb-1">Corporate Events</h5>
                          <p className="text-gray-400 text-sm">
                            A-list standards for your brand
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-rebel-pink/20">
                  <h4 className="text-lg font-bold text-white mb-4">Get in Touch</h4>
                  <p className="text-gray-400 mb-6">
                    Ready to discuss your floristry needs? Contact us by phone, email, or
                    visit our Hackney studio.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:02037452605"
                      className="block w-full text-center bg-gradient-to-r from-rebel-pink to-rebel-purple px-6 py-4 rounded-full text-white font-bold hover:opacity-90 transition-opacity"
                    >
                      Call 020 3745 2605
                    </a>
                    <a
                      href="mailto:hello@rebelrebel.co.uk"
                      className="block w-full text-center border-2 border-rebel-purple px-6 py-4 rounded-full text-white font-bold hover:bg-rebel-purple/20 transition-all"
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-rebel-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Why <span className="text-gradient-rebel">Rebel Rebel</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '⭐',
                title: 'A-List Credentials',
                description: 'Trusted by BAFTAs, Vogue, Victoria Beckham, Gucci & Dior',
              },
              {
                icon: '🎨',
                title: 'Bold & Rebellious',
                description: 'A flagrant disregard for the colour wheel since 2000',
              },
              {
                icon: '🌸',
                title: 'Premium Quality',
                description: 'Blooms from our Tuscany farm & Norfolk garden',
              },
              {
                icon: '💚',
                title: '25 Years in Hackney',
                description: 'Deeply rooted in our community on Mare Street',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-rebel-dark p-8 rounded-xl border border-rebel-pink/20 text-center hover:border-rebel-pink/50 transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-rebel-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Frequently Asked <span className="text-rebel-pink">Questions</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                question: 'Do you deliver in London?',
                answer: 'Yes! We offer same-day delivery in Hackney and E8, next-day delivery across Central London, and can arrange delivery throughout Greater London. Contact us for specific timing and delivery costs.',
              },
              {
                question: 'Can I collect my order from your studio?',
                answer: 'Absolutely! We welcome collections from our Mare Street studio. Just give us a call or email ahead to let us know when you\'d like to collect.',
              },
              {
                question: 'How far in advance should I book for a wedding?',
                answer: 'For weddings and large events, we recommend booking 3-6 months in advance. However, we can sometimes accommodate shorter notice - just get in touch and we\'ll do our best to help.',
              },
              {
                question: 'What makes Rebel Rebel different?',
                answer: 'Our wild, unstructured approach and "flagrant disregard for the colour wheel" creates arrangements that are truly unique. Plus, with 25 years of experience and clients like BAFTAs and Vogue, you\'re in expert hands.',
              },
              {
                question: 'Do you offer corporate accounts?',
                answer: 'Yes! We work with many corporate clients for regular office flowers, events, and brand activations. Our A-list credentials include Gucci, Dior, and Fenty. Contact us to discuss your needs.',
              },
              {
                question: 'Where do your flowers come from?',
                answer: 'We source from our flower farm in Tuscany (Rebel Rebel Italia), our cutting garden in Norfolk, and carefully selected premium growers. We prioritize seasonal, high-quality blooms.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-rebel-dark p-6 rounded-xl border-l-4 border-rebel-pink/50"
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-20 bg-gradient-to-br from-rebel-grey via-rebel-dark to-rebel-grey">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            <span className="text-rebel-purple">Opening</span> Hours
          </h2>

          <div className="bg-rebel-dark p-10 rounded-xl border border-rebel-pink/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Studio Hours</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex justify-between p-3 bg-rebel-black/50 rounded">
                    <span>Monday - Friday</span>
                    <span className="text-rebel-pink font-semibold">9am - 6pm</span>
                  </li>
                  <li className="flex justify-between p-3 bg-rebel-black/50 rounded">
                    <span>Saturday</span>
                    <span className="text-rebel-pink font-semibold">10am - 5pm</span>
                  </li>
                  <li className="flex justify-between p-3 bg-rebel-black/50 rounded">
                    <span>Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Response</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-rebel-black/50 rounded">
                    <p className="text-rebel-pink font-bold mb-2">Phone</p>
                    <p className="text-gray-300">
                      Answered during studio hours<br />
                      <a href="tel:02037452605" className="text-white hover:text-rebel-pink transition-colors">
                        020 3745 2605
                      </a>
                    </p>
                  </div>
                  <div className="p-4 bg-rebel-black/50 rounded">
                    <p className="text-rebel-purple font-bold mb-2">Email</p>
                    <p className="text-gray-300">
                      Response within 24 hours<br />
                      <a href="mailto:hello@rebelrebel.co.uk" className="text-white hover:text-rebel-purple transition-colors">
                        hello@rebelrebel.co.uk
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-rebel-pink/20 text-center">
              <p className="text-gray-400">
                For urgent same-day orders or wedding consultations, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-rebel-pink/20 via-rebel-black to-rebel-purple/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Create Something <span className="text-gradient-rebel">Extraordinary</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            25 years of wild, rebellious floristry • Trusted by A-list clients • Based in Hackney
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="tel:02037452605"
              className="bg-gradient-to-r from-rebel-pink to-rebel-purple px-10 py-4 rounded-full text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-rebel-pink/50"
            >
              Call 020 3745 2605
            </a>
            <a
              href="mailto:hello@rebelrebel.co.uk"
              className="border-2 border-rebel-pink px-10 py-4 rounded-full text-white font-bold text-lg hover:bg-rebel-pink/10 transition-all"
            >
              Email Us
            </a>
          </div>

          <div className="text-gray-400">
            <p className="font-semibold text-lg text-white mb-2">Visit Our Studio</p>
            <p>117 Mare St, London E8 4RU (Near London Fields)</p>
            <p className="mt-2">Monday-Saturday • hello@rebelrebel.co.uk</p>
          </div>
        </div>
      </section>
    </div>
  );
}
