// 박스와 마우스 사이의 거리
const $boxes = document.querySelectorAll('.box');
let thisBox = null;
let offset = { x: 0, y: 0 };

function mouseDown(event) {
  thisBox = event.target;
  offset = {
    x: thisBox.clientWidth * 0.5,
    y: thisBox.clientHeight * 0.5,
  };
}
function mouseMove(event) {
  if (thisBox == null) return;
  thisBox.style.left = `${event.clientX - offset.x}px`;
  thisBox.style.top = `${event.clientY - offset.y}px`;
}
function mouseUp() {
  thisBox = null;
  offset = {
    x: 0,
    y: 0,
  };
}

$boxes.forEach((box) => box.addEventListener('mousedown', mouseDown));
window.addEventListener('mousemove', mouseMove);
window.addEventListener('mouseup', mouseUp);
