import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-rebel-dark border-t border-rebel-pink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-rebel-pink">Rebel Rebel</span>
              <br />
              <span className="text-rebel-purple">Flowers</span>
            </h3>
            <p className="text-gray-400 text-sm italic">
              "A flagrant disregard for the colour wheel since 2000"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/weddings" className="text-gray-400 hover:text-rebel-pink transition-colors">
                  Weddings & Events
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-rebel-pink transition-colors">
                  Shop Bouquets
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="text-gray-400 hover:text-rebel-pink transition-colors">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-rebel-pink transition-colors">
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:02037452605" className="hover:text-rebel-pink transition-colors">
                  020 3745 2605
                </a>
              </li>
              <li>
                <a href="mailto:hello@rebelrebel.co.uk" className="hover:text-rebel-pink transition-colors">
                  hello@rebelrebel.co.uk
                </a>
              </li>
              <li className="text-sm">
                117 Mare St<br />
                London E8 4RU
              </li>
            </ul>
          </div>

          {/* Credentials */}
          <div>
            <h4 className="text-white font-bold mb-4">Trusted By</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              BAFTAs • American Vogue • Victoria Beckham • Fenty • Gucci • Dior
            </p>
            <div className="mt-4 text-xs text-gray-500">
              Est. 2000 • Hackney<br />
              Flower Farm in Tuscany<br />
              Cutting Garden in Norfolk
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-rebel-pink/20 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Rebel Rebel Flowers. All rights reserved.</p>
          <p className="mt-2">25 years of wild, unstructured floristry in Hackney</p>
        </div>
      </div>
    </footer>
  );
}
