import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IT Services | Managed Support, Cybersecurity & Cloud Solutions",
  description:
    "Comprehensive IT services including managed support, cybersecurity, cloud solutions, network infrastructure, VoIP, and data backup for Canary Wharf businesses.",
  openGraph: {
    title: "IT Services | Canary Wharf IT Solutions",
    description:
      "Professional IT services for businesses in Canary Wharf. Managed support, cybersecurity, cloud migration, and more.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "managed-it-support",
      title: "Managed IT Support",
      subtitle: "Your Outsourced IT Department",
      description:
        "Our fully managed IT support service gives you a dedicated team of engineers monitoring, maintaining, and optimising your technology around the clock. We act as your complete IT department, handling everything from day-to-day helpdesk queries to strategic technology planning.",
      features: [
        "24/7 proactive monitoring and alerting",
        "Rapid helpdesk support with 15-minute SLA",
        "Patch management and software updates",
        "Hardware procurement and lifecycle management",
        "IT strategy and roadmap planning",
        "Regular system health reports and reviews",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      subtitle: "Multi-Layered Threat Protection",
      description:
        "Cyber threats are evolving constantly. Our cybersecurity service provides comprehensive protection through advanced firewalls, endpoint detection, email filtering, and employee awareness training. We help you achieve Cyber Essentials certification and maintain compliance with industry regulations.",
      features: [
        "Next-generation firewall deployment and management",
        "Endpoint Detection and Response (EDR)",
        "Phishing simulation and staff awareness training",
        "Vulnerability scanning and penetration testing",
        "Cyber Essentials and Cyber Essentials Plus certification",
        "Incident response planning and support",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions",
      subtitle: "Scalable, Secure Cloud Infrastructure",
      description:
        "Whether you need a full cloud migration or a hybrid approach, we design and deliver cloud solutions that improve flexibility, reduce costs, and enhance collaboration. As a Microsoft Partner, we specialise in Microsoft 365 and Azure deployments.",
      features: [
        "Microsoft 365 deployment and optimisation",
        "Azure cloud infrastructure design and migration",
        "Hybrid cloud architecture for complex environments",
        "Cloud security and access management",
        "SharePoint and Teams collaboration setup",
        "Licence management and cost optimisation",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      id: "network-infrastructure",
      title: "Network Infrastructure",
      subtitle: "Robust, High-Performance Networks",
      description:
        "A reliable network is the backbone of your business. We design, install, and manage enterprise-grade wired and wireless networks that deliver consistent performance, security, and scalability for offices of all sizes in Canary Wharf and beyond.",
      features: [
        "Structured cabling and network design",
        "Enterprise Wi-Fi deployment and optimisation",
        "Switch and router configuration and management",
        "VLAN segmentation and network security",
        "Network performance monitoring and troubleshooting",
        "Office relocation and fit-out cabling",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      id: "voip-communications",
      title: "VoIP & Communications",
      subtitle: "Modern Business Communications",
      description:
        "Replace outdated phone systems with modern VoIP and unified communications. We deploy cloud-based phone systems that integrate with Microsoft Teams, reduce call costs, and enable your team to communicate seamlessly from anywhere.",
      features: [
        "Cloud-hosted VoIP phone systems",
        "Microsoft Teams voice integration",
        "Auto-attendant and call routing setup",
        "Call recording and analytics",
        "Video conferencing room solutions",
        "Number porting and SIP trunking",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      id: "data-backup-recovery",
      title: "Data Backup & Recovery",
      subtitle: "Business Continuity Guaranteed",
      description:
        "Data loss can cripple a business. Our backup and disaster recovery solutions ensure your critical data is protected with automated, encrypted backups and tested recovery procedures. We guarantee you can be back up and running fast when it matters most.",
      features: [
        "Automated daily backups with encryption",
        "On-site and off-site backup replication",
        "Disaster recovery planning and testing",
        "Rapid data restoration and failover",
        "Microsoft 365 and cloud backup",
        "Ransomware recovery solutions",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Complete IT Solutions
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From managed support and cybersecurity to cloud migration and
              disaster recovery, we provide everything your business needs to
              stay secure, productive, and ahead of the curve.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Professional IT Services
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As a Microsoft Partner and Cyber Essentials certified provider, we
              deliver enterprise-grade technology solutions tailored to
              businesses in Canary Wharf and across London.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-accent font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/it-support-canary-wharf/contact" className="btn-accent">
                    Discuss Your Needs
                  </Link>
                </div>
                <div
                  className={`bg-gray-50 p-8 lg:p-12 rounded-sm ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-sm flex items-center justify-center">
                    <div className="text-white opacity-20 scale-150">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              How We Onboard New Clients
            </h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Free IT Audit
              </h3>
              <p className="text-gray-600">
                We assess your current infrastructure, identify vulnerabilities,
                and understand your business requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Tailored Proposal</h3>
              <p className="text-gray-600">
                We design a solution that fits your needs and budget, with clear
                pricing and no hidden costs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Seamless Onboarding</h3>
              <p className="text-gray-600">
                Our engineers handle the transition with zero disruption to your
                team. We document everything and train your staff.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                Proactive monitoring, regular reviews, and a dedicated account
                manager to keep your technology ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your IT?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a complimentary IT audit and discover how we can improve your
            security, reliability, and productivity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/it-support-canary-wharf/contact" className="btn-accent">
              Book Free IT Audit
            </Link>
            <a href="tel:02079467012" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Call 020 7946 7012
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
