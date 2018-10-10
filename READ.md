# kuan-request

```
import Requeset from '../src'

const requestObj = new Requeset({
  // getHeaders：自定义headers
  handleError: (status, msg, error) => console.log(status, msg, error), // 自定义错误处理
  // loading = loadingCtrl, // 自定义loading
  // toast = Toast // 自定义提示
})

const request = requestObj.create()

request({
  url: 'http://api.luzhongkuan.cn/api/location2',
  loading: false,
  alert: false
})
```
