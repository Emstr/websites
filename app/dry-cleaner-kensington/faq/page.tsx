import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Common Questions About Our Dry Cleaning Services",
  description: "Frequently asked questions about Kensington Dry Cleaners. Find answers about our eco-friendly process, pricing, collection and delivery, turnaround times and more.",
  openGraph: { title: "FAQ | Kensington Dry Cleaners", description: "Common questions about dry cleaning, pricing, collection service and garment care at Kensington Dry Cleaners." },
};

export default function FAQPage() {
  const faqs = [
    { category: "Our Service", questions: [
      { question: "What eco-friendly solvents do you use?", answer: "We use GreenEarth, a silicone-based dry cleaning solvent that is gentler on fabrics and colours than traditional perchloroethylene (perc). GreenEarth is non-toxic, odourless and biodegradable. It is particularly effective at cleaning delicate fabrics like silk, cashmere and wool without causing shrinkage or colour loss." },
      { question: "How does your collection and delivery service work?", answer: "Simply book a collection online, by phone or by email. We will send a driver to your home or office at the agreed time. Your garments will be assessed, cleaned and returned to your door, usually within 48 hours. The service is completely free within our delivery area covering Kensington, Chelsea, Notting Hill, Holland Park and surrounding postcodes." },
      { question: "What is the turnaround time?", answer: "Our standard turnaround is 48 hours. We also offer a same-day express service for items dropped off before 10am, which are ready by 5pm the same day. Wedding dress cleaning and specialist items may take longer, and we will always confirm the timeline when you drop off or book a collection." },
      { question: "Can you remove specific stains?", answer: "We have extensive experience with all types of stains including wine, grease, ink, blood, coffee and food. Our technicians individually assess each stain and apply the most appropriate treatment. While we have an excellent success rate, some old or set-in stains may not be fully removable. We will always be honest with you about likely outcomes." },
    ]},
    { category: "Pricing & Payment", questions: [
      { question: "How much does dry cleaning cost?", answer: "Prices vary by garment type. A standard suit jacket starts from around twelve pounds, trousers from seven pounds, and dresses from ten pounds. Specialist items such as wedding dresses, leather and suede are priced individually. Please contact us for a full price list or bring your items in for a quote." },
      { question: "Do you offer account facilities for regular customers?", answer: "Yes, we offer monthly account facilities for regular customers and corporate clients. This is particularly popular with businesses sending staff shirts and suits. You receive a single monthly invoice and can benefit from negotiated rates based on volume." },
      { question: "What payment methods do you accept?", answer: "We accept cash, all major credit and debit cards, contactless payments and Apple/Google Pay. Account customers can pay by bank transfer against a monthly invoice." },
    ]},
    { category: "Specialist Services", questions: [
      { question: "How do you clean wedding dresses?", answer: "Wedding dresses receive a full consultation before any work begins. We assess every fabric panel, beading, lace and embellishment individually. The dress is cleaned using appropriate solvents and hand techniques, then carefully pressed and steamed. For preservation, we wrap the gown in acid-free tissue and box it in a presentation box designed for long-term storage." },
      { question: "Can you clean curtains still hanging?", answer: "We offer a take-down and re-hang service for curtains. Our team will carefully remove your curtains, clean them at our premises and return to re-hang them. Alternatively, you can take them down yourself and bring them to us. We clean all curtain fabrics including silk, linen, velvet and thermal-lined curtains." },
      { question: "What alterations can you do?", answer: "Our in-house seamstress handles a wide range of alterations including trouser hems, waist adjustments, zip replacements, re-lining, taking in or letting out seams, shortening sleeves and replacing buttons. We work on all garment types from everyday clothing to designer and couture pieces." },
    ]},
    { category: "Garment Care", questions: [
      { question: "How should I store my dry-cleaned clothes?", answer: "We recommend removing the plastic cover as soon as you get home to allow fabrics to breathe. Store garments in a cool, dry wardrobe away from direct sunlight. Use padded or wooden hangers for jackets and coats. For long-term storage of special items, we can provide breathable garment bags." },
      { question: "How often should I dry clean my suits?", answer: "For suits worn regularly, we recommend dry cleaning every three to four wears, or when visibly soiled. Over-cleaning can shorten a garment's life, so we always advise on the appropriate frequency based on your wearing habits and fabric type." },
      { question: "Do you handle designer and couture items?", answer: "Absolutely. We regularly handle garments from luxury brands and couture houses. Our technicians are experienced with high-end fabrics, embellishments and construction methods. All designer items are individually assessed and processed with the utmost care." },
    ]},
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((c) => c.questions.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-gradient py-20 lg:py-28"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">FAQ</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1><p className="text-xl text-gray-200 leading-relaxed">Everything you need to know about our dry cleaning services. Cannot find your answer? Give us a ring and we will be happy to help.</p></div></div></section>

      <section className="py-16 lg:py-24 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-4xl mx-auto">
        {faqs.map((category, ci) => (<div key={ci} className="mb-12"><h2 className="text-2xl font-bold text-[var(--primary)] mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-[var(--accent)]"></div>{category.category}</h2><div className="space-y-1">{category.questions.map((faq, fi) => (<details key={fi} className="group bg-gray-50 rounded-sm overflow-hidden"><summary className="flex items-center justify-between p-6 list-none cursor-pointer font-semibold text-[var(--primary)] hover:text-[var(--accent)] transition-colors"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></details>))}</div></div>))}
      </div></div></section>

      <section className="py-16 lg:py-24 bg-gray-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto text-center"><h2 className="text-3xl font-bold text-[var(--primary)] mb-4">Still Got Questions?</h2><div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div><p className="text-lg text-gray-600 mb-8">We are always happy to help. Pop into our shop, give us a call or send an email.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/dry-cleaner-kensington/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors">Contact Us</Link><a href="tel:02079465530" className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--primary)] hover:text-white transition-colors">Call 020 7946 5530</a></div></div></div></section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Experience Premium Garment Care?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book a free collection today. Eco-friendly, convenient, immaculate.</p><Link href="/dry-cleaner-kensington/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Book Your Collection</Link></div></section>
    </>
  );
}
