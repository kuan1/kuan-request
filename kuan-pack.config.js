const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'test'),
  proxy: {
    '/api': {
      target: 'https://www.luzhongkuan.cn',
      changeOrigin: true
    }
  }
}
