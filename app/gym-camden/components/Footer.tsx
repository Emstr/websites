import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <div className="container-width section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-accent font-bold text-xl">CS</span>
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight">
                  Camden Strength
                </p>
                <p className="text-xs text-gray-400 tracking-wider uppercase">
                  & Fitness
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Serious strength and fitness training in the heart of Camden.
              No mirrors, no egos — just results. Built different since 2019.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Open 7 Days a Week</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/gym-camden/services" className="footer-link">
                  Strength Training
                </Link>
              </li>
              <li>
                <Link href="/gym-camden/services" className="footer-link">
                  HIIT Classes
                </Link>
              </li>
              <li>
                <Link href="/gym-camden/services" className="footer-link">
                  Personal Training
                </Link>
              </li>
              <li>
                <Link href="/gym-camden/services" className="footer-link">
                  Olympic Lifting
                </Link>
              </li>
              <li>
                <Link href="/gym-camden/services" className="footer-link">
                  Boxing Fitness
                </Link>
              </li>
              <li>
                <Link href="/gym-camden/services" className="footer-link">
                  Nutritional Coaching
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/gym-camden/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gym-camden/contact" className="footer-link">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/gym-camden/faq" className="footer-link">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/gym-camden/services" className="footer-link">
                  Class Timetable
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="text-accent font-semibold mb-1">Our Gym</p>
                <address className="not-italic text-gray-300 text-sm">
                  Unit 3, 56 Chalk Farm Road
                  <br />
                  Camden, London NW1 8AN
                </address>
              </div>
              <div>
                <p className="text-accent font-semibold mb-1">Opening Hours</p>
                <p className="text-gray-300 text-sm">
                  Mon-Fri: 5am - 10pm
                  <br />
                  Sat: 7am - 8pm
                  <br />
                  Sun: 8am - 6pm
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="tel:02079463350"
                  className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  020 7946 3350
                </a>
                <a
                  href="mailto:info@camdenstrength.co.uk"
                  className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors mt-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  info@camdenstrength.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="container-width py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {currentYear} Camden Strength & Fitness. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/gym-camden/contact" className="hover:text-accent transition-colors">
                Contact
              </Link>
              <Link href="/gym-camden/faq" className="hover:text-accent transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
