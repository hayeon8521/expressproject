// 06_spread_operator.js (펼침연산자)
// 배열을 하나로 합치는 역활, 문자열도 배열로 바꿀수 있음

let arr1 = [ 4, 5, 6];
let arr2 = [ 1, 2, 3];
//2개를 합쳐서 1개의 배열로 만들려고할때

//기존에 배웠던걸로 하는법
let arr3 = [];
arr1.forEach( val => arr3.push(val) );
arr2.forEach( val => arr3.push(val) );
console.log(arr3);

//펼침 연산자 [스프레드 오퍼레이터] 사용
let newArr = [...arr1, ...arr2];
console.log(newArr);

let str = "CD";
let strAry = [...str];  //[ 'C', 'D' ]
console.log(strAry);

console.log(str[0]); //문자열도 인덱스로 접근 가능함 [이건 그냥 팁 펼침연산자 아님]