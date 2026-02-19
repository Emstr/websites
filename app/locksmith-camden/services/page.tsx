import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Locksmith Services | Emergency Lockouts, Lock Changes & Security",
  description: "Full locksmith services in Camden, NW1. Emergency lockouts, lock replacements, UPVC repairs, key cutting, security upgrades, and safe opening. DBS checked, 30-minute response.",
};

export default function ServicesPage() {
  const services = [
    { id: "emergency-lockout", title: "Emergency Lockout Service", subtitle: "Back Inside in 30 Minutes or Less", description: "Being locked out is stressful. Our emergency locksmiths are positioned across Camden and North London, ready to reach you fast. We specialise in non-destructive entry — in 98% of cases, we gain access without any damage to your lock or door.", features: ["Available 24/7, 365 days a year", "Average response time under 30 minutes in Camden", "Non-destructive entry methods used as standard", "No call-out fee — you only pay for the work", "Domestic and commercial lockouts", "ID verification before entry for your security"], icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
    { id: "lock-replacement", title: "Lock Replacement", subtitle: "British Standard Locks for Complete Security", description: "Whether you need to replace a damaged lock, upgrade after a break-in, or simply improve your home security, we fit all types of locks from leading manufacturers. We recommend British Standard (BS 3621) locks to ensure your insurance requirements are met.", features: ["British Standard (BS 3621) compliant locks", "All major brands: Yale, Chubb, ERA, Union", "Mortice, rim, and Euro cylinder locks", "Insurance-compliant installations", "Same-day fitting available", "Lock snapping protection for Euro cylinders"], icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" },
    { id: "upvc-multipoint", title: "UPVC & Multipoint Lock Repair", subtitle: "Specialist UPVC Door & Window Solutions", description: "UPVC doors and windows use complex multipoint locking mechanisms that require specialist knowledge. Our locksmiths are trained to diagnose and repair all types of UPVC locks, from simple handle replacements to full gearbox changes.", features: ["Multipoint lock mechanism repairs", "Door handle and gearbox replacement", "Window lock and hinge repairs", "Patio and French door lock specialists", "Letter box and cat flap fitting", "Draught and security seal replacement"], icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
    { id: "key-cutting", title: "Key Cutting", subtitle: "Precision Keys Cut While You Wait", description: "We cut keys for virtually every type of lock — from standard Yale and mortice keys to high-security dimple and restricted profile keys. All keys are cut on professional machines for a perfect fit every time.", features: ["Standard and high-security key cutting", "Dimple and restricted key duplication", "Mortice, Yale, and Euro cylinder keys", "Spare keys cut on site", "Master key systems for landlords", "Key to code service for lost keys"], icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" },
    { id: "security-upgrades", title: "Security Upgrades", subtitle: "Comprehensive Home & Business Security", description: "After a break-in or simply for peace of mind, we provide thorough security assessments and upgrades. We'll identify vulnerabilities and recommend practical improvements to protect your property.", features: ["Free home security assessments", "Insurance-compliant lock upgrades", "Smart lock installation (Yale, Nuki, August)", "Door chains, viewers, and letterbox guards", "Window locks and restrictor installation", "Security lighting advice and referrals"], icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
    { id: "safe-opening", title: "Safe Opening", subtitle: "Professional Safe & Vault Services", description: "Lost the combination or key to your safe? Our experienced locksmiths can open most domestic and commercial safes without damage. We also supply, install, and maintain new safes for homes and businesses.", features: ["Non-destructive safe opening where possible", "Combination lock reset and repair", "Digital safe troubleshooting", "New safe supply and installation", "Fire safe and data safe specialists", "Commercial vault services available"], icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" },
  ];

  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl">
          <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Professional Locksmith Services in Camden</h1>
          <p className="text-xl text-gray-200 leading-relaxed">DBS checked locksmiths providing emergency and planned locksmith services across Camden and North London. No call-out fee, 30-minute response.</p>
        </div></div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">Expert Lock Solutions</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Every locksmith is DBS checked, fully insured, and equipped to handle any lock situation. We guarantee our work and always aim for non-destructive solutions.</p>
          </div>
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-12 items-center`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-[var(--primary)] mb-4"><svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} /></svg></div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-2">{service.title}</h3>
                  <p className="text-[var(--accent)] font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3"><svg className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span className="text-gray-700">{feature}</span></li>
                    ))}
                  </ul>
                  <a href="tel:02079460789" className="bg-[var(--accent)] text-white px-8 py-3 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Call Now</a>
                </div>
                <div className={`bg-gray-50 p-8 lg:p-12 rounded-sm ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-video bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-sm flex items-center justify-center">
                    <div className="text-white opacity-20 scale-150"><svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} /></svg></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">How It Works</span><h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Fast, Simple Process</h2><div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{ n: "1", t: "Call Us", d: "Call our 24/7 number. We'll take your details and give you an estimated arrival time." }, { n: "2", t: "We Arrive", d: "A DBS checked locksmith arrives within 30 minutes with all tools and parts needed." }, { n: "3", t: "We Fix It", d: "We assess the situation, confirm the price, and complete the work. No surprises." }, { n: "4", t: "You're Secure", d: "We test everything, hand over new keys, and provide a receipt and guarantee." }].map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">{step.n}</div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-2">{step.t}</h3><p className="text-gray-600">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Locksmith Right Now?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">We&apos;re available 24/7. Call us for immediate assistance or use our contact form for non-urgent enquiries.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:02079460789" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Call 020 7946 0789</a>
            <Link href="/locksmith-camden/contact" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors inline-block">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="bg-gray-50 border border-gray-200 rounded-sm p-4 text-sm text-gray-600"><p><strong>DBS Checked:</strong> All locksmiths are DBS checked and fully insured. Non-destructive entry methods used as standard. All work guaranteed.</p></div></div></section>
    </>
  );
}
