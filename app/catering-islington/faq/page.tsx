import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Catering Questions Answered",
  description: "Frequently asked questions about our catering services, pricing, dietary options and event planning. Islington Catering Company, London N1.",
  openGraph: { title: "FAQ | Islington Catering Company", description: "Common questions about event catering, menus, pricing and dietary requirements." },
};

export default function FAQPage() {
  const faqs = [
    { category: "Planning Your Event", questions: [
      { question: "How far in advance should I book?", answer: "For weddings, we recommend booking 6-12 months ahead, especially for peak season (May-September). Corporate events and private dining can often be arranged with 2-4 weeks' notice, though more lead time gives us the best chance to source premium ingredients." },
      { question: "Can I taste the food before committing?", answer: "For weddings and large events, we offer a complimentary tasting for up to 4 guests once you've confirmed your booking. This includes samples of your proposed menu so you can be completely confident in your choices." },
      { question: "Do you provide serving staff and equipment?", answer: "Yes, we can provide full front-of-house staff, tableware, glassware, table linen and all equipment needed. This is included in some packages or available as an add-on. We'll work with your venue to coordinate logistics." },
      { question: "Can you cater at any venue?", answer: "We cater at virtually any venue across London and the Home Counties — from private homes and gardens to hotels, galleries, warehouses and barns. We'll conduct a site visit for larger events to ensure everything runs smoothly." },
    ] },
    { category: "Menus & Dietary Requirements", questions: [
      { question: "Can you accommodate all dietary requirements?", answer: "Absolutely. We have extensive experience with vegan, vegetarian, gluten-free, dairy-free, nut-free, halal and kosher requirements. We conduct thorough allergen assessments for every event and clearly label all dishes. Dietary needs are never an afterthought." },
      { question: "Do you create custom menus?", answer: "Every menu we produce is bespoke. We start with your preferences, dietary needs and budget, then design a menu from scratch. You won't find a 'standard menu' on our website — because we believe every event deserves its own unique food story." },
      { question: "What type of cuisine do you specialise in?", answer: "Our head chef's background spans French, Italian, Middle Eastern and modern British cooking. We're comfortable creating menus across a wide range of cuisines and love fusion concepts. If you have a specific cuisine in mind, we're happy to discuss." },
    ] },
    { category: "Pricing & Logistics", questions: [
      { question: "How much does catering cost?", answer: "Pricing depends on the type of event, number of guests, menu complexity and service level required. As a guide, canape receptions start from around £15 per head, buffets from £25, and sit-down dinners from £45. Wedding packages are fully customised. We'll provide a detailed quote after discussing your needs." },
      { question: "Is there a minimum guest count?", answer: "For private dining, we cater from as few as 2 guests. For event catering, we typically work with a minimum of 20 guests, though we can be flexible depending on the event." },
      { question: "Do you handle clean-up afterwards?", answer: "Yes, full clean-up is included in all our services. For private dining at home, we leave your kitchen spotless. For events, we clear all food, equipment and waste before departing." },
    ] },
    { category: "Sustainability", questions: [
      { question: "What makes your kitchen sustainable?", answer: "We source locally wherever possible, use seasonal ingredients to reduce food miles, compost all food waste, use compostable packaging for deliveries, and offset our carbon emissions. We're working towards becoming a certified B Corp." },
      { question: "Do you use single-use plastics?", answer: "No. We've eliminated single-use plastics from our operations entirely. All takeaway containers and packaging are compostable or recyclable." },
    ] },
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((c) => c.questions.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl">
        <span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-200 leading-relaxed">Everything you need to know about our catering services, menus, pricing and how we work with you to create the perfect event.</p>
      </div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="max-w-4xl mx-auto">
        {faqs.map((category, ci) => (
          <div key={ci} className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-accent"></div>{category.category}</h2>
            <div className="space-y-1">
              {category.questions.map((faq, fi) => (
                <details key={fi} className="group bg-gray-50 rounded-sm overflow-hidden">
                  <summary className="faq-question p-6 list-none cursor-pointer"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
                  <div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Have Another Question?</h2><div className="gold-line-center mb-6"></div>
        <p className="text-lg text-gray-600 mb-8">We&apos;re always happy to chat about your event. No question is too small.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/catering-islington/contact" className="btn-accent">Contact Us</Link>
          <a href="tel:02079464789" className="btn-outline">Call 020 7946 4789</a>
        </div>
      </div></div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Planning?</h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Request a free quote and let us design the perfect menu for your event.</p>
        <Link href="/catering-islington/contact" className="btn-accent">Request a Quote</Link>
      </div></section>
    </>
  );
}
