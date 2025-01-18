/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-blue':"#264eab",
        'blue-color':"#7ba0d0",
        'secondary-color':"#6c757d",
        'secondary-color':"#f5f5ef",
        'tertiary-color':"#101014",
        'bg-color':"#efeff2",
      },
      spacing:{
        1440:"90rem",
        720:"45rem",
        100:"6.25rem",
        50:"3.125"
      },
      backgroundImage:{
        'primary-gradient':"linear-gradient(40.34deg, #ECECEC 7.69%, #FFFFFF 77.04%)"
      }
    },
  },
  plugins: [],
}

