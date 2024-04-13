/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'ease-out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      translate: {
        'full': '100%',
      },
      keyframes: {
        'from-bottom': {
          'from': {
            transform: 'translateY(100%)',
          },
          'to': {
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'bottom-to-up': 'from-bottom 0.5s ease-out-back',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
}

