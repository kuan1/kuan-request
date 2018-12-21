process.env.NODE_ENV = 'production'

const path = require('path')
const { buildLib: build } = require('kuan-pack')

build({
  distPath: path.resolve(__dirname, 'lib'),
  libName: 'kuan-request',
  htmlTemplate: false,
  extractCss: false
})
