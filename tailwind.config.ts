/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        brown: {
          900: '#3E2723',
        },
        parchment: '#F4E6CC',
        sepia: {
          700: '#3B3834', // This is a dark sepia color for the solid background
        },
        'neon-blue': '#00ffff',
        'neon-red': '#ff0055',
        'neon-green': '#39ff14',
        'neon-purple': '#bc13fe',
      },
      fontFamily: {
        serif: ['Garamond', 'Georgia', 'serif'],
        mono: ['Chicago', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [],
}