import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Notary Public Belsize Park. Book an appointment or request a quote for notarial services in Belsize Park, London.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#3d5a80] to-[#293241] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Get in touch to discuss your notarial requirements, request a quote,
              or book an appointment.
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
              <h2 className="text-2xl font-bold text-[#3d5a80] mb-6">Send a Message</h2>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee6c4d] focus:border-transparent outline-none transition-shadow"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee6c4d] focus:border-transparent outline-none transition-shadow"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee6c4d] focus:border-transparent outline-none transition-shadow"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee6c4d] focus:border-transparent outline-none transition-shadow"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Please describe the documents you need notarised and any specific requirements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee6c4d] focus:border-transparent outline-none transition-shadow resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ee6c4d] hover:bg-[#e85a3a] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#3d5a80] mb-6">Contact Information</h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#3d5a80] rounded-lg p-3">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#3d5a80] mb-2">Phone</h3>
                      <a href="tel:02075864000" className="block text-gray-600 hover:text-[#ee6c4d] transition-colors">
                        020 7586 4000
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#3d5a80] rounded-lg p-3">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#3d5a80] mb-2">Email</h3>
                      <a href="mailto:info@bernardcordell-notarypublic.co.uk" className="text-gray-600 hover:text-[#ee6c4d] transition-colors">
                        info@bernardcordell-notarypublic.co.uk
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#3d5a80] rounded-lg p-3">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#3d5a80] mb-2">Office Address</h3>
                      <address className="text-gray-600 not-italic">
                        Bernard Cordell<br />
                        Belsize Park<br />
                        London NW3
                      </address>
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="bg-gradient-to-br from-[#3d5a80] to-[#293241] rounded-xl p-6 text-white">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#ee6c4d] rounded-lg p-3">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ID Requirements */}
      <section className="py-16 bg-orange-50 border-y border-orange-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="bg-orange-100 rounded-full p-3">
                <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#3d5a80] mb-2">
                Remember to Bring ID
              </h3>
              <p className="text-gray-700">
                In accordance with the Money Laundering Regulations 2017, please bring
                government-issued photo ID and proof of residence to your appointment.
                This is required before notarial services can commence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
