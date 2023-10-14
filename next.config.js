/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: [
      'gamearena.gg',
      'localhost',
      'noticias.maisesports.com.br',
      'imagens.ebc.com.br',
      'assets.gamearena.gg/wp-content'
    ]
  },
  output: 'standalone'
}

module.exports = nextConfig
