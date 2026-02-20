import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Common Questions About MOT, Servicing & Repairs",
  description:
    "Frequently asked questions about MOT testing, car servicing, brake repairs, diagnostics and our garage services in Bermondsey, SE1. Bermondsey Motors.",
  openGraph: {
    title: "FAQ | Bermondsey Motors",
    description:
      "Answers to common questions about MOT testing, servicing, repairs and our garage in Bermondsey, SE1.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "MOT Testing",
      questions: [
        {
          question: "How long does an MOT take?",
          answer:
            "A standard MOT test usually takes around 45 minutes. We offer a while-you-wait service, so you can grab a coffee from the cafe next door and we will text you when it is done. If we find any issues that need attention, we will call you before doing any work.",
        },
        {
          question: "What happens if my car fails the MOT?",
          answer:
            "If your car fails, we will explain exactly what needs fixing and give you a clear, no-obligation quote for the repairs. You are under no pressure to have the work done with us. If you do choose us, we offer a free re-test within 10 working days.",
        },
        {
          question: "Can I drive my car if it has no MOT?",
          answer:
            "You can only drive a vehicle without a valid MOT to a pre-booked MOT test or to have it repaired for an MOT failure. Driving without a valid MOT at any other time is illegal and your insurance may be invalid.",
        },
        {
          question: "Do you send MOT reminders?",
          answer:
            "Yes, we offer a free MOT reminder service. We will send you a text or email when your MOT is coming up so you never forget. Just let us know when you book in and we will add you to the list.",
        },
      ],
    },
    {
      category: "Servicing & Repairs",
      questions: [
        {
          question: "How often should I service my car?",
          answer:
            "Most manufacturers recommend servicing every 12 months or every 10,000 to 12,000 miles, whichever comes first. An interim service at the six-month mark is a good idea if you do a lot of miles. Check your owner's manual or ask us and we will look it up for your specific make and model.",
        },
        {
          question: "Will a service at your garage invalidate my manufacturer warranty?",
          answer:
            "No. Under the Block Exemption Regulation, you can have your car serviced at any garage without affecting your manufacturer warranty, as long as the service is carried out to the manufacturer's specification using quality parts. We do exactly this and stamp your service book as proof.",
        },
        {
          question: "Do you work on all makes and models?",
          answer:
            "Yes, we service and repair all makes and models — from Fords and Fiats to BMWs and Mercedes. Our diagnostic equipment covers all major manufacturers, and we source parts for every vehicle type.",
        },
        {
          question: "What parts do you use?",
          answer:
            "We use OE-equivalent (Original Equipment equivalent) or genuine parts from trusted suppliers. These are the same quality as the parts fitted at a main dealer but at a fraction of the price. We never use cheap knock-offs that could fail prematurely.",
        },
      ],
    },
    {
      category: "Booking & Pricing",
      questions: [
        {
          question: "How do I book my car in?",
          answer:
            "You can book by calling us on 020 7946 8810, emailing bookings@bermondseymotors.co.uk, or using the online booking form on our contact page. We aim to respond within the hour during working hours.",
        },
        {
          question: "Do you give fixed-price quotes?",
          answer:
            "For standard work like servicing, MOT tests and brake replacements, yes, we provide fixed-price quotes. For diagnostic work where the issue is not yet known, we charge a diagnostic fee which is deducted from the repair cost if you go ahead with the work.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept cash, all major credit and debit cards, and bank transfer. Payment is due on collection of your vehicle.",
        },
        {
          question: "Do you offer any guarantees on your work?",
          answer:
            "Yes, all our work comes with a workmanship guarantee. Parts are covered by the manufacturer's warranty. If anything is not right, bring it back and we will sort it out.",
        },
      ],
    },
    {
      category: "Practical Questions",
      questions: [
        {
          question: "Where are you located?",
          answer:
            "We are at Unit 7, 38 Tanner Street, Bermondsey, London SE1 3LD. We are just off Bermondsey Street, a five-minute walk from Bermondsey station (Jubilee line) and eight minutes from London Bridge.",
        },
        {
          question: "Is there parking near the garage?",
          answer:
            "Yes, there is street parking available on Tanner Street and the surrounding roads. If you are dropping your car off and need to get to work, Bermondsey station is a five-minute walk away.",
        },
        {
          question: "Can I wait while my car is being worked on?",
          answer:
            "For shorter jobs like MOT tests and brake inspections, yes, you are welcome to wait. There is a cafe next door and several on Bermondsey Street. For longer jobs, we recommend dropping off and collecting later — we will text you when it is ready.",
        },
        {
          question: "Do you offer a collection and delivery service?",
          answer:
            "We do not currently offer a formal collection service, but if you are local and need a hand, give us a call and we will see what we can do. We have been known to give customers a lift to the station when they drop their car off.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">FAQ</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-200 leading-relaxed">Got a question about MOTs, servicing, repairs or how our garage works? You will probably find the answer here. If not, just give us a call.</p>
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
                    <details key={faqIndex} className="group bg-gray-50 rounded-sm overflow-hidden">
                      <summary className="flex items-center justify-between p-6 list-none cursor-pointer font-semibold text-[var(--primary)] hover:text-[var(--accent)] transition-colors">
                        <span className="flex-1 pr-4">{faq.question}</span>
                        <svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
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
            <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">Still Got a Question?</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">Can&apos;t find what you are looking for? No problem. Give us a ring or send us a message and we will get back to you.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/car-mechanic-bermondsey/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors">Contact Us</Link>
              <a href="tel:02079468810" className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--primary)] hover:text-white transition-colors">Call 020 7946 8810</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Book In?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Whether it is an MOT, a service or a repair, we are here to help. Book online or call us today.</p>
          <Link href="/car-mechanic-bermondsey/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors text-lg inline-block">Book Your Vehicle In</Link>
        </div>
      </section>
    </>
  );
}
