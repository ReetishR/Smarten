/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0f172a',
          deep: '#020617',
          light: '#1e293b'
        },
        gold: {
          DEFAULT: '#d4af37',
          light: '#fcc201',
          dark: '#b4941f'
        },
        teal: {
          DEFAULT: '#14b8a6',
          glow: '#2dd4bf'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
