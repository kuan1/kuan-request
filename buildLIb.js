process.env.NODE_ENV = 'production'

const path = require('path')
const { buildLib: build } = require('kuan-pack')

build({
  extend(config) {
    config.entry = {
      'kuan-request': path.resolve(__dirname, 'src')
    }
    config.output.path = path.resolve(__dirname, 'lib')
  }
})
