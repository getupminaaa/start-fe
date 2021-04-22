// 박스와 마우스 사이의 거리
const $box = document.getElementById('box');

let mousePressed = false;

function mouseDown(event) {
  mousePressed = true;
}
// 드래그 시작
function mouseMove(event) {
  var mousePosX = event.clientX;
  var mousePosY = event.clientY;
  if (mousePressed) {
    $box.style.left = `${mousePosX}px`;
    $box.style.top = `${mousePosY}px`;

    console.log(mousePosX, mousePosY);
  }
}
// 박스가 마우스커서를 따라감
function mouseUp() {
  mousePressed = false;
}
// 클릭 해지하면 드래그 멈춤

$box.addEventListener('mousedown', mouseDown);
window.addEventListener('mousemove', mouseMove);
$box.addEventListener('mouseup', mouseUp);
