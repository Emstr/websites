import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Phone Repair Questions Answered",
  description: "Frequently asked questions about phone repair at Camden Phone Fix. Learn about repair times, warranty, pricing, brands we service and our no fix no fee guarantee.",
  openGraph: { title: "FAQ | Camden Phone Fix", description: "Common questions about phone and device repair at our Camden High Street shop." },
};

export default function FAQPage() {
  const faqs = [
    { category: "Repairs & Timescales", questions: [
      { question: "How long does a screen replacement take?", answer: "Most screen replacements are completed in approximately 30 minutes. For some older or less common models, it may take up to an hour if we need to source specific parts. We will always give you an accurate time estimate before starting." },
      { question: "Do I need to book an appointment?", answer: "No appointment is needed for most repairs. Simply walk into our Camden High Street shop during opening hours. For complex repairs like water damage or data recovery, calling ahead is helpful so we can allocate the right amount of time." },
      { question: "What brands do you repair?", answer: "We repair all major brands including Apple iPhone, Samsung Galaxy, Huawei, Google Pixel, OnePlus, Xiaomi, Sony, Nokia and more. We also repair iPads, Samsung tablets, and laptops from Apple, Lenovo, HP, Dell and others. If you are unsure whether we can help, just ask." },
      { question: "Can you repair water-damaged phones?", answer: "Yes, water damage repair is one of our specialities. The key is to bring the device to us as quickly as possible and not try to charge or turn it on. We use ultrasonic cleaning and micro-soldering techniques to repair water-damaged circuit boards. Our success rate is over 80 percent when the device is brought to us within 24 hours." },
    ]},
    { category: "Pricing & Warranty", questions: [
      { question: "How much does a screen replacement cost?", answer: "Screen replacement costs vary depending on the device model. iPhone screen replacements typically start from around 50 pounds for older models, while the latest models with OLED screens can be 150-200 pounds. Samsung and other brands are similarly priced. We always provide a clear quote before starting any work." },
      { question: "Do you offer a warranty?", answer: "Yes, all our repairs come with a 90-day warranty. If the same issue recurs within that period due to a fault with our repair, we will fix it again at no extra cost. The warranty covers both parts and labour." },
      { question: "What is your no fix, no fee policy?", answer: "If we are unable to repair your device, you do not pay anything. We will always give you an honest assessment before starting work. If during the repair we discover the device cannot be fixed, we will return it to you with no charge." },
      { question: "Do you charge for diagnostics?", answer: "No, we provide free diagnostics for all devices. Bring your device in and we will examine it, identify the issue and give you a clear quote. There is no obligation to proceed with the repair." },
    ]},
    { category: "Parts & Quality", questions: [
      { question: "What quality are your replacement parts?", answer: "We use high-quality replacement parts that match the look and performance of the originals. For screens, we offer both standard and premium OLED options. We are transparent about the parts we use and will explain the options available for your specific device." },
      { question: "Will the repair void my manufacturer warranty?", answer: "If your device is still under manufacturer warranty, a third-party repair may affect that warranty. We always advise checking your warranty status before proceeding. However, for most devices that are out of warranty, our repairs are a significantly more affordable alternative to manufacturer service." },
      { question: "Do you use genuine Apple parts?", answer: "We use high-quality third-party parts that meet or exceed the specifications of the originals. These parts are rigorously tested and come with our 90-day warranty. Using these parts allows us to offer repairs at a fraction of the price Apple charges." },
    ]},
    { category: "Data & Privacy", questions: [
      { question: "Is my data safe during the repair?", answer: "Absolutely. We never access, copy or store any personal data from your device. Our technicians are trained in data privacy and only access the functions necessary to test the repair. Your device is kept in our secure workshop at all times." },
      { question: "Will I lose my data during a screen or battery replacement?", answer: "No, screen replacements and battery replacements do not affect your data. All your photos, contacts, messages and apps will remain exactly as they were. For water damage repairs, there is a small risk of data loss depending on the severity, which we will always discuss with you beforehand." },
      { question: "Can you recover data from a completely dead phone?", answer: "In many cases, yes. Our data recovery service can retrieve photos, contacts, messages and documents from devices that will not turn on. We use specialist tools to access the storage chip directly. Success depends on the type and extent of damage, and we will give you an honest assessment of the likelihood before proceeding." },
    ]},
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((cat) => cat.questions.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1><p className="text-xl text-gray-200 leading-relaxed">Find answers to common questions about our phone repair services, pricing, warranty and more.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="max-w-4xl mx-auto">
        {faqs.map((category, categoryIndex) => (<div key={categoryIndex} className="mb-12"><h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-accent"></div>{category.category}</h2><div className="space-y-1">{category.questions.map((faq, faqIndex) => (<details key={faqIndex} className="group bg-gray-50 rounded-sm overflow-hidden"><summary className="faq-question p-6 list-none cursor-pointer"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></details>))}</div></div>))}
      </div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="max-w-3xl mx-auto text-center"><h2 className="text-3xl font-bold text-primary mb-4">Still Have Questions?</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 mb-8">Pop into our shop, give us a ring, or drop us an email. We&apos;re always happy to help.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/phone-repair-camden/contact" className="btn-accent">Contact Us</Link><a href="tel:02079464460" className="btn-outline">Call 020 7946 4460</a></div></div></div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Your Device Fixed?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Walk in to our Camden High Street shop. No appointment needed, open 7 days a week.</p><Link href="/phone-repair-camden/contact" className="btn-accent">Get a Free Quote</Link></div></section>
    </>
  );
}
