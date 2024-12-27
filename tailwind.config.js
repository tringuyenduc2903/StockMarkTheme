/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
      },
    },
    fontSize: {
      xs: "0.65rem",
      sm: "13px",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      colors: {
        primary: "#3565E0",
        secondary: "#000000",
        gray: "#212121",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")], // eslint-disable-line
};
