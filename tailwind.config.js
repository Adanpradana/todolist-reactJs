/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "0",
      },
      keyframes: {
        alapola: {
          "0%": { opacity: "0", transform: "translateY(-250px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
      },
      animation: {
        alapola: "1s ease 0s 1 normal forwards",
      },
    },
  },
  plugins: [],
};
