/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'satoshi': ["Satoshi-Light", "sans-serif"],
      'clash': ["ClashDisplay-Variable", "sans-serif"]
    },
    colors: {
      'white' : '#F7F7FF',
      'black' : '#0E100E',
      'blue' : '#93E4E4',
      'yellow' : '#E5D647',
      'pink' : '#DB7B9B',
      'green' : '#D1FFD8',
    },
    extend: {},
  },
  plugins: [],
};
