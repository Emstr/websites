import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Tattoo Questions Answered",
  description:
    "Frequently asked questions about getting tattooed at Shoreditch Ink Studio. Pricing, aftercare, booking, hygiene, and more.",
  openGraph: {
    title: "FAQ | Shoreditch Ink Studio",
    description:
      "Common questions about tattoos, booking, pricing, aftercare, and our studio policies.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Booking & Consultations",
      questions: [
        {
          question: "How do I book a consultation?",
          answer:
            "You can book a consultation by calling us on 020 7946 3210, emailing studio@shoreditchink.co.uk, filling out the contact form on our website, or simply walking into the studio during opening hours. Consultations are always free and carry no obligation.",
        },
        {
          question: "Do you accept walk-ins?",
          answer:
            "Yes, we welcome walk-ins for consultations and smaller pieces, subject to artist availability. For larger projects or to guarantee a specific artist, we recommend booking in advance. Walk-in availability varies, so calling ahead is always a good idea.",
        },
        {
          question: "How far in advance should I book?",
          answer:
            "It depends on the artist and the complexity of the piece. For small to medium tattoos, we can often fit you in within a couple of weeks. For larger projects or our most popular artists, waiting times can be four to six weeks. We recommend getting in touch early to discuss timelines.",
        },
        {
          question: "Do I need to pay a deposit?",
          answer:
            "Yes, a deposit is required to secure your booking. The amount varies depending on the size of the project but is typically between 50 and 100 pounds. This is deducted from the final price. Deposits are non-refundable if you cancel with less than 48 hours notice.",
        },
      ],
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          question: "How much does a tattoo cost?",
          answer:
            "Pricing depends on the size, detail, placement, and time required. Small pieces typically start from around 80 pounds, while larger custom work is priced by the hour or by the day. We provide accurate quotes during your consultation so there are no surprises.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept cash, debit cards, and credit cards. Payment is due at the end of each session. For multi-session projects, you pay per session rather than the full amount upfront.",
        },
        {
          question: "Do you charge for design time?",
          answer:
            "Design time is included in your tattoo price. We do not charge separately for creating your custom artwork. However, if you request extensive revisions beyond what is reasonable, an additional design fee may apply. We will always discuss this with you beforehand.",
        },
      ],
    },
    {
      category: "Hygiene & Safety",
      questions: [
        {
          question: "Is your studio licensed?",
          answer:
            "Yes, Shoreditch Ink Studio is fully licensed by the London Borough of Hackney for tattooing. We undergo regular inspections and maintain the highest standards of hygiene and safety. All our artists hold individual licences as well.",
        },
        {
          question: "What hygiene measures do you follow?",
          answer:
            "We use autoclave sterilisation for all reusable equipment, single-use disposable needles and cartridges, medical-grade surface disinfectants, and fresh gloves for every client. Our workstations are fully sanitised between appointments. We meet and exceed all local authority requirements.",
        },
        {
          question: "What inks do you use?",
          answer:
            "We use only EU-compliant, vegan-friendly tattoo inks from reputable manufacturers. Our ink brands are certified safe and are regularly reviewed for compliance with the latest safety standards. If you have specific concerns about allergies, please let us know during your consultation.",
        },
        {
          question: "Do I need to be 18 to get tattooed?",
          answer:
            "Yes. It is illegal to tattoo anyone under 18 in England and Wales, regardless of parental consent. We require valid photo ID (passport or driving licence) from all clients before tattooing. No exceptions.",
        },
      ],
    },
    {
      category: "Aftercare & Healing",
      questions: [
        {
          question: "How do I look after my new tattoo?",
          answer:
            "We provide detailed written aftercare instructions after every session. In general, keep the area clean and moisturised, avoid submerging it in water for two weeks, stay out of direct sunlight, and do not pick or scratch the healing skin. Following aftercare correctly is essential for the best results.",
        },
        {
          question: "How long does a tattoo take to heal?",
          answer:
            "Surface healing typically takes two to three weeks, during which the tattooed area will scab and peel. Full healing beneath the skin takes around four to six weeks. During this time, it is important to follow your aftercare routine and avoid activities that could irritate the area.",
        },
        {
          question: "Do you offer free touch-ups?",
          answer:
            "Yes. We include one free touch-up session within the first twelve months of your tattoo. This covers any areas where ink may have dropped out during healing, which is normal and can happen even with perfect aftercare. After twelve months, touch-ups are charged at a reduced rate.",
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
              Everything you need to know about getting tattooed at Shoreditch
              Ink Studio. If your question is not answered here, get in touch.
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
              We are happy to answer anything we have not covered here.
              Drop us a message or give us a call.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/tattoo-shoreditch/contact" className="btn-accent">
                Contact Us
              </Link>
              <a href="tel:02079463210" className="btn-outline">
                Call 020 7946 3210
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a free consultation and let us help you plan your next piece.
          </p>
          <Link href="/tattoo-shoreditch/contact" className="btn-accent">
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
