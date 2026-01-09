import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Archstone Solicitors in Stratford, East London. Call 020 8534 8008 or email info@archstone.org.uk for a free consultation. Located near Westfield Stratford City.',
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Get in touch with Archstone Solicitors today. We offer free initial consultations and are ready
              to help with all your legal needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Phone</h3>
                    <a
                      href="tel:02085348008"
                      className="text-gray-700 hover:text-gold transition-colors text-lg font-medium"
                    >
                      020 8534 8008
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Monday - Friday: 9:00am - 6:00pm</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Email</h3>
                    <a
                      href="mailto:info@archstone.org.uk"
                      className="text-gray-700 hover:text-gold transition-colors text-lg font-medium"
                    >
                      info@archstone.org.uk
                    </a>
                    <p className="text-sm text-gray-600 mt-1">We aim to respond within 24 hours</p>
                  </div>
                </div>

                {/* Fax */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Fax</h3>
                    <p className="text-gray-700 text-lg font-medium">020 8534 7007</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Office Location</h3>
                    <p className="text-gray-700">
                      Stratford, East London<br />
                      Near Westfield Stratford City
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Easily accessible via Stratford Station<br />
                      (Central, Jubilee, DLR, Overground lines)
                    </p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="mt-8 p-6 bg-primary text-white rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00am - 6:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-200">
                  Evening appointments available upon request
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                      placeholder="john.smith@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                      placeholder="020 1234 5678"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option value="immigration">Immigration Law</option>
                      <option value="conveyancing">Conveyancing</option>
                      <option value="family">Family Law</option>
                      <option value="litigation">Civil Litigation</option>
                      <option value="personal-injury">Personal Injury</option>
                      <option value="commercial">Company & Commercial</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors resize-none"
                      placeholder="Please provide details about your legal matter..."
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      className="mt-1 w-4 h-4 text-gold border-gray-300 rounded focus:ring-gold"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      I agree to the{' '}
                      <a href="/privacy" className="text-gold hover:underline">
                        Privacy Policy
                      </a>{' '}
                      and consent to being contacted about my enquiry
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-light text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors shadow-lg"
                  >
                    Send Message
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    We aim to respond to all enquiries within 24 hours
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Areas We Serve
          </h2>
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              'Stratford',
              'Canary Wharf',
              'Whitechapel',
              'Hackney',
              'East Ham',
              'Romford',
              'Essex',
              'Newham',
              'Tower Hamlets',
              'Waltham Forest',
              'Barking & Dagenham',
              'Redbridge',
            ].map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-700 text-sm"
              >
                <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{area}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            We serve clients throughout East London, Essex, and beyond. Contact us regardless of your location.
          </p>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12 bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <svg className="w-16 h-16 text-gold mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="text-2xl font-bold text-primary mb-2">Find Us in Stratford</h3>
            <p className="text-gray-600 mb-4">
              Conveniently located near Westfield Stratford City shopping center
            </p>
            <p className="text-sm text-gray-500">
              Excellent transport links via Stratford Station (Central, Jubilee, DLR, Overground)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
