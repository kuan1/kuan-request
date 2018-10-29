import Requeset from '../src'

const requestObj = new Requeset({
  // getHeaders: () => {
  //   // return { Authorization: 'bWFuYWdlciwx' }
  // },
  handleError: (status, msg, error) => console.log(status, msg, error) // 自定义错误处理
  // loading: loadingCtrl, // 自定义loading
  // toast: Toast, // 自定义提示
  // alertDetail: true // 显示详细报错信息
})

const request = requestObj.create({})

request({
  url: '/api/manager/login',
  method: 'post',
  data: {
    password: 'alan',
    username: 'cpc@8023'
  }
}).then(data => {
  const _div = document.createElement('div')
  // _div.innerHTML = `<h3>${JSON.stringify(data)}</h3>`
  document.body.appendChild(_div)
})
