import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | IT Support Questions Answered",
  description:
    "Frequently asked questions about managed IT support, cybersecurity, cloud solutions, and our services in Canary Wharf.",
  openGraph: {
    title: "FAQ | Canary Wharf IT Solutions",
    description:
      "Common questions about IT support, cybersecurity, cloud migration, and working with a managed service provider.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Managed IT Support",
      questions: [
        {
          question: "What does managed IT support include?",
          answer:
            "Our managed IT support includes 24/7 proactive monitoring, helpdesk support with a 15-minute SLA for critical issues, patch management, software updates, hardware lifecycle management, and regular system health reports. We essentially become your outsourced IT department.",
        },
        {
          question: "How quickly do you respond to support requests?",
          answer:
            "Critical issues are acknowledged within 15 minutes and we aim to have an engineer working on the problem immediately. Standard requests are typically addressed within 1-2 hours. Our helpdesk operates from 7am to 8pm on weekdays, with 24/7 critical incident cover available.",
        },
        {
          question: "Can you support remote and hybrid workers?",
          answer:
            "Absolutely. We specialise in enabling secure remote and hybrid working environments. This includes VPN setup, cloud-based collaboration tools, remote desktop solutions, and mobile device management to keep your distributed team connected and secure.",
        },
        {
          question: "Do you provide on-site support?",
          answer:
            "Yes. Being based in Canary Wharf means we can have an engineer on-site within 30 minutes for emergencies. We also schedule regular on-site visits as part of our managed support plans for hands-on maintenance and face-to-face IT clinics.",
        },
      ],
    },
    {
      category: "Cybersecurity",
      questions: [
        {
          question: "What is Cyber Essentials certification?",
          answer:
            "Cyber Essentials is a UK government-backed scheme that helps organisations protect themselves against common cyber threats. It covers five key areas: firewalls, secure configuration, access control, malware protection, and patch management. We can help you achieve certification and maintain compliance.",
        },
        {
          question: "How do you protect against ransomware?",
          answer:
            "Our multi-layered approach includes next-generation firewalls, endpoint detection and response (EDR), email filtering, regular patching, employee awareness training, and robust backup solutions with air-gapped copies. If the worst happens, our disaster recovery plans ensure rapid restoration.",
        },
        {
          question: "Do you offer security awareness training for staff?",
          answer:
            "Yes. Human error is the leading cause of security breaches. We provide regular phishing simulations, interactive training modules, and security best practice workshops tailored to your team. Training is included in our cybersecurity packages.",
        },
      ],
    },
    {
      category: "Cloud & Infrastructure",
      questions: [
        {
          question: "How long does a Microsoft 365 migration take?",
          answer:
            "A typical migration takes 2-4 weeks depending on the number of users, volume of data, and complexity of your environment. We handle everything from planning and data migration to user training, ensuring zero downtime during the transition.",
        },
        {
          question: "Can you manage a hybrid cloud environment?",
          answer:
            "Yes. Many businesses need a mix of on-premises and cloud infrastructure. We design hybrid architectures that give you the best of both worlds — the control of local servers with the scalability and flexibility of cloud platforms like Azure.",
        },
        {
          question: "What happens if our internet connection goes down?",
          answer:
            "We recommend and can provision redundant internet connections with automatic failover. For critical businesses, we design solutions with multiple ISPs and 4G/5G backup to ensure your office stays connected even during outages.",
        },
      ],
    },
    {
      category: "Pricing & Contracts",
      questions: [
        {
          question: "How much does managed IT support cost?",
          answer:
            "Our pricing is based on a per-user, per-month model, typically ranging from £50 to £120 per user depending on the level of support and services required. We offer flexible plans with no hidden costs. Contact us for a tailored quote based on your specific needs.",
        },
        {
          question: "Are you tied into long contracts?",
          answer:
            "We offer flexible contract terms, typically starting with a 12-month agreement. We also offer rolling monthly contracts for businesses that prefer flexibility. We earn your loyalty through exceptional service, not contractual lock-in.",
        },
        {
          question: "Do you charge for the initial IT audit?",
          answer:
            "No, the initial IT audit is completely free and without obligation. We assess your current infrastructure, identify vulnerabilities, and provide a detailed report with recommendations. You only pay if you choose to proceed with our services.",
        },
      ],
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((category) =>
      category.questions.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Find answers to common questions about our IT support services,
              cybersecurity, cloud solutions, and how we work with businesses
              in Canary Wharf.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-accent"></div>
                  {category.category}
                </h2>
                <div className="space-y-1">
                  {category.questions.map((faq, faqIndex) => (
                    <details
                      key={faqIndex}
                      className="group bg-gray-50 rounded-sm overflow-hidden"
                    >
                      <summary className="faq-question p-6 list-none cursor-pointer">
                        <span className="flex-1 pr-4">{faq.question}</span>
                        <svg
                          className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Still Have Questions?
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">
              We&apos;re here to help. If you couldn&apos;t find the answer you were
              looking for, get in touch and our team will be happy to assist.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/it-support-canary-wharf/contact" className="btn-accent">
                Contact Us
              </Link>
              <a href="tel:02079467012" className="btn-outline">
                Call 020 7946 7012
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Free IT Audit?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a complimentary IT assessment and discover how we can improve
            your security, reliability, and productivity.
          </p>
          <Link href="/it-support-canary-wharf/contact" className="btn-accent">
            Book Your Free IT Audit
          </Link>
        </div>
      </section>
    </>
  );
}
