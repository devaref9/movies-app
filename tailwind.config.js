/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        form: "0 0 100px 0 rgba(0,0,0,.25)",
        "primary-glow": "0 8px 60px 0 rgba(245,173,17,.3)",
        "secondary-glow": "0 8px 60px 0 rgba(45,83,149,.3)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontWeight: {
      normal: "500",
      medium: "600",
      bold: "700",
    },
    fontFamily: {
      yekan: "var(--font-yekan)", // note: you can call the left side of this whatever you want - barlow-bold or title-font or foo-bar, this is what you'll use in your Tailwind css classes to use this font
    },
    colors: {
      gray: colors.gray,
      green: colors.green,
      red: colors.red,
      transparent: "transparent",
      dark: "#1e1e1e",
      light: "#f0f0f0",
      black: "#000000",
      white: "#ffffff",
      primary: {
        DEFAULT: "#f5ad11",
        dark: "#d79608",
      },
      secondary: {
        DEFAULT: "#2d5395",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
