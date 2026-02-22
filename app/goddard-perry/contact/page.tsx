import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Goddard Perry Consulting, independent financial advisers in Croydon. Book a free consultation or request information about our services.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f2b46] to-[#1a3c5e] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Get in touch to book a free, no-obligation consultation or to discuss
              your financial planning needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#0f2b46] mb-6">Book a Free Consultation</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4952b] focus:border-transparent outline-none transition-shadow"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4952b] focus:border-transparent outline-none transition-shadow"
                    />
                  </div>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4952b] focus:border-transparent outline-none transition-shadow"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4952b] focus:border-transparent outline-none transition-shadow"
                  />
                </div>

                <div>
                  <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-2">
                    Area of Interest
                  </label>
                  <select
                    id="serviceInterest"
                    name="serviceInterest"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4952b] focus:border-transparent outline-none transition-shadow"
                  >
                    <option value="">Please select...</option>
                    <option value="pensions">Pension Planning</option>
                    <option value="investments">Investments</option>
                    <option value="retirement">Retirement Planning</option>
                    <option value="wealth">Wealth Management</option>
                    <option value="protection">Protection &amp; Insurance</option>
                    <option value="corporate">Corporate Employee Benefits</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us a little about your situation and what you'd like help with..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4952b] focus:border-transparent outline-none transition-shadow resize-none"
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-[#c4952b] focus:ring-[#c4952b]"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I consent to Goddard Perry Consulting contacting me about my enquiry. I understand
                    my data will be handled in accordance with their privacy policy.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c4952b] hover:bg-[#b3862a] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Request Free Consultation
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#0f2b46] mb-6">Contact Information</h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0f2b46] rounded-lg p-3">
                      <svg className="w-6 h-6 text-[#c4952b]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0f2b46] mb-2">Phone</h3>
                      <a href="tel:02086033700" className="block text-gray-600 hover:text-[#c4952b] transition-colors">
                        020 8603 3700
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0f2b46] rounded-lg p-3">
                      <svg className="w-6 h-6 text-[#c4952b]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0f2b46] mb-2">Email</h3>
                      <a href="mailto:contact@goddardperry.com" className="text-gray-600 hover:text-[#c4952b] transition-colors">
                        contact@goddardperry.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0f2b46] rounded-lg p-3">
                      <svg className="w-6 h-6 text-[#c4952b]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0f2b46] mb-2">Office Address</h3>
                      <address className="text-gray-600 not-italic">
                        Goddard Perry Consulting<br />
                        Corinthian House<br />
                        17 Lansdowne Road<br />
                        Croydon CR0 2BX
                      </address>
                    </div>
                  </div>
                </div>

                {/* FCA Info */}
                <div className="bg-[#c4952b] rounded-xl p-6 text-white">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-lg p-3">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">FCA Regulated</h3>
                      <p className="text-white/90 text-sm">
                        Authorised and regulated by the Financial Conduct Authority<br />
                        FCA Number: 125376<br />
                        Registered in England No. 1635689
                      </p>
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="bg-gradient-to-br from-[#0f2b46] to-[#1a3c5e] rounded-xl p-6 text-white">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#c4952b] rounded-lg p-3">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Opening Hours</h3>
                      <p className="text-gray-300">
                        Monday - Friday: 9:00 AM - 5:30 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                      <p className="text-gray-400 text-sm mt-2">
                        Evening appointments available by arrangement
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-amber-50 border-y border-amber-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="bg-amber-100 rounded-full p-3">
                <svg className="w-8 h-8 text-[#c4952b]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0f2b46] mb-2">
                Important Information
              </h3>
              <p className="text-gray-700">
                The value of investments and the income from them can go down as well as up. You may get back less
                than you invest. Past performance is not a reliable indicator of future results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
