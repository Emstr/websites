import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Business',
  description: 'Terms of business and complaints procedure for Notary Public Holborn.',
};

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">Terms of Business</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mt-6 mb-4">Fees & Charges</h2>
            <p className="text-gray-600 mb-4">
              Our fees are based on the time engaged and complexity of the work. We provide
              transparent pricing with no hidden fees. Quotes are provided based on your
              specific requirements.
            </p>
            <p className="text-gray-600 mb-6">
              Additional fees apply for home or office visits, urgent requests, and complex matters.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a2e] mt-10 mb-4">Multilingual Services</h2>
            <p className="text-gray-600 mb-6">
              We offer notarial services in English, Russian, Mandarin, and Portuguese at no
              additional charge. Please let us know your language preference when making an
              appointment.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a2e] mt-10 mb-4">Notary Responsibilities</h2>
            <p className="text-gray-600 mb-6">
              As a Notary Public, we must be satisfied as to your identity, your legal capacity,
              your authority and your understanding and approval of the documents being notarised.
              We will verify these matters before completing any notarial act.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a2e] mt-10 mb-4">Legal Advice Limitations</h2>
            <p className="text-gray-600 mb-6">
              We do not provide legal advice on documents being notarised. We recommend that you
              obtain independent professional advice beforehand if you have any questions about
              the content or implications of documents.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a2e] mt-10 mb-4">Payment Terms</h2>
            <p className="text-gray-600 mb-6">
              Fees are due upon document signing or receipt of notarised materials. Any disbursements
              require client consent beforehand and will be added to the final invoice.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a2e] mt-10 mb-4">Regulatory Authority</h2>
            <p className="text-gray-600 mb-6">
              Notaries Public are regulated by the Faculty Office of the Archbishop of Canterbury.
            </p>

            {/* Complaints Section */}
            <div id="complaints" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-[#1a1a2e] mt-10 mb-4">Complaints Procedure</h2>
              <p className="text-gray-600 mb-4">
                If you are unhappy with any aspect of the service you have received, please follow this
                complaints procedure:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#1a1a2e]">
                  <h3 className="font-semibold text-[#1a1a2e] mb-2">Step 1: Contact Us</h3>
                  <p className="text-gray-600">
                    In the first instance, please contact us directly to discuss your concerns. Many issues
                    can be resolved quickly through direct communication.
                  </p>
                  <p className="text-gray-600 mt-2">
                    Email: <a href="mailto:info@notarypublicholborn.co.uk" className="text-[#e94560] hover:underline">info@notarypublicholborn.co.uk</a><br />
                    Phone: <a href="tel:02072425000" className="text-[#e94560] hover:underline">020 7242 5000</a>
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#16213e]">
                  <h3 className="font-semibold text-[#1a1a2e] mb-2">Step 2: The Notaries Society</h3>
                  <p className="text-gray-600">
                    If you are not satisfied with the response, you may refer your complaint to The Notaries
                    Society complaints process.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#e94560]">
                  <h3 className="font-semibold text-[#1a1a2e] mb-2">Step 3: Legal Ombudsman</h3>
                  <p className="text-gray-600">
                    If your complaint remains unresolved after 8 weeks, you may refer it to the Legal Ombudsman.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
