import './index.less'

let timer

function show({ text = '', delay = 10000000 } = {}) {
  if (timer) clearTimeout(timer)
  let container = document.getElementById('kuan-loading')
  if (!container) {
    container = document.createElement('div')
    container.id = 'kuan-loading'
    document.body.appendChild(container)
  }
  container.innerHTML = `
    <div class="spinner-snake"></div>
    <span class="loading-tip">${text}</span>
  `
  container.style.display = 'flex'
  setTimeout(hide, delay)
}

function hide() {
  const container = document.getElementById('kuan-loading')
  if (container) {
    container.style.display = 'none'
  }
}

export default {
  show,
  hide
}
