/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      xlsm: { min: "0px", max: "450px" },
    },
    colors: {
      light: "#F7D3C7",
      warm: "#DAA095",
      sharp: "#A5888A",
      off: "#C89566",
      dark: "#927071",
      darker: "#756156",
      white: "#FFFFFF",
      grey: "#D3D3D3",
      black: "#000000",
    },
    extend: {
      fontFamily: {
        Mont: ["Montserrat"],
      },
    },
    plugins: [],
  },
};
