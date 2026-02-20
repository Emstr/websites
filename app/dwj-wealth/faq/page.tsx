import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Financial Planning Questions Answered",
  description:
    "Frequently asked questions about wealth management, equity release, corporate financial advice, and our services. Get answers from DWJ Wealth Management.",
  openGraph: {
    title: "FAQ | DWJ Wealth Management",
    description:
      "Common questions about financial advice, wealth management, equity release, and working with DWJ Wealth Management in Swansea.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "About Our Services",
      questions: [
        {
          question: "What does DWJ Wealth Management do?",
          answer:
            "DWJ Wealth Management provides tailored financial advice to both private and corporate clients in Swansea and across South Wales. Our four core services are wealth management, private client advice, corporate client advice, and equity release. We help you make informed decisions about your finances and create personalised strategies to achieve your goals.",
        },
        {
          question: "Do you serve both individuals and businesses?",
          answer:
            "Yes, serving both private and corporate clients is one of our key strengths. For individuals and families, we offer personalised wealth management, pension planning, investment advice, and equity release. For businesses, we provide workplace pension solutions, employee benefit schemes, executive planning, and corporate investment strategies.",
        },
        {
          question: "Are you regulated?",
          answer:
            "Yes, DWJ Wealth Management Ltd (Company No. 09104954) is authorised and regulated by the Financial Conduct Authority (FCA). This means we adhere to strict professional standards, and you're protected by the Financial Services Compensation Scheme (FSCS) and have access to the Financial Ombudsman Service if needed.",
        },
        {
          question: "Do you offer a free initial consultation?",
          answer:
            "Yes, we offer a complimentary initial consultation with no obligation. This meeting allows us to understand your situation and goals, while you can get to know us and decide if we're the right fit for your needs. There's no pressure to proceed with any paid services.",
        },
      ],
    },
    {
      category: "Wealth Management",
      questions: [
        {
          question: "What is wealth management?",
          answer:
            "Wealth management is a holistic approach to your finances that brings together investment management, tax planning, estate planning, and more into one cohesive strategy. Rather than addressing each area in isolation, we look at your complete financial picture to create a plan that works towards your long-term goals.",
        },
        {
          question: "How do you determine my risk profile?",
          answer:
            "We use a comprehensive risk assessment process that considers your investment objectives, time horizon, financial situation, and attitude to risk. This involves detailed discussions and questionnaires to ensure we truly understand your comfort level with investment volatility.",
        },
        {
          question: "How often will my finances be reviewed?",
          answer:
            "We typically conduct formal annual reviews, though we monitor portfolios continuously. You're welcome to contact us at any time if your circumstances change or you have questions. For wealth management clients, we may meet more frequently depending on your needs.",
        },
      ],
    },
    {
      category: "Equity Release",
      questions: [
        {
          question: "What is equity release?",
          answer:
            "Equity release is a way for homeowners aged 55 and over to access the value tied up in their property without having to move. There are two main types: lifetime mortgages (the most popular) and home reversion plans. The money can be taken as a lump sum, in stages, or as a regular income.",
        },
        {
          question: "Will equity release affect my inheritance?",
          answer:
            "Yes, equity release will reduce the value of your estate and therefore the inheritance you leave behind. However, many plans allow you to ring-fence a percentage of your property value for your beneficiaries. We always discuss the impact on inheritance thoroughly and can involve family members in the conversation if you wish.",
        },
        {
          question: "Can I still live in my home with equity release?",
          answer:
            "Yes, with both lifetime mortgages and home reversion plans, you retain the right to live in your home for the rest of your life. With a lifetime mortgage, you remain the owner of your property. We will explain all the terms and protections available to you.",
        },
        {
          question: "Will equity release affect my benefits?",
          answer:
            "Equity release could affect your entitlement to means-tested benefits, as the money you release may be counted as capital or income. We always assess the potential impact on your benefits as part of our advice process and ensure you understand the full picture before proceeding.",
        },
        {
          question: "Is there a no negative equity guarantee?",
          answer:
            "Most modern lifetime mortgages come with a no negative equity guarantee, which means you will never owe more than the value of your home. We only recommend plans that include this important protection, giving you and your family complete peace of mind.",
        },
      ],
    },
    {
      category: "Corporate Financial Advice",
      questions: [
        {
          question: "What corporate financial services do you offer?",
          answer:
            "We offer a range of financial services for businesses, including workplace pension setup and auto-enrolment compliance, employee benefit schemes, executive pension planning, corporate investment strategies, key person insurance, shareholder protection, and business succession planning.",
        },
        {
          question: "Can you help with auto-enrolment?",
          answer:
            "Yes, we help businesses of all sizes meet their auto-enrolment obligations. From initial setup to ongoing management, we make workplace pensions simple and compliant. We handle provider selection, employee communication, compliance monitoring, and re-enrolment support.",
        },
        {
          question: "Do you advise on employee benefit packages?",
          answer:
            "Yes, we can help you design and implement employee benefit packages that help attract and retain talent. This can include group life assurance, group income protection, private medical insurance, and other workplace benefits tailored to your business needs.",
        },
      ],
    },
    {
      category: "Fees & Charges",
      questions: [
        {
          question: "How do you charge for your services?",
          answer:
            "We offer both fee-based and commission-based options depending on the service. Our fees are always explained clearly upfront before any work begins. Initial consultations are free, and we'll provide a detailed fee agreement before proceeding with any recommendations.",
        },
        {
          question: "Do I pay for the initial meeting?",
          answer:
            "No, your initial consultation is completely free and without obligation. We use this meeting to understand your needs and explain how we can help. You'll only incur fees if you decide to proceed with our advice and services.",
        },
        {
          question: "Are there any hidden charges?",
          answer:
            "Absolutely not. Transparency is one of our core values. All fees and charges, including any product costs, will be clearly explained in writing before you commit to anything. You'll always know exactly what you're paying for.",
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
              Find answers to common questions about our wealth management services,
              equity release, corporate advice, and how we can help you achieve
              your financial goals.
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
              We&apos;re here to help. If you couldn&apos;t find the answer you were looking
              for, please don&apos;t hesitate to get in touch. Our team will be happy to
              assist you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/dwj-wealth/contact" className="btn-accent">
                Contact Us
              </Link>
              <a
                href="tel:01639825066"
                className="btn-outline"
              >
                Call 01639 825066
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Free Consultation?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a complimentary meeting to discuss your financial goals with one of
            our expert advisers at our Gorseinon office.
          </p>
          <Link href="/dwj-wealth/contact" className="btn-accent">
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> DWJ Wealth Management Ltd
              (Company No. 09104954) is authorised and regulated by the Financial Conduct
              Authority. The information on this page is for general guidance only and
              does not constitute financial advice. Individual circumstances may vary.
              Equity release will reduce the value of your estate and may affect your
              entitlement to means-tested benefits.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
