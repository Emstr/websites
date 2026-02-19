import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Bespoke Tailoring Questions Answered",
  description: "Frequently asked questions about bespoke tailoring at Savile Row Bespoke. Learn about the process, pricing, timelines and what to expect.",
  openGraph: { title: "FAQ | Savile Row Bespoke", description: "Common questions about bespoke tailoring, pricing and the Savile Row experience." },
};

export default function FAQPage() {
  const faqs = [
    { category: "The Bespoke Process", questions: [
      { question: "What is the difference between bespoke and made-to-measure?", answer: "Bespoke involves creating a completely new pattern unique to your body, with the garment constructed from scratch over multiple fittings. Made-to-measure adapts an existing pattern to your measurements with one fitting. Bespoke offers the ultimate in fit and personalisation but takes longer and costs more." },
      { question: "How long does a bespoke suit take?", answer: "A fully bespoke suit typically takes 10-16 weeks from initial consultation to delivery. This includes pattern creation, multiple fittings and around 60 hours of hand craftsmanship. We recommend allowing extra time for wedding suits or time-sensitive occasions." },
      { question: "How many fittings are required?", answer: "A bespoke suit typically requires three fittings: a baste fitting (skeleton stage), a forward fitting (nearly complete) and a final fitting. Made-to-measure garments require one fitting. Additional fittings can be arranged if needed at no extra cost." },
      { question: "Can I bring inspiration photos?", answer: "Absolutely. We encourage clients to share images, references and ideas. Whether it's a particular lapel style, a trouser break or a fabric you've seen, we'll work with you to achieve the look you want within the framework of excellent tailoring." },
    ] },
    { category: "Fabrics & Style", questions: [
      { question: "What fabrics do you offer?", answer: "We stock over 3,000 fabrics from the world's finest mills including Dormeuil, Holland & Sherry, Loro Piana, Scabal and Dugdale Bros. Our collection includes wools, cashmeres, linens, silks and blends in every weight and pattern imaginable." },
      { question: "Can you advise on what style would suit me?", answer: "That's precisely what we're here for. Our master tailor will assess your body type, lifestyle, wardrobe and personal preferences to recommend styles, fabrics and details that will work beautifully for you. There's no obligation to follow our advice, but most clients find it invaluable." },
      { question: "Do you make women's tailoring?", answer: "While our primary expertise is in menswear, we do undertake bespoke tailoring for women, particularly suits, blazers and trousers. Please contact us to discuss your requirements." },
    ] },
    { category: "Pricing & Payment", questions: [
      { question: "How much does a bespoke suit cost?", answer: "Bespoke suit pricing depends on the fabric selected and level of detail. We're transparent about pricing and will provide a clear quotation during your consultation. We offer payment plans for bespoke commissions." },
      { question: "Do you require a deposit?", answer: "Yes, we ask for a 50% deposit when you commission a bespoke garment, with the balance due on completion. For made-to-measure and alterations, full payment is typically taken at the fitting stage." },
      { question: "Is the consultation free?", answer: "Yes, your initial consultation is completely complimentary and without obligation. It's an opportunity for us to understand your needs and for you to experience the Savile Row Bespoke approach firsthand." },
    ] },
    { category: "Care & Maintenance", questions: [
      { question: "How should I care for my bespoke suit?", answer: "We provide detailed care instructions with every garment. Generally, we recommend hanging suits on quality wooden hangers, brushing after each wear, airing between wears and dry cleaning only when necessary. We're always available to advise on care." },
      { question: "Can you alter a suit if my body changes?", answer: "Yes, bespoke suits are constructed with generous seam allowances specifically to allow for future alterations. Whether you gain or lose weight, we can adjust the garment to maintain its fit. This is one of the key advantages of bespoke." },
      { question: "Do you offer garment storage?", answer: "We offer seasonal storage for regular clients who prefer to keep their off-season wardrobe in our climate-controlled facilities. Please enquire for details." },
    ] },
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((c) => c.questions.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1><p className="text-xl text-gray-200 leading-relaxed">Everything you need to know about bespoke tailoring and the Savile Row Bespoke experience.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="max-w-4xl mx-auto">
        {faqs.map((category, ci) => (<div key={ci} className="mb-12"><h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-accent"></div>{category.category}</h2><div className="space-y-1">{category.questions.map((faq, fi) => (<details key={fi} className="group bg-gray-50 rounded-sm overflow-hidden"><summary className="faq-question p-6 list-none cursor-pointer"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></details>))}</div></div>))}
      </div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="max-w-3xl mx-auto text-center"><h2 className="text-3xl font-bold text-primary mb-4">Still Have Questions?</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 mb-8">We&apos;d be delighted to discuss your requirements. Book a consultation or give us a call.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/tailor-savile-row/contact" className="btn-accent">Book a Consultation</Link><a href="tel:02079464789" className="btn-outline">Call 020 7946 4789</a></div></div></div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience Savile Row Tailoring</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Visit our atelier for a complimentary consultation and discover the art of bespoke.</p><Link href="/tailor-savile-row/contact" className="btn-accent">Book Your Consultation</Link></div></section>
    </>
  );
}
