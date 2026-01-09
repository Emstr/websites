import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Archstone Solicitors. Terms and conditions for our legal services.',
};

export default function TermsPage() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 lg:p-12 prose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> January 2026
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              These terms govern the provision of legal services by Archstone Solicitors. By engaging our services,
              you agree to these terms and conditions.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Our Services</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We provide legal services in areas including but not limited to Immigration, Conveyancing,
              Family Law, Litigation, Personal Injury, and Company & Commercial Law. Specific terms will
              be outlined in your client care letter.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Client Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Provide accurate and complete information</li>
              <li>Respond promptly to requests for information or documents</li>
              <li>Attend appointments and meetings as required</li>
              <li>Pay fees and disbursements as agreed</li>
              <li>Follow advice provided by our solicitors</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Fees and Payment</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our fees will be outlined in your client care letter. We may charge fixed fees, hourly rates,
              or operate on a no win, no fee basis depending on the nature of your matter. Payment terms
              will be specified in your engagement letter.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Professional Standards</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We are authorized and regulated by the Solicitors Regulation Authority (SRA). We adhere to
              the SRA Standards and Regulations and maintain professional indemnity insurance.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Confidentiality</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              All information you provide is treated in strict confidence, subject to our legal and
              professional obligations. Please refer to our Privacy Policy for details on data handling.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our liability is limited to the extent permitted by law and our professional indemnity insurance.
              We are not liable for losses arising from circumstances beyond our reasonable control.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">8. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Either party may terminate our engagement by providing written notice. You will be responsible
              for fees incurred up to the date of termination.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">9. Complaints</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you are unhappy with our services, please contact us immediately. We have a formal complaints
              procedure. If you remain dissatisfied, you may contact the Legal Ombudsman.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">10. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              These terms are governed by the laws of England and Wales. The courts of England and Wales
              have exclusive jurisdiction over any disputes.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              For questions about these terms, please contact us:
              <br />
              <strong>Archstone Solicitors</strong>
              <br />
              <strong>Email:</strong> info@archstone.org.uk
              <br />
              <strong>Phone:</strong> 020 8534 8008
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
