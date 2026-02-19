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
