import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Common questions about independent financial advice, pensions, investments, and working with Goddard Perry Consulting in Croydon.',
};

const faqs = [
  {
    id: 'what-is-ifa',
    question: 'What is an independent financial adviser (IFA)?',
    answer: `An independent financial adviser (IFA) is a professional who provides unbiased financial advice. Unlike advisers tied to a specific bank or insurance company, an IFA can recommend products from the entire market.

**Why independence matters:**
• We search the whole market — not just one provider's products
• Our recommendations are based solely on what's right for you
• We have no commercial incentive to recommend one product over another
• We are regulated by the Financial Conduct Authority (FCA)

At Goddard Perry, our independence is fundamental to everything we do. When we make a recommendation, you can trust it is based on your needs alone.`,
  },
  {
    id: 'how-much-does-it-cost',
    question: 'How much does financial advice cost?',
    answer: `We offer a free initial consultation with no obligation. This gives us the opportunity to understand your situation and explain how we can help.

**Our fee structure:**
• Initial consultation: Free and without obligation
• Ongoing fees: Clearly defined and agreed in writing before work begins
• No hidden charges or unexpected costs
• Fees can be paid directly or facilitated through your investment

We believe in complete transparency. Before any chargeable work begins, you will receive a written fee agreement that sets out exactly what you will pay and what services you will receive.`,
  },
  {
    id: 'what-services',
    question: 'What services do you offer?',
    answer: `We provide comprehensive financial planning for individuals and businesses:

**For Individuals:**
• Pension planning and consolidation
• Investment management (ISAs, bonds, portfolios)
• Retirement planning and income strategies
• Wealth management and tax planning
• Protection — life assurance, critical illness, income protection

**For Businesses:**
• Group pension schemes and auto-enrolment
• Group life assurance and income protection
• Private medical insurance
• Employee financial wellbeing programmes
• Key person and shareholder protection`,
  },
  {
    id: 'do-i-need-adviser',
    question: 'Do I really need a financial adviser?',
    answer: `While not everyone needs ongoing financial advice, there are key moments in life when professional guidance can make a significant difference:

**You should consider advice if you:**
• Are approaching retirement and need to decide how to access your pension
• Have multiple pension pots and want to consolidate them
• Have received an inheritance or lump sum and want to invest wisely
• Need to plan for inheritance tax
• Want to protect your family with the right insurance
• Run a business and need employee benefit solutions

The complexity of financial products and tax rules means that the right advice can save you money and help you avoid costly mistakes. Our initial consultation is free, so there's no risk in exploring whether advice is right for you.`,
  },
  {
    id: 'how-do-you-work',
    question: 'What happens when I become a client?',
    answer: `We follow a clear, structured process:

**Step 1 — Free Consultation**
We meet to understand your situation, goals, and concerns. This is free and without obligation.

**Step 2 — Fact Find & Analysis**
We gather detailed information about your finances, needs, and objectives. We research the market to find the most suitable solutions.

**Step 3 — Recommendations**
We present our recommendations in a clear, written report. We explain our reasoning and answer any questions.

**Step 4 — Implementation**
Once you're happy to proceed, we implement the agreed plan on your behalf.

**Step 5 — Ongoing Review**
We monitor your plan regularly and adjust it as your circumstances change. You'll receive regular updates and annual reviews.`,
  },
  {
    id: 'are-you-regulated',
    question: 'Are you regulated? Is my money safe?',
    answer: `Yes. Goddard Perry Consulting Limited is authorised and regulated by the Financial Conduct Authority (FCA number 125376).

**What this means for you:**
• We meet strict FCA standards for competence and ethical behaviour
• Your investments are held by regulated product providers, not by us directly
• You are protected by the Financial Services Compensation Scheme (FSCS)
• You have the right to complain to the Financial Ombudsman Service
• We carry professional indemnity insurance

You can verify our registration on the FCA Register at register.fca.org.uk by searching for our firm name or FCA number 125376.`,
  },
  {
    id: 'who-do-you-serve',
    question: 'Where are you based and who do you advise?',
    answer: `We are based in Croydon, South London, and primarily serve clients across:

**Local Areas:**
• Croydon, South Croydon, Purley, Coulsdon
• Sanderstead, Selsdon, Kenley
• Bromley, Sutton, and wider South London

**Nationwide:**
We also advise clients across the UK. Many of our meetings can be conducted by phone or video call, so distance is not a barrier to receiving our advice.

**Corporate Clients:**
We provide employee benefit solutions to businesses of all sizes, from small local firms to national companies.`,
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer.replace(/\n/g, ' ').replace(/\*\*/g, ''),
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f2b46] to-[#1a3c5e] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Answers to common questions about independent financial advice, our services,
              and working with Goddard Perry Consulting.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqs.map((faq, index) => (
              <article key={faq.id} id={faq.id} className="scroll-mt-24">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0f2b46] text-white font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#0f2b46] mb-4">
                      {faq.question}
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-600">
                      {faq.answer.split('\n\n').map((paragraph, pIndex) => {
                        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                          return (
                            <h3 key={pIndex} className="text-lg font-semibold text-[#0f2b46] mt-6 mb-2">
                              {paragraph.replace(/\*\*/g, '')}
                            </h3>
                          );
                        }
                        if (paragraph.startsWith('•')) {
                          const items = paragraph.split('\n').filter(item => item.trim());
                          return (
                            <ul key={pIndex} className="list-disc pl-6 mb-4 space-y-1">
                              {items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item.replace('• ', '')}</li>
                              ))}
                            </ul>
                          );
                        }
                        return <p key={pIndex} className="mb-4">{paragraph}</p>;
                      })}
                    </div>
                  </div>
                </div>
                {index < faqs.length - 1 && <hr className="mt-12 border-gray-200" />}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0f2b46] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a free, no-obligation consultation and we&apos;ll be happy to answer any questions
            about our services and how we can help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/goddard-perry/contact"
              className="bg-[#c4952b] hover:bg-[#b3862a] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Book Free Consultation
            </Link>
            <a
              href="tel:02086033700"
              className="border-2 border-white hover:bg-white hover:text-[#0f2b46] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call: 020 8603 3700
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
