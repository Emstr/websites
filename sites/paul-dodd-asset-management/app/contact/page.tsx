import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Paul Dodd Asset Management",
  description: "Contact Paul Dodd Asset Management Limited in Leeds. Call 0113 2300449 or email info@pauldodd.co.uk. Book your free consultation today. FCA Authorised 610180.",
};

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#15293f] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#c9a227] text-[#1e3a5f] px-4 py-2 rounded-full font-bold mb-6 text-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Ready to take control of your financial future? Get in touch today for a free, no-obligation consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Phone */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a5f] to-[#15293f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Call Us</h2>
                <p className="text-gray-600 mb-4">Speak directly with our team</p>
                <a href="tel:01132300449" className="text-2xl font-bold text-[#c9a227] hover:text-[#b08f1f] transition-colors">
                  0113 2300449
                </a>
                <p className="text-sm text-gray-500 mt-4">Mon-Fri: 9:00 AM - 5:00 PM</p>
              </div>

              {/* Email */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a5f] to-[#15293f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Email Us</h2>
                <p className="text-gray-600 mb-4">Send us your enquiry</p>
                <a href="mailto:info@pauldodd.co.uk" className="text-lg font-bold text-[#c9a227] hover:text-[#b08f1f] transition-colors break-all">
                  info@pauldodd.co.uk
                </a>
                <p className="text-sm text-gray-500 mt-4">We'll respond within 24 hours</p>
              </div>

              {/* Visit */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a5f] to-[#15293f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Visit Us</h2>
                <p className="text-gray-600 mb-4">By appointment</p>
                <address className="not-italic text-gray-700">
                  18 Wynmore Avenue<br />
                  Leeds<br />
                  West Yorkshire<br />
                  LS16 9DE
                </address>
              </div>
            </div>

            {/* Free Consultation Section */}
            <div className="bg-gradient-to-br from-[#1e3a5f] to-[#15293f] text-white p-8 md:p-12 rounded-2xl mb-16">
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-20 h-20 bg-[#c9a227] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Free Consultation</h2>
                <p className="text-xl text-gray-300 mb-6">
                  No obligation. No pressure. Just expert advice from a trusted independent financial adviser.
                </p>
                <div className="space-y-4">
                  <p className="text-lg">
                    During your free consultation, we'll:
                  </p>
                  <ul className="text-left max-w-2xl mx-auto space-y-2">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#c9a227] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Discuss your financial goals and concerns</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#c9a227] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Review your current financial situation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#c9a227] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Identify opportunities for improvement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#c9a227] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Explain how we can help you achieve your objectives</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#c9a227] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Provide clear, transparent information about our fees</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:01132300449" className="bg-[#c9a227] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#b08f1f] transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call 0113 2300449
                  </a>
                  <a href="mailto:info@pauldodd.co.uk" className="bg-white text-[#1e3a5f] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Us
                  </a>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Main Office */}
              <div className="bg-white border-2 border-[#c9a227] p-8 rounded-xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#c9a227] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1e3a5f]">Main Office</h3>
                    <p className="text-sm text-[#c9a227] font-semibold">Wynmore Avenue</p>
                  </div>
                </div>
                <address className="not-italic text-gray-700 space-y-1">
                  <p>18 Wynmore Avenue</p>
                  <p>Leeds</p>
                  <p>West Yorkshire</p>
                  <p className="font-semibold">LS16 9DE</p>
                </address>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong>By Appointment:</strong> Please call ahead to arrange a meeting at our Wynmore Avenue office.
                  </p>
                </div>
              </div>

              {/* Registered Office */}
              <div className="bg-white border-2 border-gray-300 p-8 rounded-xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#1e3a5f] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1e3a5f]">Registered Office</h3>
                    <p className="text-sm text-gray-600 font-semibold">Great George Street</p>
                  </div>
                </div>
                <address className="not-italic text-gray-700 space-y-1">
                  <p>55 Great George Street</p>
                  <p>Leeds</p>
                  <p className="font-semibold">LS1 3BB</p>
                </address>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> This is our registered office address. For appointments, please contact us to visit our main office.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Common questions about getting in touch
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How do I book an appointment?",
                  answer: "Simply call us on 0113 2300449 or email info@pauldodd.co.uk. We'll arrange a convenient time for your free consultation, either at our office, via video call, or by phone."
                },
                {
                  question: "Is the initial consultation really free?",
                  answer: "Yes, absolutely. Your first consultation is completely free with no obligation. We'll discuss your needs, review your situation, and explain how we can help - with full transparency about our fees before you commit to anything."
                },
                {
                  question: "Do you offer video consultations?",
                  answer: "Yes, we're happy to meet via video call if that's more convenient for you. We use secure video conferencing technology to ensure your privacy and confidentiality."
                },
                {
                  question: "What should I bring to my first meeting?",
                  answer: "For your initial consultation, just bring yourself and any questions you have. If you decide to proceed, we'll let you know what documents we'll need to review (such as pension statements, investment portfolios, etc.)."
                },
                {
                  question: "How quickly can you respond to my enquiry?",
                  answer: "We aim to respond to all phone calls immediately during business hours and emails within 24 hours. If you need urgent advice, please call us directly."
                },
                {
                  question: "What areas do you cover?",
                  answer: "While we're based in Leeds, we serve clients throughout Yorkshire, across the UK, and even internationally. Many of our consultations are conducted remotely, so location is rarely a barrier."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#1e3a5f] to-[#15293f] text-white p-8 md:p-12 rounded-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
                <p className="text-gray-300">Over 30 years of trusted expertise</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#c9a227] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">FCA Authorised</h3>
                  <p className="text-gray-300">Ref: 610180</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#c9a227] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Established 1992</h3>
                  <p className="text-gray-300">30+ Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#c9a227] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Independent</h3>
                  <p className="text-gray-300">Whole of Market Advice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
