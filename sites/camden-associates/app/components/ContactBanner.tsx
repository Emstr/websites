import Link from "next/link";

export default function ContactBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-electric-blue to-blue-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Discuss Your Transaction?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Our team of corporate finance specialists is ready to help you achieve your strategic objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-electric-blue rounded-lg hover:bg-silver transition-colors font-semibold text-lg"
            >
              Schedule a Consultation
            </Link>
            <a
              href="tel:+442071234567"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-electric-blue transition-colors font-semibold text-lg"
            >
              Call +44 20 7123 4567
            </a>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center text-white/90">
            <a
              href="mailto:contact@camdenassociates.co.uk"
              className="flex items-center gap-2 hover:text-white transition-colors"
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>contact@camdenassociates.co.uk</span>
            </a>
            <span className="hidden sm:inline text-white/50">|</span>
            <div className="flex items-center gap-2">
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
              <span>Available Mon-Fri, 9:00-17:30</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
