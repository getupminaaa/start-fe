// 벌레 못잡으면 생명 -1, 타이머 리셋
// 벌레 잡으면 점수 +1, 타이머 리셋
// 타이머 진행중
const $box = document.querySelector('.box');
const $bug = document.getElementById('bug');
const $point = document.getElementById('point');
const $life = document.getElementById('life');
const intervalTime = 1500;
let timerFunc;

function replaceRandom() {
  $bug.style.left = `${
    Math.random() * ($box.clientWidth - $bug.clientWidth)
  }px`;
  console.log($bug.style.left);
  $bug.style.top = `${
    Math.random() * ($box.clientHeight - $bug.clientHeight)
  }px`;
}

function bugClick() {
  if (parseInt($life.textContent) === 0) {
    alertGameOver();
    clearInterval(timerFunc);
  }
  $point.textContent = parseInt($point.textContent) + 1;
  replaceRandom();
  clearInterval(timerFunc);
  timerFunc = setInterval(function () {
    replaceRandom();
  }, intervalTime);
}

function boxClick() {
  if (parseInt($life.textContent) === 0) {
    alertGameOver();
    clearInterval(timerFunc);
  }
  $life.textContent = parseInt($life.textContent) - 1;
  clearInterval(timerFunc);
  timerFunc = setInterval(function () {
    replaceRandom();
  }, intervalTime);
}
function alertGameOver() {
  //event 제거 클릭
  clearInterval(timerFunc);
  $bug.removeEventListener('click', bugClick);
  $box.removeEventListener('click', boxClick);
  alert('game over');
}

timerFunc = setInterval(() => {
  replaceRandom();
}, intervalTime);

$box.addEventListener('click', () => {
  boxClick();
});
$bug.addEventListener('click', (event) => {
  bugClick();
});
