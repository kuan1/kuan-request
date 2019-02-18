const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'test'),
  proxy: {
    '/api': {
      target: 'http://api.luzhongkuan.cn',
      changeOrigin: true
    }
  }
}
