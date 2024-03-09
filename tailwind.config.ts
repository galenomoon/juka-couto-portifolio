/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
    },
    extend: {
      colors: {
        typography: {
          100: '#FFFFFF',
          200: '#FFFFFFE6',
          300: '#FFFFFFCC',
          400: '#FFFFFF99',
          500: '#FFFFFF66',
          600: '#FFFFFF33',
          700: '#FFFFFF1A',
          800: '#FFFFFF0D',
          900: '#FFFFFF05',
        },
        background: {
          moon: "#F9EEE3",
          night: {
            light: "#2E2A3B",
            dark: "#211F2C",
          }
        }
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(107.65deg, #A7A7A7 0.35%, #C9C9C9 48.28%, #CBCBCB 96.21%)'
      },
    },
  },

}
