//js with server/declare.js

/*
console.log(x);   //undefined
//x 가 존재는하는데 알수는 없다는걸로 말하는것
//메모리에 존재도하고 미리 초기화 해놓는거
var x = 5;
console.log(x);   //5
var x = 7;
console.log(x);   //7
*/

/*
console.log(x); // 실행하기도 전에 중복코드라고 오류가뜸
//Identifier 'x' has already been declared [오류내용]
//초기화 되기전이라서 접근 못한다고 오류가 발생함
//메모리엔 존재하나 쓰는곳에서 초기화 하기때문에 오류가 발생
//그래서 지역변수로 쓸수 있는거임
let x = 5;
console.log(x);
let x = 7;
console.log(x);
*/
