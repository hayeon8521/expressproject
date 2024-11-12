// 05_reduce.js
let points = [40, 100, 1, 5, 25, 10];

// 누적값을 반환하는 함수
let sum = points.reduce((total, currentVal)=>{
   console.log(total);
   return total+currentVal; // 1회차 = 0 + 40
}, 0);   // }, 0); 나는 tatal을 0부터 시작하겠다
console.log(sum);

let total = 0;
for(let point of points){
   total = total + point;
}
console.log(total);