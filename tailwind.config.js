import CustomColor from "./src/CSS/CustomColor.js";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: CustomColor,
      fontFamily: {
        primary: ["Gowun Dodum", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "custom-shadow-white":
          "0 4px 6px rgba(255, 255, 255, 0.1), 0 1px 3px rgba(255, 255, 255, 0.6)",
      },
    },
  },
  plugins: [],
};
