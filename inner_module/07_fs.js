// 07_fs.js
//비동기 방식이여서 코드가 다 끝나고 완료된다
const fs = require('fs');

const data = 'Hello, World!!';

//여기서 파일을 사용하고 있기때문에
fs.writeFile('./sample.txt', data, 'utf-8', (err)=>{
   if(err) {
      throw err;
   }
   console.log('파일쓰기 완료!');
});

//여기서은 파일을 읽을수 없다 즉 비동기작업은 맞지만 얘내들은 동기형태로 작업실행이 된다
fs.readFile('./sample.txt', 'utf-8', (err, result)=>{  //utf16le
   if(err){
      throw err;
   }
   console.log(result);
});

console.log('작업 종료');