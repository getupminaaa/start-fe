/*
#2차시 수업내용

console.log('app.js');

번수---
var name = '강민아';
var Name = '강민아';

console.log(name);
console.log(Name);

var var = 'test'; 예약어는 변수명으로 사용불가

주석---
//은 한 줄 


데이터 타입---
var count = 1;
console.log(count);

var isMan = true; //bool
var isMan = 'true'; //String

console.log(isMan);

함수 ---
function log(str){
    console.log(str);
}
log('hello')

var log =function(str){
    console.log(str);
}
log('hello');

#3차시 수업내용

객체---

객체 사용 X)
var imageWidth = 100;
var imageHeight = 100;
var imageName = '1.png';

console.log(image)

객체 사용 O)
var image = {
    width: 100,
    height: 100,
    name:'1.png'
};

var image = {
    width: 100,
    height: 100,
    name:'1.png'
};

배열---

var image1=[];

console.log(image,image1);

var image1 = [1,2,'e',3,4,'rrf',{}];
image1[0] = 'a';

console.log(image1);

null, undefined---

var data = null;
var data1 = '';
var data2;

console.log(data,data1,data2);

주요연산자---
+
console.log(1+2);
console.log('a'+'b');

 // 서로 다른 데이터 타입 붙이는거는 지양 (예상하지 못한 문제 발생 가능)
console.log(1+'4'); //결과 = 14

var count =1;
var number ='2';
console.log(count+number); //결과 = 12

==,=== (동등연산자 말고 일치연산자 쓰는 것을 습관화)
console.log(1 == 1); //true
console.log(0 == ''); //true
console.log(0 === ''); //false

논리곱 - 둘 다 참일 떼 true 반환
논리합 - 둘 중 하나 참일 때 true 반환
논리부정)
var isHero = true;

if(!isHero){
    console.log('hero');
}

데이터 타입---

console.log(typeof 1); //number
console.log(typeof {}); //object
console.log(typeof []); //object

*/

