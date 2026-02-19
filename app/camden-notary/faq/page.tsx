import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Common questions about notary public services in Camden, London. Learn about costs, what documents you need, how long notarisation takes, and more.',
};

const faqs = [
  {
    question: 'How much does it cost to notarise a document in the UK?',
    answer:
      'The minimum fee is £85 for straightforward matters. The hourly rate is £185 for more complex work. No VAT is charged. Additional costs may apply for legalisation (Apostille or embassy fees), translation, courier services, and home or office visits. For an accurate quote, contact me with details of your requirements.',
  },
  {
    question: 'What services does a notary public offer in Camden?',
    answer:
      'A notary public in Camden offers document authentication and certification services for both businesses and individuals. For businesses: powers of attorney, company document authentication, commercial mortgages, and banking documentation. For individuals: certified copies of passports, powers of attorney, statutory declarations, marriage capacity certificates, and academic credential certification.',
  },
  {
    question: 'How do I get a document notarised in the UK?',
    answer:
      'First, contact a notary public to discuss your requirements and receive a quote. Then gather the required documents: the original document(s) to be notarised, government-issued photo ID (passport or driving licence), and proof of address dated within 3 months. Attend your appointment where the notary will verify your identity, witness your signature, and apply their official seal. If required, legalisation (Apostille or embassy) can then be arranged.',
  },
  {
    question: 'Is a notary the same as a solicitor?',
    answer:
      'No. A notary public is a highly specialised legal professional focused on authenticating documents for international use. Notaries are appointed by the Court of Faculties of the Archbishop of Canterbury. A solicitor provides general legal advice and representation and is regulated by the Solicitors Regulation Authority. You typically need a notary when documents must be recognised and used in another country.',
  },
  {
    question: 'What is an Apostille?',
    answer:
      'An Apostille is a certificate issued by the Foreign, Commonwealth & Development Office (FCDO) that authenticates the origin of a notarised document. It confirms that the notary\'s signature and seal are genuine. An Apostille is required when documents will be used in countries that are members of the Hague Apostille Convention (over 120 countries). For non-Hague countries, embassy or consulate legalisation is required instead.',
  },
  {
    question: 'What is the difference between legalisation and notarisation?',
    answer:
      'Notarisation is performed by a notary public who verifies your identity, witnesses your signature, and certifies the document with their official seal. Legalisation is the subsequent step where government bodies (the FCDO for Apostille, or embassies/consulates) verify the notary\'s credentials. Legalisation confirms to foreign authorities that the notary is legitimate and recognised in the UK.',
  },
  {
    question: 'What identification do I need to bring to a notary appointment?',
    answer:
      'You need to bring: Personal photo ID such as a valid passport, UK driving licence, or national identity card. Proof of address such as a utility bill, bank statement, or council tax bill dated within the last 3 months. Corporate clients should also bring certificate of incorporation, articles of association, and any relevant board resolutions authorising the transaction.',
  },
  {
    question: 'How long does notarisation take?',
    answer:
      'Simple document certification typically takes 15-20 minutes. Powers of attorney usually take 30-45 minutes. Corporate documentation may take 30-60 minutes or more depending on complexity. For legalisation, the standard FCDO Apostille service takes approximately 3 working days. Same-day premium service is available for business customers. Embassy legalisation times vary by embassy, typically 1-4 weeks.',
  },
  {
    question: 'Can a notary come to my home or office?',
    answer:
      'Yes. I offer home and office visits throughout Camden, Central London, and the surrounding areas for an additional fee. This is particularly useful for clients who cannot travel, need witnesses present at a specific location, or for corporate clients. Evening and weekend appointments can also be arranged when necessary.',
  },
  {
    question: 'Where is Camden Notary located?',
    answer:
      'The office is located at Hamilton House, 4th Floor, Mabledon Place, London WC1H 9BB. This is extremely convenient for transport, being just 4 minutes walk from Kings Cross and St Pancras stations, and 3 minutes from Euston station. The location makes it easily accessible from across London and for clients travelling from other parts of the UK or internationally.',
  },
];

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Common questions about notary public services in Camden and Central London.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-primary mb-4">
                  {faq.question}
                </h2>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get in touch and I&apos;ll be happy to help with your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/camden-notary/contact"
              className="inline-block bg-accent hover:bg-amber-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              Contact Me
            </Link>
            <Link
              href="/camden-notary/quote"
              className="inline-block bg-primary hover:bg-secondary text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              Get an Instant Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
