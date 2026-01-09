import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Camden Associates terms of service and conditions of use.",
};

export default function TermsPage() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-electric-blue hover:text-blue-light mb-8 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Terms of Service
        </h1>
        <p className="text-silver mb-8">Last updated: January 2026</p>

        <div className="prose prose-invert max-w-none">
          <div className="space-y-8 text-silver">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Agreement to Terms
              </h2>
              <p className="leading-relaxed">
                By accessing or using the Camden Associates website, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Use of Website
              </h2>
              <p className="leading-relaxed mb-4">
                You may use our website for lawful purposes only. You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit any harmful code or malware</li>
                <li>Attempt to gain unauthorized access to our systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Intellectual Property
              </h2>
              <p className="leading-relaxed">
                The content on this website, including text, graphics, logos, and images, is the property of Camden Associates and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Professional Services
              </h2>
              <p className="leading-relaxed">
                The information provided on this website is for general informational purposes only and does not constitute professional advice. Any engagement of our corporate finance advisory services will be subject to a separate written agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                Camden Associates shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Links to Third-Party Websites
              </h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Changes to Terms
              </h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Governing Law
              </h2>
              <p className="leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-4">
                <a
                  href="mailto:contact@camdenassociates.co.uk"
                  className="text-electric-blue hover:text-blue-light transition-colors"
                >
                  contact@camdenassociates.co.uk
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
