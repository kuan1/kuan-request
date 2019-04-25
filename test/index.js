import { encrypt } from '../src'

encrypt({ a: 111, time: 22, b: 33 }, 1234, true)

// import { createApi } from '../src'

// const request = createApi({
//   // loadingCtrl: () => {}, // 自定义loading
//   // toast: () => {}, // 自定义提示
//   getHeaders: () => ({ aa: 11 }), // 动态设置headers
//   handleError: (status, msg, error) => console.log(status, msg, error), // 自定义错误处理
//   createOptions: { headers: { bb: 22 } }, // axios默认设置
//   alertDetail: true, // 提示详细信息
//   shouldAlert: true, // 是否错误提示
//   shouldLoading: true // 是否loading
// })

// function test() {
//   request({
//     url: '/api/test'
//   }).then(data => {
//     const _div = document.createElement('div')
//     _div.innerHTML = `<h3>${JSON.stringify(data)}</h3>`
//     document.body.appendChild(_div)
//   })
// }

// test()
