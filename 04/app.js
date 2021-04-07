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

const span = document.createElement('span');
const textNode = document.createTextNode('hello!'); 
span.appendChild(textNode);
document.querySelector('#debug').appendChild(span);


//dom 제거
var debug = document.getElementById('debug');
debug.remove();

const list = document.getElementById('list'); 
list.removeChild(list.children[0]);


//Event 등록

document.body.addEventListener('click',function(){
    console.log('click');
});

document.querySelector('.box').addEventListener('click',function(){
    console.log('click');
});

/Callback 함수
function clickBody(){
    console.log('click')
}       // 모듈화 가능, 재사용 가능

document.querySelector('.box').addEventListener('click',clickBody);

var clickCount = 0;
function popup(event){
    console.log(++clickCount);
    console.log(arguments, this ,event ,event.type,event.currentTarget);
}
document.body.addEventListener('click',popup)


//Event 위임 패턴

var list = document.querySelector('#list');
console.log(list.children);


for(var i =0; i<list.children.length; i++){
    list.children[i].addEventListener('click',function (){
        console.log(1)
    })
}

var app = document.getElementById("list");

app.addEventListener("click", function(event) {
    if(event.target.nodeName == "LI"){
        console.log(2);
    }
});

 

//Event 전파 중지
 
var app = document.getElementById("list");

app.addEventListener("click", function(event) {
    if(event.target.nodeName == "LI"){
        console.log(2);
    }
    event.stopPropagation();
});
document.body.addEventListener('click',function () {
    console.log('body');
});

window.onload = function () {
    var link = document.querySelector('#link');
    link.addEventListener('click', function () {
        console.log('abc');
        event.preventDefault();
    })
}

*/

