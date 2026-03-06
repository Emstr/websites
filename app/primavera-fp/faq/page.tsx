import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Chartered Financial Planning Questions Answered",
  description:
    "Frequently asked questions about Chartered financial planning, investments, pensions, mortgages, and our services. Get answers from Primavera Financial Partners.",
  openGraph: {
    title: "FAQ | Primavera Financial Partners",
    description:
      "Common questions about Chartered financial advice, investments, pensions, mortgages, and working with an independent financial planner.",
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
            "A Chartered Financial Planner helps you make informed decisions about your money. We analyse your current financial situation, understand your goals, and create personalised strategies for investments, pensions, mortgages, protection, and retirement. Chartered Status means we have achieved the highest level of professional qualification, placing us in the top 5% of financial advisers in the UK.",
        },
        {
          question: "What does Chartered Status mean?",
          answer:
            "Chartered Status is the gold standard in financial planning, awarded by the Chartered Insurance Institute (CII). It demonstrates that our firm meets the most rigorous standards of professional competence, ethical behaviour, and commitment to ongoing development. Only the top 5% of financial advice firms hold Chartered Status. For you, it means confidence that you are receiving the highest quality advice.",
        },
        {
          question: "Why should I use an independent financial adviser?",
          answer:
            "Independent financial advisers (IFAs) like Primavera are not tied to any product provider. This means we can recommend the best solutions from the entire market, rather than being limited to a specific company's products. Our advice is based solely on what's best for you.",
        },
        {
          question: "Are you regulated?",
          answer:
            "Yes, Primavera Financial Partners LLP is authorised and regulated by the Financial Conduct Authority (FCA). This means we adhere to strict professional standards, and you're protected by the Financial Services Compensation Scheme (FSCS) and have access to the Financial Ombudsman Service if needed.",
        },
        {
          question: "Do you offer a free initial consultation?",
          answer:
            "Yes, we offer a complimentary initial consultation with no obligation. This meeting allows us to understand your situation and goals, while you can get to know us and decide if we're the right fit. There's no pressure to proceed with any paid services.",
        },
      ],
    },
    {
      category: "Investments & Pensions",
      questions: [
        {
          question: "What is the minimum investment amount you work with?",
          answer:
            "We welcome clients at all stages of their financial journey. Whether you have a lump sum to invest, want advice on existing pensions, or are looking for mortgage guidance, please get in touch. We'll discuss your circumstances during the free initial consultation.",
        },
        {
          question: "Should I consolidate my old pensions?",
          answer:
            "It depends on your individual circumstances. Consolidating multiple pensions can make management easier and potentially reduce charges, but it's not always the right choice. Some older pensions have valuable benefits that would be lost on transfer. Our Chartered advisers will analyse all your pensions and recommend the best approach for you.",
        },
        {
          question: "How often will my investments be reviewed?",
          answer:
            "We typically conduct formal annual reviews, though we monitor portfolios continuously. You're welcome to contact us at any time if your circumstances change or you have questions. Our ongoing service ensures your plan stays on track.",
        },
        {
          question: "Can you help with ethical or sustainable investments?",
          answer:
            "Absolutely. We offer a range of ethical, sustainable, and ESG (Environmental, Social, and Governance) investment options. We can build a portfolio that aligns with your values without compromising on your financial objectives.",
        },
      ],
    },
    {
      category: "Mortgages",
      questions: [
        {
          question: "Can you help first-time buyers?",
          answer:
            "Yes, we specialise in helping first-time buyers navigate the mortgage market. We'll search across the whole market to find the most suitable mortgage, guide you through the application process, and ensure you have the right protection in place.",
        },
        {
          question: "When should I think about remortgaging?",
          answer:
            "You should review your mortgage when your current deal is coming to an end, when interest rates change significantly, or when your circumstances change (e.g. you want to release equity). We recommend getting in touch at least 3-6 months before your deal ends.",
        },
        {
          question: "Do you charge for mortgage advice?",
          answer:
            "Our mortgage advice fees will be discussed and agreed upon during your initial consultation. We are transparent about all charges and will confirm everything in writing before proceeding.",
        },
      ],
    },
    {
      category: "Chartered Status & Qualifications",
      questions: [
        {
          question: "How is Chartered Status different from being FCA regulated?",
          answer:
            "FCA regulation is a legal requirement for all financial advice firms. Chartered Status goes far beyond this — it's a voluntary commitment to the highest standards of professional excellence. Think of FCA regulation as the baseline requirement, and Chartered Status as the gold standard that only the top 5% achieve.",
        },
        {
          question: "What qualifications do your advisers hold?",
          answer:
            "Our advisers hold the Chartered Financial Planner designation, which is the highest level of qualification awarded by the Chartered Insurance Institute (CII). This requires passing advanced examinations, demonstrating extensive experience, and committing to ongoing professional development.",
        },
        {
          question: "What does Chartered Status mean for me as a client?",
          answer:
            "For you, it means peace of mind. You can be confident that your adviser has demonstrated the highest levels of knowledge, professionalism, and ethical conduct. Chartered firms must also commit to ongoing training and development, ensuring advice is always up to date.",
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
            "Absolutely not. Transparency is one of our core values, reinforced by our Chartered commitment. All fees and charges, including any product costs, will be clearly explained in writing before you commit to anything. You'll always know exactly what you're paying for.",
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
              Find answers to common questions about Chartered financial planning, our
              services, and how we can help you achieve your financial goals.
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
              for, please don&apos;t hesitate to get in touch. Our Chartered team will be
              happy to assist you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/primavera-fp/contact" className="btn-accent">
                Contact Us
              </Link>
              <a
                href="tel:02085329652"
                className="btn-outline"
              >
                Call 020 8532 9652
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
            our Chartered financial planners at our Wanstead office.
          </p>
          <Link href="/primavera-fp/contact" className="btn-accent">
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> Primavera Financial Partners
              LLP is authorised and regulated by the Financial Conduct Authority. The
              information on this page is for general guidance only and does not
              constitute financial advice. Individual circumstances may vary.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
