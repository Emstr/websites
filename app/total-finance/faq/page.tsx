import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Frequently Asked Questions About Financial Advice",
  description:
    "Find answers to common questions about mortgages, protection insurance, pensions, and working with a financial adviser. Expert guidance from Total Finance.",
  alternates: {
    canonical: "/faq/",
  },
};

export default function FAQPage() {
  const faqCategories = [
    {
      category: "Working With Us",
      questions: [
        {
          question: "Is the initial consultation really free?",
          answer:
            "Yes, absolutely. Your initial consultation is completely free with no obligation. We'll discuss your financial situation, understand your goals, and explain how we can help. You're under no pressure to proceed with any recommendations.",
        },
        {
          question: "How do you get paid?",
          answer:
            "We're transparent about our fees. Depending on the service, we may charge a fee directly or receive commission from the product provider. In many cases, there's no direct cost to you as we're paid by the lender or insurance company. We'll always explain our charges clearly before you proceed.",
        },
        {
          question: "What does 'independent' mean?",
          answer:
            "As independent financial advisers, we're not tied to any particular bank, building society, or insurance company. This means we can search the whole market to find products that genuinely suit your needs, rather than being limited to a specific provider's range.",
        },
        {
          question: "Are you regulated?",
          answer:
            "Yes, Total Finance (UK) Ltd is authorised and regulated by the Financial Conduct Authority (FCA). This provides you with important protections, including access to the Financial Ombudsman Service and the Financial Services Compensation Scheme.",
        },
        {
          question: "Can I meet you at my home?",
          answer:
            "Yes, we offer home visits for your convenience. We can also meet at our Bromley office or arrange a video call if you prefer. We work around your schedule, including evenings and weekends by appointment.",
        },
      ],
    },
    {
      category: "Mortgages",
      questions: [
        {
          question: "How much can I borrow for a mortgage?",
          answer:
            "The amount you can borrow depends on several factors including your income, existing debts, credit history, and the property you're buying. Lenders typically offer 4-5 times your annual income, but this varies. We'll help you understand your borrowing capacity during your consultation.",
        },
        {
          question: "What deposit do I need?",
          answer:
            "Most lenders require a minimum deposit of 5-10% of the property value. However, a larger deposit (15-25%) will typically give you access to better interest rates. We can advise on schemes like Help to Buy that may help if you have a smaller deposit.",
        },
        {
          question: "Can you help if I have bad credit?",
          answer:
            "Yes, we have access to specialist lenders who consider applicants with adverse credit history. Whether you've had CCJs, defaults, or been declined elsewhere, we can explore your options. The key is to be honest about your credit history so we can find appropriate solutions.",
        },
        {
          question: "What is remortgaging and should I consider it?",
          answer:
            "Remortgaging means switching your existing mortgage to a new deal, either with your current lender or a different one. You might remortgage to get a better interest rate, release equity from your property, or consolidate debts. We can assess whether remortgaging would benefit you.",
        },
        {
          question: "How long does the mortgage process take?",
          answer:
            "A typical mortgage application takes 4-6 weeks from application to offer, though this can vary. Once you have an offer, completing the purchase depends on the conveyancing process. We'll guide you through each step and keep you informed of progress.",
        },
      ],
    },
    {
      category: "Protection Insurance",
      questions: [
        {
          question: "Do I really need life insurance?",
          answer:
            "If anyone depends on your income - such as a partner, children, or anyone you support financially - life insurance is important. It ensures they're protected financially if you were to pass away. It's especially important if you have a mortgage or other debts.",
        },
        {
          question: "What's the difference between life insurance and critical illness cover?",
          answer:
            "Life insurance pays out when you die. Critical illness cover pays a lump sum if you're diagnosed with a serious illness specified in the policy (like cancer, heart attack, or stroke). Many people have both for comprehensive protection.",
        },
        {
          question: "What is income protection?",
          answer:
            "Income protection insurance pays you a regular income if you can't work due to illness or injury. Unlike critical illness cover (which pays a lump sum for specific conditions), income protection covers most illnesses and injuries that prevent you from working.",
        },
        {
          question: "How much life cover do I need?",
          answer:
            "This depends on your circumstances - your mortgage, other debts, number of dependants, and their needs. A common rule of thumb is 10 times your annual income, plus enough to cover your mortgage. We'll help you calculate the right level of cover for your situation.",
        },
        {
          question: "Will my premium increase over time?",
          answer:
            "This depends on the type of policy. Level term policies have a fixed premium for the policy term. Reviewable policies may have lower initial premiums but can increase at review points. We'll explain your options so you can make an informed choice.",
        },
      ],
    },
    {
      category: "Pensions",
      questions: [
        {
          question: "When should I start saving for retirement?",
          answer:
            "The earlier the better. Thanks to compound growth, even small contributions made in your 20s can grow significantly by retirement. However, it's never too late to start - we can help you maximise your retirement savings whatever your age.",
        },
        {
          question: "What is pension consolidation?",
          answer:
            "If you've worked for several employers, you may have multiple pension pots. Consolidating these into one pension can make them easier to manage and potentially reduce fees. However, it's not always the right choice - some pensions have valuable benefits that could be lost. We'll assess your situation.",
        },
        {
          question: "Can I access my pension before 55?",
          answer:
            "Generally, you cannot access your pension savings until age 55 (rising to 57 from 2028). There are limited exceptions for ill health. Be wary of anyone offering early pension access - these are usually scams that could result in significant tax charges and loss of your savings.",
        },
        {
          question: "What are my options at retirement?",
          answer:
            "You have several options: take up to 25% as a tax-free lump sum, buy an annuity for guaranteed income, enter drawdown to take flexible income, or a combination. The right choice depends on your circumstances, health, and attitude to risk. We provide detailed retirement planning advice.",
        },
        {
          question: "Should I transfer my final salary pension?",
          answer:
            "Final salary (defined benefit) pensions are valuable and transferring them is usually not recommended. However, there can be circumstances where a transfer might be appropriate. Due to the complexity and risks involved, you're required to take advice before transferring a pension worth more than 30,000.",
        },
      ],
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((category) =>
      category.questions.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.answer,
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
      <section className="gradient-navy text-white py-20">
        <div className="container-custom px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-200">
              Find answers to common questions about our services, mortgages,
              protection insurance, and pensions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Navigation */}
      <section className="bg-light-gray py-8 sticky top-[140px] z-40 border-b">
        <div className="container-custom px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {faqCategories.map((category) => (
              <a
                key={category.category}
                href={`#${category.category.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-4 py-2 bg-white rounded-lg text-navy font-medium hover:bg-primary hover:text-white transition-colors shadow-sm"
              >
                {category.category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            {faqCategories.map((category) => (
              <div
                key={category.category}
                id={category.category.toLowerCase().replace(/\s+/g, "-")}
                className="scroll-mt-[220px]"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-primary rounded-full"></span>
                  {category.category}
                </h2>
                <div className="space-y-6">
                  {category.questions.map((item, index) => (
                    <details
                      key={index}
                      className="group bg-light-gray rounded-xl overflow-hidden"
                    >
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                        <h3 className="text-lg font-semibold text-navy pr-4">
                          {item.question}
                        </h3>
                        <svg
                          className="w-6 h-6 text-primary flex-shrink-0 transition-transform group-open:rotate-180"
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
                        <p className="text-slate leading-relaxed">
                          {item.answer}
                        </p>
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
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-slate mb-8">
              Can&apos;t find the answer you&apos;re looking for? Our team is here to
              help. Get in touch and we&apos;ll be happy to assist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/" className="btn-primary">
                Contact Us
              </Link>
              <a href="tel:02086957548" className="btn-secondary">
                Call 020 8695 7548
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-primary py-20">
        <div className="container-custom px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Expert Advice?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book your free consultation today. We&apos;ll answer all your questions
            and help you make informed financial decisions.
          </p>
          <Link href="/contact/" className="btn-accent text-lg">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
