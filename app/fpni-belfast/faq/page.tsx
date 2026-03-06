import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Financial Planning Questions Answered",
  description:
    "Frequently asked questions about financial planning, pensions, investments, and our services in Belfast and Lisburn. Get answers from Financial Professionals (NI) Ltd.",
  openGraph: {
    title: "FAQ | Financial Professionals (NI) Ltd",
    description:
      "Common questions about financial advice, pensions, investments, and working with a financial adviser in Northern Ireland.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "About Our Services",
      questions: [
        {
          question: "What does Financial Professionals NI do?",
          answer:
            "We are trusted financial advisers based in Belfast and Lisburn, providing expert advice on personal pensions, auto enrolment, savings & investments, and corporate financial services. Our team are recognised media experts, regularly contributing to the Belfast Telegraph and Downtown Radio.",
        },
        {
          question: "Are you regulated?",
          answer:
            "Yes, Financial Professionals (NI) Ltd is authorised and regulated by the Financial Conduct Authority (FCA). This means we adhere to strict professional standards, and you are protected by the Financial Services Compensation Scheme (FSCS) and have access to the Financial Ombudsman Service if needed.",
        },
        {
          question: "Do you offer a free initial consultation?",
          answer:
            "Yes, we offer a complimentary initial consultation with no obligation at either our Belfast or Lisburn office. This meeting allows us to understand your situation and goals, whilst you can get to know us and decide if we are the right fit for your needs.",
        },
        {
          question: "Which office should I visit?",
          answer:
            "You can visit whichever office is most convenient for you. Our Belfast office (028 9036 4477) serves the greater Belfast area, whilst our Lisburn office (028 9261 0536) is convenient for clients in Lisburn and the wider County Antrim area. We offer the same expert service at both locations.",
        },
      ],
    },
    {
      category: "Pensions",
      questions: [
        {
          question: "Should I consolidate my old pensions?",
          answer:
            "It depends on your individual circumstances. Consolidating multiple pensions can make management easier and potentially reduce charges, but it is not always the right choice. Some older pensions have valuable benefits that would be lost on transfer. We will analyse all your pensions and recommend the best approach for you.",
        },
        {
          question: "What is pension drawdown?",
          answer:
            "Pension drawdown allows you to take flexible income from your pension whilst keeping the rest invested. This gives you more control than buying an annuity, but requires careful management. We can advise on the most suitable income strategy for your retirement.",
        },
        {
          question: "When should I start pension planning?",
          answer:
            "The earlier the better! Thanks to compound growth, starting pension contributions in your 20s or 30s can make a huge difference to your retirement pot. However, it is never too late to start, and we can help you maximise your pension savings at any age.",
        },
        {
          question: "Can you help with my workplace pension?",
          answer:
            "Absolutely. We advise on all types of pension schemes including workplace pensions, SIPPs, and defined benefit (final salary) schemes. We can help you understand your options and make the most of your employer contributions.",
        },
      ],
    },
    {
      category: "Auto Enrolment",
      questions: [
        {
          question: "What is auto enrolment and does it apply to my business?",
          answer:
            "Auto enrolment requires all UK employers to automatically enrol eligible workers into a workplace pension scheme and make contributions. If you employ at least one person in Northern Ireland, you have auto enrolment duties. We can help you understand and meet your obligations.",
        },
        {
          question: "How can you help my business with auto enrolment?",
          answer:
            "We handle everything from initial scheme setup to ongoing management, including provider selection, employee communications, compliance monitoring, and re-enrolment. We make the process simple so you can focus on running your business.",
        },
        {
          question: "What are the penalties for non-compliance with auto enrolment?",
          answer:
            "The Pensions Regulator can issue fixed penalty notices of 400 per day for non-compliance, escalating to significant daily penalties based on your number of employees. We ensure your business stays fully compliant and avoids any penalties.",
        },
      ],
    },
    {
      category: "Savings & Investments",
      questions: [
        {
          question: "What is the minimum investment amount you work with?",
          answer:
            "We generally work with clients who have investable assets of 25,000 or more, or those making regular contributions. However, we are happy to discuss your situation as every client is different.",
        },
        {
          question: "How do you determine my risk profile?",
          answer:
            "We use a comprehensive risk assessment process that considers your investment objectives, time horizon, financial situation, and attitude to risk. This involves detailed discussions and questionnaires to ensure we truly understand your comfort level with investment volatility.",
        },
        {
          question: "How often will my investments be reviewed?",
          answer:
            "We typically conduct formal annual reviews, though we monitor portfolios continuously. You are welcome to contact us at any time if your circumstances change or you have questions.",
        },
      ],
    },
    {
      category: "Northern Ireland Specific",
      questions: [
        {
          question: "Do you serve clients across all of Northern Ireland?",
          answer:
            "Yes, whilst our offices are in Belfast and Lisburn, we serve clients from across Northern Ireland. We can also arrange consultations via video call for clients who prefer not to travel.",
        },
        {
          question: "Are there any financial planning differences specific to Northern Ireland?",
          answer:
            "The core financial regulations and products are the same across the UK. However, there can be differences in property-related matters and certain business structures. Our deep knowledge of the Northern Ireland market means we understand these nuances and can advise accordingly.",
        },
        {
          question: "I have seen you in the Belfast Telegraph. Can I trust your advice?",
          answer:
            "Our regular contributions to the Belfast Telegraph and Downtown Radio reflect the trust that Northern Ireland media places in our expertise. However, our advice is always personalised to your individual circumstances and regulated by the FCA, regardless of our media profile.",
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
            "No, your initial consultation is completely free and without obligation. We use this meeting to understand your needs and explain how we can help. You will only incur fees if you decide to proceed with our advice and services.",
        },
        {
          question: "Are there any hidden charges?",
          answer:
            "Absolutely not. Transparency is one of our core values. All fees and charges, including any product costs, will be clearly explained in writing before you commit to anything.",
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
              services, and how we can help you achieve your financial goals
              in Northern Ireland.
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
              We&apos;re here to help. If you couldn&apos;t find the answer you were
              looking for, please don&apos;t hesitate to get in touch. Our team will
              be happy to assist you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/fpni-belfast/contact" className="btn-accent">
                Contact Us
              </Link>
              <a
                href="tel:02890364477"
                className="btn-outline"
              >
                Call 028 9036 4477
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
            one of our expert advisers at our Belfast or Lisburn office.
          </p>
          <Link href="/fpni-belfast/contact" className="btn-accent">
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> Financial Professionals (NI) Ltd
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
