/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0D0D0D",  // Darker black
        primary: "#1F1F1F",     // Deep grey for contrast
        accent: "#FF4081",      // Neon pink for buttons/effects
        highlight: "#64FFDA",   // Aqua-green for secondary elements
        text: "#F5F5F5",        // Light text for readability
        cardBg: "#121212",      // Slightly lighter black for cards
      },
    },
  },
  plugins: [],
};
