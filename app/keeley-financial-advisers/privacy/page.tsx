import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Data Protection",
  description:
    "Privacy Policy for Keeley & Co. Learn how we collect, use, and protect your personal information.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="container-width">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-200">
              How we collect, use, and protect your personal information
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

            <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-6">
              Keeley & Co (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting
              your privacy and handling your personal data responsibly. This Privacy
              Policy explains how we collect, use, store, and protect your personal
              information in accordance with the UK General Data Protection Regulation
              (UK GDPR) and the Data Protection Act 2018.
            </p>
            <p className="text-gray-600 mb-6">
              As a firm authorised and regulated by the Financial Conduct Authority
              (FCA), we are also subject to additional data protection requirements
              under financial services regulations.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              2. Data Controller
            </h2>
            <p className="text-gray-600 mb-6">
              Keeley & Co is the data controller for personal information collected
              through our services and website. Our contact details are:
            </p>
            <address className="not-italic text-gray-600 mb-6 bg-gray-50 p-4 rounded-sm">
              Keeley & Co
              <br />
              6 St Pauls Terrace, Northwood St
              <br />
              Birmingham B3 1TH
              <br />
              Email: contact@keeleys.co.uk
              <br />
              Phone: 0121 236 1288
            </address>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              3. Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              We may collect and process the following categories of personal data:
            </p>
            <h3 className="text-xl font-semibold text-primary mb-3">
              3.1 Information you provide directly:
            </h3>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>
                Contact information (name, address, email address, telephone number)
              </li>
              <li>Date of birth and national insurance number</li>
              <li>Employment and income details</li>
              <li>
                Financial information (assets, liabilities, investments, pensions)
              </li>
              <li>Bank account and payment details</li>
              <li>Health information (where relevant to protection advice)</li>
              <li>Family circumstances and dependants</li>
              <li>Identification documents</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mb-3">
              3.2 Information collected automatically:
            </h3>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>IP address and device information</li>
              <li>Browser type and settings</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website addresses</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              4. How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">
              We use your personal information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>
                To provide financial advice and services tailored to your needs
              </li>
              <li>To assess your suitability for financial products</li>
              <li>To process applications and transactions on your behalf</li>
              <li>To communicate with you about your accounts and services</li>
              <li>
                To comply with our legal and regulatory obligations, including
                anti-money laundering requirements
              </li>
              <li>To improve our services and website</li>
              <li>
                To send you marketing communications (where you have consented)
              </li>
              <li>To protect against fraud and financial crime</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              5. Legal Basis for Processing
            </h2>
            <p className="text-gray-600 mb-4">
              We process your personal data on the following legal bases:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>
                <strong>Contract:</strong> Processing necessary to provide our
                financial advice services to you
              </li>
              <li>
                <strong>Legal obligation:</strong> Processing required to comply with
                FCA regulations, tax laws, and anti-money laundering legislation
              </li>
              <li>
                <strong>Legitimate interests:</strong> Processing for business
                purposes such as fraud prevention and service improvement
              </li>
              <li>
                <strong>Consent:</strong> For marketing communications and processing
                of special category data (such as health information)
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              6. Data Sharing
            </h2>
            <p className="text-gray-600 mb-4">
              We may share your personal information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>
                Product providers (insurance companies, investment platforms, pension
                providers) to implement our recommendations
              </li>
              <li>Our professional network and compliance support services</li>
              <li>
                Regulatory bodies (FCA, HMRC) as required by law
              </li>
              <li>
                Professional advisers (accountants, solicitors) where necessary
              </li>
              <li>IT and hosting service providers</li>
            </ul>
            <p className="text-gray-600 mb-6">
              We do not sell your personal information to third parties for marketing
              purposes.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              7. Data Retention
            </h2>
            <p className="text-gray-600 mb-6">
              We retain your personal information for as long as necessary to provide
              our services and comply with our legal obligations. Under FCA
              regulations, we are required to keep records of financial advice for a
              minimum of five years from the date the advice was given, or longer if
              the advice relates to pensions or other long-term products.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              8. Your Rights
            </h2>
            <p className="text-gray-600 mb-4">
              Under UK data protection law, you have the following rights:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>
                <strong>Right of access:</strong> Request a copy of the personal data
                we hold about you
              </li>
              <li>
                <strong>Right to rectification:</strong> Request correction of
                inaccurate data
              </li>
              <li>
                <strong>Right to erasure:</strong> Request deletion of your data
                (subject to legal retention requirements)
              </li>
              <li>
                <strong>Right to restrict processing:</strong> Request limitation of
                how we use your data
              </li>
              <li>
                <strong>Right to data portability:</strong> Receive your data in a
                portable format
              </li>
              <li>
                <strong>Right to object:</strong> Object to certain types of
                processing, including direct marketing
              </li>
              <li>
                <strong>Rights related to automated decision-making:</strong> Request
                human review of automated decisions
              </li>
            </ul>
            <p className="text-gray-600 mb-6">
              To exercise any of these rights, please contact us using the details
              above.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              9. Data Security
            </h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organisational measures to protect
              your personal data against unauthorised access, alteration, disclosure,
              or destruction. This includes encryption, secure servers, access
              controls, and regular security assessments.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              10. Cookies
            </h2>
            <p className="text-gray-600 mb-6">
              Our website uses cookies to improve your browsing experience. Cookies are
              small files stored on your device that help us understand how you use our
              website. You can control cookie settings through your browser. Essential
              cookies are necessary for the website to function and cannot be disabled.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              11. Changes to This Policy
            </h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. Any changes will be
              posted on this page with an updated revision date. We encourage you to
              review this policy periodically.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              12. Complaints
            </h2>
            <p className="text-gray-600 mb-6">
              If you are unhappy with how we have handled your personal data, you have
              the right to complain to the Information Commissioner&apos;s Office (ICO):
            </p>
            <address className="not-italic text-gray-600 mb-6 bg-gray-50 p-4 rounded-sm">
              Information Commissioner&apos;s Office
              <br />
              Wycliffe House, Water Lane
              <br />
              Wilmslow, Cheshire SK9 5AF
              <br />
              Website: ico.org.uk
              <br />
              Phone: 0303 123 1113
            </address>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">
              13. Contact Us
            </h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us at:
            </p>
            <address className="not-italic text-gray-600 mb-6 bg-gray-50 p-4 rounded-sm">
              Keeley & Co
              <br />
              6 St Pauls Terrace, Northwood St
              <br />
              Birmingham B3 1TH
              <br />
              Email: contact@keeleys.co.uk
              <br />
              Phone: 0121 236 1288
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
