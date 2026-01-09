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
        primary: '#b91c1c',
        secondary: '#166534',
        gold: '#d4af37',
        'gold-light': '#e8c862',
      },
    },
  },
  plugins: [],
};

export default config;
