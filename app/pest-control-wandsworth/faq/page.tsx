import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Pest Control Questions Answered",
  description: "Frequently asked questions about pest control in Wandsworth. Answers about rodents, wasps, bed bugs, pricing, and our service.",
  openGraph: {
    title: "FAQ | Wandsworth Pest Solutions",
    description: "Common questions about pest control services, treatments, pricing, and what to expect.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "General Questions",
      questions: [
        { question: "How quickly can you attend?", answer: "For urgent pest problems, we offer same-day callouts if you call before midday. In most cases, we can attend within 24 hours. Emergency callouts are available evenings and weekends for an additional charge." },
        { question: "Do you offer a guarantee?", answer: "Yes. For most domestic treatments, we offer a guarantee period during which we will return free of charge if the problem persists. The guarantee period varies by pest type and is confirmed at the time of treatment." },
        { question: "Are your treatments safe for children and pets?", answer: "Safety is our top priority. We use targeted treatments that minimise risk to non-target species. We will advise you on any precautions needed, such as keeping pets out of treated areas for a short period. All our products are HSE approved." },
        { question: "Do you serve commercial premises?", answer: "Yes, we provide ongoing pest management contracts for restaurants, pubs, hotels, offices, shops, and other commercial premises. Our contracts include scheduled visits, documentation for EHO inspections, and emergency callout cover." },
      ],
    },
    {
      category: "Rodent Questions",
      questions: [
        { question: "How do I know if I have rats or mice?", answer: "Common signs include droppings (rat droppings are 10-20mm, mouse droppings are 3-8mm), gnaw marks on cables or food packaging, scratching sounds in walls or lofts, and grease marks along skirting boards. Our technicians can identify the species during the survey." },
        { question: "How long does rodent treatment take?", answer: "A typical rodent treatment programme takes 2-4 weeks, with 2-3 visits. The first visit involves setting baits and traps, with follow-up visits to check progress and replenish treatments. We also identify and seal entry points to prevent re-infestation." },
        { question: "Will you proof my property against rodents?", answer: "Yes. Entry point proofing is a crucial part of our rodent control service. We identify how rodents are getting in and seal gaps with appropriate materials such as wire mesh, cement, and expanding foam. This is the most effective way to prevent recurrence." },
      ],
    },
    {
      category: "Insect Questions",
      questions: [
        { question: "How do you treat bed bugs?", answer: "We use a combination of targeted insecticide application and, for severe infestations, heat treatment. All affected rooms are treated, including beds, furniture, and carpet edges. We recommend a follow-up visit 2-3 weeks later to catch any newly hatched bugs." },
        { question: "Is it a wasp or a bee?", answer: "This is an important distinction as we never harm bees. Wasps are slimmer with bright yellow and black stripes, while bees are rounder and furrier. If you are unsure, send us a photo and we will identify the species before attending." },
        { question: "Can cockroaches come back after treatment?", answer: "A thorough professional treatment eliminates the existing infestation. However, cockroaches can be re-introduced through deliveries, luggage, or neighbouring properties. We provide hygiene and prevention advice to minimise this risk, and offer follow-up monitoring." },
      ],
    },
    {
      category: "Pricing & Booking",
      questions: [
        { question: "How much does pest control cost?", answer: "Prices vary by pest type and severity. A one-off domestic treatment typically starts from around 80-150 pounds. We always provide a clear quote before starting work, with no hidden charges. Commercial contracts are priced on an individual basis." },
        { question: "Do you charge for surveys?", answer: "For most domestic pest problems, the survey is included in the treatment cost and carried out during the same visit. For larger commercial premises or complex problems, we may arrange a separate survey visit, which is free of charge." },
        { question: "What payment methods do you accept?", answer: "We accept cash, bank transfer, and all major credit and debit cards. Payment is typically taken on completion of the treatment. For commercial contracts, we offer monthly invoicing." },
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
              Find answers to common questions about our pest control services, treatments, and pricing.
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
            <p className="text-lg text-gray-600 mb-8">Can&apos;t find the answer? Give us a call and our friendly team will be happy to help.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/pest-control-wandsworth/contact" className="btn-accent">Contact Us</Link>
              <a href="tel:02079468123" className="btn-outline">Call 020 7946 8123</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Pest Control Today?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Same-day callouts available across Wandsworth and South West London.</p>
          <Link href="/pest-control-wandsworth/contact" className="btn-accent">Get a Free Quote</Link>
        </div>
      </section>
    </>
  );
}
