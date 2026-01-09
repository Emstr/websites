import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Protection Policy',
  description: 'Data protection policy for Charlotte Davies, Financial Adviser, Mayfair. Our commitment to protecting your personal information.',
};

export default function DataProtectionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e1b4b] to-[#312e81] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">Data Protection Policy</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Charlotte Davies, operating as a financial adviser (registered with ICO: ZA499653), commits to the
              following data protection principles when processing personal information in business operations.
            </p>

            <h2 className="text-2xl font-bold text-[#1e1b4b] mt-10 mb-4">1. Fairness and Transparency</h2>
            <p className="text-gray-600 mb-6">
              The Business must process personal data fairly and provide individuals with information about
              how and why it processes their data. Privacy notices inform clients, staff, and suppliers about
              purposes, legal bases, data recipients, retention periods, and individual rights.
            </p>

            <h2 className="text-2xl font-bold text-[#1e1b4b] mt-10 mb-4">2. Lawful Processing</h2>
            <p className="text-gray-600 mb-6">
              Information handling requires valid legal grounds, typically: contract performance, legitimate
              interests, legal obligations, consent, or other lawful bases applicable to financial advice.
            </p>

            <h2 className="text-2xl font-bold text-[#1e1b4b] mt-10 mb-4">3. Purpose Limitation</h2>
            <p className="text-gray-600 mb-6">
              Data collection targets specific purposes related to professional services, personnel administration,
              supplier relationships, and legal compliance. Subsequent use must remain compatible with original
              purposes unless consent is obtained.
            </p>

            <h2 className="text-2xl font-bold text-[#1e1b4b] mt-10 mb-4">4. Data Minimisation</h2>
            <p className="text-gray-600 mb-6">
              The Business must only process personal data that is adequate, relevant and limited to what is
              necessary. Clients must provide only minimum required information for services.
            </p>

            <h2 className="text-2xl font-bold text-[#1e1b4b] mt-10 mb-4">5. Data Accuracy</h2>
            <p className="text-gray-600 mb-6">
              The business maintains reasonable standards ensuring information remains accurate, complete, and
              current. Clients bear responsibility for providing correct data.
            </p>

            <h2 className="text-2xl font-bold text-[#1e1b4b] mt-10 mb-4">6. Individual Rights</h2>
            <p className="text-gray-600 mb-6">
              Clients may exercise access, erasure, rectification, portability, and objection rights regarding
              their information, subject to applicable exemptions.
            </p>

            <h2 className="text-2xl font-bold text-[#1e1b4b] mt-10 mb-4">7. Storage Limitation</h2>
            <p className="text-gray-600 mb-4">
              Records follow Notaries Practice Rules 2014 requirements:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Public form acts preserved permanently</li>
              <li>Non-public acts retained minimum 12 years</li>
              <li>Personnel records kept 12 months post-termination unless legally required otherwise</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1e1b4b] mt-10 mb-4">8. Data Security</h2>
            <p className="text-gray-600 mb-4">
              Protection employs three approaches:
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-[#1e1b4b] mb-2">Physical Security</h3>
                <p className="text-gray-600 text-sm">
                  Locked offices, secured cabinets, restricted access, confidential disposal
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-[#1e1b4b] mb-2">Organisational Security</h3>
                <p className="text-gray-600 text-sm">
                  Personnel vetting, non-disclosure agreements, training, email restrictions
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-[#1e1b4b] mb-2">Technical Security</h3>
                <p className="text-gray-600 text-sm">
                  Firewalls, patch management, antivirus/malware protection, access controls, encryption, backups
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1e1b4b] mt-10 mb-4">9. Accountability</h2>
            <p className="text-gray-600 mb-6">
              Documentation, staff training, periodic policy reviews, professional advice-seeking, and impact
              assessments demonstrate compliance.
            </p>

            <h2 className="text-2xl font-bold text-[#1e1b4b] mt-10 mb-4">Governance Framework</h2>
            <p className="text-gray-600 mb-4">The business implements:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Documented policies</li>
              <li>Personnel assurance</li>
              <li>Legal consultation</li>
              <li>Third-party supplier agreements</li>
              <li>Data Protection Impact Assessments for high-risk processing</li>
              <li>Record-keeping of processing activities</li>
              <li>Privacy-by-design implementation</li>
              <li>Complaint handling procedures</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
