// 04_path.js
//경로 확인하는거 ( 전역변수, 절대경로 )
console.log(__filename);   //현재 파일위치   //언더바 2개임
console.log(__dirname);    //현재파일의 디렉토리 정보   //언더바 2개임

const path = require('path');
console.log('실제 디렉토리정보', path.dirname(__filename));
console.log('실제 파일명 : %s', path.basename(__filename));
console.log('확장자 :  %s', path.extname(__filename));