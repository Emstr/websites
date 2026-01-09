import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for services provided by Courtneys Estate Agents.',
};

export default function Terms() {
  return (
    <div className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#4f46e5] mb-8">Terms & Conditions</h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="lead text-xl mb-6">
            These terms and conditions govern the provision of estate agency services by
            Courtneys Estate Agents.
          </p>

          <h2 className="text-2xl font-semibold text-[#4f46e5] mt-8 mb-4">Our Services</h2>
          <p>
            Courtneys Estate Agents provides residential and commercial property sales, lettings,
            property management, and related services. All services are subject to the terms
            outlined in individual service agreements.
          </p>

          <h2 className="text-2xl font-semibold text-[#4f46e5] mt-8 mb-4">Professional Standards</h2>
          <p>
            We operate in accordance with all relevant property legislation and industry best
            practices. We are committed to providing honest, transparent, and efficient service
            to all our clients.
          </p>

          <h2 className="text-2xl font-semibold text-[#4f46e5] mt-8 mb-4">Fees and Charges</h2>
          <p>
            Our fees are outlined in individual service agreements and terms of business. All
            charges will be clearly communicated before you commit to our services.
          </p>

          <h2 className="text-2xl font-semibold text-[#4f46e5] mt-8 mb-4">Client Obligations</h2>
          <p>
            Clients are required to provide accurate information, cooperate with viewings and
            inspections, and comply with the terms of any agreements entered into.
          </p>

          <h2 className="text-2xl font-semibold text-[#4f46e5] mt-8 mb-4">Complaints Procedure</h2>
          <p>
            If you have a complaint about our services, please contact us in writing at the
            address below. We will investigate and respond within a reasonable timeframe.
          </p>

          <h2 className="text-2xl font-semibold text-[#4f46e5] mt-8 mb-4">Contact Information</h2>
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
