import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Financial Planning Questions Answered",
  description:
    "Frequently asked questions about independent financial advice, whole-of-market planning, inheritance tax, retirement, and our services in Derby. Friar Gate Independent Financial Services.",
  openGraph: {
    title: "FAQ | Friar Gate Independent Financial Services",
    description:
      "Common questions about independent financial advice, whole-of-market access, IHT planning, retirement, and working with an IFA in Derby.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Whole-of-Market Independent Advice",
      questions: [
        {
          question: "What does 'whole of market' mean?",
          answer:
            "Whole-of-market means we are not restricted to recommending products from a limited panel of providers. Unlike tied advisers or restricted firms, we search the entire market to find the best solutions for your needs. This independence is at the heart of everything we do at Friar Gate Independent Financial Services.",
        },
        {
          question: "Why should I use an independent financial adviser rather than my bank?",
          answer:
            "Banks and building societies can only recommend their own products, which may not be the best available. As independent financial advisers, we have access to every product on the market, so we can find the solution that genuinely offers the best value and suitability for your circumstances. Our advice is based solely on what is best for you.",
        },
        {
          question: "Are you regulated by the FCA?",
          answer:
            "Yes, Friar Gate Independent Financial Services Ltd is authorised and regulated by the Financial Conduct Authority (FCA). This means we adhere to strict professional standards, and you are protected by the Financial Services Compensation Scheme (FSCS) and have access to the Financial Ombudsman Service if needed.",
        },
        {
          question: "Do you offer a free initial consultation?",
          answer:
            "Yes, we offer a complimentary initial consultation with no obligation at our Pride Park office. This meeting allows us to understand your situation and goals, whilst you can get to know us and decide if we are the right fit for your needs. There is no pressure to proceed with any paid services.",
        },
      ],
    },
    {
      category: "Inheritance Tax Planning",
      questions: [
        {
          question: "Do I need to worry about inheritance tax?",
          answer:
            "If the total value of your estate (including property, savings, investments, and life assurance) exceeds the nil-rate band (currently £325,000, or up to £500,000 with the residence nil-rate band), your estate may face an IHT liability of 40% on the excess. With property values rising, more families than ever are affected. Early planning can make a significant difference.",
        },
        {
          question: "What strategies can reduce my inheritance tax bill?",
          answer:
            "There are several legitimate strategies including utilising annual gift allowances, potentially exempt transfers, trusts, Business Property Relief, and life assurance policies written in trust. We also consider the use of nil-rate bands and the transferable nil-rate band between spouses. Every situation is different, which is why we provide tailored IHT advice.",
        },
        {
          question: "When should I start inheritance tax planning?",
          answer:
            "The sooner the better. Many IHT planning strategies, such as potentially exempt transfers, require you to survive for seven years for the gift to be fully exempt. Starting early gives you more options and more time for planning to take effect. However, it is never too late to take steps to reduce your estate's IHT liability.",
        },
        {
          question: "Can you help with trusts as part of IHT planning?",
          answer:
            "Yes, trusts are a key tool in inheritance tax planning. We can advise on the most suitable type of trust for your circumstances, help you establish the trust, and provide ongoing advice. We work alongside solicitors to ensure the legal documentation is correct and the trust is structured to achieve your objectives.",
        },
      ],
    },
    {
      category: "Retirement Planning",
      questions: [
        {
          question: "Should I consolidate my old pensions?",
          answer:
            "It depends on your individual circumstances. Consolidating multiple pensions can make management easier and potentially reduce charges, but it is not always the right choice. Some older pensions have valuable benefits such as guaranteed annuity rates that would be lost on transfer. We analyse all your pensions and recommend the best approach for you.",
        },
        {
          question: "What is pension drawdown?",
          answer:
            "Pension drawdown allows you to take flexible income from your pension whilst keeping the rest invested. This gives you more control than buying an annuity, but requires careful management to ensure your money lasts. We can advise on the most suitable income strategy for your retirement.",
        },
        {
          question: "When should I start planning for retirement?",
          answer:
            "The earlier the better. Thanks to compound growth, starting pension contributions in your 20s or 30s can make a huge difference to your retirement pot. However, it is never too late to start, and we can help you maximise your pension savings at any age. Even those approaching retirement can benefit from advice on how to structure their income.",
        },
        {
          question: "Can you help with final salary pension transfers?",
          answer:
            "Yes, we provide specialist advice on defined benefit (final salary) pension transfers. This is a complex area with significant implications, and the FCA requires you to take regulated advice before transferring a final salary pension worth £30,000 or more. We provide a thorough analysis of whether transferring is in your best interests.",
        },
      ],
    },
    {
      category: "Investments & Cost Reduction",
      questions: [
        {
          question: "How do you select investments for my portfolio?",
          answer:
            "We use our whole-of-market access to research funds and platforms from across the entire market. We consider your risk profile, investment objectives, time horizon, and tax situation. We do not favour any particular provider — every recommendation is based on merit and suitability for your circumstances.",
        },
        {
          question: "What is your cost reduction service?",
          answer:
            "Many people are paying more than they need to in hidden charges on their investments and pensions. Our cost reduction service conducts a thorough audit of your existing arrangements to identify where charges can be reduced — by switching to equivalent lower-cost funds or platforms — without compromising on the quality of your investments.",
        },
        {
          question: "Can you help with ethical or sustainable investments?",
          answer:
            "Absolutely. We offer a range of ethical, sustainable, and ESG (Environmental, Social, and Governance) investment options. We can build a portfolio that aligns with your values without compromising on your financial objectives.",
        },
        {
          question: "How often will my investments be reviewed?",
          answer:
            "We typically conduct formal annual reviews, though we monitor portfolios continuously. You are welcome to contact us at any time if your circumstances change or you have questions. We believe ongoing reviews are essential to keeping your financial plan on track.",
        },
      ],
    },
    {
      category: "Fees & Working With Us",
      questions: [
        {
          question: "How do you charge for your services?",
          answer:
            "We offer both fee-based and commission-based options depending on the service. Our fees are always explained clearly upfront before any work begins. Initial consultations are free, and we provide a detailed fee agreement before proceeding with any recommendations. There are never any hidden charges.",
        },
        {
          question: "Do I pay for the initial meeting?",
          answer:
            "No, your initial consultation is completely free and without obligation. We use this meeting to understand your needs and explain how we can help. You will only incur fees if you decide to proceed with our advice and services.",
        },
        {
          question: "Where do meetings take place?",
          answer:
            "We typically meet clients at our Pride Park office in Derby, which offers a professional, comfortable environment with ample free parking. We can also arrange video calls or phone consultations if you prefer.",
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
              Find answers to common questions about independent financial advice,
              whole-of-market planning, inheritance tax, retirement, and our
              services in Derby.
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
              We are here to help. If you could not find the answer you were
              looking for, please do not hesitate to get in touch. Our team will
              be happy to assist you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/friar-gate-ifa/contact" className="btn-accent">
                Contact Us
              </Link>
              <a
                href="tel:01332438361"
                className="btn-outline"
              >
                Call 01332 438361
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
            Book a complimentary meeting to discuss your financial goals with one
            of our independent advisers at our Pride Park office in Derby.
          </p>
          <Link href="/friar-gate-ifa/contact" className="btn-accent">
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> Friar Gate Independent Financial
              Services Ltd is authorised and regulated by the Financial Conduct
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
