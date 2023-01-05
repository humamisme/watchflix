/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: '1440px',
          '2xl': '1536px',
        },
      },
      colors: {
        primary: '#00B9AE',
        dark: {
          1: '#16181E',
          2: '#21242D',
        },
        light: '#F9F9F9',
      },
      fontFamily: {
        sans: ['Poppins', 'Helvetica', 'Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
