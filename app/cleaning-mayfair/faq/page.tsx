import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Cleaning Questions Answered",
  description: "Frequently asked questions about our cleaning services in Mayfair. Pricing, products, staff vetting, and what to expect.",
  openGraph: { title: "FAQ | Mayfair Cleaning Services", description: "Common questions about cleaning services, pricing, and booking." },
};

export default function FAQPage() {
  const faqs = [
    { category: "Our Service", questions: [
      { question: "Will I get the same cleaner each time?", answer: "Yes. We assign a dedicated cleaner to your home who visits at the same time each week or fortnight. They get to know your property and preferences, ensuring consistent results. If your regular cleaner is unavailable, we send a trained replacement and let you know in advance." },
      { question: "Are your cleaners DBS checked?", answer: "Absolutely. Every member of our cleaning team undergoes an enhanced DBS (Disclosure and Barring Service) check before joining us. We also verify references and conduct in-person interviews. Your security is our top priority." },
      { question: "What products do you use?", answer: "We use premium, eco-friendly cleaning products that are non-toxic, biodegradable, and safe for children and pets. If you have specific product preferences or allergies, we are happy to accommodate your requirements." },
      { question: "Do I need to provide equipment?", answer: "No. Our cleaners bring all products and equipment including a professional vacuum cleaner, mops, cloths, and specialist cleaning solutions. If you prefer us to use your own vacuum or specific products, just let us know." },
    ]},
    { category: "Booking & Scheduling", questions: [
      { question: "How do I book a regular clean?", answer: "You can book by calling us on 020 7946 0345 or completing our online form. We will discuss your needs, arrange a convenient schedule, and match you with a suitable cleaner. Most bookings can start within a few days." },
      { question: "Can I change or cancel a booking?", answer: "Yes. We ask for 24 hours notice for cancellations or changes to avoid a charge. You can easily rearrange your clean by calling or emailing our bookings team. There is no long-term contract — you can pause or cancel at any time." },
      { question: "Do I need to be home during the clean?", answer: "No. Many of our clients provide a key or access code so cleaning can take place while they are at work. All our cleaners are DBS checked and fully insured, so you can trust them in your home unsupervised." },
    ]},
    { category: "Pricing", questions: [
      { question: "How much do you charge?", answer: "Regular domestic cleaning in Mayfair starts from around 18 to 25 pounds per hour depending on the service level and frequency. Deep cleans, end of tenancy cleans, and specialist services are quoted based on property size. Contact us for a personalised quote." },
      { question: "Are there any hidden charges?", answer: "Never. We provide clear, upfront pricing before any work begins. The price includes all products and equipment. The only additional charges would be if you request extra services beyond the original booking." },
      { question: "Do you offer discounts for regular clients?", answer: "Yes. Weekly clients receive the best rates, and we offer introductory discounts for new customers. We also provide competitive rates for multi-property clients and commercial contracts." },
    ]},
    { category: "Quality & Guarantees", questions: [
      { question: "What if I am not happy with the clean?", answer: "We offer a satisfaction guarantee. If you are not completely happy with any aspect of the clean, contact us within 24 hours and we will return to address the issue at no extra charge. Your satisfaction is our priority." },
      { question: "Are you insured?", answer: "Yes, we carry comprehensive public liability insurance and employer liability insurance. In the unlikely event of any accidental damage during a clean, you are fully covered." },
      { question: "How do you maintain quality?", answer: "We use detailed cleaning checklists, conduct regular quality inspections, and actively seek client feedback. Our team leaders carry out spot checks and every cleaner receives ongoing training to maintain our high standards." },
    ]},
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((c) => c.questions.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1><p className="text-xl text-gray-200 leading-relaxed">Everything you need to know about our cleaning services in Mayfair.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="max-w-4xl mx-auto">
        {faqs.map((category, ci) => (<div key={ci} className="mb-12"><h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-accent"></div>{category.category}</h2><div className="space-y-1">{category.questions.map((faq, fi) => (<details key={fi} className="group bg-gray-50 rounded-sm overflow-hidden"><summary className="faq-question p-6 list-none cursor-pointer"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></details>))}</div></div>))}
      </div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="max-w-3xl mx-auto text-center"><h2 className="text-3xl font-bold text-primary mb-4">Still Have Questions?</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 mb-8">Our friendly bookings team is happy to help with any queries.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/cleaning-mayfair/contact" className="btn-accent">Contact Us</Link><a href="tel:02079460345" className="btn-outline">Call 020 7946 0345</a></div></div></div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Book Your Clean?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">New customers receive 20% off their first clean. Book online or call today.</p><Link href="/cleaning-mayfair/contact" className="btn-accent">Book a Clean</Link></div></section>
    </>
  );
}
