import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Business | Client Agreement",
  description: "Terms of Business for Integral Financial Planning. Understand our client agreement, services, and regulatory information.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <section className="hero-gradient py-16 lg:py-20">
        <div className="container-width">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Business</h1>
            <p className="text-xl text-gray-200">Our client agreement and terms of service</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-600 mb-8"><strong>Last updated:</strong> January 2025</p>

            <h2 className="text-2xl font-bold text-primary mb-4">1. About Us</h2>
            <p className="text-gray-600 mb-6">Integral Financial Planning is authorised and regulated by the Financial Conduct Authority (FCA). You can check our regulatory status on the FCA Register at register.fca.org.uk.</p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">2. Our Services</h2>
            <p className="text-gray-600 mb-6">We provide independent financial advice on: investment planning, pension planning, tax-efficient investing, life assurance, retirement planning, and estate planning. As independent advisers, we recommend the best solutions from the whole market.</p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">3. Client Classification</h2>
            <p className="text-gray-600 mb-6">For regulatory purposes, we treat you as a &quot;Retail Client&quot;, affording the highest level of protection under FCA rules including access to the Financial Ombudsman Service and FSCS.</p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">4. Our Fees</h2>
            <p className="text-gray-600 mb-6">We always explain fees clearly before undertaking any work. We may charge a percentage of amount invested, a fixed fee, or hourly rate. Initial consultations are free. Ongoing service fees cover regular reviews and access to your adviser.</p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">5. Risk Warnings</h2>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
              <p className="text-gray-700 font-medium mb-2">Important:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>The value of investments can go down as well as up</li>
                <li>Past performance is not a reliable indicator of future results</li>
                <li>Tax treatment depends on individual circumstances and may change</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">6. Cancellation Rights</h2>
            <p className="text-gray-600 mb-6">For most products, you have a right to cancel within 14 days (30 days for protection policies). Specific information will be provided with each recommendation.</p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">7. Complaints</h2>
            <p className="text-gray-600 mb-6">If unhappy with our service, please contact us in writing. We will acknowledge within 5 working days and aim to resolve within 8 weeks. You may also refer to the Financial Ombudsman Service at financial-ombudsman.org.uk.</p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">8. Compensation</h2>
            <p className="text-gray-600 mb-6">We are covered by the Financial Services Compensation Scheme (FSCS). Most investment business is covered up to £85,000 per person. Visit fscs.org.uk for more information.</p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">9. Contact</h2>
            <address className="not-italic text-gray-600 mb-6 bg-gray-50 p-4 rounded-sm">Integral Financial Planning<br />Nottingham<br />Phone: 0115 953 2359<br />Email: info@integral-ifa.co.uk</address>
          </div>
        </div>
      </section>
    </>
  );
}
