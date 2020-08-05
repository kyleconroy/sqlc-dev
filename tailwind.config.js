module.exports = {
  purge: {
    enabled: true,
    content: [
      './*.html',
      './_layouts/*.html',
    ],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
