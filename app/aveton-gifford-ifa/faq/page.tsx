import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Chartered Financial Planning Questions Answered",
  description:
    "Frequently asked questions about Chartered Financial Planning, investments, pensions, tax mitigation and our services. Get answers from Aveton Gifford Associates.",
  openGraph: {
    title: "FAQ | Aveton Gifford Associates",
    description:
      "Common questions about Chartered Financial Planning, investments, pensions, and working with an independent financial adviser in Scotland.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Chartered Financial Planner Status",
      questions: [
        {
          question: "What does Chartered Financial Planner mean?",
          answer:
            "Chartered Financial Planner is the gold standard qualification in the financial planning profession, awarded by the Chartered Insurance Institute (CII). It requires the highest levels of technical competence, adherence to a rigorous code of ethics, and commitment to ongoing professional development. Fewer than 10% of financial advisers in the UK hold this prestigious designation.",
        },
        {
          question: "Why does Chartered status matter for my financial advice?",
          answer:
            "Chartered status means your adviser has demonstrated exceptional knowledge and skills, well beyond the minimum regulatory requirements. It provides confidence that the advice you receive is based on deep technical expertise, delivered with the highest ethical standards, and backed by continuous professional development. It is the mark of a true expert in financial planning.",
        },
        {
          question: "How does Chartered status differ from being FCA regulated?",
          answer:
            "All financial advisers must be FCA regulated as a minimum requirement to practise. Chartered status goes significantly further — it represents the highest professional qualification available, requiring advanced examinations, years of experience, and adherence to stricter ethical standards. Think of FCA regulation as the entry requirement and Chartered status as the gold standard.",
        },
      ],
    },
    {
      category: "About Our Services",
      questions: [
        {
          question: "What does a Chartered Financial Planner do?",
          answer:
            "A Chartered Financial Planner helps you make informed decisions about your money. We analyse your current financial situation, understand your goals, and create personalised strategies for investments, pensions, tax mitigation, and retirement planning. We also provide ongoing support and adjust your plan as your circumstances change.",
        },
        {
          question: "Why should I use an independent financial adviser?",
          answer:
            "Independent financial advisers like Aveton Gifford Associates are not tied to any product provider. This means we can recommend the best solutions from the entire market, rather than being limited to a specific company's products. Our whole-of-market approach ensures our advice is based solely on what's best for you.",
        },
        {
          question: "Are you regulated?",
          answer:
            "Yes, Aveton Gifford Associates Limited is authorised and regulated by the Financial Conduct Authority (FCA). Our company is registered in Scotland under number SC268741. This means we adhere to strict professional standards, and you're protected by the Financial Services Compensation Scheme (FSCS).",
        },
        {
          question: "Do you offer a free initial consultation?",
          answer:
            "Yes, we offer a complimentary initial consultation with no obligation. This meeting allows us to understand your situation and goals, while you can get to know us and decide if we're the right fit for your needs. You can meet us at our Edinburgh or Coatbridge office, or via video call.",
        },
      ],
    },
    {
      category: "Scotland-Specific Questions",
      questions: [
        {
          question: "Do you serve clients across Scotland?",
          answer:
            "Yes, with offices in Edinburgh and Coatbridge, we serve clients across Scotland. Our Edinburgh office covers the capital, the Lothians and Fife, while our Coatbridge office serves Central Scotland, including North Lanarkshire, Glasgow and surrounding areas. We also offer video consultations for clients elsewhere in Scotland.",
        },
        {
          question: "Are there any differences in financial planning for Scottish residents?",
          answer:
            "Scottish residents are subject to Scottish income tax rates, which differ from the rest of the UK. This can affect tax mitigation strategies, pension planning and investment decisions. As Scottish-based Chartered Financial Planners, we have in-depth knowledge of the Scottish tax system and can tailor our advice accordingly.",
        },
        {
          question: "Can I meet you at either office?",
          answer:
            "Absolutely. You can choose to meet Derek at our Edinburgh head office on Cammo Road, or Hugh at our Coatbridge office on Gartgill Road. We also offer video consultations if that is more convenient. Simply let us know your preference when booking your appointment.",
        },
      ],
    },
    {
      category: "Investment & Pension Planning",
      questions: [
        {
          question: "What is the minimum investment amount you work with?",
          answer:
            "We work with clients across a range of investment levels. We're happy to discuss your situation regardless of the amount, as every client is different. Please contact us for an initial conversation about your needs.",
        },
        {
          question: "How do you determine my risk profile?",
          answer:
            "We use a comprehensive risk assessment process that considers your investment objectives, time horizon, financial situation, and attitude to risk. This involves detailed discussions and questionnaires to ensure we truly understand your comfort level with investment volatility.",
        },
        {
          question: "Should I consolidate my old pensions?",
          answer:
            "It depends on your individual circumstances. Consolidating multiple pensions can make management easier and potentially reduce charges, but it's not always the right choice. Some older pensions have valuable benefits that would be lost on transfer. As Chartered Financial Planners, we'll analyse all your pensions and recommend the best approach.",
        },
        {
          question: "What is pension drawdown?",
          answer:
            "Pension drawdown allows you to take flexible income from your pension whilst keeping the rest invested. This gives you more control than buying an annuity, but requires careful management. Our Chartered Financial Planners can advise on the most suitable income strategy for your retirement.",
        },
      ],
    },
    {
      category: "Tax Mitigation",
      questions: [
        {
          question: "How can you help reduce my tax bill?",
          answer:
            "We use various legitimate strategies to minimise your tax liability, including maximising ISA allowances, optimising pension contributions for tax relief, and using tax-efficient investments. We also consider Capital Gains Tax and Inheritance Tax planning as part of our holistic approach. For Scottish taxpayers, we factor in the specific Scottish income tax rates.",
        },
        {
          question: "Do you provide inheritance tax advice?",
          answer:
            "Yes, Inheritance Tax (IHT) planning is a key part of our financial planning service. We can help you structure your assets and make use of exemptions and reliefs to potentially reduce the IHT liability on your estate, ensuring more of your wealth passes to your loved ones.",
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
            "Absolutely not. Transparency is one of our core values as Chartered Financial Planners. All fees and charges, including any product costs, will be clearly explained in writing before you commit to anything. You'll always know exactly what you're paying for.",
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
              Find answers to common questions about Chartered Financial Planning,
              our services, and how we can help you achieve your financial goals.
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
              for, please don&apos;t hesitate to get in touch. Our Chartered Financial
              Planners will be happy to assist you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/aveton-gifford-ifa/contact" className="btn-accent">
                Contact Us
              </Link>
              <a
                href="tel:01313396508"
                className="btn-outline"
              >
                Call 0131 339 6508
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
            our Chartered Financial Planners at our Edinburgh or Coatbridge office.
          </p>
          <Link href="/aveton-gifford-ifa/contact" className="btn-accent">
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> Aveton Gifford Associates Limited
              is authorised and regulated by the Financial Conduct Authority.
              Company registered in Scotland No. SC268741. The information on this
              page is for general guidance only and does not constitute financial advice.
              Individual circumstances may vary.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
