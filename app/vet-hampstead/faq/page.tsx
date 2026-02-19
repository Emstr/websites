import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Pet Health Questions Answered",
  description: "Frequently asked questions about veterinary care, vaccinations, pet health plans and our clinic. Expert answers from Hampstead Veterinary Clinic.",
  openGraph: { title: "FAQ | Hampstead Veterinary Clinic", description: "Common questions about veterinary services in Hampstead, NW3." },
};

export default function FAQPage() {
  const faqs = [
    { category: "Appointments & Visits", questions: [
      { question: "How do I book an appointment?", answer: "You can book online through our website, call us on 020 7946 5670 or email info@hampsteadvet.co.uk. We offer same-day appointments for urgent cases and try to accommodate your preferred time wherever possible." },
      { question: "What should I bring to my pet's first visit?", answer: "Please bring any previous vaccination records, medical history from your previous vet, and details of any medications your pet is currently taking. It also helps to bring a fresh stool sample if your pet is having digestive issues." },
      { question: "Do you offer home visits?", answer: "Yes, we offer home visits for pets who find travel particularly stressful or for elderly and immobile animals. Home visits are subject to availability and carry a small additional charge. Please call us to arrange." },
    ]},
    { category: "Vaccinations & Preventive Care", questions: [
      { question: "What vaccinations does my puppy or kitten need?", answer: "Puppies need a primary course of vaccinations at 8 and 10 weeks (covering Distemper, Parvovirus, Hepatitis and Leptospirosis). Kittens need vaccinations at 9 and 12 weeks (covering Panleucopenia, Calicivirus and Herpesvirus). Booster vaccinations are then required annually or every three years depending on the vaccine." },
      { question: "How often does my pet need flea and worm treatment?", answer: "We recommend monthly flea treatment and worming every three months for adult dogs and cats. Puppies and kittens require more frequent worming initially. Our pet health plans include year-round parasite prevention at a discounted rate." },
      { question: "Is microchipping painful?", answer: "Microchipping is very quick and comparable to a standard vaccination injection. Most pets barely notice it. No anaesthetic is required and your pet can continue their normal activities immediately afterwards." },
      { question: "Do you offer titre testing?", answer: "Yes, we offer titre testing for dogs as an evidence-based alternative to routine annual booster vaccinations. A simple blood test measures your dog's antibody levels to determine whether vaccination is needed." },
    ]},
    { category: "Surgery & Treatment", questions: [
      { question: "When should I get my pet neutered?", answer: "We generally recommend neutering dogs at 6-12 months of age and cats at around 4 months. However, the optimal timing can vary depending on breed, size and individual circumstances. We are happy to discuss the best approach for your pet during a consultation." },
      { question: "What happens during my pet's surgery?", answer: "Every surgical patient has a pre-operative health check and blood testing. We use the safest modern anaesthetic protocols with continuous monitoring of heart rate, blood pressure, oxygen levels and temperature. A dedicated nurse monitors your pet throughout recovery." },
      { question: "Can I visit my pet if they need to stay overnight?", answer: "Absolutely. We encourage owners to visit their hospitalised pets. Please call ahead so we can arrange a convenient time. We also provide regular updates by phone if you are unable to visit in person." },
    ]},
    { category: "Fees & Health Plans", questions: [
      { question: "How much does a consultation cost?", answer: "A standard consultation costs from 55. We always provide a clear estimate before proceeding with any additional diagnostics or treatments. Emergency and out-of-hours consultations carry a higher fee. Full details are available on request." },
      { question: "What do pet health plans include?", answer: "Our health plans include annual vaccinations, year-round flea and worm treatment, an annual health check and dental assessment, microchipping for new pets and discounts on additional treatments. Plans start from just 15 per month for cats and 18 per month for dogs." },
      { question: "Do you accept pet insurance?", answer: "Yes, we work with all major pet insurance providers. We can submit claims directly to your insurer in many cases, meaning you only need to pay the excess. Our team can also help you navigate the claims process." },
      { question: "What payment methods do you accept?", answer: "We accept cash, debit cards, credit cards and contactless payments. Payment is due at the time of treatment. We also offer interest-free payment plans for larger treatment costs through our partner finance provider." },
    ]},
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((c) => c.questions.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1><p className="text-xl text-gray-200 leading-relaxed">Find answers to common questions about our veterinary services, fees and how to care for your pet.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="max-w-4xl mx-auto">{faqs.map((category, ci) => (<div key={ci} className="mb-12"><h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-accent"></div>{category.category}</h2><div className="space-y-1">{category.questions.map((faq, fi) => (<details key={fi} className="group bg-gray-50 rounded-sm overflow-hidden"><summary className="faq-question p-6 list-none cursor-pointer"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></details>))}</div></div>))}</div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="max-w-3xl mx-auto text-center"><h2 className="text-3xl font-bold text-primary mb-4">Still Have Questions?</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 mb-8">Our team is always happy to help. Call us, email or pop into the clinic for advice about your pet&apos;s health.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/vet-hampstead/contact" className="btn-accent">Contact Us</Link><a href="tel:02079465670" className="btn-outline">Call 020 7946 5670</a></div></div></div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Book?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book your pet&apos;s appointment online or call our friendly reception team.</p><Link href="/vet-hampstead/contact" className="btn-accent">Book Appointment</Link></div></section>

      <section className="py-8 bg-gray-100"><div className="container-width"><div className="fca-notice"><p><strong>Professional Standards:</strong> Hampstead Veterinary Clinic is registered with the Royal College of Veterinary Surgeons. The information on this page is for general guidance only. Please consult a vet for advice specific to your pet.</p></div></div></section>
    </>
  );
}
