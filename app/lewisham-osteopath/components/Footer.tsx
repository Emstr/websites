import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>
                <a href="tel:02088525577" className="hover:text-white">
                  020 8852 5577
                </a>
              </p>
              <p>
                <a href="mailto:lewishamosteo@gmail.com" className="hover:text-white">
                  lewishamosteo@gmail.com
                </a>
              </p>
              <p className="pt-1">
                Mon–Fri: 9am–7pm
                <br />
                Saturday: 9am–2pm
              </p>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Location</h3>
            <address className="text-gray-300 text-sm not-italic">
              Studio 107, Ladywell Works
              <br />
              15 Whitburn Road
              <br />
              Lewisham
              <br />
              London SE13 7UQ
            </address>
          </div>

          {/* Conditions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Conditions</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/lewisham-osteopath/services#back-pain" className="hover:text-white">Back Pain & Sciatica</Link></li>
              <li><Link href="/lewisham-osteopath/services#neck-pain" className="hover:text-white">Neck & Shoulder Pain</Link></li>
              <li><Link href="/lewisham-osteopath/services#sports" className="hover:text-white">Sports Injuries</Link></li>
              <li><Link href="/lewisham-osteopath/services#headaches" className="hover:text-white">Headaches & Migraines</Link></li>
              <li><Link href="/lewisham-osteopath/fees" className="hover:text-white">Fees</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/lewisham-osteopath/about" className="hover:text-white">About Richard</Link></li>
              <li><Link href="/lewisham-osteopath/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/lewisham-osteopath/contact" className="hover:text-white">Contact & Directions</Link></li>
              <li><Link href="/lewisham-osteopath/terms" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/lewisham-osteopath/privacy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Lewisham Osteopathic Practice. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Registered with the General Osteopathic Council (GOsC)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
