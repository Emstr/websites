import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Frequently Asked Questions",
  description:
    "Frequently asked questions about dining at Soho Kitchen & Bar. Reservations, private dining, dietary requirements, dress code and more.",
  openGraph: {
    title: "FAQ | Soho Kitchen & Bar",
    description:
      "Common questions about reservations, menus, private dining and visiting Soho Kitchen & Bar.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Reservations & Bookings",
      questions: [
        {
          question: "Do I need to book a table?",
          answer:
            "We strongly recommend booking, especially for dinner and weekends. We do accept walk-ins and will always try to accommodate you, but reservations guarantee your table. You can book online, by email at reservations@sohokitchenbar.co.uk, or by calling 020 7946 6640.",
        },
        {
          question: "How far in advance should I book?",
          answer:
            "For weekday lunches, a day or two in advance is usually sufficient. For Friday and Saturday evenings, we recommend booking at least a week ahead. For private dining and large groups, please give us at least two to three weeks notice to ensure availability.",
        },
        {
          question: "Can I book for a large group?",
          answer:
            "Absolutely. Our main dining room can accommodate groups of up to 10, and our private dining room seats up to 24 guests. For groups larger than 6, please contact us directly so we can make the best arrangements for your party.",
        },
        {
          question: "What is your cancellation policy?",
          answer:
            "We ask for at least 24 hours notice if you need to cancel or amend your booking. For private dining and large group bookings, we require 48 hours notice. Late cancellations or no-shows may be subject to a cancellation fee.",
        },
      ],
    },
    {
      category: "Menu & Dietary Requirements",
      questions: [
        {
          question: "Do you cater for dietary requirements?",
          answer:
            "Yes, we take dietary requirements very seriously. We offer vegetarian and vegan options on every course, and our kitchen can accommodate most allergies and intolerances including gluten-free, dairy-free and nut-free. Please let us know when booking so our chef can prepare accordingly.",
        },
        {
          question: "How often does the menu change?",
          answer:
            "Our a la carte menu changes seasonally, roughly every three months, to make the most of the best British produce available. We also run daily specials based on what is freshest at market. Our pre-theatre and Sunday roast menus follow a similar seasonal rotation.",
        },
        {
          question: "Do you have a children's menu?",
          answer:
            "We welcome families and offer children's portions of many dishes on our main menu, particularly for Sunday roast. We do not have a separate children's menu, as we believe young diners deserve the same quality ingredients and cooking as everyone else. Please let our team know if you are dining with children and we will be happy to help.",
        },
      ],
    },
    {
      category: "Private Dining & Events",
      questions: [
        {
          question: "How do I book your private dining room?",
          answer:
            "Contact our events team by emailing reservations@sohokitchenbar.co.uk or calling 020 7946 6640. We will discuss your requirements, suggest menu options and provide a tailored quote. We recommend booking at least three weeks in advance for private dining.",
        },
        {
          question: "What is included in private dining?",
          answer:
            "Our private dining packages include a bespoke menu created by our head chef, a dedicated service team, and use of our elegant first-floor dining room. Wine packages, cocktail receptions and AV equipment for presentations can be added. We will work with you to create the perfect event.",
        },
        {
          question: "Can you host corporate events?",
          answer:
            "Yes, we are experienced in hosting corporate dinners, working lunches, client entertaining and team celebrations. Our central Soho location is convenient for businesses across London, and we can accommodate groups from 10 to 60 guests depending on the format.",
        },
        {
          question: "Is there a minimum spend for private dining?",
          answer:
            "Yes, minimum spends apply for exclusive use of our private dining room and vary depending on the day of the week and time of year. Please contact our events team for current pricing. We always aim to offer excellent value and will work within your budget where possible.",
        },
      ],
    },
    {
      category: "Visiting Us",
      questions: [
        {
          question: "What is the dress code?",
          answer:
            "Our dress code is smart casual. We want you to feel comfortable and relaxed, but we do ask that guests avoid sportswear and flip-flops. For private dining and special occasions, smart attire is encouraged.",
        },
        {
          question: "Is there parking nearby?",
          answer:
            "As we are in the heart of Soho, street parking is extremely limited. We recommend using public transport — Tottenham Court Road station is just 3 minutes walk away. The nearest car park is the NCP on Brewer Street, approximately 5 minutes on foot.",
        },
        {
          question: "Is the restaurant accessible?",
          answer:
            "Our ground-floor restaurant and bar are fully accessible for wheelchair users. Unfortunately, our first-floor private dining room is only accessible via stairs. Please contact us in advance if you have any accessibility requirements and we will do everything we can to accommodate you.",
        },
        {
          question: "Do you have Wi-Fi?",
          answer:
            "Yes, complimentary Wi-Fi is available throughout the restaurant and bar. Ask any member of our team for the password.",
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
              Everything you need to know about dining at Soho Kitchen & Bar.
              Can&apos;t find your answer? Get in touch and we will be happy to help.
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
              Our team is always happy to help. Give us a call, send us an email
              or pop in and say hello — we are right here on Dean Street.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/restaurant-soho/contact" className="btn-accent">
                Contact Us
              </Link>
              <a href="tel:02079466640" className="btn-outline">
                Call 020 7946 6640
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Book Your Table?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Reserve your table today and experience modern British dining at its
            finest, right in the heart of Soho.
          </p>
          <Link href="/restaurant-soho/contact" className="btn-accent">
            Make a Reservation
          </Link>
        </div>
      </section>
    </>
  );
}
