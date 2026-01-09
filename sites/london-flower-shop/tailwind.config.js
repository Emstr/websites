/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        florist: {
          rose: '#f472b6',
          'rose-light': '#fce7f3',
          'rose-dark': '#ec4899',
          sage: '#84cc16',
          'sage-light': '#f7fee7',
          'sage-dark': '#65a30d',
          cream: '#fefce8',
          'cream-light': '#fefce8',
          warm: '#fff7ed',
        },
      },
    },
  },
  plugins: [],
}
