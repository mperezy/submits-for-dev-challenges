/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'root-background': '#F3F4F6',
        'cart-background': '#E6E7EB',
        'item-badge': '#97A8CF',
        black: {
          20: '#D8DBDF',
          60: '#6D727E',
          90: '#1D1D1F',
        },
      },
    },
  },
  plugins: [],
};
