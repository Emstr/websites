import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accounting Services | Tax, Payroll & Bookkeeping in the City",
  description: "Comprehensive accounting services in the City of London. Business accounting, tax returns, payroll, company formation, VAT services and bookkeeping from ACCA certified accountants.",
  openGraph: { title: "Accounting Services | City Accounting Partners", description: "ACCA certified accounting services in the City of London, EC2." },
};

export default function ServicesPage() {
  const services = [
    {
      id: "business-accounting", title: "Business Accounting", subtitle: "Clear, Compliant Financial Reporting",
      description: "We prepare annual accounts, management reports and financial statements for sole traders, partnerships and limited companies. Our cloud-based approach means you always have real-time visibility of your financial position, and our proactive reporting helps you make better business decisions.",
      features: ["Annual statutory accounts preparation", "Management accounts and financial reporting", "Companies House and HMRC filing", "Cloud accounting setup (Xero, QuickBooks, FreeAgent)", "Director and shareholder advice", "Year-end tax planning and dividend strategies"],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    },
    {
      id: "tax-returns", title: "Tax Returns & Planning", subtitle: "Minimise Your Tax, Maximise Your Wealth",
      description: "From Self Assessment to Corporation Tax, we handle all your tax obligations with precision and proactive planning. We ensure every legitimate relief and allowance is claimed, keeping your tax bill as low as legally possible while maintaining full HMRC compliance.",
      features: ["Self Assessment tax returns for individuals", "Corporation Tax returns and CT600 filing", "Capital Gains Tax planning and reporting", "R&D Tax Credit claims", "IR35 status reviews for contractors", "Annual tax planning review and advice"],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    },
    {
      id: "payroll", title: "Payroll Services", subtitle: "Accurate Payroll, Every Time",
      description: "Our payroll bureau handles everything from weekly and monthly pay runs to year-end reporting. We ensure RTI submissions are timely, payslips are accurate and your auto-enrolment obligations are fully met, whether you have one employee or one hundred.",
      features: ["Weekly, fortnightly and monthly payroll processing", "Real Time Information (RTI) submissions to HMRC", "Payslips, P60s and P11D preparation", "Workplace pension auto-enrolment management", "Statutory payments (SSP, SMP, SPP) calculations", "PAYE settlement agreements"],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    },
    {
      id: "company-formation", title: "Company Formation", subtitle: "Start Trading in 24 Hours",
      description: "We make setting up a limited company simple and fast. From choosing the right company structure to registering with Companies House and HMRC, we handle every step so you can start trading with confidence from day one.",
      features: ["Same-day company incorporation", "Memorandum and Articles of Association", "Registration for Corporation Tax and PAYE", "VAT registration where required", "Share structure and shareholder agreements advice", "Registered office address service"],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    },
    {
      id: "vat-services", title: "VAT Services", subtitle: "MTD-Compliant VAT Management",
      description: "Navigating VAT can be complex, but we make it straightforward. From registration and scheme selection to quarterly returns and MTD digital submissions, we ensure your VAT affairs are accurate, timely and compliant with the latest HMRC requirements.",
      features: ["VAT registration and deregistration", "Quarterly and annual VAT return preparation", "Making Tax Digital (MTD) compliant filing", "Flat Rate, Cash Accounting and Standard scheme advice", "Partial exemption calculations", "VAT health checks and error correction"],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" /></svg>,
    },
    {
      id: "bookkeeping", title: "Bookkeeping", subtitle: "Real-Time Financial Clarity",
      description: "Accurate bookkeeping is the foundation of sound financial management. We use leading cloud software to maintain your records in real time, giving you instant access to your financial position and ensuring your accounts are always ready for review.",
      features: ["Bank reconciliation and transaction coding", "Purchase and sales invoice management", "Expense tracking and receipt management", "Monthly management reporting", "Credit control and aged debtor analysis", "Cloud software training and support"],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    },
  ];

  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width"><div className="max-w-3xl">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Accounting Services for Growing Businesses</h1>
          <p className="text-xl text-gray-200 leading-relaxed">From annual accounts to cloud bookkeeping, we provide the full range of accounting services your business needs to thrive.</p>
        </div></div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Expert Accounting Solutions</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">As ACCA certified accountants, we combine technical excellence with practical business advice. Every service is delivered with precision and proactive insight.</p>
          </div>
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-accent font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/accountant-city/contact" className="btn-accent">Discuss Your Needs</Link>
                </div>
                <div className={`bg-gray-50 p-8 lg:p-12 rounded-sm ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-sm flex items-center justify-center"><div className="text-white opacity-20 scale-150">{service.icon}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">How We Work With You</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center"><div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div><h3 className="text-xl font-bold text-primary mb-2">Free Consultation</h3><p className="text-gray-600">We meet to understand your business, review your current setup and identify how we can add value.</p></div>
            <div className="text-center"><div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div><h3 className="text-xl font-bold text-primary mb-2">Tailored Proposal</h3><p className="text-gray-600">We provide a clear, fixed-fee proposal outlining exactly what services we will deliver and what they cost.</p></div>
            <div className="text-center"><div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div><h3 className="text-xl font-bold text-primary mb-2">Seamless Onboarding</h3><p className="text-gray-600">We handle the transition from your previous accountant, set up cloud software and organise your records.</p></div>
            <div className="text-center"><div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div><h3 className="text-xl font-bold text-primary mb-2">Ongoing Support</h3><p className="text-gray-600">Regular reviews, proactive tax advice and unlimited support throughout the year. We are always available.</p></div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Your Finances in Order?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book a free consultation and discover how we can save you time, money and stress.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/accountant-city/contact" className="btn-accent">Book Free Consultation</Link>
            <a href="tel:02079463456" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 3456</a>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-100">
        <div className="container-width"><div className="fca-notice"><p><strong>Professional Standards:</strong> City Accounting Partners is an ACCA certified practice. All tax advice is based on current UK legislation which is subject to change. Individual circumstances may vary.</p></div></div>
      </section>
    </>
  );
}
