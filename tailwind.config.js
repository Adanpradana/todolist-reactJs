/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "0",
      },
      keyframes: {
        scroll: {
          "0%": { left: "0" },
          "100%": { left: "-100%" },
        },
      },
      animation: {
        animate: "scroll 15s linear infinite",
      },
      colors: {
        "dark-orchid": "#af2bbf",
        "purple-plum": "#a14ebf",
        "blue-gray": "#6c91bf",
        "dark-sea-green": "#84a98c",
      },
    },
  },
  plugins: [require("daisyui")],
};
