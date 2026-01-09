export default function Contact() {
  return (
    <div className="bg-photo-black">
      {/* Hero */}
      <section className="py-20 px-4 text-center border-b border-photo-gray-800">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-light mb-6">Book a Session</h1>
          <div className="w-20 h-0.5 bg-photo-red mx-auto mb-6"></div>
          <p className="text-xl text-photo-gray-300">
            Ready to create exceptional portraits? Get in touch to discuss your project and book your photography session
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-light mb-8">Get in Touch</h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-photo-red/10 border border-photo-red flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-photo-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">Phone</h3>
                    <a href="tel:07973844035" className="text-photo-gray-300 hover:text-photo-red transition-colors text-lg">
                      07973 844035
                    </a>
                    <p className="text-photo-gray-500 text-sm mt-1">Call to discuss your project</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-photo-red/10 border border-photo-red flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-photo-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">Studio Location</h3>
                    <p className="text-photo-gray-300 text-lg">Camberwell</p>
                    <p className="text-photo-gray-300">South London</p>
                    <p className="text-photo-gray-500 text-sm mt-1">Fully equipped photography studio</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-photo-red/10 border border-photo-red flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-photo-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">Availability</h3>
                    <p className="text-photo-gray-300">Flexible scheduling available</p>
                    <p className="text-photo-gray-500 text-sm mt-1">Evening and weekend sessions by appointment</p>
                  </div>
                </div>
              </div>

              {/* Studio Image */}
              <div className="image-placeholder-wide">
                <div className="text-xs">Studio Interior</div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2 text-sm uppercase tracking-wider">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-photo-gray-900 border border-photo-gray-700 text-white px-4 py-3 focus:outline-none focus:border-photo-red transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2 text-sm uppercase tracking-wider">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-photo-gray-900 border border-photo-gray-700 text-white px-4 py-3 focus:outline-none focus:border-photo-red transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white mb-2 text-sm uppercase tracking-wider">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full bg-photo-gray-900 border border-photo-gray-700 text-white px-4 py-3 focus:outline-none focus:border-photo-red transition-colors"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-white mb-2 text-sm uppercase tracking-wider">
                    Service Type *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full bg-photo-gray-900 border border-photo-gray-700 text-white px-4 py-3 focus:outline-none focus:border-photo-red transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="corporate">Corporate Headshots</option>
                    <option value="creative">Creative Portraits</option>
                    <option value="musician">Musicians & DJs</option>
                    <option value="model">Model Portfolio</option>
                    <option value="commercial">Commercial Project</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2 text-sm uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-photo-gray-900 border border-photo-gray-700 text-white px-4 py-3 focus:outline-none focus:border-photo-red transition-colors resize-none"
                    placeholder="Tell me about your project, preferred dates, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-photo-red text-white px-8 py-4 hover:bg-red-600 transition-colors uppercase tracking-widest text-sm font-medium"
                >
                  Send Message
                </button>

                <p className="text-photo-gray-500 text-sm">
                  * Required fields. I'll respond to your inquiry within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 px-4 bg-photo-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">What to Expect</h2>
            <div className="w-20 h-0.5 bg-photo-red mx-auto mb-6"></div>
            <p className="text-photo-gray-300 text-lg">The photography session process from initial contact to final delivery</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-photo-red/10 border border-photo-red flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-photo-red font-light">1</span>
              </div>
              <h3 className="text-xl font-light mb-3 text-white">Initial Consultation</h3>
              <p className="text-photo-gray-300 text-sm">
                We'll discuss your needs, goals, and vision for the shoot. I'll answer questions and provide guidance on styling and preparation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-photo-red/10 border border-photo-red flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-photo-red font-light">2</span>
              </div>
              <h3 className="text-xl font-light mb-3 text-white">Session Planning</h3>
              <p className="text-photo-gray-300 text-sm">
                We'll schedule your session at the South London studio and plan the specific looks, backgrounds, and styling elements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-photo-red/10 border border-photo-red flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-photo-red font-light">3</span>
              </div>
              <h3 className="text-xl font-light mb-3 text-white">The Photo Shoot</h3>
              <p className="text-photo-gray-300 text-sm">
                Relaxed, professional session in the fully equipped studio. I'll guide you throughout to ensure you're comfortable and looking your best.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-photo-red/10 border border-photo-red flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-photo-red font-light">4</span>
              </div>
              <h3 className="text-xl font-light mb-3 text-white">Image Delivery</h3>
              <p className="text-photo-gray-300 text-sm">
                Professional editing and retouching. High-resolution images delivered digitally, ready for your professional or creative use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-0.5 bg-photo-red mx-auto"></div>
          </div>

          <div className="space-y-8">
            <div className="border-b border-photo-gray-800 pb-8">
              <h3 className="text-xl font-light mb-3 text-white">How long does a typical session last?</h3>
              <p className="text-photo-gray-300">
                Session length varies depending on the type of shoot. Corporate headshots typically take 30-60 minutes, while creative portrait and model portfolio sessions usually run 1-2 hours to allow for multiple looks and setups.
              </p>
            </div>

            <div className="border-b border-photo-gray-800 pb-8">
              <h3 className="text-xl font-light mb-3 text-white">What should I wear?</h3>
              <p className="text-photo-gray-300">
                For corporate headshots, wear professional business attire in solid colors. For creative sessions, we can discuss styling options based on your vision. I recommend bringing multiple outfit options to provide variety in your final images.
              </p>
            </div>

            <div className="border-b border-photo-gray-800 pb-8">
              <h3 className="text-xl font-light mb-3 text-white">When will I receive my photos?</h3>
              <p className="text-photo-gray-300">
                Turnaround time depends on the package and urgency. Standard delivery is 7-10 days for fully edited and retouched images. Rush delivery options are available for corporate clients with tight deadlines.
              </p>
            </div>

            <div className="border-b border-photo-gray-800 pb-8">
              <h3 className="text-xl font-light mb-3 text-white">Do you offer location shoots?</h3>
              <p className="text-photo-gray-300">
                While my fully equipped Camberwell studio provides ideal conditions for most projects, I'm happy to discuss location shoots for specific commercial projects or creative concepts that require outdoor or on-site photography.
              </p>
            </div>

            <div className="pb-8">
              <h3 className="text-xl font-light mb-3 text-white">What's included in the session fee?</h3>
              <p className="text-photo-gray-300">
                All sessions include professional photography in the studio, expert guidance and direction, professional editing and retouching, and high-resolution digital delivery. Specific package details and pricing will be discussed during the initial consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-photo-red">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-light mb-6">Let's Create Together</h2>
          <p className="text-lg mb-8 opacity-90">
            Whether you need professional headshots, creative portraits, or commercial photography, I'm here to help bring your vision to life.
          </p>
          <a
            href="tel:07973844035"
            className="inline-flex items-center space-x-3 bg-white text-photo-black px-10 py-4 hover:bg-photo-gray-100 transition-colors text-lg font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Call Now: 07973 844035</span>
          </a>
        </div>
      </section>
    </div>
  );
}
