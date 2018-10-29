import axios from 'axios'
import loadingCtrl from './loading'
import Toast from './toast'

class Request {
  constructor(options = {}) {
    const {
      getHeaders = () => ({}),
      loading = loadingCtrl,
      handleError = () => {},
      toast = Toast,
      alertDetail = false
    } = options

    this.getHeaders = getHeaders
    this.handleError = handleError
    this.toast = toast
    this.alertDetail = alertDetail

    this.loadingCount = 0
    this.loadingCtrl = loading
  }
  create(createOptions) {
    let instance
    if (createOptions) {
      instance = axios.create(createOptions)
    }
    // 请求前更改配置
    instance.interceptors.request.use(config => {
      const headers = this.getHeaders(config) || {} // 动态设置headers
      if (config.loading !== false) this.showLoading()
      Object.entries(headers).forEach(
        ([key, value]) => (config.headers[key] = value)
      )
      return config
    })

    // 状态码200处理
    instance.interceptors.response.use(
      response => {
        const { data = {} } = response
        if (!data.success && !data.iRet) {
          // 后台自定义错误
          const message = data.info || data.error || ''
          const error = new Error(message) // eslint-disable-line
          error.response = response
          this._handleError(error)
          throw error
        }
        this.hideLoading()

        return data.data // 针对公司真实数据
        // return response.data
      },
      error => {
        this._handleError(error)
        this.hideLoading()
        return Promise.reject(error)
      }
    )
    return instance
  }
  showLoading() {
    // 显示loading
    this.loadingCount += 1
    if (this.loadingCount === 1) {
      this.loadingCtrl.show()
    }
  }
  hideLoading() {
    // 结束loading
    if (this.loadingCount > 0) this.loadingCount -= 1
    if (this.loadingCount === 0) {
      this.loadingCtrl.hide()
    }
  }
  // 错误处理
  _handleError(error) {
    this.hideLoading()

    const { status = '', config = {}, data = {} } = error.response || {} // 状态吗

    const getMessage = status => {
      const codeMessage = {
        400: '请求有错误',
        401: '没有权限',
        403: '用户得到授权，但是访问是被禁止的。',
        404: '接口地址地址不存在',
        406: '请求的格式不可得。',
        410: '请求的资源被永久删除',
        422: '当创建一个对象时，发生一个验证错误。',
        500: '服务器发生错误',
        502: '网关错误',
        503: '服务不可用',
        504: '网络超时'
      }
      return codeMessage[status] || '请求失败'
    }
    const msg = status
      ? data.info || data.msg || getMessage(status)
      : '网络超时' // 提示信息
    if (msg && config.alert !== false) {
      const errorMsg = this.alertDetail
        ? `${status} ${config.url || ''}：\n ${msg}`
        : msg
      this.toast(errorMsg)
    }
    this.handleError(status, msg, error) // 自定义错误处理
  }
}

export default Request
