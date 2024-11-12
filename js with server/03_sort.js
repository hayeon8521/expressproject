// 03_sort.js

//sort => 문자열을 정렬하는 함수!!!
//그래서 숫자는 이상해짐
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.sort(); //오름차순 정렬 //배열의 원본데이터가 변경됨!!
console.log(fruits);
fruits.reverse();
console.log(fruits);

//숫자여도 강제로 문자로 인식하여 정렬함
let points = [40, 100, 1, 5, 25, 10];
console.log(points);
points.sort(); //[ 1, 10, 100, 25, 40, 5 ] 문자로 인식하여 첫글자 정렬, 두번쨰글자정렬, 세번쨰글짜정렬
console.log(points);
//★숫자는 함수 사용해서 재정의 해줘야함
//points.sort( (a, b) => a-b );
points.sort( function(a, b){
   return a - b;  //음수일경우에만 위치를 변경한다 라는 의미
   //★ 객체 정렬할때도 이걸로 사용함
});
console.log(points);

//객체의 정렬 (숫자의 정렬과 같음)
let emps = [
   { eid : 200,
      name : "King"
   },
   { eid : 100,
      name : "Edward"
   },
   { eid : 300,
      name : "Han"
   }
];
console.log(emps);
emps.sort( (pre, next)=>{
   return pre.eid - next.eid;
} );
console.log(emps);