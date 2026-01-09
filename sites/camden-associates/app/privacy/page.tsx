import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Camden Associates privacy policy and data protection information.",
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-silver mb-8">Last updated: January 2026</p>

        <div className="prose prose-invert max-w-none">
          <div className="space-y-8 text-silver">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Introduction
              </h2>
              <p className="leading-relaxed">
                Camden Associates ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Information We Collect
              </h2>
              <p className="leading-relaxed mb-4">
                We may collect information about you in a variety of ways, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Personal data (name, email address, phone number) that you voluntarily provide</li>
                <li>Business information when you inquire about our services</li>
                <li>Usage data and analytics when you visit our website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                How We Use Your Information
              </h2>
              <p className="leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respond to your inquiries and provide our services</li>
                <li>Improve our website and services</li>
                <li>Send you information about our services (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Protection
              </h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Your Rights
              </h2>
              <p className="leading-relaxed mb-4">
                Under data protection laws, you have rights including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The right to access your personal data</li>
                <li>The right to rectification of inaccurate data</li>
                <li>The right to erasure of your data</li>
                <li>The right to restrict processing</li>
                <li>The right to data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:
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
