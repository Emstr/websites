import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Financial Planning Questions Answered",
  description: "Frequently asked questions about financial planning, investments, pensions, and our services. Get answers from Integral Financial Planning.",
  openGraph: { title: "FAQ | Integral Financial Planning", description: "Common questions about financial advice, investments, pensions, and working with an independent financial adviser." },
};

export default function FAQPage() {
  const faqs = [
    { category: "About Our Services", questions: [
      { question: "What does a financial adviser do?", answer: "A financial adviser helps you make informed decisions about your money. We analyse your situation, understand your goals, and create personalised strategies for investments, pensions, tax planning, and protection." },
      { question: "Why should I use an independent financial adviser?", answer: "Independent financial advisers like us are not tied to any product provider. This means we can recommend the best solutions from the entire market, based solely on what's best for you." },
      { question: "Are you regulated?", answer: "Yes, Integral Financial Planning is authorised and regulated by the Financial Conduct Authority (FCA). You're protected by the Financial Services Compensation Scheme (FSCS) and have access to the Financial Ombudsman Service." },
      { question: "Do you offer a free initial consultation?", answer: "Yes, we offer a complimentary initial consultation with no obligation. This meeting allows us to understand your situation and goals, while you can decide if we're the right fit." },
    ]},
    { category: "Investment & Pensions", questions: [
      { question: "What is the minimum investment amount?", answer: "We generally work with clients who have investable assets of £50,000 or more, or those making regular contributions. However, we're happy to discuss your situation as every client is different." },
      { question: "Should I consolidate my old pensions?", answer: "It depends on your circumstances. Consolidating can make management easier and reduce charges, but some older pensions have valuable benefits. We'll analyse all your pensions and recommend the best approach." },
      { question: "How often will my investments be reviewed?", answer: "We conduct formal annual reviews, though we monitor portfolios continuously. You're welcome to contact us at any time if your circumstances change." },
      { question: "Can you help with ethical investments?", answer: "Absolutely. We offer ethical, sustainable, and ESG investment options that align with your values without compromising on financial objectives." },
    ]},
    { category: "Tax & Protection", questions: [
      { question: "How can you help reduce my tax bill?", answer: "We use various legitimate strategies including ISA allowances, pension contributions, and tax-efficient investments like VCTs and EIS. We also consider Capital Gains Tax and Inheritance Tax planning." },
      { question: "Do I need life insurance?", answer: "If anyone depends on your income, life insurance is essential. We'll assess your needs and find appropriate cover at competitive rates." },
      { question: "Do you provide inheritance tax advice?", answer: "Yes, IHT planning is a key part of our service. We help structure your assets and use exemptions to potentially reduce the IHT liability on your estate." },
    ]},
    { category: "Fees & Charges", questions: [
      { question: "How do you charge for your services?", answer: "We offer both fee-based and commission-based options. Our fees are always explained clearly upfront before any work begins. Initial consultations are free." },
      { question: "Are there any hidden charges?", answer: "Absolutely not. Transparency is one of our core values. All fees and charges will be clearly explained in writing before you commit to anything." },
    ]},
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((category) => category.questions.map((faq) => ({
      "@type": "Question", name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    }))),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-200 leading-relaxed">Find answers to common questions about financial planning, our services, and how we can help you.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-accent"></div>{category.category}</h2>
                <div className="space-y-1">
                  {category.questions.map((faq, faqIndex) => (
                    <details key={faqIndex} className="group bg-gray-50 rounded-sm overflow-hidden">
                      <summary className="faq-question p-6 list-none cursor-pointer">
                        <span className="flex-1 pr-4">{faq.question}</span>
                        <svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </summary>
                      <div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Still Have Questions?</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">We&apos;re here to help. Please don&apos;t hesitate to get in touch.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/integral-financial-planning/contact" className="btn-accent">Contact Us</Link>
              <a href="tel:01159532359" className="btn-outline">Call 0115 953 2359</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p><strong>Important Notice:</strong> Integral Financial Planning is authorised and regulated by the Financial Conduct Authority. The information on this page is for general guidance only.</p>
          </div>
        </div>
      </section>
    </>
  );
}
