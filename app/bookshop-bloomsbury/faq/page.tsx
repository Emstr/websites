import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "FAQ | Common Bookshop Questions", description: "Frequently asked questions about Bloomsbury Books — ordering, events, book club, gift services and more.", openGraph: { title: "FAQ | Bloomsbury Books", description: "Answers to common questions about our independent bookshop in Bloomsbury." } };

export default function FAQPage() {
  const faqs = [
    { category: "Visiting & Shopping", questions: [
      { question: "Can you order a book that is not in stock?", answer: "Yes, we can order any title currently in print. Orders typically arrive within 24 to 48 hours. We will call or email you as soon as it arrives. There is no additional charge for ordering — you pay the same price as if it were on the shelf." },
      { question: "Do you sell e-books or audiobooks?", answer: "We are a physical bookshop and we celebrate the printed word. We do not sell e-books or audiobooks directly, but we are happy to recommend titles and you can purchase digital versions through your preferred platform. Nothing beats a real book in your hands, though." },
      { question: "Do you buy second-hand books?", answer: "We occasionally purchase second-hand books, particularly rare or antiquarian editions. We do not operate a general second-hand buying service, but if you have something unusual, bring it in and our rare books specialist will take a look." },
      { question: "Can I pay with book tokens?", answer: "Yes, we accept National Book Tokens and gift cards. We also sell them — they make an excellent gift for the reader in your life." },
    ]},
    { category: "Events & Book Club", questions: [
      { question: "How do I find out about upcoming events?", answer: "Sign up for our monthly newsletter via our contact page, follow us on social media, or simply ask in-store. We also have a noticeboard by the entrance with details of all upcoming events. Most events are free but ticketed — booking in advance is recommended as our space is intimate." },
      { question: "How do I join the book club?", answer: "Simply turn up to our next meeting — we meet on the last Thursday of each month at 7pm in the shop. There is no formal membership or fee. We provide wine and the reading list. You can buy the monthly pick in-store and receive a 10% discount. New faces are always welcome." },
      { question: "Can I host a private event at the bookshop?", answer: "Yes, our upstairs space is available for private hire in the evenings. It is popular for book launches, literary-themed birthday parties, and corporate events. Contact us for pricing and availability." },
      { question: "Do you host children's events?", answer: "We hold weekly story time on Saturday mornings for children aged 3 to 7, and run craft workshops during school holidays. We also welcome school groups for guided visits — teachers should contact us in advance to arrange a session." },
    ]},
    { category: "Gifts & Services", questions: [
      { question: "Is gift wrapping free?", answer: "Yes, we offer complimentary gift wrapping on any purchase. Our signature wrapping paper and ribbon make any book look special. For an extra touch, we can include a handwritten gift message at no additional charge." },
      { question: "How do the book hampers work?", answer: "Tell us about the recipient — their age, interests, and the occasion — and our booksellers will curate a selection of titles and artisan treats. Hampers start from a reasonable price point and can be tailored to any budget. We can deliver within London or post anywhere in the UK." },
      { question: "Do you offer a postal service?", answer: "Yes, we can post books anywhere in the UK. Contact us with the title you would like, the delivery address, and any gift message. We will wrap it, post it, and send you confirmation. Postage rates are based on weight and destination." },
    ]},
    { category: "About Us", questions: [
      { question: "What makes you different from a chain bookshop?", answer: "Every book on our shelves was chosen by a human who read it and believed in it. Our booksellers are specialists who can give you a personal recommendation that no algorithm could match. We host intimate author events, run a genuine book club, and care deeply about the literary community. Shopping with us directly supports an independent business and the wider publishing ecosystem." },
      { question: "Do you support local schools and libraries?", answer: "Yes, we work with several local schools, offering discounted bulk orders, author visits, and reading list consultations. We also donate to library fundraisers and participate in World Book Day activities each year. If you represent a school or library, please get in touch." },
      { question: "Are you wheelchair accessible?", answer: "Our ground floor is fully accessible, with wide aisles and step-free access from the street. Our upstairs events space is currently only accessible by stairs, but we are actively exploring options to improve this. Please contact us ahead of an event and we will do everything we can to accommodate you." },
    ]},
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((cat) => cat.questions.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1><p className="text-xl text-gray-200 leading-relaxed">Everything you might want to know about visiting, ordering, events, and our services.</p></div></div></section>
      <section className="section-padding bg-white"><div className="container-width"><div className="max-w-4xl mx-auto">{faqs.map((cat, ci) => (<div key={ci} className="mb-12"><h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-accent"></div>{cat.category}</h2><div className="space-y-1">{cat.questions.map((faq, fi) => (<details key={fi} className="group bg-gray-50 rounded-sm overflow-hidden"><summary className="faq-question p-6 list-none cursor-pointer"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></details>))}</div></div>))}</div></div></section>
      <section className="section-padding bg-gray-50"><div className="container-width"><div className="max-w-3xl mx-auto text-center"><h2 className="text-3xl font-bold text-primary mb-4">Still Got Questions?</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 mb-8">Pop in, give us a ring, or send an email. Our booksellers are always happy to help.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/bookshop-bloomsbury/contact" className="btn-accent">Contact Us</Link><a href="tel:02079461190" className="btn-outline">Call 020 7946 1190</a></div></div></div></section>
      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Visit?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">We are open seven days a week on Great Russell Street. Come for a browse — you never know what you will find.</p><Link href="/bookshop-bloomsbury/contact" className="btn-accent">Plan Your Visit</Link></div></section>
    </>
  );
}
