import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1e3a8a',
        'navy-light': '#2563eb',
        'navy-dark': '#1e40af',
        slate: '#64748b',
        'slate-light': '#94a3b8',
        'slate-dark': '#475569',
        emerald: '#10b981',
        'emerald-light': '#34d399',
        'emerald-dark': '#059669',
      },
    },
  },
  plugins: [],
};

export default config;
