var a = document.getElementsByClassName('code')[0]
a.onmouseover = function(e) {
  a.innerHTML = atob(a.innerHTML)
  a.onmouseover = undefined
}
