import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Financial Planning Questions Answered",
  description:
    "Frequently asked questions about divorce financial planning, pension transfers, retirement planning and our services. Get answers from Retinvest in Stirling.",
  openGraph: {
    title: "FAQ | Retinvest - Retirement & Investment Solutions",
    description:
      "Common questions about divorce financial planning, pension transfers, and working with an independent financial adviser in Central Scotland.",
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
            "A financial adviser helps you make informed decisions about your money. We analyse your current financial situation, understand your goals, and create personalised strategies for pensions, investments, tax planning, and protection. We also provide ongoing support and adjust your plan as your circumstances change.",
        },
        {
          question: "Why should I use an independent financial adviser?",
          answer:
            "Independent financial advisers (IFAs) like Retinvest are not tied to any product provider. This means we can recommend the best solutions from the entire market, rather than being limited to a specific company's products. Our advice is based solely on what's best for you.",
        },
        {
          question: "Are you regulated?",
          answer:
            "Yes, Retirement & Investment Solutions Ltd is authorised and regulated by the Financial Conduct Authority (FCA). This means we adhere to strict professional standards, and you're protected by the Financial Services Compensation Scheme (FSCS) and have access to the Financial Ombudsman Service if needed.",
        },
        {
          question: "Do you offer a free initial consultation?",
          answer:
            "Yes, we offer a complimentary initial consultation at our Stirling office with no obligation. This meeting allows us to understand your situation and goals, while you can get to know us and decide if we're the right fit for your needs.",
        },
        {
          question: "Which areas do you cover?",
          answer:
            "We are based at Castle Business Park in Stirling and serve clients across Central Scotland, including Stirling, Falkirk, Dunblane, Fife and West Lothian. We can also offer consultations via video call for clients further afield.",
        },
      ],
    },
    {
      category: "Divorce Financial Planning",
      questions: [
        {
          question: "How can a financial adviser help during divorce?",
          answer:
            "Divorce has significant financial implications. We help by providing expert analysis of pension sharing orders, calculating fair asset division, producing independent expert reports for court proceedings, and creating a post-divorce financial plan. We work alongside your solicitor to ensure you get a fair financial settlement.",
        },
        {
          question: "What is a pension sharing order?",
          answer:
            "A pension sharing order is a court order that splits pension rights between divorcing spouses. A percentage of one person's pension is transferred to the other. We provide expert analysis to ensure the pension share is fair and help implement the order once granted.",
        },
        {
          question: "How are pensions valued in a divorce?",
          answer:
            "Pensions are valued using the Cash Equivalent Transfer Value (CETV). However, the CETV doesn't always reflect the true value of a pension, particularly for defined benefit (final salary) schemes. We provide expert analysis to ensure pensions are fairly valued during divorce proceedings.",
        },
        {
          question: "Can you provide expert reports for court?",
          answer:
            "Yes, we can provide independent financial expert reports for use in divorce proceedings. These reports analyse the pension and financial assets involved and provide clear recommendations for the court to consider when making financial orders.",
        },
        {
          question: "Do I need financial advice even if my divorce is amicable?",
          answer:
            "Yes, even in amicable divorces, it's important to get independent financial advice. Pensions are complex and their true value isn't always obvious. Without expert advice, you could inadvertently accept an unfair settlement or miss opportunities to protect your financial future.",
        },
      ],
    },
    {
      category: "Pension Transfers",
      questions: [
        {
          question: "Should I transfer my defined benefit pension?",
          answer:
            "This is a complex decision that depends on your individual circumstances. Defined benefit pensions provide a guaranteed income for life, which is very valuable. However, there may be situations where a transfer is suitable. We provide thorough analysis and will only recommend a transfer when it genuinely suits your needs.",
        },
        {
          question: "What are the risks of pension transfers?",
          answer:
            "The main risk is giving up a guaranteed lifetime income in exchange for a pot of money that may run out. Investment risk, longevity risk and inflation risk all need to be considered. We ensure you fully understand these risks before making any decision.",
        },
        {
          question: "Should I consolidate my old pensions?",
          answer:
            "It depends on your individual circumstances. Consolidating multiple pensions can make management easier and potentially reduce charges, but it's not always the right choice. Some older pensions have valuable benefits that would be lost on transfer. We'll analyse all your pensions and recommend the best approach.",
        },
      ],
    },
    {
      category: "Retirement Planning",
      questions: [
        {
          question: "When should I start planning for retirement?",
          answer:
            "The earlier the better! Thanks to compound growth, starting pension contributions in your 20s or 30s can make a huge difference to your retirement pot. However, it's never too late to start, and we can help you maximise your pension savings at any age.",
        },
        {
          question: "What is pension drawdown?",
          answer:
            "Pension drawdown allows you to take flexible income from your pension while keeping the rest invested. This gives you more control than buying an annuity, but requires careful management. We can advise on the most suitable income strategy for your retirement.",
        },
        {
          question: "How much do I need to retire comfortably?",
          answer:
            "This varies greatly depending on your lifestyle expectations, location, and other income sources. We use cash flow modelling to project your income needs in retirement and help you understand whether you're on track. A general rule of thumb is aiming for around two-thirds of your pre-retirement income.",
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
              Find answers to common questions about divorce financial planning,
              pension transfers, our services and how we can help you.
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
              <Link href="/retinvest-stirling/contact" className="btn-accent">
                Contact Us
              </Link>
              <a
                href="tel:01786437008"
                className="btn-outline"
              >
                Call 01786 437 008
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
            one of our expert advisers at our Stirling office.
          </p>
          <Link href="/retinvest-stirling/contact" className="btn-accent">
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> Retirement &amp; Investment Solutions
              Ltd (trading as Retinvest) is authorised and regulated by the Financial
              Conduct Authority. The information on this page is for general guidance
              only and does not constitute financial advice. Individual circumstances
              may vary.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
