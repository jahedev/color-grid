const table = document.querySelector('.table');

var mouseEvents = {
  down: false,
  left: false,
};

window.onmousedown = function () {
  mouseDown = true;
};
window.onmouseup = function () {
  mouseDown = false;
};
