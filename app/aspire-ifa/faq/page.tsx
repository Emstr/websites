import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Financial Planning Questions Answered",
  description:
    "Frequently asked questions about financial planning, wealth management, pensions, mortgages, insurance, equity release and will writing. Expert answers from Aspire.",
  openGraph: {
    title: "FAQ | Aspire Independent Financial Planners",
    description:
      "Common questions about our financial planning services including equity release, will writing, mortgages and more.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "About Our Services",
      questions: [
        {
          question: "What makes Aspire different from other financial advisers?",
          answer:
            "We offer six specialist services under one roof — wealth management, pensions, mortgages, insurance, equity release and will writing. This means you get a single, coordinated financial plan rather than piecemeal advice from separate firms. Everything works together, and you deal with one trusted team.",
        },
        {
          question: "Are you truly independent?",
          answer:
            "Yes. As independent financial planners, we are not tied to any product provider. We search the whole market to find the best solutions for your individual needs, whether that is a mortgage, pension, insurance policy or investment.",
        },
        {
          question: "Are you regulated?",
          answer:
            "Yes, Aspire Independent Financial Planners LLP is authorised and regulated by the Financial Conduct Authority (FCA). This means we adhere to strict professional standards, and you are protected by the Financial Services Compensation Scheme (FSCS) and have access to the Financial Ombudsman Service if needed.",
        },
        {
          question: "Do you offer a free initial consultation?",
          answer:
            "Yes, we offer a complimentary initial consultation with no obligation. This meeting allows us to understand your situation and goals across all areas of your financial life, while you can get to know us and decide if we are the right fit.",
        },
      ],
    },
    {
      category: "Wealth Management & Investments",
      questions: [
        {
          question: "What is the minimum investment amount you work with?",
          answer:
            "We generally work with clients who have investable assets of £50,000 or more, or those making regular contributions. However, we are happy to discuss your situation as every client is different — particularly if you are also using our mortgage, insurance or will writing services.",
        },
        {
          question: "How do you manage investment risk?",
          answer:
            "We use a thorough risk assessment process that considers your investment objectives, time horizon, financial situation and attitude to risk. Your portfolio is built to match your personal risk profile, and we review it regularly to ensure it stays on track.",
        },
        {
          question: "Do you offer ethical investment options?",
          answer:
            "Yes. We offer a range of ethical, sustainable and ESG (Environmental, Social, and Governance) investment options. We can build a portfolio that aligns with your values without compromising on your financial objectives.",
        },
      ],
    },
    {
      category: "Pensions",
      questions: [
        {
          question: "Should I consolidate my old pensions?",
          answer:
            "It depends on your circumstances. Consolidating multiple pensions can simplify management and potentially reduce charges, but some older pensions have valuable guaranteed benefits that would be lost on transfer. We will analyse all your pensions and recommend the best approach.",
        },
        {
          question: "What is pension drawdown?",
          answer:
            "Pension drawdown allows you to take flexible income from your pension while keeping the rest invested. This gives you more control than buying an annuity, but requires careful management. We can advise on the most suitable income strategy for your retirement.",
        },
        {
          question: "When should I start pension planning?",
          answer:
            "The earlier the better. Thanks to compound growth, starting pension contributions early can make a significant difference to your retirement pot. However, it is never too late to start, and we can help you maximise your pension savings at any age.",
        },
      ],
    },
    {
      category: "Mortgages",
      questions: [
        {
          question: "Can you help first-time buyers?",
          answer:
            "Absolutely. We guide first-time buyers through the entire mortgage process, from understanding how much you can borrow to finding the best deal and arranging your life insurance. We also advise on Help to Buy and shared ownership schemes where applicable.",
        },
        {
          question: "When should I remortgage?",
          answer:
            "You should review your mortgage when your current deal is coming to an end (typically every 2-5 years), or if your circumstances have changed significantly. We can assess whether remortgaging could save you money and handle the whole process for you.",
        },
        {
          question: "Do you advise on buy-to-let mortgages?",
          answer:
            "Yes, we provide specialist buy-to-let mortgage advice for both new and experienced landlords. We can help with purchase, remortgage, and portfolio lending, and advise on the tax implications of property investment.",
        },
      ],
    },
    {
      category: "Equity Release",
      questions: [
        {
          question: "What is equity release?",
          answer:
            "Equity release allows homeowners aged 55 and over to access some of the value tied up in their property without having to sell or move. The most common type is a lifetime mortgage, where you borrow against the value of your home. The loan plus interest is repaid when you pass away or move into long-term care.",
        },
        {
          question: "Will equity release affect my inheritance?",
          answer:
            "Yes, equity release will reduce the value of your estate and therefore the inheritance you leave. We will clearly explain the impact and can help you ring-fence a portion of your property value for your beneficiaries if you wish. We always encourage family involvement in the discussion.",
        },
        {
          question: "Can I still move house with equity release?",
          answer:
            "In most cases, yes. Most lifetime mortgage plans are portable, meaning you can transfer them to a new property, subject to the lender's criteria. We will explain all the terms and conditions clearly before you commit.",
        },
        {
          question: "Is my home at risk with equity release?",
          answer:
            "All plans we recommend come with a no negative equity guarantee, meaning you will never owe more than the value of your home. We only recommend products from providers that are members of the Equity Release Council, which provides additional consumer protections.",
        },
      ],
    },
    {
      category: "Will Writing",
      questions: [
        {
          question: "Why do I need a will?",
          answer:
            "Without a will, your estate will be distributed according to the rules of intestacy, which may not reflect your wishes. A will ensures your assets go to the people you choose, appoints guardians for your children, and can help minimise Inheritance Tax. It is one of the most important documents you will ever create.",
        },
        {
          question: "What is a Lasting Power of Attorney?",
          answer:
            "A Lasting Power of Attorney (LPA) is a legal document that allows someone you trust to make decisions on your behalf if you become unable to do so yourself. There are two types: one for health and welfare decisions, and one for property and financial affairs. We strongly recommend having both in place.",
        },
        {
          question: "How often should I review my will?",
          answer:
            "You should review your will every 3-5 years, or after any major life event such as marriage, divorce, the birth of a child, or a significant change in your financial circumstances. We offer a will review service to ensure your documents remain up to date.",
        },
      ],
    },
    {
      category: "Fees & Charges",
      questions: [
        {
          question: "How do you charge for your services?",
          answer:
            "We offer both fee-based and commission-based options depending on the service. Our fees are always explained clearly upfront before any work begins. Initial consultations are free, and we will provide a detailed fee agreement before proceeding with any recommendations.",
        },
        {
          question: "Do I pay for the initial meeting?",
          answer:
            "No, your initial consultation is completely free and without obligation. We use this meeting to understand your needs across all areas of your financial life and explain how we can help. You will only incur fees if you decide to proceed.",
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
              Find answers to common questions about our financial planning services,
              from equity release and will writing to mortgages and pensions.
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
              <Link href="/aspire-ifa/contact" className="btn-accent">
                Contact Us
              </Link>
              <a
                href="tel:02083714411"
                className="btn-outline"
              >
                Call 020 8371 4411
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
            Book a complimentary meeting at our Finchley office to discuss your
            financial goals with one of our expert planners.
          </p>
          <Link href="/aspire-ifa/contact" className="btn-accent">
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> Aspire Independent Financial Planners
              LLP is authorised and regulated by the Financial Conduct Authority. The
              information on this page is for general guidance only and does not
              constitute financial advice. Individual circumstances may vary.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
