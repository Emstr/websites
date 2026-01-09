import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Courtneys Estate Agents in Dalston. Call 0207 275 8000 or visit us at 544 Kingsland Rd, London E8 4AH. Family-run agency serving Hackney since 2003.',
};

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4f46e5] to-[#6366f1] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-indigo-100 leading-relaxed">
              We&apos;re here to help with all your property needs. Contact our family team today
              for friendly, professional service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-[#4f46e5] mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#4f46e5]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                    <a href="tel:02072758000" className="text-[#4f46e5] text-lg font-medium hover:text-[#6366f1]">
                      0207 275 8000
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Office Address</h3>
                    <p className="text-gray-700">
                      544 Kingsland Rd<br />
                      London E8 4AH
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=544+Kingsland+Rd+London+E8+4AH"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4f46e5] text-sm font-medium hover:text-[#6366f1] inline-flex items-center gap-1 mt-2"
                    >
                      Get directions
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#4f46e5]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Opening Hours</h3>
                    <div className="text-gray-700 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Visit */}
              <div className="mt-10 bg-gradient-to-br from-indigo-50 to-amber-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#4f46e5] mb-4">
                  Why Visit Our Office?
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#fbbf24] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Free property valuations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#fbbf24] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Face-to-face consultations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#fbbf24] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Browse property listings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#fbbf24] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Meet our friendly family team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#fbbf24] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Get expert local advice</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Map & Quick Contact */}
            <div>
              <h2 className="text-3xl font-bold text-[#4f46e5] mb-8">
                Find Us
              </h2>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl h-96 mb-8 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="text-gray-600 font-medium">544 Kingsland Rd, London E8 4AH</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=544+Kingsland+Rd+London+E8+4AH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4f46e5] text-sm font-medium hover:text-[#6366f1] inline-flex items-center gap-1 mt-2"
                  >
                    Open in Google Maps
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-[#4f46e5] to-[#6366f1] rounded-xl p-8 text-white">
                <h3 className="text-2xl font-semibold mb-4">Quick Contact</h3>
                <p className="text-indigo-100 mb-6">
                  Call us now for immediate assistance or to book a valuation appointment.
                </p>
                <a
                  href="tel:02072758000"
                  className="block w-full bg-[#fbbf24] hover:bg-[#f59e0b] text-gray-900 px-6 py-4 rounded-lg text-lg font-semibold text-center transition-colors mb-4"
                >
                  Call: 0207 275 8000
                </a>
                <div className="border-t border-indigo-400 pt-6 mt-6">
                  <p className="text-indigo-100 text-sm mb-3">
                    Located in the heart of Dalston, easily accessible by:
                  </p>
                  <ul className="space-y-2 text-indigo-100 text-sm">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Dalston Kingsland Overground Station (5 min walk)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Multiple bus routes on Kingsland Road</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Limited parking available nearby</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#4f46e5] mb-4">
              How Can We Help?
            </h2>
            <p className="text-xl text-gray-600">
              Choose the service you&apos;re interested in
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="tel:02072758000" className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-[#4f46e5]">
              <div className="bg-indigo-100 rounded-lg p-3 w-fit mx-auto mb-4">
                <svg className="w-8 h-8 text-[#4f46e5]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Selling a Property</h3>
              <p className="text-gray-600 text-sm">Free valuation & expert marketing</p>
            </a>

            <a href="tel:02072758000" className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-[#4f46e5]">
              <div className="bg-amber-100 rounded-lg p-3 w-fit mx-auto mb-4">
                <svg className="w-8 h-8 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Buying a Property</h3>
              <p className="text-gray-600 text-sm">Property search & local expertise</p>
            </a>

            <a href="tel:02072758000" className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-[#4f46e5]">
              <div className="bg-indigo-100 rounded-lg p-3 w-fit mx-auto mb-4">
                <svg className="w-8 h-8 text-[#4f46e5]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Lettings & Management</h3>
              <p className="text-gray-600 text-sm">Landlords & tenants welcome</p>
            </a>

            <a href="tel:02072758000" className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-[#4f46e5]">
              <div className="bg-amber-100 rounded-lg p-3 w-fit mx-auto mb-4">
                <svg className="w-8 h-8 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Commercial Property</h3>
              <p className="text-gray-600 text-sm">Business premises & investments</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
