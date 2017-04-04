var i18nmsg = {
  msg0: {
    cn: '我是王孑，欢迎访问我的个人主页。你可以在下面这些地方找到我',
    en: 'I\'m Wang Jie. I\'m a student living in China Mainland. I\'m interested in web development, algorithm and gaming. Here is my home page. You can learn me more by following links.'
  },
  msg1: {
    cn: '你可以通过以下方式联系我',
    en: 'If you want to contact me, you can try following ways.'
  }
}

function changelang(lang) {
  for (let id in i18nmsg) {
    document.getElementById(id).innerHTML = i18nmsg[id][lang]
  }
}

window.onhashchange = function() {
  changelang(document.location.hash.substr(1))
}

var mail = document.getElementsByClassName('code')[0]
mail.onmouseover = function(e) {
  mail.innerHTML = atob(mail.innerHTML)
  mail.onmouseover = undefined
}

function bg() {
  var container = document.getElementsByClassName('container')[0]
  if (window.innerHeight < window.innerWidth) {
    container.style.backgroundImage = 'url(https://unsplash.it/1080/600/?random)'
  } else {
    container.style.backgroundImage = 'url(https://unsplash.it/600/1080/?random)'
  }
}

bg()

function yy() {
  fetch('https://api.lwl12.com/hitokoto/main/get').then(data => data.text()).then(data => {
    document.getElementById('yy').innerHTML = data
  })
}

yy()
