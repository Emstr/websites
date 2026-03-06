import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Financial Planning Questions Answered",
  description:
    "Frequently asked questions about financial planning, investments, pensions, mortgages, and our services. Get answers from Spectrum Independent Financial Services.",
  openGraph: {
    title: "FAQ | Spectrum Independent Financial Services",
    description:
      "Common questions about financial advice, investments, pensions, mortgages, and working with an independent financial adviser.",
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
            "An independent financial adviser (IFA) helps you make informed decisions about your money. We analyse your current financial situation, understand your goals, and create personalised strategies for pensions, investments, mortgages, and protection. Unlike tied advisers, we search the whole of the market to find the best solutions for you.",
        },
        {
          question: "Why should I choose an independent adviser over a bank or tied adviser?",
          answer:
            "Independent financial advisers like Spectrum IFS are not tied to any product provider. This means we can recommend the best solutions from the entire market, rather than being limited to a specific company's products. Our advice is based solely on what's best for you, giving you access to a much wider range of options.",
        },
        {
          question: "Are you regulated?",
          answer:
            "Yes, Spectrum Independent Financial Services Ltd is authorised and regulated by the Financial Conduct Authority (FCA). This means we adhere to strict professional standards, and you're protected by the Financial Services Compensation Scheme (FSCS) and have access to the Financial Ombudsman Service if needed.",
        },
        {
          question: "Do you offer a free initial consultation?",
          answer:
            "Yes, we offer a complimentary initial consultation with no obligation. This meeting allows us to understand your situation and goals, while you can get to know us and decide if we're the right fit for your needs. There's no pressure to proceed with any paid services.",
        },
      ],
    },
    {
      category: "Pensions & Retirement",
      questions: [
        {
          question: "Should I consolidate my old pensions?",
          answer:
            "It depends on your individual circumstances. Consolidating multiple pensions can make management easier and potentially reduce charges, but it's not always the right choice. Some older pensions have valuable benefits that would be lost on transfer. We'll analyse all your pensions and recommend the best approach for you.",
        },
        {
          question: "What is pension drawdown?",
          answer:
            "Pension drawdown allows you to take flexible income from your pension whilst keeping the rest invested. This gives you more control than buying an annuity, but requires careful management. We can advise on the most suitable income strategy for your retirement.",
        },
        {
          question: "When should I start planning for retirement?",
          answer:
            "The earlier the better! Thanks to compound growth, starting pension contributions in your 20s or 30s can make a huge difference to your retirement pot. However, it's never too late to start, and we can help you maximise your pension savings at any age.",
        },
        {
          question: "Can you help with my workplace pension?",
          answer:
            "Yes, we can review your workplace pension to ensure it's performing well and invested appropriately for your goals. We can also advise on whether additional contributions or alternative arrangements might benefit you.",
        },
      ],
    },
    {
      category: "Investments",
      questions: [
        {
          question: "What is the minimum investment amount you work with?",
          answer:
            "We work with clients across a range of investment levels. Whether you have a lump sum to invest or want to start regular contributions, we're happy to discuss your situation. Every client's circumstances are different, and we'll find a suitable solution for you.",
        },
        {
          question: "How do you determine my risk profile?",
          answer:
            "We use a comprehensive risk assessment process that considers your investment objectives, time horizon, financial situation, and attitude to risk. This involves detailed discussions and questionnaires to ensure we truly understand your comfort level with investment volatility.",
        },
        {
          question: "Can you help with ISAs?",
          answer:
            "Absolutely. We can advise on Cash ISAs, Stocks & Shares ISAs, and Lifetime ISAs. We'll help you make the most of your annual ISA allowance and choose the right investments within your ISA based on your goals and risk profile.",
        },
        {
          question: "How often will my investments be reviewed?",
          answer:
            "We typically conduct formal annual reviews, though we monitor portfolios continuously. You're welcome to contact us at any time if your circumstances change or you have questions. We're always here to help.",
        },
      ],
    },
    {
      category: "Mortgages",
      questions: [
        {
          question: "Can you help first-time buyers?",
          answer:
            "Yes, we specialise in helping first-time buyers navigate the mortgage process. We'll search the whole market to find the best deal for your circumstances, explain all the costs involved, and guide you through every step from application to completion.",
        },
        {
          question: "When should I remortgage?",
          answer:
            "It's worth reviewing your mortgage when your current deal is approaching its end date, typically two to three months before. We can also help if you want to release equity, consolidate debts, or take advantage of better rates. We'll advise whether remortgaging makes financial sense for you.",
        },
        {
          question: "Do you offer buy-to-let mortgage advice?",
          answer:
            "Yes, we provide specialist buy-to-let mortgage advice for both new and existing landlords. We can help with portfolio planning, limited company purchases, and finding the best rates from across the market.",
        },
      ],
    },
    {
      category: "Protection & Insurance",
      questions: [
        {
          question: "Do I need life insurance?",
          answer:
            "If anyone depends on your income, life insurance is essential. It ensures your family can maintain their lifestyle, pay the mortgage, and meet financial goals if you pass away. We'll assess your needs and find appropriate cover at competitive rates.",
        },
        {
          question: "What is critical illness cover?",
          answer:
            "Critical illness cover pays a tax-free lump sum if you're diagnosed with a specified serious illness, such as cancer, heart attack, or stroke. This can help cover medical costs, adapt your home, or simply provide financial security during recovery.",
        },
        {
          question: "Can you review my existing insurance policies?",
          answer:
            "Yes, we can review your current protection arrangements to ensure they still meet your needs and offer value for money. Sometimes consolidating or updating policies can provide better cover at a lower cost.",
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
              <Link href="/spectrum-ifs/contact" className="btn-accent">
                Contact Us
              </Link>
              <a
                href="tel:01514482777"
                className="btn-outline"
              >
                Call 0151 448 2777
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
            our experienced advisers.
          </p>
          <Link href="/spectrum-ifs/contact" className="btn-accent">
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> Spectrum Independent Financial Services
              Ltd is authorised and regulated by the Financial Conduct Authority. The
              information on this page is for general guidance only and does not
              constitute financial advice. Individual circumstances may vary.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
