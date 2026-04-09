/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tdb-orange': '#F37021',
        'tdb-green': '#8DC63F',
        'tdb-dark': '#333333',
        'tdb-light': '#FFF9F0',
      }
    },
  },
  plugins: [],
}