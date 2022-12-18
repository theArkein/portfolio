/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: ({colors})=>({
        ...colors,
        primary: colors.stone
      }),
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }    
    }
  },
  plugins: [],
}
