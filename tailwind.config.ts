import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('flowbite/plugin'),

  ],
  variants: {
    scrollbar: ['rounded']
  }
}
export default config