module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        '3xl-blue': '0 35px 60px -15px rgba(0, 0, 200, 0.3)',
      },
      transitionProperty: {
        color: 'color',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
