/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '968px',
      xl: '1200px',
    },

    extend: {
      colors: {
        background: '#F3F3F3',
        navBar: '#333333',
        cta: ' #1A857F',
        cta2: '#00C6BD',
        veryDarkBlue: '#2F4858',
        darkBlue: '#333333',
        glass: 'rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [],
};
