import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for Camden Notary Public. How we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            How we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Data Controller</h2>
            <p className="text-gray-600 mb-4">
              Linda Okagbue, trading as Camden Notary Public, is the data controller for
              personal information collected through this website and in the course of
              providing notary services.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              In order to provide notary services, we collect:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Name and contact details (address, phone, email)</li>
              <li>Identification documents (passport, driving licence)</li>
              <li>Proof of address documents</li>
              <li>Information contained in documents to be notarised</li>
              <li>Details of the transaction or matter</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Through this website, we may also collect information you provide when
              requesting a quote or contacting us.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use your personal information to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Verify your identity as required by law</li>
              <li>Provide notary services you have requested</li>
              <li>Communicate with you about your matter</li>
              <li>Comply with legal and regulatory obligations</li>
              <li>Maintain professional records as required</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Legal Basis for Processing</h2>
            <p className="text-gray-600 mb-4">
              We process your personal data on the following legal bases:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li><strong>Contract:</strong> To perform services you have requested</li>
              <li><strong>Legal obligation:</strong> To comply with anti-money laundering regulations and professional requirements</li>
              <li><strong>Legitimate interests:</strong> To maintain records and improve our services</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Data Retention</h2>
            <p className="text-gray-600 mb-4">
              We are required to keep records of notarial acts for a minimum of 6 years,
              and in some cases for the lifetime of the notary. Records are kept securely
              and accessed only when necessary.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Data Sharing</h2>
            <p className="text-gray-600 mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>The Foreign, Commonwealth & Development Office (for apostille services)</li>
              <li>Embassies and consulates (for legalisation)</li>
              <li>Translation services (if required)</li>
              <li>Regulatory bodies (if required by law)</li>
              <li>Professional indemnity insurers (if a claim arises)</li>
            </ul>
            <p className="text-gray-600 mb-4">
              We do not sell your personal information to third parties.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-4">
              Under data protection law, you have rights including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Erasure:</strong> Request deletion (subject to legal retention requirements)</li>
              <li><strong>Restriction:</strong> Request limited processing in certain circumstances</li>
              <li><strong>Portability:</strong> Request transfer of your data</li>
              <li><strong>Object:</strong> Object to processing based on legitimate interests</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Security</h2>
            <p className="text-gray-600 mb-4">
              We take appropriate technical and organisational measures to protect your
              personal information against unauthorised access, loss, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Cookies</h2>
            <p className="text-gray-600 mb-4">
              This website uses essential cookies to ensure proper functioning. We also
              use analytics to understand how visitors use our site. No personal information
              is collected through cookies without your consent.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Contact</h2>
            <p className="text-gray-600 mb-4">
              For questions about this privacy policy or to exercise your rights, contact:
            </p>
            <address className="not-italic text-gray-600 mb-4 bg-gray-50 p-4 rounded-lg">
              Linda Okagbue<br />
              Hamilton House, 4th Floor<br />
              Mabledon Place<br />
              London WC1H 9BB<br />
              Email: linda@camdennotary.co.uk
            </address>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Complaints</h2>
            <p className="text-gray-600 mb-4">
              If you are unhappy with how we have handled your personal information,
              you have the right to complain to the Information Commissioner&apos;s Office (ICO):
            </p>
            <address className="not-italic text-gray-600 mb-4 bg-gray-50 p-4 rounded-lg">
              Information Commissioner&apos;s Office<br />
              Wycliffe House<br />
              Water Lane<br />
              Wilmslow SK9 5AF<br />
              Tel: 0303 123 1113<br />
              Website: www.ico.org.uk
            </address>

            <p className="text-gray-500 mt-8">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
