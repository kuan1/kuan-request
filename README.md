# kuan-request

> 简单包装一下 axios，添加全局 loading，错误处理

## 使用

```
import Requeset from '../src'

const requestObj = new Requeset({
  // getHeaders：() => {} // 自定义headers
  handleError: (status, msg, error) => console.log(status, msg, error), // 自定义错误处理
  // loading: loadingCtrl, // 自定义loading
  // toast: Toast // 自定义提示
    alertDetail: false // 是否提示详细错误
})

const request = requestObj.create()

request({
  url: 'http://api.luzhongkuan.cn/api/location2',
  // loading: false,
  // alert: false
})
```

## 更新

1.02

- loading bug fix

  1.01

- readme