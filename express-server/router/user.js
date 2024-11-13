// router/user.js
// 계정과 관련된 기능을 추가

//app.js 에서 다처리안하고 이렇게 기능별로 떼어내서 사용
const express = require('express');
const router = express.Router(); //선언해주고

// /user + / => /user/
router.get('/', (req, res)=>{ //이게 localhost/ 이 아니고 localhost/user/ 임
   res.send('회원 정보 조회');
});

router.post('/insert', (req, res)=>{
   res.send('회원 등록');
});


//get으로 라우팅한것들을 넣어주는거임
//모듈식 라우터라고 하는것
module.exports = router;   //익스포트 해줘야함
//해당코드 뒤에 작성하는건 사실상 죽은 코드임