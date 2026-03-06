import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Financial Planning Questions Answered",
  description:
    "Frequently asked questions about financial planning, investments, pensions, mortgages, and our services. Get answers from RSJ Financial Planning in Liverpool.",
  openGraph: {
    title: "FAQ | RSJ Financial Planning",
    description:
      "Common questions about financial advice, investments, pensions, mortgages, and working with an independent financial adviser in Liverpool.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "About Our Services",
      questions: [
        {
          question: "What does a financial adviser do?",
          answer:
            "A financial adviser helps you make informed decisions about your money. We analyse your current financial situation, understand your goals, and create personalised strategies for investments, pensions, mortgages, tax planning, and protection. We also provide ongoing support and adjust your plan as your circumstances change.",
        },
        {
          question: "Why should I use an independent financial adviser?",
          answer:
            "Independent financial advisers (IFAs) like RSJ Financial Planning are not tied to any product provider. This means we can recommend the best solutions from the entire market, rather than being limited to a specific company's products. Our advice is based solely on what's best for you.",
        },
        {
          question: "Are you regulated?",
          answer:
            "Yes, RSJ Financial Planning is authorised and regulated by the Financial Conduct Authority (FCA). This means we adhere to strict professional standards, and you're protected by the Financial Services Compensation Scheme (FSCS) and have access to the Financial Ombudsman Service if needed.",
        },
        {
          question: "Do you offer a free initial consultation?",
          answer:
            "Yes, we offer a complimentary initial consultation with no obligation. This meeting allows us to understand your situation and goals, while you can get to know us and decide if we're the right fit for your needs. There's no pressure to proceed with any paid services.",
        },
        {
          question: "How long have you been established?",
          answer:
            "RSJ Financial Planning was established in 1986, giving us nearly 40 years of experience in helping individuals, families, and businesses across Liverpool and Merseyside with their financial planning needs.",
        },
      ],
    },
    {
      category: "Investments & Pensions",
      questions: [
        {
          question: "What is the minimum investment amount you work with?",
          answer:
            "We generally work with clients who have investable assets of £50,000 or more, or those making regular contributions. However, we're happy to discuss your situation as every client is different. For mortgage and protection advice, different minimums may apply.",
        },
        {
          question: "How do you determine my risk profile?",
          answer:
            "We use a comprehensive risk assessment process that considers your investment objectives, time horizon, financial situation, and attitude to risk. This involves detailed discussions and questionnaires to ensure we truly understand your comfort level with investment volatility.",
        },
        {
          question: "Should I consolidate my old pensions?",
          answer:
            "It depends on your individual circumstances. Consolidating multiple pensions can make management easier and potentially reduce charges, but it's not always the right choice. Some older pensions have valuable benefits that would be lost on transfer. We'll analyse all your pensions and recommend the best approach for you.",
        },
        {
          question: "What is pension drawdown?",
          answer:
            "Pension drawdown allows you to take flexible income from your pension while keeping the rest invested. This gives you more control than buying an annuity, but requires careful management. We can advise on the most suitable income strategy for your retirement.",
        },
      ],
    },
    {
      category: "Mortgages",
      questions: [
        {
          question: "Can you help first-time buyers?",
          answer:
            "Absolutely. We specialise in helping first-time buyers navigate the mortgage process. We'll assess your affordability, search the whole market for the best rates, guide you through the application, and arrange appropriate protection cover alongside your mortgage.",
        },
        {
          question: "Do you offer buy-to-let mortgage advice?",
          answer:
            "Yes, we provide expert buy-to-let mortgage advice for both new and experienced landlords. We can advise on individual properties and portfolio lending, helping you find the most competitive rates and suitable products.",
        },
        {
          question: "When should I remortgage?",
          answer:
            "We recommend reviewing your mortgage at least 3-6 months before your current deal ends to avoid moving onto your lender's standard variable rate. We can also advise if it's worth remortgaging early, taking into account any early repayment charges.",
        },
      ],
    },
    {
      category: "Tax Planning & Protection",
      questions: [
        {
          question: "How can you help reduce my tax bill?",
          answer:
            "We use various legitimate strategies to minimise your tax liability, including maximising ISA allowances, pension contributions, and using tax-efficient investments. We also consider Capital Gains Tax and Inheritance Tax planning as part of our holistic approach.",
        },
        {
          question: "Do I need life insurance?",
          answer:
            "If anyone depends on your income, life insurance is essential. It ensures your family can maintain their lifestyle, pay the mortgage, and meet financial goals if you pass away. We'll assess your needs and find appropriate cover at competitive rates.",
        },
        {
          question: "What is income protection?",
          answer:
            "Income protection insurance pays you a regular income if you're unable to work due to illness or injury. It's often overlooked but is one of the most important types of cover, as it protects your ability to earn. We can find the right policy for your circumstances.",
        },
      ],
    },
    {
      category: "Fees & Working With Us",
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
              Find answers to common questions about financial planning, our services,
              and how we can help you achieve your financial goals.
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
              <Link href="/rsj-financial/contact" className="btn-accent">
                Contact Us
              </Link>
              <a
                href="tel:01513632027"
                className="btn-outline"
              >
                Call 0151 363 2027
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
            our expert advisers at our Liverpool offices.
          </p>
          <Link href="/rsj-financial/contact" className="btn-accent">
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> RSJ Financial Planning is
              authorised and regulated by the Financial Conduct Authority. The
              information on this page is for general guidance only and does not
              constitute financial advice. Individual circumstances may vary.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
