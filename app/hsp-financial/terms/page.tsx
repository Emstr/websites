import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Business | Client Agreement",
  description:
    "Terms of Business for HSP Financial Planning Ltd. Understand our client agreement, services, and regulatory information.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="container-width">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms of Business
            </h1>
            <p className="text-xl text-gray-200">
              Our client agreement and terms of service
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> January 2025
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">1. About Us</h2>
            <p className="text-gray-600 mb-6">
              HSP Financial Planning Ltd is
              authorised and regulated by the Financial Conduct Authority (FCA). Our
              office is in Whiteacres, Cambridge Road, Whetstone, Leicestershire, LE8 6ZG.
            </p>
            <p className="text-gray-600 mb-6">
              You can check our regulatory status on the FCA Register at
              register.fca.org.uk or by contacting the FCA on 0800 111 6768.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              2. Our Services
            </h2>
            <p className="text-gray-600 mb-4">
              We provide independent financial advice on the following areas:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Pension planning, including retirement income strategies</li>
              <li>Investment planning and portfolio management</li>
              <li>Mortgage advice (first-time buyers, remortgages, buy-to-let, equity release)</li>
              <li>Protection planning (life assurance, critical illness, income protection)</li>
              <li>Estate planning and inheritance tax mitigation</li>
            </ul>
            <p className="text-gray-600 mb-6">
              As independent financial advisers, we are not restricted in the range
              of products we can recommend. We will assess your needs and objectives
              and recommend suitable solutions from the whole of the market.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              3. Client Classification
            </h2>
            <p className="text-gray-600 mb-6">
              For regulatory purposes, we will treat you as a &quot;Retail Client&quot;,
              which affords you the highest level of protection under the FCA rules.
              This means you have access to the Financial Ombudsman Service and may
              be eligible for compensation under the Financial Services Compensation
              Scheme (FSCS) if we are unable to meet our obligations.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              4. Our Advice Process
            </h2>
            <p className="text-gray-600 mb-4">Our advice process includes:</p>
            <ol className="list-decimal pl-6 text-gray-600 mb-6 space-y-2">
              <li>
                <strong>Initial meeting:</strong> We gather information about your
                financial circumstances, objectives, and attitude to risk
              </li>
              <li>
                <strong>Research and analysis:</strong> We analyse your situation
                and research suitable options from the whole of the market
              </li>
              <li>
                <strong>Recommendations:</strong> We provide a written suitability
                report explaining our recommendations and why they are suitable for
                you
              </li>
              <li>
                <strong>Implementation:</strong> With your authority, we implement
                the agreed recommendations
              </li>
              <li>
                <strong>Ongoing service:</strong> We provide regular reviews and
                ongoing support as agreed
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              5. Client Responsibilities
            </h2>
            <p className="text-gray-600 mb-4">
              To enable us to provide suitable advice, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>
                Provide accurate and complete information about your circumstances
              </li>
              <li>Inform us of any changes to your circumstances</li>
              <li>Read all documentation we provide carefully</li>
              <li>Ask questions if anything is unclear</li>
              <li>
                Make your own decisions about whether to proceed with our
                recommendations
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              6. Our Fees
            </h2>
            <p className="text-gray-600 mb-6">
              We will always explain our fees clearly before undertaking any work.
              Our charges may include:
            </p>
            <h3 className="text-xl font-semibold text-primary mb-3">
              6.1 Initial Advice Fees
            </h3>
            <p className="text-gray-600 mb-4">
              For initial advice and implementation, we may charge either:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>A percentage of the amount invested/transferred</li>
              <li>A fixed fee based on the complexity of work required</li>
              <li>An hourly rate for specific pieces of work</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mb-3">
              6.2 Ongoing Service Fees
            </h3>
            <p className="text-gray-600 mb-6">
              For clients who opt for our ongoing review service, we charge an annual
              fee, typically a percentage of assets under advice. This covers regular
              reviews, portfolio monitoring, and access to your consultant throughout
              the year.
            </p>

            <h3 className="text-xl font-semibold text-primary mb-3">
              6.3 Payment Methods
            </h3>
            <p className="text-gray-600 mb-6">
              Fees may be paid directly by you or, where available, deducted from
              your investment/policy. We will confirm the payment method before
              commencing work.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              7. Conflicts of Interest
            </h2>
            <p className="text-gray-600 mb-6">
              We maintain a conflicts of interest policy and take all reasonable
              steps to identify and manage any conflicts that may arise. If a
              conflict cannot be managed, we will disclose it to you before
              proceeding. You may request a copy of our conflicts policy at any time.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              8. Risk Warnings
            </h2>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
              <p className="text-gray-700 font-medium mb-2">Important:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  The value of investments can go down as well as up, and you may
                  get back less than you invested
                </li>
                <li>
                  Past performance is not a reliable indicator of future results
                </li>
                <li>
                  Tax treatment depends on individual circumstances and may change
                  in the future
                </li>
                <li>
                  Some investments may not be suitable for all investors
                </li>
                <li>
                  Your home may be repossessed if you do not keep up repayments on
                  your mortgage
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              9. Cancellation Rights
            </h2>
            <p className="text-gray-600 mb-6">
              For most financial products, you have a right to cancel within 14 days
              of receiving the contract (30 days for protection policies). We will
              provide specific cancellation information with each product
              recommendation. Please note that if you cancel after the cooling-off
              period, you may not receive a full refund of any charges paid.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              10. Complaints Procedure
            </h2>
            <p className="text-gray-600 mb-6">
              We are committed to providing a high standard of service. If you are
              unhappy with any aspect of our service, please contact us in writing:
            </p>
            <address className="not-italic text-gray-600 mb-6 bg-gray-50 p-4 rounded-sm">
              Complaints Manager
              <br />
              HSP Financial Planning
              <br />
              Whiteacres, Cambridge Road, Whetstone, Leicestershire, LE8 6ZG
              <br />
              Email: services@hsp-ifa.com
            </address>
            <p className="text-gray-600 mb-6">
              We will acknowledge your complaint within 5 working days and aim to
              resolve it within 8 weeks. If you remain dissatisfied, you may refer
              your complaint to the Financial Ombudsman Service:
            </p>
            <address className="not-italic text-gray-600 mb-6 bg-gray-50 p-4 rounded-sm">
              Financial Ombudsman Service
              <br />
              Exchange Tower
              <br />
              London E14 9SR
              <br />
              Phone: 0800 023 4567
              <br />
              Website: financial-ombudsman.org.uk
            </address>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              11. Compensation
            </h2>
            <p className="text-gray-600 mb-6">
              We are covered by the Financial Services Compensation Scheme (FSCS).
              This means you may be entitled to compensation if we cannot meet our
              obligations. Most types of investment business are covered up to
              85,000 per person. Further information is available from the FSCS at
              fscs.org.uk or 0800 678 1100.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              12. Documentation and Communications
            </h2>
            <p className="text-gray-600 mb-6">
              We will communicate with you in English. All documentation, including
              suitability reports and policy documents, will be provided in writing
              (electronic or paper format as agreed). Please keep all documentation
              safe for your records.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              13. Termination
            </h2>
            <p className="text-gray-600 mb-6">
              Either party may terminate our agreement at any time by providing
              written notice. Any outstanding fees for work already completed will
              remain payable. Termination will not affect any transactions already
              initiated on your behalf.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              14. Law and Jurisdiction
            </h2>
            <p className="text-gray-600 mb-6">
              These Terms of Business are governed by English law. Any disputes will
              be subject to the exclusive jurisdiction of the English courts, without
              prejudice to your right to refer complaints to the Financial Ombudsman
              Service.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              15. Changes to These Terms
            </h2>
            <p className="text-gray-600 mb-6">
              We may update these Terms of Business from time to time. We will
              notify you of any material changes before they take effect.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              16. Contact Information
            </h2>
            <p className="text-gray-600 mb-4">
              For any questions about these terms, please contact us:
            </p>
            <address className="not-italic text-gray-600 mb-6 bg-gray-50 p-4 rounded-sm">
              HSP Financial Planning
              <br />
              Whiteacres, Cambridge Road, Whetstone, Leicestershire, LE8 6ZG
              <br />
              Phone: 0116 275 0225
              <br />
              Email: services@hsp-ifa.com
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
