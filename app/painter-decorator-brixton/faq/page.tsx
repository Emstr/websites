import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Painting & Decorating Questions Answered",
  description: "Frequently asked questions about painting and decorating at Brixton Decorating Services. Learn about estimates, timescales, paint brands, preparation and our Dulux Select Decorator accreditation.",
  openGraph: { title: "FAQ | Brixton Decorating Services", description: "Common questions about our painting and decorating services in Brixton and South London." },
};

export default function FAQPage() {
  const faqs = [
    { category: "Estimates & Pricing", questions: [
      { question: "How do I get a quote?", answer: "Simply give us a call on 020 7946 2270 or fill in the form on our contact page. We will arrange a convenient time to visit your property, discuss your requirements in detail, and provide a written estimate within 48 hours. There is no charge and no obligation." },
      { question: "How much does it cost to paint a room?", answer: "The cost depends on the size of the room, the condition of the surfaces, the type of paint you choose, and whether any wallpaper needs removing first. As a rough guide, a standard-sized double bedroom typically costs between 400 and 700 pounds including materials. We always provide an exact price in our written estimate before any work begins." },
      { question: "Do you charge for estimates?", answer: "No, all our estimates are completely free with no obligation. We visit your property, take measurements, discuss your requirements, and provide a detailed written quote. If you decide not to go ahead, that is absolutely fine." },
      { question: "Are there any hidden costs?", answer: "Never. Our written estimates break down every cost clearly, including materials, labour and any preparation work required. The price we quote is the price you pay. If we discover any unexpected issues during the work, we will discuss them with you and agree any additional costs before proceeding." },
    ]},
    { category: "Timescales & Scheduling", questions: [
      { question: "How long does it take to paint a room?", answer: "A standard room with good surface condition typically takes one to two days including preparation, two coats on walls, and woodwork. Rooms that need extensive preparation, wallpaper removal, or multiple colours will take longer. We always provide a realistic timescale in our estimate." },
      { question: "How far in advance do I need to book?", answer: "We are usually booked two to four weeks ahead, though this varies by season. Spring and summer are our busiest periods. If your project is urgent, give us a call and we will do our best to fit you in. We always try to accommodate customers who need work done quickly." },
      { question: "Can you work around my schedule?", answer: "Absolutely. We understand that having decorators in your home can be disruptive, so we are happy to work around your routine. For commercial clients, we can work evenings and weekends to minimise disruption to your business." },
    ]},
    { category: "Materials & Quality", questions: [
      { question: "What paint brands do you use?", answer: "We primarily use Dulux Trade, Farrow and Ball, and Little Greene. These are professional-grade paints that offer superior coverage, durability and finish compared to retail products. If you have a preference for a particular brand or colour, we are happy to use it. We can also advise on the best paint type for your specific surfaces." },
      { question: "What is a Dulux Select Decorator?", answer: "The Dulux Select Decorators scheme is an accreditation programme that recognises decorators who meet the highest standards of workmanship, reliability and customer service. Members are independently vetted and must maintain high standards to remain in the scheme. It gives customers confidence that they are hiring a trusted professional." },
      { question: "Do you supply the paint or do I need to buy it?", answer: "We can handle everything, including sourcing and supplying the paint. We get trade prices from our suppliers, and we pass those savings on to you. Alternatively, if you prefer to buy the paint yourself or already have it, we are happy to use what you provide." },
    ]},
    { category: "Preparation & Process", questions: [
      { question: "Do you move furniture?", answer: "Yes, we move all furniture to the centre of the room or out of the room entirely, depending on the space available. We cover everything with dust sheets to protect it from paint splashes and dust. At the end of each day we tidy up, and when the job is finished we put everything back where it was." },
      { question: "How do you prepare surfaces before painting?", answer: "Proper preparation is the foundation of a good finish. We fill all cracks, holes and imperfections with appropriate fillers. We sand surfaces smooth, clean off any grease or dirt, and apply primer to bare or stained areas. For exterior work, we pressure-wash masonry, scrape and sand timber, and treat any rot before painting. We never cut corners on preparation." },
      { question: "Can you remove old wallpaper?", answer: "Yes, wallpaper removal is a core part of our service. We use steamers and specialist solutions to remove wallpaper cleanly without damaging the plaster beneath. Once the paper is off, we make good any imperfections in the wall before lining or painting. If the walls are in particularly poor condition, we can apply lining paper before painting for a perfectly smooth finish." },
    ]},
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((cat) => cat.questions.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1><p className="text-xl text-gray-200 leading-relaxed">Find answers to common questions about our painting and decorating services, pricing, timescales and more.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="max-w-4xl mx-auto">
        {faqs.map((category, categoryIndex) => (<div key={categoryIndex} className="mb-12"><h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-accent"></div>{category.category}</h2><div className="space-y-1">{category.questions.map((faq, faqIndex) => (<details key={faqIndex} className="group bg-gray-50 rounded-sm overflow-hidden"><summary className="faq-question p-6 list-none cursor-pointer"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></details>))}</div></div>))}
      </div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="max-w-3xl mx-auto text-center"><h2 className="text-3xl font-bold text-primary mb-4">Still Have Questions?</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 mb-8">Give us a ring, send us an email, or pop into our Atlantic Road office. We&apos;re always happy to help.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/painter-decorator-brixton/contact" className="btn-accent">Contact Us</Link><a href="tel:02079462270" className="btn-outline">Call 020 7946 2270</a></div></div></div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Space?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Get in touch for a free, no-obligation estimate. We cover all of Brixton and South London.</p><Link href="/painter-decorator-brixton/contact" className="btn-accent">Get a Free Quote</Link></div></section>
    </>
  );
}
