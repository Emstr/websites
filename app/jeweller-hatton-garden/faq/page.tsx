import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "FAQ | Frequently Asked Questions", description: "Common questions about bespoke jewellery, engagement rings, diamonds, repairs and valuations at Hatton Garden Fine Jewellers.", openGraph: { title: "FAQ | Hatton Garden Fine Jewellers", description: "FAQs about bespoke engagement rings, diamonds and jewellery services." } };

export default function FAQPage() {
  const faqs = [
    { category: "Bespoke Engagement Rings", questions: [
      { question: "How long does a bespoke engagement ring take?", answer: "From initial consultation to completion, a bespoke engagement ring typically takes 4-6 weeks. This includes design, diamond selection, crafting and quality checks. If you are working to a specific deadline (such as a proposal date), please let us know and we will do our best to accommodate you." },
      { question: "How much does a bespoke engagement ring cost?", answer: "Bespoke engagement rings vary widely depending on the diamond, metal and design complexity. Our rings typically start from around £2,000, with most clients spending between £3,000 and £8,000. We are happy to work to any budget and will always be transparent about costs from the very first consultation." },
      { question: "Can I design my own ring?", answer: "Absolutely — that is exactly what we are here for. Bring us your ideas, sketches, Pinterest boards or just a general feeling of what you want. Our designers will work with you to refine the concept, create detailed renders and bring your vision to life." },
      { question: "Do you offer lab-grown diamonds?", answer: "Yes, we offer both natural and lab-grown diamonds. Lab-grown diamonds are chemically, physically and optically identical to natural diamonds, typically at 30-40% less cost. Our gemologists can help you decide which option is right for you." },
    ]},
    { category: "Diamonds & Gemstones", questions: [
      { question: "What does GIA certified mean?", answer: "GIA (Gemological Institute of America) is the world&apos;s most respected gemological authority. A GIA-certified diamond comes with a grading report detailing its exact characteristics. Our gemologists hold GIA qualifications, meaning they have the highest level of training in diamond grading and identification." },
      { question: "Are your diamonds ethically sourced?", answer: "Yes, without exception. All our diamonds are ethically sourced and comply with the Kimberley Process, which prevents conflict diamonds from entering the supply chain. We work with established, reputable dealers and can provide full provenance documentation." },
      { question: "Can you source coloured gemstones?", answer: "Yes, in addition to diamonds we source a wide range of precious and semi-precious gemstones including sapphires, rubies, emeralds, tanzanite and more. Our gemologists can help you select the perfect stone for your piece." },
    ]},
    { category: "Repairs & Remodelling", questions: [
      { question: "How long do repairs take?", answer: "Most standard repairs — such as ring resizing, clasp repair and polishing — are completed within 5-7 working days. More complex work like stone replacement or restoration may take 2-3 weeks. We will always give you a clear timeline at the outset." },
      { question: "Can you remodel inherited jewellery?", answer: "Yes, remodelling is one of our specialities. We can transform outdated or unworn inherited pieces into stunning contemporary designs, incorporating the original stones and metals. It is a wonderful way to honour a family heirloom while giving it new life." },
      { question: "Do you offer a warranty?", answer: "All bespoke pieces come with a lifetime craftsmanship warranty. We also offer complimentary cleaning and inspection services for life. Repairs carry a 12-month warranty on the specific work carried out." },
    ]},
    { category: "Visiting & Valuations", questions: [
      { question: "Do I need an appointment?", answer: "For bespoke commissions, diamond sourcing and valuations, we strongly recommend booking an appointment so we can dedicate proper time and attention to you. For repairs and general enquiries, walk-ins are welcome during opening hours." },
      { question: "How much does a valuation cost?", answer: "Valuations start from £50 for a single item, with discounts available for multiple pieces. The fee covers a detailed written report with photographs, suitable for insurance, probate or resale purposes. While-you-wait valuations are available for single items." },
      { question: "Is the consultation really free?", answer: "Yes, absolutely. Your initial design consultation is completely free and without obligation. We will discuss your ideas, show you examples and give you an honest assessment of costs. There is no pressure to proceed — we want you to feel confident in your decision." },
    ]},
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((c) => c.questions.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } }))) };

  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1><p className="text-xl text-gray-200 leading-relaxed">Everything you need to know about our bespoke jewellery services, diamonds and visiting our Hatton Garden workshop.</p></div></div></section>
    <section className="section-padding bg-white"><div className="container-width"><div className="max-w-4xl mx-auto">{faqs.map((category, ci) => (<div key={ci} className="mb-12"><h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-accent"></div>{category.category}</h2><div className="space-y-1">{category.questions.map((faq, fi) => (<details key={fi} className="group bg-gray-50 rounded-sm overflow-hidden"><summary className="faq-question p-6 list-none cursor-pointer"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></details>))}</div></div>))}</div></div></section>
    <section className="section-padding bg-gray-50"><div className="container-width"><div className="max-w-3xl mx-auto text-center"><h2 className="text-3xl font-bold text-primary mb-4">Still Have Questions?</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 mb-8">We are always happy to chat. Call, email or pop in to our Hatton Garden workshop.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/jeweller-hatton-garden/contact" className="btn-accent">Contact Us</Link><a href="tel:02079467750" className="btn-outline">Call 020 7946 7750</a></div></div></div></section>
    <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Begin?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book your complimentary consultation and let our family help you create something extraordinary.</p><Link href="/jeweller-hatton-garden/contact" className="btn-accent">Book Free Consultation</Link></div></section>
  </>);
}
