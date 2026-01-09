import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Notary Public Wandsworth',
  description: 'Common questions about notary public services in London. Learn about costs, the notarisation process, differences between notaries and solicitors, and more.',
};

const faqs = [
  {
    id: 'cost-notarise-document-uk',
    question: 'How much does it cost to notarise a document in the UK?',
    answer: `The cost of notarising a document in the UK varies depending on the complexity of the work and time required. At Notary Public Wandsworth, the minimum fee is £80 (no VAT) for up to twenty minutes of notary time. Pro-rata rates apply for longer appointments.

Additional factors that may affect the cost include:
• The number of documents requiring notarisation
• Whether legalisation or apostille services are needed
• Complexity of the documents
• Whether a home or business visit is required (additional fee applies)
• Urgency of the request

For an accurate quote, please contact us with details of your specific requirements. We provide transparent pricing and will always confirm fees before proceeding with any work.`,
  },
  {
    id: 'notary-services-islington',
    question: 'What services does a notary public offer in Wandsworth?',
    answer: `A notary public in Wandsworth offers a wide range of document authentication and certification services for both businesses and individuals. These include:

**For Businesses:**
• Notarising powers of attorney for companies, LLPs, and partnerships
• Certifying certificates of incorporation and articles of association
• Company certificates of good standing
• Certified copies of board resolutions, minutes, and reports
• Authentication of commercial contracts
• International affidavits and statutory declarations
• Intellectual property and trademark documentation
• Corporate bank account authentication

**For Individuals:**
• Certified copies of passports and identity documents
• Powers of attorney
• Statutory declarations and sworn statements
• Single status declarations for marriage abroad
• Parental consent for children travelling
• Academic credential certification
• Change of name deeds
• Immigration and visa documentation

**Additional Services:**
• Apostille and legalisation services for documents to be used abroad
• Home and business visits (additional fee)
• Evening and weekend appointments when necessary`,
  },
  {
    id: 'how-to-notarise-document-uk',
    question: 'How do I get a document notarised in the UK?',
    answer: `Getting a document notarised in the UK involves the following steps:

**1. Contact a Notary Public**
Reach out to a notary public to discuss your requirements. Explain what documents need notarising and where they will be used. This helps the notary advise on the correct process and provide a quote.

**2. Gather Required Documents**
You will need to bring:
• The original document(s) to be notarised
• Government-issued photo ID (passport or driving licence)
• Proof of current address (utility bill or bank statement dated within 3 months)
• For corporate matters: company incorporation documents and board resolutions

**3. Attend Your Appointment**
During the appointment, the notary will:
• Verify your identity
• Check your legal capacity and authority to sign
• Ensure you understand the document
• Witness your signature
• Apply their official seal and signature

**4. Legalisation (if required)**
If your document is for use abroad, it may need additional authentication through:
• An Apostille from the Foreign, Commonwealth & Development Office (for Hague Convention countries)
• Embassy or consulate legalisation (for non-Hague Convention countries)

The notary can arrange legalisation services on your behalf.`,
  },
  {
    id: 'notary-vs-solicitor',
    question: 'Is a notary the same as a solicitor?',
    answer: `No, a notary public and a solicitor are different legal professionals, although some individuals (like myself) hold both qualifications.

**Key Differences:**

**Notary Public:**
• A small, highly specialised branch of the legal profession
• Primary focus is authenticating documents for international use
• Their duty is to the transaction and the authenticity of documents
• Appointed by the Court of Faculties of the Archbishop of Canterbury
• Their signature and seal are recognised worldwide
• Specialise in certifying documents, witnessing signatures, and administering oaths

**Solicitor:**
• Provides general legal advice and representation
• Acts in the best interests of their client
• Handles a broad range of legal matters (conveyancing, litigation, contracts, etc.)
• Regulated by the Solicitors Regulation Authority
• Their work is primarily for use within the UK legal system

**When You Need a Notary:**
You typically need a notary when documents must be used abroad or when a foreign authority specifically requires notarisation. A solicitor's certification is usually sufficient for domestic UK purposes, but international transactions often require a notary's authentication.`,
  },
  {
    id: 'cost-attest-documents',
    question: 'How much does it cost to attest documents?',
    answer: `Document attestation costs depend on the type of attestation required and the destination country. Here's a breakdown:

**Notarisation Fees:**
• Basic notarisation: from £80 for up to 20 minutes
• Additional documents: pro-rata charges apply
• Complex documents: higher fees may apply

**Apostille Fees:**
• FCDO Apostille: government fee plus notary's handling charge
• Typically required for documents going to countries in the Hague Convention

**Embassy Legalisation:**
• Varies by embassy/consulate
• Additional handling fees apply
• Required for countries not in the Hague Convention

**Total Cost Example:**
For a simple document requiring notarisation and apostille, you might expect to pay:
• Notary fee: from £80
• Apostille service: additional fee
• Courier/handling: if applicable

We recommend contacting us with your specific requirements for an accurate quote. Costs can vary significantly based on:
• Number of documents
• Destination country requirements
• Urgency of the request
• Whether home/office visits are needed`,
  },
  {
    id: 'what-is-apostille',
    question: 'What is an Apostille and when do I need one?',
    answer: `An Apostille is a certificate that authenticates the origin of a public document, including notarised documents. It's issued by the Foreign, Commonwealth & Development Office (FCDO) in the UK.

**When You Need an Apostille:**
You need an Apostille when your document will be used in a country that is a member of the Hague Apostille Convention. This includes most European countries, the USA, Australia, and many others.

**How It Works:**
1. Your document is first notarised by a notary public
2. The notarised document is then sent to the FCDO
3. The FCDO verifies the notary's signature and issues an Apostille certificate
4. The Apostille confirms the document is authentic and can be accepted abroad

**Countries Requiring Apostille:**
Over 120 countries accept Apostilles, including:
• United States, Canada, Australia
• Most European Union countries
• Japan, South Korea, India
• Brazil, Argentina, Mexico
• And many more

**Non-Hague Convention Countries:**
Some countries (like UAE, China, and Qatar) are not members of the Hague Convention. Documents for these countries require embassy or consulate legalisation instead of an Apostille.

I can arrange the complete apostille and legalisation process on your behalf.`,
  },
  {
    id: 'what-is-legalisation',
    question: 'What is the difference between legalisation and notarisation?',
    answer: `Notarisation and legalisation are related but distinct processes in authenticating documents for international use.

**Notarisation:**
• The first step in the authentication process
• Performed by a notary public
• Involves verifying your identity, witnessing your signature, and certifying the document
• The notary applies their official seal and signature
• Confirms that relevant checks have been carried out and the document has been properly signed

**Legalisation:**
• The second step, following notarisation
• Provides a "double check" confirming the notary's signature is genuine
• Performed by official government bodies
• Two types:
  - **Apostille**: Issued by the FCDO for Hague Convention countries
  - **Embassy Legalisation**: Required for non-Hague Convention countries

**The Complete Process:**
1. **Notarisation** - Notary authenticates the document
2. **Apostille/Legalisation** - Government body verifies the notary's credentials
3. **Embassy Legalisation** (if required) - Some countries require additional embassy authentication

**Why Legalisation Matters:**
Legalisation confirms to the receiving country that the notary who authenticated your document is legitimate and recognised by the UK government. Without it, foreign authorities may not accept your notarised documents.`,
  },
  {
    id: 'id-requirements-notary',
    question: 'What identification do I need to bring to a notary?',
    answer: `Under the Money Laundering Regulations 2017, notaries are required to verify your identity before providing services. You must bring:

**Personal Identification (one of the following):**
• Valid passport
• UK driving licence (photocard)
• National identity card (for EEA nationals)
• Other government-issued photo ID

**Proof of Address (one of the following, dated within 3 months):**
• Utility bill (gas, electricity, water)
• Bank or building society statement
• Council tax bill
• Mortgage statement

**For Corporate Clients, also bring:**
• Certificate of incorporation
• Memorandum and articles of association
• Board resolution authorising the signatory
• Personal ID for each individual signing

**Important Notes:**
• Original documents are required - photocopies are not acceptable
• All documents must be current and valid
• If documents are in a foreign language, certified translations may be required
• For powers of attorney, you may need additional documentation about the donor

Please contact us before your appointment if you have any questions about the documents you need to bring.`,
  },
  {
    id: 'how-long-notarisation',
    question: 'How long does notarisation take?',
    answer: `The time required for notarisation depends on the complexity of your documents and requirements:

**Simple Notarisation:**
• Single document certification: 15-20 minutes
• Passport copy certification: 15-20 minutes
• Simple statutory declaration: 20-30 minutes

**More Complex Matters:**
• Powers of attorney: 30-45 minutes
• Multiple documents: varies based on quantity
• Corporate documentation: 30-60 minutes or more

**Factors Affecting Time:**
• Number of documents
• Whether documents need to be read and explained
• Complexity of the transaction
• Whether witnesses are required
• Time needed to verify identity and authority

**Legalisation Timeframes:**
If your documents require apostille or embassy legalisation:
• FCDO Apostille: typically 2-5 working days (standard service)
• Embassy legalisation: varies by embassy, can take 1-4 weeks
• Express services may be available at additional cost

**Booking an Appointment:**
For straightforward matters, same-day or next-day appointments are often available. For complex corporate matters, please allow adequate time for preparation.

Contact us with details of your requirements for a more accurate time estimate.`,
  },
  {
    id: 'notary-home-visit',
    question: 'Can a notary come to my home or office?',
    answer: `Yes, I offer home and business visits throughout Wandsworth and surrounding London boroughs for an additional fee.

**Areas Covered:**
• Wandsworth
• City of London
• Hackney
• Camden
• Westminster
• Tower Hamlets
• Southwark

**When Home Visits Are Useful:**
• Elderly or mobility-impaired clients
• Busy professionals who cannot leave the office
• Multiple signatories at one location
• Urgent matters requiring immediate attention
• Confidential corporate transactions

**Appointment Flexibility:**
• Evening appointments available when necessary
• Weekend appointments can be arranged
• Urgent same-day visits may be possible

**Additional Costs:**
Home and business visits incur an additional fee to cover travel time. The exact fee depends on:
• Location
• Time of appointment (out-of-hours may cost more)
• Complexity of the work

Please contact us to discuss your requirements and receive a quote for a home or office visit.`,
  },
];

