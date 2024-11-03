import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'root-background': '#F3F4F6',
        'cart-background': '#E6E7EB',
        'item-badge': '#95AAD0',
        blue: {
          50: '#3662E3',
        },
        white: {
          10: '#FFF',
          40: '#F8FAFC',
          50: '#E5E7EB',
        },
        black: {
          20: '#D2D5DA',
          60: '#6C727F',
          80: '#4D556233',
          90: '#1D1D1F',
          95: '#121826',
        },
        yellow: {
          40: '#E9A23B',
        },
      },
    },
  },
  plugins: [],
};
export default config;
