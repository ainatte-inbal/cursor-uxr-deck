/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'intuit-bg-primary': '#FFFFFF',
        'intuit-bg-secondary': '#F4F5F8',
        'intuit-bg-tertiary': '#E3E5E8',
        'intuit-blue': '#0077C5',
        'intuit-blue-light': '#34BFFF',
        'intuit-navy': '#1D3557',
        'intuit-text-primary': '#212529',
        'intuit-text-secondary': '#6B6C72',
        'intuit-text-tertiary': '#8D9096',
        'intuit-positive': '#2CA01C',
        'intuit-negative': '#D52B1E',
        'intuit-attention': '#F5A623',
        'intuit-beta': '#0097A7',
        'intuit-purple': '#5B4FCF',
        'intuit-orange': '#E85D04',
        'intuit-container-secondary': '#F4F5F8',
        'intuit-container-tertiary': '#E3E5E8',
        'intuit-border-primary': '#D4D7DC',
        'intuit-border-tertiary': '#E3E5E8',
      },
    },
  },
  plugins: [],
}