// Generate JSON-LD for FAQ schema
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
      <section className="bg-gradient-to-br from-[#1a472a] to-[#166534] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Find answers to common questions about notary public services, costs,
              the notarisation process, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {faqs.map((faq) => (
              <a
                key={faq.id}
                href={`#${faq.id}`}
                className="text-sm bg-white px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-[#ec4899] hover:text-[#ec4899] transition-colors"
              >
                {faq.question.length > 40 ? faq.question.substring(0, 40) + '...' : faq.question}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqs.map((faq, index) => (
              <article
                key={faq.id}
                id={faq.id}
                className="scroll-mt-24"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1a472a] text-white font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#1a472a] mb-4">
                      {faq.question}
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-600">
                      {faq.answer.split('\n\n').map((paragraph, pIndex) => {
                        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                          return (
                            <h3 key={pIndex} className="text-lg font-semibold text-[#1a472a] mt-6 mb-2">
                              {paragraph.replace(/\*\*/g, '')}
                            </h3>
                          );
                        }
                        if (paragraph.includes('**')) {
                          const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
                          return (
                            <p key={pIndex} className="mb-4">
                              {parts.map((part, partIndex) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                  return <strong key={partIndex}>{part.replace(/\*\*/g, '')}</strong>;
                                }
                                return part;
                              })}
                            </p>
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
                        if (paragraph.match(/^\d\./)) {
                          const items = paragraph.split('\n').filter(item => item.trim());
                          return (
                            <ol key={pIndex} className="list-decimal pl-6 mb-4 space-y-1">
                              {items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item.replace(/^\d+\.\s*/, '')}</li>
                              ))}
                            </ol>
                          );
                        }
                        return <p key={pIndex} className="mb-4">{paragraph}</p>;
                      })}
                    </div>
                  </div>
                </div>
                {index < faqs.length - 1 && (
                  <hr className="mt-12 border-gray-200" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a472a] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact me to discuss your specific requirements. I&apos;m happy to explain
            the notarisation process and provide a quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#ec4899] hover:bg-[#db2777] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Contact Me
            </Link>
            <a
              href="tel:02072289100"
              className="border-2 border-white hover:bg-white hover:text-[#1a472a] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call: 020 7228 9100
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
