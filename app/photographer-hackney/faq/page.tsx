import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "FAQ | Photography Questions Answered", description: "Frequently asked questions about Hackney Photography Studio. Booking, pricing, weddings, studio hire and more.", openGraph: { title: "FAQ | Hackney Photography Studio", description: "Common questions about our photography services, pricing and booking process." } };

export default function FAQPage() {
  const faqs = [
    { category: "Booking & Pricing", questions: [
      { question: "How much do you charge?", answer: "Our pricing depends on the type of shoot, duration and deliverables. Portrait sessions start from around £150, while wedding packages start from £1,200. Commercial and event pricing is project-based. Get in touch for a tailored quote." },
      { question: "How far in advance should I book?", answer: "For portraits and commercial work, 1-2 weeks is usually sufficient. Weddings should ideally be booked 6-12 months in advance. Studio hire can often be arranged at shorter notice depending on availability." },
      { question: "Do you require a deposit?", answer: "Yes, we require a 30% deposit to secure your booking, with the balance due on or before the shoot date. For weddings, a signed contract and deposit are required to confirm the date." },
      { question: "What's your cancellation policy?", answer: "We understand plans change. Cancellations made more than 14 days before the shoot receive a full deposit refund. Within 14 days, the deposit is non-refundable but can be applied to a rescheduled date." },
    ] },
    { category: "The Shoot", questions: [
      { question: "How long does a typical shoot last?", answer: "Portrait sessions are usually 1-2 hours. Family sessions are about 1 hour. Wedding coverage ranges from 6 to 12 hours depending on the package. Commercial shoots vary based on the brief." },
      { question: "Can I bring my own styling or props?", answer: "Absolutely. We encourage you to bring anything that helps tell your story. Our studio also has a range of backdrops and props available for use." },
      { question: "Do you shoot on location?", answer: "Yes, we're happy to shoot on location across London and the UK. Location shoots may incur a travel fee depending on distance. Our studio is also available for all in-house shoots." },
    ] },
    { category: "After the Shoot", questions: [
      { question: "How quickly will I receive my images?", answer: "Portrait and family sessions are delivered within 5-7 working days. Weddings are delivered within 4-6 weeks. Commercial projects are agreed on a case-by-case basis, and rush delivery is available for an additional fee." },
      { question: "How are images delivered?", answer: "All images are delivered via a private online gallery where you can view, download and share your photos in full resolution. We can also provide USB delivery or prints on request." },
      { question: "Do you offer prints and albums?", answer: "Yes, we offer professional prints, canvas wraps, framed prints and bespoke wedding albums. Prices are provided on request and we work with premium print labs for the best quality." },
    ] },
    { category: "Studio Hire", questions: [
      { question: "What equipment is included with studio hire?", answer: "Our studio hire includes the use of our Profoto lighting system, multiple backdrop options, props and styling accessories, and the client lounge area. You're also welcome to bring your own equipment." },
      { question: "What are the studio hire rates?", answer: "Half-day hire (4 hours) and full-day hire (8 hours) options are available. Rates vary depending on the day of the week. Contact us for current pricing and availability." },
    ] },
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((c) => c.questions.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-gradient py-20 lg:py-28"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">FAQ</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1><p className="text-xl text-gray-200 leading-relaxed">Everything you need to know about booking, pricing, the shoot and what happens after.</p></div></div></section>

      <section className="py-16 lg:py-24 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-4xl mx-auto">{faqs.map((category, ci) => (<div key={ci} className="mb-12"><h2 className="text-2xl font-bold text-[var(--primary)] mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-[var(--accent)]"></div>{category.category}</h2><div className="space-y-1">{category.questions.map((faq, fi) => (<details key={fi} className="group bg-gray-50 rounded-sm overflow-hidden"><summary className="flex items-center justify-between p-6 list-none cursor-pointer font-semibold text-[var(--primary)] hover:text-[var(--accent)] transition-colors"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></details>))}</div></div>))}</div></div></section>

      <section className="py-16 lg:py-24 bg-gray-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto text-center"><h2 className="text-3xl font-bold text-[var(--primary)] mb-4">Still Have Questions?</h2><div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div><p className="text-lg text-gray-600 mb-8">Drop us a message or give us a call. We&apos;re always happy to chat about your project.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/photographer-hackney/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors">Contact Us</Link><a href="tel:02079460134" className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--primary)] hover:text-white transition-colors">Call 020 7946 0134</a></div></div></div></section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Book?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Let&apos;s create something brilliant together.</p><Link href="/photographer-hackney/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Book a Shoot</Link></div></section>
    </>
  );
}
