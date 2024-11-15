// 02_timers.js

//정해진 시간뒤에 "1번"만 실행함
const timeout = setTimeout(() => {
   let today = new Date();
   let year = today.getFullYear();
   let month = ('0' + (today.getMonth()+1)).slice(-2);
   let day = ('0' + today.getDay()).slice(-2);

   let hour = ('0' + today.getHours()).slice(-2);
   let minute = ('0' + today.getMinutes()).slice(-2);

   let current = `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;

   console.log(current);

}, 2000);


//1초마다 계속 실행 ( 주기적으로 확인할때 쓰는건 따로있음 = 작업스케쥴러 )
//이건 아님
let count = 0;
const interval = setInterval(() => {
   console.log('interval %d', count++);
   if(count == 3){
      clearInterval(interval);   //반드시 ID값이 있어야지 정지 시킬수있따
   }
}, 1000);

//프로세스가 끝나는 시점에 실행됨
const immediate = setImmediate(()=>{
   console.log('즉시 실행 요청');
});

//프로세스가 끝나는 시점이 이거임
console.log('마지막 코드');