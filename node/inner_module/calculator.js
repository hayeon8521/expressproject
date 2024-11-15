// calculator.js
//간단한 사칙연산 기능을 가진 모듈

const defaultNum = 1;

function add(x, y){
   return x + y;
}

function minus(x, y){
   return x - y;
}

function multi(x, y){
   return x * y;
}

function divide(x, y){
   return x / y;
}
//위에 선언되어져 있는 영역을 하나의 모듈로 만들어 버림
module.exports = {
   //사용할수있는 대상
   add,  // <= "add" : add 의미임
   "multi" : multi   // 키 / 값  => 다른이름 쓸경우 이렇게하고 // 동일 명칭으로 쓸꺼면 multi로만 적으면된다
};