import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // or 'media(Based on the user’s system settings) or class (Controlled manually by adding a dark class to an element).'
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        buttonColor: "var(--button)",
        page: "var(--page)",
        white: "#ffffff",
        darkBlue: "#0A2640",
        line: "#C4C4C4"
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'], // Primary font
        alt: ['Open Sans', 'sans-serif'], // Alternative font
      },
      fontSize: {
        xs: '0.875rem',  // Small (14px)
        s: '1rem',   // Default (16px)
        lg: '1.25rem', // Large (20px)
        xl: '2.25rem',  // Extra large (36px)
        xxl: '3rem', // extra extra large (48px)
        yl: '4rem', // extra extra large (64px)
      },
    },
  },
  plugins: [],
} satisfies Config;
