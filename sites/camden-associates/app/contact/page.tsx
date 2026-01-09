import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Camden Associates. London-based corporate finance specialists ready to discuss your transaction needs. Email: contact@camdenassociates.co.uk",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-charcoal to-background py-24 border-b border-gray-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full text-electric-blue text-sm font-medium mb-6">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Get in Touch
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact Camden Associates
            </h1>
            <p className="text-xl text-silver leading-relaxed">
              Ready to discuss your corporate finance needs? Our team is here to help. Contact us today to start a conversation about your strategic objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information - Prominently Displayed */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Get In Touch
              </h2>
              <p className="text-silver mb-8 leading-relaxed">
                Whether you're seeking advice on a specific transaction, exploring strategic options, or just want to learn more about our services, we'd be pleased to hear from you.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="bg-charcoal border border-gray-dark rounded-xl p-6 hover:border-electric-blue transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-electric-blue"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Email
                      </h3>
                      <a
                        href="mailto:contact@camdenassociates.co.uk"
                        className="text-electric-blue hover:text-blue-light transition-colors text-lg"
                      >
                        contact@camdenassociates.co.uk
                      </a>
                      <p className="text-silver text-sm mt-2">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-charcoal border border-gray-dark rounded-xl p-6 hover:border-electric-blue transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-electric-blue"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Phone
                      </h3>
                      <a
                        href="tel:+442071234567"
                        className="text-electric-blue hover:text-blue-light transition-colors text-lg"
                      >
                        +44 20 7123 4567
                      </a>
                      <p className="text-silver text-sm mt-2">
                        Monday - Friday, 9:00 - 17:30 GMT
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-charcoal border border-gray-dark rounded-xl p-6 hover:border-electric-blue transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-electric-blue"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Location
                      </h3>
                      <p className="text-silver">
                        London, United Kingdom
                      </p>
                      <p className="text-silver text-sm mt-2">
                        Serving clients across Europe and internationally
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-charcoal border border-gray-dark rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Send Us a Message
                </h3>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-silver mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-background border border-gray-dark rounded-lg text-white placeholder-silver/50 focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-silver mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-background border border-gray-dark rounded-lg text-white placeholder-silver/50 focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-silver mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-background border border-gray-dark rounded-lg text-white placeholder-silver/50 focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-colors"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-silver mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-background border border-gray-dark rounded-lg text-white placeholder-silver/50 focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-colors"
                      placeholder="+44 20 ..."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="sector"
                      className="block text-sm font-medium text-silver mb-2"
                    >
                      Sector of Interest
                    </label>
                    <select
                      id="sector"
                      name="sector"
                      className="w-full px-4 py-3 bg-background border border-gray-dark rounded-lg text-white focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-colors"
                    >
                      <option value="">Select a sector</option>
                      <option value="biotech">Biotech</option>
                      <option value="technology">Technology</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="mining">Mining & Exploration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-silver mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-gray-dark rounded-lg text-white placeholder-silver/50 focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-colors resize-none"
                      placeholder="Tell us about your inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-electric-blue text-white rounded-lg hover:bg-blue-light transition-colors font-semibold text-lg"
                  >
                    Send Message
                  </button>

                  <p className="text-silver text-sm text-center">
                    * Required fields
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prefer to Call or Email Directly?
            </h2>
            <p className="text-xl text-silver">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a
              href="mailto:contact@camdenassociates.co.uk"
              className="bg-background border-2 border-gray-dark rounded-xl p-8 hover:border-electric-blue transition-all group text-center"
            >
              <div className="w-16 h-16 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-electric-blue/20 transition-colors">
                <svg
                  className="w-8 h-8 text-electric-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-electric-blue text-lg mb-2">
                contact@camdenassociates.co.uk
              </p>
              <p className="text-silver text-sm">
                We respond within 24 hours
              </p>
            </a>

            <a
              href="tel:+442071234567"
              className="bg-background border-2 border-gray-dark rounded-xl p-8 hover:border-electric-blue transition-all group text-center"
            >
              <div className="w-16 h-16 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-electric-blue/20 transition-colors">
                <svg
                  className="w-8 h-8 text-electric-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-electric-blue text-lg mb-2">
                +44 20 7123 4567
              </p>
              <p className="text-silver text-sm">
                Mon-Fri, 9:00-17:30 GMT
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What types of transactions do you advise on?",
                answer:
                  "We advise on a wide range of corporate finance transactions including M&A (buy-side and sell-side), equity financing (from seed to IPO), debt financing, strategic partnerships, joint ventures, and restructuring across our four core sectors.",
              },
              {
                question: "Which sectors do you specialize in?",
                answer:
                  "We specialize in four key sectors: Biotech, Technology, Real Estate, and Junior Mining & Exploration. Our team brings deep sector expertise and extensive transaction experience in each of these areas.",
              },
              {
                question: "Do you work with international clients?",
                answer:
                  "Yes, absolutely. Based in London, we serve clients throughout Europe and internationally. We have extensive experience structuring cross-border transactions and working with international investors and strategic partners.",
              },
              {
                question: "How do I get started?",
                answer:
                  "Simply reach out via email, phone, or the contact form above. We'll arrange an initial confidential discussion to understand your needs and explore how we can help. There's no obligation, and initial consultations are complimentary.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-charcoal border border-gray-dark rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-silver">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
