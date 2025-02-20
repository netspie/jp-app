/* @type { import('tailwindcss').Config } */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary-default)",
        secondary: "var(--color-secondary-default)",
        tertiary: "var(--color-tertiary-default)",
        accent: "var(--color-accent-default)",
        grey: "var(--color-grey-default)",
        "grey-light": "var(--color-grey-light-default)",
      },
    },
  },
  plugins: [],
};
