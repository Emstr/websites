import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "FAQ | Yoga Questions Answered", description: "Frequently asked questions about Fulham Yoga Studio. Classes, memberships, what to bring, beginners, pregnancy yoga, hot yoga and more.", openGraph: { title: "FAQ | Fulham Yoga Studio", description: "Common questions about our yoga classes, memberships and studio facilities." } };

export default function FAQPage() {
  const faqs = [
    { category: "Getting Started", questions: [
      { question: "I've never done yoga before. Can I still come?", answer: "Absolutely. All of our classes welcome beginners and our instructors always offer modifications. We recommend starting with a Vinyasa Flow Level 1 or a Yin Yoga class. Your first class is free, so there's no pressure at all." },
      { question: "What should I wear?", answer: "Wear comfortable, breathable clothing that allows you to move freely. For hot yoga, lightweight, moisture-wicking fabrics are ideal. We practise barefoot, so no need for special footwear." },
      { question: "Do I need to bring my own mat?", answer: "No. We provide high-quality mats, blocks, bolsters, blankets and straps for every class. You are welcome to bring your own mat if you prefer. For hot yoga, we also provide towels." },
      { question: "How early should I arrive?", answer: "Please arrive 10-15 minutes before your first class so we can show you around, answer any questions and help you get settled. For subsequent visits, 5 minutes before class starts is ideal." },
    ] },
    { category: "Classes & Timetable", questions: [
      { question: "How many classes do you offer per week?", answer: "We run over 40 classes per week across six styles: Vinyasa Flow, Yin Yoga, Hot Yoga, Pregnancy Yoga, Private Sessions and workshops. Classes run from early morning through to evening, seven days a week." },
      { question: "What's the difference between Vinyasa and Yin?", answer: "Vinyasa Flow is dynamic and energising — you move through sequences linked to your breath. Yin Yoga is slow and meditative — postures are held for 3-5 minutes to target deep connective tissues. Both are wonderful and complementary practices." },
      { question: "Is hot yoga suitable for beginners?", answer: "Yes, but we recommend trying a regular class first to familiarise yourself with the postures. Hot yoga is practised at 35-38°C, so it is more physically demanding. Stay well hydrated before, during and after class." },
      { question: "Can I attend pregnancy yoga in my first trimester?", answer: "We generally recommend starting pregnancy yoga from the second trimester (around 14 weeks). Please consult your midwife or GP first, and always let your instructor know how far along you are." },
    ] },
    { category: "Memberships & Pricing", questions: [
      { question: "How much does a class cost?", answer: "Drop-in classes are £16. We offer class packs (5 classes for £70, 10 for £130) and unlimited monthly memberships from £99. Your first class is completely free. Contact us for current pricing and any introductory offers." },
      { question: "Do you offer a free trial?", answer: "Yes. Your very first class at Fulham Yoga Studio is completely free, no strings attached. Simply book online or walk in, and let reception know it's your first visit." },
      { question: "Can I freeze my membership?", answer: "Yes. Monthly memberships can be frozen for up to 4 weeks per year at no additional cost. Please give us at least 7 days' notice. Longer freezes can be arranged in exceptional circumstances." },
      { question: "What's your cancellation policy?", answer: "Classes can be cancelled free of charge up to 4 hours before the start time. Late cancellations or no-shows will be charged as a used class from your pack, or incur a £5 fee for members." },
    ] },
    { category: "Studio & Facilities", questions: [
      { question: "Do you have showers and changing rooms?", answer: "Yes. We have spacious changing rooms with showers, hair dryers, complimentary toiletries and secure lockers. Everything you need to freshen up before or after class." },
      { question: "Is there parking nearby?", answer: "There is limited pay-and-display parking on Wandsworth Bridge Road and surrounding streets. We encourage cycling — there is bike parking directly outside the studio — or public transport. Fulham Broadway (District line) is an 8-minute walk." },
      { question: "Can I hire the studio for private events?", answer: "Yes. Our studio is available for private hire outside of regular class hours. It is popular for corporate wellness sessions, birthday yoga, hen party yoga and small workshops. Contact us for availability and pricing." },
    ] },
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((c) => c.questions.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-gradient py-20 lg:py-28"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">FAQ</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1><p className="text-xl text-gray-200 leading-relaxed">Everything you need to know about our classes, memberships, facilities and what to expect at Fulham Yoga Studio.</p></div></div></section>

      <section className="py-16 lg:py-24 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-4xl mx-auto">{faqs.map((category, ci) => (<div key={ci} className="mb-12"><h2 className="text-2xl font-bold text-[var(--primary)] mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-[var(--accent)]"></div>{category.category}</h2><div className="space-y-1">{category.questions.map((faq, fi) => (<details key={fi} className="group bg-gray-50 rounded-sm overflow-hidden"><summary className="flex items-center justify-between p-6 list-none cursor-pointer font-semibold text-[var(--primary)] hover:text-[var(--accent)] transition-colors"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></details>))}</div></div>))}</div></div></section>

      <section className="py-16 lg:py-24 bg-gray-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto text-center"><h2 className="text-3xl font-bold text-[var(--primary)] mb-4">Still Have Questions?</h2><div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div><p className="text-lg text-gray-600 mb-8">Drop us a message or pop into the studio. We&apos;re always happy to help.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/yoga-fulham/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors">Contact Us</Link><a href="tel:02079461456" className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--primary)] hover:text-white transition-colors">Call 020 7946 1456</a></div></div></div></section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Your first class is free. No commitment, no pressure — just yoga.</p><Link href="/yoga-fulham/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Book a Free Taster</Link></div></section>
    </>
  );
}
