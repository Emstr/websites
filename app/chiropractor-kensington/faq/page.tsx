import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "FAQ | Chiropractic Questions Answered", description: "Frequently asked questions about chiropractic care at Kensington Chiropractic Centre. Learn about treatments, safety, pricing and what to expect.", openGraph: { title: "FAQ | Kensington Chiropractic Centre", description: "Common questions about chiropractic care in Kensington." } };

export default function FAQPage() {
  const faqs = [
    { category: "About Chiropractic", questions: [
      { question: "What is chiropractic?", answer: "Chiropractic is a regulated healthcare profession that focuses on the diagnosis, treatment and prevention of musculoskeletal conditions, particularly those related to the spine. Chiropractors use hands-on spinal adjustments and other techniques to restore proper joint function and relieve pain." },
      { question: "Is chiropractic safe?", answer: "Yes, chiropractic is widely recognised as one of the safest non-invasive therapies for musculoskeletal conditions. All our chiropractors are registered with the General Chiropractic Council (GCC) and follow strict safety protocols. We carry out thorough assessments before any treatment and will always discuss risks with you." },
      { question: "Do I need a GP referral?", answer: "No, you can book directly with us without a GP referral. Chiropractors are primary healthcare practitioners qualified to diagnose and treat musculoskeletal conditions. However, if we feel your condition requires further investigation, we will refer you to the appropriate specialist." },
      { question: "What conditions do you treat?", answer: "We treat a wide range of conditions including back pain, neck pain, headaches, sciatica, sports injuries, postural problems, joint pain and pregnancy-related discomfort. If you're unsure whether we can help with your condition, please call us for advice." },
    ] },
    { category: "Your Appointment", questions: [
      { question: "What happens at the first appointment?", answer: "Your initial consultation lasts approximately 45 minutes. We'll take a detailed history, perform a thorough physical examination and may take X-rays if clinically indicated. We'll explain your diagnosis, discuss treatment options and, if appropriate, begin treatment on the same visit." },
      { question: "Does chiropractic treatment hurt?", answer: "Most patients find chiropractic adjustments comfortable and even relieving. You may hear a popping sound during an adjustment — this is simply gas being released from the joint. Some patients experience mild soreness for 24-48 hours after treatment, similar to post-exercise soreness." },
      { question: "How many treatments will I need?", answer: "This varies significantly depending on your condition, its severity and how long you've had it. Acute conditions may respond in 3-6 sessions, while chronic conditions may require longer. We'll give you an honest estimate after your initial assessment." },
      { question: "What should I wear to my appointment?", answer: "Comfortable, loose-fitting clothing is ideal. We may need to examine the area of concern directly, so please wear appropriate undergarments. Changing facilities are available." },
    ] },
    { category: "Pricing & Insurance", questions: [
      { question: "How much does treatment cost?", answer: "Please contact us for our current fees. We offer an initial consultation fee and a separate follow-up treatment fee. We are transparent about pricing and will always discuss costs before beginning treatment." },
      { question: "Do you accept health insurance?", answer: "Yes, we are recognised by most major health insurers including Bupa, AXA PPP, Aviva, Vitality and WPA. Please check with your insurer regarding your cover level and any authorisation requirements before your appointment." },
      { question: "Do you offer payment plans?", answer: "We offer block booking discounts for courses of treatment. Please speak to our reception team about available options." },
    ] },
    { category: "Specific Conditions", questions: [
      { question: "Can chiropractic help with sciatica?", answer: "Yes, chiropractic care is one of the most effective treatments for sciatica. We address the underlying cause of sciatic nerve irritation — whether it's a herniated disc, spinal stenosis or piriformis syndrome — using adjustments, decompression therapy and rehabilitation exercises." },
      { question: "Is chiropractic safe during pregnancy?", answer: "Yes, chiropractic care is safe and beneficial during pregnancy when performed by a qualified practitioner. Our chiropractors are trained in the Webster Technique and use pregnancy-specific treatment tables. Many expectant mothers find chiropractic provides significant relief from back and pelvic pain." },
      { question: "Can children receive chiropractic treatment?", answer: "Yes, we treat children and adolescents using age-appropriate, gentle techniques. Common reasons for paediatric chiropractic include postural issues, growing pains, sports injuries and headaches. Treatment for children is always gentle and adapted to their size and development." },
    ] },
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((c) => c.questions.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1><p className="text-xl text-gray-200 leading-relaxed">Everything you need to know about chiropractic care at our Kensington clinic.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="max-w-4xl mx-auto">{faqs.map((category, ci) => (<div key={ci} className="mb-12"><h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-accent"></div>{category.category}</h2><div className="space-y-1">{category.questions.map((faq, fi) => (<details key={fi} className="group bg-gray-50 rounded-sm overflow-hidden"><summary className="faq-question p-6 list-none cursor-pointer"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></details>))}</div></div>))}</div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="max-w-3xl mx-auto text-center"><h2 className="text-3xl font-bold text-primary mb-4">Still Have Questions?</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 mb-8">Our team is happy to answer any questions about your condition or our treatments.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/chiropractor-kensington/contact" className="btn-accent">Contact Us</Link><a href="tel:02079465890" className="btn-outline">Call 020 7946 5890</a></div></div></div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Book Your Appointment?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Take the first step towards better spinal health. New patients welcome.</p><Link href="/chiropractor-kensington/contact" className="btn-accent">Book an Appointment</Link></div></section>
    </>
  );
}
