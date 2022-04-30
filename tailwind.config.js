module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      tablet: '960px',
      desktop: '1248px',
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',

      'dark': '#111827',
      'light': '#F4F0F0',
      'rose': '#F43F5E',
      'sepia': '#44403C',
      'stone': '#D6D3D1',
      'wine': '#AD4050'
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '20px',
      xl: '48px',
      '2xl': '96px'
    },
    fontFamily: {
      garamond: 'EB Garamond, serif',
      inter: 'Inter, sans-serif',
    },
    extend: {},
  },
  plugins: [],
}
