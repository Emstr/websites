import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Accounting & Tax Questions Answered",
  description: "Frequently asked questions about accounting, tax returns, VAT, payroll and our services. Expert answers from City Accounting Partners.",
  openGraph: { title: "FAQ | City Accounting Partners", description: "Common questions about accounting services, tax and compliance." },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Switching Accountants",
      questions: [
        { question: "How easy is it to switch accountants?", answer: "Very easy. We handle the entire transition process for you. We contact your previous accountant using professional clearance procedures, obtain your records and set up your cloud accounting software. Most transitions are completed within two weeks with zero disruption to your business." },
        { question: "Will there be a gap in my accounting?", answer: "No. We ensure a seamless handover with no gaps in your record-keeping or compliance. We overlap with your previous accountant to ensure every deadline is met during the transition period." },
        { question: "What do I need to provide to get started?", answer: "Very little. We need your company details (or personal details for sole traders), your previous accountant's contact information and access to your bank feeds. We handle everything else, including contacting your previous accountant and setting up your cloud software." },
      ],
    },
    {
      category: "Tax & Compliance",
      questions: [
        { question: "When is the deadline for my Self Assessment tax return?", answer: "Paper returns must be filed by 31 October following the end of the tax year. Online returns have a deadline of 31 January. Any tax owed must also be paid by 31 January. We recommend submitting well before the deadline to avoid the last-minute rush and identify any tax planning opportunities." },
        { question: "Do I need to register for VAT?", answer: "You must register for VAT if your taxable turnover exceeds the VAT threshold (currently 90,000 over any rolling 12-month period). Voluntary registration below this threshold can be beneficial in some cases. We advise on the most advantageous VAT scheme for your business." },
        { question: "What is Making Tax Digital (MTD)?", answer: "Making Tax Digital is HMRC's programme to digitise the tax system. VAT-registered businesses must already keep digital records and submit VAT returns using MTD-compatible software. MTD for Income Tax will follow. We ensure all our clients are fully MTD compliant." },
        { question: "Can you help reduce my Corporation Tax bill?", answer: "Yes. We proactively identify all legitimate reliefs, allowances and deductions available to your business, including R&D Tax Credits, Annual Investment Allowance, and capital allowances. We also advise on the most tax-efficient salary and dividend strategies for company directors." },
      ],
    },
    {
      category: "Payroll & Employees",
      questions: [
        { question: "How does your payroll service work?", answer: "We process your payroll on your chosen frequency (weekly, fortnightly or monthly). We calculate pay, deductions, and National Insurance, produce payslips, submit RTI reports to HMRC and handle year-end reporting including P60s and P11Ds. All you need to do is tell us about any changes." },
        { question: "What is auto-enrolment and do I need to comply?", answer: "Auto-enrolment requires all employers to provide a workplace pension scheme and automatically enrol eligible employees. Even if you have just one employee, you must comply. We handle the entire process, from scheme setup to ongoing contributions management." },
        { question: "Can you handle CIS (Construction Industry Scheme)?", answer: "Yes. We manage all aspects of CIS compliance for contractors and subcontractors, including monthly returns, verification of subcontractors and CIS deduction statements." },
      ],
    },
    {
      category: "Fees & Services",
      questions: [
        { question: "How much do your services cost?", answer: "We offer transparent fixed monthly fees based on the complexity of your business and the services you need. Our sole trader packages start from 75 per month and limited company packages from 125 per month. We provide a detailed quotation after our free initial consultation." },
        { question: "Is the initial consultation really free?", answer: "Yes, completely free with no obligation. We use the meeting to understand your business, review your current setup and identify how we can help. There is no hard sell - we want you to make an informed decision about whether we are the right fit." },
        { question: "What cloud accounting software do you support?", answer: "We are certified partners for Xero, QuickBooks and FreeAgent. We recommend the best platform for your business and provide full setup, training and ongoing support. Software subscription costs are typically included in our monthly fee packages." },
        { question: "Do you offer services for businesses outside London?", answer: "Absolutely. While our office is in the City of London, we serve clients across the UK using cloud technology and video calls. Many of our clients have never visited our office - everything is handled digitally." },
      ],
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.flatMap((category) => category.questions.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } }))),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width"><div className="max-w-3xl">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-200 leading-relaxed">Find answers to common questions about our accounting services, tax compliance and how we work with clients.</p>
        </div></div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width"><div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-accent"></div>{category.category}</h2>
              <div className="space-y-1">
                {category.questions.map((faq, faqIndex) => (
                  <details key={faqIndex} className="group bg-gray-50 rounded-sm overflow-hidden">
                    <summary className="faq-question p-6 list-none cursor-pointer"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
                    <div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div></div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width"><div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Still Have Questions?</h2>
          <div className="gold-line-center mb-6"></div>
          <p className="text-lg text-gray-600 mb-8">We&apos;re here to help. Get in touch and our team will be happy to answer any questions about our accounting services.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/accountant-city/contact" className="btn-accent">Contact Us</Link>
            <a href="tel:02079463456" className="btn-outline">Call 020 7946 3456</a>
          </div>
        </div></div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Your Free Consultation?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book a complimentary meeting to discuss your business accounting needs with one of our ACCA qualified accountants.</p>
          <Link href="/accountant-city/contact" className="btn-accent">Book Your Free Consultation</Link>
        </div>
      </section>

      <section className="py-8 bg-gray-100">
        <div className="container-width"><div className="fca-notice"><p><strong>Professional Standards:</strong> City Accounting Partners is an ACCA certified practice. The information on this page is for general guidance only and does not constitute financial advice. Tax rules are subject to change. Individual circumstances may vary.</p></div></div>
      </section>
    </>
  );
}
