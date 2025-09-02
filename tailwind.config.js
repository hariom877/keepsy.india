/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm, elegant palette inspired by artisan aesthetics
        primary: {
          DEFAULT: '#8B4513', // Rich brown
          dark: '#654321',
          light: '#A0522D',
          50: '#FDF6F0',
          100: '#FAEBD7',
          200: '#F5DEB3',
          300: '#DEB887',
          400: '#CD853F',
          500: '#8B4513',
          600: '#654321',
          700: '#4A2C17',
          800: '#2F1B0E',
          900: '#1A0F08',
        },
        secondary: {
          DEFAULT: '#D2691E', // Warm orange
          dark: '#B8860B',
          light: '#FF8C00',
          50: '#FFF8F0',
          100: '#FFE4B5',
          200: '#FFD700',
          300: '#FFA500',
          400: '#FF8C00',
          500: '#D2691E',
          600: '#B8860B',
          700: '#8B4513',
          800: '#654321',
          900: '#4A2C17',
        },
        cream: {
          50: '#FFFEF7',
          100: '#FEFCF0',
          200: '#FDF8E8',
          300: '#FBF2D9',
          400: '#F8E6C1',
          500: '#F5D9A8',
          600: '#E6C896',
          700: '#D4B483',
          800: '#C2A070',
          900: '#B08C5D',
        },
        earth: {
          50: '#F7F5F3',
          100: '#EDE7E0',
          200: '#DCCFBF',
          300: '#C9B59E',
          400: '#B69B7D',
          500: '#A3815C',
          600: '#8B6F47',
          700: '#735D32',
          800: '#5B4B1D',
          900: '#433908',
        },
        accent: {
          DEFAULT: '#FF6B6B', // Playful coral
          dark: '#E55A5A',
          light: '#FF8E8E',
        },
        neutral: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'], // Elegant serif for headings
        'crimson': ['Crimson Text', 'serif'], // Classic serif for body
        'inter': ['Inter', 'sans-serif'], // Clean sans-serif
        'poppins': ['Poppins', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [],
}

