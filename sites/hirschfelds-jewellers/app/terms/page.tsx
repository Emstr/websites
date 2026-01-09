import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for Hirschfelds Jewellery Repairs services.',
};

export default function TermsPage() {
  return (
    <div className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-8">Terms & Conditions</h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-xl mb-8">
            Please read these terms and conditions carefully before using our services at Hirschfelds Jewellery Repairs.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Appointments</h2>
          <p className="mb-4">
            All services are provided by appointment only. Please call 020 7405 1536 to schedule your visit during our opening hours: Monday-Friday, 11am-4pm.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Services</h2>
          <p className="mb-4">
            We provide expert jewellery repairs, ring sizing, bespoke manufacturing, and restoration services. All work is carried out by qualified master craftsmen.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Estimates and Pricing</h2>
          <p className="mb-4">
            We provide detailed estimates for all work. Prices are agreed upon before work commences. Any changes to the scope of work will be discussed and agreed upon with you.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Responsibility and Care</h2>
          <p className="mb-4">
            While we take the utmost care with your jewellery, we recommend that you have appropriate insurance coverage for valuable pieces. We maintain professional indemnity insurance.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Turnaround Times</h2>
          <p className="mb-4">
            We will provide an estimated completion time for your work. Complex restoration or bespoke pieces may require additional time to ensure the highest quality.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Payment Terms</h2>
          <p className="mb-4">
            Payment is due upon collection of completed work. We accept various payment methods, which will be confirmed during your appointment.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Collection</h2>
          <p className="mb-4">
            Completed work should be collected within a reasonable timeframe. Extended storage may incur additional charges.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Contact</h2>
          <p className="mb-4">
            For any questions regarding these terms, please contact us at 020 7405 1536.
          </p>

          <p className="text-sm text-gray-600 mt-12">
            Last updated: January 2025
          </p>
        </div>
      </div>
    </div>
  );
}
