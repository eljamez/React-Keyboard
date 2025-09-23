/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./demo/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        21: "repeat(21, 1fr)",
      },
      gridTemplateRows: {
        2: "60% 40%",
      },
      fontFamily: {
        audiowide: ["Audiowide", "cursive"],
        staatliches: ["Staatliches", "sans-serif"],
      },
    },
  },
};
