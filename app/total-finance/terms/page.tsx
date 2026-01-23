import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Total Finance (UK) Ltd. Read our terms and conditions for using our financial advisory services and website.",
  alternates: {
    canonical: "/terms/",
  },
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy text-white py-16">
        <div className="container-custom px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
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
                  These Terms of Service (&quot;Terms&quot;) govern your use of the Total
                  Finance (UK) Ltd website (total-finance.org.uk) and our
                  financial advisory services. By accessing our website or using
                  our services, you agree to be bound by these Terms. If you do
                  not agree to these Terms, please do not use our website or
                  services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  2. About Us
                </h2>
                <p className="text-slate">
                  Total Finance (UK) Ltd is a company registered in England and
                  Wales. We are authorised and regulated by the Financial Conduct
                  Authority (FCA). Our registered office is at 184-190 Farnaby
                  Road, Bromley, Greater London, BR2 0BB.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  3. Our Services
                </h2>
                <p className="text-slate mb-4">
                  We provide independent financial advice on:
                </p>
                <ul className="list-disc pl-6 text-slate space-y-2">
                  <li>Mortgages and remortgages</li>
                  <li>Secured loans</li>
                  <li>Life assurance</li>
                  <li>Critical illness cover</li>
                  <li>Income protection</li>
                  <li>Pension planning</li>
                </ul>
                <p className="text-slate mt-4">
                  The specific services we provide to you will be set out in our
                  engagement letter and any subsequent documentation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  4. Website Use
                </h2>
                <p className="text-slate mb-4">
                  The content on our website is provided for general information
                  purposes only. It does not constitute financial advice and
                  should not be relied upon as such. Before making any financial
                  decisions, you should seek professional advice tailored to your
                  circumstances.
                </p>
                <p className="text-slate">You agree not to:</p>
                <ul className="list-disc pl-6 text-slate space-y-2 mt-4">
                  <li>
                    Use the website in any way that is unlawful, harmful, or
                    fraudulent
                  </li>
                  <li>
                    Reproduce, duplicate, copy, or resell any part of the website
                  </li>
                  <li>
                    Attempt to gain unauthorised access to any part of the website
                  </li>
                  <li>
                    Use the website to transmit any harmful code or malware
                  </li>
                  <li>
                    Collect or harvest any information from the website without
                    permission
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  5. Client Responsibilities
                </h2>
                <p className="text-slate mb-4">
                  When using our services, you agree to:
                </p>
                <ul className="list-disc pl-6 text-slate space-y-2">
                  <li>
                    Provide accurate, complete, and up-to-date information about
                    your circumstances
                  </li>
                  <li>
                    Inform us promptly of any changes to your circumstances
                  </li>
                  <li>
                    Read all documentation we provide and ask questions if
                    anything is unclear
                  </li>
                  <li>
                    Make your own decisions based on the advice we provide
                  </li>
                  <li>
                    Pay any agreed fees in a timely manner
                  </li>
                </ul>
                <p className="text-slate mt-4">
                  We rely on the information you provide. If you provide
                  inaccurate or incomplete information, our advice may not be
                  suitable for your needs.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  6. Fees and Charges
                </h2>
                <p className="text-slate">
                  Our fees will be clearly explained before we provide any
                  services. Depending on the service, we may charge a fee directly
                  or receive commission from the product provider, or a
                  combination of both. You will receive a disclosure document
                  explaining our charges before proceeding with any advice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  7. Regulatory Information
                </h2>
                <p className="text-slate mb-4">
                  Total Finance (UK) Ltd is authorised and regulated by the
                  Financial Conduct Authority. Our FCA reference number can be
                  verified on the FCA Register at{" "}
                  <a
                    href="https://register.fca.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    register.fca.org.uk
                  </a>
                  .
                </p>
                <div className="bg-light-gray rounded-xl p-6 mt-4">
                  <p className="text-navy font-semibold mb-2">
                    Important Risk Warnings:
                  </p>
                  <ul className="list-disc pl-6 text-slate space-y-2">
                    <li>
                      Your home may be repossessed if you do not keep up
                      repayments on your mortgage or any other debt secured on it.
                    </li>
                    <li>
                      The value of investments can go down as well as up. You may
                      get back less than you invest.
                    </li>
                    <li>
                      Tax treatment depends on individual circumstances and may
                      change in the future.
                    </li>
                    <li>
                      Pension rules can change and their benefits depend on your
                      circumstances.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  8. Complaints
                </h2>
                <p className="text-slate mb-4">
                  If you are unhappy with our service, please contact us in the
                  first instance. We have a formal complaints procedure and will
                  acknowledge your complaint within five working days and provide
                  a final response within eight weeks.
                </p>
                <p className="text-slate">
                  If you remain dissatisfied, you may be able to refer your
                  complaint to the Financial Ombudsman Service (FOS). Details of
                  the FOS can be found at{" "}
                  <a
                    href="https://www.financial-ombudsman.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    financial-ombudsman.org.uk
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  9. Compensation
                </h2>
                <p className="text-slate">
                  We are covered by the Financial Services Compensation Scheme
                  (FSCS). You may be entitled to compensation from the scheme if
                  we cannot meet our obligations. This depends on the type of
                  business and the circumstances of the claim. Most types of
                  investment business are covered for up to 85,000 per person.
                  Further information is available from the FSCS at{" "}
                  <a
                    href="https://www.fscs.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    fscs.org.uk
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  10. Intellectual Property
                </h2>
                <p className="text-slate">
                  All content on this website, including text, graphics, logos,
                  and images, is the property of Total Finance (UK) Ltd or its
                  content suppliers and is protected by copyright laws. You may
                  not reproduce, distribute, or create derivative works from this
                  content without our express written permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  11. Limitation of Liability
                </h2>
                <p className="text-slate mb-4">
                  While we take reasonable care to ensure the accuracy of the
                  information on our website, we do not guarantee that it is
                  error-free or up-to-date. We accept no liability for any loss or
                  damage arising from the use of this website.
                </p>
                <p className="text-slate">
                  Our liability for any advice we provide is governed by our
                  engagement letter and applicable regulations. Nothing in these
                  Terms excludes or limits our liability for fraud, death or
                  personal injury caused by our negligence, or any other liability
                  that cannot be excluded by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  12. Third-Party Links
                </h2>
                <p className="text-slate">
                  Our website may contain links to third-party websites. These
                  links are provided for your convenience only. We have no control
                  over the content of these websites and accept no responsibility
                  for them or for any loss or damage that may arise from your use
                  of them.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  13. Changes to These Terms
                </h2>
                <p className="text-slate">
                  We reserve the right to modify these Terms at any time. Changes
                  will be effective when posted on this website. Your continued
                  use of the website after changes are posted constitutes your
                  acceptance of the modified Terms. We encourage you to review
                  these Terms periodically.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  14. Governing Law
                </h2>
                <p className="text-slate">
                  These Terms are governed by and construed in accordance with the
                  laws of England and Wales. Any disputes arising from these Terms
                  or your use of our website or services shall be subject to the
                  exclusive jurisdiction of the courts of England and Wales.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  15. Contact Information
                </h2>
                <p className="text-slate mb-4">
                  If you have any questions about these Terms, please contact us:
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
