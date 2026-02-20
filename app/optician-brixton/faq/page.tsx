import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "FAQ | Eye Care Questions Answered", description: "Frequently asked questions about eye tests, contact lenses, frames, and our services at Brixton Eye Care.", openGraph: { title: "FAQ | Brixton Eye Care", description: "Common questions about eye care, booking, pricing, and our services." } };

export default function FAQPage() {
  const faqs = [
    { category: "Eye Examinations", questions: [
      { question: "How often should I have an eye test?", answer: "The NHS recommends an eye test every two years for most adults. However, you should have annual tests if you are over 60, have diabetes, glaucoma, or a family history of eye disease, or if you notice any changes in your vision. Children should be tested before starting school and every two years thereafter." },
      { question: "What happens during an eye test?", answer: "Our 30-minute examination includes a health history review, visual acuity testing, refraction to determine your prescription, eye pressure measurement, OCT scan of your retina, retinal photography, and a thorough assessment of your overall eye health. We explain every step and discuss our findings with you at the end." },
      { question: "Am I entitled to a free NHS eye test?", answer: "Free NHS eye tests are available for children under 16, full-time students under 19, adults over 60, people with diabetes or glaucoma, close relatives of glaucoma patients, and those receiving certain benefits. Our team will check your eligibility when you book." },
      { question: "What is an OCT scan?", answer: "OCT (Optical Coherence Tomography) is a non-invasive scan that creates a detailed cross-section image of your retina. It allows us to see beneath the surface of your eye and detect conditions like macular degeneration, glaucoma, and diabetic eye disease much earlier than traditional examination methods." },
    ]},
    { category: "Glasses & Frames", questions: [
      { question: "How long does it take to get new glasses?", answer: "Standard single vision lenses are typically ready within 5 to 7 working days. Varifocal and specialist lenses may take 7 to 10 working days. We offer an express service for urgent requirements. Your glasses are glazed and fitted in-house to ensure the highest quality." },
      { question: "Do you offer a guarantee on glasses?", answer: "Yes, all glasses come with a 12-month manufacturing guarantee covering frame defects and lens faults. We also offer free adjustments and minor repairs for the lifetime of your frames. Accidental damage cover is available as an optional add-on." },
      { question: "Can I bring my own frames for re-glazing?", answer: "Yes, we can re-glaze most frames with new lenses. We will assess the condition of your frames to ensure they are suitable and advise you accordingly. This is a cost-effective option if you love your current frames but need a new prescription." },
    ]},
    { category: "Contact Lenses", questions: [
      { question: "Can anyone wear contact lenses?", answer: "Most people can wear contact lenses successfully. We offer lenses for short-sightedness, long-sightedness, astigmatism, and presbyopia. During your fitting appointment, we assess the health and shape of your eyes and recommend the most suitable type of lens for your needs." },
      { question: "How much do contact lenses cost?", answer: "Contact lens prices vary depending on the type and brand. Daily disposable lenses start from around one pound per day. We offer monthly direct debit plans that include your lenses and all aftercare appointments, making budgeting straightforward." },
      { question: "Do I still need glasses if I wear contacts?", answer: "Yes, we always recommend having an up-to-date pair of glasses as a backup. There will be times when you cannot wear your lenses — for example if you have an eye infection or at the end of a long day. Your glasses prescription is included in your contact lens fitting." },
    ]},
    { category: "Practical Information", questions: [
      { question: "Do I need to bring anything to my appointment?", answer: "Please bring your current glasses or contact lenses, any previous prescriptions, and a list of any medications you take. If you have been referred by your GP or hospital, bring the referral letter. Valid photo ID is helpful if you are a new patient." },
      { question: "Is there parking nearby?", answer: "There is limited metered parking on Brixton Road and surrounding streets. The practice is a three-minute walk from Brixton station on the Victoria line, which we recommend as the easiest way to reach us. Bicycle parking is available outside the practice." },
      { question: "Can I have an emergency appointment?", answer: "Yes, we offer same-day emergency appointments for urgent eye concerns during our normal opening hours. Call us on 020 7946 5520 and let our team know it is urgent. We will do our best to see you as soon as possible." },
    ]},
  ];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((c) => c.questions.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1><p className="text-xl text-gray-200 leading-relaxed">Answers to common questions about eye care, appointments, and our services.</p></div></div></section>
      <section className="section-padding bg-white"><div className="container-width"><div className="max-w-4xl mx-auto">{faqs.map((category, ci) => (<div key={ci} className="mb-12"><h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-accent"></div>{category.category}</h2><div className="space-y-1">{category.questions.map((faq, fi) => (<details key={fi} className="group bg-gray-50 rounded-sm overflow-hidden"><summary className="faq-question p-6 list-none cursor-pointer"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></details>))}</div></div>))}</div></div></section>
      <section className="section-padding bg-gray-50"><div className="container-width"><div className="max-w-3xl mx-auto text-center"><h2 className="text-3xl font-bold text-primary mb-4">Still Have Questions?</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 mb-8">Our team is happy to help. Call us or drop us an email.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/optician-brixton/contact" className="btn-accent">Contact Us</Link><a href="tel:02079465520" className="btn-outline">Call 020 7946 5520</a></div></div></div></section>
      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Book Your Eye Test?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Protect your vision with a comprehensive examination from our experienced team.</p><Link href="/optician-brixton/contact" className="btn-accent">Book Your Eye Test</Link></div></section>
    </>
  );
}
