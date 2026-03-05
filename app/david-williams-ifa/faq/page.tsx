import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Financial Planning Questions Answered",
  description:
    "Frequently asked questions about Chartered financial planning, investments, pensions, trusts, and our services. Get answers from David Williams IFA.",
  openGraph: {
    title: "FAQ | David Williams IFA",
    description:
      "Common questions about Chartered financial planning, investments, pensions, trusts, and working with an independent financial adviser.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "About Our Services",
      questions: [
        {
          question: "What is a Chartered Financial Planner?",
          answer:
            "Chartered Financial Planner is the gold standard professional qualification in financial planning, awarded by the Chartered Insurance Institute (CII). It is held by an elite group of firms that demonstrate the highest levels of knowledge, ethical practice, and commitment to clients. Choosing a Chartered firm means you are working with advisers at the top of their profession.",
        },
        {
          question: "Why should I use an independent financial adviser?",
          answer:
            "Independent financial advisers (IFAs) like David Williams IFA are not tied to any product provider. This means we can recommend the best solutions from the entire market, rather than being limited to a specific company's products. Our advice is based solely on what's best for you.",
        },
        {
          question: "Are you regulated?",
          answer:
            "Yes, David Williams IFA Ltd is authorised and regulated by the Financial Conduct Authority (FCA No. 530750). Company Registration No. 04638076. This means we adhere to strict professional standards, and you're protected by the Financial Services Compensation Scheme (FSCS) and have access to the Financial Ombudsman Service if needed.",
        },
        {
          question: "Do you offer a free initial consultation?",
          answer:
            "Yes, we offer a complimentary initial consultation with no obligation. This meeting allows us to understand your situation and goals, while you can get to know us and decide if we're the right fit for your needs. There's no pressure to proceed with any paid services.",
        },
        {
          question: "How long have you been established?",
          answer:
            "David Williams IFA has been providing independent financial advice for over 40 years, since the early 1980s. Some of our client relationships now span four generations of the same family — a testament to the trust and quality of advice we provide.",
        },
      ],
    },
    {
      category: "Investment & Pension Planning",
      questions: [
        {
          question: "What is the minimum investment amount you work with?",
          answer:
            "We generally work with clients who have investable assets of 50,000 or more, or those making regular contributions. However, we're happy to discuss your situation as every client is different. For pension, mortgage, and protection advice, different minimums may apply.",
        },
        {
          question: "How do you determine my risk profile?",
          answer:
            "We use a comprehensive risk assessment process that considers your investment objectives, time horizon, financial situation, and attitude to risk. This involves detailed discussions and questionnaires to ensure we truly understand your comfort level with investment volatility.",
        },
        {
          question: "What is cashflow modelling?",
          answer:
            "Cashflow modelling is a sophisticated planning tool that projects your financial future under different scenarios. It helps you understand whether you are on track to meet your goals, when you can afford to retire, and how different decisions might affect your long-term financial security. We use it extensively in our planning process.",
        },
        {
          question: "Should I consolidate my old pensions?",
          answer:
            "It depends on your individual circumstances. Consolidating multiple pensions can make management easier and potentially reduce charges, but it's not always the right choice. Some older pensions have valuable benefits that would be lost on transfer. We'll analyse all your pensions and recommend the best approach for you.",
        },
      ],
    },
    {
      category: "Tax & Trust Planning",
      questions: [
        {
          question: "How can you help with inheritance tax planning?",
          answer:
            "Inheritance Tax planning is one of our specialist areas. We help you structure your affairs using a range of strategies including trusts, lifetime gifts, business property relief, AIM portfolio investments, and life assurance in trust. Our extensive experience with trusts means we can implement sophisticated strategies that minimise IHT while keeping you in control.",
        },
        {
          question: "What types of trusts do you work with?",
          answer:
            "We work with all types of trusts including bare trusts, discretionary trusts, loan trusts, and interest in possession trusts. Our specialist trust planning team can advise on trust creation, ongoing administration, trustee investment strategy, and compliance — ensuring your trusts remain effective as circumstances and legislation evolve.",
        },
        {
          question: "Do you provide inheritance tax advice?",
          answer:
            "Yes, IHT planning is a core part of our service. We help you understand your current IHT liability and develop strategies to reduce it, using exemptions, reliefs, and trust-based solutions. We also ensure your plans are reviewed regularly as tax thresholds and legislation change.",
        },
        {
          question: "Can you help reduce my overall tax burden?",
          answer:
            "Absolutely. We use various legitimate strategies to minimise your tax liability, including maximising ISA allowances, pension contributions, and using tax-efficient investments like VCTs and EIS. We also consider Capital Gains Tax and Inheritance Tax planning as part of our holistic approach.",
        },
      ],
    },
    {
      category: "Corporate & Charity Services",
      questions: [
        {
          question: "Do you provide advice for businesses?",
          answer:
            "Yes, we offer a full range of corporate services including group life and critical illness schemes, company pension schemes, auto-enrolment, director and key person protection, and shareholder protection. We work with businesses of all sizes across the UK.",
        },
        {
          question: "Can you advise charities on their finances?",
          answer:
            "Yes, charity financial advice is one of our specialist areas. We advise charitable organisations on investment of reserves, trustee investment duties, income generation strategies, and compliance with Charity Commission guidance. Our understanding of the unique regulatory requirements for charities sets us apart.",
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
            "Absolutely not. Transparency is one of our core values, and it has been for over 40 years. All fees and charges, including any product costs, will be clearly explained in writing before you commit to anything. You'll always know exactly what you're paying for.",
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
              Find answers to common questions about Chartered financial planning,
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
              for, please don&apos;t hesitate to get in touch. Our Chartered team will
              be happy to assist you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/david-williams-ifa/contact" className="btn-accent">
                Contact Us
              </Link>
              <a
                href="tel:01604621302"
                className="btn-outline"
              >
                Call 01604 621302
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
            our Chartered Financial Planners.
          </p>
          <Link href="/david-williams-ifa/contact" className="btn-accent">
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> David Williams IFA is a trading name of
              David Williams IFA Ltd, which is authorised and regulated by the Financial
              Conduct Authority (FCA No. 530750). The information on this page is for
              general guidance only and does not constitute financial advice. Individual
              circumstances may vary.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
