/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // for Next.js app directory
    "./pages/**/*.{js,ts,jsx,tsx}", // for Next.js pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // for your components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
