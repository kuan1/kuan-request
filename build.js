process.env.NODE_ENV = 'production'

const { buildLib: build } = require('kuan-pack')

build()
