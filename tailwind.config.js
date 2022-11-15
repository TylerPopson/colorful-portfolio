/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        'spiral-background': "url('/spiral.png')",
      }
    },
  },
  plugins: [],
};
