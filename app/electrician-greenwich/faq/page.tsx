import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Common Electrical Questions Answered",
  description: "Frequently asked questions about electrical services in Greenwich. EICR testing, rewiring, EV chargers, costs, and more.",
  openGraph: { title: "FAQ | Greenwich Electrical Solutions", description: "Common questions about electrical services in Greenwich." },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Rewiring & Fuse Boards",
      questions: [
        { question: "How do I know if my house needs rewiring?", answer: "Signs include: old round-pin sockets, rubber or fabric-sheathed cables, an old fuse box without RCDs, flickering lights, burning smells, or your property hasn't been rewired in 25+ years. We can carry out an EICR to assess your wiring condition." },
        { question: "How long does a full house rewire take?", answer: "A typical 3-bedroom house takes 5-7 working days. We work systematically room by room to minimise disruption. We'll agree a schedule with you before starting and keep you informed throughout." },
        { question: "Do I need to move out during a rewire?", answer: "Not usually. We work in phases so you'll always have power to most of the house. The kitchen and bathroom may be out of action for a day each. We'll discuss logistics during the quotation stage." },
        { question: "What is an RCD and why do I need one?", answer: "An RCD (Residual Current Device) is a life-saving device that instantly cuts the power if it detects a fault, such as a person touching a live wire. Modern consumer units include RCDs on all circuits — if your fuse board doesn't have them, an upgrade is strongly recommended." },
      ],
    },
    {
      category: "EICR Testing",
      questions: [
        { question: "What is an EICR?", answer: "An EICR (Electrical Installation Condition Report) is a detailed inspection and test of the electrical installations in a property. It identifies any defects, wear, or non-compliance with current regulations and recommends remedial work." },
        { question: "Do landlords need an EICR?", answer: "Yes. Since 1st April 2021, all private landlords in England must have an EICR for every tenanted property, renewed at least every 5 years. The report must be provided to tenants and the local authority on request." },
        { question: "How long does an EICR take?", answer: "For a typical 3-bedroom house, an EICR takes 2-4 hours depending on the number of circuits and the condition of the installation. We'll need access to all rooms and the consumer unit." },
        { question: "What happens if my property fails the EICR?", answer: "If issues are found, we'll provide a clear report explaining what needs fixing and a quote for the remedial work. Landlords must complete any C1 (danger present) or C2 (potentially dangerous) remedial work within 28 days." },
      ],
    },
    {
      category: "EV Chargers & Smart Home",
      questions: [
        { question: "How much does an EV charger installation cost?", answer: "A typical home EV charger installation costs between £800 and £1,200 depending on the charger model and the complexity of the installation. This includes a dedicated circuit from your consumer unit and all necessary cabling." },
        { question: "Can I charge my electric car from a normal socket?", answer: "Technically yes, but it's very slow (8-12 hours for a partial charge) and isn't recommended for regular use as it can overheat domestic sockets. A dedicated EV charger is much faster (3-4 hours for a full charge) and significantly safer." },
        { question: "What smart home systems do you install?", answer: "We install wiring and infrastructure for all major smart home platforms including Nest, Hive, Philips Hue, Sonos, Ring, and more. We also install structured cabling for homes that want hardwired data and entertainment systems." },
      ],
    },
    {
      category: "Costs & Certifications",
      questions: [
        { question: "Do you provide free quotes?", answer: "Yes, all our quotes are free and provided without obligation. For straightforward work we can often estimate over the phone. For larger jobs, we'll visit to survey the work and provide a detailed, fixed-price quote." },
        { question: "What certificates will I receive?", answer: "Depending on the work, you'll receive an Electrical Installation Certificate (EIC), Minor Electrical Installation Works Certificate (MEIWC), or an EICR. These are official documents registered with the NICEIC and prove your work meets regulations." },
        { question: "What does your 5-year guarantee cover?", answer: "Our guarantee covers all workmanship for 5 years from the date of completion. If any fault develops as a result of our installation, we'll return and put it right at no extra charge. This is in addition to any manufacturer warranties on products." },
        { question: "Are you insured?", answer: "Yes, we carry comprehensive public liability insurance to £2 million. We also have professional indemnity insurance. Proof of insurance is available on request." },
      ],
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((category) => category.questions.map((faq) => ({
      "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer },
    }))),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">FAQ</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-200 leading-relaxed">Find answers to common questions about our electrical services, certifications, and pricing.</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-[var(--primary)] mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-[var(--accent)]"></div>{category.category}</h2>
                <div className="space-y-1">
                  {category.questions.map((faq, faqIndex) => (
                    <details key={faqIndex} className="group bg-gray-50 rounded-sm overflow-hidden">
                      <summary className="flex justify-between items-center p-6 list-none cursor-pointer font-semibold text-[var(--primary)] hover:text-[var(--accent)] transition-colors">
                        <span className="flex-1 pr-4">{faq.question}</span>
                        <svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
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

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">Still Have Questions?</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">Can&apos;t find the answer? Get in touch and our team will be happy to help.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/electrician-greenwich/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Contact Us</Link>
              <a href="tel:02079460456" className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--primary)] hover:text-white transition-colors inline-block">Call 020 7946 0456</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for a Free Quote?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">NICEIC approved electricians with a 5-year guarantee. Get in touch today.</p>
          <Link href="/electrician-greenwich/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Get Your Free Quote</Link>
        </div>
      </section>

      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-sm p-4 text-sm text-gray-600">
            <p><strong>NICEIC Approved:</strong> Greenwich Electrical Solutions is NICEIC approved and Part P certified. The information on this page is for general guidance. Please contact us for advice specific to your situation.</p>
          </div>
        </div>
      </section>
    </>
  );
}
