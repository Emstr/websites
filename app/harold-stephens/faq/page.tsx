import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Later Life Planning Questions Answered",
  description:
    "Frequently asked questions about later life planning, equity release, care fee funding, retirement income, and our services. Get answers from Harold Stephens Financial Planning.",
  openGraph: {
    title: "FAQ | Harold Stephens Financial Planning",
    description:
      "Common questions about later life planning, equity release, care fees, retirement income, and working with a specialist financial adviser.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "About Our Services",
      questions: [
        {
          question: "What is later life planning?",
          answer:
            "Later life planning is a specialist area of financial advice focused on the unique challenges that arise in retirement and old age. It covers areas such as retirement income, equity release, care fee funding, inheritance tax, and estate planning. Unlike general financial advice, it takes into account the specific needs and concerns of those in or approaching their later years.",
        },
        {
          question: "Why should I use a later life planning specialist?",
          answer:
            "Later life financial decisions are often complex, high-stakes, and emotionally charged. A specialist adviser like Harold Stephens has deeper knowledge and experience in areas such as equity release, care fee planning, and retirement income than a generalist adviser. This expertise can make a significant difference to the quality of advice you receive.",
        },
        {
          question: "Are you regulated?",
          answer:
            "Yes, Harold Stephens Financial Planning is authorised and regulated by the Financial Conduct Authority (FCA). This means we adhere to strict professional standards, and you are protected by the Financial Services Compensation Scheme (FSCS) and have access to the Financial Ombudsman Service if needed.",
        },
        {
          question: "Do you offer a free initial consultation?",
          answer:
            "Yes, we offer a complimentary initial consultation with no obligation. This meeting allows us to understand your situation and goals, while you can get to know us and decide if we are the right fit for your needs. There is no pressure to proceed with any paid services.",
        },
      ],
    },
    {
      category: "Equity Release",
      questions: [
        {
          question: "What is equity release?",
          answer:
            "Equity release is a way for homeowners aged 55 and over to access the wealth tied up in their property without having to sell and move. The two main types are lifetime mortgages (where you borrow against your home) and home reversion plans (where you sell a share of your property). Both allow you to remain in your home for life.",
        },
        {
          question: "Is equity release safe?",
          answer:
            "Modern equity release products are regulated by the FCA and come with important safeguards. Most lifetime mortgages include a no-negative-equity guarantee, meaning you will never owe more than your home is worth. However, equity release does reduce the value of your estate and may affect entitlement to means-tested benefits, which is why specialist advice is essential.",
        },
        {
          question: "How much equity can I release?",
          answer:
            "The amount you can release depends on your age, the value of your property, and your health. Generally, the older you are, the more you can release. We provide personalised illustrations showing exactly how much you could access and what the long-term costs would be.",
        },
        {
          question: "Will equity release affect my benefits?",
          answer:
            "Equity release can affect your entitlement to means-tested benefits such as Pension Credit, Council Tax Reduction, and care funding support. We always assess the impact on your benefits as part of our advice process and will explain this clearly before you make any decision.",
        },
      ],
    },
    {
      category: "Care Fee Planning",
      questions: [
        {
          question: "How much does care cost?",
          answer:
            "Care costs vary significantly depending on the type of care and location. In the South West, residential care home fees typically range from 800 to 1,200 per week, while nursing care can cost 1,000 to 1,500 per week or more. These costs can quickly deplete savings, which is why forward planning is so important.",
        },
        {
          question: "Will the council pay for my care?",
          answer:
            "Local authority funding depends on both your care needs and your financial circumstances. If you have assets above the upper capital limit (currently 23,250 in England), you are expected to fund your own care. We can help you understand the thresholds and plan accordingly to make your money last as long as possible.",
        },
        {
          question: "What is an immediate needs annuity?",
          answer:
            "An immediate needs annuity is a product specifically designed to fund long-term care. You pay a lump sum and in return receive a guaranteed income paid directly to the care provider for life. This provides certainty of funding regardless of how long care is needed and can represent good value for money in many situations.",
        },
        {
          question: "Can I protect my home from care fees?",
          answer:
            "There are legitimate strategies to help protect your home and assets, but it is important to plan ahead. Deprivation of assets rules mean that giving away property or money to avoid care fees can be reversed by the local authority. We provide honest, compliant advice on what is possible and what is not.",
        },
      ],
    },
    {
      category: "Retirement Income",
      questions: [
        {
          question: "What is pension drawdown?",
          answer:
            "Pension drawdown allows you to take flexible income from your pension while keeping the rest invested. This gives you more control than buying an annuity, but requires careful management to ensure your money lasts throughout retirement. We can advise on the most suitable income strategy for your circumstances.",
        },
        {
          question: "Should I buy an annuity or use drawdown?",
          answer:
            "The right choice depends on your individual circumstances, including your health, other income sources, attitude to risk, and need for certainty. Many people use a combination of both. We analyse your situation in detail and recommend the approach that best meets your needs for secure, sustainable retirement income.",
        },
        {
          question: "How much income can I take from my pension?",
          answer:
            "The sustainable level of income depends on the size of your pension, your age, investment returns, and how long you need it to last. Taking too much too early is one of the biggest risks in retirement. We use cash flow modelling to show you how different income levels affect your long-term financial security.",
        },
      ],
    },
    {
      category: "Inheritance Tax",
      questions: [
        {
          question: "Will my family have to pay inheritance tax?",
          answer:
            "Inheritance tax is charged at 40% on estates above the nil-rate band (currently 325,000 per person, with an additional 175,000 residence nil-rate band for property passed to direct descendants). With careful planning, there are legitimate ways to reduce or eliminate the liability. We help you understand your position and the options available.",
        },
        {
          question: "How can I reduce my inheritance tax liability?",
          answer:
            "There are several strategies including making use of annual gifting allowances, potentially exempt transfers, trusts, life insurance in trust, and investing in IHT-efficient assets. The right approach depends on your circumstances, and starting early gives you more options. We create a tailored plan based on your specific situation.",
        },
        {
          question: "Does equity release affect inheritance tax?",
          answer:
            "Equity release reduces the value of your estate, which can in turn reduce your inheritance tax liability. However, the money released must be spent or given away to have a lasting IHT benefit. We consider the inheritance tax implications as part of our holistic advice on equity release.",
        },
      ],
    },
    {
      category: "Fees & Process",
      questions: [
        {
          question: "How do you charge for your services?",
          answer:
            "We offer both fee-based and commission-based options depending on the service. Our fees are always explained clearly upfront before any work begins. Initial consultations are free, and we provide a detailed fee agreement before proceeding with any recommendations.",
        },
        {
          question: "Do I pay for the initial meeting?",
          answer:
            "No, your initial consultation is completely free and without obligation. We use this meeting to understand your needs and explain how we can help. You will only incur fees if you decide to proceed with our advice and services.",
        },
        {
          question: "Do you offer home visits?",
          answer:
            "Yes, we understand that visiting an office is not always convenient, particularly for clients with mobility issues. We offer home visits across Bristol, Bath, and the wider South West at no additional charge. We can also arrange video consultations if preferred.",
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
              Find answers to common questions about later life planning, equity
              release, care fees, retirement income, and how we can help you.
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
              <Link href="/harold-stephens/contact" className="btn-accent">
                Contact Us
              </Link>
              <a
                href="tel:01173636212"
                className="btn-outline"
              >
                Call 0117 363 6212
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
            Book a complimentary meeting to discuss your later life planning
            needs with our specialist advisers in Bristol.
          </p>
          <Link href="/harold-stephens/contact" className="btn-accent">
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p className="mb-2">
              <strong>Important Notice:</strong> Harold Stephens Financial Planning
              is authorised and regulated by the Financial Conduct Authority. The
              information on this page is for general guidance only and does not
              constitute financial advice. Individual circumstances may vary.
            </p>
            <p>
              <strong>Equity Release:</strong> This is a lifetime mortgage or home
              reversion plan. To understand the features and risks, ask for a
              personalised illustration.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
