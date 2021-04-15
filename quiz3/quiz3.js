var red = document.querySelector('.red');

var className = "";
var isRed = false;
var isHide = false;
var isWrite = false;


var $addRed = document.querySelector('.add-red');
var $addBox = document.querySelector('.add-btn');
var $deleteBox = document.querySelector('.delete-btn');
var $resetBox = document.querySelector('.reset-btn');
var $toggleBox = document.querySelector('.toggle-btn');
var $textBox = document.querySelector('.text-btn');
var $inputText = document.querySelector('.txt');
var $imgBox = document.querySelector('.image-btn');


function getRed() {
   var $boxes = document.querySelectorAll('.box');
   isRed = true;
   for (var i = 0; i < $boxes.length; i++) {
      if (!$boxes[i].classList.contains('red')) {
         $boxes[i].classList.add('red');
      }
   }
}
function getBox() {
   let $temp = document.createElement("div");
   $temp.classList.add('box')
   if (isRed) {
      $temp.classList.add('red')
   }
   if(isHide){
      $temp.classList.add('hide');
   }
   if(isWrite){
      $temp.classList.textContent = $inputText.value
   }
   console.log($temp);
   document.body.appendChild($temp);
}
function deleteBox() {
   var $boxes = document.querySelectorAll('.box');
   if ($boxes.length > 0) {
      document.body.removeChild($boxes[$boxes.length - 1])
   }
}
function resetBox() {
   var $boxes = document.querySelectorAll('.box');
   for (var i = $boxes.length - 1; i >= 0; i--) {
      document.body.removeChild($boxes[i])
   }
}

function toggleBox() {
   isHide = !isHide
   var $boxes = document.querySelectorAll('.box');
   for (var i = 0; i < $boxes.length; i++) {
      $boxes[i].classList.toggle('hide');
   }
}
function addText(){
   isWrite = true;
   var $boxes = document.querySelectorAll('.box');
   for(var i = 0; i < $boxes.length; i++){
      $boxes[i].textContent = $inputText.value
   }
}
function imgBox(){
   var $boxes = document.querySelectorAll('.box');
   if($boxes.length == 0){
      getBox();
      $boxes = document.querySelectorAll('.box');

   }
   for(var i = 0; i< $boxes.length; i++){
      let $temp = document.createElement("img");
      // $temp.setAttribute('src','https://i.imgur.com/69NjYBH.png');
      // $boxes[i].textContent = $temp
      $boxes[i].innerHTML = '<img src= https://i.imgur.com/69NjYBH.png>'
   }
}


$addRed.addEventListener('click', getRed);
$addBox.addEventListener('click', getBox);
$deleteBox.addEventListener('click', deleteBox);
$resetBox.addEventListener('click', resetBox);
$toggleBox.addEventListener('click', toggleBox);
$textBox.addEventListener('click',addText);
$imgBox.addEventListener('click',imgBox);