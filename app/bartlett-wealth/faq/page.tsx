import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Financial Planning Questions Answered",
  description:
    "Frequently asked questions about financial planning, investments, pensions, and our services. Get answers from Bartlett Wealth Management.",
  openGraph: {
    title: "FAQ | Bartlett Wealth Management",
    description:
      "Common questions about financial advice, investments, pensions, and working with an independent financial adviser.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "About Bartlett Wealth Management",
      questions: [
        {
          question: "What does a financial adviser do?",
          answer:
            "A financial adviser helps you make informed decisions about your money. We analyse your current financial situation, understand your goals, and create personalised strategies for investments, pensions, tax planning, and protection. We also provide ongoing support and adjust your plan as your circumstances change.",
        },
        {
          question: "Why should I choose an independent financial adviser?",
          answer:
            "Independent financial advisers (IFAs) like Bartlett Wealth Management are not tied to any product provider. This means we can recommend the best solutions from the entire market, rather than being limited to a specific company's products. Our advice is based solely on what's best for you.",
        },
        {
          question: "Are you regulated?",
          answer:
            "Yes, Bartlett Wealth Management Limited is authorised and regulated by the Financial Conduct Authority (FCA No. 114800). This means we adhere to strict professional standards, and you're protected by the Financial Services Compensation Scheme (FSCS) and have access to the Financial Ombudsman Service if needed.",
        },
        {
          question: "How long has Bartlett been established?",
          answer:
            "The Bartlett Group was founded in 1940, making us over 80 years old. We are now in our third generation of family leadership. The wealth management arm has been providing financial planning advice since 1965. We are proud to be recognised as FT Top 100 UK Advisors 2024 and Lloyd's and London Broker of the Year 2023.",
        },
        {
          question: "Do you offer a free initial consultation?",
          answer:
            "Yes, we offer a complimentary initial consultation with no obligation. This meeting allows us to understand your situation and goals, while you can get to know us and decide if we're the right fit for your needs. There's no pressure to proceed with any paid services.",
        },
      ],
    },
    {
      category: "Retirement & Pension Planning",
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
          question: "Can you help with workplace pensions?",
          answer:
            "Yes, we advise on all types of pension schemes including workplace pensions, SIPPs, and defined benefit (final salary) schemes. For businesses, we also provide auto-enrolment solutions and corporate pension advice as part of our employee benefits service.",
        },
      ],
    },
    {
      category: "Investment & Wealth Management",
      questions: [
        {
          question: "What is the minimum investment amount you work with?",
          answer:
            "We generally work with clients who have investable assets of 50,000 or more, or those making regular contributions. However, we're happy to discuss your situation as every client is different. For workplace pension and corporate advice, different minimums may apply.",
        },
        {
          question: "How do you determine my risk profile?",
          answer:
            "We use a comprehensive risk assessment process that considers your investment objectives, time horizon, financial situation, and attitude to risk. This involves detailed discussions and questionnaires to ensure we truly understand your comfort level with investment volatility.",
        },
        {
          question: "Can you help with ethical or sustainable investments?",
          answer:
            "Absolutely. We offer a range of ethical, sustainable, and ESG (Environmental, Social, and Governance) investment options. We can build a portfolio that aligns with your values without compromising on your financial objectives.",
        },
        {
          question: "How often will my investments be reviewed?",
          answer:
            "We typically conduct formal annual reviews, though we monitor portfolios continuously. You're welcome to contact us at any time if your circumstances change or you have questions. For wealth management clients, we may meet more frequently depending on your needs.",
        },
      ],
    },
    {
      category: "Inheritance Tax & Estate Planning",
      questions: [
        {
          question: "Do you provide inheritance tax advice?",
          answer:
            "Yes, Inheritance Tax (IHT) planning is a core part of our service. We help you structure your assets and make use of exemptions and reliefs to potentially reduce the IHT liability on your estate, protecting your wealth for future generations.",
        },
        {
          question: "Can you help with trust planning?",
          answer:
            "Yes, trusts can be a powerful tool in estate planning. We work alongside solicitors to advise on the most appropriate trust structures to meet your objectives, whether for inheritance tax planning, protecting assets, or providing for family members.",
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
          question: "Do you arrange private medical insurance?",
          answer:
            "Yes, we arrange comprehensive private medical insurance for individuals, families and businesses. As independent brokers, we compare policies from all leading insurers to find the right cover at the right price.",
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
              Find answers to common questions about financial planning, our
              services, and how Bartlett Wealth Management can help you achieve
              your financial goals.
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
              <Link href="/bartlett-wealth/contact" className="btn-accent">
                Contact Us
              </Link>
              <a
                href="tel:01132585711"
                className="btn-outline"
              >
                Call 0113 258 5711
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
            our qualified advisers at our Leeds, London or Manchester office.
          </p>
          <Link href="/bartlett-wealth/contact" className="btn-accent">
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> Bartlett Wealth Management
              Limited is authorised and regulated by the Financial Conduct Authority
              (FCA No. 114800). The information on this page is for general guidance
              only and does not constitute financial advice. Individual circumstances
              may vary.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
