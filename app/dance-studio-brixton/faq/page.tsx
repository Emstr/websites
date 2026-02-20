import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Dance Class Questions Answered",
  description: "Frequently asked questions about dance classes at Brixton Dance Academy. What to wear, skill levels, pricing, and more.",
  openGraph: { title: "FAQ | Brixton Dance Academy", description: "Answers to common questions about joining dance classes in Brixton." },
};

export default function FAQPage() {
  const faqs = [
    { category: "Getting Started", questions: [
      { question: "I have never danced before. Can I still join?", answer: "Absolutely — most of our students started as complete beginners. Our beginner classes are specifically designed for people with no prior experience. Instructors break down every move step by step, and the atmosphere is encouraging, not intimidating. You will be surprised how quickly you pick things up." },
      { question: "What should I wear to class?", answer: "Comfortable clothing that allows you to move freely — leggings or joggers, a t-shirt, and clean trainers for most classes. For ballet, fitted clothing is preferred so the instructor can see your alignment, and ballet shoes or socks are recommended. We have changing rooms on site." },
      { question: "Do I need to bring anything?", answer: "Just a water bottle and yourself. We have a drinking fountain to refill your bottle, and the studios are air-conditioned. If you are attending a ballet class, bring ballet slippers if you have them, though socks are fine for your first class." },
      { question: "Can I try a class before committing?", answer: "Yes, we offer trial rates for your first class in any style. This lets you experience the teaching, the atmosphere, and the studio before deciding whether to continue. There is absolutely no pressure to sign up for a membership straight away." },
    ]},
    { category: "Classes & Levels", questions: [
      { question: "How are classes graded?", answer: "Most styles are offered at beginner, intermediate, and advanced levels. Beginner classes assume no prior knowledge. Intermediate classes build on foundational technique and introduce more complex choreography. Advanced classes are for experienced dancers looking for serious challenge. Your instructor can advise which level is right for you." },
      { question: "How long is each class?", answer: "Standard classes are 60 minutes, which includes a warm-up, the main class content, and a cool-down. Some advanced and choreography-focused classes run for 90 minutes. Private sessions can be booked in 60 or 90-minute slots." },
      { question: "Can I attend multiple styles?", answer: "Of course — many of our students attend two or three different styles each week. Our memberships allow unlimited classes, making it easy and affordable to explore. Studying multiple styles is one of the best ways to develop as a versatile dancer." },
      { question: "What age groups do the kids classes cover?", answer: "We have three kids groups: Little Movers (ages 4-7), Junior Crew (ages 8-11), and Teen Squad (ages 12-16). All kids instructors are DBS-checked and trained in working with young people. Adult classes are 16+ unless otherwise stated." },
    ]},
    { category: "Pricing & Membership", questions: [
      { question: "How much do classes cost?", answer: "We offer both pay-as-you-go and monthly membership options. Pay-as-you-go rates are competitive, and monthly memberships provide unlimited classes at a significantly reduced rate per session. Contact us for our current price list." },
      { question: "Is there a joining fee?", answer: "No, there is no joining fee or sign-up cost. You only pay for your classes or membership. We also do not lock you into long contracts — monthly memberships can be cancelled with 30 days notice." },
      { question: "Do you offer concessions?", answer: "Yes, we offer reduced rates for students, under-18s, over-60s, and NHS workers. Please bring valid ID when registering. We also run community-funded free places — ask us for details if cost is a barrier." },
    ]},
    { category: "Practical Information", questions: [
      { question: "Where exactly is the studio?", answer: "We are on the third floor of 6 Acre Lane, Brixton, SW2 5SG. The entrance is on Acre Lane itself — look for the Brixton Dance Academy sign. It is a five-minute walk from Brixton Underground station and eight minutes from Clapham North." },
      { question: "Is there parking nearby?", answer: "There is limited pay-and-display parking on Acre Lane and surrounding streets. However, we strongly recommend taking the tube or bus as Brixton is extremely well connected. The P5, 35, 45, and 345 buses all stop within two minutes of the studio." },
      { question: "Do you host events and performances?", answer: "Yes, we hold an annual summer showcase where students of all levels perform on stage. We also host regular social dance nights, guest workshops with visiting choreographers, and community open days. These events are a highlight of the Brixton Dance Academy experience." },
    ]},
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((cat) => cat.questions.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl">
        <span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-200 leading-relaxed">Everything you need to know about joining classes, what to expect, and how we work.</p>
      </div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="max-w-4xl mx-auto">
        {faqs.map((category, ci) => (<div key={ci} className="mb-12"><h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-accent"></div>{category.category}</h2><div className="space-y-1">{category.questions.map((faq, fi) => (<details key={fi} className="group bg-gray-50 rounded-sm overflow-hidden"><summary className="faq-question p-6 list-none cursor-pointer"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></details>))}</div></div>))}
      </div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Still Got Questions?</h2><div className="gold-line-center mb-6"></div>
        <p className="text-lg text-gray-600 mb-8">Drop us a message or give us a call — we are always happy to chat about classes, levels, and how to get started.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/dance-studio-brixton/contact" className="btn-accent">Contact Us</Link><a href="tel:02079463360" className="btn-outline">Call 020 7946 3360</a></div>
      </div></div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Dancing?</h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book your first class today. All levels welcome, no experience needed.</p>
        <Link href="/dance-studio-brixton/contact" className="btn-accent">Join a Class</Link>
      </div></section>
    </>
  );
}
