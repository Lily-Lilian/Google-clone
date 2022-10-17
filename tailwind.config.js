/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        arial: "arial, sans-serif",
      },
      colors: {
        blue: "#1A0DBE",
        gray: "#F2F2F2",
        "solid-gray": "#dadce0",
        "gray-100": "#F8F9FA",
        "text-gray": "#70757a",
        "gray-none": "#000000DE",
      },
    },
  },
  plugins: [],
};
