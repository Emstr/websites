import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Business',
  description: 'Terms of business and complaints procedure for Priya Sharma, Notary Public, Brent.',
};

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#312e81] to-[#4338ca] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">Terms of Business</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-[#312e81] mt-6 mb-4">Fees & Charges</h2>
            <p className="text-gray-600 mb-4">
              My fee is based on my time engaged. The minimum fee for up to twenty minutes of Notary time
              is <strong>£80 (no VAT)</strong>. Pro-rata rates are applied for longer appointments.
            </p>
            <p className="text-gray-600 mb-6">
              Additional fees apply for out-of-hours appointments or complex matters. Home and office visits
              incur higher charges.
            </p>

            <h2 className="text-2xl font-bold text-[#312e81] mt-10 mb-4">Notary Responsibilities</h2>
            <p className="text-gray-600 mb-6">
              As a Notary Public, I have to be satisfied as to your identity, your legal capacity, your
              authority and your understanding and approval of the documents being notarised. I will verify
              these matters before completing any notarial act.
            </p>

            <h2 className="text-2xl font-bold text-[#312e81] mt-10 mb-4">Legal Advice Limitations</h2>
            <p className="text-gray-600 mb-6">
              Unless specifically retained as a Solicitor, I do not provide legal advice on documents being
              notarised. I recommend that you obtain independent professional advice beforehand if you have
              any questions about the content or implications of documents.
            </p>

            <h2 className="text-2xl font-bold text-[#312e81] mt-10 mb-4">Payment Terms</h2>
            <p className="text-gray-600 mb-6">
              Fees are due upon document signing or receipt of notarised materials. Any disbursements
              (such as legalisation fees or courier services) require client consent beforehand and will
              be added to the final invoice.
            </p>

            <h2 className="text-2xl font-bold text-[#312e81] mt-10 mb-4">Liability</h2>
            <p className="text-gray-600 mb-6">
              My liability is capped at £3,000,000 per claim or 5 times the fees charged, whichever is greater,
              unless personal injury results from negligence.
            </p>

            <h2 className="text-2xl font-bold text-[#312e81] mt-10 mb-4">Regulatory Authority</h2>
            <p className="text-gray-600 mb-6">
              Notaries Public are regulated by the Faculty Office of the Archbishop of Canterbury.
            </p>

            {/* Complaints Section */}
            <div id="complaints" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-[#312e81] mt-10 mb-4">Complaints Procedure</h2>
              <p className="text-gray-600 mb-4">
                If you are unhappy with any aspect of the service you have received, please follow this
                three-tier complaints procedure:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#312e81]">
                  <h3 className="font-semibold text-[#312e81] mb-2">Step 1: Contact the Notary</h3>
                  <p className="text-gray-600">
                    In the first instance, please contact me directly to discuss your concerns. Many issues
                    can be resolved quickly through direct communication.
                  </p>
                  <p className="text-gray-600 mt-2">
                    Email: <a href="mailto:priya@brentnotary.co.uk" className="text-[#f43f5e] hover:underline">priya@brentnotary.co.uk</a><br />
                    Phone: <a href="tel:02089034500" className="text-[#f43f5e] hover:underline">020 8903 4500</a>
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#4338ca]">
                  <h3 className="font-semibold text-[#312e81] mb-2">Step 2: The Notaries Society</h3>
                  <p className="text-gray-600">
                    If you are not satisfied with the response, you may refer your complaint to The Notaries
                    Society complaints process.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#f43f5e]">
                  <h3 className="font-semibold text-[#312e81] mb-2">Step 3: Legal Ombudsman</h3>
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
