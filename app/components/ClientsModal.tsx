'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const sites = [
  {
    category: 'Kuddus Solicitors Network',
    sites: [
      { slug: 'notary-public-camden', name: 'Notary Public Camden', location: 'Camden, NW1' },
      { slug: 'notary-public-hackney', name: 'Notary Public Hackney', location: 'Hackney, E8' },
      { slug: 'notary-public-southwark', name: 'Notary Public Southwark', location: 'Southwark, SE1' },
      { slug: 'notary-public-tower-hamlets', name: 'Notary Public Tower Hamlets', location: 'Tower Hamlets, E1' },
    ],
  },
  {
    category: 'Independent Notaries',
    sites: [
      { slug: 'notary-public-islington', name: 'Notary Public Islington', location: 'Islington, EC1V' },
      { slug: 'camden-notary', name: 'Camden Notary', location: 'Camden, NW1' },
      { slug: 'notary-public-belsize-park', name: 'Notary Public Belsize Park', location: 'Belsize Park, NW3' },
      { slug: 'notary-public-stamford-hill', name: 'Notary Public Stamford Hill', location: 'Stamford Hill, N16' },
      { slug: 'notary-southwark', name: 'Notary Southwark', location: 'Southwark, SE1' },
      { slug: 'notary-public-holborn', name: 'Notary Public Holborn', location: 'Holborn, WC1' },
    ],
  },
  {
    category: 'Financial Advisers',
    sites: [
      { slug: 'total-finance', name: 'Total Finance', location: 'Bromley, BR2' },
      { slug: 'alpha-investments', name: 'Alpha Investments', location: 'Harrow & Mayfair' },
    ],
  },
  {
    category: 'Healthcare',
    sites: [
      { slug: 'lewisham-osteopath', name: 'Lewisham Osteopathic Practice', location: 'Lewisham, SE13' },
      { slug: 'dentist-clapham', name: 'Clapham Dental Practice', location: 'Clapham, SW4' },
      { slug: 'physio-richmond', name: 'Richmond Physiotherapy Clinic', location: 'Richmond, TW9' },
      { slug: 'chiropractor-kensington', name: 'Kensington Chiropractic Centre', location: 'Kensington, W8' },
      { slug: 'acupuncture-marylebone', name: 'Marylebone Acupuncture Clinic', location: 'Marylebone, W1' },
      { slug: 'optician-brixton', name: 'Brixton Eye Care', location: 'Brixton, SW9' },
      { slug: 'massage-covent-garden', name: 'Covent Garden Massage Therapy', location: 'Covent Garden, WC2' },
      { slug: 'speech-therapist-hampstead', name: 'Hampstead Speech Therapy', location: 'Hampstead, NW3' },
    ],
  },
  {
    category: 'Trades & Home Services',
    sites: [
      { slug: 'plumber-brixton', name: 'Brixton Plumbing Services', location: 'Brixton, SW2' },
      { slug: 'electrician-greenwich', name: 'Greenwich Electrical Solutions', location: 'Greenwich, SE10' },
      { slug: 'locksmith-camden', name: 'Camden Lock & Key', location: 'Camden, NW1' },
      { slug: 'roofer-lewisham', name: 'Lewisham Roofing Specialists', location: 'Lewisham, SE13' },
      { slug: 'pest-control-wandsworth', name: 'Wandsworth Pest Solutions', location: 'Wandsworth, SW18' },
      { slug: 'cleaning-mayfair', name: 'Mayfair Cleaning Services', location: 'Mayfair, W1' },
      { slug: 'removals-ealing', name: 'Ealing Moving Company', location: 'Ealing, W5' },
      { slug: 'car-mechanic-bermondsey', name: 'Bermondsey Motors', location: 'Bermondsey, SE1' },
      { slug: 'dry-cleaner-kensington', name: 'Kensington Dry Cleaners', location: 'Kensington, W8' },
      { slug: 'carpet-fitter-croydon', name: 'Croydon Carpet & Flooring', location: 'Croydon, CR0' },
      { slug: 'painter-decorator-brixton', name: 'Brixton Decorating Services', location: 'Brixton, SW9' },
      { slug: 'phone-repair-camden', name: 'Camden Phone Fix', location: 'Camden, NW1' },
      { slug: 'garden-designer-richmond', name: 'Richmond Garden Design', location: 'Richmond, TW9' },
    ],
  },
  {
    category: 'Professional Services',
    sites: [
      { slug: 'accountant-city', name: 'City Accounting Partners', location: 'City of London, EC2' },
      { slug: 'solicitor-wimbledon', name: 'Wimbledon Legal Services', location: 'Wimbledon, SW19' },
      { slug: 'estate-agent-dulwich', name: 'Dulwich Property Group', location: 'Dulwich, SE21' },
      { slug: 'architect-shoreditch', name: 'Shoreditch Architecture Studio', location: 'Shoreditch, E2' },
      { slug: 'it-support-canary-wharf', name: 'Canary Wharf IT Solutions', location: 'Canary Wharf, E14' },
      { slug: 'mortgage-broker-stratford', name: 'Stratford Mortgage Solutions', location: 'Stratford, E15' },
      { slug: 'interior-designer-islington', name: 'Islington Interiors', location: 'Islington, N1' },
      { slug: 'recruitment-city', name: 'City Recruitment Partners', location: 'City of London, EC2' },
      { slug: 'security-stratford', name: 'Stratford Security Solutions', location: 'Stratford, E15' },
    ],
  },
  {
    category: 'Fitness & Wellness',
    sites: [
      { slug: 'personal-trainer-shoreditch', name: 'Shoreditch Fitness Studio', location: 'Shoreditch, E1' },
      { slug: 'yoga-fulham', name: 'Fulham Yoga Studio', location: 'Fulham, SW6' },
      { slug: 'pilates-chelsea', name: 'Chelsea Pilates Studio', location: 'Chelsea, SW3' },
      { slug: 'gym-camden', name: 'Camden Strength & Fitness', location: 'Camden, NW1' },
      { slug: 'spa-mayfair', name: 'Mayfair Wellness Spa', location: 'Mayfair, W1' },
      { slug: 'dance-studio-brixton', name: 'Brixton Dance Academy', location: 'Brixton, SW2' },
    ],
  },
  {
    category: 'Beauty & Grooming',
    sites: [
      { slug: 'barber-soho', name: 'Soho Barber Co', location: 'Soho, W1' },
      { slug: 'nail-salon-notting-hill', name: 'Notting Hill Nail & Beauty Bar', location: 'Notting Hill, W11' },
      { slug: 'tattoo-shoreditch', name: 'Shoreditch Ink Studio', location: 'Shoreditch, EC2' },
    ],
  },
  {
    category: 'Food & Drink',
    sites: [
      { slug: 'cafe-bermondsey', name: 'Bermondsey Coffee House', location: 'Bermondsey, SE1' },
      { slug: 'catering-islington', name: 'Islington Catering Company', location: 'Islington, N1' },
      { slug: 'restaurant-soho', name: 'Soho Kitchen & Bar', location: 'Soho, W1' },
      { slug: 'pub-greenwich', name: 'The Greenwich Arms', location: 'Greenwich, SE10' },
      { slug: 'wine-bar-clapham', name: 'Clapham Wine Room', location: 'Clapham, SW4' },
      { slug: 'bakery-notting-hill', name: 'Notting Hill Bakehouse', location: 'Notting Hill, W2' },
      { slug: 'sushi-soho', name: 'Soho Sushi Kitchen', location: 'Soho, W1' },
    ],
  },
  {
    category: 'Lifestyle & Creative',
    sites: [
      { slug: 'florist-chelsea', name: 'Chelsea Blooms', location: 'Chelsea, SW3' },
      { slug: 'photographer-hackney', name: 'Hackney Photography Studio', location: 'Hackney, E8' },
      { slug: 'tailor-savile-row', name: 'Savile Row Bespoke', location: 'Mayfair, W1' },
      { slug: 'jeweller-hatton-garden', name: 'Hatton Garden Fine Jewellers', location: 'Holborn, EC1' },
      { slug: 'print-shop-shoreditch', name: 'Shoreditch Print Studio', location: 'Shoreditch, EC2' },
      { slug: 'art-gallery-mayfair', name: 'Mayfair Fine Art', location: 'Mayfair, W1' },
      { slug: 'watch-repair-mayfair', name: 'Mayfair Horologists', location: 'Mayfair, W1' },
      { slug: 'bookshop-bloomsbury', name: 'Bloomsbury Books', location: 'Bloomsbury, WC1' },
    ],
  },
  {
    category: 'Education & Pets',
    sites: [
      { slug: 'tutor-kensington', name: 'Kensington Private Tutors', location: 'Kensington, W8' },
      { slug: 'driving-school-croydon', name: 'Croydon Driving Academy', location: 'Croydon, CR0' },
      { slug: 'vet-hampstead', name: 'Hampstead Veterinary Clinic', location: 'Hampstead, NW3' },
      { slug: 'dog-groomer-battersea', name: 'Battersea Dog Spa', location: 'Battersea, SW11' },
      { slug: 'music-school-brixton', name: 'Brixton School of Music', location: 'Brixton, SW9' },
      { slug: 'nursery-dulwich', name: 'Dulwich Day Nursery', location: 'Dulwich, SE21' },
    ],
  },
  {
    category: 'Travel',
    sites: [
      { slug: 'travel-agent-chelsea', name: 'Chelsea Travel Company', location: 'Chelsea, SW3' },
    ],
  },
];

export default function ClientsModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === '?' && !e.metaKey && !e.ctrlKey) {
        setOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={() => setOpen(false)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-lg max-h-[80vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Client Sites</h2>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-500 hover:text-slate-300 transition-colors text-sm"
            >
              esc
            </button>
          </div>

          <div className="space-y-6">
            {sites.map((group) => (
              <div key={group.category}>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">
                  {group.category}
                </p>
                <div className="space-y-1">
                  {group.sites.map((site) => (
                    <Link
                      key={site.slug}
                      href={`/${site.slug}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors group"
                    >
                      <span className="text-sm text-slate-200 group-hover:text-white transition-colors">
                        {site.name}
                      </span>
                      <span className="text-xs text-slate-500">{site.location}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
