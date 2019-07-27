
const injectMail = () => {
  const mail = document.querySelector('#code')
  mail.innerHTML = atob('aUBpOGUubmV0')
}

const createProgress = () => {
  const progress = document.createElement('div')
  progress.className = 'progress'
  document.body.appendChild(progress)
  return progress
}

const preFetchQueue = []

const fetchRandomImage = () => {
  const url = window.innerHeight < window.innerWidth
    ? 'https://unsplash.it/1080/600/?random'
    : 'https://unsplash.it/600/1080/?random'

  return fetch(url)
    .then(res => res.blob())
    .then(blob => URL.createObjectURL(blob))
}

const preFetchImage = () => fetchRandomImage().then(url => preFetchQueue.push(url))

const getNextImage = () => preFetchQueue.length
  ? preFetchQueue.shift()
  : fetchRandomImage()

const injectBackground = () => {
  const bg = document.createElement('div')
  bg.className = 'bg'
  document.body.appendChild(bg)
  return bg
}

const changeBackground = async bg => {
  const url = await getNextImage()
  const item = document.createElement('div')
  item.style.backgroundImage = 'url(' + url + ')'
  item.className = 'cur'
  bg.appendChild(item)
}

const dynamicBackground = () => {
  const bg = injectBackground()

  if (~location.hash.indexOf('pure')) return

  let timeout
  const loop = async () => {
    await changeBackground(bg)
    preFetchImage()
    timeout = setTimeout(loop, 6e3)
  }
  const pauseLoop = () => timeout != null && clearTimeout(timeout) || (timeout = 0)
  const handleHidden = () => document.hidden ? pauseLoop() : loop()
  document.addEventListener('visibilitychange', handleHidden)

  loop()
}

const init = () => {
  injectMail()
  dynamicBackground()
}

init()

