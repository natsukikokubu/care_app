/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx}", "index.html"],
  theme: {
    screens: {
      sm: "576px",
      md: "960px",
      lg: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
