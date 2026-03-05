import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Financial Planning Questions Answered",
  description:
    "Frequently asked questions about financial planning, investments, pensions, estate planning and our services. Get answers from Globe Independent Financial Advisors.",
  openGraph: {
    title: "FAQ | Globe Independent Financial Advisors",
    description:
      "Common questions about financial advice, investments, pensions, and working with an independent financial advisor.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "About Our Services",
      questions: [
        {
          question: "What does a financial advisor do?",
          answer:
            "A financial advisor helps you make informed decisions about your money. We analyse your current financial situation, understand your goals, and create personalised strategies for investments, pensions, retirement planning, estate planning and protection. We also provide ongoing support and adjust your plan as your circumstances change.",
        },
        {
          question: "Why should I use an independent financial advisor?",
          answer:
            "Independent financial advisors (IFAs) like Globe IFA are not tied to any product provider. This means we can recommend the best solutions from the entire market, rather than being limited to a specific company's products. Our advice is based solely on what's best for you.",
        },
        {
          question: "Are you regulated?",
          answer:
            "Yes, Globe Independent Financial Advisors is authorised and regulated by the Financial Conduct Authority (FCA). Company number 03503096. This means we adhere to strict professional standards, and you're protected by the Financial Services Compensation Scheme (FSCS) and have access to the Financial Ombudsman Service if needed.",
        },
        {
          question: "Do you offer a free initial consultation?",
          answer:
            "Yes, we offer a complimentary initial consultation with no obligation. This meeting allows us to understand your situation and goals, while you can get to know us and decide if we're the right fit for your needs. There's no pressure to proceed with any paid services.",
        },
        {
          question: "How long have you been established?",
          answer:
            "Globe IFA was founded by Garry Haywood in 1994, giving us over 30 years of experience. Our team has over 200 years of combined expertise, and many of our clients have been with us since the 1990s.",
        },
      ],
    },
    {
      category: "Investment & Retirement Planning",
      questions: [
        {
          question: "What is the minimum investment amount you work with?",
          answer:
            "We generally work with clients who have investable assets of 50,000 or more, or those making regular contributions. However, we're happy to discuss your situation as every client is different. For corporate services and pension advice, different minimums may apply.",
        },
        {
          question: "How do you approach retirement planning?",
          answer:
            "We view retirement as a journey with three distinct phases: pre-retirement (preparation and accumulation), active retirement (enjoying your lifestyle while managing your income), and later life (care planning and wealth preservation). We create a tailored strategy for each phase.",
        },
        {
          question: "Can you help with ethical or sustainable investments?",
          answer:
            "Absolutely. We offer a range of ethical, sustainable, and ESG (Environmental, Social, and Governance) investment options. We can build a portfolio that aligns with your values without compromising on your financial objectives.",
        },
        {
          question: "How often will my investments be reviewed?",
          answer:
            "We typically conduct formal annual reviews, though we monitor portfolios continuously. You're welcome to contact us at any time if your circumstances change or you have questions.",
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
          question: "Can you help with my company pension scheme?",
          answer:
            "Yes, we advise on all types of pension schemes including workplace pensions, SIPPs, and defined benefit (final salary) schemes. For businesses, we also provide group pension and auto-enrolment solutions.",
        },
      ],
    },
    {
      category: "Estate Planning & Tax",
      questions: [
        {
          question: "How can you help with inheritance tax planning?",
          answer:
            "We use various legitimate strategies to minimise inheritance tax liability, including trust planning, gift strategies, business relief, and tax-efficient investments. We work alongside solicitors and accountants to create a comprehensive estate plan that protects your wealth for future generations.",
        },
        {
          question: "Do you provide inheritance tax advice?",
          answer:
            "Yes, Inheritance Tax (IHT) planning is a key part of our service. We can help you structure your assets and make use of exemptions and reliefs to potentially reduce the IHT liability on your estate, ensuring more of your wealth passes to your loved ones.",
        },
      ],
    },
    {
      category: "US Citizen Tax Compliance",
      questions: [
        {
          question: "Can you help US citizens living in the UK with financial planning?",
          answer:
            "Yes, this is one of our specialist areas. US citizens living in the UK face unique challenges due to FATCA regulations and dual tax obligations. Many standard UK investment products are not suitable for US persons. We provide compliant investment solutions and work with US tax professionals to ensure full compliance.",
        },
        {
          question: "What makes financial planning different for US citizens in the UK?",
          answer:
            "US citizens must file US tax returns regardless of where they live. This means many UK investment vehicles (ISAs, certain funds) can create complex US tax reporting requirements or penalties. We specialise in selecting US-friendly platforms and funds that work within both tax systems.",
        },
      ],
    },
    {
      category: "Protection & Mortgages",
      questions: [
        {
          question: "Do I need life insurance?",
          answer:
            "If anyone depends on your income, life insurance is essential. It ensures your family can maintain their lifestyle, pay the mortgage, and meet financial goals if you pass away. We'll assess your needs and find appropriate cover at competitive rates.",
        },
        {
          question: "Can you help with buy-to-let mortgages?",
          answer:
            "Yes, we provide advice on residential and buy-to-let mortgages, as well as investment property financing. As independent advisors, we can access the whole of the market to find the best mortgage deal for your circumstances.",
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
              and how Globe IFA can help you achieve your financial goals.
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
              <Link href="/globe-ifa/contact" className="btn-accent">
                Contact Us
              </Link>
              <a
                href="tel:02088910711"
                className="btn-outline"
              >
                Call 020 8891 0711
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
            our experienced advisors at our Twickenham office.
          </p>
          <Link href="/globe-ifa/contact" className="btn-accent">
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> Globe Independent Financial Advisors
              is authorised and regulated by the Financial Conduct Authority. The
              information on this page is for general guidance only and does not
              constitute financial advice. Individual circumstances may vary.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
