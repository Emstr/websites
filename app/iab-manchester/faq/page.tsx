import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Financial Planning Questions Answered",
  description:
    "Frequently asked questions about independent financial advice, pensions, investments, and our free 45-minute consultation. The Independent Advice Bureau, Manchester.",
  openGraph: {
    title: "FAQ | The Independent Advice Bureau",
    description:
      "Common questions about financial advice, our free 45-minute consultation, pensions, investments and working with an independent financial adviser in Manchester.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Your Free Consultation",
      questions: [
        {
          question: "What happens in my free 45-minute consultation?",
          answer:
            "Your free 45-minute consultation is an informal, no-obligation meeting where we get to know you and your financial situation. We will listen to your goals and concerns, explain how independent financial advice works, and outline the options available to you. There is no sales pitch and no pressure to proceed. It is simply a chance for you to get honest, professional guidance and decide if we are the right fit for your needs.",
        },
        {
          question: "Is the initial consultation really free?",
          answer:
            "Yes, completely free. Your first 45-minute meeting costs you nothing and comes with no obligation whatsoever. We believe you should have the opportunity to discuss your situation and understand your options before committing to anything. If you decide to proceed with our advice after the initial meeting, we will clearly explain all fees before any work begins.",
        },
        {
          question: "How do I book my free consultation?",
          answer:
            "You can book your free 45-minute consultation by calling us on 0161 248 9746, emailing info@iabltd.co.uk, or completing the contact form on our website. We will arrange a time that suits you, either at our Manchester office, by video call, or over the telephone.",
        },
        {
          question: "Can I have my consultation by video or telephone?",
          answer:
            "Absolutely. While we are happy to welcome you to our Manchester office on Burnage Lane, we also offer video and telephone consultations for your convenience. The quality of advice is exactly the same regardless of how we meet.",
        },
      ],
    },
    {
      category: "About Our Services",
      questions: [
        {
          question: "What does it mean to be an independent financial adviser?",
          answer:
            "Being independent means we are not tied to any product provider or financial institution. Unlike bank advisers or tied agents, we can search the whole of the market to find the best solutions for you. Our recommendations are based solely on your needs and best interests, not on commission targets or product quotas.",
        },
        {
          question: "Are you regulated?",
          answer:
            "Yes, The Independent Advice Bureau Limited is authorised and regulated by the Financial Conduct Authority (FCA). This means we adhere to strict professional standards, and you are protected by the Financial Services Compensation Scheme (FSCS) and have access to the Financial Ombudsman Service if needed.",
        },
        {
          question: "What services do you offer?",
          answer:
            "We provide independent advice on financial planning, pensions (including workplace pensions, SIPPs and drawdown), investments (including ISAs and investment bonds), protection (life assurance, critical illness, income protection) and retirement planning. As independent advisers, we can help with most aspects of your financial life.",
        },
      ],
    },
    {
      category: "Pensions & Retirement",
      questions: [
        {
          question: "Should I consolidate my old pensions?",
          answer:
            "It depends on your individual circumstances. Consolidating multiple pensions can make management easier and potentially reduce charges, but it is not always the right choice. Some older pensions have valuable benefits that would be lost on transfer. We will analyse all your pensions and recommend the best approach for you during your free 45-minute consultation.",
        },
        {
          question: "What is pension drawdown?",
          answer:
            "Pension drawdown allows you to take flexible income from your pension whilst keeping the rest invested. This gives you more control than buying an annuity, but requires careful management. We can advise on the most suitable income strategy for your retirement.",
        },
        {
          question: "When should I start planning for retirement?",
          answer:
            "The earlier the better. Thanks to compound growth, starting pension contributions in your 20s or 30s can make a significant difference to your retirement income. However, it is never too late to start, and we can help you maximise your savings at any age. Book a free 45-minute consultation to discuss your retirement goals.",
        },
      ],
    },
    {
      category: "Investments",
      questions: [
        {
          question: "What is the minimum investment amount you work with?",
          answer:
            "We work with clients at various stages of their financial journey. Whether you have a lump sum to invest or want to start regular contributions, we are happy to discuss your situation. The best way to find out is to book your free 45-minute consultation.",
        },
        {
          question: "How do you determine my risk profile?",
          answer:
            "We use a comprehensive risk assessment process that considers your investment objectives, time horizon, financial situation, and attitude to risk. This involves detailed discussions and questionnaires to ensure we truly understand your comfort level with investment volatility.",
        },
        {
          question: "Can you help with ethical or sustainable investments?",
          answer:
            "Yes. We offer a range of ethical, sustainable, and ESG (Environmental, Social, and Governance) investment options. We can build a portfolio that aligns with your values without compromising on your financial objectives.",
        },
      ],
    },
    {
      category: "Fees & Charges",
      questions: [
        {
          question: "How do you charge for your services?",
          answer:
            "We offer both fee-based and commission-based options depending on the service. Our fees are always explained clearly upfront before any work begins. Your initial 45-minute consultation is completely free, and we will provide a detailed fee agreement before proceeding with any recommendations.",
        },
        {
          question: "Are there any hidden charges?",
          answer:
            "Absolutely not. Transparency is one of our core values. All fees and charges, including any product costs, will be clearly explained in writing before you commit to anything. You will always know exactly what you are paying for.",
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
              Find answers to common questions about our free 45-minute consultation,
              independent financial advice, and how we can help you.
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
              The best way to get answers is to book your free 45-minute consultation.
              We will take the time to understand your situation and answer all your
              questions in person.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/iab-manchester/contact" className="btn-accent">
                Book Your Free Consultation
              </Link>
              <a
                href="tel:01612489746"
                className="btn-outline"
              >
                Call 0161 248 9746
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Free 45-Minute Consultation?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book your complimentary meeting to discuss your financial goals with
            our independent advisers at our South Manchester office.
          </p>
          <Link href="/iab-manchester/contact" className="btn-accent">
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> The Independent Advice Bureau
              Limited is authorised and regulated by the Financial Conduct Authority.
              The information on this page is for general guidance only and does not
              constitute financial advice. Individual circumstances may vary.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
