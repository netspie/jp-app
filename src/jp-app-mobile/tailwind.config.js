/* @type { import('tailwindcss').Config } */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
    colors: {
      primary: {
        100: "#FF3B300A",
        200: "#FF3B301A",
        300: "#FF3B30",
      },
      accent: {
        100: "#FBFBFD",
      },
      black: {
        DEFAULT: "#000000",
        100: "#8C8E98",
        200: "#666876",
        300: "#191d31",
      },
      danger: '#F75555'
    },
  },
  plugins: [],
};
