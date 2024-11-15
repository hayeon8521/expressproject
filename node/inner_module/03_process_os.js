// 03_process_os.js
//프로세스 환경변수
const process = require('process');
const os = require('os');

//확인해보면 객체임 필요한건 불러오거나 수정하면됨
console.log(process.env);

console.log("자바홈", process.env.JAVA_HOME);

console.log(os.cpus()); //CPU 코어 정보
console.log(os.tmpdir());  //임시 저장 경로
