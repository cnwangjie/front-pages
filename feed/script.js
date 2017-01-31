var sites = document.getElementById('sites')
var panel = document.getElementById('panel')
var deleteFeed = document.getElementById('delete-feed')
var editFeed = document.getElementById('edit-feed')
var addTags = document.getElementById('add-tags')
var siteList = document.getElementsByClassName('site-item')
var siteListPanel = document.getElementById('site-list')
siteListPanel.style.height = window.innerHeight - 38 - 38 + 'px'
window.onresize = () => {
  siteListPanel.style.height = window.innerHeight - 38 - 38 + 'px'
}
var mouseOnList = false
var mouseOnSite = false
document.body.oncontextmenu = function (e) {
  if (mouseOnList) {
    return false
  }
}
sites.onmouseover = function () {
  mouseOnList = true
}
sites.onmouseout = function () {
  mouseOnList = false
}
siteListPanel.onmousedown = function (e) {
  if (e.button == 2) {
    panel.style.left = e.clientX + 'px'
    panel.style.top = e.clientY + 'px'
    if (mouseOnSite) {
      deleteFeed.style.display = ''
      editFeed.style.display = ''
      addTags.style.display = ''
    } else {
      deleteFeed.style.display = 'none'
      editFeed.style.display = 'none'
      addTags.style.display = 'none'
    }
    panel.style.display = ''
  } else if (e.button == 0) {
    panel.style.display = 'none'
  }
}

for (var i = 0; i < siteList.length; i += 1) {
  siteList[i].onmouseover = function () {
    mouseOnSite = true
  }
  siteList[i].onmouseout = function () {
    mouseOnSite = false
  }
}
