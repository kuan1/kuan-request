process.env.NODE_ENV = 'production'
process.env.EXTRACT_CSS = '0'
process.env.DISCARD_HTML = '0'

const path = require('path')
const { buildLib: build } = require('kuan-pack')

build({
  distPath: path.resolve(__dirname, 'lib')
})
