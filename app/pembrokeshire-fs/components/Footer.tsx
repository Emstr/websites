import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Mortgage Advice", href: "/pembrokeshire-fs/services/#mortgages" },
    { name: "Pension Planning", href: "/pembrokeshire-fs/services/#pensions" },
    { name: "Investment Planning", href: "/pembrokeshire-fs/services/#investments" },
    { name: "Protection Insurance", href: "/pembrokeshire-fs/services/#protection" },
    { name: "Retirement Planning", href: "/pembrokeshire-fs/services/#retirement" },
    { name: "Equity Release", href: "/pembrokeshire-fs/services/#equity-release" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/pembrokeshire-fs/about/" },
    { name: "Our Services", href: "/pembrokeshire-fs/services/" },
    { name: "FAQ", href: "/pembrokeshire-fs/faq/" },
    { name: "Contact Us", href: "/pembrokeshire-fs/contact/" },
    { name: "Privacy Policy", href: "/pembrokeshire-fs/privacy/" },
    { name: "Terms of Service", href: "/pembrokeshire-fs/terms/" },
  ];

  return (
    <footer className="bg-navy text-white">
      {/* FCA Notice Banner */}
      <div className="bg-primary py-4">
        <div className="container-custom px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-center text-sm">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-accent"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold">
                Authorised and Regulated by the Financial Conduct Authority
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold">Pembrokeshire</span>
                <span className="text-xl font-bold text-accent"> FS</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Your trusted independent financial advisers providing expert
              mortgage advice and financial planning across Wales, from
              Pembroke to Cardiff and beyond.
            </p>
            <div className="space-y-3">
              <a
                href="tel:01646687767"
                className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                01646 687767
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Address */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Our Office</h3>
            <address className="not-italic text-gray-300 space-y-3">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="font-semibold text-white">
                    Pembrokeshire Financial Services
                  </p>
                  <p>Pembroke</p>
                  <p>Pembrokeshire</p>
                  <p>Wales</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p>Mon - Fri: 9:00 AM - 5:30 PM</p>
                </div>
              </div>
            </address>

            <div className="mt-6">
              <h4 className="text-sm font-bold text-accent mb-2">Areas We Serve</h4>
              <p className="text-gray-400 text-sm">
                Cardiff, Newport, Swansea, Bridgend, Haverfordwest, Port Talbot, Tenby &amp; all of Wales
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FCA Regulatory Notice */}
      <div className="border-t border-white/10">
        <div className="container-custom px-4 py-8">
          <div className="fca-notice bg-white/5 border-l-accent mb-8">
            <h4 className="font-semibold text-white mb-2">
              Important Regulatory Information
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Pembrokeshire Financial Services is authorised and regulated by the
              Financial Conduct Authority (FCA). Your home may be repossessed if
              you do not keep up repayments on your mortgage. The guidance
              and/or advice contained within this website is subject to the UK
              regulatory regime and is therefore primarily targeted at consumers
              based in the UK.
            </p>
            <p className="text-gray-300 text-sm mt-3 leading-relaxed">
              The Financial Ombudsman Service (FOS) is an agency for arbitrating
              on unresolved complaints between regulated firms and their
              clients. Full details of the FOS can be found on its website at{" "}
              <a
                href="https://www.financial-ombudsman.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                www.financial-ombudsman.org.uk
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-custom px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Pembrokeshire Financial Services. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/pembrokeshire-fs/privacy/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/pembrokeshire-fs/terms/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
