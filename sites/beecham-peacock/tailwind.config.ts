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
        purple: '#4c1d95',
        'purple-light': '#6d28d9',
        'purple-dark': '#3b0764',
        slate: '#475569',
        'slate-light': '#64748b',
        'slate-dark': '#334155',
        rose: '#e11d48',
        'rose-light': '#fb7185',
        'rose-dark': '#be123c',
      },
    },
  },
  plugins: [],
};

export default config;
