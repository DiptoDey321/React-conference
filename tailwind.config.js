/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary' : '#FFC93E',
        'secondary' : '#725114',
        'dark-blue' : '#111D5E'
      },
      fontSize:{
        headingOne : ['140px' , '170px']
      }
    },
  },
  plugins: [],
}
