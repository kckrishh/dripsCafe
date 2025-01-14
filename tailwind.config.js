/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B98", // Header/Navigation background
        secondary: "#FFB5CF", // Cards & sections background
        accent: "#FF89B0", // Interactive elements & borders
        dark: "#2D1517", // Footer background & text
        light: "#FFF0F5", // Main page background
      },
    },
  },
  plugins: [],
};
