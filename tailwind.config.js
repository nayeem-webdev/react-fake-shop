/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        flipkartBlue: "#2874f0",
        flipkartYellow: "#ffeb3b",
      },
    },
  },
  plugins: [],
};
