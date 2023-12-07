/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'neuropol': ['neuropol-nova', 'sans-serif']
      },
      backgroundImage: {
        'banner1': "url('./img/bg-1.jpeg')",
        'banner2': "url('./img/bg-2.jpeg')",
        'banner3': "url('./img/bg-3.jpeg')",
       },
    },
  },
  plugins: [],
}

