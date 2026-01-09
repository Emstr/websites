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
        primary: '#1e1b4b',
        secondary: '#312e81',
        gold: '#d4af37',
        'gold-light': '#e5c158',
        cream: '#faf8f3',
      },
    },
  },
  plugins: [],
};

export default config;
