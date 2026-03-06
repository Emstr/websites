import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Financial Planning, Mortgages & Insurance Questions",
  description:
    "Frequently asked questions about financial planning, mortgage advice, and insurance services. Get answers from Digney Grant Financial Planning in Newry.",
  openGraph: {
    title: "FAQ | Digney Grant Financial Planning",
    description:
      "Common questions about financial advice, mortgages, insurance, and working with an independent financial adviser in Newry.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "About Our Services",
      questions: [
        {
          question: "What services does Digney Grant offer?",
          answer:
            "We are a one-stop shop for financial services, offering financial planning, mortgage advice, personal insurance (life, critical illness, home, motor), commercial insurance (public liability, employer's liability, property), and independent financial advice. Our team of 2 financial advisers and 2 mortgage brokers covers all your needs under one roof.",
        },
        {
          question: "Why should I use an independent financial adviser?",
          answer:
            "Independent financial advisers (IFAs) like Digney Grant are not tied to any product provider. This means we can recommend the best solutions from the entire market, rather than being limited to a specific company's products. Our advice is based solely on what's best for you.",
        },
        {
          question: "Are you regulated?",
          answer:
            "Yes, Digney Grant Financial Planning Ltd is authorised and regulated by the Financial Conduct Authority (FCA). Our FCA Number is 702579. This means we adhere to strict professional standards, and you're protected by the Financial Services Compensation Scheme (FSCS) and have access to the Financial Ombudsman Service if needed.",
        },
        {
          question: "Do you offer a free initial consultation?",
          answer:
            "Yes, we offer a complimentary initial consultation with no obligation. This meeting allows us to understand your situation and goals, while you can get to know us and decide if we're the right fit for your needs. There's no pressure to proceed with any paid services.",
        },
      ],
    },
    {
      category: "Mortgage Advice",
      questions: [
        {
          question: "Can you help first-time buyers?",
          answer:
            "Absolutely. Our dedicated mortgage brokers specialise in helping first-time buyers navigate the mortgage process. We search the whole market to find you the best deal and guide you through every step, from your initial application to completion.",
        },
        {
          question: "Do you charge for mortgage advice?",
          answer:
            "Our fee structure will be explained clearly before any work begins. We will always be transparent about how we are paid, whether through a fee, commission from the lender, or a combination of both. Your initial mortgage consultation is free.",
        },
        {
          question: "Can you help with remortgaging?",
          answer:
            "Yes, remortgaging is one of our core services. Whether you're looking for a better rate, want to release equity, or your current deal is expiring, our brokers will search the whole market to find you the best available option.",
        },
        {
          question: "What about self-employed mortgages?",
          answer:
            "We have extensive experience helping self-employed clients and contractors secure mortgages. We understand the additional documentation required and know which lenders are most favourable to self-employed applicants.",
        },
      ],
    },
    {
      category: "Insurance",
      questions: [
        {
          question: "What types of personal insurance do you offer?",
          answer:
            "We offer a comprehensive range of personal insurance products including life assurance, critical illness cover, income protection, home and contents insurance, motor insurance, and travel insurance. We search the market to find the right cover at the right price.",
        },
        {
          question: "Can you arrange commercial insurance for my business?",
          answer:
            "Yes, we provide tailored business insurance solutions including public liability, employer's liability, professional indemnity, commercial property, fleet insurance, and business interruption cover. We work with businesses of all sizes across Northern Ireland.",
        },
        {
          question: "Do I need life insurance?",
          answer:
            "If anyone depends on your income, life insurance is essential. It ensures your family can maintain their lifestyle, pay the mortgage, and meet financial goals if you pass away. We'll assess your needs and find appropriate cover at competitive rates.",
        },
      ],
    },
    {
      category: "Financial Planning & Pensions",
      questions: [
        {
          question: "When should I start planning for retirement?",
          answer:
            "The earlier the better. Thanks to compound growth, starting pension contributions in your 20s or 30s can make a significant difference to your retirement pot. However, it's never too late to start, and we can help you maximise your pension savings at any age.",
        },
        {
          question: "Should I consolidate my old pensions?",
          answer:
            "It depends on your individual circumstances. Consolidating multiple pensions can make management easier and potentially reduce charges, but it's not always the right choice. Some older pensions have valuable benefits that would be lost on transfer. We'll analyse all your pensions and recommend the best approach.",
        },
        {
          question: "Can you help with inheritance tax planning?",
          answer:
            "Yes, inheritance tax (IHT) planning is a key part of our financial planning service. We can help you structure your assets and make use of exemptions and reliefs to potentially reduce the IHT liability on your estate.",
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
              Find answers to common questions about financial planning, mortgages,
              insurance, and how we can help you achieve your financial goals.
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
              <Link href="/digney-grant/contact" className="btn-accent">
                Contact Us
              </Link>
              <a
                href="tel:02830828880"
                className="btn-outline"
              >
                Call 028 3082 8880
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
            our expert advisers at our Newry office.
          </p>
          <Link href="/digney-grant/contact" className="btn-accent">
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> Digney Grant Financial Planning
              Ltd is authorised and regulated by the Financial Conduct Authority.
              FCA Number: 702579. The information on this page is for general guidance
              only and does not constitute financial advice. Individual circumstances
              may vary.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
