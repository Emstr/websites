import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Total Finance (UK) Ltd. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/privacy/",
  },
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy text-white py-16">
        <div className="container-custom px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-gray-200 mt-4">
            Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  1. Introduction
                </h2>
                <p className="text-slate">
                  Total Finance (UK) Ltd ("we", "us", or "our") is committed to
                  protecting your privacy. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when you
                  visit our website total-finance.org.uk or use our financial
                  advisory services.
                </p>
                <p className="text-slate mt-4">
                  We are registered with the Information Commissioner's Office
                  (ICO) and comply with the UK General Data Protection Regulation
                  (UK GDPR) and the Data Protection Act 2018.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-slate mb-4">
                  We collect information that you provide directly to us,
                  including:
                </p>
                <ul className="list-disc pl-6 text-slate space-y-2">
                  <li>
                    <strong>Personal identification information:</strong> Name,
                    date of birth, address, email address, telephone number
                  </li>
                  <li>
                    <strong>Financial information:</strong> Income, employment
                    details, existing mortgages and loans, savings, investments,
                    pensions, and insurance policies
                  </li>
                  <li>
                    <strong>Health information:</strong> Where relevant for
                    protection insurance applications
                  </li>
                  <li>
                    <strong>Documentation:</strong> Proof of identity, proof of
                    address, bank statements, payslips
                  </li>
                  <li>
                    <strong>Communication records:</strong> Correspondence between
                    you and us
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-slate mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-slate space-y-2">
                  <li>To provide financial advice and services</li>
                  <li>
                    To process mortgage, protection, and pension applications on
                    your behalf
                  </li>
                  <li>To communicate with you about your enquiry or application</li>
                  <li>To comply with legal and regulatory obligations</li>
                  <li>To verify your identity and prevent fraud</li>
                  <li>
                    To improve our services and develop new products (using
                    anonymised data)
                  </li>
                  <li>
                    To send you marketing communications (with your consent)
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  4. Legal Basis for Processing
                </h2>
                <p className="text-slate mb-4">
                  We process your personal data on the following legal bases:
                </p>
                <ul className="list-disc pl-6 text-slate space-y-2">
                  <li>
                    <strong>Contract:</strong> Processing necessary to provide our
                    services to you
                  </li>
                  <li>
                    <strong>Legal obligation:</strong> Processing required to
                    comply with FCA regulations and other laws
                  </li>
                  <li>
                    <strong>Legitimate interests:</strong> Processing necessary
                    for our legitimate business interests, such as improving our
                    services
                  </li>
                  <li>
                    <strong>Consent:</strong> Where you have given specific
                    consent, such as for marketing communications
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  5. Sharing Your Information
                </h2>
                <p className="text-slate mb-4">
                  We may share your information with:
                </p>
                <ul className="list-disc pl-6 text-slate space-y-2">
                  <li>
                    <strong>Lenders and insurers:</strong> To process your
                    applications
                  </li>
                  <li>
                    <strong>Credit reference agencies:</strong> For identity
                    verification and credit checks
                  </li>
                  <li>
                    <strong>Regulatory bodies:</strong> Such as the Financial
                    Conduct Authority, where required
                  </li>
                  <li>
                    <strong>Professional advisers:</strong> Such as solicitors and
                    accountants, where necessary
                  </li>
                  <li>
                    <strong>Service providers:</strong> Who assist us in operating
                    our business
                  </li>
                </ul>
                <p className="text-slate mt-4">
                  We will never sell your personal information to third parties
                  for marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  6. Data Retention
                </h2>
                <p className="text-slate">
                  We retain your personal data for as long as necessary to provide
                  our services and comply with legal requirements. For financial
                  services, we typically retain records for a minimum of six years
                  after our relationship ends, in line with FCA requirements. Some
                  records, such as pension advice, may be retained indefinitely.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  7. Your Rights
                </h2>
                <p className="text-slate mb-4">
                  Under UK GDPR, you have the following rights:
                </p>
                <ul className="list-disc pl-6 text-slate space-y-2">
                  <li>
                    <strong>Right of access:</strong> To request a copy of your
                    personal data
                  </li>
                  <li>
                    <strong>Right to rectification:</strong> To request correction
                    of inaccurate data
                  </li>
                  <li>
                    <strong>Right to erasure:</strong> To request deletion of your
                    data in certain circumstances
                  </li>
                  <li>
                    <strong>Right to restrict processing:</strong> To request
                    limitation of how we use your data
                  </li>
                  <li>
                    <strong>Right to data portability:</strong> To receive your
                    data in a portable format
                  </li>
                  <li>
                    <strong>Right to object:</strong> To object to processing
                    based on legitimate interests
                  </li>
                  <li>
                    <strong>Rights related to automated decision-making:</strong>{" "}
                    To not be subject to solely automated decisions
                  </li>
                </ul>
                <p className="text-slate mt-4">
                  To exercise any of these rights, please contact us using the
                  details below.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  8. Data Security
                </h2>
                <p className="text-slate">
                  We implement appropriate technical and organisational measures
                  to protect your personal data against unauthorised access,
                  alteration, disclosure, or destruction. These measures include
                  encryption, secure storage, access controls, and staff training.
                  However, no method of transmission over the Internet is 100%
                  secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  9. Cookies and Website Tracking
                </h2>
                <p className="text-slate">
                  Our website uses cookies and similar technologies to improve
                  your browsing experience and analyse website traffic. You can
                  control cookies through your browser settings. For more
                  information, please see our Cookie Policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  10. Third-Party Links
                </h2>
                <p className="text-slate">
                  Our website may contain links to third-party websites. We are
                  not responsible for the privacy practices of these websites. We
                  encourage you to read the privacy policies of any linked
                  websites you visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  11. Changes to This Policy
                </h2>
                <p className="text-slate">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any material changes by posting the new Privacy
                  Policy on this page and updating the "Last updated" date. We
                  encourage you to review this Privacy Policy periodically.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  12. Contact Us
                </h2>
                <p className="text-slate mb-4">
                  If you have any questions about this Privacy Policy or our data
                  practices, please contact us:
                </p>
                <div className="bg-light-gray rounded-xl p-6">
                  <p className="text-navy">
                    <strong>Total Finance (UK) Ltd</strong>
                    <br />
                    184-190 Farnaby Road
                    <br />
                    Bromley, Greater London
                    <br />
                    BR2 0BB
                    <br />
                    <br />
                    <strong>Phone:</strong>{" "}
                    <a
                      href="tel:02086957548"
                      className="text-primary hover:underline"
                    >
                      020 8695 7548
                    </a>
                    <br />
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:info@total-finance.org.uk"
                      className="text-primary hover:underline"
                    >
                      info@total-finance.org.uk
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  13. Complaints
                </h2>
                <p className="text-slate">
                  If you are not satisfied with how we handle your personal data,
                  you have the right to lodge a complaint with the Information
                  Commissioner's Office (ICO). You can contact the ICO at{" "}
                  <a
                    href="https://ico.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    ico.org.uk
                  </a>{" "}
                  or by calling 0303 123 1113.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
