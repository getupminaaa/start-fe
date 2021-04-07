/*
//window
console.log(window.outerWidth); //해상도 사이즈
console.log(window.name); 
window.open('http://www.daum.net'); //window open

//location
location.href=' '
location.reload

//history
history.back
history.go();
history.forward 

var debug = document.getElementById('debug');
console.log(debug);

var box = document.querySelector('.box');
console.log(box);

var box2 = document.querySelectorAll('.box');
console.log(box2);


//dom 생성 & 삽입
var div = document.createElement('div');
div.style.border = "1px solid #000";
div.innerHTML = "Hello!!";
console.log(div);
document.body.appendChild(div);
*/

const span = document.createElement('span');
const textNode = document.createTextNode('hello!'); 
span.appendChild(textNode);
document.querySelector('#debug').appendChild(span);
