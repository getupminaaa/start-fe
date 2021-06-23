const $box = document.querySelector('.box');
const $bug = document.getElementById('bug');
const $point = document.getElementById('point');
const $life = document.getElementById('life');
let isBugAlive = true;

function placeBoxRandom() {
  $bug.style.left = `${
    Math.random() * ($box.clientWidth - $bug.clientWidth)
  }px`;
  console.log($bug.style.left);
  $bug.style.top = `${
    Math.random() * ($box.clientHeight - $bug.clientHeight)
  }px`;
  isBugAlive = true;
}

function alertGameOver() {
  alert('game over');
}

function getPoint() {
  $point.textContent = parseInt($point.textContent) + 1;
}
function lostLife() {
  if (parseInt($life.textContent) === 0) {
    alertGameOver();
    return;
  }
  $life.textContent = parseInt($life.textContent) - 1;
}

function missBug() {
  if (isBugAlive === true) {
    lostLife();
  } else {
    placeBoxRandom();
  }
}
function catchBug() {
  if (isBugAlive === true) {
    getPoint();
    isBugAlive = false;
  }
}

$box.addEventListener('click', missBug);
$bug.addEventListener('click', catchBug);
