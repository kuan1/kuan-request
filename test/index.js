import Requeset from '../src'

const requestObj = new Requeset({
  // getHeaders：自定义headers
  handleError: (status, msg, error) => console.log(status, msg, error) // 自定义错误处理
  // loading: loadingCtrl, // 自定义loading
  // toast: Toast, // 自定义提示
  // alertDetail: true // 显示详细报错信息
})

const request = requestObj.create({ baseURL: 'http://api.luzhongkuan.cn' })

request({
  url: '/api/location2'
  // loading: false,
  // alert: false,
}).then(data => {
  const _div = document.createElement('div')
  _div.innerHTML = `<h3>${JSON.stringify(data)}</h3>`
  document.body.appendChild(_div)
})
