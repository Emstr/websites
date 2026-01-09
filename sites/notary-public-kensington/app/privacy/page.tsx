import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Notice',
  description: 'Privacy notice for Michael Chen, Notary Public, Kensington. How we collect, use, and protect your personal data.',
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#4a1c2a] to-[#7f1d1d] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Notice</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>ESTHER OGUN, NOTARY PUBLIC</strong> of 123 Kensington High Street, London W8 5SF
              is registered with the Information Commissioner&apos;s Office under registration number <strong>ZA499653</strong>.
            </p>

            <h2 className="text-2xl font-bold text-[#4a1c2a] mt-10 mb-4">Personal Data We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information to deliver notarial services and provide website access. This includes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Names and addresses</li>
              <li>Contact details (phone, email)</li>
              <li>Device data when accessing our website</li>
              <li>Potentially sensitive categories such as health or ethnic origin information where relevant to the notarial service</li>
            </ul>
            <p className="text-gray-600 mb-6">
              <strong>Important:</strong> Clients must provide accurate personal data continuously, as incomplete
              information may result in document rejection or invalidity.
            </p>

            <h2 className="text-2xl font-bold text-[#4a1c2a] mt-10 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We process your data for the following purposes:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Answering enquiries and delivering notarial services</li>
              <li>Working with third-party suppliers (couriers, translators, verification partners)</li>
              <li>Website functionality and security</li>
              <li>Legal compliance with notary regulations</li>
              <li>Business administration and fraud prevention</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#4a1c2a] mt-10 mb-4">Cookies</h2>
            <p className="text-gray-600 mb-4">Our website uses four types of cookies:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li><strong>Essential cookies</strong> - First-party, session-based cookies required for the site to function</li>
              <li><strong>Analytics cookies</strong> - First-party, anonymous cookies to understand how visitors use our site</li>
              <li><strong>Functionality cookies</strong> - First-party cookies to remember your preferences</li>
              <li><strong>Social media cookies</strong> - Persistent, third-party cookies for social sharing features</li>
            </ul>
            <p className="text-gray-600 mb-6">
              Most internet browsers automatically accept cookies, but you may adjust your browser settings
              to refuse them. Note that this may limit some website features.
            </p>

            <h2 className="text-2xl font-bold text-[#4a1c2a] mt-10 mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-4">Under data protection law, you have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Request access to your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Request erasure of your data (subject to legal retention requirements)</li>
              <li>Lodge complaints with the Information Commissioner&apos;s Office</li>
            </ul>
            <p className="text-gray-600 mb-6">
              Please note that archiving obligations under notarial regulations may limit some requests.
            </p>

            <h2 className="text-2xl font-bold text-[#4a1c2a] mt-10 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this privacy notice or wish to exercise your rights, please contact:
            </p>
            <address className="text-gray-600 not-italic mb-6">
              Michael Chen<br />
              123 Kensington High Street<br />
              Kensington, London W8 5SF<br />
              Email: <a href="mailto:michael@kensingtonnotary.co.uk" className="text-[#14b8a6] hover:underline">michael@kensingtonnotary.co.uk</a><br />
              Phone: <a href="tel:02079374400" className="text-[#14b8a6] hover:underline">020 7937 4400</a>
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
