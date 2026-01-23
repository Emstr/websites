import Link from 'next/link';

const sites = [
  {
    category: 'Kuddus Solicitors Network',
    description: 'Multi-location notary services across London',
    sites: [
      {
        slug: 'notary-public-camden',
        name: 'Notary Public Camden',
        location: 'Camden, NW1',
        color: '#1e3a5f',
      },
      {
        slug: 'notary-public-hackney',
        name: 'Notary Public Hackney',
        location: 'Hackney, E8',
        color: '#1d4e3e',
      },
      {
        slug: 'notary-public-southwark',
        name: 'Notary Public Southwark',
        location: 'Southwark, SE1',
        color: '#4a3728',
      },
      {
        slug: 'notary-public-tower-hamlets',
        name: 'Notary Public Tower Hamlets',
        location: 'Tower Hamlets, E1',
        color: '#1e3d59',
      },
    ],
  },
  {
    category: 'Independent Notaries',
    description: 'Professional notary services across London boroughs',
    sites: [
      {
        slug: 'notary-public-islington',
        name: 'Notary Public Islington',
        location: 'Islington, EC1V',
        color: '#16213e',
      },
      {
        slug: 'camden-notary',
        name: 'Camden Notary',
        location: 'Camden, NW1',
        color: '#1e3a5f',
      },
      {
        slug: 'notary-public-belsize-park',
        name: 'Notary Public Belsize Park',
        location: 'Belsize Park, NW3',
        color: '#2c3e50',
      },
      {
        slug: 'notary-public-stamford-hill',
        name: 'Notary Public Stamford Hill',
        location: 'Stamford Hill, N16',
        color: '#1a1a2e',
      },
      {
        slug: 'notary-southwark',
        name: 'Notary Southwark',
        location: 'Southwark, SE1',
        color: '#2c3e50',
      },
      {
        slug: 'notary-public-holborn',
        name: 'Notary Public Holborn',
        location: 'Holborn, WC1 (Multilingual)',
        color: '#1e3a5f',
      },
    ],
  },
  {
    category: 'Financial Advisers',
    description: 'Independent financial planning and wealth management',
    sites: [
      {
        slug: 'total-finance',
        name: 'Total Finance',
        location: 'Bromley, BR2',
        color: '#1a365d',
      },
      {
        slug: 'alpha-investments',
        name: 'Alpha Investments',
        location: 'Harrow & Mayfair',
        color: '#1e3a5f',
      },
    ],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero */}
      <header className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Prospect Websites
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A collection of professionally designed, SEO-optimized websites
            for notaries and financial advisers across London.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Next.js 15
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              React 19
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
              Tailwind CSS 4
            </span>
          </div>
        </div>
      </header>

      {/* Sites Grid */}
      <main className="px-4 pb-20">
        <div className="max-w-6xl mx-auto space-y-16">
          {sites.map((category) => (
            <section key={category.category}>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {category.category}
                </h2>
                <p className="text-slate-400">{category.description}</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.sites.map((site) => (
                  <Link
                    key={site.slug}
                    href={`/${site.slug}`}
                    className="group relative bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-slate-600 transition-all hover:scale-[1.02] hover:shadow-xl"
                  >
                    {/* Color bar */}
                    <div
                      className="h-2"
                      style={{ backgroundColor: site.color }}
                    />

                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                        {site.name}
                      </h3>
                      <p className="text-sm text-slate-400 mb-4">
                        {site.location}
                      </p>

                      <div className="flex items-center text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                        <span>View site</span>
                        <svg
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm">
          <p>
            {sites.reduce((acc, cat) => acc + cat.sites.length, 0)} websites •
            Built with Next.js • Ready for deployment
          </p>
        </div>
      </footer>
    </div>
  );
}
