import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Archstone Solicitors. How we collect, use, and protect your personal data.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
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
              Archstone Solicitors is committed to protecting your privacy and personal data. This policy explains how
              we collect, use, and safeguard your information in accordance with the UK General Data Protection
              Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect and process the following personal data:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Contact information (name, address, email, telephone number)</li>
              <li>Identity documents and verification information</li>
              <li>Financial information relevant to your case</li>
              <li>Information about your legal matter</li>
              <li>Communication records with our firm</li>
              <li>Website usage data and cookies</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use your personal data for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Providing legal services and advice</li>
              <li>Communicating with you about your case</li>
              <li>Meeting our professional and legal obligations</li>
              <li>Managing client relationships and billing</li>
              <li>Complying with SRA regulations and anti-money laundering requirements</li>
              <li>Improving our services</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Legal Basis for Processing</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We process your data based on: contract performance, legal obligations, legitimate interests,
              and where applicable, your consent.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We implement appropriate technical and organizational measures to protect your personal data
              against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We retain your data for as long as necessary to provide legal services and comply with our
              professional obligations, typically 6-7 years after the conclusion of your matter, or longer
              if required by law.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">7. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under UK GDPR, you have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Access your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Request erasure of your data</li>
              <li>Restrict processing</li>
              <li>Data portability</li>
              <li>Object to processing</li>
              <li>Withdraw consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">8. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              For any questions about this privacy policy or to exercise your rights, please contact us at:
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
