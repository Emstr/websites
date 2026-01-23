import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e3a5f",
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#b3c5d9",
          300: "#8da8c6",
          400: "#678bb3",
          500: "#416ea0",
          600: "#1e3a5f",
          700: "#182e4c",
          800: "#122339",
          900: "#0c1726",
        },
        secondary: {
          DEFAULT: "#0d2137",
          50: "#e8edf2",
          100: "#c5d1de",
          200: "#9eb4c9",
          300: "#7797b4",
          400: "#507a9f",
          500: "#295d8a",
          600: "#1a4061",
          700: "#0d2137",
          800: "#0a1a2c",
          900: "#071321",
        },
        accent: {
          DEFAULT: "#b8860b",
          50: "#fdf8e8",
          100: "#f9ecc5",
          200: "#f4dc9e",
          300: "#efcc77",
          400: "#eabc50",
          500: "#d4a60a",
          600: "#b8860b",
          700: "#936b09",
          800: "#6e5007",
          900: "#493505",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
