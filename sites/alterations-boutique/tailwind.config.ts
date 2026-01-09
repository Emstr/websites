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
        burgundy: '#881337',
        'burgundy-light': '#9f1239',
        'burgundy-dark': '#701226',
        silver: '#94a3b8',
        'silver-light': '#cbd5e1',
        'silver-dark': '#64748b',
      },
    },
  },
  plugins: [],
};

export default config;
