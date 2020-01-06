const { createSitemapsAndIndex } = require('sitemap')
const path = require('path')

const urls = [
  '/',
  '/now',
  '/blogroll',
  '/about',
]

createSitemapsAndIndex({
  urls: urls,
  targetFolder: path.join(process.cwd(), 'public'),
  hostname: 'https://jblancogl.com',
  cacheTime: 600,
  sitemapName: 'sitemap',
  sitemapSize: 50000,
  gzip: true
})