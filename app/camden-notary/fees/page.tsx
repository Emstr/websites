import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fees',
  description:
    'Notary public fees in Camden, London. Minimum fee £85, hourly rate £185. Transparent pricing for document notarisation, apostille, and legalisation services.',
};

export default function FeesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Fees</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Transparent pricing for notary services. All fees quoted exclude
            disbursements such as legalisation costs and courier charges.
          </p>
        </div>
      </section>

      {/* Main Fees */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-primary">Standard Fees</h2>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="px-6 py-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Minimum Fee</h3>
                    <p className="text-gray-600">For straightforward matters</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-accent">£85</p>
                  </div>
                </div>
                <div className="px-6 py-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Hourly Rate</h3>
                    <p className="text-gray-600">For more complex matters</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-accent">£185</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">VAT Status</h3>
                  <p className="text-blue-800">
                    I am not registered for VAT, so no VAT is charged on notary fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Affects the Fee */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            What Affects the Fee?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-2">Number of Documents</h3>
              <p className="text-gray-600">
                Multiple documents take longer to process and verify.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-2">Complexity</h3>
              <p className="text-gray-600">
                Some documents require more time to review and prepare.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-2">Time Required</h3>
              <p className="text-gray-600">
                Longer appointments are charged on a pro-rata basis.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-2">Legalisation Needed</h3>
              <p className="text-gray-600">
                Apostille and embassy fees are additional disbursements.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-2">Location</h3>
              <p className="text-gray-600">
                Home or office visits incur an additional travel fee.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-2">Urgency</h3>
              <p className="text-gray-600">
                Same-day or urgent requests may attract a premium.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disbursements */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Disbursements</h2>
            <p className="text-lg text-gray-600 mb-6">
              In addition to notary fees, you may need to pay disbursements
              (expenses incurred on your behalf). These are charged at cost and
              may include:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">
                  <strong>FCDO Apostille fees</strong> - Government charges for apostille certificates
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">
                  <strong>Embassy legalisation fees</strong> - Charges set by individual embassies
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">
                  <strong>Translation costs</strong> - If certified translation is required
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">
                  <strong>Courier and postage</strong> - For document delivery
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">
                  <strong>Travel expenses</strong> - For home or office visits
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Payment */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Payment</h2>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-gray-600 mb-4">
                Payment is due upon release of the documents, or within 7 days
                if an invoice is issued. Any queries concerning an invoice should
                be raised immediately upon receipt.
              </p>
              <p className="text-gray-600">
                I accept payment by bank transfer, debit card, or credit card.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quotations */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Getting a Quote</h2>
            <p className="text-lg text-gray-600 mb-6">
              Estimates are provided in good faith based on the information you
              provide. However, they remain non-binding as variations in the
              instructions given may affect the final cost.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              For an accurate quote, please tell me:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</span>
                <span className="text-gray-700">What type of document needs notarising</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</span>
                <span className="text-gray-700">How many documents you have</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</span>
                <span className="text-gray-700">Which country the documents are for</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</span>
                <span className="text-gray-700">Your timeframe or any urgency</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Get an Instant Estimate
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Use our quote calculator for an instant estimate, or contact me
            directly to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/camden-notary/quote"
              className="inline-block bg-accent hover:bg-amber-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              Get an Instant Quote
            </Link>
            <Link
              href="/camden-notary/contact"
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors border border-white/30"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
