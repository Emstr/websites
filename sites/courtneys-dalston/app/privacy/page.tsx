import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Courtneys Estate Agents. How we collect, use, and protect your personal information.',
};

export default function Privacy() {
  return (
    <div className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#4f46e5] mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="lead text-xl mb-6">
            At Courtneys Estate Agents, we are committed to protecting your privacy and ensuring
            the security of your personal information.
          </p>

          <h2 className="text-2xl font-semibold text-[#4f46e5] mt-8 mb-4">Information We Collect</h2>
          <p>
            We collect personal information that you provide to us when using our services, including
            your name, contact details, property preferences, and financial information necessary for
            property transactions.
          </p>

          <h2 className="text-2xl font-semibold text-[#4f46e5] mt-8 mb-4">How We Use Your Information</h2>
          <p>
            Your information is used to provide our estate agency services, including property searches,
            valuations, marketing, and transaction management. We may also use it to send you relevant
            property updates and market information.
          </p>

          <h2 className="text-2xl font-semibold text-[#4f46e5] mt-8 mb-4">Data Protection</h2>
          <p>
            We implement appropriate security measures to protect your personal information from
            unauthorized access, alteration, or disclosure. Your data is stored securely and only
            accessible to authorized personnel.
          </p>

          <h2 className="text-2xl font-semibold text-[#4f46e5] mt-8 mb-4">Your Rights</h2>
          <p>
            You have the right to access, correct, or request deletion of your personal information.
            You may also object to processing or request data portability. Contact us to exercise
            these rights.
          </p>

          <h2 className="text-2xl font-semibold text-[#4f46e5] mt-8 mb-4">Contact Us</h2>
          <p>
            For any privacy-related questions or concerns, please contact us at:
          </p>
          <p className="ml-4">
            Courtneys Estate Agents<br />
            544 Kingsland Rd, London E8 4AH<br />
            Phone: 0207 275 8000
          </p>
        </div>
      </div>
    </div>
  );
}
