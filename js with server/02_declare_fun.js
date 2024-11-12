// 02_declare_fun.js

// 1) 함수선언문 (일반적 방식) => var에 가까운 방식
//단점 이름이 중복을 허용해버림
function plus(x, y){
   return (x+y);
}
console.log(plus(1,2,3)); // => 6
//위에꺼 사라지고 중복된 새로운 함수가 선언되어버림
function plus(x,y,z){
   return (x+y+z);
}
//그리고 굳이 따지 자면 이렇게 적혀 있다고 봐야함
var plue = function plus(x,y,z){
   return (x+y+z);
}
console.log(plus(1,2,3)); // => 6
//결국에 마지막 함수 말곤 다 없는코드가 되어버림
//함수는 마지막 함수를 끌어당겨서 언디파인드가 아닌 이걸로 사용함


// 2) 함수표현식 => 변수를 선언하는 방식 ( const )
//이 함수를 누구도 수정할수없도록 막기위해서 이렇게 작성
//이방식으로 작성하면 함수 사용부보다 위에 선언해야함!!
const printMsg = function(keyword){
   return "result : " + keyword;
}

// 3) 화살표 함수(익명함수) => 콜백함수나 이벤트핸들러로 대체로 사용함
// 자바스크립트 ()=>{} [화살표함수라고함]  // 자바 ()->{} [람다식이라고함]
let array = [ 1, 2, 3, 4, 5];
array.forEach( val=> console.log(val) );

array.forEach( (val, idx, array) => {
   let msg = `${idx} : ${val}, ${array}`; //백팁 백커터로 하는 방식 정식명칭 (템플릿 리터럴)
   console.log(msg);
});
//이렇게 되어있는거임
const multi = (x,y) => x*y;
console.log(multi(10,5));
let test = multi(10,5);
console.log(test);