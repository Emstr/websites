import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Financial Planning Questions Answered",
  description:
    "Frequently asked questions about independent financial advice, pensions, investments, and our services. Get answers from Financial Independent Solutions, Bothwell, Glasgow.",
  openGraph: {
    title: "FAQ | Financial Independent Solutions",
    description:
      "Common questions about financial advice, pensions, investments, and working with an independent financial adviser in Bothwell, Glasgow.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "About Our Services",
      questions: [
        {
          question: "What does an independent financial adviser do?",
          answer:
            "An independent financial adviser (IFA) helps you make informed decisions about your money. Mark analyses your current financial situation, understands your goals, and creates personalised strategies for pensions, investments, protection, and more. Crucially, as an IFA, Mark is not tied to any provider and searches the whole market to find the best solutions for you.",
        },
        {
          question: "Why should I choose an independent adviser over a bank or high street provider?",
          answer:
            "Banks and high street providers can only recommend their own products. As an independent adviser, Mark has access to the entire market, meaning he can recommend the best solutions from any provider. His advice is based solely on what is best for you, not on sales targets or product quotas.",
        },
        {
          question: "Are you regulated?",
          answer:
            "Yes, Financial Independent Solutions Ltd (SC218279) is authorised and regulated by the Financial Conduct Authority (FCA). This means we adhere to strict professional standards, and you are protected by the Financial Services Compensation Scheme (FSCS) and have access to the Financial Ombudsman Service if needed.",
        },
        {
          question: "Do you offer a free initial consultation?",
          answer:
            "Yes, Mark offers a complimentary initial consultation with no obligation. This meeting allows him to understand your situation and goals, while you can get to know him and decide if he is the right fit for your needs. There is no pressure to proceed with any paid services.",
        },
      ],
    },
    {
      category: "Pensions & Retirement",
      questions: [
        {
          question: "Should I consolidate my old pensions?",
          answer:
            "It depends on your individual circumstances. Consolidating multiple pensions can make management easier and potentially reduce charges, but it is not always the right choice. Some older pensions have valuable benefits that would be lost on transfer. Mark will analyse all your pensions and recommend the best approach for you.",
        },
        {
          question: "What is pension drawdown?",
          answer:
            "Pension drawdown allows you to take flexible income from your pension whilst keeping the rest invested. This gives you more control than buying an annuity, but requires careful management. Mark can advise on the most suitable income strategy for your retirement.",
        },
        {
          question: "When should I start planning for retirement?",
          answer:
            "The earlier the better. Thanks to compound growth, starting pension contributions in your 20s or 30s can make a significant difference to your retirement pot. However, it is never too late to start, and Mark can help you maximise your pension savings at any age.",
        },
        {
          question: "Can you help with my workplace pension?",
          answer:
            "Yes, Mark advises on all types of pension schemes including workplace pensions, SIPPs, and defined benefit (final salary) schemes. For business owners, he also provides auto-enrolment solutions and corporate pension advice.",
        },
      ],
    },
    {
      category: "Investments",
      questions: [
        {
          question: "How do you determine my risk profile?",
          answer:
            "Mark uses a comprehensive risk assessment process that considers your investment objectives, time horizon, financial situation, and attitude to risk. This involves detailed discussions and questionnaires to ensure he truly understands your comfort level with investment volatility.",
        },
        {
          question: "What is whole-of-market advice?",
          answer:
            "Whole-of-market means Mark is not restricted to recommending products from a limited panel of providers. He can research and recommend investments from any provider in the market, ensuring you get the best possible solution for your needs.",
        },
        {
          question: "How often will my investments be reviewed?",
          answer:
            "Mark typically conducts formal annual reviews, though he monitors portfolios continuously. You are welcome to contact him at any time if your circumstances change or you have questions.",
        },
      ],
    },
    {
      category: "Business Financial Advice",
      questions: [
        {
          question: "Can you help with auto-enrolment for my business?",
          answer:
            "Yes, Mark helps businesses of all sizes meet their auto-enrolment obligations. From initial setup to ongoing management, he makes workplace pensions simple and compliant, taking the administrative burden off your shoulders.",
        },
        {
          question: "What is key person insurance?",
          answer:
            "Key person insurance protects your business financially if a crucial team member becomes seriously ill or dies. It provides a lump sum to help cover lost revenue, recruitment costs, and business continuity. Mark can assess your business needs and arrange suitable cover.",
        },
        {
          question: "Do you advise on business succession planning?",
          answer:
            "Yes, Mark works with business owners to plan for the eventual transfer or sale of their business. This includes shareholder protection, buy-sell agreements, and ensuring your personal financial plan aligns with your business exit strategy.",
        },
      ],
    },
    {
      category: "Fees & Charges",
      questions: [
        {
          question: "How do you charge for your services?",
          answer:
            "Mark offers both fee-based and commission-based options depending on the service. Fees are always explained clearly upfront before any work begins. The initial consultation is free, and he will provide a detailed fee agreement before proceeding with any recommendations.",
        },
        {
          question: "Do I pay for the initial meeting?",
          answer:
            "No, your initial consultation is completely free and without obligation. Mark uses this meeting to understand your needs and explain how he can help. You will only incur fees if you decide to proceed with his advice and services.",
        },
        {
          question: "Are there any hidden charges?",
          answer:
            "Absolutely not. Transparency is one of Mark's core values. All fees and charges, including any product costs, will be clearly explained in writing before you commit to anything. You will always know exactly what you are paying for.",
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
              Find answers to common questions about financial planning, our
              services, and how Mark can help you achieve your financial goals.
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
              Mark is here to help. If you could not find the answer you were
              looking for, please do not hesitate to get in touch. He will be
              happy to assist you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/fis-glasgow/contact" className="btn-accent">
                Contact Us
              </Link>
              <a
                href="tel:01698854422"
                className="btn-outline"
              >
                Call 01698 854422
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
            Book a complimentary meeting with Mark at Castle Chambers, Bothwell
            to discuss your financial goals.
          </p>
          <Link href="/fis-glasgow/contact" className="btn-accent">
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> Financial Independent Solutions
              Ltd (SC218279) is authorised and regulated by the Financial Conduct
              Authority. The information on this page is for general guidance only
              and does not constitute financial advice. Individual circumstances
              may vary.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
