# kuan-request

> 针对幻熊科技后台数据结构，简单包装一下 axios，添加全局 loading，错误处理

## 使用

```js
import { createApi } from 'kuan-request'

const request = createApi({
  // loadingCtrl: () => {}, // 自定义loading
  // toast: () => {}, // 自定义提示
  getHeaders: () => ({ aa: 11 }), // 动态设置headers
  handleError: (status, msg, error) => console.log(status, msg, error), // 自定义错误处理
  createOptions: { headers: { bb: 22 } }, // axios默认设置
  alertDetail: true, // 提示详细信息
  shouldAlert: true, // 是否错误提示
  shouldLoading: true // 是否loading
})

function test() {
  request({
    url: '/api/test'
  }).then(data => {
    const _div = document.createElement('div')
    _div.innerHTML = `<h3>${JSON.stringify(data)}</h3>`
    document.body.appendChild(_div)
  })
}

test()
```

## 更新

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
