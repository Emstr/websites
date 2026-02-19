import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Common Locksmith Questions Answered",
  description: "Frequently asked questions about locksmith services in Camden. Emergency lockouts, lock changes, pricing, and security advice.",
};

export default function FAQPage() {
  const faqs = [
    { category: "Emergency Lockouts", questions: [
      { question: "How quickly can you get to me?", answer: "For lockouts within Camden (NW1), our average response time is under 30 minutes. We have locksmiths stationed across the area ready to respond. We'll give you an estimated arrival time when you call." },
      { question: "Will you damage my door to get in?", answer: "In 98% of cases, no. Our locksmiths are trained in non-destructive entry techniques. We use specialist tools to pick or bypass your lock without causing any damage. If a lock does need to be drilled (very rare), we'll discuss this with you first." },
      { question: "Is there a call-out fee?", answer: "No. We do not charge a call-out fee. You only pay for the actual work carried out. The price we quote when we arrive is the price you pay — guaranteed." },
      { question: "Can you help if I've lost all my keys?", answer: "Absolutely. We can gain entry, then either rekey your existing locks or fit new ones, and cut new keys on site. We recommend changing locks if keys are lost, as someone else may have found them." },
    ]},
    { category: "Lock Replacement & Security", questions: [
      { question: "What locks do you recommend?", answer: "For front doors, we recommend British Standard (BS 3621) mortice deadlocks or anti-snap Euro cylinders. These meet insurance requirements and provide excellent security. We stock locks from Yale, Chubb, ERA, and other trusted brands." },
      { question: "My insurance says I need BS 3621 locks. What does that mean?", answer: "BS 3621 is the British Standard for thief-resistant locks. Most home insurance policies require at least one BS 3621 lock on your main entrance. We can check your current locks and upgrade them if needed to ensure you're compliant." },
      { question: "Do you install smart locks?", answer: "Yes, we install smart locks from Yale, Nuki, August, and others. Smart locks let you control access via your phone, give temporary codes to visitors, and see who's coming and going. We'll ensure they're properly fitted and integrated." },
      { question: "Can you improve my home security?", answer: "Yes. We offer free home security assessments where we identify vulnerabilities — weak locks, poor door frames, unsecured windows — and recommend practical improvements. We focus on effective, affordable security measures." },
    ]},
    { category: "UPVC & Specialist Locks", questions: [
      { question: "Can you fix my UPVC door that won't lock?", answer: "Yes. Common UPVC door issues include broken gearboxes, misaligned hooks, and worn handles. We carry parts for most UPVC mechanisms and can usually repair or replace them on the first visit." },
      { question: "My key snapped in the lock. Can you help?", answer: "Yes, this is one of our most common calls. We can extract broken keys from virtually any lock type. If the lock is damaged in the process, we can replace it on the spot." },
      { question: "Do you work on safes?", answer: "Yes. We can open most domestic and office safes using specialist techniques. We also supply and install new safes, change combinations, and repair existing units." },
    ]},
    { category: "Pricing & Trust", questions: [
      { question: "How much does a locksmith cost in Camden?", answer: "Lock changes typically start from £60-£90 for a standard cylinder change. Emergency lockouts start from £75-£100 depending on the lock type and time of day. We always confirm the price before starting work — no surprises." },
      { question: "Are your locksmiths really DBS checked?", answer: "Yes, every Camden Lock & Key locksmith holds a current enhanced DBS certificate. You can ask to see it before we start work. This is your assurance that we've been thoroughly vetted and are trustworthy to enter your home." },
      { question: "Do you guarantee your work?", answer: "Yes, all workmanship comes with a 12-month guarantee. New locks carry the manufacturer's warranty. If any issue arises from our work, we'll return and put it right at no extra cost." },
      { question: "Can I pay by card?", answer: "Yes, we accept all major debit and credit cards, as well as cash and bank transfer. Card payment is available on site with our mobile terminals." },
    ]},
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((c) => c.questions.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-gradient py-20 lg:py-28"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">FAQ</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1><p className="text-xl text-gray-200 leading-relaxed">Got a question about our locksmith services? Find answers below or call us anytime.</p></div></div></section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-4xl mx-auto">
          {faqs.map((category, ci) => (
            <div key={ci} className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--primary)] mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-[var(--accent)]"></div>{category.category}</h2>
              <div className="space-y-1">{category.questions.map((faq, fi) => (
                <details key={fi} className="group bg-gray-50 rounded-sm overflow-hidden">
                  <summary className="flex justify-between items-center p-6 list-none cursor-pointer font-semibold text-[var(--primary)] hover:text-[var(--accent)] transition-colors"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
                  <div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div>
                </details>
              ))}</div>
            </div>
          ))}
        </div></div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto text-center"><h2 className="text-3xl font-bold text-[var(--primary)] mb-4">Still Have Questions?</h2><div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div><p className="text-lg text-gray-600 mb-8">Give us a call or send a message. We&apos;re always happy to help.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><a href="tel:02079460789" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Call 020 7946 0789</a><Link href="/locksmith-camden/contact" className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--primary)] hover:text-white transition-colors inline-block">Contact Us</Link></div></div></div></section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Locked Out Right Now?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Don&apos;t wait — call us for a 30-minute response. DBS checked, no call-out fee.</p><a href="tel:02079460789" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Call Now — 020 7946 0789</a></div></section>

      <section className="py-8 bg-gray-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="bg-gray-50 border border-gray-200 rounded-sm p-4 text-sm text-gray-600"><p><strong>DBS Checked:</strong> All locksmiths are DBS checked and fully insured. Information on this page is for general guidance only.</p></div></div></section>
    </>
  );
}
