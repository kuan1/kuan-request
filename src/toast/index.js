/**
 * author luzhongk@126.com
 * 简单的提示
 */

import './index.less'

function show(text = '', delay = 2000) {
  if (typeof document === 'undefined') return
  let container = document.getElementById('kuan-toast')
  if (!container) {
    container = document.createElement('div')
    container.id = 'kuan-toast'
    document.body.appendChild(container)
  }
  container.style.display = 'flex'
  const target = document.createElement('div')
  target.className = 'toast-item'
  target.textContent = text
  container.appendChild(target)
  hide(delay, target)
}

function hide(delay = 300, target) {
  if (typeof document === 'undefined') return
  setTimeout(() => {
    const container = document.getElementById('kuan-toast')
    if (!container) return
    if (!target) {
      container.innerHTML = ''
    } else {
      container.removeChild(target)
    }
    if (!container.getElementsByClassName('toast-item').length) {
      container.style.display = 'none'
    }
  }, delay)
}

export default show
