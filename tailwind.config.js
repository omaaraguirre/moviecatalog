/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        primary: '#A0743E',
        secondary: '#D7C394',
        tertiary: '#837361',

        lighter: '#FFFFFF',
        light: '#E9D8C3',
        medium: '#65635A',
        dark: '#25221E',
        darker: '#141413'
      },
      fontFamily: {
        orbitron: ['Orbitron Variable', 'sans-serif'],
        comforta: ['Comfortaa Variable', 'sans-serif']
      },
      minHeight: {
        dscreen: '100dvh'
      }
    }
  },
  plugins: []
}
