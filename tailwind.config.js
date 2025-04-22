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
   
    extend: {
      colors:{
        'mainBlue':"#111B2F"
       },

      minHeight:{
        'h640':'640px'
      },

      height:{
        "640":"640px"
      }


    },
  },
  plugins: [],
}

