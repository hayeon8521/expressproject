// router/user_router.js
const express = require('express');
const router = express.Router();
const userService = require('../service/user_service.js');

// 라우터 파일 분리하는방법

//전체조회
/*
router.get('/users', async (req, res)=>{
   let userLIst = ( await service.findAll() );
   res.send(userLIst);
});
*/
//이렇게 작업 할 수 있음 ( 원래 promise 방식 으로 작업한거 )
router.get('/users', (req, res)=>{
   userService
      .findAll()
      .then(list => {
         res.send(list);
      })
      .catch(err => {
         //내부적 절차에서 에러 났을때 에러 오픈 안하도록 막는거
         res.status(500).send('Fail Process');
      })
});

//단건조회
/*
router.get('/users/:no', async (req, res)=>{
   let userNo = req.params.no;
   let info = await userService.findByNo(userNo);
   res.send(info);
});
*/
// 라우팅 = 사용자의 요청(URL+METHOD) + Service + view

//단건조회
router.get('/users/:no', async (req, res)=>{
   let userNo = req.params.no;
   userService
      .findByNo(userNo)
      .then(list => {
         res.send(list);
      })
      .catch(err => {
         //내부적 절차에서 에러 났을때 에러 오픈 안하도록 막는거
         res.status(500).send('Fail Process');
      })
});

//등록
router.post('/users', async (req, res)=>{
   let userInfo = req.body;
   let result = await userService.createNewUser(userInfo);
   res.send(result);
});

//수정
router.put('/users/:no', async (req, res)=>{
   let userNo = req.params.no;
   let userInfo = req.body;
   let result = await userService.updateUserInfo(userNo ,userInfo);
   res.send(result);
});

//삭제
router.delete('/users/:no', async (req, res)=>{
   let userNo = req.params.no;
   let result = await userService.delUserInfo(userNo);
   res.send(result);
});

module.exports = router;