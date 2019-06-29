# kuan-request

> 针对幻熊科技后台数据结构，简单包装一下 axios

- 添加 loading、toast、缓存、401 登陆后再次尝试等功能

## 使用

### 安装

```bash
yarn add kuan-request
```

### 创建 request 对象

```js
import { encrypt, createApi } from 'kuan-request'

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
    const key = ''
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
```

### 使用

```js
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
```

## 更新

1.1.6

- 修改加密库 js-sha256
- 升级打包工具

  1.1.5

- 增加加密功能

  1.1.0

- 支持多个错误提示
- 封装逻辑整理
- 更多注释

  1.05

- loading、fix other

  1.04

- 发生错误隐藏 loading

  1.03

- 返回服务端下的数据下一级 data

  1.02

- loading bug fix
- 升级 kuan-pack 版本

  1.01

- readme
