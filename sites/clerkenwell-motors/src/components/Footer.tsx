import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-garage-charcoal text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-garage-red rounded-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
              </div>
              <div className="text-lg font-bold">CLERKENWELL MOTORS</div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Family-owned independent garage serving Central London since 1993. Over 30 years of trusted automotive expertise.
            </p>
            <div className="flex items-center space-x-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-white ml-2 font-semibold">4.7/5</span>
            </div>
            <p className="text-gray-400 text-xs mt-1">111 Google Reviews</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-garage-red">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/mot" className="text-gray-300 hover:text-white transition-colors">
                  MOT Testing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-300 hover:text-white transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-garage-red">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-garage-red mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">14 Warner Street<br />London EC1R 5HA</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-garage-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:02072786375" className="text-gray-300 hover:text-white transition-colors">
                  020 7278 6375
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-garage-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:info@clerkenwellmotors.co.uk" className="text-gray-300 hover:text-white transition-colors">
                  info@clerkenwellmotors.co.uk
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-garage-red">Opening Hours</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-semibold">7:30 - 18:30</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="font-semibold">9:00 - 14:00</span>
              </li>
              <li className="text-xs text-gray-400 mt-2">
                (Saturday by appointment)
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-bold mb-2">We Service</h4>
              <p className="text-xs text-gray-400">
                Cars • Vans • Motorcycles<br />
                Modern • Classic • Electric
              </p>
            </div>
          </div>
        </div>

        {/* Accreditations */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-center text-lg font-bold mb-6 text-garage-red">Trusted & Accredited</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg p-3 inline-block">
                <div className="text-black font-bold text-lg">RAC</div>
                <div className="text-xs text-gray-600">Approved</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 rounded-lg p-3 inline-block">
                <div className="text-black font-bold text-lg">AA</div>
                <div className="text-xs text-gray-800">Approved</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-3 inline-block">
                <div className="text-black font-bold text-sm">MIPOC</div>
                <div className="text-xs text-gray-600">Member</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-600 rounded-lg p-3 inline-block">
                <div className="text-white font-bold text-sm">Which?</div>
                <div className="text-xs text-green-100">Trusted Trader</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black bg-opacity-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 space-y-2 sm:space-y-0">
            <p>&copy; 2024 Clerkenwell Motors. All rights reserved.</p>
            <p>Serving Islington, Camden & The City since 1993</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
