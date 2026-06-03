/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        bark: '#2c241d',
        moss: '#59664a',
        field: '#edf0e7',
        clay: '#b86d44',
        stone: '#e7e0d2',
        ink: '#171512',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(23, 21, 18, 0.12)',
        card: '0 14px 40px rgba(23, 21, 18, 0.10)',
      },
      backgroundImage: {
        'hero-field': 'radial-gradient(circle at 22% 28%, rgba(184,109,68,.58), transparent 32%), radial-gradient(circle at 84% 16%, rgba(99,117,85,.62), transparent 34%), linear-gradient(135deg, #171512 0%, #2c241d 38%, #59664a 100%)',
      },
    },
  },
  plugins: [],
}
