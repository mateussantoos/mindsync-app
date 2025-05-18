/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-primary': '#12171D',
        'dark-outline': '1B21270',
        'dark-secundary': '#05070A',
        'light-primary': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
