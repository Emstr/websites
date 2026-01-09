import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Business',
  description: 'Terms of business and complaints procedure for David Adeyemi, Notary Public, Lambeth.',
};

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2d1b4e] to-[#4c1d95] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">Terms of Business</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-[#2d1b4e] mt-6 mb-4">Fees & Charges</h2>
            <p className="text-gray-600 mb-4">
              My fee is based on my time engaged. The minimum fee for up to twenty minutes of Notary time
              is <strong>£80 (no VAT)</strong>. Pro-rata rates are applied for longer appointments.
            </p>
            <p className="text-gray-600 mb-6">
              Additional fees apply for out-of-hours appointments or complex matters. Home and office visits
              incur higher charges.
            </p>

            <h2 className="text-2xl font-bold text-[#2d1b4e] mt-10 mb-4">Notary Responsibilities</h2>
            <p className="text-gray-600 mb-6">
              As a Notary Public, I have to be satisfied as to your identity, your legal capacity, your
              authority and your understanding and approval of the documents being notarised. I will verify
              these matters before completing any notarial act.
            </p>

            <h2 className="text-2xl font-bold text-[#2d1b4e] mt-10 mb-4">Legal Advice Limitations</h2>
            <p className="text-gray-600 mb-6">
              Unless specifically retained as a Solicitor, I do not provide legal advice on documents being
              notarised. I recommend that you obtain independent professional advice beforehand if you have
              any questions about the content or implications of documents.
            </p>

            <h2 className="text-2xl font-bold text-[#2d1b4e] mt-10 mb-4">Payment Terms</h2>
            <p className="text-gray-600 mb-6">
              Fees are due upon document signing or receipt of notarised materials. Any disbursements
              (such as legalisation fees or courier services) require client consent beforehand and will
              be added to the final invoice.
            </p>

            <h2 className="text-2xl font-bold text-[#2d1b4e] mt-10 mb-4">Liability</h2>
            <p className="text-gray-600 mb-6">
              My liability is capped at £3,000,000 per claim or 5 times the fees charged, whichever is greater,
              unless personal injury results from negligence.
            </p>

            <h2 className="text-2xl font-bold text-[#2d1b4e] mt-10 mb-4">Regulatory Authority</h2>
            <p className="text-gray-600 mb-6">
              Notaries Public are regulated by the Faculty Office of the Archbishop of Canterbury.
            </p>

            {/* Complaints Section */}
            <div id="complaints" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-[#2d1b4e] mt-10 mb-4">Complaints Procedure</h2>
              <p className="text-gray-600 mb-4">
                If you are unhappy with any aspect of the service you have received, please follow this
                three-tier complaints procedure:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#2d1b4e]">
                  <h3 className="font-semibold text-[#2d1b4e] mb-2">Step 1: Contact the Notary</h3>
                  <p className="text-gray-600">
                    In the first instance, please contact me directly to discuss your concerns. Many issues
                    can be resolved quickly through direct communication.
                  </p>
                  <p className="text-gray-600 mt-2">
                    Email: <a href="mailto:david@lambethnotary.co.uk" className="text-[#eab308] hover:underline">david@lambethnotary.co.uk</a><br />
                    Phone: <a href="tel:02072743500" className="text-[#eab308] hover:underline">020 7274 3500</a>
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#4c1d95]">
                  <h3 className="font-semibold text-[#2d1b4e] mb-2">Step 2: The Notaries Society</h3>
                  <p className="text-gray-600">
                    If you are not satisfied with the response, you may refer your complaint to The Notaries
                    Society complaints process.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#eab308]">
                  <h3 className="font-semibold text-[#2d1b4e] mb-2">Step 3: Legal Ombudsman</h3>
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
