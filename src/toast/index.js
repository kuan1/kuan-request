import './index.less'

let timer

function show(text = '', delay = 2000) {
  if (timer) clearTimeout(timer)
  let container = document.getElementById('kuan-toast')
  if (!container) {
    container = document.createElement('div')
    container.id = 'kuan-toast'
    document.body.appendChild(container)
  }
  container.innerHTML = text
  container.style.display = 'block'
  hide(delay)
}

function hide(delay = 300) {
  timer = setTimeout(() => {
    const container = document.getElementById('kuan-toast')
    if (container) {
      container.innerHTML = ''
      container.style.display = 'none'
    }
  }, delay)
}

export default show