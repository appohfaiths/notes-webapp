/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0556CF',
        'primary-green': '#249B45',
        'primary-red': '#FF3131',
        'secondary-white': '#FAFAFA',
        'secondary-black': '#333333',
      },
      fontFamily: {
      'markazi': ['"Markazi Text"', 'sans-serif'],
      'karla': ['Karla', 'sans-serif'],
    },
      fontSize: {
        'display-title': '2.5rem',
      }
    },
  },
  plugins: [],
}

