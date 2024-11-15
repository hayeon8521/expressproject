// 06_crypto.js
//암호화 방식

const crypto = require('crypto');
const data = 'pw1234';

//암호화 알고리즘
let encData = crypto.createHash('sha512')
                     .update(data)
                     .digest('hex');   // base32 base64 hex

encData = encData+2/2*5;
console.log(encData);