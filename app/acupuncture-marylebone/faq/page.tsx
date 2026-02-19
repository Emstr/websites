import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Acupuncture Questions Answered",
  description: "Common questions about acupuncture treatment, what to expect, safety, and how acupuncture can help with pain, fertility, stress and more. Marylebone Acupuncture Clinic.",
  openGraph: { title: "FAQ | Marylebone Acupuncture Clinic", description: "Everything you need to know about acupuncture treatment at our Marylebone clinic." },
};

export default function FAQPage() {
  const faqs = [
    { category: "About Acupuncture", questions: [
      { question: "Does acupuncture hurt?", answer: "Most people find acupuncture surprisingly comfortable. The needles used are ultra-fine — much thinner than injection needles. You may feel a brief sensation as the needle is inserted, often described as a dull ache or tingling, but most patients find the treatment deeply relaxing and many fall asleep during sessions." },
      { question: "Is acupuncture safe?", answer: "Yes, when practised by a qualified, BAcC registered acupuncturist, acupuncture is very safe. We use only sterile, single-use disposable needles. Side effects are rare and typically minor — occasional bruising or drowsiness after treatment. Our practitioner is fully insured and adheres to strict BAcC safety guidelines." },
      { question: "What conditions can acupuncture treat?", answer: "Acupuncture is used for a wide range of conditions including chronic pain, migraines, back pain, fertility issues, stress, anxiety, insomnia, digestive problems, menstrual disorders, and many more. The World Health Organisation (WHO) recognises acupuncture as effective for over 100 conditions." },
      { question: "How many sessions will I need?", answer: "This varies depending on your condition. Acute problems may respond in 3-4 sessions, while chronic conditions typically need 6-10 sessions. We'll discuss a recommended treatment plan at your initial consultation. Many patients then choose to have maintenance sessions monthly or seasonally." },
    ] },
    { category: "Your First Visit", questions: [
      { question: "What happens at the initial consultation?", answer: "Your first appointment lasts approximately 75 minutes. We take a detailed health history, ask about your symptoms, lifestyle, diet and emotional wellbeing. Traditional Chinese medicine diagnostic methods including pulse and tongue assessment are used. Treatment is usually given at the first appointment, with time for questions." },
      { question: "How should I prepare for my appointment?", answer: "Eat a light meal 1-2 hours before your appointment (don't come on an empty stomach). Wear loose, comfortable clothing that allows access to your arms and legs. Avoid alcohol and caffeine before treatment if possible. Bring a list of any medications you're taking." },
      { question: "How long do follow-up sessions last?", answer: "Follow-up appointments are typically 50-60 minutes. This includes a brief check-in about your symptoms since the last session, followed by treatment. We reassess your treatment plan regularly and adjust as needed." },
    ] },
    { category: "Specific Treatments", questions: [
      { question: "Can acupuncture help with IVF?", answer: "Research suggests that acupuncture can improve IVF outcomes. We offer specific protocols for before and after embryo transfer, as well as throughout the IVF cycle to reduce stress, improve blood flow to the uterus and support overall reproductive health. We work alongside all major London fertility clinics." },
      { question: "Is acupuncture effective for chronic pain?", answer: "Yes. NICE (the National Institute for Health and Care Excellence) recommends acupuncture for chronic pain, including lower back pain. Our clinic has extensive experience treating chronic pain conditions, often achieving results where other treatments have been unsuccessful." },
      { question: "What is cosmetic acupuncture?", answer: "Cosmetic acupuncture uses fine needles in facial acupuncture points to stimulate collagen production, improve muscle tone and increase circulation to the skin. It's a natural alternative to Botox and fillers. A course of 10 sessions is recommended, with results typically visible after 4-5 sessions." },
    ] },
    { category: "Practical Information", questions: [
      { question: "How much does acupuncture cost?", answer: "Initial consultations (75 minutes) are priced competitively for central London. Follow-up sessions (50-60 minutes) are at a standard rate. We offer package discounts for courses of treatment. Please contact us for our current fee schedule. Some health insurance policies cover acupuncture — check with your provider." },
      { question: "Do you accept health insurance?", answer: "We are recognised by most major health insurance providers. Please check with your insurer that acupuncture is covered under your policy and that our practitioner is approved. We can provide receipts in the format required by your insurance company." },
      { question: "What is the BAcC?", answer: "The British Acupuncture Council (BAcC) is the UK's leading self-regulatory body for the practice of traditional acupuncture. BAcC members must have completed a degree-level qualification, maintain professional insurance, follow a strict code of conduct, and undertake ongoing professional development." },
    ] },
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((c) => c.questions.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1><p className="text-xl text-gray-200 leading-relaxed">Answers to common questions about acupuncture, our clinic and what to expect from your treatment.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="max-w-4xl mx-auto">
        {faqs.map((cat, ci) => (<div key={ci} className="mb-12"><h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-accent"></div>{cat.category}</h2><div className="space-y-1">{cat.questions.map((faq, fi) => (<details key={fi} className="group bg-gray-50 rounded-sm overflow-hidden"><summary className="faq-question p-6 list-none cursor-pointer"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></details>))}</div></div>))}
      </div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="max-w-3xl mx-auto text-center"><h2 className="text-3xl font-bold text-primary mb-4">Still Have Questions?</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 mb-8">We&apos;re always happy to answer your questions. Get in touch and we&apos;ll help you understand how acupuncture can benefit you.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/acupuncture-marylebone/contact" className="btn-accent">Contact Us</Link><a href="tel:02079465890" className="btn-outline">Call 020 7946 5890</a></div></div></div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Healing Journey?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book your initial consultation at our Marylebone clinic today.</p><Link href="/acupuncture-marylebone/contact" className="btn-accent">Book Your Appointment</Link></div></section>
    </>
  );
}
