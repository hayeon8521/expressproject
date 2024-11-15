// const.js

//객체를 상수로 선언한다
const user = {
   "id" : "hong",
   "age" : 25
};

user.id = "Kang";
user.age = 30;
user.ssn = "981015";

//상수로 선언했는데도 객체의 값이 변경됨
console.log(user);

//그럼 객체에 상수 선언하는게 무슨 의미냐??
//객체 자체를 변경하는거는 불가능 user = {}; <=오류 생김
//Assignment to constant variable. <=오류내용
//객체가 참조타입이여서 객체가 선언된 위치