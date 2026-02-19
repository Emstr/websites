import Image from 'next/image';
import ClientsModal from './components/ClientsModal';

const features = [
  {
    title: 'Modern design',
    description: 'Clean, professional sites that reflect the quality of your service. No templates, no clutter — every page designed with intention.',
    accent: 'text-blue-400',
    bg: 'bg-blue-400/10',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Blazing fast',
    description: 'Page speed is a ranking signal and a conversion signal. We obsess over Core Web Vitals so your site loads instantly on any device.',
    accent: 'text-green-400',
    bg: 'bg-green-400/10',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    title: 'SEO from day one',
    description: 'Proper structure, schema markup, and content strategy baked in — not bolted on. Built to rank for the searches that bring in clients.',
    accent: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
  {
    title: 'AI-ready structure',
    description: 'Semantic HTML, clear content hierarchy, and authoritative copy that AI search tools understand and cite with confidence.',
    accent: 'text-violet-400',
    bg: 'bg-violet-400/10',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
  {
    title: 'Local authority',
    description: 'Targeted local pages, Google Business integration, and location-specific SEO — because your clients are searching by borough.',
    accent: 'text-orange-400',
    bg: 'bg-orange-400/10',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
  {
    title: 'Ongoing support',
    description: "We don't disappear after launch. Updates, new pages, performance monitoring — we're a long-term partner, not a one-off job.",
    accent: 'text-pink-400',
    bg: 'bg-pink-400/10',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
];

const work = [
  {
    name: 'Roadtrip',
    url: 'getroadtrip.app',
    description: 'Travel platform with programmatic SEO generating 1,000+ daily search visitors.',
    tags: ['SEO', 'Platform'],
    image: '/work/roadtrip.jpg',
  },
  {
    name: 'Billion Dollar Creator',
    url: 'billiondollarcreator.com',
    description: 'Podcast website with Nathan Barry and the ConvertKit team.',
    tags: ['Editorial', 'Brand'],
    image: '/work/billiondollarcreator.jpg',
  },
  {
    name: 'EightyOne',
    url: 'eightyone.co.nz',
    description: 'Independent creative agency in Wellington — hero animation and infinite scroll case studies.',
    tags: ['Agency', 'Animation'],
    image: '/work/eightyone.gif',
  },
  {
    name: 'Five and Dime',
    url: 'fiveanddime.co.nz',
    description: 'Strategy agency site featuring large imagery and fluid animations.',
    tags: ['Agency', 'Motion'],
    image: '/work/fiveanddime.jpg',
  },
  {
    name: 'Marloo',
    url: 'gomarloo.com',
    description: 'AI assistant for financial advisers — marketing site and full product design.',
    tags: ['SaaS', 'AI'],
    image: '/work/marloo.png',
  },
  {
    name: 'Upstock',
    url: 'upstock.app',
    description: 'Marketing website with custom CMS and API backend integration.',
    tags: ['SaaS', 'CMS'],
    image: '/work/upstock.jpg',
  },
  {
    name: 'Kuraplan',
    url: 'kuraplan.com',
    description: 'AI-powered lesson planning tool for teachers.',
    tags: ['SaaS', 'AI'],
    image: '/work/kuraplan.jpg',
  },
  {
    name: '2UP Games',
    url: '2up.games',
    description: 'Game studio website with rich, fluid animations built in Webflow.',
    tags: ['Gaming', 'Animation'],
    image: '/work/2up.jpg',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <span className="text-lg font-bold tracking-tight">kolider digital</span>
        <a
          href="mailto:hello@kolider.co.uk"
          className="text-sm text-slate-400 hover:text-white transition-colors"
        >
          hello@kolider.co.uk
        </a>
      </nav>

      {/* Hero */}
      <section className="relative px-8 pt-20 pb-32 max-w-6xl mx-auto overflow-hidden">
        {/* Background glow */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 -left-40 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl">
          <p className="text-sm font-medium text-blue-400 uppercase tracking-widest mb-6">
            Web Design Studio — London
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
            Built to be found.<br />
            <span className="text-slate-400">Designed to convert.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
            Kolider Digital builds fast, modern websites for professional services companies
            across London — optimised for search engines, AI assistants, and the
            clients who actually matter.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:hello@kolider.co.uk"
              className="bg-white text-slate-950 px-6 py-3 rounded-full text-sm font-semibold hover:bg-slate-100 transition-colors"
            >
              Start a project
            </a>
            <a
              href="#work"
              className="border border-slate-700 text-slate-300 px-6 py-3 rounded-full text-sm font-semibold hover:border-slate-500 hover:text-white transition-colors"
            >
              See our work
            </a>
          </div>
        </div>

        {/* Trust bar */}
        <div className="relative mt-20 flex flex-wrap gap-x-10 gap-y-4">
          {[
            { icon: (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            ), label: '12 sites launched' },
            { icon: (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
              </svg>
            ), label: '100 PageSpeed score' },
            { icon: (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
              </svg>
            ), label: 'AI search optimised' },
            { icon: (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            ), label: 'London focused' },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm text-slate-500">
              <span className="text-slate-600">{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* AI Discovery */}
      <section className="border-t border-slate-800 px-8 py-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 uppercase tracking-widest mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
              </svg>
              The new search
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Your customers are asking AI.<br />
              Does it recommend you?
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Google is no longer the only front door. ChatGPT, Perplexity, and
              Google&apos;s AI Overviews are increasingly the first place people turn
              when looking for a solicitor, notary, financial adviser, or any
              professional service.
            </p>
            <p className="text-slate-400 leading-relaxed">
              We build sites that are structured, fast, and authoritative — so
              when AI systems crawl the web to answer your potential clients&apos;
              questions, your business is the one they surface.
            </p>
          </div>

          <div className="space-y-3">
            {[
              { q: '"Find me a notary in Camden"', a: 'AI cites your site', color: 'text-green-400', dot: 'bg-green-400' },
              { q: '"Best financial adviser in Harrow"', a: 'AI recommends you', color: 'text-green-400', dot: 'bg-green-400' },
              { q: '"Notary near Islington open now"', a: 'AI lists your business', color: 'text-green-400', dot: 'bg-green-400' },
            ].map(({ q, a, color, dot }) => (
              <div
                key={q}
                className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-slate-600 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                  </svg>
                  <span className="text-sm text-slate-300 italic">{q}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                  <span className={`text-xs font-medium ${color}`}>{a}</span>
                </div>
              </div>
            ))}

            <p className="text-xs text-slate-600 text-center pt-2">
              Structured content + semantic HTML + fast load = AI visibility
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-slate-800 px-8 py-24 max-w-6xl mx-auto">
        <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-12">
          What we do
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, description, accent, bg, icon }) => (
            <div key={title} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors">
              <div className={`inline-flex items-center justify-center w-9 h-9 rounded-lg ${bg} ${accent} mb-4`}>
                {icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-slate-800 px-8 pt-24 max-w-6xl mx-auto">
        <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-20">
          Selected work
        </p>

        <div className="divide-y divide-slate-800/60">
          {work.map(({ name, url, description, image }) => (
            <div key={name} className="group flex flex-col md:flex-row items-center gap-12 py-20">

              {/* Text */}
              <div className="md:w-72 shrink-0">
                <h3 className="text-4xl font-bold text-white mb-4">{name}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{description}</p>
                <a
                  href={`https://${url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium inline-flex items-center gap-1.5"
                >
                  Visit website
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>

              {/* Screenshot */}
              <div className="w-full md:max-w-lg group-hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src={image}
                  alt={name}
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl shadow-2xl shadow-black/40"
                  unoptimized={image.endsWith('.gif')}
                />
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 px-8 py-32 max-w-6xl mx-auto">
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-700 rounded-3xl px-8 py-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-violet-600/5 pointer-events-none" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-full px-4 py-2 text-sm text-slate-400 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Currently taking on new projects
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to stand out?
            </h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
              Tell us about your business and we&apos;ll show you what we can build.
              No jargon, no hard sell — just good work.
            </p>
            <a
              href="mailto:hello@kolider.co.uk"
              className="bg-white text-slate-950 px-8 py-4 rounded-full text-sm font-semibold hover:bg-slate-100 transition-colors inline-flex items-center gap-2"
            >
              Get in touch
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-8 py-8 max-w-6xl mx-auto flex items-center justify-between text-xs text-slate-600">
        <span>kolider digital &copy; {new Date().getFullYear()}</span>
        <span>London, UK</span>
      </footer>

      <ClientsModal />
    </div>
  );
}
