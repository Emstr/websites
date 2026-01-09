import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Bennett Walden - BW of Hackney estate agents.',
};

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-[#0f766e] text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-teal-50">Last updated: January 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using the Bennett Walden - BW of Hackney website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Services</h2>
            <p className="text-gray-600 mb-4">
              Bennett Walden - BW of Hackney provides:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Property sales services</li>
              <li>Property letting services</li>
              <li>Property management services</li>
              <li>Property valuations</li>
              <li>Property marketing and advice</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Client Obligations</h2>
            <p className="text-gray-600 mb-4">
              When using our services, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Pay agreed fees in a timely manner</li>
              <li>Allow access to properties for viewings and inspections</li>
              <li>Comply with all legal requirements related to property transactions</li>
              <li>Inform us immediately of any changes to property status or your circumstances</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Fees and Payment</h2>
            <p className="text-gray-600 mb-6">
              Our fees are clearly stated in our service agreements. Payment terms will be agreed upon before services commence. We reserve the right to suspend or terminate services for non-payment.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Property Information</h2>
            <p className="text-gray-600 mb-6">
              While we make every effort to ensure property information is accurate, we cannot guarantee its completeness or accuracy. Buyers and tenants should conduct their own due diligence and surveys before making commitments.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Cancellation</h2>
            <p className="text-gray-600 mb-6">
              Cancellation terms are specified in individual service agreements. Notice periods and fees may apply depending on the stage of service delivery.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Liability</h2>
            <p className="text-gray-600 mb-6">
              We provide our services with reasonable skill and care. However, we are not liable for any indirect, consequential, or special damages arising from the use of our services, except where prohibited by law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              All content on our website, including text, images, logos, and design elements, is the property of Bennett Walden - BW of Hackney or licensed to us. You may not use, reproduce, or distribute any content without our written permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Third-Party Links</h2>
            <p className="text-gray-600 mb-6">
              Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of service of these external sites.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Professional Conduct</h2>
            <p className="text-gray-600 mb-6">
              We conduct our business in accordance with industry standards and regulations, including membership requirements of relevant professional bodies and compliance with the Estate Agents Act 1979 and related legislation.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Complaints</h2>
            <p className="text-gray-600 mb-6">
              If you are unhappy with our services, please contact us to discuss your concerns. We have an internal complaints procedure and are also members of a property redress scheme.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These Terms of Service are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Changes to Terms</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of the modified terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-slate-50 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-2">
                <strong>Bennett Walden - BW of Hackney</strong>
              </p>
              <p className="text-gray-600 mb-1">121 Richmond Road, London, E8 3NJ</p>
              <p className="text-gray-600 mb-1">Phone: <a href="tel:02072577177" className="text-[#0f766e] hover:underline">020 7257 7177</a></p>
              <p className="text-gray-600">Email: <a href="mailto:hackney@bennettwalden.co.uk" className="text-[#0f766e] hover:underline">hackney@bennettwalden.co.uk</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
