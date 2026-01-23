import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Notice',
  description: 'Privacy notice for Notary Public Belsize Park. How we collect, use, and protect your personal data.',
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#3d5a80] to-[#293241] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Notice</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Notary Public Belsize Park</strong> (Bernard Cordell) is committed to protecting your privacy
              and handling your personal data responsibly.
            </p>

            <h2 className="text-2xl font-bold text-[#3d5a80] mt-10 mb-4">Personal Data We Collect</h2>
            <p className="text-gray-600 mb-4">
              I collect information to deliver notarial services and provide website access. This includes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Names and addresses</li>
              <li>Contact details (phone, email)</li>
              <li>Device data when accessing our website</li>
              <li>Potentially sensitive categories where relevant to the notarial service</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#3d5a80] mt-10 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">I process your data for the following purposes:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Answering enquiries and delivering notarial services</li>
              <li>Working with third-party suppliers (couriers, translators)</li>
              <li>Website functionality and security</li>
              <li>Legal compliance with notary regulations</li>
              <li>Business administration and fraud prevention</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#3d5a80] mt-10 mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-4">Under data protection law, you have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Request access to your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Request erasure of your data (subject to legal retention requirements)</li>
              <li>Lodge complaints with the Information Commissioner&apos;s Office</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#3d5a80] mt-10 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this privacy notice or wish to exercise your rights, please contact:
            </p>
            <address className="text-gray-600 not-italic mb-6">
              Notary Public Belsize Park<br />
              Bernard Cordell<br />
              Belsize Park, London NW3<br />
              Email: <a href="mailto:info@bernardcordell-notarypublic.co.uk" className="text-[#ee6c4d] hover:underline">info@bernardcordell-notarypublic.co.uk</a><br />
              Phone: <a href="tel:02075864000" className="text-[#ee6c4d] hover:underline">020 7586 4000</a>
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
