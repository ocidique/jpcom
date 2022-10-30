/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      sans: ["Poppins", "sans-serif"],
      mono: ["Roboto Mono", "monospace"],
      "roboto-mono": ["Roboto Mono", "monospace"],
      cursive: ["Lavishly Yours", "cursive"],
    },
    extend: {
      colors: {
        "one-dark-500": "#282c34",
        "one-dark-600": "#21252b",
      },
    },
  },
  plugins: [],
};
