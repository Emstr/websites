import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Financial Planning Questions Answered",
  description:
    "Frequently asked questions about mortgages, pensions, equity release, investments and protection. Get answers from DALES IFA, independent financial advisers in Nottingham and Newark.",
  openGraph: {
    title: "FAQ | DALES IFA",
    description:
      "Common questions about mortgages, equity release, pensions and working with an independent financial adviser in Nottingham and Newark.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Equity Release",
      questions: [
        {
          question: "What is equity release?",
          answer:
            "Equity release allows homeowners aged 55 and over to access the wealth tied up in their property without having to move. The most common form is a lifetime mortgage, where you borrow against the value of your home. The loan, plus interest, is repaid when the last borrower dies or moves into long-term care. As an Equity Release Council member, we ensure all our recommendations meet the Council's strict standards.",
        },
        {
          question: "Is equity release safe?",
          answer:
            "When arranged through an Equity Release Council member like DALES IFA, equity release comes with important safeguards. These include a no-negative-equity guarantee (you'll never owe more than your home is worth), the right to remain in your property for life, and the freedom to move to another suitable property. We always explore alternatives first and encourage family involvement in the decision.",
        },
        {
          question: "Will equity release affect my inheritance?",
          answer:
            "Equity release will reduce the value of your estate and therefore the inheritance you leave. However, many modern plans allow you to ring-fence a portion of your property value for inheritance. We'll clearly explain the impact on your estate and help you find the right balance between accessing funds now and preserving wealth for your beneficiaries.",
        },
        {
          question: "Can I still move house with equity release?",
          answer:
            "Yes. Under the Equity Release Council's standards, all plans include the right to move to another suitable property. The equity release plan can usually be transferred to your new home, subject to the lender's criteria. We'll explain all the details during your consultation.",
        },
      ],
    },
    {
      category: "Mortgages",
      questions: [
        {
          question: "Do I need a mortgage adviser?",
          answer:
            "While you can apply for a mortgage directly with a lender, using a whole-of-market adviser like DALES IFA gives you access to thousands of deals from hundreds of lenders. We can often find better rates, help with complex income situations, and guide you through the entire process. Our advice can save you time, stress, and money.",
        },
        {
          question: "Can you help if I'm self-employed?",
          answer:
            "Absolutely. Self-employed borrowers often find it harder to get a mortgage through high street banks. We have access to specialist lenders who understand self-employment and can assess your income more flexibly. Whether you're a sole trader, limited company director, or contractor, we can help.",
        },
        {
          question: "When should I remortgage?",
          answer:
            "It's worth reviewing your mortgage when your current deal is coming to an end (usually 2-5 years), when interest rates change significantly, or if your circumstances have changed. We can check whether a better deal is available and handle the switch for you, often with no additional legal costs.",
        },
        {
          question: "Do you charge for mortgage advice?",
          answer:
            "Our fees for mortgage advice are always explained clearly upfront before any work begins. We'll confirm our charging structure during your free initial consultation, so there are no surprises.",
        },
      ],
    },
    {
      category: "Pensions",
      questions: [
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
        {
          question: "When should I start pension planning?",
          answer:
            "The earlier the better! Thanks to compound growth, starting pension contributions in your 20s or 30s can make a huge difference to your retirement pot. However, it's never too late to start, and we can help you maximise your pension savings at any age.",
        },
        {
          question: "Can you help with my workplace pension?",
          answer:
            "Yes, we advise on all types of pension schemes including workplace pensions, SIPPs, and defined benefit (final salary) schemes. We can review your existing workplace pension and advise on whether you could be getting better value elsewhere.",
        },
      ],
    },
    {
      category: "Investments & Protection",
      questions: [
        {
          question: "What is the minimum amount I can invest?",
          answer:
            "We work with clients at various levels of investment. Whether you're looking to invest a lump sum or make regular monthly contributions, we can help find suitable options. We'll discuss your situation during the free initial consultation.",
        },
        {
          question: "Do I need life insurance?",
          answer:
            "If anyone depends on your income, life insurance is essential. It ensures your family can maintain their lifestyle, pay the mortgage, and meet financial goals if you pass away. We'll assess your needs and find appropriate cover at competitive rates.",
        },
        {
          question: "What types of protection do you advise on?",
          answer:
            "We advise on life assurance, critical illness cover, income protection, family income benefit, mortgage protection, and business protection. We'll assess your specific needs and recommend the right combination of cover for your circumstances.",
        },
      ],
    },
    {
      category: "Working With Us",
      questions: [
        {
          question: "Do you offer a free initial consultation?",
          answer:
            "Yes, we offer a complimentary initial consultation with no obligation. This meeting allows us to understand your situation and goals, while you can get to know Philip and decide if we're the right fit for your needs. You can meet us at our Nottingham or Newark office, or arrange a video or phone call.",
        },
        {
          question: "Why should I choose an independent financial adviser?",
          answer:
            "Independent financial advisers (IFAs) like DALES IFA are not tied to any product provider. This means we can recommend the best solutions from the entire market, rather than being limited to a specific company's products. Our advice is based solely on what's best for you.",
        },
        {
          question: "Are you regulated?",
          answer:
            "Yes, P N Dales Ltd is authorised and regulated by the Financial Conduct Authority (FCA Ref: 496107). We are also a member of the Equity Release Council. This means we adhere to strict professional standards, and you're protected by the Financial Services Compensation Scheme (FSCS).",
        },
        {
          question: "Which office should I visit?",
          answer:
            "Whichever is more convenient for you! Our Nottingham office is at Bridgford Business Centre in West Bridgford (NG2 6AU), and our Newark office is at Central Buildings on Middle Gate (NG24 1AG). We also offer video and phone consultations if you prefer.",
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
              Find answers to common questions about equity release, mortgages,
              pensions, and how we can help you achieve your financial goals.
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
              were looking for, please don&apos;t hesitate to get in touch.
              Philip will be happy to assist you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/dales-ifa/contact" className="btn-accent">
                Contact Us
              </Link>
              <a
                href="tel:03337729607"
                className="btn-outline"
              >
                Call 0333 772 9607
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
            Philip at our Nottingham or Newark office.
          </p>
          <Link href="/dales-ifa/contact" className="btn-accent">
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> P N Dales Ltd (trading as DALES
              IFA) is authorised and regulated by the Financial Conduct Authority
              (FCA Ref: 496107). The information on this page is for general
              guidance only and does not constitute financial advice. Individual
              circumstances may vary.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
