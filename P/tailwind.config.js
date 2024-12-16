/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:"#ff6363",
        secondary:{
          100:"#5b9aff",
          200:"#9dc3ff",
        }
      }
    },
  },
  plugins: [],
};
