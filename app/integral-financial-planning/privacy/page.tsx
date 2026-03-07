import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Data Protection",
  description: "Privacy Policy for Integral Financial Planning. Learn how we collect, use, and protect your personal information.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="hero-gradient py-16 lg:py-20">
        <div className="container-width">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-200">How we collect, use, and protect your personal information</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-600 mb-8"><strong>Last updated:</strong> January 2025</p>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-6">Integral Financial Planning (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy and handling your personal data responsibly. This Privacy Policy explains how we collect, use, store, and protect your personal information in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">2. Data Controller</h2>
            <p className="text-gray-600 mb-6">Integral Financial Planning is the data controller for personal information collected through our services and website.</p>
            <address className="not-italic text-gray-600 mb-6 bg-gray-50 p-4 rounded-sm">Integral Financial Planning<br />Nottingham<br />Email: info@integral-ifa.co.uk<br />Phone: 0115 953 2359</address>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">3. Information We Collect</h2>
            <p className="text-gray-600 mb-4">We may collect: contact information, date of birth, employment and income details, financial information, bank account details, health information (where relevant), and identification documents.</p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">4. How We Use Your Information</h2>
            <p className="text-gray-600 mb-6">We use your personal information to provide financial advice, assess product suitability, process transactions, communicate with you, comply with legal obligations, and improve our services.</p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">5. Your Rights</h2>
            <p className="text-gray-600 mb-6">Under UK data protection law, you have rights including: access, rectification, erasure, restriction, portability, and the right to object. Contact us to exercise these rights.</p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">6. Data Security</h2>
            <p className="text-gray-600 mb-6">We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.</p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">7. Complaints</h2>
            <p className="text-gray-600 mb-6">If you are unhappy with how we have handled your data, you can complain to the Information Commissioner&apos;s Office (ICO) at ico.org.uk or call 0303 123 1113.</p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-10">8. Contact</h2>
            <address className="not-italic text-gray-600 mb-6 bg-gray-50 p-4 rounded-sm">Integral Financial Planning<br />Nottingham<br />Email: info@integral-ifa.co.uk<br />Phone: 0115 953 2359</address>
          </div>
        </div>
      </section>
    </>
  );
}
