import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Flooring Questions Answered",
  description: "Frequently asked questions about carpet fitting, flooring installation, pricing and our services at Croydon Carpet & Flooring.",
  openGraph: { title: "FAQ | Croydon Carpet & Flooring", description: "Common questions about flooring services, prices and installation answered." },
};

export default function FAQPage() {
  const faqs = [
    { category: "General Questions", questions: [
      { question: "Do you offer free estimates?", answer: "Yes. We offer completely free home estimates with no obligation. One of our estimators will visit your home, measure every room accurately, show you samples and provide a detailed written quote. There is no call-out charge and absolutely no pressure to proceed." },
      { question: "What areas do you cover?", answer: "We are based in Croydon and cover all of South London including Purley, Coulsdon, Sutton, Bromley, Mitcham, Thornton Heath and surrounding areas. For larger jobs, we also cover Central London and North Surrey." },
      { question: "Can I visit your showroom?", answer: "Absolutely. Our showroom at 146 London Road, Croydon is open Monday to Friday 9am-5:30pm and Saturday 9am-4pm. You can see and touch hundreds of carpet, vinyl, laminate and wood samples. No appointment needed, just pop in." },
      { question: "How long does fitting take?", answer: "It depends on the size and type of flooring. As a rough guide, a standard room carpet can be fitted in 1-2 hours, while a full house of LVT might take 2-3 days. We will give you a clear timeline when we provide your quote." },
    ] },
    { category: "Carpets", questions: [
      { question: "Do you supply the carpet or can I provide my own?", answer: "We can do either. Most customers choose to buy from us because we source directly from manufacturers at trade prices, which often works out cheaper than retail. However, we are happy to fit carpet you have purchased elsewhere." },
      { question: "Do you move furniture?", answer: "Yes, our fitters will move furniture as part of the fitting service. We ask that you empty wardrobes, bookcases and any fragile items beforehand. We will move everything back once the carpet is laid." },
      { question: "What about underlay?", answer: "We always recommend good quality underlay as it extends the life of your carpet, improves comfort underfoot and provides sound insulation. We supply several grades of underlay and will recommend the most suitable option for your carpet and budget." },
    ] },
    { category: "Hard Flooring", questions: [
      { question: "Is LVT suitable for kitchens and bathrooms?", answer: "Yes, luxury vinyl tiles are 100% waterproof and one of the best flooring choices for kitchens and bathrooms. They are warm underfoot, easy to clean and come in stunning wood and stone designs that are virtually indistinguishable from the real thing." },
      { question: "Can laminate be laid over underfloor heating?", answer: "Many modern laminates are compatible with underfloor heating, but it depends on the specific product and your heating system. We will advise on the best options for your setup during your free estimate." },
      { question: "Do you sand and refinish existing wood floors?", answer: "Yes, we offer a full wood floor restoration service including sanding, staining, lacquering and oiling. It is a cost-effective way to bring tired wooden floors back to their former glory." },
    ] },
    { category: "Pricing & Payment", questions: [
      { question: "How much does carpet fitting cost?", answer: "Prices vary depending on the carpet quality, room size and any subfloor preparation needed. Our free estimate will give you a clear, all-inclusive price with no hidden extras. As a guide, we offer carpets to suit every budget from economy to premium." },
      { question: "Do you offer payment plans?", answer: "We do not currently offer formal finance, but we are always happy to discuss payment arrangements for larger projects. We accept cash, card and bank transfer." },
      { question: "Is there a deposit required?", answer: "For most jobs, we ask for a small deposit when you confirm your order, with the balance due upon completion of fitting. The exact amount will be detailed in your written quote." },
    ] },
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((c) => c.questions.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1><p className="text-xl text-gray-200 leading-relaxed">Find answers to common questions about our flooring services, pricing and installation process.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="max-w-4xl mx-auto">
        {faqs.map((category, ci) => (<div key={ci} className="mb-12"><h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-accent"></div>{category.category}</h2><div className="space-y-1">{category.questions.map((faq, fi) => (<details key={fi} className="group bg-gray-50 rounded-sm overflow-hidden"><summary className="faq-question p-6 list-none cursor-pointer"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></details>))}</div></div>))}
      </div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="max-w-3xl mx-auto text-center"><h2 className="text-3xl font-bold text-primary mb-4">Still Have Questions?</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 mb-8">We&apos;re always happy to help. Give us a call, send us an email or pop into our showroom.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/carpet-fitter-croydon/contact" className="btn-accent">Contact Us</Link><a href="tel:02079461170" className="btn-outline">Call 020 7946 1170</a></div>
      </div></div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Beautiful Flooring?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book your free home estimate today. No obligation, no pressure.</p><Link href="/carpet-fitter-croydon/contact" className="btn-accent">Book Free Estimate</Link></div></section>
    </>
  );
}
