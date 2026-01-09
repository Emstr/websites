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
        primary: '#7f1d1d',
        secondary: '#78350f',
        cream: '#fef3c7',
        'cream-dark': '#fde68a',
      },
    },
  },
  plugins: [],
};

export default config;
