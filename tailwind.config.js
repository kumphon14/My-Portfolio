/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Extended font family
      fontFamily: {
        'sans': ['Inter', 'Prompt', 'sans-serif'],
        'display': ['Inter', 'Prompt', 'sans-serif'],
        'body': ['Inter', 'Prompt', 'sans-serif']
      },
      
      // Custom color palette
      colors: {
        'ga-primary': {
          DEFAULT: '#007bff',
          50: '#e6f2ff',
          100: '#b3d7ff',
          200: '#80bcff',
          300: '#4da1ff',
          400: '#1a86ff',
          500: '#006ce6',
          600: '#0052b3',
          700: '#003980',
          800: '#00264d',
          900: '#001a33'
        },
        'ga-secondary': {
          DEFAULT: '#6c757d',
          50: '#f2f2f3',
          100: '#e6e7e8',
          200: '#c2c4c6',
          300: '#9da1a5',
          400: '#797e83',
          500: '#545b62',
          600: '#3f4549',
          700: '#2a3033',
          800: '#161a1d',
          900: '#0d0f11'
        }
      },
      
      // Custom spacing
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      
      // Custom animations
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeIn: 'fadeIn 0.5s ease-out'
      },
      
      // Custom box shadows
      boxShadow: {
        'custom-light': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'custom-dark': '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
      },
      
      // Responsive breakpoints (if needed)
      screens: {
        'xs': '475px',
        '3xl': '1920px'
      }
    },
  },
  
  // Plugins configuration
  plugins: [
    tailwindScrollbar({ nocompatible: true }),
    
    // Optional: Custom plugin for frequently used classes
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          'text-shadow': '2px 2px 4px rgba(0,0,0,0.3)',
        },
        '.filter-grayscale': {
          'filter': 'grayscale(100%)',
        }
      }
      addUtilities(newUtilities)
    }
  ],
  
  // Variants configuration
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['active', 'group-hover']
    }
  }
}