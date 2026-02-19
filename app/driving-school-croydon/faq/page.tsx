import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Driving Lesson Questions Answered",
  description: "Frequently asked questions about driving lessons at Croydon Driving Academy. Learn about pricing, test preparation, lesson structure and more.",
  openGraph: { title: "FAQ | Croydon Driving Academy", description: "Common questions about driving lessons, courses and pricing in Croydon." },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        { question: "When can I start learning to drive?", answer: "You can start learning to drive at 17 years old. You'll need a provisional driving licence before your first lesson, which you can apply for up to 3 months before your 17th birthday. We can help advise on the application process if needed." },
        { question: "Do I need my own car?", answer: "No, we provide a modern, fully insured, dual-controlled car for all lessons. You don't need to arrange anything — just have your provisional licence ready and we'll handle the rest." },
        { question: "Where do you pick me up?", answer: "We offer door-to-door pick-up and drop-off anywhere in the Croydon area including Purley, Coulsdon, Thornton Heath, Norbury, Selhurst and Addiscombe. We can collect you from home, work, college or university." },
        { question: "Should I choose manual or automatic?", answer: "Manual gives you a full licence to drive both types of car. Automatic is simpler to learn and you may need fewer lessons. If you're unsure, we're happy to discuss which option suits your circumstances." },
      ],
    },
    {
      category: "Lessons & Pricing",
      questions: [
        { question: "How much do lessons cost?", answer: "Please contact us for our current prices. We offer competitive rates for individual lessons and discounted block bookings of 5 or 10 hours. Intensive course pricing is available on request and includes test booking." },
        { question: "How long is each lesson?", answer: "Standard lessons are either 1 or 2 hours. We recommend 2-hour lessons for faster progression, as you spend more time practising and less time on introductions and warm-up driving. Intensive courses use full-day sessions." },
        { question: "How many lessons will I need?", answer: "The DVSA suggests the average learner needs around 45 hours of professional tuition plus 22 hours of private practice to pass. However, everyone is different. Some pass in 25 hours, others need 60+. We'll give you an honest assessment after your first few lessons." },
        { question: "Can I cancel or reschedule a lesson?", answer: "Yes, we ask for at least 48 hours' notice for cancellations or rescheduling. Lessons cancelled with less than 48 hours' notice may be charged in full, except in genuine emergencies." },
      ],
    },
    {
      category: "The Driving Test",
      questions: [
        { question: "When will I be ready for my test?", answer: "We'll only recommend you book your test when we're confident you'll pass. Our 90% first-time pass rate reflects this honest approach. We'd rather you wait an extra week and pass than rush and fail." },
        { question: "Do you help with theory test preparation?", answer: "Yes, we provide guidance on theory test preparation and can recommend the best apps and resources. We also cover hazard perception awareness during practical lessons." },
        { question: "Will I use the lesson car for my test?", answer: "Yes, you'll take your test in the same car you've been learning in. We'll also provide a lesson immediately before your test so you're warmed up and confident." },
        { question: "What test centre will I use?", answer: "Most of our learners take their test at Croydon test centre. We know all the test routes intimately and ensure you've practised on every one before your test day." },
      ],
    },
    {
      category: "After Passing",
      questions: [
        { question: "What is Pass Plus?", answer: "Pass Plus is a DVSA-designed course for newly qualified drivers. It covers motorways, night driving, all-weather conditions and more. Completing it can reduce your insurance premiums with participating insurers." },
        { question: "Do you offer motorway lessons?", answer: "Yes, since 2018 learner drivers can take motorway lessons with an approved instructor. We also offer motorway tuition as part of our Pass Plus course or as standalone lessons for newly qualified drivers." },
        { question: "I passed years ago but haven't driven — can you help?", answer: "Absolutely. Our refresher courses are designed for exactly this situation. We'll assess your current ability and create a tailored plan to rebuild your confidence safely and efficiently." },
      ],
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((category) => category.questions.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } }))),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width"><div className="max-w-3xl">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-200 leading-relaxed">Everything you need to know about learning to drive with Croydon Driving Academy.</p>
        </div></div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width"><div className="max-w-4xl mx-auto">
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
        </div></div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width"><div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Still Have Questions?</h2>
          <div className="gold-line-center mb-6"></div>
          <p className="text-lg text-gray-600 mb-8">We&apos;re happy to chat. Give us a call or send us a message.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/driving-school-croydon/contact" className="btn-accent">Contact Us</Link>
            <a href="tel:02079463678" className="btn-outline">Call 020 7946 3678</a>
          </div>
        </div></div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Join over 2,000 successful learners. Book your first lesson today.</p>
          <Link href="/driving-school-croydon/contact" className="btn-accent">Book Your First Lesson</Link>
        </div>
      </section>
    </>
  );
}
