import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Dog Grooming Questions Answered",
  description:
    "Frequently asked questions about dog grooming at Battersea Dog Spa. Learn about our services, pricing, what to expect and how to prepare your dog.",
  openGraph: {
    title: "FAQ | Battersea Dog Spa",
    description:
      "Common questions about dog grooming services, pricing and what to expect at Battersea Dog Spa.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Booking & Appointments",
      questions: [
        {
          question: "How do I book an appointment?",
          answer:
            "You can book by calling us on 020 7946 2567, emailing woof@batterseadogspa.co.uk, or filling in the booking form on our contact page. We recommend booking at least a week in advance, though we do accommodate last-minute appointments when possible.",
        },
        {
          question: "How long does a groom take?",
          answer:
            "A full groom typically takes 1.5 to 3 hours depending on your dog's size, coat type and condition. Puppy first grooms are shorter at around 45-60 minutes. Nail clips and ear cleans take approximately 15-20 minutes. We'll give you a time estimate when you book.",
        },
        {
          question: "Do I stay during the groom?",
          answer:
            "We find most dogs settle better without their owners present, so we recommend dropping off and collecting. We'll text you when your dog is nearly ready. However, if your dog has severe anxiety, we can discuss arrangements.",
        },
        {
          question: "How often should my dog be groomed?",
          answer:
            "Most dogs benefit from a professional groom every 6-8 weeks. Breeds with continuously growing coats (Poodles, Bichons, etc.) may need grooming every 4-6 weeks. We'll advise on the best schedule for your dog's breed and coat type.",
        },
      ],
    },
    {
      category: "Services & Pricing",
      questions: [
        {
          question: "What's included in a full groom?",
          answer:
            "A full groom includes a thorough brush-out, bath with breed-appropriate shampoo, professional blow-dry, haircut or clip to your preferred style, nail trim, ear cleaning, eye wipe and a finishing cologne spritz. We also include a complimentary bandana.",
        },
        {
          question: "Do you charge extra for matted coats?",
          answer:
            "Severely matted coats require significantly more time and care to groom safely. We may apply a small surcharge for heavy matting. If your dog is badly matted, we'll discuss this with you before we begin and explain the best approach.",
        },
        {
          question: "Do you offer puppy grooming?",
          answer:
            "Yes! Our Puppy First Groom is designed for dogs from 12 weeks old (once they've had their vaccinations). It's a gentle, positive introduction to the grooming experience that helps build confidence for future visits.",
        },
      ],
    },
    {
      category: "Your Dog's Visit",
      questions: [
        {
          question: "My dog is nervous - can you still groom them?",
          answer:
            "Absolutely. We specialise in nervous and anxious dogs. Our calm, patient approach and one-dog-at-a-time policy means there are no other dogs to cause stress. We work at your dog's pace and use lots of treats and reassurance.",
        },
        {
          question: "Do you use cages or crates?",
          answer:
            "No. We operate a cage-free salon. Your dog will never be left unattended in a crate or cage. We groom one dog at a time, so there's no need for waiting areas.",
        },
        {
          question: "What products do you use?",
          answer:
            "We use premium, professional-grade grooming products that are gentle on skin and coat. All our shampoos are pH-balanced for dogs and we stock hypoallergenic options for sensitive skin. We're happy to discuss specific products if your dog has allergies.",
        },
        {
          question: "What should I do to prepare my dog for their groom?",
          answer:
            "Please ensure your dog has been to the toilet before arrival. A short walk beforehand can help burn off excess energy. There's no need to bath your dog before coming - that's our job! Let us know about any health issues, lumps, bumps or sore spots.",
        },
      ],
    },
    {
      category: "Health & Safety",
      questions: [
        {
          question: "Are you insured?",
          answer:
            "Yes, we're fully insured with comprehensive public liability and professional indemnity insurance. We're also listed with the Kennel Club and all our groomers hold City & Guilds qualifications.",
        },
        {
          question: "What if you find something wrong with my dog during the groom?",
          answer:
            "Our groomers are trained to spot skin conditions, lumps, parasites and other health concerns. If we notice anything unusual, we'll let you know straight away and recommend you visit your vet. We keep detailed notes on every dog we groom.",
        },
        {
          question: "Do you groom dogs with health conditions?",
          answer:
            "Yes, we regularly groom elderly dogs and those with health conditions. Please let us know about any medical issues when booking so we can make appropriate accommodations. For dogs with serious conditions, we may request a vet's letter.",
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
              Everything you need to know about grooming your dog at Battersea Dog
              Spa. Can&apos;t find your answer? Give us a call.
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
              We&apos;re always happy to chat about your dog&apos;s grooming needs.
              Give us a call or drop us an email.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/dog-groomer-battersea/contact" className="btn-accent">
                Contact Us
              </Link>
              <a href="tel:02079462567" className="btn-outline">
                Call 020 7946 2567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Book Your Dog&apos;s Groom?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Treat your dog to a professional grooming experience at Battersea&apos;s
            favourite dog spa.
          </p>
          <Link href="/dog-groomer-battersea/contact" className="btn-accent">
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
