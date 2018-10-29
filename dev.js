process.env.NODE_ENV = 'development'

const path = require('path')
const { dev } = require('kuan-pack')

dev({
  entry: path.resolve(__dirname, 'test'),
  proxy: {
    '/api': {
      target: 'http://140.143.3.30:8089',
      changeOrigin: true
    }
  }
})
