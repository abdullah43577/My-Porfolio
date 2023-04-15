/** @type {import('tailwindcss').Config} */
export default {
  // mode: 'jit',
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
        lightShades: '#A14B9A',
        cta: ' #1A857F',
        cta2: '#00C6BD',
        veryDarkBlue: '#2F4858',
        darkBlue: '#333333',
        purplishBlue: '#645496',
        glass: 'rgba(255, 255, 255, 0.2)',

        // dark background
        darkBackground: '#171515',
        darkHeadings: '#F3F3F3',
        darkText: '#00AAA9',
      },
    },
  },
  plugins: [],
};
