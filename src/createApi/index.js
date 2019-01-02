/**
 * author luzhongkuan@126.com
 * 针对幻熊科技对axios进行2次封装，添加loading，错误提示，错误处理
 */

import axios from 'axios'
import { default as defaultLoading } from './loadingCtrl'
import { default as defaultToast } from '../toast'

// 状态码对应错误信息
const codeMessage = {
  400: '请求有错误',
  401: '没有权限',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '未找到',
  405: '请求method错误',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误',
  502: '网关错误',
  503: '服务不可用',
  504: '网络超时'
}

const noop = () => {}

export default (options = {}) => {
  const {
    loadingCtrl = defaultLoading, // loading方法
    toast = defaultToast, // 提示方法
    getHeaders = noop, // 动态设置headers
    handleError = noop, // 自定义错误处理
    createOptions = {}, // axios默认设置
    alertDetail = false, // 提示详细信息
    shouldAlert = true, // 是否错误提示
    shouldLoading = true // 是否loading
  } = options

  // 错误处理
  const _handleError = (error = {}) => {
    // 发生错误取消loading
    loadingCtrl.hide()

    // 请求返回信息
    const { status = '', config = {}, data = {} } = error.response || {}

    // 获取错误信息
    const getMessage = status => {
      if (!status) return '网络超时'
      return data.info || data.msg || codeMessage[status] || '请求失败'
    }

    // 提示信息
    const msg = getMessage(status)
    if (msg && config.alert !== false && shouldAlert) {
      let errorMsg = msg
      // 提示详细错误
      if (alertDetail) {
        errorMsg = `${status} ${config.url || ''}：\n ${msg}`
      }
      toast(errorMsg)
    }
    // 自定义错误处理
    handleError(status, msg, error)
  }

  const instance = axios.create(createOptions)
  // 请求拦截
  instance.interceptors.request.use(config => {
    // 动态设置headers
    const headers = getHeaders(config) || {}
    if (config.loading !== false && shouldLoading) loadingCtrl.show()
    Object.entries(headers).forEach(
      ([key, value]) => (config.headers[key] = value)
    )
    return config
  })

  // 返回结果拦截
  instance.interceptors.response.use(
    response => {
      const { data = {} } = response
      if (!data.success && !data.iRet) {
        // 自定义错误
        const message = data.info || data.error || '未知错误'
        const error = new Error(message) // eslint-disable-line
        error.response = response
        // 统一错误处理
        _handleError(error)
        throw error
      }
      loadingCtrl.hide()
      return data.data // 后台返回真实数据
    },
    error => {
      // 统一错误处理
      _handleError(error)
      return Promise.reject(error)
    }
  )

  // 返回axios实例
  return instance
}
