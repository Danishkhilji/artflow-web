/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Inter', serif",
      },
      screens: {
        "custom-sm": "575px",
        "custom-md": "895px",
        "custom-xl": "1370px",
      },
      colors: {
        "primary-color": "#264eab",
        "blue-color": "#7ba0d0",
        "secondary-color": "#6c757d",
        "tertiary-color": "#f5f5ef",
        "text-color": "#101014",
        "bg-color": "#efeff2",
        "bg-card": "#F7F7F8",
      },
      spacing: {
        1440: "90rem",
        720: "45rem",
        658: "41.125rem",
        100: "6.25rem",
        50: "3.125",
      },
      fontSize: {
        22: ["1.375rem", "2.438rem"],
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(40.34deg, #ECECEC 7.69%, #FFFFFF 77.04%)",
      },
      boxShadow: {
        "tabs-active-shadow": "0px 5px 16px -1px rgba(0, 0, 0, 0.15)",
        "cards-shadow": "0px 3px 18px rgba(0, 0, 0, 0.11)",
        'how-it-work-box-shadow':"0px 4px 14px -1px rgba(0, 0, 0, 0.14)"
      },
    },
  },
  plugins: [],
};