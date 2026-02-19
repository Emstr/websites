import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Legal Questions Answered",
  description: "Frequently asked questions about legal services, conveyancing, family law, wills and immigration. Expert answers from Wimbledon Legal Services.",
  openGraph: { title: "FAQ | Wimbledon Legal Services", description: "Common questions about legal services in Wimbledon, SW19." },
};

export default function FAQPage() {
  const faqs = [
    { category: "Conveyancing", questions: [
      { question: "How long does conveyancing take?", answer: "A typical residential conveyancing transaction takes 8-12 weeks from instruction to completion. However, timescales can vary depending on the complexity of the transaction, the length of the chain and how quickly searches and enquiries are resolved. We keep you updated at every stage." },
      { question: "What are your conveyancing fees?", answer: "We offer competitive fixed-fee conveyancing so you know your legal costs from the outset. Our fees depend on the property value and type of transaction. Contact us for a detailed, no-obligation quote that includes all anticipated disbursements." },
      { question: "Do I need a local solicitor for conveyancing?", answer: "While conveyancing can be handled remotely, using a local solicitor offers advantages. We have detailed knowledge of the Wimbledon property market, established relationships with local agents and can facilitate in-person signings when required." },
    ]},
    { category: "Family Law", questions: [
      { question: "How much does a divorce cost?", answer: "Costs depend on whether the divorce is contested or uncontested. An uncontested divorce typically costs from 1,000 plus court fees and disbursements. Financial settlement and child arrangement proceedings may involve additional costs. We provide clear fee estimates at the outset." },
      { question: "Do you offer legal aid for family cases?", answer: "Yes, we offer legal aid for eligible family law cases, particularly those involving domestic violence or child protection. Eligibility depends on your financial circumstances and the nature of your case. We can assess your eligibility during your free initial consultation." },
      { question: "Can you help with child arrangement disputes?", answer: "Yes, we handle all aspects of child arrangement disputes, from negotiation and mediation through to court proceedings if necessary. We always prioritise the welfare of the child and aim to reach agreements that work for the whole family." },
    ]},
    { category: "Wills & Probate", questions: [
      { question: "How much does it cost to make a will?", answer: "A standard single will typically costs from 200, and mirror wills for couples from 350. More complex wills involving trusts or business assets will be quoted individually. Given the importance of having a properly drafted will, this represents excellent value for the peace of mind it provides." },
      { question: "What is a Lasting Power of Attorney?", answer: "A Lasting Power of Attorney (LPA) is a legal document that allows you to appoint someone you trust to make decisions on your behalf if you lose the capacity to do so. There are two types: one for health and welfare decisions and one for property and financial affairs." },
      { question: "Do I need probate?", answer: "Probate is usually required when someone dies owning property or significant assets. The process involves applying to the Probate Registry, collecting the estate, paying debts and taxes, and distributing assets according to the will or intestacy rules. We handle the entire process." },
    ]},
    { category: "Working With Us", questions: [
      { question: "Is the initial consultation really free?", answer: "Yes, your first consultation is completely free with no obligation. We use this time to understand your situation, explain your legal options and provide an honest assessment of your case. You will receive a clear fee estimate before deciding whether to proceed." },
      { question: "How do I instruct you?", answer: "Simply call us on 020 7946 4567, email info@wimbledonlegal.co.uk or complete the contact form on our website. We aim to arrange your free initial consultation within 48 hours of your enquiry." },
      { question: "Are your solicitors qualified?", answer: "All our solicitors are fully qualified and admitted to the Roll of Solicitors in England and Wales. We are regulated by the Solicitors Regulation Authority (SRA) and are members of The Law Society. Our team includes specialists in each of our practice areas." },
      { question: "Can you meet outside office hours?", answer: "We understand that legal matters can be stressful and that not everyone can attend during standard office hours. We offer early morning and evening appointments by prior arrangement, as well as telephone and video consultations for added convenience." },
    ]},
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((c) => c.questions.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1><p className="text-xl text-gray-200 leading-relaxed">Find answers to common legal questions about our services, fees and how we work with clients.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="max-w-4xl mx-auto">{faqs.map((category, ci) => (<div key={ci} className="mb-12"><h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-accent"></div>{category.category}</h2><div className="space-y-1">{category.questions.map((faq, fi) => (<details key={fi} className="group bg-gray-50 rounded-sm overflow-hidden"><summary className="faq-question p-6 list-none cursor-pointer"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></details>))}</div></div>))}</div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="max-w-3xl mx-auto text-center"><h2 className="text-3xl font-bold text-primary mb-4">Still Have Questions?</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 mb-8">We&apos;re here to help. Contact us for a free, no-obligation consultation and our solicitors will be happy to answer your legal questions.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/solicitor-wimbledon/contact" className="btn-accent">Contact Us</Link><a href="tel:02079464567" className="btn-outline">Call 020 7946 4567</a></div></div></div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Your Free Consultation?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Speak directly with an experienced solicitor about your legal matter. Free, confidential and without obligation.</p><Link href="/solicitor-wimbledon/contact" className="btn-accent">Book Your Free Consultation</Link></div></section>

      <section className="py-8 bg-gray-100"><div className="container-width"><div className="fca-notice"><p><strong>Regulatory Notice:</strong> Wimbledon Legal Services is authorised and regulated by the Solicitors Regulation Authority. The information on this page is for general guidance only and does not constitute legal advice. Individual circumstances may vary.</p></div></div></section>
    </>
  );
}
