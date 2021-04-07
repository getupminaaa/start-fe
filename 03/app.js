/* chrome console
var person = {
    nick: 'FE',
    age: 28,
    area: 'jeju',
    hobby: ['js', 'html'],
  }; //undefined

  person // {nick: "FE", age: 28, area: "jeju", hobby: Array(2)}
  person.constructor // ƒ Object() { [native code] }
  person.hasOwnProperty('nick') //true
  person.hasOwnProperty('nick1') //false 
  person.toString() //"[object Object]"

var arr = [1,2,3];
undefined
for(var i = 0; i<arr.length; i++){console.log(arr[i])}; //1,2,3
  */
/*
console.log('app')

//Create
var todos = ['운동'];
var todo = '게임';
todos.push(todo);
console.log(todos);  //(2) ["운동", "게임"]

//Read
todos.forEach(function(todo){

    console.log(todo);
}); //운동 게임

//Update
//case01
var todos = ['운동','게임'];
var updateTodo ='게임';
var updateIndex = todos.findIndex(function(todo){
    return todo === updateTodo;
});
console.log(updateIndex);

todos[updateIndex] = '공부';
console.log(todos); //["운동", "공부"]

//case02
var words = ['a', 'b', 'c'];
var newWords = words.map(function(word) {
  return word + ' ok';
});
console.log(newWords);
var todos = ['운동', '게임'];
var updateTodo = '게임';

var newTodos = todos.map(function(todo) {
  if (todo === updateTodo) {
    return '공부';
  }
  return todo;
});

console.log(newTodos);

//Delete
//case01
var todos = ['운동', '공부', '목욕'];
var deleteTodo = '공부';
var deleteIndex = todos.findIndex(function(todo) {
  return todo === deleteTodo;
});
todos.splice(deleteIndex, 1);
console.log(todos);   //["운동", "목욕"]

//case 02
var todos = ['운동', '공부'];
var deleteTodo = '공부';
var newTodos = todos.filter(function(toods) {
  return todo !== deleteTodo;
});
console.log(newTodos); //팔터에 맞는 조건의 요소들만 새 요소가 됨.
*/

//구문
  
/* if문
var isMan = true;
if(isMan){
    console.log('1');
}else if(!isMan&&isHero){

}

else{
    console.log('2');
}
*/

/*
//퀴즈2
var count=[10,20,30,40,50,60,70,100];
var avg =0;
for(var i = 0; i<count.length; i++){
         avg += count[i];
         console.log(avg)
 }
 avg = avg/count.length;
 console.log(avg); 
//퀴즈 3
 for(var i=1; i<10; i++){
     for(var j =1; j<10; j++){
         console.log( i+'X'+j+'='+i*j);
     }
 }
 */

//주요 전역함수
/*
alert('안녕하세요'); 
var who = prompt('당신은 누구세요?');
console.log(who)
var isDelete = confirm('정말 삭제하시겠습니까?');
console.log(isDelete);

function test() {
    console.log('test()');
  }
  
var id = setTimeout(test, 1000); //1초,  1번실행
  
var id = setInterval(test, 1000); //1초, 계속 실행
*/

//함수
/*
function sum(a,b){
    return a+b;
}
console.log(sum(1,2)); //3
*/

//멤버변수
/*
var car = {
    year: '2014',
    starting: function() {
      console.log('starting..');
    },
  };
  
  car.starting();
  */
//즉시실행함수
/*
  (function(){
    var a = 'a';
    console.log(a);
  })();  //함수가 선언 됨과 동시에 실행
*/

//생략가능 인자
/*
function sum(x, y) {
    if (!y) y = 1;
    console.log(x + y);
  }
console.log(sum(3)); //4
console.log(sum(3,3)); //6
*/

//정규표현식
/*
var text = 'abc def ghi jkl abc def'; 
var testReg = /abc/; 
var result = testReg.test(text);

console.log(result); // true

var testReg = /abc2/; 
var result = testReg.test(text);

console.log(result); // false
*/

//퀴즈1
/*
var table = [];
multiply(8);
function multiply(a){
    for(var i = 1; i<10; i++ ){
        table.push(a*i);
    }return table
}
console.log(table);
*/

//퀴즈2
/*
var flower = {
    species:'rose',
    blooming: function() {
        console.log('blooming rose!... ')
    },
};
flower.blooming();
*/

//퀴즈3
/*
var inputN =[];
var avg = 0;

var add = function(){
    for(var i = 0; i <inputN.length; i++ ){
        avg += inputN[i];
    }
    return avg;
}
while(true){
    input = prompt('더할 숫자를 입력해주세요!');
    if (input == null){
        break;
    }
    else{
        inputN.push(parseInt(input));
    }
}
add();
confirm('지금까지 입력한 값의 총합은 '+avg+" 입니다");

avg = avg/inputN.length;
console.log(avg);
*/

