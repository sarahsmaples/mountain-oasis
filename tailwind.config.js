/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.njk", "./src/**/*.html", "./src/**/*.md"],
  theme: {
    extend: {
      colors: {
        cream:        '#F2EAD5',
        pine:         '#1A2260', // Deep Indigo  — header, footer, dark backgrounds
        navy:         '#2C3990', // Logo Navy     — mid-tone accent
        grape:        '#4A2880', // Grape         — tertiary accent
        butterscotch: '#C8820A', // Butterscotch  — warm CTA variant
        gold:         '#E8A830', // Honey         — warm highlight, hover states
        bark:         '#1A2260', // Deep Indigo   — outlines, shadows, body text
      },
      fontFamily: {
        display: ['Shrikhand', 'serif'],
      },
    },
  },
  plugins: [],
};
