/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "520px",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
