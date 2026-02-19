import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Removals Questions Answered",
  description: "Frequently asked questions about home and office removals, packing, storage, and our services in Ealing and West London.",
  openGraph: { title: "FAQ | Ealing Moving Company", description: "Common questions about removals, packing, storage, pricing, and what to expect on moving day." },
};

export default function FAQPage() {
  const faqs = [
    { category: "Planning Your Move", questions: [
      { question: "How far in advance should I book?", answer: "We recommend booking 4-6 weeks ahead, especially for moves at the end of the month or during summer. However, we can often accommodate last-minute moves if we have availability. Call us and we will do our best to help." },
      { question: "Do you offer a home survey?", answer: "Yes, we provide free, no-obligation home surveys for all house moves. One of our surveyors will visit your property, assess the volume of belongings, note any access issues, and provide a fixed-price quote on the spot or within 24 hours." },
      { question: "Can I get a quote without a survey?", answer: "For smaller moves or man and van jobs, we can often provide an accurate quote over the phone or via our online form. For larger moves, a survey ensures the quote is accurate and there are no surprises on the day." },
      { question: "What if my move date changes?", answer: "We understand that move dates can shift, especially in property chains. We are flexible and will work with you to rearrange. We ask for as much notice as possible to ensure availability." },
    ]},
    { category: "On Moving Day", questions: [
      { question: "What time will the crew arrive?", answer: "Our crews typically arrive between 8am and 9am, though we can arrange earlier or later starts. Your move coordinator will confirm the exact arrival time the day before your move." },
      { question: "Do I need to be present all day?", answer: "Ideally, yes - or at least have someone present who can direct the crew and make decisions about placement of items. We need someone at both the collection and delivery addresses." },
      { question: "What should I not pack?", answer: "We cannot transport hazardous items including aerosols, paints, flammable liquids, gas cylinders, or perishable food. We also recommend keeping valuables, passports, and important documents with you rather than in the removal van." },
    ]},
    { category: "Packing & Protection", questions: [
      { question: "Do you provide packing materials?", answer: "Yes, we supply all packing materials including boxes, tissue paper, bubble wrap, wardrobe cartons, and tape. These are included in our full packing service or available for purchase if you prefer to pack yourself." },
      { question: "Can you pack fragile or valuable items?", answer: "Absolutely. Our packers are trained in specialist techniques for wrapping china, glassware, artwork, mirrors, and antiques. We use custom crating for particularly valuable or awkward items." },
      { question: "Will you protect floors and banisters?", answer: "Yes. Our crews lay floor runners and use banister wraps to protect your property during the move. We take great care to avoid any damage to both your old and new home." },
    ]},
    { category: "Pricing & Insurance", questions: [
      { question: "Are your quotes fixed price?", answer: "Yes. After our home survey, we provide a fixed-price quotation based on the agreed inventory. The price will not change on moving day unless you add significantly more items than surveyed." },
      { question: "What insurance do you carry?", answer: "We carry comprehensive goods-in-transit insurance up to 50,000 pounds and public liability insurance up to 5 million pounds. Additional cover is available for high-value items. Full details are provided with your quotation." },
      { question: "Do I need to tip the crew?", answer: "Tips are never expected but always appreciated. If our crew has done a great job, a gesture of 10-20 pounds per person is customary. Alternatively, a cup of tea and some biscuits always goes down well!" },
    ]},
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((c) => c.questions.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl">
        <span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-200 leading-relaxed">Everything you need to know about moving with Ealing Moving Company.</p>
      </div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="max-w-4xl mx-auto">
        {faqs.map((category, ci) => (
          <div key={ci} className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-accent"></div>{category.category}</h2>
            <div className="space-y-1">
              {category.questions.map((faq, fi) => (
                <details key={fi} className="group bg-gray-50 rounded-sm overflow-hidden">
                  <summary className="faq-question p-6 list-none cursor-pointer"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
                  <div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Still Have Questions?</h2><div className="gold-line-center mb-6"></div>
        <p className="text-lg text-gray-600 mb-8">Give us a call and our friendly team will be happy to help with any queries about your move.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/removals-ealing/contact" className="btn-accent">Contact Us</Link><a href="tel:02079469234" className="btn-outline">Call 020 7946 9234</a></div>
      </div></div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Your Free Quote?</h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book a free home survey and receive a fixed-price quotation with no obligation.</p>
        <Link href="/removals-ealing/contact" className="btn-accent">Get a Free Quote</Link>
      </div></section>
    </>
  );
}
