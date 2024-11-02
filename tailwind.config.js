import CustomColor from "./src/CSS/CustomColor.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: CustomColor,
      fontFamily: {
        primary: ["Gowun Dodum", "sans-serif"],
      },
    },
  },
  plugins: [],
};
