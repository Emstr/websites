import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Financial Planning Questions Answered",
  description:
    "Frequently asked questions about financial planning, pensions, investments, mortgages and our services. Get answers from IFA Centre, Chartered Financial Planners in Glasgow and Paisley.",
  openGraph: {
    title: "FAQ | IFA Centre — Chartered Financial Planners",
    description:
      "Common questions about financial advice, pensions, investments, mortgages and working with Chartered Financial Planners in Glasgow and Paisley.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "About Our Services",
      questions: [
        {
          question: "What does a Chartered Financial Planner do?",
          answer:
            "A Chartered Financial Planner helps you make informed decisions about your money. We hold the gold standard qualification in the profession, awarded by the Chartered Insurance Institute. We analyse your current financial situation, understand your goals, and create personalised strategies for pensions, investments, mortgages, protection, and wealth management. We also provide ongoing support and adjust your plan as your circumstances change.",
        },
        {
          question: "Why should I use an independent financial adviser?",
          answer:
            "Independent financial advisers (IFAs) like IFA Centre are not tied to any product provider. This means we can recommend the best solutions from the entire market, rather than being limited to a specific company's products. Our advice is based solely on what is best for you.",
        },
        {
          question: "Are you regulated?",
          answer:
            "Yes, IFA Centre is authorised and regulated by the Financial Conduct Authority (FCA). We are also Chartered Financial Planners, which means we adhere to the highest professional and ethical standards. You are protected by the Financial Services Compensation Scheme (FSCS) and have access to the Financial Ombudsman Service if needed.",
        },
        {
          question: "Do you offer a free initial consultation?",
          answer:
            "Yes, we offer a complimentary initial consultation with no obligation at either our Glasgow or Paisley office, or by video call. This meeting allows us to understand your situation and goals, while you can get to know us and decide if we are the right fit for your needs.",
        },
        {
          question: "What does Chartered status mean?",
          answer:
            "Chartered Financial Planner status is the gold standard in financial planning, awarded by the Chartered Insurance Institute (CII). It demonstrates the highest levels of professional qualification, ethical commitment, and ongoing development. Only a select number of firms hold this prestigious title.",
        },
      ],
    },
    {
      category: "Pensions & Retirement",
      questions: [
        {
          question: "Should I consolidate my old pensions?",
          answer:
            "It depends on your individual circumstances. Consolidating multiple pensions can make management easier and potentially reduce charges, but it is not always the right choice. Some older pensions have valuable benefits that would be lost on transfer. We will analyse all your pensions and recommend the best approach for you.",
        },
        {
          question: "What is pension drawdown?",
          answer:
            "Pension drawdown allows you to take flexible income from your pension while keeping the rest invested. This gives you more control than buying an annuity, but requires careful management. Our Chartered team can advise on the most suitable income strategy for your retirement.",
        },
        {
          question: "When should I start pension planning?",
          answer:
            "The earlier the better. Thanks to compound growth, starting pension contributions in your 20s or 30s can make a significant difference to your retirement pot. However, it is never too late to start, and we can help you maximise your pension savings at any age.",
        },
      ],
    },
    {
      category: "Investments",
      questions: [
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
            "We typically conduct formal annual reviews, though we monitor portfolios continuously. You are welcome to contact us at any time if your circumstances change or you have questions.",
        },
      ],
    },
    {
      category: "Mortgages",
      questions: [
        {
          question: "Can you help with first-time buyer mortgages in Scotland?",
          answer:
            "Yes, we specialise in helping first-time buyers across Scotland navigate the mortgage process. We search the whole of the market to find the best deal for your circumstances and guide you through every step from initial application to completion.",
        },
        {
          question: "Do you offer remortgage advice?",
          answer:
            "Absolutely. If your current mortgage deal is ending or you want to explore better rates, we can review your options and find a more suitable deal. We also consider whether equity release or further advance might be appropriate for your situation.",
        },
        {
          question: "Is your mortgage advice independent?",
          answer:
            "Yes, as independent mortgage advisers, we are not tied to any particular lender. We search across the whole market, including exclusive deals not available on the high street, to find the right mortgage for you.",
        },
      ],
    },
    {
      category: "Protection & Insurance",
      questions: [
        {
          question: "Do I need life insurance?",
          answer:
            "If anyone depends on your income, life insurance is essential. It ensures your family can maintain their lifestyle, pay the mortgage, and meet financial goals if you pass away. We will assess your needs and find appropriate cover at competitive rates.",
        },
        {
          question: "What is critical illness cover?",
          answer:
            "Critical illness cover pays a tax-free lump sum if you are diagnosed with a specified serious illness, such as cancer, heart attack, or stroke. This can help cover medical costs, adapt your home, or simply provide financial security during recovery.",
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
            "Absolutely not. Transparency is one of our core values as Chartered Financial Planners. All fees and charges, including any product costs, will be clearly explained in writing before you commit to anything. You will always know exactly what you are paying for.",
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
              services, and how our Chartered team can help you achieve your
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
              We are here to help. If you could not find the answer you were
              looking for, please do not hesitate to get in touch. Our Chartered
              team will be happy to assist you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/ifa-centre-glasgow/contact" className="btn-accent">
                Contact Us
              </Link>
              <a
                href="tel:01418485454"
                className="btn-outline"
              >
                Call 0141 848 5454
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
            Book a complimentary meeting to discuss your financial goals with one
            of our Chartered advisers at our Glasgow or Paisley office.
          </p>
          <Link href="/ifa-centre-glasgow/contact" className="btn-accent">
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> IFA Centre is authorised and
              regulated by the Financial Conduct Authority. The information on this
              page is for general guidance only and does not constitute financial
              advice. Individual circumstances may vary.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
