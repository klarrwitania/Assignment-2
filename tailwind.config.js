/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bluenav: '#38598B',
        hoverbg: '#A2A8D3',
      },
      backgroundImage: {
        'icebound': "url('https://cdna.artstation.com/p/assets/images/images/035/757/676/medium/josef-barton-ib2prev.jpg?1615826181')"
      }
    },
  },
  plugins: [],
}

