// app.js
//노드 기반 서버 구축 기본 폼
//★개 핵심임 이거 알면 됨!!!
const express = require('express');
const app = express();

//서버가 제공하는 서비스
app.get('/', (req, res)=>{ //(req, res) 약어 request, response
   res.send('Server Connect');
});

//해당 메소드를 이용해서 콜백함수를 실행해서 결과를 지켜볼수있따
app.listen(3000, ()=>{
   console.log('서버가 실행됩니다.');
   console.log('http://localhost:3000');
});