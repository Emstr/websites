import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Watch Repair Questions Answered",
  description:
    "Frequently asked questions about watch repair, servicing and restoration at Mayfair Horologists. Get answers about costs, timescales, brands and our guarantee.",
  openGraph: {
    title: "FAQ | Mayfair Horologists",
    description:
      "Common questions about watch repair, servicing and restoration at our Burlington Arcade workshop in Mayfair.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Watch Servicing",
      questions: [
        {
          question: "How often should I have my watch serviced?",
          answer:
            "For mechanical watches, we recommend a full service every 4-5 years. Quartz watches generally need a battery change every 2-3 years, with a full service every 5-7 years. However, if you notice your watch losing or gaining time significantly, or if the crown feels different when winding, it is best to bring it in sooner rather than later.",
        },
        {
          question: "How long does a full service take?",
          answer:
            "A standard mechanical service typically takes 2-3 weeks, depending on the complexity of the movement and parts availability. More complex repairs or restorations can take 4-6 weeks. Battery replacements and strap changes are usually completed while you wait or within the same day.",
        },
        {
          question: "Do you service all watch brands?",
          answer:
            "Yes, we service all major Swiss, Japanese, German and British watch brands. We specialise in Rolex, Omega, Breitling, Tag Heuer, Cartier, IWC and Tudor, but we are equally experienced with Seiko, Longines, Tissot and many others. If you are unsure whether we can help with your particular watch, please contact us.",
        },
        {
          question: "Will my watch be insured while in your care?",
          answer:
            "Yes, all watches in our workshop are fully insured. We maintain comprehensive specialist insurance that covers your timepiece from the moment you hand it over until you collect it. We also provide a secure receipt detailing your watch and its condition upon arrival.",
        },
      ],
    },
    {
      category: "Costs & Pricing",
      questions: [
        {
          question: "How much does a watch service cost?",
          answer:
            "Service costs depend on the brand, model and complexity of the movement. A basic quartz service starts from around 80 pounds, while a full mechanical service typically ranges from 200 to 500 pounds. Rolex and other luxury brands may be higher due to the specialist parts and expertise required. We always provide a detailed quote before starting any work.",
        },
        {
          question: "Do you charge for assessments?",
          answer:
            "No, initial assessments are free. You can bring your watch in during our opening hours and we will examine it, discuss what work is needed, and provide a clear quote. There is no obligation to proceed, and you will never be charged simply for asking our opinion.",
        },
        {
          question: "Do you require a deposit?",
          answer:
            "For standard services and repairs, no deposit is required. For extensive restoration work or where specialist parts need to be ordered, we may ask for a deposit to cover the parts cost. This will always be discussed and agreed with you before we proceed.",
        },
      ],
    },
    {
      category: "Repairs & Restoration",
      questions: [
        {
          question: "Can you repair a water-damaged watch?",
          answer:
            "In most cases, yes. Water damage is one of the more common issues we deal with. The key is to bring the watch to us as quickly as possible after the exposure. We will disassemble the movement, clean and dry every component, replace any corroded parts, and reseal the case. The longer water sits inside a watch, the greater the damage, so prompt action is essential.",
        },
        {
          question: "Can you restore a vintage watch without altering its originality?",
          answer:
            "Absolutely, and this is something we take very seriously. We understand that originality is paramount to collectors. Where possible, we repair rather than replace original components. When parts must be replaced, we source period-correct components. We will always discuss our approach with you before beginning any vintage restoration work.",
        },
        {
          question: "Do you replace watch crystals?",
          answer:
            "Yes, we replace mineral, sapphire and acrylic crystals for virtually all brands and models. We source crystals to the exact specification of your watch, including any anti-reflective coatings. The crystal is carefully fitted and the watch is then pressure-tested to ensure water resistance is maintained.",
        },
        {
          question: "Can you source parts for discontinued watches?",
          answer:
            "We maintain an extensive network of specialist parts suppliers and can source components for most discontinued models. For particularly rare watches, we may be able to fabricate certain parts in our workshop. We will always be upfront about parts availability and any alternative solutions.",
        },
      ],
    },
    {
      category: "Guarantee & Aftercare",
      questions: [
        {
          question: "What guarantee do you offer?",
          answer:
            "All our services and repairs are backed by a comprehensive 12-month guarantee. If any issue arises related to the work we have carried out within that period, we will rectify it at no additional cost. This guarantee covers both parts and labour.",
        },
        {
          question: "What should I do if my watch develops a problem after servicing?",
          answer:
            "Simply bring it back to our workshop. If the issue is related to the service we performed, it will be covered under our 12-month guarantee and we will address it promptly at no charge. If the problem is unrelated to our previous work, we will diagnose it and provide a separate quote.",
        },
        {
          question: "Do you offer any aftercare advice?",
          answer:
            "Yes, when you collect your watch we provide care guidance specific to your timepiece. General recommendations include avoiding extreme temperatures, keeping your watch away from strong magnetic fields, ensuring crowns are properly pushed in or screwed down before water exposure, and having your watch serviced at the recommended intervals.",
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
              Find answers to common questions about our watch repair services,
              pricing, timescales and guarantee.
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
              We&apos;re always happy to help. Pop into our Burlington Arcade
              workshop, give us a ring, or drop us an email and we&apos;ll get
              back to you promptly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/watch-repair-mayfair/contact" className="btn-accent">
                Contact Us
              </Link>
              <a href="tel:02079468850" className="btn-outline">
                Call 020 7946 8850
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Book Your Watch In?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today to arrange a service or drop into our workshop
            for a free assessment of your timepiece.
          </p>
          <Link href="/watch-repair-mayfair/contact" className="btn-accent">
            Book a Service
          </Link>
        </div>
      </section>
    </>
  );
}
