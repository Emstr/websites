import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Chartered Financial Planning Questions Answered",
  description:
    "Frequently asked questions about Chartered financial planning, investments, pensions, estate planning, wills and our services at Holder & Combes.",
  openGraph: {
    title: "FAQ | Holder & Combes — Chartered Financial Planners",
    description:
      "Common questions about Chartered financial advice, investments, pensions, estate planning, wills and working with Holder & Combes.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Chartered Status",
      questions: [
        {
          question: "What does Chartered Financial Planner mean?",
          answer:
            "Chartered Financial Planner is the gold standard qualification in our profession, awarded by the Chartered Insurance Institute (CII). It requires the Advanced Diploma in Financial Planning — the most rigorous qualification available — plus a commitment to ongoing professional development and strict ethical standards. Fewer than 5% of financial advisers in the UK hold Chartered status.",
        },
        {
          question: "Why should I choose a Chartered Financial Planner?",
          answer:
            "Chartered Financial Planners have demonstrated the highest level of technical competence through advanced examinations. We are bound by the CII's code of ethics, must undertake structured continuing professional development, and are subject to disciplinary procedures. In short, Chartered status provides an additional layer of assurance beyond standard FCA regulation.",
        },
        {
          question: "Are you regulated by the FCA?",
          answer:
            "Yes, Holder & Combes is authorised and regulated by the Financial Conduct Authority (FCA). In addition to FCA regulation, we hold Chartered Financial Planner status from the Chartered Insurance Institute. This means we adhere to the highest professional standards, and you are protected by the Financial Services Compensation Scheme (FSCS) and have access to the Financial Ombudsman Service.",
        },
        {
          question: "Do you offer a free initial consultation?",
          answer:
            "Yes, we offer a complimentary initial consultation at our St Paul's office with no obligation. This meeting allows us to understand your situation and goals, whilst you can get to know us and decide if we are the right fit for your needs. There is no pressure to proceed with any paid services.",
        },
      ],
    },
    {
      category: "Investment & Wealth Management",
      questions: [
        {
          question: "What is the minimum investment amount you work with?",
          answer:
            "We generally work with clients who have investable assets of £50,000 or more, or those making significant regular contributions. However, we are happy to discuss your situation as every client is different — particularly for estate planning and wills services where asset thresholds may not apply.",
        },
        {
          question: "How do you determine my risk profile?",
          answer:
            "We use a comprehensive risk assessment process that considers your investment objectives, time horizon, financial situation and attitude to risk. This involves detailed discussions and psychometric risk questionnaires to ensure we truly understand your comfort level with investment volatility before making any recommendations.",
        },
        {
          question: "How often will my investments be reviewed?",
          answer:
            "We typically conduct formal annual reviews, though we monitor portfolios continuously. You are welcome to contact your Chartered planner at any time if your circumstances change or you have questions. For wealth management clients, we may meet more frequently depending on your needs.",
        },
      ],
    },
    {
      category: "Estate Planning & Wills",
      questions: [
        {
          question: "Why is estate planning important?",
          answer:
            "Without proper estate planning, your wealth may not pass to your chosen beneficiaries as efficiently as possible. Inheritance Tax alone can claim up to 40% of your estate above the nil-rate band. Effective estate planning uses legitimate strategies — trusts, gifting, reliefs and exemptions — to minimise this liability and protect your legacy for future generations.",
        },
        {
          question: "Do I need a will if I already have a financial plan?",
          answer:
            "Absolutely. A will is the cornerstone of any sound financial plan. Without a valid will, your estate will be distributed according to intestacy rules, which may not reflect your wishes. We work alongside trusted legal professionals to ensure your will integrates seamlessly with your broader estate and financial planning strategy.",
        },
        {
          question: "Can you help with Inheritance Tax planning?",
          answer:
            "Yes, Inheritance Tax (IHT) planning is a core part of our service. We use a range of strategies including trusts, lifetime gifting, Business Property Relief, Agricultural Relief and other legitimate reliefs to help minimise the IHT liability on your estate. Early planning is key — the sooner you start, the more options are available.",
        },
        {
          question: "What is a trust and do I need one?",
          answer:
            "A trust is a legal arrangement where assets are held by trustees for the benefit of specified beneficiaries. Trusts can be used for tax planning, asset protection, providing for minor children or vulnerable dependants, and controlling how and when wealth is distributed. Whether you need a trust depends on your circumstances, and we can advise you accordingly.",
        },
      ],
    },
    {
      category: "Pensions & Retirement",
      questions: [
        {
          question: "Should I consolidate my old pensions?",
          answer:
            "It depends on your individual circumstances. Consolidating multiple pensions can make management easier and potentially reduce charges, but it is not always the right choice. Some older pensions have valuable benefits — such as guaranteed annuity rates — that would be lost on transfer. Our Chartered specialists will analyse all your pensions and recommend the best approach.",
        },
        {
          question: "What is pension drawdown?",
          answer:
            "Pension drawdown allows you to take flexible income from your pension whilst keeping the rest invested. This gives you more control than buying an annuity, but requires careful management to ensure your money lasts. Our Chartered planners can advise on the most suitable income strategy for your retirement.",
        },
        {
          question: "When should I start retirement planning?",
          answer:
            "The earlier the better. Thanks to compound growth, starting contributions in your 20s or 30s can make a significant difference to your retirement pot. However, it is never too late to start — and if you are approaching retirement, expert advice is particularly valuable to ensure you make the most of your accumulated savings.",
        },
      ],
    },
    {
      category: "Tax Planning",
      questions: [
        {
          question: "How can you help reduce my tax bill?",
          answer:
            "We use various legitimate strategies to minimise your tax liability, including maximising ISA allowances, optimising pension contributions, and using tax-efficient investments. We also consider Capital Gains Tax planning, dividend tax strategies for company directors, and Inheritance Tax mitigation as part of our holistic approach.",
        },
        {
          question: "Do you work with my accountant?",
          answer:
            "Yes, we regularly coordinate with clients' accountants and tax advisers to ensure a cohesive approach. Financial planning and tax advice are closely linked, and working collaboratively ensures the best outcomes for you.",
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
            "No, your initial consultation is completely free and without obligation. We use this meeting to understand your needs and explain how our Chartered expertise can help. You will only incur fees if you decide to proceed with our advice and services.",
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
              Find answers to common questions about Chartered financial
              planning, our services and how we can help you achieve your
              financial goals.
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
              Chartered team will be happy to assist you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/holder-combes/contact" className="btn-accent">
                Contact Us
              </Link>
              <a
                href="tel:02071012817"
                className="btn-outline"
              >
                Call 020 7101 2817
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
            one of our Chartered Financial Planners at our St Paul&apos;s office.
          </p>
          <Link href="/holder-combes/contact" className="btn-accent">
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> Holder &amp; Combes is authorised
              and regulated by the Financial Conduct Authority. Holder &amp; Combes
              holds Chartered Financial Planner status. The information on this page
              is for general guidance only and does not constitute financial advice.
              Individual circumstances may vary.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
