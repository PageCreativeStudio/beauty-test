// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',  
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5vw',
        '3xl': '1.7vw',
        '4xl': '2vw',
        '4/5xl': '2.5vw',
        '5xl': '3vw',
        '6xl': '4vw',
        '7xl': '5.5vw',
        '8xl': '7.5vw',
        '8/9xl': '9vw',
        '9xl': '10vw',
        'fixed-2xl': '2rem',
        'fixed-3xl': '3rem',
        'fixed-4xl': '4rem',
        'fixed-5xl': '5rem',
        'fixed-6xl': '6rem',
        'max-2xl': '1.5rem',
        'max-3xl': '1.7rem',
        'max-4xl': '2rem',
        'max-4/5xl': '2.5rem',
        'max-5xl': '3rem',
        'max-6xl': '4rem',
        'max-7xl': '5.5rem',
        'max-8xl': '7.5rem',
        'max-8/9xl': '9rem',
        'max-9xl': '10rem',
      },
      colors: {
        offWhite: {
          default: '#f8f6f5'
        },
        grey: {
          default: '#ece4e2'
        },
        black: {
          default: '#000000',
          '700': '#353232'
        },
        pink: {
          '100' : '#f7eaea',
          '800' : '#d2baa9'
        }
      },
      maxWidth: {
        'screen-2xl': '1600px',
      },
      screens: {
        '2xl': {'min': '1600px'},
      },
      listStyleType: {
       square: 'square',
      },
      letterSpacing: {
        ig: '.3em',
      }
    }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
