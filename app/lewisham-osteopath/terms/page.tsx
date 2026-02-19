import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms and conditions for Camden Notary Public services. Information about fees, payments, professional scope, liability, and complaints procedure.',
};

export default function TermsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Please read these terms carefully before engaging my notary services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Fees and Payment</h2>
            <p className="text-gray-600 mb-4">
              The minimum fee is £85 and the hourly rate is £185. I am not registered for
              VAT, so no VAT is charged on notary fees.
            </p>
            <p className="text-gray-600 mb-4">
              Payment is due upon release of documents, or within 7 days if an invoice is
              issued. Any queries concerning an invoice should be raised immediately upon receipt.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Disbursements</h2>
            <p className="text-gray-600 mb-4">
              In addition to my fees, you will be responsible for disbursements (expenses
              incurred on your behalf). These may include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>FCDO legalisation fees (Apostille)</li>
              <li>Embassy legalisation fees</li>
              <li>Translation costs</li>
              <li>Travel expenses for home or office visits</li>
              <li>Courier and postage charges</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quotations</h2>
            <p className="text-gray-600 mb-4">
              Estimates are provided in good faith based on the information you provide,
              but remain non-binding. Variations in the instructions given, additional
              complexity, or changes to requirements may affect the final cost.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Professional Scope</h2>
            <p className="text-gray-600 mb-4">
              As a Notary Public, I act in an authentication capacity. I do not provide
              advice on foreign law or the legal effect of documents in other jurisdictions.
              Where appropriate, you should obtain independent legal counsel.
            </p>
            <p className="text-gray-600 mb-4">
              Urgency and/or expense must not override essential accuracy and validity.
              I reserve the right to decline instructions where I believe the requirements
              cannot be properly met.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Professional Indemnity</h2>
            <p className="text-gray-600 mb-4">
              I maintain professional indemnity insurance cover of £1 million, which limits
              my liability to that amount. This limitation does not apply to claims for
              personal injury or death.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Data Protection</h2>
            <p className="text-gray-600 mb-4">
              I am registered with the Information Commissioner&apos;s Office (ICO) and comply
              with the General Data Protection Regulation (GDPR). Personal data is processed
              only as necessary to provide notary services and comply with legal obligations.
            </p>
            <p className="text-gray-600 mb-4">
              By engaging my services and communicating by email, you consent to the
              transmission of potentially sensitive information by unencrypted email,
              unless you specifically request otherwise.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Money Laundering</h2>
            <p className="text-gray-600 mb-4">
              Under the Money Laundering Regulations 2017, I am required to verify the
              identity of all clients. You will need to provide government-issued photo ID
              and proof of address dated within the last 3 months.
            </p>
            <p className="text-gray-600 mb-4">
              I am also required to report any suspicious activity to the relevant authorities.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Cancellation</h2>
            <p className="text-gray-600 mb-4">
              Under the Consumer Contracts Regulations, you have a 14-day cancellation period
              from the date of engaging my services. However, if you request that work begins
              before the end of this period, you will be liable for any work already completed.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Regulation and Complaints</h2>
            <p className="text-gray-600 mb-4">
              I am regulated by the Faculty Office of the Archbishop of Canterbury. If you
              have any concerns about the service provided, please raise them with me in the
              first instance.
            </p>
            <p className="text-gray-600 mb-4">
              If the matter cannot be resolved directly, complaints may be referred to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>The Notaries Society</li>
              <li>The Legal Ombudsman (if still unresolved)</li>
            </ul>
            <p className="text-gray-600 mb-4">
              The Legal Ombudsman can be contacted at:
            </p>
            <address className="not-italic text-gray-600 mb-4 bg-gray-50 p-4 rounded-lg">
              Legal Ombudsman<br />
              PO Box 6806<br />
              Wolverhampton WV1 9WJ<br />
              Tel: 0300 555 0333<br />
              Email: enquiries@legalombudsman.org.uk<br />
              Website: www.legalombudsman.org.uk
            </address>
            <p className="text-gray-600 mb-4">
              Complaints must normally be made within 6 months of receiving a final response
              from me, and within 6 years of the act or omission about which you are complaining
              (or 3 years from when you should reasonably have known there was cause for complaint).
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Governing Law</h2>
            <p className="text-gray-600 mb-4">
              These terms and any dispute arising from them shall be governed by English law
              and subject to the exclusive jurisdiction of the English courts.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
