import Requeset from '../src'

const request = (new Requeset()).create()

request({
  url: 'http://api.luzhongkuan.cn/api/location2'
})