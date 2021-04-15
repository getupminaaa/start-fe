const $box = document.querySelector(".box");
const $redBox = document.getElementById("bug");
const $point = document.getElementById("point");
const $life = document.getElementById("life");
let isRedBoxAlive = true;

function placeBoxRandom(){
    $redBox.style.left = `${Math.random()* ($box.clientWidth-$redBox.clientWidth)}px`;
    $redBox.style.top = `${Math.random()* ($box.clientHeight-$redBox.clientHeight)}px`;
    isRedBoxAlive = true;
}

function getPoint(){
    $point.textContent = parseInt($point.textContent) +1;
}
function lostLife(){
    if($life.textContent == 0){
        alertGameOver
        return;
    }
    $life.textContent = parseInt($life.textContent)-1;
}
function alertGameOver(){
        alert("game over");
}

function missRedBox(){
    if(isRedBoxAlive){
        lostLife();
    }else{
        placeBoxRandom();
    }
}
function catchRedBox(){
    if(!isRedBoxAlive){
        getPoint()
        isRedBoxAlive = false;
    }
}


$box.addEventListener("click", missRedBox);
$redBox.addEventListener("click",catchRedBox);