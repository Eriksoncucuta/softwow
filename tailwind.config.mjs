/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'journey-dark-bg': '#0B1229',
        'journey-light-bg': '#162B53',
        'journey-surface': '#204A89',
        'journey-link': '#2A5D91',
        'journey-highlight': '#A2D9E6',
        'journey-text-light': '#EFF6F9',
        'journey-cta-primary': '#FC6A10',
        'journey-emphasis': '#FE9D17',
        'journey-cta-text': '#0B1229',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require('tailwindcss-animate')
  ],
};