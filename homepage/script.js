var mail = document.getElementsByClassName('code')[0]
mail.innerHTML = atob('aUBpOGUubmV0')

function fetchimg() {
  const url = window.innerHeight < window.innerWidth ?
    'https://unsplash.it/1080/600/?random' :
    'https://unsplash.it/600/1080/?random'

  return fetch(url)
    .then(d => d.blob())
    .then(d => URL.createObjectURL(d))
}

function changebg() {
  const bg = document.getElementById('bg')
  const newItem = document.createElement('div')
  fetchimg()
    .then(d => {
      newItem.style.backgroundImage = `url(${d})`
      newItem.setAttribute('class', 'cur')
      bg.appendChild(newItem)
      setTimeout(() => {
        newItem.style.opacity = '1'
        setTimeout(() => {
          changebg()
        }, 6000)
      }, 1000)
    })
}

changebg()
