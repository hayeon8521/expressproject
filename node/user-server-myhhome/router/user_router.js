const express = require('express');
const router = express.Router();
const userService = require('../service/user_service.js');
const { userInfo } = require('../database/sqls/user.js');

//2가지 호출 방식있음
//전체조회 단건조회에 사용 방식 ( 에러가 발생시 에러 처리를 할 수 있음)
//등록, 수정, 삭제 경우 그냥 기존 방식으로 작성했음

//전체조회
router.get('/users', (req, res)=>{
    userService
        .findAll()
        .then(list => {
            res.send(list);
        })
        .catch(err => {
            res.status(500).send('Fail Process');
        })
});

//단건조회
router.get('/users/:no', (req, res)=>{
    let userNo = req.params.no;
    userService
        .findByNo(userNo)
        .then(list =>{
            res.send(list);
        })
        .catch(err=>{
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