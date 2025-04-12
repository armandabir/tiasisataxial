/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
  ],
  important:true,
  theme: {
   
    fontFamily:{
      'iranSansBold':'iranSans_bold'
    },
    extend: {},
  },
  plugins: [],
}

