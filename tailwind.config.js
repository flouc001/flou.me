/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        navyblue: {
          light: '#273B60',
          DEFAULT: '#142646',
          dark: '#020A1A',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
