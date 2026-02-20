import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security Services | Guarding, CCTV, Events & Patrols",
  description:
    "Professional security services including manned guarding, CCTV installation, event security, mobile patrols, key holding and risk assessments in East London.",
  openGraph: {
    title: "Security Services | Stratford Security Solutions",
    description: "Comprehensive SIA-licensed security services across East London. Guarding, CCTV, events and 24/7 patrols.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "manned-guarding",
      title: "Manned Guarding",
      subtitle: "Professional Protection Around the Clock",
      description:
        "Our manned guarding service provides a visible, professional security presence at your premises. Every officer is SIA-licensed, DBS-checked and trained in conflict management, first aid and fire safety. Whether you need a single guard for a retail unit or a team for a large commercial site, we supply reliable, well-presented officers who represent your business with pride.",
      features: [
        "SIA-licensed security officers with valid DBS checks",
        "Uniformed or plain-clothed officers to suit your requirements",
        "Access control, visitor management and reception duties",
        "Incident reporting via our digital patrol system",
        "Flexible shift patterns including nights and weekends",
        "Dedicated account manager for contract oversight",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: "cctv-installation",
      title: "CCTV Installation",
      subtitle: "See Everything, Miss Nothing",
      description:
        "From single-camera setups for small businesses to multi-site networked systems, our CCTV engineers design and install surveillance solutions that give you complete visibility. We use the latest HD and IP camera technology with remote viewing via smartphone, and every installation is backed by our maintenance and support service.",
      features: [
        "HD and IP camera systems with night vision capability",
        "Remote viewing via smartphone, tablet or desktop",
        "Intelligent analytics including motion detection and facial recognition",
        "Integration with existing alarm and access control systems",
        "GDPR-compliant installation with appropriate signage",
        "Ongoing maintenance contracts and 24/7 fault support",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "event-security",
      title: "Event Security",
      subtitle: "Safe Events, Memorable Experiences",
      description:
        "We have secured events ranging from intimate private functions to large-scale festivals and sporting events. Our event security teams are trained in crowd management, conflict resolution and emergency procedures. We work with you from the planning stage to ensure every detail is covered.",
      features: [
        "Crowd management and flow control",
        "Door supervision and ID checking",
        "VIP close protection and escorting",
        "Emergency evacuation planning and execution",
        "Bag searches and security screening",
        "Post-event reporting and incident documentation",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: "mobile-patrols",
      title: "Mobile Patrols",
      subtitle: "Visible Deterrence, Rapid Response",
      description:
        "Our GPS-tracked patrol vehicles cover your sites at randomised intervals, providing a visible deterrent to criminal activity and ensuring any issues are identified and dealt with swiftly. Patrol officers conduct external and internal checks, reporting findings in real time to our control room.",
      features: [
        "GPS-tracked patrol vehicles with real-time monitoring",
        "Randomised patrol schedules to prevent predictability",
        "Internal and external security checks at each visit",
        "Digital reporting with time-stamped photographic evidence",
        "Alarm response and lockup/unlock services",
        "Multi-site patrol routes for cost-effective coverage",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: "key-holding",
      title: "Key Holding",
      subtitle: "Your First Line of Response",
      description:
        "Our key holding service means you do not have to be called out in the middle of the night when an alarm activates. We securely store your keys at our control room and dispatch a trained officer to attend your premises, assess the situation and take appropriate action, keeping you informed every step of the way.",
      features: [
        "Secure, audited key storage at our 24/7 control room",
        "Guaranteed response within 20 minutes of alarm activation",
        "Liaison with police, fire and emergency services",
        "Premises securing and temporary repairs if needed",
        "Detailed incident reports with photographic evidence",
        "Holiday and out-of-hours cover for business owners",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
    },
    {
      id: "risk-assessments",
      title: "Risk Assessments",
      subtitle: "Identify Threats Before They Become Problems",
      description:
        "Our risk assessment service provides a thorough evaluation of your security posture. Our experienced assessors visit your site, identify vulnerabilities and produce a detailed report with prioritised recommendations. This ensures your security investment is targeted where it will have the greatest impact.",
      features: [
        "Physical security surveys and vulnerability testing",
        "Threat analysis specific to your sector and location",
        "Prioritised recommendations with cost-benefit analysis",
        "Compliance checks against insurance and regulatory requirements",
        "Staff security awareness training recommendations",
        "Follow-up reviews to measure improvement",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Professional Security Services</h1>
            <p className="text-xl text-gray-200 leading-relaxed">Comprehensive security solutions delivered by SIA-licensed professionals. From manned guarding to CCTV installation, we protect what matters most.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Security Services</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Every service is backed by our 24/7 control room, over 50 SIA-licensed officers and more than a decade of experience protecting businesses across East London.</p>
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
                        <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/security-stratford/contact" className="btn-accent">Get a Quote</Link>
                </div>
                <div className={`bg-gray-50 p-8 lg:p-12 rounded-sm ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-sm flex items-center justify-center">
                    <div className="text-white opacity-20 scale-150">{service.icon}</div>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">How We Protect You</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">1</div>
              <h3 className="text-xl font-bold text-primary mb-2">Site Assessment</h3>
              <p className="text-gray-600">We visit your premises, assess your risks and understand your specific security requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">2</div>
              <h3 className="text-xl font-bold text-primary mb-2">Tailored Proposal</h3>
              <p className="text-gray-600">We design a bespoke security plan with clear pricing, no hidden costs and no long-term lock-in.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">3</div>
              <h3 className="text-xl font-bold text-primary mb-2">Deployment</h3>
              <p className="text-gray-600">We deploy trained, briefed officers and systems, with a smooth handover and clear communication.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">4</div>
              <h3 className="text-xl font-bold text-primary mb-2">Ongoing Review</h3>
              <p className="text-gray-600">Regular contract reviews, performance reporting and service adjustments to maintain the highest standards.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Security for Your Business?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Get a free, no-obligation security assessment and quote from our experienced team.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/security-stratford/contact" className="btn-accent">Get a Free Quote</Link>
            <a href="tel:02079469920" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 9920</a>
          </div>
        </div>
      </section>
    </>
  );
}
