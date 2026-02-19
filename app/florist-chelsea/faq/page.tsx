import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Common Questions Answered",
  description: "Frequently asked questions about Chelsea Blooms. Delivery, wedding consultations, ordering, subscriptions and more.",
  openGraph: { title: "FAQ | Chelsea Blooms", description: "Common questions about our flowers, delivery, weddings and services." },
};

export default function FAQPage() {
  const faqs = [
    { category: "Ordering & Delivery", questions: [
      { question: "Do you offer same day delivery?", answer: "Yes, we offer same day delivery across Chelsea and greater London for orders placed before 1pm. Delivery charges vary depending on location. Central London deliveries are typically available within a few hours." },
      { question: "How far do you deliver?", answer: "We deliver across all London postcodes. For locations outside the M25, please contact us to discuss arrangements. We also offer nationwide delivery through our courier partners for bouquets." },
      { question: "Can I specify a delivery time?", answer: "We offer morning (before 12pm) and afternoon (12pm-6pm) delivery windows. For wedding and event deliveries, we work to your exact schedule. Timed delivery slots may incur an additional charge." },
      { question: "How do I order flowers?", answer: "You can order by calling us on 020 7946 9012, emailing orders@chelseablooms.co.uk, or by filling in the enquiry form on our website. For same day delivery, calling is fastest." },
    ] },
    { category: "Wedding Flowers", questions: [
      { question: "How far in advance should I book wedding flowers?", answer: "We recommend booking 6-12 months in advance for weddings, especially during peak season (May-September). However, we can sometimes accommodate shorter notice requests, so it's always worth asking." },
      { question: "Do you offer a free wedding consultation?", answer: "Yes, we offer a complimentary initial consultation at our Chelsea studio to discuss your vision, venue and budget. We'll create a detailed proposal and mood board for your review." },
      { question: "Can you set up and break down venue flowers?", answer: "Absolutely. Our team handles everything from delivery and installation to post-event breakdown and removal. It's all included in our wedding packages." },
    ] },
    { category: "Corporate & Events", questions: [
      { question: "Do you offer contract pricing for regular orders?", answer: "Yes, we offer competitive contract rates for businesses that require regular floral arrangements. Weekly and fortnightly deliveries are our most popular options. Contact us for a bespoke quote." },
      { question: "Can you style a corporate event?", answer: "Yes, we provide full event styling from concept to installation. Product launches, gala dinners, conferences and more. We can work with your event planner or manage the floral elements independently." },
    ] },
    { category: "Subscriptions & Gifts", questions: [
      { question: "How do flower subscriptions work?", answer: "Choose your frequency (weekly, fortnightly or monthly), your preferred style and your budget. We'll create a beautiful seasonal arrangement and deliver it to your door. You can pause, change or cancel at any time with 48 hours' notice." },
      { question: "Do you sell gift vouchers?", answer: "Yes, we offer gift vouchers for any amount. They can be used towards bouquets, subscriptions, or any of our services. Available for purchase in-store, by phone or by email." },
      { question: "Are your flowers sustainably sourced?", answer: "Yes, sustainability is core to our ethos. We prioritise British-grown, seasonal flowers and work with ethical importers. We're reducing our use of floral foam and use eco-friendly packaging wherever possible." },
    ] },
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((c) => c.questions.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-gradient py-20 lg:py-28"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">FAQ</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1><p className="text-xl text-gray-200 leading-relaxed">Everything you need to know about ordering, delivery, weddings and our services.</p></div></div></section>

      <section className="py-16 lg:py-24 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-4xl mx-auto">{faqs.map((category, ci) => (<div key={ci} className="mb-12"><h2 className="text-2xl font-bold text-[var(--primary)] mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-[var(--accent)]"></div>{category.category}</h2><div className="space-y-1">{category.questions.map((faq, fi) => (<details key={fi} className="group bg-gray-50 rounded-sm overflow-hidden"><summary className="flex items-center justify-between p-6 list-none cursor-pointer font-semibold text-[var(--primary)] hover:text-[var(--accent)] transition-colors"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></details>))}</div></div>))}</div></div></section>

      <section className="py-16 lg:py-24 bg-gray-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto text-center"><h2 className="text-3xl font-bold text-[var(--primary)] mb-4">Need More Help?</h2><div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div><p className="text-lg text-gray-600 mb-8">We&apos;re always happy to chat. Pop into our Chelsea studio or give us a call.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/florist-chelsea/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors">Contact Us</Link><a href="tel:02079469012" className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--primary)] hover:text-white transition-colors">Call 020 7946 9012</a></div></div></div></section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Order?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Same day delivery available across London. Let us create something beautiful for you.</p><Link href="/florist-chelsea/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Order Flowers</Link></div></section>
    </>
  );
}
