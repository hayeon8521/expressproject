//라우터 안에 있는 user.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('회원 정보 조회');
});

router.post('/insert', (req, res)=>{
    res.send('회원 등록');
});

module.exports = router;