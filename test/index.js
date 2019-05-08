import { encrypt, createApi } from '../src'

const token = ''

const key = ''

const request = createApi({
  // loadingCtrl: () => {}, // 自定义loading
  // toast: () => {}, // 自定义提示
  getHeaders: config => {
    const { params = {}, data = {} } = config
    const now = Date.parse(new Date()) / 1000
    const headers = {
      'X-Halo-App': 'oa-dkp',
      'X-Http-Request-Halo-Time': now,
      'X-Http-Request-Halo-Sign': encrypt(
        { ...params, ...data, time: now },
        key
      )
    }
    if (token) {
      headers.Authorization = `Bearer ${token}`
    }
    return headers
  }
})

request({
  url: '/api/dkp/v1/treasure'
}).then(res => {
  console.log(res)
})
