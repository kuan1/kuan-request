/**
 * author luzhongk@126.com
 * 简单的loading控制
 */

import './index.less'

let timer

function show({ text = '', delay = 10000000 } = {}) {
  if (typeof document === 'undefined') return
  if (timer) clearTimeout(timer)
  let container = document.getElementById('kuan-loading')
  if (!container) {
    container = document.createElement('div')
    container.id = 'kuan-loading'
    document.body.appendChild(container)
  }
  container.innerHTML = `
    <div class="spinner-wrap">
      <div class="spinner-snake"></div>
      <span class="loading-tip">${text}</span>
    </div>
  `
  container.style.display = 'flex'
  setTimeout(hide, delay)
}

function hide() {
  if (typeof document === 'undefined') return
  const container = document.getElementById('kuan-loading')
  if (container) {
    container.style.display = 'none'
  }
}

export default {
  show,
  hide
}
