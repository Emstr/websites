import Link from 'next/link';

export const metadata = {
  title: 'Pricing | E8 Dental Care Hackney',
  description: 'Transparent pricing for dental treatments at E8 Dental Care. Private dental care with fair, competitive prices in Hackney.',
};

export default function Pricing() {
  const pricingCategories = [
    {
      category: 'Examinations & Preventive Care',
      treatments: [
        { name: 'New Patient Examination', price: '£65' },
        { name: 'Routine Check-up', price: '£55' },
        { name: 'Scale & Polish (Hygiene)', price: '£75' },
        { name: 'Dental X-rays (per film)', price: 'From £20' },
        { name: 'OPG (Full mouth X-ray)', price: '£85' },
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      category: 'Restorative Treatments',
      treatments: [
        { name: 'White Filling (small)', price: 'From £95' },
        { name: 'White Filling (large)', price: 'From £145' },
        { name: 'Root Canal Treatment', price: 'From £350' },
        { name: 'Extraction (simple)', price: 'From £95' },
        { name: 'Surgical Extraction', price: 'From £195' },
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      category: 'Crowns & Bridges',
      treatments: [
        { name: 'Porcelain Crown', price: 'From £595' },
        { name: 'Crown preparation & temporary', price: '£250' },
        { name: 'Bridge (per unit)', price: 'From £595' },
        { name: 'Post & Core', price: '£195' },
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      category: 'Cosmetic Dentistry',
      treatments: [
        { name: 'Teeth Whitening (Professional)', price: 'From £350' },
        { name: 'Composite Bonding (per tooth)', price: 'From £195' },
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dental-light via-white to-dental-soft py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Transparent Pricing</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Quality dental care shouldn't be a mystery. We believe in clear, honest pricing with no hidden fees.
            </p>
            <div className="inline-flex items-center space-x-2 bg-dental-teal/10 text-dental-teal px-6 py-3 rounded-full">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">All prices include VAT where applicable</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {pricingCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-dental-teal transition-colors">
                <div className="bg-gradient-to-r from-dental-teal to-dental-sky text-white p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      {category.icon}
                    </div>
                    <h2 className="text-2xl font-bold">{category.category}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {category.treatments.map((treatment, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0"
                      >
                        <div className="flex items-center space-x-3">
                          <svg className="w-5 h-5 text-dental-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-900 font-medium">{treatment.name}</span>
                        </div>
                        <span className="text-dental-teal font-bold text-lg">{treatment.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 bg-dental-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Payment Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-dental-teal/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-dental-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Payment Methods</h3>
                <p className="text-gray-600 mb-4">We accept a variety of payment methods for your convenience:</p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-gray-700">
                    <svg className="w-5 h-5 text-dental-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Cash</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <svg className="w-5 h-5 text-dental-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Debit & Credit Cards</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <svg className="w-5 h-5 text-dental-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Bank Transfer</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-dental-sky/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-dental-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Payment Plans</h3>
                <p className="text-gray-600 mb-4">For larger treatments, we offer flexible payment options:</p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-gray-700">
                    <svg className="w-5 h-5 text-dental-sky flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Interest-free finance available</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <svg className="w-5 h-5 text-dental-sky flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Spread the cost over months</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <svg className="w-5 h-5 text-dental-sky flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Ask about our payment plans</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Pricing FAQs</h2>
            <div className="space-y-6">
              <div className="bg-dental-light rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you offer free consultations?</h3>
                <p className="text-gray-700">
                  New patient examinations start from £65, which includes a thorough check-up and treatment plan.
                  We believe every patient deserves a comprehensive assessment to provide the best care.
                </p>
              </div>
              <div className="bg-dental-light rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Are there any hidden charges?</h3>
                <p className="text-gray-700">
                  No! We believe in complete transparency. All prices are discussed and agreed upon before any
                  treatment begins. You'll receive a detailed treatment plan with costs before we proceed.
                </p>
              </div>
              <div className="bg-dental-light rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you accept dental insurance?</h3>
                <p className="text-gray-700">
                  We are a private practice, and while we don't directly bill insurance companies, we can provide
                  you with detailed receipts to submit to your insurance provider for reimbursement.
                </p>
              </div>
              <div className="bg-dental-light rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I get a quote before my appointment?</h3>
                <p className="text-gray-700">
                  While we've listed our standard prices above, specific treatment costs can vary based on individual
                  needs. Call us on <a href="tel:02089854547" className="text-dental-teal font-semibold hover:underline">020 8985 4547</a> to
                  discuss your needs and get an estimated quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-dental-teal to-dental-sky text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book your appointment today or call us to discuss treatment options and costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-white text-dental-teal px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <span>Book Appointment</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Link>
            <a
              href="tel:02089854547"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-dental-teal transition-all shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call: 020 8985 4547</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
