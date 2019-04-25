import md5 from 'blueimp-md5'
import hash from 'hash.js'

/**
 * 加密
 * @param {Object} params 加密参数
 * @param {String} encryptKey 加密key
 * @param {Boolean} isDebug 是否是开发模式
 */
export default function encrypt(params = {}, encryptKey, isDebug) {
  if (!encryptKey) throw new Error('encryptKey is required')
  const keys = Object.keys(params).sort()
  const sign = keys
    .reduce((collect, key) => {
      let item = params[key]
      if (['number', 'string'].includes(typeof item)) {
        item = (item + '').trim()
      }
      collect.push(item)
      return collect
    }, [])
    .join('')
  const res = hash
    .sha256()
    .update(`${md5(encodeURIComponent(sign))}${encryptKey}`)
    .digest('hex')
  if (isDebug) {
    console.log(sign, res)
  }
  return res
}
