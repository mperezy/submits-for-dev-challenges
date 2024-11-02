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
        black: {
          20: '#D2D5DA',
          60: '#6C727F',
          90: '#1D1D1F',
        },
      },
    },
  },
  plugins: [],
};
export default config;
