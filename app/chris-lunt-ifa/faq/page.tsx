import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Financial Planning Questions Answered",
  description:
    "Frequently asked questions about financial planning, investments, pensions, and our services. Get answers from Chris Lunt Independent Financial Adviser.",
  openGraph: {
    title: "FAQ | Chris Lunt Independent Financial Adviser",
    description:
      "Common questions about financial advice, investments, pensions, and working with a personal independent financial adviser.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "About Chris Lunt IFA",
      questions: [
        {
          question: "What does an independent financial adviser do?",
          answer:
            "An independent financial adviser (IFA) helps you make informed decisions about your money. Chris analyses your current financial situation, understands your goals, and creates personalised strategies for investments, pensions, protection, and retirement planning. Unlike restricted advisers, Chris has access to the whole of the market, meaning he can recommend the best solutions from any provider.",
        },
        {
          question: "Why should I choose a small, personal IFA like Chris Lunt?",
          answer:
            "With Chris, you get a single, dedicated adviser who knows your entire financial picture. Unlike large firms where you may be passed between departments or dealt with by junior staff, Chris handles everything personally. He knows your name, your circumstances, and your goals. This personal relationship means better, more tailored advice and someone who is genuinely invested in your financial wellbeing.",
        },
        {
          question: "Are you regulated?",
          answer:
            "Yes, Chris Lunt Independent Financial Adviser is authorised and regulated by the Financial Conduct Authority (FCA). This means Chris adheres to strict professional standards, and you are protected by the Financial Services Compensation Scheme (FSCS) and have access to the Financial Ombudsman Service if needed.",
        },
        {
          question: "Do you offer a free initial consultation?",
          answer:
            "Yes, Chris offers a complimentary initial consultation with no obligation. This meeting allows Chris to understand your situation and goals, while you can get to know him and decide if he is the right fit for your needs. There is no pressure to proceed with any paid services.",
        },
        {
          question: "How much do you have under advice?",
          answer:
            "Chris currently has over £65 million under advice. This demonstrates the trust his clients place in him and the breadth of experience he brings to every client relationship, while maintaining the personal touch of a dedicated individual adviser.",
        },
      ],
    },
    {
      category: "Investment & Wealth Management",
      questions: [
        {
          question: "What is the minimum investment amount you work with?",
          answer:
            "Chris generally works with clients who have investable assets of £50,000 or more, or those making regular contributions. However, he is happy to discuss your situation as every client is different. Contact Chris to have an initial conversation about your needs.",
        },
        {
          question: "How do you determine my risk profile?",
          answer:
            "Chris uses a comprehensive risk assessment process that considers your investment objectives, time horizon, financial situation, and attitude to risk. This involves detailed discussions and questionnaires to ensure he truly understands your comfort level with investment volatility.",
        },
        {
          question: "Can you help with ethical or sustainable investments?",
          answer:
            "Absolutely. Chris offers a range of ethical, sustainable, and ESG (Environmental, Social, and Governance) investment options. He can build a portfolio that aligns with your values without compromising on your financial objectives.",
        },
        {
          question: "How often will my investments be reviewed?",
          answer:
            "Chris typically conducts formal annual reviews, though he monitors portfolios continuously. You are welcome to contact Chris at any time if your circumstances change or you have questions. He prides himself on being accessible and responsive.",
        },
      ],
    },
    {
      category: "Pensions",
      questions: [
        {
          question: "Should I consolidate my old pensions?",
          answer:
            "It depends on your individual circumstances. Consolidating multiple pensions can make management easier and potentially reduce charges, but it is not always the right choice. Some older pensions have valuable benefits that would be lost on transfer. Chris will analyse all your pensions and recommend the best approach for you.",
        },
        {
          question: "What is pension drawdown?",
          answer:
            "Pension drawdown allows you to take flexible income from your pension while keeping the rest invested. This gives you more control than buying an annuity, but requires careful management. Chris can advise on the most suitable income strategy for your retirement.",
        },
        {
          question: "When should I start pension planning?",
          answer:
            "The earlier the better. Thanks to compound growth, starting pension contributions in your 20s or 30s can make a huge difference to your retirement pot. However, it is never too late to start, and Chris can help you maximise your pension savings at any age.",
        },
      ],
    },
    {
      category: "Working With Chris",
      questions: [
        {
          question: "Will I always deal directly with Chris?",
          answer:
            "Yes. That is the fundamental promise of Chris Lunt IFA. Every meeting, every review, every phone call — you speak directly with Chris. There are no junior associates, no call centres, and no being passed around departments. Your adviser knows you personally.",
        },
        {
          question: "Do you cover the whole of Liverpool and Merseyside?",
          answer:
            "Yes, Chris is based in Lydiate and serves clients across Liverpool, Merseyside, and beyond. He offers face-to-face meetings at his office, home visits, video calls, and phone consultations — whatever suits you best.",
        },
        {
          question: "What happens if I need advice urgently?",
          answer:
            "Chris prides himself on being accessible. If you need to speak to him urgently, you can call the office on 0151 923 6173 or email enquiries@chrisluntifa.co.uk. Because you deal directly with Chris, there is no waiting for your query to be routed to the right person.",
        },
      ],
    },
    {
      category: "Fees & Charges",
      questions: [
        {
          question: "How do you charge for your services?",
          answer:
            "Chris offers both fee-based and commission-based options depending on the service. His fees are always explained clearly upfront before any work begins. The initial consultation is free, and Chris will provide a detailed fee agreement before proceeding with any recommendations.",
        },
        {
          question: "Do I pay for the initial meeting?",
          answer:
            "No, your initial consultation with Chris is completely free and without obligation. Chris uses this meeting to understand your needs and explain how he can help. You will only incur fees if you decide to proceed with his advice and services.",
        },
        {
          question: "Are there any hidden charges?",
          answer:
            "Absolutely not. Transparency is one of Chris's core values. All fees and charges, including any product costs, will be clearly explained in writing before you commit to anything. You will always know exactly what you are paying for.",
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
              Find answers to common questions about financial planning, Chris&apos;s
              services, and how a personal independent financial adviser can help
              you achieve your goals.
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
              Chris is always happy to help. If you could not find the answer you
              were looking for, please get in touch directly. Chris will respond
              personally.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/chris-lunt-ifa/contact" className="btn-accent">
                Contact Chris
              </Link>
              <a
                href="tel:01519236173"
                className="btn-outline"
              >
                Call 0151 923 6173
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
            Book a complimentary meeting to discuss your financial goals with
            Chris. Personal, dedicated advice — no obligation.
          </p>
          <Link href="/chris-lunt-ifa/contact" className="btn-accent">
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> Chris Lunt Independent Financial
              Adviser is authorised and regulated by the Financial Conduct Authority.
              The information on this page is for general guidance only and does not
              constitute financial advice. Individual circumstances may vary.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
