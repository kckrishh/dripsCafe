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
        nav: "#FFE4E8",
        "text-nav-default": "#4A2F35", // Default navigation text
        "text-nav-hover": "#8B4B57", // Navigation link hover state
        text: {
          primary: "#333333", // Main content text
          header: "#4A3B3E", // Headers and important text
          secondary: "#666666", // Secondary/supportive text
        },
      },
    },
  },
  plugins: [],
};
