import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Personal Training Questions Answered",
  description: "Frequently asked questions about personal training, group classes, nutrition coaching and our studio. Expert answers from Shoreditch Fitness Studio.",
  openGraph: { title: "FAQ | Shoreditch Fitness Studio", description: "Common questions about personal training and fitness services in Shoreditch, E1." },
};

export default function FAQPage() {
  const faqs = [
    { category: "Getting Started", questions: [
      { question: "Do I need to be fit to start personal training?", answer: "Absolutely not. Many of our clients start with little or no gym experience. Your trainer will assess your current fitness level and design a programme that starts where you are. Every exercise can be scaled and modified. The only thing you need to bring is commitment." },
      { question: "What happens at a free trial session?", answer: "Your trial session lasts approximately 45 minutes. We start with a chat about your goals, training history and any injuries or medical conditions. Then your trainer takes you through a taster workout to assess your movement and fitness. Afterwards, we discuss the best training options for you. There is no obligation and no hard sell." },
      { question: "What should I wear and bring?", answer: "Wear comfortable workout clothing and clean trainers suitable for indoor use. We provide towels and filtered water. If you have a heart rate monitor or fitness tracker, feel free to bring it along." },
      { question: "Can I train if I have an injury or medical condition?", answer: "In many cases, yes. Several of our trainers specialise in training around injuries and rehabilitation. We always ask about your medical history before training begins and can liaise with your physiotherapist or GP if needed. If you have a specific concern, call us and we can advise before you book." },
    ]},
    { category: "Training & Classes", questions: [
      { question: "How often should I train?", answer: "For most goals, we recommend two to four sessions per week depending on your experience, recovery capacity and schedule. Your trainer will advise on the optimal frequency for your specific goals. Consistency matters more than volume, so we find a schedule that works for your life." },
      { question: "What are group classes like?", answer: "Our group classes are capped at 8 people to ensure quality coaching. Each class is led by a qualified trainer who demonstrates movements, corrects technique and offers scaled options for different fitness levels. Sessions last 45 minutes and include a warm-up, main workout and cool-down. The atmosphere is supportive and energetic." },
      { question: "Can I mix personal training with group classes?", answer: "Yes, and many of our clients do exactly this. A popular combination is two or three personal training sessions per week supplemented with one or two group classes. We can design a hybrid programme that makes the most of both formats." },
      { question: "Do you offer outdoor training?", answer: "We occasionally run outdoor sessions in nearby parks during the warmer months, but the majority of our training takes place in our fully equipped studio. This gives us access to all the equipment we need and means sessions are never affected by weather." },
    ]},
    { category: "Nutrition & Results", questions: [
      { question: "Do I get a nutrition plan?", answer: "Nutrition coaching is included with our body transformation programmes and available as a standalone service or add-on to personal training. Your plan is personalised to your goals, preferences and lifestyle. We focus on practical, sustainable approaches rather than restrictive diets." },
      { question: "How soon will I see results?", answer: "Most clients notice improvements in energy, strength and how their clothes fit within the first three to four weeks. Visible body composition changes typically become clear from weeks six to eight. Results depend on consistency, nutrition and the effort you put in during sessions. Our transformation clients see dramatic changes within 12 weeks." },
      { question: "Do you offer supplements?", answer: "We do not sell supplements, but our nutrition coaches can advise on evidence-based supplementation where appropriate. We believe in a food-first approach and only recommend supplements where there is a genuine benefit, such as vitamin D, omega-3 or protein powder for convenience." },
    ]},
    { category: "Pricing & Membership", questions: [
      { question: "How much does personal training cost?", answer: "Our personal training sessions start from 55 per session when purchased as a package. We offer packages of 10, 20 and 30 sessions with increasing discounts. A free trial session is included with every new enquiry so you can experience our coaching before committing. Full pricing is available on request." },
      { question: "What does a group class membership cost?", answer: "We offer pay-as-you-go group classes at 15 per session, a 10-class pass for 120, or unlimited monthly membership at 99 per month. All new members receive their first class free. There is no joining fee and monthly memberships can be cancelled with 30 days notice." },
      { question: "Do you offer payment plans?", answer: "Yes. Our body transformation programmes can be paid in monthly instalments, and personal training packages can be spread over two or three payments. We want to make quality coaching accessible, so we are always happy to discuss a payment arrangement that works for you." },
      { question: "What is your cancellation policy?", answer: "We ask for at least 12 hours notice to cancel or reschedule a personal training session. Late cancellations or no-shows are charged at the full session rate. Group class bookings can be cancelled up to 4 hours before the class start time. Monthly memberships require 30 days written notice to cancel." },
    ]},
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((c) => c.questions.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1><p className="text-xl text-gray-200 leading-relaxed">Find answers to common questions about our personal training services, group classes, nutrition coaching and studio.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="max-w-4xl mx-auto">{faqs.map((category, ci) => (<div key={ci} className="mb-12"><h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-accent"></div>{category.category}</h2><div className="space-y-1">{category.questions.map((faq, fi) => (<details key={fi} className="group bg-gray-50 rounded-sm overflow-hidden"><summary className="faq-question p-6 list-none cursor-pointer"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></details>))}</div></div>))}</div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="max-w-3xl mx-auto text-center"><h2 className="text-3xl font-bold text-primary mb-4">Still Have Questions?</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 mb-8">Drop us a message, give us a call or pop into the studio. We are always happy to chat about your fitness goals.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/personal-trainer-shoreditch/contact" className="btn-accent">Contact Us</Link><a href="tel:02079466789" className="btn-outline">Call 020 7946 6789</a></div></div></div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book your free trial session today and experience what expert personal training feels like.</p><Link href="/personal-trainer-shoreditch/contact" className="btn-accent">Book Free Trial</Link></div></section>

      <section className="py-8 bg-gray-100"><div className="container-width"><div className="fca-notice"><p><strong>Professional Standards:</strong> All trainers at Shoreditch Fitness Studio are registered with the Register of Exercise Professionals (REPS) and hold a minimum Level 3 Personal Training qualification. Results described are individual outcomes and may vary. Always consult your GP before beginning a new exercise programme.</p></div></div></section>
    </>
  );
}
