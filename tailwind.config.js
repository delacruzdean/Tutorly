/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: { 
        primary: '#47AA9C',
        secondary: '#3F6DB1',
        dark: '#34405F',
        light: '#5A636C'
      },
    },
  },
  plugins: [],
}