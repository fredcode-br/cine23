/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'gradient-primary': `linear-gradient(to right,  #853CB2 23.42%,  #F09 99.91%)`,
        'gradient-secondary': `linear-gradient(to right,  #5A0090 23.42%,  #B61E79 99.91%)`
      }),
      fontFamily: {
        roboto: 'Roboto, ui-serif',
      },
      scale: {
       '101': '1.01',
      },
      colors: {
        dark: {
          100: 'rgb(18, 18, 18)',
          200: 'rgb(51, 51, 51)',
          300: 'rgb(82, 81, 81)'
        },
        ligth: {
          100: '#FFFFFF',
          200: '#F2EBFC',
          300: '#d5c5fc'
        },
        cine23: {
          100: '#5A0090',
          200: '#EA19BC',
          300: '#FF00C7',
        },

        background: {
          100: '#1D1C1C',
          200: '#373636',
          300: '#424242',
          
        }
      }
    },
  },
  plugins: [],
}

