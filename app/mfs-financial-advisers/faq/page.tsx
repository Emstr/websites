import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Financial Planning Questions Answered",
  description:
    "Frequently asked questions about financial planning, investments, pensions, and our services. Get answers from MFS Independent Financial Advisers, Chartered Financial Planners in Wimbledon.",
  openGraph: {
    title: "FAQ | MFS Independent Financial Advisers",
    description:
      "Common questions about financial advice, investments, pensions, and working with a Chartered independent financial adviser.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "About MFS",
      questions: [
        {
          question: "What does it mean to be a Chartered Financial Planner?",
          answer:
            "Chartered Financial Planner is the gold standard designation in financial advice, awarded by the Chartered Insurance Institute (CII). It signifies that our advisers have achieved the highest level of professional qualifications, adhere to a strict code of ethics, and commit to ongoing professional development. When you work with MFS, you can be confident you are receiving advice from the most qualified professionals in the industry.",
        },
        {
          question: "Why should I use an independent financial adviser?",
          answer:
            "Independent financial advisers (IFAs) like MFS are not tied to any product provider. This means we search the whole of market to find the best solutions for your individual needs, rather than being restricted to a specific company's products. Our advice is based solely on what is best for you, giving you genuine peace of mind.",
        },
        {
          question: "Are you regulated?",
          answer:
            "Yes, MFS Independent Financial Advisers is authorised and regulated by the Financial Conduct Authority (FCA). This means we adhere to strict professional standards, and you are protected by the Financial Services Compensation Scheme (FSCS) and have access to the Financial Ombudsman Service if needed.",
        },
        {
          question: "Do you offer a free initial consultation?",
          answer:
            "Yes, we offer a complimentary initial consultation with no obligation. This meeting allows us to understand your situation and goals, while you can meet our team and decide if we are the right fit. There is no pressure to proceed with any paid services.",
        },
        {
          question: "How long has MFS been established?",
          answer:
            "MFS was founded in 1964, giving us over 60 years of experience in independent financial advice. Our longevity reflects the trust our clients place in us and our commitment to providing consistent, high-quality financial planning across generations.",
        },
      ],
    },
    {
      category: "Investment & Pension Planning",
      questions: [
        {
          question: "What types of investment strategies do you offer?",
          answer:
            "We offer both income and growth strategies tailored to your goals and risk profile. Whether you need regular income from your investments or are focused on long-term capital growth, our Chartered Financial Planners design bespoke portfolios using the best options from across the entire market.",
        },
        {
          question: "Can you help with SIPP planning?",
          answer:
            "Absolutely. SIPPs (Self-Invested Personal Pensions) are one of our specialist areas. We advise on SIPP setup, fund selection, contribution strategies, and drawdown planning. Our pension specialists have decades of experience helping clients maximise their retirement savings through SIPPs.",
        },
        {
          question: "What is a trustee wind-up and do you handle these?",
          answer:
            "A trustee wind-up occurs when a company pension scheme is being closed and the benefits need to be transferred or secured for members. This is a complex area requiring specialist knowledge. Our pension team has extensive experience managing trustee wind-ups, ensuring members' benefits are properly protected throughout the process.",
        },
        {
          question: "How often will my investments be reviewed?",
          answer:
            "We typically conduct formal annual reviews, though we monitor portfolios continuously. You are welcome to contact your dedicated adviser at any time if circumstances change or you have questions. For lifetime financial planning clients, we may meet more frequently depending on your needs.",
        },
      ],
    },
    {
      category: "Tax & Inheritance Planning",
      questions: [
        {
          question: "How can you help reduce my tax bill?",
          answer:
            "We use various legitimate strategies to minimise your tax liability, including maximising ISA allowances, pension contributions, and using tax-efficient investments like VCTs and EIS. We also consider Capital Gains Tax planning and business owner tax strategies as part of our holistic approach.",
        },
        {
          question: "Do you provide inheritance tax advice?",
          answer:
            "Yes, inheritance tax mitigation is one of our core services. We develop comprehensive strategies using trusts, annual exemptions, Business Property Relief, insurance solutions, and other reliefs to protect your wealth and ensure as much as possible passes to your chosen beneficiaries.",
        },
        {
          question: "What is cash flow modelling?",
          answer:
            "Cash flow modelling is a powerful planning tool that projects your financial future based on your current assets, income, expenditure, and goals. It allows us to stress-test different scenarios - such as early retirement, large purchases, or market downturns - so you can make informed decisions about your financial future with confidence.",
        },
      ],
    },
    {
      category: "Corporate Services",
      questions: [
        {
          question: "Can you set up a group pension scheme for my company?",
          answer:
            "Yes, we design and manage group pension schemes for businesses of all sizes. This includes auto-enrolment compliance, provider selection, employee communication, and ongoing scheme management. We help you offer competitive benefits while meeting your regulatory obligations.",
        },
        {
          question: "What is key man protection?",
          answer:
            "Key man protection (also called key person insurance) provides financial security for your business if a critical employee or director becomes seriously ill or passes away. The policy pays a lump sum to the business, helping cover recruitment costs, lost revenue, or loan repayments. We assess your business needs and source the most suitable cover.",
        },
        {
          question: "Do you offer employee benefits consulting?",
          answer:
            "Yes, we help businesses design attractive employee benefits packages that aid recruitment and retention. This includes group pensions, group life cover, income protection, private medical insurance, and other benefits. We work with you to create a package that suits your budget and your employees' needs.",
        },
      ],
    },
    {
      category: "Fees & Getting Started",
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
          question: "What should I bring to my first meeting?",
          answer:
            "It is helpful to bring any existing pension statements, investment valuations, insurance policies, and details of your income and expenditure. However, do not worry if you do not have everything - we can guide you on what information we need. The most important thing is to come with your questions and goals in mind.",
        },
        {
          question: "Are there any hidden charges?",
          answer:
            "Absolutely not. Transparency is one of our core values. All fees and charges, including any product costs, will be clearly explained in writing before you commit to anything. You will always know exactly what you are paying for.",
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
              services, and how MFS can help you achieve your financial goals.
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
              <Link href="/mfs-financial-advisers/contact" className="btn-accent">
                Contact Us
              </Link>
              <a
                href="tel:02085436244"
                className="btn-outline"
              >
                Call 020 8543 6244
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
            of our Chartered Financial Planners at our Wimbledon office.
          </p>
          <Link href="/mfs-financial-advisers/contact" className="btn-accent">
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> MFS Independent Financial Advisers
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
