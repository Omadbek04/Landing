/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "text-color":"rgb(80, 95, 152)"
      },
      backgroundColor:{
        "btn-bg":"rgb(17, 27, 71)",
        "footer-bg":"rgb(231, 236, 255)"
      }
    },
  },
  plugins: [],
}