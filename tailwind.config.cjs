/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "hsl(0, 100%, 74%)",
        "primary-2": "hsl(154, 59%, 51%)",
        accent: "hsl(248, 32%, 49%)",
        "neutral-1": "hsl(249, 10%, 26%)",
        "neutral-2": "hsl(246, 25%, 77%)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
