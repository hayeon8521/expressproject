// 04_filter_map.js

let persons = [
   {
      name : "유재석",
      point : 78,
      city : "서울",
   },
   {
      name : "김종국",
      point : 92,
      city : "서울",
   },
   {
      name : "양세찬",
      point : 76,
      city : "제주",
   },
   {
      name : "하하",
      point : 81,
      city : "서울",
   }
];

// 1) filter => 원본배열이 가지는 데이터 타입과 같음
// 대신 배열의 크기가 줄어들 가능성이 있음
//점수가 80점 이상인 사람만 가져오기
let scores = persons.filter(function(val, idx){
   return val.point > 80;  //★★★반드시 boolean 타입을 리턴해야함
});
console.log(scores); //값이 줄어든거 확인
//필요한 값만 뽑아낼경우 where

// 2) map => 원본 배열과 데이터 타입이 다를수 있음
// 대신 배열의 크기는 동일
let newList = persons.map(function(val, idx){
   return{
      no : ((idx+1) * 100),
      name : val.name,
      city : val.city
     
   }; //새로운 배열이 가지는 값  //기존이가지고 있던 값과 변경된 데이터형태가 다르다
   // 새롭게 변경해야 첨삭해야할경우 이걸로 // insert // update
   /* 이렇게 쓰면 안됨
   val.no = ((idx+1)*100);
   return val;
   */
});
console.log(newList);

// ★콜백 함수는 무조건 외우고 기억해야함!!!