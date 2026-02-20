import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Frequently Asked Questions",
  description: "Frequently asked questions about Clapham Wine Room. Wine tastings, bookings, wine club, private events and more.",
  openGraph: { title: "FAQ | Clapham Wine Room", description: "Common questions about tastings, wine club and visiting Clapham Wine Room." },
};

export default function FAQPage() {
  const faqs = [
    { category: "Wine Tastings & Events", questions: [
      { question: "What happens at a wine tasting?", answer: "Our guided tastings typically last two hours and include six to eight wines, led by our WSET-qualified sommelier. You will learn about different regions, grapes and winemaking styles in a relaxed, sociable setting. Artisan cheese and charcuterie snacks are included, and there is plenty of time for questions. No prior wine knowledge is required — we welcome complete beginners and experienced wine lovers alike." },
      { question: "How do I book a tasting?", answer: "You can book via our website, by emailing hello@claphamwineroom.co.uk or by calling 020 7946 9930. We run regular monthly tastings which you can join as an individual or group, and we also offer private tastings for groups of 8 or more." },
      { question: "How much does a tasting cost?", answer: "Our regular monthly tastings start from £35 per person, which includes six to eight wines and artisan snacks. Private tastings are priced from £45 per person depending on the wines selected. Corporate experiences are tailored to your brief and budget." },
      { question: "Can I buy the wines I taste?", answer: "Absolutely! Every wine featured at our tastings is available to purchase on the night at a special tasting discount. We can also arrange cases for delivery if you find something you love." },
    ]},
    { category: "Wine Club", questions: [
      { question: "How does the wine club work?", answer: "Each month, our sommelier selects two exceptional bottles and delivers them to your door with detailed tasting notes and food pairing suggestions. You also receive 10% off all in-bar purchases, early access to events and invitations to exclusive quarterly members-only evenings." },
      { question: "How much does membership cost?", answer: "Wine club membership is £39.95 per month for two sommelier-selected bottles, including delivery. There is no minimum commitment — you can pause or cancel at any time." },
      { question: "Can I gift a wine club membership?", answer: "Yes! Gift memberships are available for 3, 6 or 12 months. We provide a beautiful gift card and the recipient receives their first delivery within a week. It is one of our most popular gifts." },
    ]},
    { category: "Visiting Us", questions: [
      { question: "Do I need to book to visit?", answer: "For a casual glass of wine, walk-ins are welcome and we will always try to find you a seat. However, we are a small 40-seat venue, so we recommend booking, particularly on Friday and Saturday evenings. For tastings and private events, advance booking is essential." },
      { question: "What are your opening hours?", answer: "We are open Tuesday to Thursday from 4pm to 11pm, Friday from 4pm to midnight, Saturday from noon to midnight, and Sunday from noon to 10pm. We are closed on Mondays." },
      { question: "Do you serve food?", answer: "We specialise in artisan cheese and charcuterie boards, olives and small bites — perfect for sharing over wine. We do not serve a full kitchen menu, but our boards are generous and satisfying." },
      { question: "Is the venue accessible?", answer: "Our ground-floor venue is fully step-free and accessible for wheelchair users. If you have specific accessibility requirements, please let us know in advance and we will ensure everything is arranged for your comfort." },
    ]},
    { category: "Private Events & Corporate", questions: [
      { question: "Can I hire the venue for a private event?", answer: "Yes! We offer exclusive venue hire for up to 40 guests. Whether it is a birthday, hen party, engagement or celebration, our sommelier will create a bespoke tasting experience for your group. We handle everything from the wine to the cheese boards." },
      { question: "Do you offer corporate wine experiences?", answer: "Absolutely. Our corporate wine tastings are perfect for team building, client entertainment or employee rewards. We can host at our Clapham venue or come to your offices anywhere in London. Groups of 8 to 40 guests." },
      { question: "How far in advance should I book a private event?", answer: "We recommend booking at least three to four weeks in advance for private events, especially for popular dates like Friday and Saturday evenings. For corporate events during the week, two weeks notice is usually sufficient." },
    ]},
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((c) => c.questions.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1><p className="text-xl text-gray-200 leading-relaxed">Everything you need to know about Clapham Wine Room. Can&apos;t find your answer? Drop us a line.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="max-w-4xl mx-auto">{faqs.map((category, ci) => (<div key={ci} className="mb-12"><h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-accent"></div>{category.category}</h2><div className="space-y-1">{category.questions.map((faq, fi) => (<details key={fi} className="group bg-gray-50 rounded-sm overflow-hidden"><summary className="faq-question p-6 list-none cursor-pointer"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></details>))}</div></div>))}</div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="max-w-3xl mx-auto text-center"><h2 className="text-3xl font-bold text-primary mb-4">Still Have Questions?</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 mb-8">Our team is always happy to help. Get in touch and we will get back to you within 24 hours.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/wine-bar-clapham/contact" className="btn-accent">Contact Us</Link><a href="tel:02079469930" className="btn-outline">Call 020 7946 9930</a></div></div></div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Explore?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book a tasting, join our wine club or pop in for a glass. Your next favourite wine is waiting.</p><Link href="/wine-bar-clapham/contact" className="btn-accent">Book Now</Link></div></section>
    </>
  );
}
