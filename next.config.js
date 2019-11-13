const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack: (config, options) => {
    config.module.rules.push({
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      })

    return config
  }
})