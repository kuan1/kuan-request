import { encrypt, createApi } from '../src'

const key = '1234'

const request = createApi({
  /* 自定义loading */
  // loading: () => {},

  /* 自定义提示 */
  // toast: () => {},

  /* 自定义错误处理 */
  // handleError: () => {},

  /* axios默认配置 */
  // createOptions: {
  //   baseURL: 'https://test.com'
  // },

  /* 返回401登陆之后再次尝试发送请求 */
  // loginForce() {
  //   console.log('登录逻辑')
  // },

  // 动态设置 headers
  setHeaders(config) {
    const { params = {}, data = {} } = config
    const token = ''
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

window.test = async () => {
  const data = await request(
    {
      url: '/api/200'
    },
    {
      shouldCache: true,
      shouldToast: true,
      shouldLoading: true
    }
  )
  console.log(data)
}
