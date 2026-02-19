import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Property Questions Answered",
  description:
    "Frequently asked questions about buying, selling, letting and managing property in Dulwich. Expert answers from Dulwich Property Group.",
  openGraph: {
    title: "FAQ | Dulwich Property Group",
    description: "Common questions about property services in Dulwich, SE21.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Selling Your Property",
      questions: [
        {
          question: "How much is my property worth?",
          answer: "We offer free, no-obligation property valuations for all homeowners in Dulwich and the surrounding areas. Our valuations are based on comprehensive comparable evidence, current market conditions and our deep knowledge of the local micro-markets. Book a valuation online or call us on 020 7946 2345.",
        },
        {
          question: "How long does it take to sell a property in Dulwich?",
          answer: "Dulwich remains one of South East London's most desirable areas, and well-priced properties typically sell within 3-4 weeks. Our average time from listing to offer acceptance is 21 days. However, timescales can vary depending on property type, price band and market conditions.",
        },
        {
          question: "What are your fees for selling a property?",
          answer: "Our sales fees are competitive and transparent. We charge a percentage of the achieved sale price, which is agreed in writing before we begin marketing. There are no upfront costs and no sale, no fee. Contact us for a detailed fee quotation.",
        },
        {
          question: "What marketing do you provide?",
          answer: "Every property benefits from professional photography, detailed floor plans, premium listings on Rightmove, Zoopla and OnTheMarket, social media promotion and our own website. For premium properties, we also offer drone photography, video tours and targeted advertising.",
        },
      ],
    },
    {
      category: "Buying a Property",
      questions: [
        {
          question: "How do I register to receive property alerts?",
          answer: "Contact us by phone, email or through our website to register your requirements. We'll set up personalised property alerts so you're among the first to know when suitable properties come to market. Many of our best properties sell before they reach the portals.",
        },
        {
          question: "Can you recommend solicitors and mortgage brokers?",
          answer: "Yes, we work with a panel of trusted local solicitors and independent mortgage brokers who specialise in the Dulwich market. We're happy to make introductions, though you're under no obligation to use our recommended partners.",
        },
        {
          question: "What should I know about buying in Dulwich?",
          answer: "Dulwich offers excellent schools, beautiful green spaces including Dulwich Park, a vibrant high street on Lordship Lane and excellent transport links. Popular areas include Dulwich Village, East Dulwich and Herne Hill. Our team can guide you through the nuances of each neighbourhood.",
        },
      ],
    },
    {
      category: "Lettings & Landlords",
      questions: [
        {
          question: "What lettings services do you offer?",
          answer: "We offer three tiers of service: Tenant Find Only, Rent Collection, and Full Management. Each includes comprehensive tenant referencing and Right to Rent checks. Our Full Management service covers everything from rent collection and maintenance to inspections and deposit negotiations.",
        },
        {
          question: "How do you reference tenants?",
          answer: "All prospective tenants undergo thorough referencing through an independent referencing agency. This includes credit checks, employment verification, previous landlord references, Right to Rent checks and affordability assessments. We only recommend tenants who pass all checks.",
        },
        {
          question: "What are my legal obligations as a landlord?",
          answer: "Landlords must provide a valid EPC, gas safety certificate, electrical safety certificate (EICR), and comply with deposit protection legislation. You also need to carry out Right to Rent checks and meet fire safety requirements. We handle all compliance as part of our managed service.",
        },
        {
          question: "What rental yield can I expect in Dulwich?",
          answer: "Rental yields in Dulwich typically range from 3.5% to 5% depending on property type and location. Flats tend to offer higher yields while houses offer stronger capital growth. Our investment team can provide a detailed yield analysis for any property you're considering.",
        },
      ],
    },
    {
      category: "Fees & Process",
      questions: [
        {
          question: "Are there any upfront costs?",
          answer: "No. For property sales, we operate on a no sale, no fee basis. You won't pay anything until your property successfully completes. For lettings, our fees are clearly explained upfront and comply with the Tenant Fees Act 2019.",
        },
        {
          question: "How long is your contract period?",
          answer: "Our standard sole agency agreement is for an initial period of 12 weeks, after which it can be terminated with two weeks' written notice. We're confident in our service and don't believe in tying clients into lengthy contracts.",
        },
        {
          question: "Do you offer Energy Performance Certificates?",
          answer: "Yes, we can arrange EPCs through our approved assessors at competitive rates. An EPC is a legal requirement before marketing a property for sale or rent, and must achieve a minimum rating of E for rental properties.",
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
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      }))
    ),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Find answers to common questions about buying, selling, letting and
              managing property in Dulwich and South East London.
            </p>
          </div>
        </div>
      </section>

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
                    <details key={faqIndex} className="group bg-gray-50 rounded-sm overflow-hidden">
                      <summary className="faq-question p-6 list-none cursor-pointer">
                        <span className="flex-1 pr-4">{faq.question}</span>
                        <svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
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
            <p className="text-lg text-gray-600 mb-8">
              We&apos;re here to help. Pop into our Lordship Lane office, give us a
              call or send us an email and our team will be happy to assist.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/estate-agent-dulwich/contact" className="btn-accent">Contact Us</Link>
              <a href="tel:02079462345" className="btn-outline">Call 020 7946 2345</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Your Free Valuation?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Find out what your property is worth in today&apos;s market with a
            free, no-obligation valuation from our local experts.
          </p>
          <Link href="/estate-agent-dulwich/contact" className="btn-accent">Book Your Free Valuation</Link>
        </div>
      </section>

      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Professional Standards:</strong> Dulwich Property Group is a member of
              NAEA Propertymark. The information on this page is for general guidance
              only. Property values and market conditions can change. Individual
              circumstances may vary.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
