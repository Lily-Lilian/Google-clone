/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        arial: "arial, sans-serif",
      },
      colors: {
        "blue": "#1A0DBE",
        "gray": "#F2F2F2",
        "solid-gray": "#dadce0",
        "gray-100": "#F8F9FA",
        "text-gray": "#70757a",
        "gray-none": "#000000DE",
        "solid-blue": "#4285f4",
        "black":"#3c4043"

      },
      boxShadow:{
        searchshadow:"0 1px 6px rgb(32 33 36 / 28%)",
        buttonShadow:"0 1px 1px rgb(0 0 0 / 10%);"
      },
    },
  },
  plugins: [],
};
