const { getRedirectStatus } = require('next/dist/lib/load-custom-routes')

module.exports = {
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
  },
  images: {
    deviceSizes: [312, 500, 800],
  },
}
