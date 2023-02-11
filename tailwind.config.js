/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue' : '#79c8e8',
        'android' : '#95cf01',
        'flutter' : '#19539a',
        'unity' : '#000000',
        'react' : '#3cd8ff',
        'figma' : '#f24e1e',
      },
      height: {
        '80': '80vh',
        '70' : '70vh',
      },
    },
  },
  plugins: [],
}