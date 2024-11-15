// 08_parameter.js
// 1) Default parameter
// [옛날 방식]
function say(message){
   // null 은 직접 개발자가 값을 초기화 한거
   // undefined 는 자바스크립트가 직접 초기화 한거
   if(message != undefined){
      console.log(message);
   }else{
      console.log('매게변수가 넘어오지 않았습니다.');
   }
}
say('Hello!!');
say();

// [지금방식] //코드가 심플해지고 해야할일이 명확해지는게 있음
function printMsg(message = '매게변수가 넘어오지 않았습니다.'){
   console.log(message);
}
printMsg('HELLO!!');
printMsg();

// 2) Rest parameter
// 기본적으로 변수 2개는 무조건 체우고 나머지 매게변수는 ...으로 받는거임 (rests 배열임)
const plus = function(x, y, ...rests){
   let result = x + y;
   for(let rest of rests){
      result += rest;
   }
   return result;
}

console.log(plus(1,2));
console.log(plus(1,2,3,4,5,6));
console.log(plus(1,2,3,4,5,6,7,8,9,10,11,12,13));