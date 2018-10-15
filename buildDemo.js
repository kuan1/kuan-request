process.env.NODE_ENV = 'production'

const path = require('path')
const { build } = require('kuan-pack')

build({
  entry: path.resolve(__dirname, 'test')
})
