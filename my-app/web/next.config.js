// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  telemetry: false,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig