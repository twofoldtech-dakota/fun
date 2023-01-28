/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      ltmd: { max: "767px" },
      md: "768px",
      // => @media (min-width: 768px) { ... }
      ltlg: { max: "1023px" },
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        grey: "#CFD2DA",
        base_content: "#888",
        lighter_black: "#333",
        light_black: "#111",
        black: "#000",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
      minHeight: {
        screenHeightWithoutHeader: "calc(100vh - 20px)",
      },
      height: {
        screenHeightWithoutHeader: "calc(100vh - 20px)",
      },
      fontSize: {},
    },
  },
  plugins: [],
};
