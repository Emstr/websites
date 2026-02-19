import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Roofing Questions Answered",
  description: "Frequently asked questions about our roofing services in Lewisham. Materials, guarantees, pricing, emergency repairs, and what to expect from your roofer.",
  openGraph: { title: "FAQ | Lewisham Roofing Specialists", description: "Common questions about roofing services, materials, guarantees, and pricing." },
};

export default function FAQPage() {
  const faqs = [
    { category: "General Roofing", questions: [
      { question: "How do I know if my roof needs repairing or replacing?", answer: "A few missing or slipped tiles usually means a straightforward repair. However, if your roof is more than 60 years old, has widespread deterioration, or you are finding damp in multiple areas, a full re-roof is often more cost-effective in the long run. We offer free inspections and will always give you an honest assessment of whether a repair or replacement is the best option." },
      { question: "What roofing materials do you work with?", answer: "We work with all common roofing materials including natural Welsh and Spanish slate, clay tiles, concrete tiles, GRP fibreglass, EPDM rubber, felt, and lead. For period properties, we source reclaimed materials where possible to maintain the character of the building." },
      { question: "Do you work on listed buildings and conservation areas?", answer: "Yes. We have experience working on properties in conservation areas and are familiar with the requirements for listed building consent. We use traditional materials and techniques, including lime mortar for chimney work, to comply with conservation guidelines." },
      { question: "Can you help with planning permission or building regulations?", answer: "While we cannot provide planning advice, we ensure all our work meets current building regulations. For full re-roofs, we handle the building control notification and inspection process. We are happy to work alongside your architect or surveyor on larger projects." },
    ]},
    { category: "Emergency Repairs", questions: [
      { question: "Do you offer emergency roof repairs?", answer: "Yes. We offer a 24/7 emergency call-out service for urgent issues such as storm damage, active leaks, and structural hazards. We aim to attend within 2 to 4 hours to make your roof safe and watertight with a temporary repair. A permanent repair is then scheduled at a convenient time." },
      { question: "What should I do if my roof is leaking?", answer: "First, place a bucket or container under the leak to catch water and protect your belongings. If water is coming through a light fitting, switch off the electricity at the consumer unit. Then call us on 020 7946 1456 — we can usually attend the same day to stop the leak and prevent further damage." },
      { question: "Does insurance cover storm damage to my roof?", answer: "Most home insurance policies cover storm damage, though the exact terms vary. We can provide a detailed report and photographs for your insurance claim, and we are experienced in working with insurance companies and loss adjusters. We will carry out the emergency repair first and liaise with your insurer on the permanent work." },
    ]},
    { category: "Pricing & Quotes", questions: [
      { question: "How much does a new roof cost?", answer: "The cost of a new roof depends on the size of the property, the materials chosen, access conditions, and the extent of any timber work required. As a rough guide, a full re-roof on a typical three-bedroom terraced house in SE London might cost between eight and fifteen thousand pounds. We provide detailed, itemised quotes after a free site inspection." },
      { question: "Do you charge for quotes?", answer: "No. All our quotes are completely free and without obligation. We visit your property, inspect the roof, and provide a clear, written quote with a full breakdown of materials and labour. There is no pressure and no hidden charges." },
      { question: "What payment terms do you offer?", answer: "For smaller repairs, payment is due on completion. For larger projects, we typically ask for a deposit of no more than 20 per cent, with the balance due on satisfactory completion. We accept bank transfer, card payment, and cash. We never ask for full payment upfront." },
      { question: "Are there any hidden charges?", answer: "Never. Our written quotes include everything — materials, labour, waste disposal, scaffolding (where required), and VAT. If we discover additional work is needed once we start, we will discuss it with you and agree any extra cost before proceeding." },
    ]},
    { category: "Guarantees & Insurance", questions: [
      { question: "What guarantee do you offer?", answer: "All our roofing work comes with a minimum 10-year written guarantee covering both materials and workmanship. GRP fibreglass flat roofs carry a 25-year manufacturer-backed guarantee. Our guarantee is insurance-backed through our TrustMark registration, so you are protected even in the unlikely event that our business ceases trading." },
      { question: "Are you fully insured?", answer: "Yes. We carry comprehensive public liability insurance of two million pounds and employer liability insurance of ten million pounds. Certificates are available on request. Your property is fully protected while we are working on it." },
      { question: "What does TrustMark registration mean?", answer: "TrustMark is a government-endorsed quality scheme for tradespeople. To become registered, we underwent a rigorous assessment of our technical competence, financial standing, customer service record, and trading practices. It means our work is independently inspected and we adhere to strict consumer protection standards." },
    ]},
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((c) => c.questions.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1><p className="text-xl text-gray-200 leading-relaxed">Everything you need to know about our roofing services in Lewisham and SE London.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="max-w-4xl mx-auto">
        {faqs.map((category, ci) => (<div key={ci} className="mb-12"><h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-accent"></div>{category.category}</h2><div className="space-y-1">{category.questions.map((faq, fi) => (<details key={fi} className="group bg-gray-50 rounded-sm overflow-hidden"><summary className="faq-question p-6 list-none cursor-pointer"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></details>))}</div></div>))}
      </div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="max-w-3xl mx-auto text-center"><h2 className="text-3xl font-bold text-primary mb-4">Still Have Questions?</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 mb-8">Our friendly team is happy to help with any roofing queries.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/roofer-lewisham/contact" className="btn-accent">Contact Us</Link><a href="tel:02079461456" className="btn-outline">Call 020 7946 1456</a></div></div></div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Your Roof Sorted?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Get a free inspection and no-obligation quote. We respond to all enquiries within 24 hours.</p><Link href="/roofer-lewisham/contact" className="btn-accent">Get a Free Quote</Link></div></section>
    </>
  );
}
