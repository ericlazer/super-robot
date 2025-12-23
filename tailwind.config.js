/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A2342',
          gold: '#C5A065',
          slate: '#3E5C76',
          white: '#FFFFFF',
          grey: '#F5F7FA',
          charcoal: '#111111',
          steel: '#595959',
          border: '#E5E7EB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': 'clamp(3rem, 5vw, 5rem)',
      },
      borderRadius: {
        'sm': '2px',
        'md': '4px',
      },
      letterSpacing: {
        'tightest': '-0.03em',
      }
    }
  },
  plugins: [],
}
