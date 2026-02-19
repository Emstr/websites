import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Common Questions Answered",
  description:
    "Frequently asked questions about Soho Barber Co. Walk-ins, booking, prices, services and more. Master barbers in Soho, London W1.",
  openGraph: {
    title: "FAQ | Soho Barber Co",
    description:
      "Common questions about our barber services, booking, walk-ins and prices in Soho, London.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Booking & Walk-ins",
      questions: [
        {
          question: "Do I need to book an appointment?",
          answer:
            "No, walk-ins are always welcome and we see most of our clients this way. However, if you want to guarantee a specific time or a particular barber, we recommend booking ahead through our website or by calling 020 7946 7890.",
        },
        {
          question: "How long will I wait as a walk-in?",
          answer:
            "It varies depending on how busy we are, but most walk-ins are seen within 10-15 minutes. Weekday lunchtimes and Saturday mornings tend to be our busiest periods. If there's a wait, you're welcome to grab a coffee and come back.",
        },
        {
          question: "Can I request a specific barber?",
          answer:
            "Absolutely. If you've got a preferred barber, just let us know when you book or when you arrive. We'll do our best to accommodate you, though booking in advance is the best way to guarantee your preferred barber.",
        },
        {
          question: "What are your opening hours?",
          answer:
            "We're open Monday to Friday from 9am to 7pm, Saturday from 9am to 6pm, and Sunday from 10am to 4pm. We're open every day of the week so there's always a time that works.",
        },
      ],
    },
    {
      category: "Services & Pricing",
      questions: [
        {
          question: "How much does a haircut cost?",
          answer:
            "Our classic cut starts from around £30 and includes a consultation, wash and styled finish. Prices vary depending on the service — beard trims, hot towel shaves and combo packages are all available at competitive rates. Check our services page or ask when you visit.",
        },
        {
          question: "What's included in a hot towel shave?",
          answer:
            "Our hot towel shave is a full 30-minute experience. It includes multiple hot towel applications to soften the skin and hair, a rich lather with premium shaving cream, a cut-throat razor shave, cold towel finish, toner and moisturising aftershave balm.",
        },
        {
          question: "Do you offer wedding packages?",
          answer:
            "Yes, we offer complete wedding grooming packages for grooms and groomsmen. This includes a pre-wedding trial session, and on-the-day grooming with cuts, shaves and styling. Group discounts are available. Get in touch to discuss your requirements.",
        },
        {
          question: "Can you do grey blending?",
          answer:
            "Yes, grey blending is one of our most popular add-on services. It takes just 10-15 minutes and subtly reduces grey tones for a fresher, more youthful look without the 'dyed' appearance. We always do a patch test first for new clients.",
        },
      ],
    },
    {
      category: "The Shop",
      questions: [
        {
          question: "Where exactly are you in Soho?",
          answer:
            "We're at 42 Berwick Street, right in the heart of Soho, London W1F 8SE. The nearest tube stations are Oxford Circus (2 minutes), Tottenham Court Road (5 minutes) and Piccadilly Circus (6 minutes).",
        },
        {
          question: "Do you sell grooming products?",
          answer:
            "Yes, we stock a curated range of premium grooming products including pomades, clays, waxes, beard oils, balms and shaving essentials. Our barbers can recommend the right products for your hair type and style.",
        },
        {
          question: "Is the shop accessible?",
          answer:
            "Our shop is at street level with step-free access. If you have any specific accessibility requirements, please call ahead and we'll make sure we can accommodate you comfortably.",
        },
      ],
    },
    {
      category: "Payments",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept cash, all major credit and debit cards, Apple Pay and Google Pay. Whatever's easiest for you.",
        },
        {
          question: "Do you offer gift vouchers?",
          answer:
            "Yes, we offer gift vouchers for any service or any amount. They make a brilliant gift for birthdays, Christmas or as a groomsman's gift. Pop into the shop or contact us to purchase.",
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Got a question? Chances are we&apos;ve answered it here. If not,
              just give us a call or pop in.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-[var(--primary)] mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-[var(--accent)]"></div>
                  {category.category}
                </h2>
                <div className="space-y-1">
                  {category.questions.map((faq, faqIndex) => (
                    <details
                      key={faqIndex}
                      className="group bg-gray-50 rounded-sm overflow-hidden"
                    >
                      <summary className="flex items-center justify-between p-6 list-none cursor-pointer font-semibold text-[var(--primary)] hover:text-[var(--accent)] transition-colors">
                        <span className="flex-1 pr-4">{faq.question}</span>
                        <svg
                          className="w-5 h-5 text-[var(--accent)] flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
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
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">
              Still Got Questions?
            </h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">
              No worries &mdash; just give us a ring or pop into the shop. We&apos;re
              always happy to chat.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/barber-soho/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors">
                Contact Us
              </Link>
              <a
                href="tel:02079467890"
                className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--primary)] hover:text-white transition-colors"
              >
                Call 020 7946 7890
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for a Fresh Cut?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Walk in any time or book ahead. Berwick Street, Soho &mdash; open
            seven days a week.
          </p>
          <Link href="/barber-soho/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">
            Book Your Chair
          </Link>
        </div>
      </section>
    </>
  );
}
