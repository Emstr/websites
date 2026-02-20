import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Common Questions About Our Nursery",
  description: "Frequently asked questions about Dulwich Day Nursery. Find answers about admissions, fees, settling in, our curriculum, meals and more.",
  openGraph: { title: "FAQ | Dulwich Day Nursery", description: "Common questions about admissions, fees, curriculum and daily life at Dulwich Day Nursery." },
};

export default function FAQPage() {
  const faqs = [
    { category: "Admissions & Starting", questions: [
      { question: "How do I register my child for a place?", answer: "The first step is to book a visit so you can see our nursery and meet the team. After your visit, we will guide you through the registration process. We recommend registering early, especially for baby room places, as we have a waiting list for popular start dates. There is a small registration fee to secure your place." },
      { question: "What ages do you accept?", answer: "We accept children from 3 months old in our baby room. Our toddler room is for ages 1-2, pre-school for ages 2-4, and our after-school and holiday clubs cater for children aged 4-11. We are open to all children regardless of background, ability or additional needs." },
      { question: "What is the settling-in process like?", answer: "We follow a gentle, gradual settling-in programme tailored to your child. Typically this involves short visits over one to two weeks, gradually increasing in length. A parent or carer stays for the first visits, then we build up to your child staying alone. We never rush this process and will work at your child's pace." },
      { question: "Can I visit the nursery before registering?", answer: "Absolutely, and we strongly encourage it. Visiting gives you the chance to see our rooms, meet the practitioners, observe the children at play and ask any questions. We run open mornings monthly and also offer individual tours by appointment." },
    ]},
    { category: "Fees & Funding", questions: [
      { question: "How much does a nursery place cost?", answer: "Our fees vary by room and session type. Please contact our admissions team for our current fee schedule. We accept childcare vouchers, tax-free childcare and employer-supported childcare. We also accept the government-funded 15 and 30 free hours for eligible 2, 3 and 4 year olds." },
      { question: "Do you accept funded hours?", answer: "Yes, we are a registered provider for the 15-hour universal entitlement for all 3 and 4 year olds, the 30-hour extended entitlement for working families, and the 15-hour entitlement for eligible 2 year olds. We can help you check your eligibility and apply." },
      { question: "How do I pay?", answer: "Fees are payable monthly in advance by direct debit or bank transfer. We can also accept childcare vouchers and tax-free childcare payments. A deposit equivalent to one month's fees is required to secure your place, which is offset against your final month's invoice." },
    ]},
    { category: "Daily Life", questions: [
      { question: "What meals do you provide?", answer: "We provide a nutritious breakfast, hot lunch and afternoon tea, all freshly prepared on site by our cook using seasonal, locally sourced ingredients where possible. We cater for all dietary requirements and allergies. Menus are shared with parents weekly and we are always happy to discuss your child's nutritional needs." },
      { question: "What does a typical day look like?", answer: "A typical day includes a mix of free play, structured activities, outdoor time, story time, singing and meals. The balance of activities varies by age group. Our baby room follows individual routines, while pre-school children have a more structured timetable preparing them for school life. Every day includes outdoor play, whatever the weather." },
      { question: "How do you communicate with parents?", answer: "We use a dedicated parent app to share daily updates, photos, learning observations and messages. You will also receive termly progress reports and invitations to parent consultation evenings. Our door is always open for informal chats at drop-off and pick-up, and you can contact your child's key person at any time." },
      { question: "What is your approach to behaviour?", answer: "We use positive behaviour management strategies, focusing on praise, encouragement and setting clear, consistent boundaries. We help children understand and manage their emotions through age-appropriate techniques. We never use any form of punishment or exclusion. If your child is finding something challenging, we will work with you as a team to find a solution." },
    ]},
    { category: "Safety & Wellbeing", questions: [
      { question: "What safeguarding measures do you have?", answer: "Safeguarding is our highest priority. All practitioners hold enhanced DBS checks and complete annual safeguarding training. We have a designated safeguarding lead, secure entry systems, CCTV, comprehensive risk assessments and robust policies covering all aspects of child protection. We follow the London Safeguarding Children procedures." },
      { question: "What happens if my child is unwell?", answer: "If your child becomes unwell during the day, we will contact you immediately. We follow Public Health England guidance on exclusion periods for infectious illnesses. We have trained first aiders on duty at all times and maintain detailed accident and incident records. We can administer prescribed medication with your written consent." },
      { question: "How do you handle allergies?", answer: "We take allergies extremely seriously. All allergies and dietary requirements are recorded during registration and shared with every member of staff. Our cook prepares allergy-safe alternatives, and we maintain an allergen-free table policy. Individual health care plans are created for children with severe allergies." },
    ]},
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((c) => c.questions.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">FAQ</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-200 leading-relaxed">Everything you need to know about Dulwich Day Nursery. Cannot find your answer? Get in touch and our team will be happy to help.</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, ci) => (
              <div key={ci} className="mb-12">
                <h2 className="text-2xl font-bold text-[var(--primary)] mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-[var(--accent)]"></div>{category.category}</h2>
                <div className="space-y-1">
                  {category.questions.map((faq, fi) => (
                    <details key={fi} className="group bg-gray-50 rounded-sm overflow-hidden">
                      <summary className="flex items-center justify-between p-6 list-none cursor-pointer font-semibold text-[var(--primary)] hover:text-[var(--accent)] transition-colors">
                        <span className="flex-1 pr-4">{faq.question}</span>
                        <svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </summary>
                      <div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">Still Got Questions?</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">Our admissions team is always happy to help. Give us a ring or send an email and we will get back to you promptly.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/nursery-dulwich/contact" className="bg-[var(--accent)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors">Contact Us</Link>
              <a href="tel:02079462290" className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--primary)] hover:text-white transition-colors">Call 020 7946 2290</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Book a Visit?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Come and see our Ofsted Outstanding nursery for yourself. We would love to welcome you and your little one.</p>
          <Link href="/nursery-dulwich/contact" className="bg-[var(--accent)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Book Your Visit</Link>
        </div>
      </section>
    </>
  );
}
