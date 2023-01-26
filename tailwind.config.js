const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)', ...fontFamily.sans],
      },
    },
    colors: {
      'navy': '#273043',
      'honey': '#F39237',
      'magenta': '#BF1363',
      'azure': '#OE79B2',
      'parchment': '#FBFFFl',
    },
  },
  plugins: [],
}
