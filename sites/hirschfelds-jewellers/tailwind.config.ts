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
        navy: '#0c1445',
        'navy-light': '#1a2555',
        gold: '#d4af37',
        'gold-light': '#e6c45e',
        'gold-dark': '#b8962e',
        cream: '#f8f6f0',
      },
    },
  },
  plugins: [],
};

export default config;
