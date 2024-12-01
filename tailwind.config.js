/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rancho: ['"Rancho"', 'cursive'], // Adding the Rancho font with a fallback
        raleway: ['"Raleway"', 'sans-serif'], // Adding the Raleway font
      },
    },
  },
  plugins: [require('daisyui'),],
}

