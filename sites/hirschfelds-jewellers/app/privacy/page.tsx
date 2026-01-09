import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Hirschfelds Jewellery Repairs.',
};

export default function PrivacyPage() {
  return (
    <div className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-xl mb-8">
            At Hirschfelds Jewellery Repairs, we are committed to protecting your privacy and ensuring the security of your personal information.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Information We Collect</h2>
          <p className="mb-4">
            We may collect personal information including your name, contact details, and information about your jewellery when you book an appointment or use our services.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">How We Use Your Information</h2>
          <p className="mb-4">
            Your information is used solely for providing our jewellery repair and manufacturing services, communicating with you about your pieces, and maintaining our business records.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Data Security</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal information. Your data is stored securely and accessed only by authorized personnel.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Your Rights</h2>
          <p className="mb-4">
            You have the right to access, correct, or request deletion of your personal information. Contact us to exercise these rights.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our privacy policy, please contact us at 020 7405 1536.
          </p>

          <p className="text-sm text-gray-600 mt-12">
            Last updated: January 2025
          </p>
        </div>
      </div>
    </div>
  );
}
