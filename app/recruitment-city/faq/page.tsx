import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Recruitment Questions Answered",
  description:
    "Frequently asked questions about recruitment services, hiring processes, fees and working with City Recruitment Partners in the City of London.",
  openGraph: {
    title: "FAQ | City Recruitment Partners",
    description:
      "Common questions about our recruitment services, hiring processes and fees answered.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Working With Us",
      questions: [
        {
          question: "What sectors do you specialise in?",
          answer:
            "We specialise exclusively in financial services and technology recruitment. Within financial services, this includes investment banking, asset management, private equity, hedge funds, insurance and fintech. On the technology side, we cover software engineering, data science, cybersecurity, DevOps, product management and IT leadership roles.",
        },
        {
          question: "What types of roles do you recruit for?",
          answer:
            "We recruit across all levels, from graduate and junior positions through to C-suite and board-level appointments. Our services cover permanent roles, contract and interim positions, and retained executive search. Whether you need a single hire or an entire team, we can help.",
        },
        {
          question: "How quickly can you present candidates?",
          answer:
            "For most permanent and contract roles, we aim to present an initial shortlist of 3-5 qualified candidates within 5 working days of receiving a confirmed brief. For urgent contract requirements, we can often present candidates within 24-48 hours thanks to our pre-vetted contractor network.",
        },
        {
          question: "Do you work exclusively or on a contingency basis?",
          answer:
            "We offer both options. For most permanent recruitment, we work on a contingency basis, meaning you only pay when a successful placement is made. For executive search and senior appointments, we typically work on a retained basis to ensure a thorough, confidential process. We will recommend the best approach for your specific requirement.",
        },
      ],
    },
    {
      category: "Fees & Guarantees",
      questions: [
        {
          question: "What are your recruitment fees?",
          answer:
            "Our fees vary depending on the type of service, seniority of the role and whether we are working on a contingency or retained basis. Permanent placement fees are typically calculated as a percentage of the candidate's first-year salary. Contract rates are agreed on a day-rate margin basis. We are always transparent about fees and will provide a clear breakdown before any work begins.",
        },
        {
          question: "Do you offer a guarantee on placements?",
          answer:
            "Yes, all permanent placements come with a comprehensive rebate guarantee. If a placed candidate leaves or is let go within the guarantee period, we will either find a replacement at no additional cost or provide a pro-rated rebate. The specific terms and guarantee period depend on the level of the role and will be agreed upfront in our terms of business.",
        },
        {
          question: "Is there a cost for an initial consultation?",
          answer:
            "No. Our initial consultations are entirely free and without obligation. We use this time to understand your business, culture and hiring needs so we can advise on the best approach. There is no charge until a successful placement is made.",
        },
      ],
    },
    {
      category: "The Recruitment Process",
      questions: [
        {
          question: "How do you source candidates?",
          answer:
            "We use a multi-channel approach combining our extensive proprietary database of over 30,000 finance and technology professionals, proactive headhunting of passive candidates, targeted advertising on specialist job boards, and referrals from our professional network. For executive search, we also conduct detailed market mapping to identify every potential candidate in the market.",
        },
        {
          question: "How do you vet candidates before presenting them?",
          answer:
            "Every candidate we present has been through a rigorous screening process. This includes a detailed CV review, a face-to-face or video interview with a specialist consultant, competency and motivation assessment, verification of qualifications and employment history, and professional reference checks. We only present candidates we would hire ourselves.",
        },
        {
          question: "Can you help with interview scheduling and logistics?",
          answer:
            "Absolutely. We manage the entire interview process, from scheduling and calendar coordination through to preparing candidates for each stage, collecting feedback after interviews and managing offer negotiations. Our goal is to make the process as smooth as possible for both sides.",
        },
        {
          question: "What happens after a placement is made?",
          answer:
            "We stay in close contact with both the client and candidate throughout the notice period and during the first few months in role. We conduct structured check-ins at key milestones to ensure everything is going well and address any concerns early. This aftercare is a key reason our retention rate exceeds 95%.",
        },
      ],
    },
    {
      category: "For Candidates",
      questions: [
        {
          question: "Is it free to register with City Recruitment Partners?",
          answer:
            "Yes, our service is completely free for candidates. We are paid by the hiring company, so there is never a charge to you. We will work with you to understand your career goals, prepare you for interviews and negotiate the best possible package on your behalf.",
        },
        {
          question: "Will my current employer find out I am looking?",
          answer:
            "Never. Confidentiality is paramount. We will never share your CV or details with any company without your explicit permission. We understand the sensitivity of job searching, particularly in the City, and we take every precaution to protect your privacy.",
        },
        {
          question: "How can I submit my CV?",
          answer:
            "You can send your CV to enquiries@cityrecruitment.co.uk or use the contact form on this page. One of our specialist consultants will review your profile and be in touch to discuss suitable opportunities. We recommend including a brief note about the type of role and sector you are targeting.",
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
              Find answers to common questions about our recruitment services,
              processes, fees and how we can help you hire or find your next role.
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
              We&apos;re here to help. If you couldn&apos;t find the answer you
              were looking for, please don&apos;t hesitate to get in touch. Our
              team will be happy to assist you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/recruitment-city/contact" className="btn-accent">
                Contact Us
              </Link>
              <a
                href="tel:02079465540"
                className="btn-outline"
              >
                Call 020 7946 5540
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Hiring?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get in touch for a free, no-obligation consultation about your
            recruitment needs with one of our specialist consultants.
          </p>
          <Link href="/recruitment-city/contact" className="btn-accent">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
