const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

const csvConfig = {
  test: /\.csv$/,
  loader: 'csv-loader',
  options: {
    dynamicTyping: true,
    header: true,
    skipEmptyLines: true
  }
}

module.exports = withPlugins([
  [withCSS],
  [withMDX, {
    pageExtensions: ['js', 'jsx', 'md', 'mdx']
  }]
], {
  webpack: (config, options) => {
    config.module.rules.push(csvConfig)

    return config
  }
})