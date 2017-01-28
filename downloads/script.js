var inputform = document.getElementById('search-form').getElementsByTagName('input')[0];
var cancel = document.getElementById('cancel-icon');
var label = document.getElementById('search-form').getElementsByTagName('label')[0];
var nofound = document.getElementById('no-downloads');
var items = [
  '1.file',
  '2.file',
  '3.file',
  'Download.html'
];
inputform.focus()
function search() {
  if (inputform.value == '') {
    cancel.style.display = 'none';
    label.style.display = '';
  } else {
    cancel.style.display = '';
    label.style.display = 'none';
  }
  var display = [];
  var found = false;
  for (var i = 0; i < items.length; i += 1) {
    if (items[i].match(new RegExp(inputform.value, 'i')) != null) {
      document.getElementById(items[i]).style.display = '';
      found = true;
    } else {
      document.getElementById(items[i]).style.display = 'none';
    }
  }
  if (found) {
    nofound.style.display = 'none';
  } else {
    nofound.style.display = '';
  }

}
var searchicon = document.getElementById('search-icon').getElementsByTagName('g')[0]
inputform.onfocus = function () {
  searchicon.style.opacity = 1;
}

inputform.onblur = function () {
  searchicon.style.opacity = 0.7;
}

function focusinput() {
  inputform.focus()
}

function clearinput() {
  cancel.style.display = 'none';
  label.style.display = '';
  inputform.value = '';
  inputform.focus();
  search();
}
var addForm = document.getElementById('addbutton').getElementsByClassName('form')[0];
function showAddForm() {
  addForm.style.display = '';
  addForm.style.right = '128px';
  addForm.style.bottom = '16px';
}

function hideAddForm() {
  addForm.style.display = 'none';
}

var title = addForm.getElementsByClassName('title')[0];
title.onmousedown = function (e) {
  if (e.button == 0) {
    title.px = e.clientX + addForm.style.right.substr(0, addForm.style.right.indexOf('p')) * 1;
    console.log(title.px)
    title.py = e.clientY + addForm.style.bottom.substr(0, addForm.style.bottom.indexOf('p')) * 1;
    title.bepress = true;
  }
}

document.onmouseup = function (e) {
  if (e.button == 0) {
    title.bepress = false;
  }
}
// r = or - (n - o)
document.onmousemove = function (e) {
  if (title.bepress) {
    addForm.style.right = title.px - e.clientX + 'px';
    addForm.style.bottom = title.py - e.clientY + 'px';
    console.log(addForm.style.right + '  ' + addForm.style.bottom)
  }
}
