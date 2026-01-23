import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Common questions about notary public services in Tower Hamlets, London. Learn about costs, the notarisation process, and more.',
};

const faqs = [
  {
    id: 'cost-notarise-document',
    question: 'How much does it cost to notarise a document?',
    answer: `The cost of notarising a document varies depending on the complexity of the work and time required. We offer competitive, transparent pricing with no hidden fees.

Factors that may affect the cost include:
• The number of documents requiring notarisation
• Whether legalisation or apostille services are needed
• Complexity of the documents
• Whether a home or business visit is required
• Urgency of the request

For an accurate quote, please use our instant quote calculator or contact us with details of your specific requirements.`,
  },
  {
    id: 'what-services-offered',
    question: 'What services does a notary public offer?',
    answer: `A notary public offers a wide range of document authentication and certification services:

**For Businesses:**
• Powers of attorney for companies
• Certificates of Incorporation
• Company resolutions and minutes
• Commercial contracts
• Bank account authentication

**For Individuals:**
• Certified copies of passports
• Powers of attorney
• Statutory declarations
• Single status declarations for marriage
• Travel permissions for children
• Academic credential certification

**Additional Services:**
• Apostille and legalisation services for documents to be used abroad`,
  },
  {
    id: 'how-to-notarise',
    question: 'How do I get a document notarised?',
    answer: `Getting a document notarised involves the following steps:

**1. Contact Us**
Reach out to discuss your requirements. Explain what documents need notarising and where they will be used.

**2. Gather Required Documents**
You will need to bring:
• The original document(s) to be notarised
• Government-issued photo ID (passport or driving licence)
• Proof of current address (utility bill or bank statement dated within 3 months)

**3. Attend Your Appointment**
During the appointment, we will:
• Verify your identity
• Check your legal capacity and authority to sign
• Witness your signature
• Apply the official seal and signature

**4. Legalisation (if required)**
If your document is for use abroad, it may need additional authentication through an Apostille or embassy legalisation.`,
  },
  {
    id: 'what-is-apostille',
    question: 'What is an Apostille and when do I need one?',
    answer: `An Apostille is a certificate that authenticates the origin of a public document. It's issued by the Foreign, Commonwealth & Development Office (FCDO) in the UK.

**When You Need an Apostille:**
You need an Apostille when your document will be used in a country that is a member of the Hague Apostille Convention. This includes most European countries, the USA, Australia, and many others.

**How It Works:**
1. Your document is first notarised
2. The notarised document is sent to the FCDO
3. The FCDO verifies and issues an Apostille certificate
4. The document is now accepted abroad

**Non-Hague Convention Countries:**
Some countries require embassy or consulate legalisation instead of an Apostille. We can assist with both processes.`,
  },
  {
    id: 'id-requirements',
    question: 'What identification do I need to bring?',
    answer: `Under the Money Laundering Regulations 2017, you must provide identification:

**Personal Identification (one of):**
• Valid passport
• UK driving licence (photocard)
• National identity card

**Proof of Address (dated within 3 months):**
• Utility bill
• Bank statement
• Council tax bill

**For Corporate Clients:**
• Certificate of incorporation
• Board resolution authorising the signatory
• Personal ID for each individual signing

All documents must be originals - photocopies are not acceptable.`,
  },
  {
    id: 'how-long',
    question: 'How long does notarisation take?',
    answer: `The time required depends on the complexity:

**Simple Notarisation:**
• Single document certification: 15-20 minutes
• Passport copy certification: 15-20 minutes

**More Complex Matters:**
• Powers of attorney: 30-45 minutes
• Multiple documents: varies based on quantity
• Corporate documentation: 30-60 minutes

**Legalisation Timeframes:**
• FCDO Apostille: typically 2-5 working days
• Embassy legalisation: varies, can take 1-4 weeks

For straightforward matters, same-day or next-day appointments are often available.`,
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
      <section className="bg-gradient-to-br from-[#1e3d59] to-[#0d1f2d] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Find answers to common questions about notary public services, costs,
              and the notarisation process.
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
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1e3d59] text-white font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#1e3d59] mb-4">
                      {faq.question}
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-600">
                      {faq.answer.split('\n\n').map((paragraph, pIndex) => {
                        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                          return (
                            <h3 key={pIndex} className="text-lg font-semibold text-[#1e3d59] mt-6 mb-2">
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
      <section className="py-16 bg-[#1e3d59] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your specific requirements. We&apos;re happy to explain
            the notarisation process and provide a quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#ff6e40] hover:bg-[#e65a30] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:02072475476"
              className="border-2 border-white hover:bg-white hover:text-[#1e3d59] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call: 020 7247 5476
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
