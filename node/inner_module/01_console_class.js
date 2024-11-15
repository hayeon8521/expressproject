// 01_console_class.js
// 로그 관련 파일을 만들어서 콘솔화면이아니고
// 파일에 남겨서 확인할수 있음
const fs = require('fs');
const { Console } = require('console');

const logOutput = fs.createWriteStream('./logs/stdout.log');
const errOutpet = fs.createWriteStream('./logs/stderr.log');

//인스턴스 생성해야함
const logger = new Console({ stdout : logOutput, stderr : errOutpet});

let count = 5;
logger.log('count : %d', count);
logger.error(`count : ${++count}`);