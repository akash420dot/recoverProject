/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#ffffff',
        'second--color': '#3f3cbb',
        'para-color': '#121063',
        'but-color': '#565584',
      
      },
    },
    
  },
  plugins: [],
}

