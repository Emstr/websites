import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Apostille & Legalisation Services',
  description:
    'Professional apostille and embassy legalisation services in Camden, London. Get your notarised documents authenticated for use abroad. Standard and same-day options available.',
};

export default function LegalisationPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Apostille & Legalisation</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Get your notarised documents officially authenticated for use in countries
            around the world.
          </p>
        </div>
      </section>

      {/* What is Legalisation */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-primary mb-6">
              What is Document Legalisation?
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              When you need to use a notarised document in another country, that country&apos;s
              authorities will often require proof that the notary who signed it is genuine
              and authorised.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Legalisation is the process of obtaining official confirmation that a notary&apos;s
              signature and seal are authentic. This is done through either an <strong>Apostille</strong> (for
              Hague Convention countries) or <strong>Embassy Legalisation</strong> (for other countries).
            </p>
            <p className="text-lg text-gray-600">
              My notary signature and seal legalises documents, and I can then arrange for
              the additional authentication required by your destination country.
            </p>
          </div>
        </div>
      </section>

      {/* Two Types */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Types of Legalisation
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Apostille */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Apostille</h3>
              <p className="text-gray-600 mb-4">
                An Apostille is a certificate issued by the Foreign, Commonwealth & Development
                Office (FCDO) that confirms the notary&apos;s credentials are valid.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Required for:</strong> Countries that are members of the Hague Apostille
                Convention (over 120 countries including USA, Australia, most of Europe, and many others).
              </p>
              <p className="text-gray-600">
                Often, an apostille is all you need. It&apos;s widely accepted and is the simpler
                of the two processes.
              </p>
            </div>

            {/* Embassy Legalisation */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Embassy Legalisation</h3>
              <p className="text-gray-600 mb-4">
                For countries that are not members of the Hague Convention, documents must
                be legalised by the relevant embassy or consulate.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Required for:</strong> Non-Hague countries including China, UAE, Saudi Arabia,
                Qatar, and several others.
              </p>
              <p className="text-gray-600">
                This process typically takes longer and involves additional steps, but
                I can guide you through the requirements for your specific destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            How the Process Works
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Document Notarisation
                  </h3>
                  <p className="text-gray-600">
                    First, I notarise your documents by verifying your identity, witnessing
                    your signature, and applying my official notary seal.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Apostille Application
                  </h3>
                  <p className="text-gray-600">
                    For Hague Convention countries, the notarised document is submitted to
                    the FCDO to obtain an Apostille certificate.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Embassy Legalisation (if required)
                  </h3>
                  <p className="text-gray-600">
                    For non-Hague countries, the document is then submitted to the relevant
                    embassy or consulate for their authentication.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Document Return
                  </h3>
                  <p className="text-gray-600">
                    Once complete, your fully legalised documents are returned to you,
                    ready for use in your destination country.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timelines */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Processing Times
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-4">Standard Apostille Service</h3>
              <p className="text-3xl font-bold text-accent mb-2">3 working days</p>
              <p className="text-gray-600">
                Processed through an agent at the Milton Keynes office. Suitable for
                most requirements where timing is not urgent.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-4">Premium Same-Day Service</h3>
              <p className="text-3xl font-bold text-accent mb-2">Same day</p>
              <p className="text-gray-600">
                Available for business customers who need urgent processing.
                Additional fees apply for this expedited service.
              </p>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-8 max-w-2xl mx-auto">
            Embassy legalisation timelines vary depending on the specific embassy,
            typically ranging from 1-4 weeks. I can advise on expected timeframes
            for your destination country.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Documents Legalised?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact me to discuss your requirements. I can advise on exactly what
            legalisation is needed for your destination country and provide a quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/camden-notary/quote"
              className="inline-block bg-accent hover:bg-amber-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/camden-notary/contact"
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors border border-white/30"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
