
/*
//const와 let 
let a = 'aa';
const b = 'bb';
console.log(a);
b='aa';  // 재할당 안됨
console.log(b); 
*/

/* 
//템플릿 표현식
var str = `aaaas`
const s = `sssss`
console.log(str,s); 
*/

/* 
//기본매개변수
function sum(x,y=1) {
    return x + y;
}
console.log(1,2);
 */

/* 
//화살표 함수
const arr = [1, 2, 3];
const newArr = arr.map((item) => item + 1);
console.log(newArr);
document.getElementById('box').addEventListener("click",(event) => console.log(1)); 
*/

/* 
//전개구문
function sum(x, y, z) {
    return x + y + z;
  }
  const numbers = [1, 2, 3];
  console.log(sum(...numbers));
*/
//
/* 
//Rest 파라미터
function func(...param) {
    console.log(param);
  }
  
  func(1, 2, 3); 
*/

/* 
//구조분해할당
const words = ['a','b'];
const[c1,c2] = word;
console.log(c1)
console.log(c2) 
*/

/* 
//향상된 객체 리터럴
const number = 1234;
const student ={
    number,
}; 
*/