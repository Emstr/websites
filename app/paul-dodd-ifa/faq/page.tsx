import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Pension, Annuity & Wealth Management Questions Answered",
  description:
    "Frequently asked questions about pensions, annuities, wealth management and our financial planning services. Get answers from Paul Dodd Asset Management.",
  openGraph: {
    title: "FAQ | Paul Dodd Asset Management",
    description:
      "Common questions about pensions, annuities, investments and working with an independent financial adviser in Leeds.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Pensions",
      questions: [
        {
          question: "Should I consolidate my old pensions?",
          answer:
            "It depends on your individual circumstances. Consolidating multiple pensions can make management easier and potentially reduce charges, but it's not always the right choice. Some older pensions have valuable benefits such as guaranteed annuity rates or protected tax-free cash that would be lost on transfer. We'll analyse all your pensions and recommend the best approach for you.",
        },
        {
          question: "What is pension drawdown?",
          answer:
            "Pension drawdown allows you to take flexible income from your pension whilst keeping the rest invested. This gives you more control than buying an annuity, but requires careful management to ensure your money lasts throughout retirement. We can advise on the most suitable income strategy for your circumstances.",
        },
        {
          question: "When should I start pension planning?",
          answer:
            "The earlier the better! Thanks to compound growth, starting pension contributions in your 20s or 30s can make a significant difference to your retirement pot. However, it's never too late to start, and we can help you maximise your pension savings at any age. Our specialist pension advisers will create a tailored plan regardless of where you are in your career.",
        },
        {
          question: "Can you help with my final salary pension?",
          answer:
            "Yes, we provide specialist advice on defined benefit (final salary) pension schemes. Whether you're considering a transfer or want to understand your options at retirement, our expert advisers will guide you through the complexities. Given the significant sums involved, specialist advice is essential.",
        },
      ],
    },
    {
      category: "Annuities",
      questions: [
        {
          question: "What is an annuity and do I need one?",
          answer:
            "An annuity is an insurance product that provides a guaranteed income for life in exchange for a lump sum from your pension. Whether an annuity is right for you depends on factors including your health, attitude to risk, and income needs. As annuity specialists, we can help you decide whether an annuity, drawdown, or a combination is the best approach for your retirement.",
        },
        {
          question: "What is an enhanced annuity?",
          answer:
            "An enhanced annuity pays a higher income than a standard annuity because you have a health condition or lifestyle factor that may reduce your life expectancy. Conditions such as diabetes, heart disease, or even being a smoker can qualify you for significantly higher rates. We ensure all eligible clients are considered for enhanced terms.",
        },
        {
          question: "Should I choose an annuity or drawdown?",
          answer:
            "This is one of the most important decisions in retirement planning. An annuity provides certainty and a guaranteed income, whilst drawdown offers flexibility but carries investment risk. Many of our clients benefit from a phased approach, combining both strategies. We'll model different scenarios to help you make the right choice.",
        },
        {
          question: "Can I get a better annuity rate by shopping around?",
          answer:
            "Absolutely. Annuity rates vary significantly between providers, and you are not obliged to take the rate offered by your existing pension company. As whole-of-market advisers, we compare rates from all annuity providers to find the best deal for your circumstances, which can result in substantially higher income.",
        },
      ],
    },
    {
      category: "Wealth Management & Investments",
      questions: [
        {
          question: "What is the minimum investment amount you work with?",
          answer:
            "We generally work with clients who have investable assets of £50,000 or more, or those making regular contributions. However, we're happy to discuss your situation as every client is different. For pension advice and annuity services, different minimums may apply.",
        },
        {
          question: "How do you determine my risk profile?",
          answer:
            "We use a comprehensive risk assessment process that considers your investment objectives, time horizon, financial situation, and attitude to risk. This involves detailed discussions and questionnaires to ensure we truly understand your comfort level with investment volatility.",
        },
        {
          question: "How often will my investments be reviewed?",
          answer:
            "We typically conduct formal annual reviews, though we monitor portfolios continuously. You're welcome to contact us at any time if your circumstances change or you have questions. For wealth management clients, we may meet more frequently depending on your needs.",
        },
      ],
    },
    {
      category: "Taxation Planning",
      questions: [
        {
          question: "How can you help reduce my tax bill?",
          answer:
            "We use various legitimate strategies to minimise your tax liability, including maximising ISA allowances, pension contributions, and using tax-efficient investments. We also consider Capital Gains Tax and Inheritance Tax planning as part of our holistic approach to your finances.",
        },
        {
          question: "Do you provide inheritance tax advice?",
          answer:
            "Yes, Inheritance Tax (IHT) planning is a key part of our wealth management service. We can help you structure your assets and make use of exemptions and reliefs to potentially reduce the IHT liability on your estate, ensuring more of your wealth passes to your loved ones.",
        },
        {
          question: "Can pension contributions reduce my tax?",
          answer:
            "Yes, pension contributions benefit from tax relief at your marginal rate. Higher and additional rate taxpayers can reclaim substantial amounts through pension contributions. We can help you optimise your pension contributions to maximise tax relief whilst staying within annual and lifetime limits.",
        },
      ],
    },
    {
      category: "Working With Us",
      questions: [
        {
          question: "Do you offer a free initial consultation?",
          answer:
            "Yes, we offer a complimentary initial consultation with no obligation. This meeting allows us to understand your situation and goals, whilst you can get to know us and decide if we're the right fit for your needs. Meetings can be held at our Leeds office, in London, or via video call.",
        },
        {
          question: "How do you charge for your services?",
          answer:
            "We offer both fee-based and commission-based options depending on the service. Our fees are always explained clearly upfront before any work begins. Initial consultations are free, and we'll provide a detailed fee agreement before proceeding with any recommendations.",
        },
        {
          question: "I'm based in London - can you still help me?",
          answer:
            "Absolutely. We have a well-established client base in London's Kensington area and make regular visits to meet clients in person. We also offer video consultations for convenience. Our London clients receive the same expert pension and wealth management advice as those in Leeds.",
        },
        {
          question: "Are you regulated?",
          answer:
            "Yes, Paul Dodd Asset Management Limited is authorised and regulated by the Financial Conduct Authority (FCA). This means we adhere to strict professional standards, and you're protected by the Financial Services Compensation Scheme (FSCS) and have access to the Financial Ombudsman Service if needed.",
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
              Find answers to common questions about pensions, annuities, wealth
              management, and how we can help you achieve your financial goals.
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
              <Link href="/paul-dodd-ifa/contact" className="btn-accent">
                Contact Us
              </Link>
              <a
                href="tel:01132300449"
                className="btn-outline"
              >
                Call 0113 2300449
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
            Book a complimentary meeting to discuss your pension and financial
            goals with one of our expert advisers in Leeds or London.
          </p>
          <Link href="/paul-dodd-ifa/contact" className="btn-accent">
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> Paul Dodd Asset Management
              Limited is authorised and regulated by the Financial Conduct Authority. The
              information on this page is for general guidance only and does not
              constitute financial advice. Individual circumstances may vary.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
