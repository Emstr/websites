import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Security Questions Answered",
  description: "Frequently asked questions about security services, SIA licensing, CCTV installation and working with Stratford Security Solutions.",
  openGraph: {
    title: "FAQ | Stratford Security Solutions",
    description: "Common questions about our security services, licensing and processes answered.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "General Questions",
      questions: [
        { question: "Are all your security officers SIA licensed?", answer: "Yes, without exception. Every officer who works for Stratford Security Solutions holds a valid Security Industry Authority (SIA) licence. We verify all licences before deployment and monitor renewal dates to ensure continuous compliance. Officers also undergo enhanced DBS checks, right-to-work verification and drug and alcohol screening." },
        { question: "What areas do you cover?", answer: "We are based in Stratford, East London, and our primary coverage area includes all London boroughs east of the City, including Newham, Tower Hamlets, Hackney, Barking and Dagenham, Redbridge, and Waltham Forest. However, we regularly provide services across Greater London and the South East for larger clients." },
        { question: "How quickly can you start providing security?", answer: "For standard manned guarding requirements, we can typically deploy officers within 24-48 hours. For emergency or urgent situations, we have the capacity to deploy within hours. CCTV installations and more complex projects require a site survey first, which we can usually schedule within 2-3 working days." },
        { question: "Do you require long-term contracts?", answer: "No, we offer flexible contract terms to suit your needs. While some clients prefer the certainty of a 12-month agreement, we also offer rolling monthly contracts and ad-hoc services for one-off events or short-term requirements. We believe in earning your business through performance, not tying you into contracts." },
      ],
    },
    {
      category: "Manned Guarding",
      questions: [
        { question: "What training do your guards receive?", answer: "Beyond the mandatory SIA training, all our officers complete our in-house training programme covering conflict management, first aid, fire safety, customer service, report writing and site-specific procedures. Officers assigned to specialist roles receive additional training such as CCTV operation, access control systems and close protection." },
        { question: "Can you provide guards at short notice?", answer: "Yes. We maintain a pool of vetted, trained officers who are available for short-notice deployment. For emergency requirements, call our 24/7 control room on 020 7946 9920 and we will mobilise officers as quickly as possible. We understand that security needs can arise unexpectedly." },
        { question: "How do you ensure guard quality and attendance?", answer: "We use a digital patrol and attendance system that provides real-time verification of officer attendance, checkpoint completion and incident reporting. Our control room monitors all sites around the clock and our dedicated account managers conduct regular site visits and performance reviews." },
      ],
    },
    {
      category: "CCTV & Technology",
      questions: [
        { question: "What type of CCTV systems do you install?", answer: "We install a range of systems from basic analogue cameras for smaller properties to advanced IP-based systems with features like facial recognition, number plate reading, heat mapping and intelligent analytics. All our systems offer remote viewing via smartphone or computer. We will recommend the best technology for your budget and requirements." },
        { question: "Is CCTV installation GDPR compliant?", answer: "Absolutely. All our CCTV installations comply with GDPR, the Data Protection Act 2018 and the ICO CCTV Code of Practice. This includes appropriate signage, documented purpose for surveillance, controlled access to footage, defined retention periods and proper data processing agreements." },
        { question: "Do you offer CCTV monitoring services?", answer: "Yes, our 24/7 control room can monitor your CCTV feeds in real time. We offer both proactive monitoring, where operators actively watch feeds, and reactive monitoring, where alerts from motion detection or analytics are investigated immediately. Monitoring can be combined with our mobile patrol service for a physical response." },
      ],
    },
    {
      category: "Pricing & Contracts",
      questions: [
        { question: "How much does security guarding cost?", answer: "Guarding rates depend on several factors including the number of officers, shift patterns, site location and any specialist requirements. We provide transparent, detailed quotes after conducting a free site assessment. As a guide, our rates are competitive within the London market and we never compromise on quality to undercut on price." },
        { question: "Is the initial site assessment free?", answer: "Yes. Our initial site assessment and security consultation is completely free and without obligation. One of our experienced security consultants will visit your premises, assess your risks and provide a detailed proposal with clear pricing. There is no hard sell; we simply present our recommendations and let you decide." },
        { question: "What payment methods do you accept?", answer: "We accept payment by bank transfer and direct debit. For contract clients, we invoice monthly in arrears with 30-day payment terms. For one-off services such as event security, we typically require a deposit at booking with the balance due upon completion." },
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
            <p className="text-xl text-gray-200 leading-relaxed">Find answers to common questions about our security services, processes, licensing and pricing.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-accent"></div>{category.category}</h2>
                <div className="space-y-1">
                  {category.questions.map((faq, faqIndex) => (
                    <details key={faqIndex} className="group bg-gray-50 rounded-sm overflow-hidden">
                      <summary className="faq-question p-6 list-none cursor-pointer">
                        <span className="flex-1 pr-4">{faq.question}</span>
                        <svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
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
            <p className="text-lg text-gray-600 mb-8">We&apos;re here to help. Contact our team for a free, no-obligation discussion about your security requirements.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/security-stratford/contact" className="btn-accent">Contact Us</Link>
              <a href="tel:02079469920" className="btn-outline">Call 020 7946 9920</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Professional Security?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Get a free site assessment and quote from our experienced security consultants.</p>
          <Link href="/security-stratford/contact" className="btn-accent">Get a Free Quote</Link>
        </div>
      </section>
    </>
  );
}
