import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Common Plumbing Questions Answered",
  description:
    "Frequently asked questions about our plumbing services in Brixton. Emergency callouts, boiler servicing, costs, and more. Brixton Plumbing Services.",
  openGraph: {
    title: "FAQ | Brixton Plumbing Services",
    description:
      "Common questions about plumbing services in Brixton including emergency callouts, boiler work, pricing, and more.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Emergency Plumbing",
      questions: [
        {
          question: "Do you charge a call-out fee for emergencies?",
          answer:
            "No, we do not charge a call-out fee. You only pay for the work carried out. We'll assess the situation and give you a clear price before starting any repairs.",
        },
        {
          question: "How quickly can you get to me in an emergency?",
          answer:
            "For emergencies within Brixton and the immediate SW2 area, our average response time is under 60 minutes. For the wider South London area, we typically arrive within 90 minutes. We'll always give you an estimated arrival time when you call.",
        },
        {
          question: "What counts as a plumbing emergency?",
          answer:
            "Plumbing emergencies include burst pipes, major leaks, no hot water or heating (especially in winter), overflowing toilets, blocked drains causing flooding, and gas leaks. If you smell gas, call the National Gas Emergency Service on 0800 111 999 first, then call us.",
        },
        {
          question: "Are you available on bank holidays and weekends?",
          answer:
            "Yes, our emergency service operates 24/7, 365 days a year, including all bank holidays, Christmas, and New Year. There is no additional surcharge for weekend or bank holiday emergency callouts.",
        },
      ],
    },
    {
      category: "Boiler Services",
      questions: [
        {
          question: "How often should I have my boiler serviced?",
          answer:
            "We recommend an annual boiler service to maintain safety and efficiency. Regular servicing also keeps your manufacturer's warranty valid and can help prevent costly breakdowns. Landlords are legally required to have an annual gas safety check.",
        },
        {
          question: "How long does a new boiler installation take?",
          answer:
            "A straightforward combi boiler replacement typically takes one day. If we're converting from a conventional system to a combi boiler, or installing in a new location, it may take 2-3 days. We'll always confirm the timeline before starting work.",
        },
        {
          question: "Which boiler brands do you recommend?",
          answer:
            "We work with all major brands but often recommend Worcester Bosch, Vaillant, and Ideal for their reliability and warranty terms. We'll assess your property's needs and recommend the best option for your budget and requirements.",
        },
        {
          question: "Do you provide landlord gas safety certificates?",
          answer:
            "Yes, we issue CP12 landlord gas safety certificates as required by law. We can also set up annual reminders so you never miss a renewal. We offer competitive rates for landlords with multiple properties.",
        },
      ],
    },
    {
      category: "Costs & Pricing",
      questions: [
        {
          question: "How much does a plumber cost in Brixton?",
          answer:
            "Our rates are competitive for the Brixton area. Rather than an hourly rate, we prefer to quote per job so you know exactly what you'll pay. We provide free, written quotes for all non-emergency work. Typical small repairs start from around £80-£120.",
        },
        {
          question: "Do you offer free quotes?",
          answer:
            "Yes, all quotes are free and provided without obligation. For straightforward jobs, we can often give an estimate over the phone. For larger projects like bathroom installations or heating systems, we'll visit your property to provide an accurate quote.",
        },
        {
          question: "Do I need to pay a deposit?",
          answer:
            "For standard repairs and small jobs, no deposit is required. For larger projects such as bathroom installations or new boiler installations, we may ask for a small deposit to cover materials. This will always be agreed in writing before work begins.",
        },
      ],
    },
    {
      category: "Bathroom & Heating",
      questions: [
        {
          question: "How long does a full bathroom installation take?",
          answer:
            "A typical bathroom installation takes 5-10 working days depending on the complexity of the project. This includes removal of the old bathroom, any plumbing and electrical work, tiling, and fitting. We'll provide a detailed timeline during the quotation stage.",
        },
        {
          question: "Can you install underfloor heating?",
          answer:
            "Yes, we install both electric and water-based underfloor heating systems. These are particularly popular in bathroom renovations. We'll advise on the best system for your property and budget.",
        },
        {
          question: "What is a power flush and do I need one?",
          answer:
            "A power flush cleans the inside of your central heating system, removing sludge and debris that reduce efficiency. Signs you might need one include cold spots on radiators, noisy boiler, and slow heating. It's also recommended before installing a new boiler.",
        },
      ],
    },
    {
      category: "Qualifications & Guarantees",
      questions: [
        {
          question: "Are your plumbers Gas Safe registered?",
          answer:
            "Yes, all our engineers who carry out gas work are Gas Safe registered. You can ask to see their Gas Safe ID card at any time, and you can verify their registration on the Gas Safe Register website.",
        },
        {
          question: "Do you guarantee your work?",
          answer:
            "Yes, all our work comes with a minimum 12-month guarantee on workmanship. New boiler installations come with the manufacturer's warranty (up to 10 years depending on the model). If any issue arises from our work, we'll put it right at no extra cost.",
        },
        {
          question: "Are you insured?",
          answer:
            "Yes, we carry comprehensive public liability insurance. This protects you in the unlikely event that any damage occurs during our work. We can provide proof of insurance upon request.",
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
              Got a question about our plumbing services? Find answers to the most
              common questions below, or give us a call for anything else.
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
                      <summary className="flex justify-between items-center p-6 list-none cursor-pointer font-semibold text-[var(--primary)] hover:text-[var(--accent)] transition-colors">
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
              Still Have Questions?
            </h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">
              Can&apos;t find the answer you&apos;re looking for? Give us a call or
              send us a message. We&apos;re always happy to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/plumber-brixton/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">
                Contact Us
              </Link>
              <a
                href="tel:02079460123"
                className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--primary)] hover:text-white transition-colors inline-block"
              >
                Call 020 7946 0123
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get a Free Quote?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Whether it&apos;s an emergency or a planned project, get in touch for
            a free, no-obligation quote from Brixton&apos;s trusted plumber.
          </p>
          <Link href="/plumber-brixton/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">
            Get Your Free Quote
          </Link>
        </div>
      </section>

      {/* Trust Notice */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-sm p-4 text-sm text-gray-600">
            <p>
              <strong>Gas Safe Registered:</strong> Brixton Plumbing Services is Gas
              Safe registered. The information on this page is for general guidance
              only. Individual circumstances may vary — please contact us for advice
              specific to your situation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
