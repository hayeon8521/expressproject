//execute_module.js
const cal = require('./calculator.js');   //자바스크립트 당겨옴 이렇게 불러와야 모듈로 인식함
const { add } = require('./calculator.js');  // 난 모듈화 한것중에 더하기만 필요하다

//모듈 전체 당겨오는거
let result = cal.add(10,5);   //상수.함수

console.log(result);

/*
let result2 = cal.divide(10,5);  //cal.divide is not a function 오류뜸
console.log(result2);
*/

//당장 필요한것만 가져오는거
result = add(20,50); //함수
console.log(result);
console.log('abc');