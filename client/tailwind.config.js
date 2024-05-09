/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bubbles: ['"Rubik Bubbles"', "system-ui"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
