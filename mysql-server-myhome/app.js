//익스프레스 서버 설정
//여러가지 호출 및 서버초기화, 라우팅, 엔드포인트 설정

const express = require('express');
const app = express();
const mysql = require('./mapper');

//주고받을 데이터 셋
app.use(express.json());

//서버 초기 설정
app.listen(3000, ()=>{
    console.log('Server Start');
    console.log('http://localhost:3000');
 });

 //전체조회
app.get('/user', async (req, res)=>{
    let list = ( await mysql.query('userList') );
    res.send(list);
});

 //단건조회
app.get('/user/:user_no', async(req,res)=>{
    let selected = req.params.user_no;
    let list = ( await mysql.query('userInfo', selected) );
    res.send(list);
});

 //등록
 app.post('/user', async (req, res)=>{
    let newOjb = req.body;
    let list = ( await mysql.query('userInsert', newOjb) );
    res.send(list);
 });

 //수정
app.put('/user/:user_no', async(req, res)=>{
    let userarray = [];
    let selected = req.params.user_no;
    let selectedbody = req.body;
    userarray.push(selectedbody, selected);
    let list = await mysql.query('userUpdate', userarray);
    res.send(list);
});

 //삭제
 app.delete('/user/:user_no', async(req,res)=>{
    let selected = req.params.user_no;
    let list = ( await mysql.query('userDelete', selected) );
    res.send(list);
});