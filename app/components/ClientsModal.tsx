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
    category: 'Financial Advisers — London & South East',
    sites: [
      { slug: 'total-finance', name: 'Total Finance', location: 'Bromley, BR2' },
      { slug: 'alpha-investments', name: 'Alpha Investments', location: 'Harrow & Mayfair' },
      { slug: 'globe-ifa', name: 'Globe Independent Financial Advisors', location: 'Twickenham, SW London' },
      { slug: 'mfs-financial-advisers', name: 'MFS Independent Financial Advisers', location: 'Wimbledon, SW19' },
      { slug: 'fairway-ifa', name: 'Fairway IFA', location: 'East Molesey, Surrey' },
      { slug: 'sussex-ifa', name: 'Sussex IFA', location: 'Hailsham, East Sussex' },
      { slug: 'stiles-financial', name: 'Stiles & Company', location: 'Hove & Maidenhead' },
      { slug: 'primavera-fp', name: 'Primavera Financial Partners', location: 'Wanstead, E11' },
      { slug: 'holder-combes', name: 'Holder & Combes', location: 'St Paul\'s, EC1A' },
      { slug: 'aspire-ifa', name: 'Aspire Independent Financial Planners', location: 'Finchley, N3' },
    ],
  },
  {
    category: 'Financial Advisers — South & South West',
    sites: [
      { slug: 'castle-investments', name: 'Castle Investment Consultants', location: 'Southampton' },
      { slug: 'abs-financial', name: 'ABS Financial Planning', location: 'Southampton' },
      { slug: 'city-financial-bath', name: 'City Financial Planning', location: 'Bath' },
      { slug: 'gillinghams-ifa', name: 'Gillinghams IFA', location: 'Bridport, Dorset' },
      { slug: 'abacus-financial', name: 'Abacus Financial Options', location: 'Wimborne, Dorset' },
      { slug: 'beckworth-ifa', name: 'Beckworth Financial Services', location: 'Exeter, Devon' },
      { slug: 'heaton-financial', name: 'Heaton Financial', location: 'Exeter, Devon' },
      { slug: 'cornerstone-ifa', name: 'Cornerstone Financial Planning', location: 'Witney, Oxford' },
    ],
  },
  {
    category: 'Financial Advisers — Midlands & North',
    sites: [
      { slug: 'keeley-financial-advisers', name: 'Keeley & Co', location: 'Birmingham, B3' },
      { slug: 'fairway-financial', name: 'Fairway Financial Planning', location: 'Edgbaston, Birmingham' },
      { slug: 'derbyshire-ifa', name: 'Derbyshire IFA', location: 'Findern, Derby' },
      { slug: 'friar-gate-ifa', name: 'Friar Gate Independent Financial Services', location: 'Pride Park, Derby' },
      { slug: 'afs-chesterfield', name: 'AFS Limited', location: 'Chesterfield' },
      { slug: 'sean-mccabe-ifa', name: 'Sean McCabe Financial', location: 'Alsager, Stoke-on-Trent' },
      { slug: 'david-williams-ifa', name: 'David Williams IFA', location: 'Northampton' },
      { slug: 'hsp-financial', name: 'HSP Financial Planning', location: 'Whetstone, Leicester' },
      { slug: 'castlegate-financial', name: 'Castlegate Financial Management', location: 'Grantham, East Midlands' },
      { slug: 'smg-financial', name: 'SMG Financial Services', location: 'Harewood, Leeds' },
      { slug: 'bartlett-wealth', name: 'Bartlett Wealth Management', location: 'Horsforth, Leeds' },
      { slug: 'paul-dodd-ifa', name: 'Paul Dodd Asset Management', location: 'Leeds, LS16' },
      { slug: 'ifs-preston', name: 'Independent Financial Solutions', location: 'Preston, Lancashire' },
      { slug: 'dales-ifa', name: 'DALES IFA', location: 'Nottingham & Newark' },
      { slug: 'iab-manchester', name: 'The Independent Advice Bureau', location: 'Manchester, M19' },
    ],
  },
  {
    category: 'Financial Advisers — Scotland, Wales & NI',
    sites: [
      { slug: 'riverpark-ifa', name: 'Riverpark IFA', location: 'Glasgow' },
      { slug: 'face2face-advice', name: 'Face2Face Advice', location: 'Uddingston, Glasgow' },
      { slug: 'sfp-ifa', name: 'Structured Financial Planning', location: 'Banff, Aberdeenshire' },
      { slug: 'aveton-gifford-ifa', name: 'Aveton Gifford Associates', location: 'Edinburgh & Coatbridge' },
      { slug: 'fis-glasgow', name: 'Financial Independent Solutions', location: 'Bothwell, Glasgow' },
      { slug: 'dwj-wealth', name: 'DWJ Wealth Management', location: 'Gorseinon, Swansea' },
      { slug: 'chris-leach-ifa', name: 'Chris Leach & Associates', location: 'Cardiff, CF15' },
      { slug: 'pembrokeshire-ifa', name: 'Pembrokeshire Financial Services', location: 'Pembroke, Wales' },
      { slug: 'moneyhelp-belfast', name: 'MoneyHelp', location: 'Belfast' },
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
