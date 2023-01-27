/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customDarkPurple: "#06032C",
        customLightPink: "#EADAFF",
        customLightPurple: "#7C77B3",
        customAccent: "#27A68E",
      },
      fontFamily: {
        bebasNeue: ["Bebas Neue"],
      },
    },
  },
  plugins: [],
};
